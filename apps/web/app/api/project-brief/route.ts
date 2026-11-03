import { createHash, randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { validateProjectBrief } from "../../lib/lead-intake";
import {
  HubSpotLeadProvider,
  HubSpotProviderError,
} from "../../lib/server/hubspot-lead-provider";
import { leadIntakeConfiguration } from "../../lib/server/lead-intake-config";
import type {
  LeadSubmission,
  NotificationDelivery,
  NotificationStatus,
} from "../../lib/server/lead-provider";
import { ResendNotificationProvider } from "../../lib/server/resend-notification-provider";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_REQUEST_BYTES = 32_000;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1_000;
const PROCESSING_TTL_MS = 60_000;

type RateEntry = { count: number; resetAt: number };
type ProcessingEntry = { reference: string; expiresAt: number };

const sharedState = globalThis as typeof globalThis & {
  __striveLeadRateLimits?: Map<string, RateEntry>;
  __striveLeadProcessing?: Map<string, ProcessingEntry>;
};

const rateLimits =
  sharedState.__striveLeadRateLimits ??
  (sharedState.__striveLeadRateLimits = new Map());
const processing =
  sharedState.__striveLeadProcessing ??
  (sharedState.__striveLeadProcessing = new Map());

function noStoreHeaders(extra: Record<string, string> = {}) {
  return { "Cache-Control": "no-store", ...extra };
}

function json(
  body: Record<string, unknown>,
  status: number,
  headers: Record<string, string> = {},
) {
  return NextResponse.json(body, {
    status,
    headers: noStoreHeaders(headers),
  });
}

function wantsHtml(request: Request) {
  return (
    request.headers
      .get("content-type")
      ?.includes("application/x-www-form-urlencoded") &&
    request.headers.get("accept")?.includes("text/html")
  );
}

function redirectToForm(
  submission: "received" | "invalid" | "unavailable" | "limited",
) {
  const query = new URLSearchParams({ submission });
  // Keep the browser's origin when the app runs behind a reverse proxy.
  return new NextResponse(null, {
    status: 303,
    headers: noStoreHeaders({
      Location: `/start-a-project?${query.toString()}`,
    }),
  });
}

function clientKey(request: Request) {
  const forwarded = request.headers
    .get("x-forwarded-for")
    ?.split(",")[0]
    ?.trim();
  const address =
    forwarded ||
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-real-ip") ||
    "unknown";
  return createHash("sha256").update(address).digest("hex");
}

function takeRateLimit(request: Request) {
  const now = Date.now();
  const key = clientKey(request);
  const current = rateLimits.get(key);

  for (const [storedKey, entry] of rateLimits) {
    if (entry.resetAt <= now) rateLimits.delete(storedKey);
  }

  if (!current || current.resetAt <= now) {
    const next = { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
    rateLimits.set(key, next);
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1, ...next };
  }

  current.count += 1;
  if (current.count > RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0, ...current };
  }
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX - current.count,
    ...current,
  };
}

function cleanProcessingCache() {
  const now = Date.now();
  for (const [key, entry] of processing) {
    if (entry.expiresAt <= now) processing.delete(key);
  }
}

function idempotencyKey(request: Request, body: Record<string, unknown>) {
  const candidate =
    request.headers.get("idempotency-key") ?? body.idempotencyKey;
  if (
    typeof candidate === "string" &&
    /^[a-zA-Z0-9_-]{16,100}$/.test(candidate)
  ) {
    return candidate;
  }
  return randomUUID();
}

function leadReference(key: string) {
  return `STG-${createHash("sha256").update(key).digest("hex").slice(0, 12).toUpperCase()}`;
}

function parseBody(contentType: string, raw: string) {
  if (contentType.includes("application/json")) {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("invalid_body");
    }
    return parsed as Record<string, unknown>;
  }
  if (contentType.includes("application/x-www-form-urlencoded")) {
    return Object.fromEntries(new URLSearchParams(raw));
  }
  throw new Error("unsupported_media_type");
}

function channelsToRetry(
  duplicate: boolean,
  status: NotificationStatus,
): { internal: boolean; acknowledgment: boolean } {
  if (!duplicate || status === "pending" || status === "both_failed") {
    return { internal: true, acknowledgment: true };
  }
  if (status === "internal_failed") {
    return { internal: true, acknowledgment: false };
  }
  if (status === "acknowledgment_failed") {
    return { internal: false, acknowledgment: true };
  }
  return { internal: false, acknowledgment: false };
}

function deliveryStatus(delivery: NotificationDelivery): NotificationStatus {
  const internalFailed = delivery.internal === "failed";
  const acknowledgmentFailed = delivery.acknowledgment === "failed";
  if (internalFailed && acknowledgmentFailed) return "both_failed";
  if (internalFailed) return "internal_failed";
  if (acknowledgmentFailed) return "acknowledgment_failed";
  return "complete";
}

