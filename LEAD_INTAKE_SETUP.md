# Lead Intake Setup and Operating Runbook

## Production status

The application code is complete and tested against a deterministic local
HubSpot/Resend contract. Production intake is intentionally disabled until the
owner creates the accounts and CRM configuration below, supplies secrets in the
deployment environment, approves the operating and retention decisions, and
passes the production smoke test. No provider credentials are stored in this
repository.

With the checked-in example values, `POST /api/project-brief` returns `503`.
That is the required fail-closed state, not a successful production activation.

The first-party project brief is the primary conversion path. Public scheduling
and public fit-call booking have been removed. A private qualification call may
be offered only after project-brief review and a human qualification decision.
The HubSpot/Resend adapter and pipeline design are built, but production
accounts, owners, stage governance, qualification practice, and follow-up
operations are not configured or approved.

## Starting-state reconciliation

Before this integration, the route used a generic authenticated webhook:

```ts
type LeadProviderConfiguration = {
  webhookUrl: string;
  webhookSecret: string;
  notificationEmail: string;
};

type LeadEnvelope = {
  schemaVersion: "1.0";
  leadId: string;
  submittedAt: string;
  sourcePage: string;
  notificationEmail: string;
  brief: ProjectBrief;
};
```

The route sent that envelope to `LEAD_INTAKE_WEBHOOK_URL` and required a 2xx
response containing `{ "accepted": true, "providerRecordId": "..." }`. It
returned `503` because both activation flags defaulted to false and no durable
webhook URL, secret, or approved inbox had been configured. Its in-memory
24-hour delivery map could suppress same-process retries but could not provide
durable idempotency across restarts or deployments.

The current implementation replaces that placeholder with a formal
`LeadProvider` interface and a HubSpot adapter. HubSpot is the durable authority;
Resend is notification transport only. The acceptance boundary is an associated
HubSpot deal in the configured pipeline—not an email.

## Current application contract

`POST /api/project-brief` accepts JSON or URL-encoded form data. The stable
public fields are:

| Field                | Required      | Rule                                                   |
| -------------------- | ------------- | ------------------------------------------------------ |
| `fullName`           | Yes           | 100 characters                                         |
| `workEmail`          | Yes           | Normalized to lowercase; 254 characters                |
| `companyName`        | Conditional   | Company name or website must be supplied               |
| `companyWebsite`     | Conditional   | Company name or valid HTTP(S) website must be supplied |
| `serviceNeeded`      | Yes           | Approved service option                                |
| `projectGoal`        | Yes           | 2,400 characters                                       |
| `existingSystems`    | No            | 1,000 characters                                       |
| `desiredTiming`      | Yes           | Approved timing option                                 |
| `expectedInvestment` | Yes           | Approved investment option                             |
| `preferredContact`   | No            | Empty, email, or telephone                             |
| `telephone`          | Conditional   | Required only when telephone is selected               |
| `heardAbout`         | No            | 200 characters                                         |
| `sourcePage`         | Added by site | Restricted to a local path                             |

The investment options are: `Under $5,000`, `$5,000–$10,000`,
`$10,000–$25,000`, `$25,000–$50,000`, `$50,000+`, and `Need guidance`. None
is automatically rejected.

The server sanitizes control characters, validates again independently of the
browser, caps requests at 32 KB, enforces same-origin submission, uses a
honeypot, and permits five attempts per hashed network address per 15 minutes.
The application does not intentionally log form fields, email addresses,
telephone numbers, or raw network addresses.

## Provider architecture

The server-only provider contract lives in
`apps/web/app/lib/server/lead-provider.ts`:

```ts
interface LeadProvider {
  persist(submission: LeadSubmission): Promise<DurableLead>;
  recordNotificationStatus(
    providerRecordId: string,
    status: NotificationStatus,
  ): Promise<void>;
}

interface NotificationProvider {
  notifyInternal(submission: LeadSubmission, lead: DurableLead): Promise<void>;
  acknowledge(submission: LeadSubmission): Promise<void>;
}
```

The route generates a deterministic reference from the browser idempotency key,
for example `STG-12A4F09C113B`. The HubSpot reference property must be a custom
unique property. Every retry searches by that property before creating a deal.
That makes HubSpot the duplicate authority across browser retries, application
restarts, multiple instances, and deployments.

Processing sequence:

1. Normalize and search for a contact by email; create it if absent.
2. When a website is supplied, normalize its domain, search for a company by
   domain, and create it if absent.
