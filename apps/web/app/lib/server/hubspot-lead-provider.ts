import {
  contactMethodOptions,
  investmentOptions,
  optionLabel,
  serviceNeededOptions,
  timingOptions,
} from "../lead-intake";
import type { LeadIntakeConfiguration } from "./lead-intake-config";
import type {
  DurableLead,
  LeadProvider,
  LeadSubmission,
  NotificationStatus,
} from "./lead-provider";

type HubSpotRecord = {
  id: string;
  properties?: Record<string, string | null>;
};

class HubSpotProviderError extends Error {
  constructor(
    readonly reason: string,
    readonly retryable: boolean,
  ) {
    super(reason);
    this.name = "HubSpotProviderError";
  }
}

function delay(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function nameParts(fullName: string) {
  const [firstName = "", ...rest] = fullName.split(/\s+/);
  return { firstName, lastName: rest.join(" ") };
}

function companyDomain(website: string) {
  if (!website) return "";
  try {
    return new URL(website).hostname.toLowerCase().replace(/^www\./, "");
  } catch {
    return "";
  }
}

function notificationStatus(
  value: string | null | undefined,
): NotificationStatus {
  return [
    "pending",
    "complete",
    "internal_failed",
    "acknowledgment_failed",
    "both_failed",
  ].includes(value ?? "")
    ? (value as NotificationStatus)
    : "pending";
}

export class HubSpotLeadProvider implements LeadProvider {
  constructor(private readonly configuration: LeadIntakeConfiguration) {}

  private async request<T>(path: string, init: RequestInit): Promise<T> {
    try {
      const response = await fetch(
        `${this.configuration.hubspot.apiBaseUrl}${path}`,
        {
          ...init,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this.configuration.hubspot.accessToken}`,
            "Content-Type": "application/json",
            ...init.headers,
          },
          cache: "no-store",
          signal: AbortSignal.timeout(this.configuration.providerTimeoutMs),
        },
      );

      if (!response.ok) {
        throw new HubSpotProviderError(
          `hubspot_status_${response.status}`,
          response.status === 409 ||
            response.status === 429 ||
            response.status >= 500,
        );
      }

      const raw = await response.text();
      return (raw ? JSON.parse(raw) : {}) as T;
    } catch (error) {
      if (error instanceof HubSpotProviderError) throw error;
      throw new HubSpotProviderError(
        error instanceof Error && error.name === "TimeoutError"
          ? "hubspot_timeout"
          : "hubspot_network_error",
        true,
      );
    }
  }

  private async assertDurableReferenceProperty() {
    const property = encodeURIComponent(
      this.configuration.hubspot.properties.reference,
    );
    const definition = await this.request<{ hasUniqueValue?: unknown }>(
      `/crm/properties/2026-03/deals/${property}`,
      { method: "GET" },
    );
    if (definition.hasUniqueValue !== true) {
      throw new HubSpotProviderError(
        "hubspot_reference_property_not_unique",
        false,
      );
    }
  }

  private async searchObject(
    objectType: "contacts" | "companies" | "deals",
    propertyName: string,
    value: string,
    properties: string[] = [],
  ) {
    const response = await this.request<{ results?: HubSpotRecord[] }>(
      `/crm/objects/2026-03/${objectType}/search`,
      {
        method: "POST",
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [{ propertyName, operator: "EQ", value }],
            },
          ],
          properties,
          limit: 1,
        }),
      },
    );
    return response.results?.[0] ?? null;
  }

  private async createObject(
    objectType: "contacts" | "companies" | "deals",
    properties: Record<string, string>,
  ) {
    return this.request<HubSpotRecord>(`/crm/objects/2026-03/${objectType}`, {
      method: "POST",
      body: JSON.stringify({ properties }),
    });
  }

  private async findOrCreateContact(submission: LeadSubmission) {
    const existing = await this.searchObject(
      "contacts",
      "email",
      submission.brief.workEmail,
    );
    if (existing) return existing.id;

    const { firstName, lastName } = nameParts(submission.brief.fullName);
    const properties: Record<string, string> = {
      email: submission.brief.workEmail,
      firstname: firstName,
    };
    if (lastName) properties.lastname = lastName;
    if (submission.brief.companyName) {
      properties.company = submission.brief.companyName;
    }
    if (submission.brief.telephone) {
      properties.phone = submission.brief.telephone;
    }

    try {
      return (await this.createObject("contacts", properties)).id;
    } catch (error) {
      if (!(error instanceof HubSpotProviderError) || !error.retryable) {
        throw error;
      }
      await delay(200);
      const recovered = await this.searchObject(
        "contacts",
        "email",
        submission.brief.workEmail,
      );
      if (recovered) return recovered.id;
      throw error;
    }
  }

  private async findOrCreateCompany(submission: LeadSubmission) {
    const domain = companyDomain(submission.brief.companyWebsite);
    if (!domain) return null;
    const existing = await this.searchObject("companies", "domain", domain);
    if (existing) return existing.id;

    const properties: Record<string, string> = {
      domain,
      name: submission.brief.companyName || domain,
      website: submission.brief.companyWebsite,
    };
    try {
      return (await this.createObject("companies", properties)).id;
    } catch (error) {
      if (!(error instanceof HubSpotProviderError) || !error.retryable) {
        throw error;
      }
      await delay(200);
      const recovered = await this.searchObject("companies", "domain", domain);
      if (recovered) return recovered.id;
      throw error;
    }
  }

  private async associate(
    fromType: "contact" | "deal",
    fromId: string,
    toType: "contact" | "company",
    toId: string,
  ) {
    await this.request(
      `/crm/v4/objects/${fromType}/${encodeURIComponent(fromId)}/associations/default/${toType}/${encodeURIComponent(toId)}`,
      { method: "PUT" },
    );
  }

  private dealProperties(submission: LeadSubmission) {
    const { brief } = submission;
    const { properties } = this.configuration.hubspot;
    const retentionReview = new Date(submission.submittedAt);
    retentionReview.setUTCDate(
      retentionReview.getUTCDate() + this.configuration.retentionDays,
    );
    const organization =
      brief.companyName || companyDomain(brief.companyWebsite) || "New inquiry";

    return {
      dealname: `${organization} — ${optionLabel(serviceNeededOptions, brief.serviceNeeded)}`,
      pipeline: this.configuration.hubspot.pipelineId,
      dealstage: this.configuration.hubspot.newInquiryStageId,
      hubspot_owner_id: this.configuration.hubspot.ownerId,
      [properties.reference]: submission.reference,
      [properties.service]: optionLabel(
        serviceNeededOptions,
        brief.serviceNeeded,
      ),
      [properties.projectGoal]: brief.projectGoal,
      [properties.timing]: optionLabel(timingOptions, brief.desiredTiming),
      [properties.investment]: optionLabel(
        investmentOptions,
        brief.expectedInvestment,
      ),
      [properties.contactMethod]: brief.preferredContact
        ? optionLabel(contactMethodOptions, brief.preferredContact)
        : "No preference supplied",
      [properties.source]: brief.sourcePage,
      [properties.submittedAt]: submission.submittedAt,
      [properties.systems]: brief.existingSystems,
      [properties.originalBrief]: JSON.stringify(brief),
      [properties.notificationStatus]: "pending",
      [properties.retentionReview]: retentionReview.toISOString().slice(0, 10),
    };
  }

  private async persistOnce(submission: LeadSubmission): Promise<DurableLead> {
    const referenceProperty = this.configuration.hubspot.properties.reference;
    const statusProperty =
      this.configuration.hubspot.properties.notificationStatus;
    let deal = await this.searchObject(
      "deals",
      referenceProperty,
      submission.reference,
      [statusProperty],
    );
    const duplicate = Boolean(deal);
    const contactId = await this.findOrCreateContact(submission);
    const companyId = await this.findOrCreateCompany(submission);

    if (companyId) {
      await this.associate("contact", contactId, "company", companyId);
    }

    if (!deal) {
      try {
        deal = await this.createObject(
          "deals",
          this.dealProperties(submission),
        );
      } catch (error) {
        if (!(error instanceof HubSpotProviderError) || !error.retryable) {
          throw error;
        }
        await delay(300);
        deal = await this.searchObject(
          "deals",
          referenceProperty,
          submission.reference,
          [statusProperty],
        );
        if (!deal) throw error;
      }
    }

    await this.associate("deal", deal.id, "contact", contactId);
    if (companyId) {
      await this.associate("deal", deal.id, "company", companyId);
    }

    return {
      provider: "hubspot",
      providerRecordId: deal.id,
      providerRecordUrl: `https://app.hubspot.com/contacts/${encodeURIComponent(this.configuration.hubspot.portalId)}/record/0-3/${encodeURIComponent(deal.id)}`,
      duplicate,
      notificationStatus: notificationStatus(deal.properties?.[statusProperty]),
    };
  }

  async persist(submission: LeadSubmission): Promise<DurableLead> {
    let finalError: unknown;
    let referencePropertyVerified = false;
    for (
      let attempt = 1;
      attempt <= this.configuration.providerAttempts;
      attempt += 1
    ) {
      try {
        if (!referencePropertyVerified) {
          await this.assertDurableReferenceProperty();
          referencePropertyVerified = true;
        }
        return await this.persistOnce(submission);
      } catch (error) {
        finalError = error;
        if (
          !(error instanceof HubSpotProviderError) ||
          !error.retryable ||
          attempt === this.configuration.providerAttempts
        ) {
          throw error;
        }
        await delay(attempt === 1 ? 200 : 600);
      }
    }
    throw finalError;
  }

  async recordNotificationStatus(
    providerRecordId: string,
    status: NotificationStatus,
  ) {
    await this.request(
      `/crm/objects/2026-03/deals/${encodeURIComponent(providerRecordId)}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          properties: {
            [this.configuration.hubspot.properties.notificationStatus]: status,
          },
        }),
      },
    );
  }
}
