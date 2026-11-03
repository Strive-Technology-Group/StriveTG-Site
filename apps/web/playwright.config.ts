import { defineConfig } from "@playwright/test";
import process from "node:process";

const externalBaseURL = process.env.PLAYWRIGHT_BASE_URL;
const baseURL = externalBaseURL ?? "http://127.0.0.1:3100";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: "list",
  timeout: 30_000,
  expect: { timeout: 8_000 },
  use: {
    baseURL,
    browserName: "chromium",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  webServer: externalBaseURL
    ? undefined
    : [
        {
          command: "node scripts/mock-lead-provider.mjs",
          url: "http://127.0.0.1:3101/health",
          reuseExistingServer: false,
          timeout: 30_000,
        },
        {
          command: "pnpm exec next start --hostname 127.0.0.1 --port 3100",
          url: baseURL,
          reuseExistingServer: false,
          timeout: 120_000,
          env: {
            LEAD_INTAKE_ENABLED: "true",
            LEAD_INTAKE_OPERATIONS_APPROVED: "true",
            LEAD_PROVIDER: "hubspot",
            LEAD_NOTIFICATION_EMAIL: "test-intake@strivetg.com",
            LEAD_INTAKE_ALLOW_INSECURE_LOCALHOST: "true",
            LEAD_PROVIDER_ATTEMPTS: "2",
            LEAD_PROVIDER_TIMEOUT_MS: "150",
            LEAD_RETENTION_DAYS: "365",
            HUBSPOT_API_BASE_URL: "http://127.0.0.1:3101",
            HUBSPOT_ACCESS_TOKEN: "test-hubspot-token",
            HUBSPOT_PIPELINE_ID: "test-intake-pipeline",
            HUBSPOT_NEW_INQUIRY_STAGE_ID: "test-new-inquiry",
            HUBSPOT_OWNER_ID: "test-owner",
            HUBSPOT_PORTAL_ID: "123456",
            HUBSPOT_REFERENCE_PROPERTY: "strive_reference",
            HUBSPOT_SERVICE_PROPERTY: "strive_service_needed",
            HUBSPOT_PROJECT_GOAL_PROPERTY: "strive_project_goal",
            HUBSPOT_TIMING_PROPERTY: "strive_desired_timing",
            HUBSPOT_INVESTMENT_PROPERTY: "strive_expected_investment",
            HUBSPOT_CONTACT_METHOD_PROPERTY: "strive_preferred_contact",
            HUBSPOT_SOURCE_PROPERTY: "strive_source_page",
            HUBSPOT_SUBMITTED_AT_PROPERTY: "strive_submitted_at",
            HUBSPOT_SYSTEMS_PROPERTY: "strive_existing_systems",
            HUBSPOT_ORIGINAL_BRIEF_PROPERTY: "strive_original_brief",
            HUBSPOT_NOTIFICATION_STATUS_PROPERTY: "strive_notification_status",
            HUBSPOT_RETENTION_REVIEW_PROPERTY: "strive_retention_review",
            RESEND_API_BASE_URL: "http://127.0.0.1:3101",
            RESEND_API_KEY: "test-resend-key",
            RESEND_FROM_EMAIL: "intake@strivetg.com",
            RESEND_REPLY_TO_EMAIL: "",
          },
        },
        {
          command: "pnpm exec next start --hostname 127.0.0.1 --port 3102",
          url: "http://127.0.0.1:3102/start-a-project",
          reuseExistingServer: false,
          timeout: 120_000,
          env: {
            LEAD_INTAKE_ENABLED: "false",
            LEAD_INTAKE_OPERATIONS_APPROVED: "false",
          },
        },
        {
          command: "node scripts/test-https-proxy.mjs",
          url: "https://127.0.0.1:3143/__test/https-health",
          ignoreHTTPSErrors: true,
          reuseExistingServer: false,
          timeout: 30_000,
        },
      ],
});