3. Associate the contact and company when a company record exists.
4. Search for a deal by Strive reference; create it in `New Inquiry` if absent.
5. Associate the deal with the contact and available company.
6. Only after those steps succeed, report the brief as received.
7. Send the internal notification and prospect acknowledgment with separate
   Resend idempotency keys.
8. Write notification status back to the HubSpot deal.

If CRM persistence fails, the visitor receives an honest `503` and is not shown
a success state. If CRM persistence succeeds but email fails, the visitor still
receives success because the durable inquiry is safe; the deal records the
failed channel for reconciliation.

## Accounts and permissions

### HubSpot

Create a HubSpot private app owned by an approved Strive administrator. Enable
MFA and keep at least one documented backup administrator. Grant only:

- `crm.objects.contacts.read`
- `crm.objects.contacts.write`
- `crm.objects.companies.read`
- `crm.objects.companies.write`
- `crm.objects.deals.read`
- `crm.objects.deals.write`

The integration uses HubSpot’s current date-versioned `2026-03` CRM object and
search endpoints plus the supported v4 default-association endpoint. It does not
need marketing-email, forms, tickets, custom-object, automation, or pipeline
write access. The owner creates pipeline stages and properties manually in the
HubSpot UI, then supplies their internal IDs.

### Resend

Create a Resend account owned by an approved Strive administrator, verify the
sending domain, and create a server-only API key limited to sending email when
the account supports scoped keys. The `From` address must use the verified
domain. Configure a monitored reply-to address only if replies are operationally
owned.

## HubSpot pipeline

Create one deal pipeline for Strive project inquiries with these stages in this
order:

1. New Inquiry
2. Awaiting Review
3. More Information Needed
4. Qualified
5. Call Invited
6. Proposal or Scoping
7. Won
8. Lost
9. Not a Fit
10. Nurture

Only `New Inquiry` is written automatically. The remaining movement is a human
decision. Do not create budget-based automatic rejection. Configure the owner
identified by `HUBSPOT_OWNER_ID` as the initial owner for every new inquiry.

Add advanced scoring, routing, automated follow-up, and rejection only after
human qualification is proven and the owner separately approves those controls.

For every review, record:

- fit with Strive’s actual capabilities;
- clarity of the goal and deliverables;
- desired timing and dependencies;
- investment context without automatic rejection;
- decision authority and participants;
- sensitive-data or regulated-work concerns;
- next action and due date;
- accountable owner.

Suggested transitions:

| Situation                                 | Stage                   | Required next action                       |
| ----------------------------------------- | ----------------------- | ------------------------------------------ |
| Newly stored                              | New Inquiry             | Owner confirms receipt in CRM queue        |
| Review started                            | Awaiting Review         | Complete qualification checklist           |
| Context missing                           | More Information Needed | Ask one focused set of questions           |
| Fit is credible                           | Qualified               | Decide whether to invite a call            |
| Private link sent                         | Call Invited            | Record invitation and follow-up date       |
| Scope is being prepared                   | Proposal or Scoping     | Record scope owner and decision date       |
| Accepted engagement                       | Won                     | Start the approved project-opening process |
| Prospect declines or chooses another path | Lost                    | Record a concise reason                    |
| Strive cannot responsibly serve the need  | Not a Fit               | Record reason; send respectful response    |
| Potential future fit                      | Nurture                 | Record lawful basis and next review date   |

## HubSpot custom deal properties

Create these properties on the deal object. Use the internal names shown unless
the owner deliberately chooses alternatives and updates the matching environment
variables.

| Internal name                | Suggested field type | Required behavior                                                                   |
| ---------------------------- | -------------------- | ----------------------------------------------------------------------------------- |
| `strive_reference`           | Single-line text     | **Unique value enabled**; durable idempotency authority                             |
| `strive_service_needed`      | Single-line text     | Display label from the form                                                         |
| `strive_project_goal`        | Multi-line text      | Visitor’s complete goal statement                                                   |
| `strive_desired_timing`      | Single-line text     | Display label from the form                                                         |
| `strive_expected_investment` | Single-line text     | Display label; never an auto-reject trigger                                         |
| `strive_preferred_contact`   | Single-line text     | Email, telephone, or no preference                                                  |
| `strive_source_page`         | Single-line text     | Local source route                                                                  |
| `strive_submitted_at`        | Date/time            | Server submission time in UTC                                                       |
| `strive_existing_systems`    | Multi-line text      | Optional current-system context                                                     |
| `strive_original_brief`      | Multi-line text      | JSON preservation of the validated brief                                            |
| `strive_notification_status` | Single-line text     | `pending`, `complete`, `internal_failed`, `acknowledgment_failed`, or `both_failed` |
| `strive_retention_review`    | Date picker          | Date when the record must be reviewed under the approved retention rule             |