export async function POST(request: Request) {
  const htmlFallback = wantsHtml(request);
  const origin = request.headers.get("origin");
  const requestUrl = new URL(request.url);
  const protocol =
    request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim() ||
    requestUrl.protocol.replace(":", "");
  const hosts = [requestUrl.host, request.headers.get("host")].filter(
    (host): host is string => Boolean(host),
  );
  const allowedOrigins = new Set([
    requestUrl.origin,
    ...hosts.map((host) => `${protocol}://${host}`),
  ]);
  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite === "cross-site" || (origin && !allowedOrigins.has(origin))) {
    return json(
      { ok: false, message: "This submission origin is not allowed." },
      403,
    );
  }

  const rate = takeRateLimit(request);
  if (!rate.allowed) {
    const retryAfter = Math.max(
      1,
      Math.ceil((rate.resetAt - Date.now()) / 1_000),
    );
    if (htmlFallback) return redirectToForm("limited");
    return json(
      {
        ok: false,
        message:
          "Too many project briefs were submitted. Please try again later.",
      },
      429,
      { "Retry-After": String(retryAfter) },
    );
  }

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_REQUEST_BYTES) {
    return json({ ok: false, message: "The project brief is too large." }, 413);
  }

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).byteLength > MAX_REQUEST_BYTES) {
      return json(
        { ok: false, message: "The project brief is too large." },
        413,
      );
    }
    body = parseBody(request.headers.get("content-type") ?? "", raw);
  } catch (error) {
    const unsupported =
      error instanceof Error && error.message === "unsupported_media_type";
    return json(
      {
        ok: false,
        message: unsupported
          ? "Submit the project brief as JSON or form data."
          : "The project brief could not be read.",
      },
      unsupported ? 415 : 400,
    );
  }

  const key = idempotencyKey(request, body);
  const reference = leadReference(key);
  if (typeof body.companyFax === "string" && body.companyFax.trim()) {
    return json({ ok: true }, 200);
  }

  const validation = validateProjectBrief(body);
  if (!validation.success) {
    if (htmlFallback) return redirectToForm("invalid");
    return json(
      {
        ok: false,
        message: "Review the highlighted fields and submit the brief again.",
        fieldErrors: validation.errors,
      },
      400,
    );
  }

  const configuration = leadIntakeConfiguration();
  if (!configuration) {
    if (htmlFallback) return redirectToForm("unavailable");
    return json(
      {
        ok: false,
        message:
          "The secure project-intake channel is temporarily unavailable. Please email Strive instead.",
      },
      503,
    );
  }

  cleanProcessingCache();
  if (processing.has(key)) {
    return json(
      { ok: false, message: "This project brief is already being processed." },
      409,
      { "Retry-After": "2" },
    );
  }
  processing.set(key, {
    reference,
    expiresAt: Date.now() + PROCESSING_TTL_MS,
  });

  const submission: LeadSubmission = {
    reference,
    submittedAt: new Date().toISOString(),
    brief: validation.data,
  };
  const provider = new HubSpotLeadProvider(configuration);
  const notifications = new ResendNotificationProvider(configuration);

  try {
    const durableLead = await provider.persist(submission);
    const retry = channelsToRetry(
      durableLead.duplicate,
      durableLead.notificationStatus,
    );
    const delivery: NotificationDelivery = {
      internal: retry.internal ? "sent" : "skipped",
      acknowledgment: retry.acknowledgment ? "sent" : "skipped",
    };

    if (retry.internal) {
      try {
        await notifications.notifyInternal(submission, durableLead);
      } catch {
        delivery.internal = "failed";
        console.error("Lead notification failed", {
          reference,
          channel: "internal",
        });
      }
    }
    if (retry.acknowledgment) {
      try {
        await notifications.acknowledge(submission);
      } catch {
        delivery.acknowledgment = "failed";
        console.error("Lead notification failed", {
          reference,
          channel: "acknowledgment",
        });
      }
    }

    const status = deliveryStatus(delivery);
    if (status !== durableLead.notificationStatus) {
      try {
        await provider.recordNotificationStatus(
          durableLead.providerRecordId,
          status,
        );
      } catch {
        console.error("Lead notification status update failed", { reference });
      }
    }

    if (htmlFallback) return redirectToForm("received");
    return json(
      {
        ok: true,
        ...(durableLead.duplicate ? { duplicate: true } : {}),
      },
      durableLead.duplicate ? 200 : 201,
    );
  } catch (error) {
    console.error("Project brief persistence failed", {
      reference,
      reason:
        error instanceof HubSpotProviderError
          ? error.reason
          : "durable_provider_unavailable",
    });
    if (htmlFallback) return redirectToForm("unavailable");
    return json(
      {
        ok: false,
        message:
          "We could not securely store the project brief. Your information was not accepted; please email Strive instead.",
      },
      503,
    );
  } finally {
    processing.delete(key);
  }
}
