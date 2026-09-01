import type { ProjectBrief } from "../lead-intake";

export type LeadSubmission = {
  reference: string;
  submittedAt: string;
  brief: ProjectBrief;
};

export type DurableLead = {
  provider: "hubspot";
  providerRecordId: string;
  providerRecordUrl: string;
  duplicate: boolean;
  notificationStatus: NotificationStatus;
};

export type NotificationStatus =
  | "pending"
  | "complete"
  | "internal_failed"
  | "acknowledgment_failed"
  | "both_failed";

export interface LeadProvider {
  persist(submission: LeadSubmission): Promise<DurableLead>;
  recordNotificationStatus(
    providerRecordId: string,
    status: NotificationStatus,
  ): Promise<void>;
}

export type NotificationDelivery = {
  internal: "sent" | "failed" | "skipped";
  acknowledgment: "sent" | "failed" | "skipped";
};

export interface NotificationProvider {
  notifyInternal(submission: LeadSubmission, lead: DurableLead): Promise<void>;
  acknowledge(submission: LeadSubmission): Promise<void>;
}