Before activation, call or inspect the HubSpot property definition and confirm
`strive_reference` reports `hasUniqueValue: true`. The application performs this
check on submission and fails closed if the property is not unique.

Standard properties used are `dealname`, `pipeline`, `dealstage`,
`hubspot_owner_id`, contact `email`/`firstname`/`lastname`/`company`/`phone`, and
company `name`/`domain`/`website`.

## Environment variables

Copy `apps/web/.env.example` into the deployment secret manager; do not commit a
populated file.

| Variable                          | Purpose                                           |
| --------------------------------- | ------------------------------------------------- |
| `LEAD_INTAKE_ENABLED`             | Technical activation gate                         |
| `LEAD_INTAKE_OPERATIONS_APPROVED` | Owner confirmation that operations are ready      |
| `LEAD_PROVIDER`                   | Must be `hubspot`                                 |
| `LEAD_PROVIDER_ATTEMPTS`          | 1–3 attempts; default 3                           |
| `LEAD_PROVIDER_TIMEOUT_MS`        | Per-request timeout; default 5,000 and max 10,000 |
| `LEAD_RETENTION_DAYS`             | Days until HubSpot retention review; 1–3,650      |
| `LEAD_NOTIFICATION_EMAIL`         | Approved monitored internal inbox                 |
| `HUBSPOT_ACCESS_TOKEN`            | Private-app token                                 |
| `HUBSPOT_PIPELINE_ID`             | Internal deal-pipeline ID                         |
| `HUBSPOT_NEW_INQUIRY_STAGE_ID`    | Internal ID for New Inquiry                       |
| `HUBSPOT_OWNER_ID`                | Initial accountable HubSpot owner ID              |
| `HUBSPOT_PORTAL_ID`               | Portal ID used to build the internal record link  |
| `HUBSPOT_*_PROPERTY`              | Internal names from the property table            |
| `RESEND_API_KEY`                  | Transactional email API key                       |
| `RESEND_FROM_EMAIL`               | Verified sender address                           |
| `RESEND_REPLY_TO_EMAIL`           | Optional approved reply-to address                |

`HUBSPOT_API_BASE_URL`, `RESEND_API_BASE_URL`, and
`LEAD_INTAKE_ALLOW_INSECURE_LOCALHOST` exist for deterministic local contract
tests. Production must use the default HTTPS provider URLs and must never allow
insecure localhost.

The runtime refuses activation if any required value is missing, invalid, or an
unapproved URL. Keep both activation flags false while entering and validating
secrets. Set them true together only for the final smoke test.

## Notifications

The internal notification goes only to `LEAD_NOTIFICATION_EMAIL` and includes:

- the Strive reference;
- direct HubSpot record URL;
- submission time and source route;
- all validated qualification fields;
- no secrets or application diagnostics.

The prospect acknowledgment includes only confirmation of receipt, the Strive
reference, what will be reviewed, and a sensitive-data reminder. It includes no
response-time promise, qualification result, scheduling link, internal stage,
owner, score, or provider details.

Both requests use Resend `Idempotency-Key` headers. The internal and prospect
keys are distinct. Resend’s provider-side email idempotency window is 24 hours;
HubSpot notification status remains the longer-lived reconciliation authority.

## Local and preview testing

The Playwright suite launches:

- a deterministic fake HubSpot/Resend server at `127.0.0.1:3101`;
- a configured production build at `127.0.0.1:3100`;
- a disabled production build at `127.0.0.1:3102` that must return `503`.

The fake implements the same endpoint paths, bearer-auth boundaries, unique
reference contract, associations, email idempotency, and notification-status
updates used by production. It contains no external credentials and sends no
email.

Run:

```bash
pnpm verify
```

For a hosted preview, keep activation false unless the preview has an isolated
HubSpot pipeline, isolated notification inbox, non-production API keys, access
controls, and an explicit deletion plan. Never point an untrusted branch preview
at the production pipeline.

## Retry, duplicate, and partial-failure behavior

- CRM searches and writes use bounded timeouts and at most three attempts.
- HTTP 409, 429, 5xx, network failure, and timeout are treated as retryable.
- Other 4xx responses fail without repeated writes.
- After an uncertain create, the next attempt searches normalized email,
  normalized domain, or unique Strive reference before creating again.
