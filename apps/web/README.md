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

Browser tests use OpenSSL to generate a temporary certificate for the local
HTTPS endpoint, so native form submissions are checked with production security
headers. The certificate and private key are removed when the test server exits.

Shared facts and reusable public claims live in `app/lib/company.ts`; shared form constraints and sanitization live in `app/lib/lead-intake.ts`. The project brief posts to the fail-closed `app/api/project-brief` contract. Server-only HubSpot and Resend adapters live in `app/lib/server`. Production activation requirements are documented in [`LEAD_INTAKE_SETUP.md`](../../docs/LEAD_INTAKE_SETUP.md).

See the root [`README.md`](../../README.md), [`OWNER_LAUNCH_DECISIONS.md`](../../docs/OWNER_LAUNCH_DECISIONS.md), and [`LEGAL_REVIEW_REQUIRED.md`](../../docs/LEGAL_REVIEW_REQUIRED.md) for architecture, release checks, owner inputs, and legal review. [`STRIVE_DESIGN_TRANSLATION.md`](../../docs/STRIVE_DESIGN_TRANSLATION.md) and [`STRIVE_MOTION_SPEC.md`](../../docs/STRIVE_MOTION_SPEC.md) document the current design system.
