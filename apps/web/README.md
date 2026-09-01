# Strive web application

The public Strive Technology Group marketing site is a Next.js App Router application. It serves `/`, `/services`, `/approach`, `/about`, `/faq`, `/contact`, `/start-a-project`, `/privacy`, and `/terms`, plus generated `/sitemap.xml`, `/robots.txt`, and Open Graph image output. `/work` redirects to `/approach`; `/consultation` redirects to `/start-a-project`.

From the repository root:

```bash
pnpm --filter web dev
pnpm --filter web lint
pnpm --filter web check-types
pnpm --filter web build
pnpm --filter web check:assets
pnpm --filter web test
```

Shared facts and reusable public claims live in `app/lib/company.ts`; shared form constraints and sanitization live in `app/lib/lead-intake.ts`. The project brief posts to the fail-closed `app/api/project-brief` contract. Server-only HubSpot and Resend adapters live in `app/lib/server`. Production activation requirements are documented in [`LEAD_INTAKE_SETUP.md`](../../LEAD_INTAKE_SETUP.md).

See the root [`README.md`](../../README.md), [`CONTENT_REQUIRED.md`](../../CONTENT_REQUIRED.md), [`LEGAL_REVIEW_REQUIRED.md`](../../LEGAL_REVIEW_REQUIRED.md), and [`WEBSITE_AUDIT_AND_REDESIGN_REPORT.md`](../../WEBSITE_AUDIT_AND_REDESIGN_REPORT.md) for architecture, release gates, owner inputs, legal holds, and audit evidence.
