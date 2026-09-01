type HubSpotProperties = {
  reference: string;
  service: string;
  projectGoal: string;
  timing: string;
  investment: string;
  contactMethod: string;
  source: string;
  submittedAt: string;
  systems: string;
  originalBrief: string;
  notificationStatus: string;
  retentionReview: string;
};

export type LeadIntakeConfiguration = {
  hubspot: {
    accessToken: string;
    apiBaseUrl: string;
    pipelineId: string;
    newInquiryStageId: string;
    ownerId: string;
    portalId: string;
    properties: HubSpotProperties;
  };
  notifications: {
    apiKey: string;
    apiBaseUrl: string;
    fromEmail: string;
    internalEmail: string;
    replyToEmail?: string;
  };
  retentionDays: number;
  providerAttempts: number;
  providerTimeoutMs: number;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function value(name: string) {
  return process.env[name]?.trim() ?? "";
}

function positiveInteger(name: string, fallback: number, maximum: number) {
  const candidate = value(name);
  if (!candidate) return fallback;
  const parsed = Number(candidate);
  return Number.isInteger(parsed) && parsed > 0 && parsed <= maximum
    ? parsed
    : null;
}

function approvedApiUrl(raw: string, allowLocal: boolean) {
  try {
    const url = new URL(raw);
    if (url.protocol === "https:") return url.toString().replace(/\/$/, "");
    if (
      allowLocal &&
      url.protocol === "http:" &&
      ["127.0.0.1", "localhost", "::1"].includes(url.hostname)
    ) {
      return url.toString().replace(/\/$/, "");
    }
  } catch {
    return null;
  }
  return null;
}

export function leadIntakeConfiguration(): LeadIntakeConfiguration | null {
  if (
    value("LEAD_INTAKE_ENABLED") !== "true" ||
    value("LEAD_INTAKE_OPERATIONS_APPROVED") !== "true" ||
    (value("LEAD_PROVIDER") || "hubspot") !== "hubspot"
  ) {
    return null;
  }

  const allowLocal = value("LEAD_INTAKE_ALLOW_INSECURE_LOCALHOST") === "true";
  const hubspotApiBaseUrl = approvedApiUrl(
    value("HUBSPOT_API_BASE_URL") || "https://api.hubapi.com",
    allowLocal,
  );
  const notificationApiBaseUrl = approvedApiUrl(
    value("RESEND_API_BASE_URL") || "https://api.resend.com",
    allowLocal,
  );
  const providerAttempts = positiveInteger("LEAD_PROVIDER_ATTEMPTS", 3, 3);
  const providerTimeoutMs = positiveInteger(
    "LEAD_PROVIDER_TIMEOUT_MS",
    5_000,
    10_000,
  );
  const retentionDays = positiveInteger("LEAD_RETENTION_DAYS", 365, 3_650);

  const properties: HubSpotProperties = {
    reference: value("HUBSPOT_REFERENCE_PROPERTY"),
    service: value("HUBSPOT_SERVICE_PROPERTY"),
    projectGoal: value("HUBSPOT_PROJECT_GOAL_PROPERTY"),
    timing: value("HUBSPOT_TIMING_PROPERTY"),
    investment: value("HUBSPOT_INVESTMENT_PROPERTY"),
    contactMethod: value("HUBSPOT_CONTACT_METHOD_PROPERTY"),
    source: value("HUBSPOT_SOURCE_PROPERTY"),
    submittedAt: value("HUBSPOT_SUBMITTED_AT_PROPERTY"),
    systems: value("HUBSPOT_SYSTEMS_PROPERTY"),
    originalBrief: value("HUBSPOT_ORIGINAL_BRIEF_PROPERTY"),
    notificationStatus: value("HUBSPOT_NOTIFICATION_STATUS_PROPERTY"),
    retentionReview: value("HUBSPOT_RETENTION_REVIEW_PROPERTY"),
  };

  const accessToken = value("HUBSPOT_ACCESS_TOKEN");
  const pipelineId = value("HUBSPOT_PIPELINE_ID");
  const newInquiryStageId = value("HUBSPOT_NEW_INQUIRY_STAGE_ID");
  const ownerId = value("HUBSPOT_OWNER_ID");
  const portalId = value("HUBSPOT_PORTAL_ID");
  const apiKey = value("RESEND_API_KEY");
  const fromEmail = value("RESEND_FROM_EMAIL");
  const internalEmail = value("LEAD_NOTIFICATION_EMAIL");
  const replyToEmail = value("RESEND_REPLY_TO_EMAIL") || undefined;

  if (
    !hubspotApiBaseUrl ||
    !notificationApiBaseUrl ||
    !providerAttempts ||
    !providerTimeoutMs ||
    !retentionDays ||
    !accessToken ||
    !pipelineId ||
    !newInquiryStageId ||
    !ownerId ||
    !portalId ||
    !apiKey ||
    !emailPattern.test(fromEmail) ||
    !emailPattern.test(internalEmail) ||
    (replyToEmail && !emailPattern.test(replyToEmail)) ||
    Object.values(properties).some((property) => !property)
  ) {
    return null;
  }

  return {
    hubspot: {
      accessToken,
      apiBaseUrl: hubspotApiBaseUrl,
      pipelineId,
      newInquiryStageId,
      ownerId,
      portalId,
      properties,
    },
    notifications: {
      apiKey,
      apiBaseUrl: notificationApiBaseUrl,
      fromEmail,
      internalEmail,
      replyToEmail,
    },
    retentionDays,
    providerAttempts,
    providerTimeoutMs,
  };
}
