# Strive Technology Group Website

This repository contains the public marketing website for Strive Technology Group, a technology partner for growing small and midsize service businesses. The site explains three connected outcomes: helping a business get found and convert, understand what is working, and remove repetitive work.

The public copy avoids unsupported client results, testimonials, certifications, guarantees, pricing, support promises, and team claims. Use [`docs/OWNER_LAUNCH_DECISIONS.md`](./docs/OWNER_LAUNCH_DECISIONS.md) for the initial-production gate, [`docs/STRIVE_OFFER_AND_PRICING_STRATEGY.md`](./docs/STRIVE_OFFER_AND_PRICING_STRATEGY.md) as the canonical commercial strategy, [`docs/LEAD_INTAKE_SETUP.md`](./docs/LEAD_INTAKE_SETUP.md) for the technical intake contract, and [`docs/LEGAL_REVIEW_REQUIRED.md`](./docs/LEGAL_REVIEW_REQUIRED.md) before treating policy copy as production-ready.

## What is implemented

- Nine public routes: `/`, `/services`, `/approach`, `/about`, `/faq`, `/contact`, `/start-a-project`, `/privacy`, and `/terms`
- Permanent redirects from `/work` to `/approach` and `/consultation` to `/start-a-project`
- A custom not-found page, generated sitemap and robots rules
- Route-specific metadata, canonical URLs, Open Graph/Twitter metadata, and a generated social image
- Truth-based Organization, Service, and FAQ structured data
- One responsive editorial design system built with React, Next.js, and CSS
- Accessible desktop/mobile navigation, skip navigation, visible focus styles, and reduced-motion handling
- An accessible editorial project brief with shared client/server validation, conditional telephone handling, error summaries, input preservation, and honest success/failure states
- A fail-closed HubSpot lead adapter with durable idempotency, contact/company/deal association, bounded retries, rate limiting, payload constraints, and a honeypot
- Resend internal and prospect notifications sent only after durable CRM persistence, with channel-specific idempotency and CRM-recorded failure status
- Automated route, link, accessibility, interaction, overflow, reduced-motion, and asset-budget checks
- Security headers and a production dependency set with no known audit findings at the time of this handoff

The application does **not** include a CMS, first-party lead database, authentication, customer portal, analytics tracker, payment system, or public scheduler. HubSpot and Resend have been configured and verified locally. Production intake still requires hosting environment secrets, operating approvals, and a production smoke test; see [`docs/LEAD_INTAKE_SETUP.md`](./docs/LEAD_INTAKE_SETUP.md).

## Technology

- Next.js 15.5.28, App Router
- React and React DOM 19.1.9
- TypeScript 5.9
- Tailwind CSS 3.4.17 directives with a canonical semantic token layer and focused global component CSS
- Self-hosted Inter and Instrument Serif loaded through `next/font/local`
- Turborepo and pnpm 9
- ESLint 9
- Playwright 1.62 and Axe for browser/accessibility tests

The site self-hosts subsetted Inter and Instrument Serif files under the SIL Open Font License and does not make a browser request to Google Fonts. The browser does not load a public scheduling iframe or third-party form script.

## Repository structure

```text
strivetg/
├── apps/
│   └── web/
│       ├── app/                  # Routes, server components, and design system
│       │   ├── components/       # Shared editorial UI and project-brief client component
│       │   ├── lib/              # Canonical company facts and shared intake validation
│       │   ├── api/              # Server-only project-brief delivery contract
│       │   └── ...               # Public routes and SEO generators
│       ├── public/               # Intentional light/dark logo variants and favicon
│       ├── scripts/              # Asset-budget check
│       └── tests/                # Playwright and Axe release checks
├── packages/
│   ├── eslint-config/            # Shared lint configuration
│   └── typescript-config/        # Shared TypeScript configuration
├── docs/
│   ├── LEAD_INTAKE_SETUP.md      # Provider setup, verification, and operating runbook
│   ├── OWNER_LAUNCH_DECISIONS.md # Launch decisions and content approvals
│   ├── LEGAL_REVIEW_REQUIRED.md  # Outstanding legal-review questions
│   ├── STRIVE_OFFER_AND_PRICING_STRATEGY.md # Commercial strategy
│   ├── STRIVE_DESIGN_TRANSLATION.md # Design decisions
│   ├── STRIVE_MOTION_SPEC.md     # Motion and reduced-motion requirements
│   ├── redesign/                # Earlier credibility-redesign evidence
│   └── editorial-design/        # Editorial route and viewport evidence
└── README.md
```

