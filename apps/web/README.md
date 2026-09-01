# Strive web application

The public Strive Technology Group marketing site is a statically rendered Next.js App Router application. It serves `/`, `/services`, `/work`, `/about`, `/faq`, `/contact`, `/consultation`, `/privacy`, and `/terms`, plus generated `/sitemap.xml`, `/robots.txt`, and Open Graph image output.

From the repository root:

```bash
pnpm --filter web dev
pnpm --filter web lint
pnpm --filter web check-types
pnpm --filter web build
pnpm --filter web check:assets
pnpm --filter web test
```

Shared facts and reusable public claims live in `app/lib/company.ts`. The navigation and Calendly dialog are the only primary client-interactive components. Calendly is click-to-load; email remains available when a visitor does not want to load the third-party scheduler.

See the root [`README.md`](../../README.md), [`CONTENT_REQUIRED.md`](../../CONTENT_REQUIRED.md), [`LEGAL_REVIEW_REQUIRED.md`](../../LEGAL_REVIEW_REQUIRED.md), and [`WEBSITE_AUDIT_AND_REDESIGN_REPORT.md`](../../WEBSITE_AUDIT_AND_REDESIGN_REPORT.md) for architecture, release gates, owner inputs, legal holds, and audit evidence.