- A same-key browser retry resolves to the same deterministic reference.
- An existing HubSpot deal returns success with `duplicate: true` and does not
  create a second deal.
- Contact or company creation without a durable deal is not accepted as a
  successful lead.
- A concurrent same-process submission returns `409` with `Retry-After: 2`.
- Resend requests are retried with the same channel-specific idempotency key.
- Notification failure after CRM persistence is written to the deal and does
  not create a false “lost intake” message.

## Reconciliation and outage procedure

At the start of each owned review window:

1. Filter the intake pipeline for `New Inquiry` and notification status other
   than `complete`.
2. Confirm every record has a Strive reference, contact association, owner, and
   next action.
3. For `internal_failed`, notify the approved inbox manually from the CRM record
   and mark complete only after confirmation.
4. For `acknowledgment_failed`, verify the address and send an approved manual
   acknowledgment only once.
5. For `both_failed`, do both steps and record the resolution.
6. Investigate application logs by reference only; never paste the brief into
   tickets or chat systems without approval.

During a HubSpot outage:

1. Leave the route fail closed; do not change it to optimistic success.
2. Confirm the public direct-email fallback is available.
3. Record the start time, provider status, affected references from safe logs,
   and owner.
4. After recovery, invite affected visitors to resubmit or reconcile only from
   an approved existing message. Do not reconstruct briefs from logs because
   the application does not log them.
5. Run the smoke test before declaring the channel recovered.

During a Resend outage, HubSpot continues to accept durable inquiries. Use the
notification-status queue for manual review and reconciliation.

## Retention, deletion, access, and export

`LEAD_RETENTION_DAYS` sets a review date; it does not silently delete CRM
records. Counsel and the owner must approve the period and deletion rules before
activation.

The operating owner must document:

- who can access contacts, companies, deals, notification inbox, exports, and
  provider administration;
- when open, lost, not-fit, and nurture inquiries are deleted or retained;
- how legal holds or active contracts override routine deletion;
- how backups and provider recycling bins affect final deletion;
- how an access, correction, export, or deletion request is verified;
- how related HubSpot contact, company, deal, and email records are located by
  email, domain, and Strive reference;
- which export format is supplied and how it is transferred securely;
- how completion is recorded without retaining unnecessary request data.

Review access quarterly and immediately after role changes. Rotate private-app
and email API keys on owner change, suspected exposure, provider recommendation,
or the approved rotation schedule. Test new keys with activation still false,
switch secrets atomically, then revoke old keys.

## Rollback

1. Set `LEAD_INTAKE_ENABLED=false` and redeploy. This restores the honest `503`
   path while leaving direct email available.
2. Do not delete HubSpot records created before rollback.
3. Reconcile any `pending` or failed notification statuses.
4. Rotate or revoke provider keys if the rollback involves security concerns.
5. Re-run the disabled-intake test and public contact-path checks.
6. Re-enable only after the cause, owner approval, and smoke test are recorded.

## Production activation and smoke test

Owner actions, in order:

1. Approve HubSpot and Resend accounts, administrators, contracts, regions,
   subprocessors, security settings, and recovery paths.
2. Create the pipeline, stages, unique custom properties, and initial owner.
3. Approve the monitored inbox, sender domain, reply-to behavior, retention
   period, deletion/export process, and privacy text.
4. Add secrets and IDs to the production secret manager with activation false.
5. Verify the reference property is unique and every internal ID belongs to the
   intended production portal.
6. Run `pnpm verify` on the release commit.
7. Set both activation flags true and deploy without changing other values.
8. Submit one real, non-sensitive production test brief.
9. Confirm one contact, one domain-matched company when a website was supplied,
   one associated deal in `New Inquiry`, the configured owner, all mapped
   properties, one internal email, and one prospect acknowledgment.
10. Retry with the same idempotency key and confirm there is still one deal and
    no duplicate email.
11. Exercise an approved failure test in a non-production pipeline or controlled
    window; confirm CRM failure returns `503` and email failure leaves a durable
    deal with a failed notification status.
12. Verify keyboard, autofill, mobile layout, no-JavaScript fallback, rate limit,
    payload limit, origin defense, and safe production logs.
13. Record the date, owner, reference, results, and rollback decision.

Do not describe intake as active until every production check passes. Nothing in
this runbook authorizes a push, merge, or deployment.