## Local development

Requirements: Node.js 20.9 or newer and pnpm 9.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

The web application is available at `http://localhost:3000`.

Copy `apps/web/.env.example` only when preparing a local provider integration.
The default keeps lead intake disabled; use `docs/LEAD_INTAKE_SETUP.md` before
changing either activation flag.

Useful commands:

```bash
pnpm lint          # ESLint; warnings fail the gate
pnpm check-types   # TypeScript without output
pnpm build         # Production build
pnpm check:assets  # Public-asset budget and forbidden-video check
pnpm test          # Playwright route, link, Axe, interaction, and layout checks
pnpm audit --prod  # Production dependency advisories
pnpm verify        # Run every release gate above
```

Run `pnpm exec playwright install chromium` once if the Playwright browser is not already installed.

## Content architecture

Public company facts, navigation, service pillars, engagement steps, trust commitments, and FAQ answers are centralized in `apps/web/app/lib/company.ts`. Change shared claims there so pages and structured data remain consistent.

Route content stays server-rendered. Client-side JavaScript is limited to interactions that need it: responsive navigation and the project brief’s conditional fields, validation, and live submission states.

## Contact and intake behavior

- `contact@strivetg.com` is rendered as a direct `mailto:` path.
- `Start a Project` is the primary conversion path.
- The project brief reports success only after HubSpot confirms a durable associated deal. Notification email is not the durable copy.
- Public scheduling is removed; a private qualification call may be offered only after project-brief review and a human decision.
- A dedicated business telephone path is rendered only when an approved number is added to `company.telephone`.
- Email remains an accessible fallback.
- The site does not state a response-time guarantee.

## Security and release notes

The application defines a Content Security Policy and other browser security headers in `apps/web/next.config.js`. Public frames are disallowed. Production responses include Strict Transport Security, which requires the canonical hostname and relevant subdomains to be HTTPS-ready before deployment.

Do not infer formal compliance, penetration testing, uptime guarantees, Core Web Vitals results, or a Lighthouse score from the automated checks in this repository.

## Deployment checklist

Before production release:

1. Close every blocking item in `docs/OWNER_LAUNCH_DECISIONS.md`, including its content and proof requirements.
2. Have qualified counsel review `docs/LEGAL_REVIEW_REQUIRED.md`, `/privacy`, `/terms`, and the actual agreement set.
3. Record commercial approvals in `docs/OWNER_LAUNCH_DECISIONS.md`, using `docs/STRIVE_OFFER_AND_PRICING_STRATEGY.md` as the canonical rationale.
4. Verify `https://www.strivetg.com` as the initial canonical production host, then configure `https://strivetg.com` to redirect to `www` only after DNS, SSL, and ownership are confirmed. Do not introduce a canonical-host migration during the redesign launch without later explicit owner approval.
5. Complete every activation step in `docs/LEAD_INTAKE_SETUP.md`, including the durable provider, approved inbox, rate-limit boundary, retention, monitoring, and real delivery test.
6. Add a dedicated business number only after its public use, display format, voicemail wording, and optional hours are approved.
7. Re-run `pnpm install --frozen-lockfile` and `pnpm verify` on the release commit.
8. Preview the production deployment and check all nine routes, the 404, project brief, email and conditional telephone links, sitemap, robots file, and social image.
9. Confirm security headers and HTTPS/HSTS behavior in the deployed response.
10. Obtain explicit owner approval before publishing any biography, portrait, testimonial, case study, metric, pricing, office location, phone number, or external profile.

This repository is private and proprietary unless the owner documents a different license.
