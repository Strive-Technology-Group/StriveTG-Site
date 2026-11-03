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
  LeadSubmission,
  NotificationProvider,
} from "./lead-provider";

class NotificationProviderError extends Error {
  constructor(readonly reason: string) {
    super(reason);
    this.name = "NotificationProviderError";
  }
}

function delay(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export class ResendNotificationProvider implements NotificationProvider {
  constructor(private readonly configuration: LeadIntakeConfiguration) {}

  private async send(
    to: string,
    subject: string,
    text: string,
    idempotencyKey: string,
  ) {
    let reason = "notification_unavailable";
    for (
      let attempt = 1;
      attempt <= this.configuration.providerAttempts;
      attempt += 1
    ) {
      try {
        const response = await fetch(
          `${this.configuration.notifications.apiBaseUrl}/emails`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.configuration.notifications.apiKey}`,
              "Content-Type": "application/json",
              "Idempotency-Key": idempotencyKey,
            },
            body: JSON.stringify({
              from: this.configuration.notifications.fromEmail,
              to: [to],
              subject,
              text,
              reply_to:
                this.configuration.notifications.replyToEmail ??
                this.configuration.notifications.internalEmail,
            }),
            cache: "no-store",
            signal: AbortSignal.timeout(this.configuration.providerTimeoutMs),
          },
        );
        if (response.ok) {
          const result = (await response.json().catch(() => null)) as {
            id?: unknown;
          } | null;
          if (typeof result?.id === "string" && result.id) return;
          reason = "notification_invalid_confirmation";
        } else {
          reason = `notification_status_${response.status}`;
          if (
            response.status !== 409 &&
            response.status !== 429 &&
            response.status < 500
          ) {
            break;
          }
        }
      } catch (error) {
        reason =
          error instanceof Error && error.name === "TimeoutError"
            ? "notification_timeout"
            : "notification_network_error";
      }

      if (attempt < this.configuration.providerAttempts) {
        await delay(attempt === 1 ? 200 : 600);
      }
    }
    throw new NotificationProviderError(reason);
  }

  async notifyInternal(submission: LeadSubmission, lead: DurableLead) {
    const { brief } = submission;
    const text = [
      "A new Strive project inquiry is stored in HubSpot.",
      "",
      `Reference: ${submission.reference}`,
      `HubSpot record: ${lead.providerRecordUrl}`,
      `Submitted: ${submission.submittedAt}`,
      `Source: ${brief.sourcePage}`,
      "",
      `Name: ${brief.fullName}`,
      `Work email: ${brief.workEmail}`,
      `Company: ${brief.companyName || "Not supplied"}`,
      `Website: ${brief.companyWebsite || "Not supplied"}`,
      `Service needed: ${optionLabel(serviceNeededOptions, brief.serviceNeeded)}`,
      `Timing: ${optionLabel(timingOptions, brief.desiredTiming)}`,
      `Investment: ${optionLabel(investmentOptions, brief.expectedInvestment)}`,
      `Preferred contact: ${brief.preferredContact ? optionLabel(contactMethodOptions, brief.preferredContact) : "Not supplied"}`,
      `Telephone: ${brief.telephone || "Not supplied"}`,
      `Heard about Strive: ${brief.heardAbout || "Not supplied"}`,
      "",
      "What they are trying to accomplish:",
      brief.projectGoal,
      "",
      "Systems involved:",
      brief.existingSystems || "Not supplied",
    ].join("\n");

    await this.send(
      this.configuration.notifications.internalEmail,
      `New Strive inquiry ${submission.reference} — ${brief.companyName || "website inquiry"}`,
      text,
      `${submission.reference}/internal`,
    );
  }

  async acknowledge(submission: LeadSubmission) {
    const firstName = submission.brief.fullName.split(/\s+/)[0];
    const text = [
      `Hi ${firstName},`,
      "",
      "Thank you for getting in touch with Strive. We've received your project brief and will review what you shared.",
      "",
      "We'll contact you if we need more information or to discuss next steps.",
      "",
      "If you have any questions, simply reply to this email.",
      "",
      "Strive Technology Group",
    ].join("\n");

    await this.send(
      submission.brief.workEmail,
      "We received your project brief | Strive",
      text,
      `${submission.reference}/acknowledgment`,
    );
  }
}
