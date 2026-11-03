import { createServer } from "node:http";
import process from "node:process";

const port = 3101;
const contacts = new Map();
const companies = new Map();
const deals = new Map();
const emails = new Map();
const associations = new Set();
let nextId = 1;

function send(response, status, body) {
  if (response.destroyed) return;
  response.writeHead(status, {
    "Cache-Control": "no-store",
    "Content-Type": "application/json",
  });
  response.end(JSON.stringify(body));
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let raw = "";
    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 64_000) reject(new Error("too_large"));
    });
    request.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

function recordsFor(type) {
  if (type === "contacts") return contacts;
  if (type === "companies") return companies;
  if (type === "deals") return deals;
  return null;
}

function record(properties) {
  return { id: String(nextId++), properties: { ...properties } };
}

function publicState() {
  return {
    contacts: [...contacts.values()],
    companies: [...companies.values()],
    deals: [...deals.values()],
    emails: [...emails.values()],
    associations: [...associations],
  };
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url ?? "/", `http://${request.headers.host}`);
  if (request.method === "GET" && url.pathname === "/health") {
    send(response, 200, { ok: true });
    return;
  }
  if (request.method === "GET" && url.pathname === "/__test/state") {
    send(response, 200, publicState());
    return;
  }

  const isEmail = url.pathname === "/emails";
  const expectedAuthorization = isEmail
    ? "Bearer test-resend-key"
    : "Bearer test-hubspot-token";
  if (request.headers.authorization !== expectedAuthorization) {
    send(response, 401, { status: "error" });
    return;
  }

  try {
    if (
      request.method === "GET" &&
      url.pathname === "/crm/properties/2026-03/deals/strive_reference"
    ) {
      send(response, 200, {
        name: "strive_reference",
        hasUniqueValue: true,
      });
      return;
    }

    const searchMatch = url.pathname.match(
      /^\/crm\/objects\/2026-03\/(contacts|companies|deals)\/search$/,
    );
    if (request.method === "POST" && searchMatch) {
      const body = await readJson(request);
      const filter = body?.filterGroups?.[0]?.filters?.[0];
      const records = recordsFor(searchMatch[1]);
      const result = [...records.values()].find(
        (candidate) =>
          candidate.properties?.[filter?.propertyName] === filter?.value,
      );
      const indexDelayed =
        filter?.value === "index-delay@example.com" ||
        filter?.value === "index-delay.example" ||
        result?.properties?.dealname?.startsWith("Index Delay Co —");
      send(response, 200, {
        total: result && !indexDelayed ? 1 : 0,
        results: result && !indexDelayed ? [result] : [],
      });
      return;
    }

    const readDeal = url.pathname.match(
      /^\/crm\/objects\/2026-03\/deals\/([^/]+)$/,
    );
    if (request.method === "GET" && readDeal) {
      const value = decodeURIComponent(readDeal[1]);
      const idProperty = url.searchParams.get("idProperty");
      const deal = idProperty
        ? [...deals.values()].find(
            (candidate) => candidate.properties[idProperty] === value,
          )
        : deals.get(value);
      if (!deal) {
        send(response, 404, { status: "not_found" });
        return;
      }
      const linked = (type) => ({
        results: [...associations]
          .filter((entry) => entry.startsWith(`deal:${deal.id}->${type}:`))
          .map((entry) => ({ id: entry.split(":").at(-1) })),
      });
      send(response, 200, {
        ...deal,
        associations: {
          contacts: linked("contact"),
          companies: linked("company"),
        },
      });
      return;
    }

    const createMatch = url.pathname.match(
      /^\/crm\/objects\/2026-03\/(contacts|companies|deals)$/,
    );
    if (request.method === "POST" && createMatch) {
      const body = await readJson(request);
      const properties = body?.properties ?? {};
      const type = createMatch[1];
      const records = recordsFor(type);

      if (
        type === "deals" &&
        String(properties.dealname).includes("CRM Failure Co")
      ) {
        send(response, 503, { status: "error" });
        return;
      }
      if (
        type === "deals" &&
        String(properties.dealname).includes("CRM Timeout Co")
      ) {
        setTimeout(() => send(response, 504, { status: "error" }), 1_000);
        return;
      }

      const uniqueProperty =
        type === "contacts"
          ? "email"
          : type === "companies"
            ? "domain"
            : "strive_reference";
      const duplicate = [...records.values()].find(
        (candidate) =>
          candidate.properties?.[uniqueProperty] === properties[uniqueProperty],
      );
      if (duplicate) {
        send(response, 409, { status: "error", id: duplicate.id });
        return;
      }

      const created = record(properties);
      records.set(created.id, created);
      send(response, 201, created);
      return;
    }

    const associationMatch = url.pathname.match(
      /^\/crm\/v4\/objects\/(contact|deal)\/([^/]+)\/associations\/default\/(contact|company)\/([^/]+)$/,
    );
    if (request.method === "PUT" && associationMatch) {
      associations.add(
        `${associationMatch[1]}:${associationMatch[2]}->${associationMatch[3]}:${associationMatch[4]}`,
      );
      send(response, 200, { status: "COMPLETE" });
      return;
    }

    const updateMatch = url.pathname.match(
      /^\/crm\/objects\/2026-03\/deals\/([^/]+)$/,
    );
    if (request.method === "PATCH" && updateMatch) {
      const existing = deals.get(updateMatch[1]);
      if (!existing) {
        send(response, 404, { status: "error" });
        return;
      }
      const body = await readJson(request);
      existing.properties = { ...existing.properties, ...body.properties };
      send(response, 200, existing);
      return;
    }

    if (request.method === "POST" && isEmail) {
      const body = await readJson(request);
      const key = request.headers["idempotency-key"];
      if (typeof key !== "string") {
        send(response, 400, { name: "invalid_idempotency_key" });
        return;
      }
      const internalFailure =
        body?.to?.includes("test-intake@strivetg.com") &&
        String(body?.subject).includes("Notification Failure Co");
      const acknowledgmentFailure = body?.to?.includes(
        "ack-failure@example.com",
      );
      if (internalFailure || acknowledgmentFailure) {
        send(response, 503, { name: "test_notification_failure" });
        return;
      }
      const existing = emails.get(key);
      if (existing) {
        send(response, 200, { id: existing.id });
        return;
      }
      const sent = { id: `email-${emails.size + 1}`, key, ...body };
      emails.set(key, sent);
      send(response, 200, { id: sent.id });
      return;
    }

    send(response, 404, { status: "not_found" });
  } catch {
    send(response, 400, { status: "invalid_request" });
  }
});

server.listen(port, "127.0.0.1");

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.close(() => process.exit(0)));
}
