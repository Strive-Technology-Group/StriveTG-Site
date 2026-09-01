# Strive Technology Group Agency Readiness Audit and Operating Plan

**Audit date:** September 1, 2026

**Repository:** `Strive-Technology-Group/StriveTG-Site`

**Branch reviewed:** `feat/strive-editorial-design-20260831`

**Committed baseline:** `f92b7ed`
**Status:** Comprehensive readiness reference; use `OWNER_LAUNCH_DECISIONS.md` for the initial-production decision gate

## Purpose

This document is the comprehensive readiness reference for turning Strive's polished marketing website into a complete, dependable agency operating system. It is not the concise launch decision register. Initial-production decisions are controlled by `OWNER_LAUNCH_DECISIONS.md`; commercial strategy is controlled by `STRIVE_OFFER_AND_PRICING_STRATEGY.md`.

It covers:

- Brand, positioning, navigation, and the complete prospective-client journey
- Founder credibility, proof, case studies, and content governance
- Lead intake, qualification, sales, proposals, contracts, and payment readiness
- Project delivery, quality assurance, launch, support, and handoff
- Legal, privacy, security, accessibility, performance, SEO, and analytics
- Repository controls, continuous integration, deployment, monitoring, and rollback
- Ownership, recurring review cadences, and definitions of done

This is not legal, tax, accounting, insurance, or regulatory advice. Qualified professionals and the business owner must approve the relevant decisions.

---

## 1. Executive verdict

Strive already has a distinctive, technically disciplined website. The visual design, responsive behavior, accessibility foundation, truthful claims, and application architecture are stronger than those of many early agency sites.

The agency is **not yet fully launch-ready or credibility-complete** because the website is ahead of the underlying business facts and operating system. The most important remaining work is not another visual redesign. It is supplying real identity, real evidence, approved commercial facts, legally reviewed policies, a repeatable lead-to-delivery process, and a production deployment/monitoring runbook.

### Readiness summary

| Area                | Current status                      | Evidence                                                                                                                                                | Required outcome                                                                                    |
| ------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Visual identity     | Strong                              | Original editorial system across all public routes                                                                                                      | Preserve; refine only where it improves comprehension                                               |
| Positioning         | Standardized                        | Web, reporting, and automation for growing small/midsize service businesses                                                                             | Preserve until approved evidence supports a narrower niche                                          |
| Navigation          | Strong                              | Services, Approach, About, FAQ, Contact, and one project CTA                                                                                            | Preserve and validate against future content changes                                                |
| Service clarity     | Good                                | Three outcome-led service pillars                                                                                                                       | Add approved fit, scope, timing, pricing, and technology details                                    |
| Founder credibility | Intentionally absent                | Public pages use company principles rather than founder proof                                                                                           | Publish founder identity only after the complete approved package exists                            |
| Work/proof          | Capability-led                      | `/approach` uses truthful artifacts; no verified case study                                                                                             | Add permissioned evidence before creating a client-work page                                        |
| Lead conversion     | Built; activation gated             | First-party project brief with HubSpot and Resend adapters                                                                                              | Configure owners, providers, retention, monitoring, and delivery tests                              |
| Sales operations    | Architecture built; operations open | Project-brief adapter and pipeline design exist; production accounts and owners are unconfigured; qualification and follow-up operations are unapproved | Activate providers, assign owners, approve stage governance, and prove the human operating practice |
| Delivery operations | Partially described                 | Six phases and handoff principles                                                                                                                       | Define artifacts, owners, tools, acceptance, and change control                                     |
| Support operations  | Not approved                        | Support is described only as separately scoped                                                                                                          | Define coverage, hours, channels, targets, incidents, and offboarding                               |
| Legal/privacy       | Production hold                     | Public copy matches intended behavior; internal review remains                                                                                          | Owner and qualified counsel must approve final text and operations                                  |
| Accessibility       | Strong automated baseline           | Axe, keyboard, reduced-motion, and overflow checks                                                                                                      | Complete manual assistive-technology and zoom review                                                |
| Performance         | Strong engineering baseline         | Static output, small public assets, controlled JS                                                                                                       | Record Lighthouse and real production Web Vitals                                                    |
| Security            | Strong application baseline         | CSP, browser headers, validated/rate-limited lead API                                                                                                   | Add CI, dependency automation, deployed checks, and operational security                            |
| SEO                 | Good technical foundation           | Metadata, canonicals, sitemap, robots, OG, structured data                                                                                              | Verify domain, entity, search tools, social profiles, and final content                             |
| Analytics           | Intentionally absent                | No first-party analytics or tracking pixels                                                                                                             | Decide whether measurement is needed before adding any tracker                                      |
| Deployment          | Not defined                         | No hosting, CI, environment, or rollback configuration in repo                                                                                          | Select platform and document preview, production, DNS, SSL, and rollback                            |
| Monitoring          | Not defined                         | No uptime, error, or CSP reporting                                                                                                                      | Establish privacy-compatible monitoring and incident ownership                                      |

### Overall conclusion

The engineering is close to release quality. The business, legal, proof, and production-operations layers are not finished. A professional agency launch should remain on hold until the P0 gates in this document are closed.

---

## 2. Current end-to-end system

### Runtime architecture

```text
Prospective client
  |
  v
Next.js marketing and project-intake application
  |-- Nine public routes
  |-- Generated sitemap, robots file, 404, and social image
  |-- Local fonts and local visual assets
  |-- No user accounts, payment system, CMS, or first-party lead database
  |
  |-- Direct email --> contact@strivetg.com --> owner/provider not yet confirmed
  |
  `-- Project brief API
      |-- HubSpot durable lead record --> production account not yet configured
      `-- Resend notifications --> production account not yet configured

Repository release controls
  |-- ESLint
  |-- TypeScript
  |-- Next.js production build
  |-- Playwright route, link, interaction, and responsive checks
  |-- Axe automated accessibility checks
  |-- Public asset budget check
  `-- Production dependency audit
```

### Public routes

| Route              | Current role                                                                  | Current concern                                                            |
| ------------------ | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `/`                | Positioning, services, artifacts, method, accountability, FAQ preview, CTA    | Needs real permissioned proof and approved accountable-person evidence     |
| `/services`        | Outcome-led capabilities, operating model, boundaries, ownership              | Missing approved price/timing/platform facts and real examples             |
| `/approach`        | Method and truthful capability artifacts                                      | Not a substitute for permissioned client evidence                          |
| `/about`           | Company operating principles and accountability                               | Founder identity remains intentionally absent                              |
| `/faq`             | Fit, scope, pricing method, cancellation, ownership, support, and offboarding | Commercial working copy requires owner and qualified legal approval        |
| `/contact`         | Project-brief primary path and direct email fallback                          | Production inbox ownership and lead operations require approval            |
| `/start-a-project` | Accessible project brief and qualification context                            | Provider accounts, secrets, routing, retention, and monitoring are gated   |
| `/privacy`         | Working disclosure matching the implemented intake architecture               | Counsel/owner review and production provider facts remain required         |
| `/terms`           | Website-use and agreement-precedence principles                               | Does not replace an MSA, SOW, recurring-service agreement, or legal review |

### What is intentionally absent

- Authentication or a client portal
- First-party lead database; durable lead records are delegated to HubSpot when enabled
- Payment processing
- CMS
- Advertising, session replay, analytics, or tracking pixels
- Public pricing or universal timelines
- Public scheduling has been removed; an approved private call may be offered only after human qualification
- Invented testimonials, clients, case studies, awards, certifications, or results

These absences are not automatically defects. They reduce attack surface and prevent unsupported claims. Each should be added only when there is a defined owner, purpose, privacy basis, operational process, and maintenance plan.

---

## 3. What already works well

### Brand and experience

- The editorial visual system is distinctive and no longer resembles a generic agency template.
- The hero quickly communicates websites, reporting, and automation.
- The paper/ink/signal palette is consistent across routes.
- Typography, diagrams, rules, and restrained motion provide a recognizable identity.
- Desktop and mobile layouts feel intentionally art-directed rather than merely stacked.
- The primary CTA is prominent on desktop and remains in the first mobile viewport.

### Truth and credibility discipline

- Unsupported numerical claims and universal guarantees are absent.
- Ownership, handoff, scope, and evidence principles are consistent.
- The site does not invent team members, clients, testimonials, or certifications.
- The project brief reports success only after the configured CRM confirms durable delivery.
- The absence of analytics, payments, public scheduling, and user accounts is accurately disclosed.

### Engineering

- Next.js App Router pages are server-rendered or generated according to route needs; project intake is dynamic.
- Shared claims are centralized in `apps/web/app/lib/company.ts`.
- Fonts are self-hosted with tracked SIL Open Font License files.
- Navigation and the accessible project brief are isolated client components.
- Security headers are configured centrally.
- Production dependencies currently have no known audit findings.
- Test coverage includes every public route, internal links, accessibility, responsive overflow, reduced motion, mobile navigation, project-intake delivery/failure behavior, fonts, palette, and security headers.

### Current verification evidence

This table records the latest complete `pnpm verify` run only. Historical report counts are snapshots, not current release evidence.

| Check                       | Fresh `pnpm verify` result on September 1, 2026                           |
| --------------------------- | ------------------------------------------------------------------------- |
| Complete release command    | Passed end to end with exit code 0                                        |
| ESLint                      | Passed with zero warnings                                                 |
| TypeScript                  | Passed                                                                    |
| Production build            | Passed; 14 application outputs including the dynamic project-brief API    |
| Playwright                  | 56 tests passed                                                           |
| Automated accessibility     | No serious automated accessibility findings across all nine public routes |
| Internal links              | Passed                                                                    |
| Responsive overflow         | Passed at the release widths exercised by Playwright                      |
| Reduced motion              | Passed                                                                    |
| Public assets               | Five files; 44,877 bytes                                                  |
| Production dependency audit | No known vulnerabilities found                                            |

Automated success is not equivalent to final legal, manual accessibility, field performance, or production infrastructure approval.

---

## 4. Client journey and navigation audit

### The prospective client's questions

A high-performing agency site should answer these questions in this order:

1. Is this for a business like mine?
2. Do they understand my problem?
3. What exactly can they help with?
4. Have they done credible work?
5. Who will I trust with the work?
6. How do they operate?
7. What will the engagement require from me?
8. What might it cost and how long might it take?
9. What happens after launch?
10. What should I do next?

The current site answers questions 1–3, 6, 7, and 10 reasonably well. It cannot yet answer 4, 5, 8, or 9 with approved specificity.

### Current primary navigation

```text
Services | Approach | About | FAQ | Contact | [Start a Project]
```

Current assessment:

- `Approach` accurately labels the capability-artifact page before verified client work exists.
- FAQ is in the primary navigation.
- One form-first `Start a Project` action is used across the site.
- Permanent redirects preserve the previous `/work` and `/consultation` routes.
- Active-page and mobile navigation behavior are covered by automated tests.

### Navigation before verified case studies

```text
Services | Approach | About | FAQ | Contact | [Start a Project]
```

Preserve these controls:

- Keep the route named `/approach` until permissioned work exists.
- Keep `How We Work` as a homepage section, not a duplicate navigation item.
- Keep FAQ in primary navigation.
- Keep `Start a Project` as the form-first primary action.
- Keep the logo as the Home link; a separate Home label is unnecessary.
- Preserve the permanent `/work` to `/approach` and `/consultation` to `/start-a-project` redirects.

### Recommended navigation after verified work exists

```text
Services | Work | Approach | About | Contact | [Start a Project]
```

FAQ can remain in the footer or move into the header based on measured visitor behavior. Do not restore `Work` until at least one complete, permissioned evidence package exists.

### Recommended homepage sequence

1. Clear problem and audience statement
2. Three connected outcomes
3. Tangible deliverables and examples
4. Real work, artifacts, or evidence
5. Accountable company contact and, if approved, named founder
6. Engagement approach
7. Ownership and handoff commitments
8. FAQ preview
9. Project-brief CTA

The strongest conversion improvement will come from proof and human accountability—not additional animation.

---

## 5. Route-by-route client audit

### Homepage

**Keep**

- Monumental asymmetric hero
- Specific web/data/automation positioning
- Three connected operating layers
- System diagram and dark contrast section
- Clear project-brief CTA

**Change**

- Reduce repeated explanations about absent claims, evidence, and endorsements.
- Remove visible internal production language such as “approved image pending.”
- Keep internal explanations about missing founder material off the public site.
- Preserve company-principle and direct-accountability messaging unless the complete founder package is approved.
- Replace the proof disclaimer section with verified artifacts, a real case study, or a positive Approach summary.
- Tighten the page so each section advances the decision instead of restating scope and handoff principles.

### Services

**Keep**

- Outcome-first organization
- Specific capability lists
- Scope boundaries and ownership model
- Clear separation between project work and continuing support

**Add after approval**

- Ideal client profile and disqualifiers
- Representative project types
- Typical engagement shape
- Honest timing ranges
- Pricing approach or representative ranges that can be honored
- Supported platforms and technologies Strive can maintain
- What the client must provide
- Example deliverables or annotated artifacts
- Clear distinction among consulting, implementation, hosting, maintenance, and licensed products

### Work / Approach

**Historical problem, now corrected**

The page is honest but expectation-breaking. It tells a visitor that no case study exists after the navigation promised “Work.” Repeated phrases such as “No fictional case studies” make the absence of proof the page's main message.

**Current direction**

- Keep the page named `Approach`; the former `/work` route now redirects to it.
- Lead with three ways Strive diagnoses and improves systems.
- Show example deliverables without implying client results.
- Use original diagrams, checklists, screenshots, or a documented internal build as capability artifacts.
- Remove defensive statements about fictional work.

**Long-term direction**

- Create a separate Work or Case Studies page.
- Publish only evidence packages meeting the standard in Section 7.

### About

**Current direction**

The public site makes no founder-led credibility claim. It uses company principles and direct accountability instead. Founder identity is therefore not an initial-launch blocker. It remains a major credibility improvement if the owner chooses to publish the complete, approved package.

**Required only if founder identity will be published**

- Approved founder name and title
- Current professional photograph and alt text
- Short factual biography
- Relevant, supportable experience
- Approved LinkedIn, GitHub, or other professional profile
- Clear explanation of when specialists or contractors participate
- Confirmation that founder-led wording is accurate

Until the complete package is supplied, preserve the current company-principle positioning. The legal entity identity and accountable public contact remain launch requirements regardless of the founder-publication decision.

### FAQ

**Keep**

- Plain-language answers
- Ownership and handoff clarity
- Responsible automation language
- FAQ structured data

**Improve after decisions are approved**

- Add honest project timing guidance
- Add approved pricing ranges or starting prices only when they can be honored
- Add client responsibilities
- Add support and offboarding expectations
- Add security/data-handling boundaries
- Add what Strive will not take on

### Contact and project brief

**Current state**

The form-first path collects the business problem, current systems, timing, investment context, and contact preference. Direct email remains an accessible fallback. Public copy does not advertise internal limitations or make a response-time promise.

**Recommended tone**

- Keep the project brief as the primary path.
- Explain what to send, what Strive reviews, and the possible next steps.
- Omit a response guarantee until one can be supported.
- State who monitors the pipeline only after the role is approved.

**Operational requirements**

- Confirm the inbox owner and backup owner.
- Require MFA on the email account.
- Define spam handling and secure attachment practices.
- Define an internal response target, even if it is not public.
- Complete the HubSpot and Resend activation gate in `LEAD_INTAKE_SETUP.md`.

### Project intake and private scheduling

**Keep**

- Accessible first-party project brief
- Conditional telephone handling and direct email fallback
- Durable-delivery success contract and honest failure states
- Guidance on useful context and expected investment range

**Confirm**

- HubSpot and Resend owners, access, secrets, pipeline, properties, retention, and monitoring
- Lead qualification, decline, follow-up, and escalation ownership
- Whether and when a private scheduling link is sent after qualification
- For any private call: owner, duration, price/free status, format, availability, cancellation, rescheduling, and follow-up

### Privacy and Terms

Both pages use public-facing language, while `LEGAL_REVIEW_REQUIRED.md` records the internal production hold. They must not be represented operationally as approved final policies until owner and qualified legal review is complete.

Before launch:

- Confirm approved effective dates and final entity information.
- Confirm actual hosting, logging, email, HubSpot, Resend, retention, and security behavior.
- Confirm applicable jurisdictions and required privacy rights.
- Confirm governing law, venue, liability, IP, commercial, and dispute terms.
- Decide whether unapproved policy pages should be `noindex` and excluded from the production sitemap until approval.
- Keep client project agreements separate from website terms.

---

## 6. Credibility and proof system

### Credibility ladder

Build proof in this order:

1. **Identity:** real legal business and accountable people
2. **Operational specificity:** exact deliverables, process, ownership, and boundaries
3. **Artifacts:** real interfaces, reports, diagrams, workflows, documentation, or code excerpts
4. **Project stories:** problem, scope, approach, evidence, limitations, and permission
5. **Third-party validation:** attributable testimonials, profiles, listings, references, or partnerships
6. **Formal credentials:** certifications, awards, and compliance claims only when current and in scope

### Optional founder evidence package

- Name
- Role/title
- Short and long biography
- Current photograph
- Photograph source and permission
- Approved profile links
- Support for any experience claim
- Review date and owner approval

### Minimum case-study evidence package

- Written client permission
- Approved client name or anonymization language
- Business context and baseline
- Contracted scope
- What Strive actually delivered
- Timeline context
- Evidence source and measurement method
- Result with attribution limitations
- Approved quote and speaker details, if used
- Logo and image permissions
- Review/expiry date

### Proof that can be published before performance metrics

When approved performance outcomes are unavailable, Strive can still show:

- Real deliverable screenshots
- System and workflow diagrams
- Redacted reporting structures
- Content architecture
- Accessibility or performance remediation examples
- Handoff documentation excerpts
- Decision logs or requirement matrices
- Before/after experience comparisons without unsupported business-result claims

Each artifact still needs ownership, confidentiality, permission, and accurate context.

### Prohibited credibility shortcuts

- Fake employees or generated portraits presented as staff
- Unapproved logos
- Anonymous quotations without a verifiable source
- Unsupported percentage improvements
- “Trusted by” language without evidence
- Partnership, certification, award, or compliance claims without current proof
- Security guarantees
- Universal SEO, revenue, lead, time-saving, uptime, or response promises

---

## 7. Positioning and commercial offer

`STRIVE_OFFER_AND_PRICING_STRATEGY.md` is the canonical source for offer architecture, pricing position, cancellation direction, ownership, support, and offboarding. This readiness reference records only the approval and operating gaps; it must not restate potentially drifting commercial terms.

### Positioning status

Public positioning is standardized around **growing small and midsize service businesses** across the current website. That working language remains subject to owner approval before production launch. If the owner changes it, update the shared public facts, route metadata, structured data, social image, proposal language, and sales materials together.

### Ideal client profile to document

- Business type and industry boundaries
- Typical stage or complexity
- Decision-maker role
- Problem urgency
- Existing systems and constraints
- Budget readiness
- Ability to provide access, content, decisions, and a project owner
- Geographic/service-area restrictions
- Regulated or sensitive-data exclusions

### Disqualifiers to document

- Requests outside verified expertise
- Unclear ownership or authority
- Unlawful, deceptive, or unsafe use cases
- Unsupported deadlines
- No project owner or access
- Unwillingness to define scope or change control
- Regulated data or compliance duties Strive is not prepared to accept
- Guaranteed-results requirements

### Commercial approval status

Initial projects, eligible monthly services, and expanded work are distinct commercial categories. The owner still must approve the actual offerings, discovery and payment structure, minimum engagement and investment bands, cancellation mechanics, ownership and handoff model, and operating boundaries. Use `OWNER_LAUNCH_DECISIONS.md` for those launch choices and `STRIVE_OFFER_AND_PRICING_STRATEGY.md` for the detailed working rationale. Do not publish or contract against unapproved commercial facts.

---

## 8. Lead intake and sales operating system

### Pipeline design and activation status

The HubSpot adapter and human-operated pipeline design already exist; `LEAD_INTAKE_SETUP.md` is the technical source of truth. Production activation, account and record owners, stage governance, qualification criteria, follow-up practice, and monitoring remain open. Only the initial `New Inquiry` stage is application-controlled. All qualification and later-stage changes require a human decision until separately approved.

### Minimum lead record

- Date and source
- Contact name, company, role, email, and approved contact details
- Website or relevant systems
- Business problem
- Desired outcome
- Timing and constraints
- Budget context, when appropriate
- Decision-makers
- Data sensitivity or regulatory concerns
- Fit assessment
- Next action, owner, and due date
- Project-brief review and any private-call notes
- Proposal and contract status
- Win/loss reason
- Retention/deletion date

### Intake and optional private-call controls

- Name a primary and backup owner.
- Require MFA.
- Confirm recovery methods and ownership of the accounts.
- Define internal response and follow-up targets.
- If private calls are offered, approve the invitation criteria, tool owner, availability, reminders, cancellation, rescheduling, and no-show process before use.
- Avoid collecting sensitive information in open text fields.
- Reconcile collected fields with the privacy policy and retention schedule.

### Project brief review and qualification checklist

1. Review the submitted business, authority, problem, systems, timing, investment context, and contact preference.
2. Identify missing context, access constraints, dependencies, and data-sensitivity concerns.
3. Assess fit without promising scope, price, timing, or acceptance.
4. Record the human qualification decision, reason, accountable owner, and next action.
5. Invite a private call only when a human reviewer decides it is useful.
6. Record any call notes and send only the approved follow-up for that decision.

### Proposal and contracting package

Create and professionally review:

- Proposal template
- Master Services Agreement, if appropriate
- Statement of Work template
- Change-order template
- Data Processing Addendum when needed
- Confidentiality/NDA approach
- Subcontractor agreement and confidentiality terms
- Case-study and logo permission form
- Acceptance/sign-off form
- Support/maintenance addendum
- Offboarding/transition checklist

### Sales metrics for internal operations

- Qualified lead rate
- Private-call invitation and attendance rate, if private calls are used
- Proposal rate
- Proposal acceptance rate
- Time from inquiry to decision
- Average engagement value
- Source-to-client conversion
- Lost reason
- Repeat/recurring revenue

Do not publish these metrics unless the underlying records, definitions, period, and context are verified.

---

## 9. Project delivery operating system

The site describes six phases. Each needs defined artifacts and ownership.

| Phase                                  | Required outputs                                                                                                         |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Project brief review and qualification | Human qualification decision, notes, accountable owner, next action, and private-call invitation decision                |
| Discovery                              | Current-state inventory, stakeholder needs, access list, constraints, risks, baseline                                    |
| Scope                                  | SOW, deliverables, exclusions, roles, milestones, dependencies, price, acceptance, change process                        |
| Build                                  | Project plan, backlog, decision log, reviewable increments, status updates, change records                               |
| Validate                               | Requirements traceability, content approval, browser/device QA, accessibility, performance, security, integration checks |
| Launch/support                         | Launch checklist, rollback plan, account ownership, documentation, training, support scope, handoff sign-off             |

### Required delivery controls

- One accountable project owner on each side
- Written communication channel and meeting cadence
- Decision log
- Scope and change log
- Risk and dependency register
- Client content/access responsibility matrix
- Version control and review rules
- Staging and production separation
- Acceptance criteria
- Launch and rollback plan
- Credential transfer procedure
- Documentation and training
- Final sign-off

### Access and credential handling

- Use a business password manager; never send reusable passwords in ordinary email or chat.
- Require MFA wherever supported.
- Prefer client-owned accounts and least-privilege access.
- Document who owns domains, hosting, analytics, email, integrations, repositories, and billing.
- Remove or rotate access at handoff or termination.
- Never place client secrets in source control, screenshots, tickets, or case studies.
- Define how sensitive files are transferred and deleted.

### Quality checklist for every website delivery

- Approved content and claims
- Metadata, canonicals, social image, sitemap, and robots
- Semantic headings and landmarks
- Keyboard and focus behavior
- Color contrast and reduced motion
- Mobile and desktop responsive review
- Browser support matrix
- Project brief, email, optional private-call path, and error states
- Link check
- Performance budget
- Security headers and dependency audit
- Privacy/cookie behavior matching disclosures
- Analytics consent and event validation, if present
- Backup and rollback
- Domain, DNS, SSL, redirects, and canonical host
- Client access, documentation, and training

### Case-study capture at project close

- Ask for permission while context is fresh.
- Record the baseline, scope, changes, evidence, and limitations.
- Secure quotes and brand permissions separately.
- Set a review date.
- Do not make publication permission a hidden condition of service.

---

## 10. Support, maintenance, and recurring services

Before selling continuing support, define:

### Service boundaries

- Covered websites, environments, integrations, and accounts
- Included maintenance and content work
- Excluded project work
- Monitoring coverage
- Backup responsibility and retention
- Security-update practice
- Browser/platform support
- Third-party subscription responsibility

### Service expectations

- Business hours and timezone
- Supported channels
- Severity definitions
- Response targets versus resolution targets
- Maintenance windows
- Client escalation contact
- Strive escalation owner
- Incident communication process
- After-hours availability, if any

### Continuity and offboarding

- Renewal and cancellation process
- Access export
- Domain and DNS transfer
- Data export formats
- Source, design, content, and documentation transfer
- Credential rotation/removal
- Final invoice and license review
- Transition assistance scope and price
- Retention and deletion after termination

Never advertise uptime, backup restoration, monitoring, response, or security commitments until the operating process can support the wording.

---

## 11. Legal, privacy, finance, and business administration

### Legal launch blockers

- Confirm exact legal entity, type, jurisdiction, and any DBA relationship.
- Confirm legal and notice address.
- Confirm contracting party and authorized signer.
- Approve Privacy and Terms with qualified counsel.
- Establish governing law, venue, disputes, warranties, liability, and indemnity terms.
- Establish IP definitions and transfer/license language.
- Establish confidentiality and publicity permissions.
- Establish payment, taxes, cancellation, late fees, refunds, and change control.
- Establish third-party and open-source treatment.
- Establish data processing and security responsibilities.

### Privacy data map

Document every current and future system that handles:

- Website logs
- Email inquiries and attachments
- Project briefs, HubSpot lead records, Resend notifications, and any private scheduling records
- Meeting recordings or notes
- CRM records
- Proposals, contracts, and invoices
- Client credentials
- Client data and project files
- Analytics or monitoring data
- Backups

For each system record the owner, provider, purpose, categories, lawful basis where applicable, location, subprocessors, access, retention, deletion, export, incident contact, and contractual terms.

### Finance and administration

- Bookkeeping and chart of accounts
- Business banking
- Invoicing and payment system
- Tax registrations and filings
- W-9 or equivalent vendor documentation
- Expense and reimbursement policy
- Deposit handling
- Accounts receivable process
- Contractor classification and payment
- Professional, general liability, cyber, and other insurance decisions
- Record-retention schedule

Do not publish registration, address, tax, insurance, or certification information unless legally required and approved.

---

## 12. SEO, discoverability, and content marketing

### Current strengths

- Route-specific titles and descriptions
- Canonicals
- Open Graph and Twitter metadata
- Generated social image
- Sitemap and robots rules
- Organization, Service, and FAQ structured data
- Static rendering and crawlable content
- Clear internal links

### Current gaps

- Canonical domain and `www` behavior are not owner-confirmed.
- Organization schema lacks legal identity, logo URL, profiles, address, and contact points because they are unapproved.
- Public positioning is standardized around growing small and midsize service businesses but still needs owner approval.
- The social image uses a simpler visual treatment and terminology than the website.
- Sitemap `lastModified` is hard-coded and will become stale.
- Draft legal pages are currently indexable and included in the sitemap.
- No search-engine ownership verification is documented.
- No approved external profiles or `sameAs` links exist.
- No content publishing or review cadence is defined.

### Search readiness checklist

- Confirm canonical host and redirect rules.
- Verify ownership with relevant search consoles.
- Submit and monitor the sitemap.
- Validate structured data.
- Confirm production robots behavior.
- Review indexed pages after launch.
- Establish a content and update cadence.
- Track branded and service-intent queries only after measurement and privacy decisions are approved.
- Add local-business data only if the address, service area, hours, and public use are approved.

### Content strategy

Prioritize useful evidence over generic thought leadership:

- Project stories
- Technical and operational teardowns
- Before/after system explanations
- Guides for evaluating website, reporting, or workflow problems
- Transparent scope and handoff practices
- Founder point-of-view pieces supported by real experience, only if founder publication is approved

Every piece needs an owner, factual source, review date, CTA, metadata, and update/archive rule.

---

## 13. Analytics and conversion measurement

The absence of analytics is currently consistent and privacy-preserving. Do not add tracking merely because agencies usually do.

### Decision required

Choose one of these models:

1. **No website analytics:** measure inquiries and outcomes manually in the lead pipeline.
2. **Privacy-focused aggregate analytics:** collect only the minimum necessary events.
3. **Full marketing analytics:** add only with a documented purpose, consent/opt-out analysis, privacy updates, CSP changes, retention, and owner responsibility.

### Minimum useful funnel events if analytics is approved

- Start a Project selected
- project brief started, if measurement is approved
- project brief submitted
- qualified inquiry
- private call invited
- proposal sent
- engagement won or lost

Website events alone do not measure business success. The lead pipeline must connect inquiries to qualification and revenue outcomes.

### Measurement governance

- Define each event and owner.
- Prevent sensitive form or URL data from being captured.
- Test consent and opt-out behavior.
- Document retention and access.
- Reconcile analytics behavior with Privacy and CSP.
- Review data usefulness quarterly and remove unused collection.

---

## 14. Accessibility and inclusive experience

### Current automated coverage

- One main landmark and one visible H1 per route
- Axe WCAG 2.x automated checks
- Keyboard-operable navigation and project brief
- Escape close and focus restoration
- Skip link and visible focus treatment
- Reduced-motion behavior
- Mobile CTA placement
- Horizontal overflow checks

### Manual review still required

- Screen-reader review on macOS/iOS and Windows, based on the supported audience
- 200% and 400% zoom
- Text spacing overrides
- Forced-colors/high-contrast mode
- Keyboard-only review of every route
- Touch-target and mobile screen-reader review
- Focus order after hash navigation
- Link purpose and repeated CTA context
- Decorative versus informative diagram announcements
- Legal document reading comfort
- Project-brief error, success, autofill, and conditional-field behavior with assistive technology

### Accessibility ownership

- Define the supported browser/assistive-technology matrix.
- Record known third-party limitations.
- Add an accessibility contact path or statement if appropriate.
- Re-run manual review after significant design, content, navigation, or integration changes.

---

## 15. Performance and asset governance

### Current baseline

- Mostly static marketing pages plus a dynamic project-intake route and API
- Approximately 102 kB shared first-load JavaScript in the latest build
- Approximately 45 kB of public image/SVG assets
- Approximately 460 kB of source font files before build optimization
- No autoplay video or audio
- No public scheduling embed or global third-party form script
- Local fonts and assets

### Missing evidence

- No recorded Lighthouse result for the current hardened build
- No real-user Core Web Vitals
- No production CDN/cache evidence
- No slow-network or low-end-device review
- No production HubSpot or Resend delivery-latency and failure-rate evidence

### Performance controls

- Establish page and asset budgets.
- Record Lighthouse on representative mobile and desktop profiles.
- Confirm built font formats, preload behavior, and actual transferred bytes.
- Test first visit and repeat visit.
- Test without JavaScript where practical.
- Monitor real production Web Vitals only if a privacy-compatible collection method is approved.
- Recheck after adding analytics, images, video, CMS, new form fields, or client work.

---

## 16. Security audit and required controls

### Current strengths

- No authentication, payments, user accounts, or first-party lead database
- Validated first-party project-brief API with payload limits, honeypot, rate limiting, durable-provider confirmation, bounded retries, and idempotency
- CSP and defensive browser headers
- Public frames disallowed
- Objects and inline script attributes disabled
- Production HSTS configuration
- Cross-origin opener/resource policies
- Permissions policy disables camera, microphone, geolocation, and browsing topics
- Server-only HubSpot and Resend credentials with fail-closed activation flags
- No known production dependency vulnerabilities
- No tracked secrets found in the reviewed repository

### Current security gaps and decisions

- Production CSP still permits inline script and style execution required by the current Next.js setup; a nonce-based model would require architectural work and testing.
- No automated dependency-update service is configured.
- No CI security gate is configured in the repository.
- No secret scanning, code scanning, or branch-protection evidence exists in the repository.
- No deployed-header monitor or CSP report endpoint exists.
- No incident-response owner or runbook exists.
- No completed third-party/vendor review record exists for hosting, email, HubSpot, Resend, or future tools.
- No client credential-handling policy is documented.
- No security contact or vulnerability-reporting policy exists.

### HSTS verification status

`apps/web/next.config.js` and the root README agree that production responses currently include HSTS with `includeSubDomains`. Operational verification remains required before deployment:

- Confirm every relevant subdomain is HTTPS-ready.
- If confirmed, keep the header and record the deployed evidence.
- If not confirmed, remove or narrow HSTS until readiness is established.
- Do not add preload until the consequences are understood and all subdomains are permanently ready.

### Required operational security controls

- MFA for domain, DNS, hosting, email, calendar, repository, finance, and client systems
- Business password manager
- Least privilege and access reviews
- Device security and patching
- Secure backup and recovery methods
- Incident-response plan and contact tree
- Vendor inventory and review cadence
- Data classification and retention
- Secure client file transfer
- Credential rotation and offboarding
- Dependency and security update cadence
- Documented vulnerability intake and response

---

## 17. Repository, CI, and deployment readiness

### Current repository strengths

- Locked pnpm workspace
- Explicit Node minimum
- Central release command: `pnpm verify`
- Shared lint and TypeScript configurations
- Production build output tracked by Turborepo caching
- Generated artifacts ignored
- Font license files tracked
- Historical screenshots and reports available

### Missing repository controls

- No CI workflow
- No protected-branch or required-check configuration in repo
- No CODEOWNERS file
- No pull-request template
- No issue templates
- No dependency-update automation
- No documented release version/tag process
- No deployment configuration
- No production environment-specific secret inventory or deployment runbook; a repository `.env.example` now documents the intake contract
- No deployment runbook
- No rollback runbook
- No incident runbook
- No uptime/error monitoring configuration
- No production smoke-test command separate from the full suite

### Recommended CI pipeline

```text
Checkout
  -> Pin supported Node and pnpm via Corepack
  -> pnpm install --frozen-lockfile
  -> pnpm lint
  -> pnpm check-types
  -> pnpm build
  -> pnpm check:assets
  -> pnpm test
  -> pnpm audit --prod
  -> Publish preview deployment
  -> Run preview smoke/accessibility checks
  -> Require human approval for production
  -> Deploy immutable build
  -> Run production smoke, headers, links, project intake, sitemap, and robots checks
```

### Environment model

Define:

- Local development
- Pull-request preview
- Staging, if operationally necessary
- Production

For each environment document the host, branch, secrets, analytics state, robots behavior, data handling, external integration account, access owner, and retention.

### Production deployment checklist

- Approved release commit
- Clean working tree
- CI checks passed
- Owner/content approval
- Legal approval
- Production hostname confirmed
- `https://www.strivetg.com` confirmed as the initial canonical host and the apex-to-`www` redirect approved after DNS, SSL, and ownership checks
- DNS and SSL verified
- HSTS decision confirmed
- Email, HubSpot, Resend, and any approved private-call invitation path tested
- All routes and 404 tested
- Sitemap, robots, canonicals, and social image tested
- Security headers tested on deployed responses
- Accessibility smoke check
- Mobile and desktop visual check
- Analytics/consent tested, if present
- Uptime and error monitoring active
- Rollback path tested
- Release record created

### Rollback plan

- Keep the previous known-good immutable deployment.
- Record who can roll back.
- Define rollback triggers.
- Restore the previous deployment without changing unrelated DNS when possible.
- Verify routes, project intake, email fallback, and headers after rollback.
- Record the incident, decision, and follow-up.

---

## 18. Monitoring, resilience, and continuity

### Minimum production monitoring

- Uptime check for the homepage, contact, and project-brief page
- Expected status check for sitemap and robots
- SSL certificate expiry monitoring
- Domain renewal monitoring
- Email delivery and inbox review
- Project-brief provider delivery, failure-state, and notification-path check
- Client-side error monitoring only if privacy and data-handling decisions are approved
- Security-header drift check

### Ownership and alerts

Every alert must have:

- Primary owner
- Backup owner
- Severity
- Notification channel
- Expected response
- Escalation path
- Resolution notes

### Business continuity inventory

- Repository and remote access
- Domain registrar
- DNS provider
- Hosting provider
- Email provider
- HubSpot, Resend, and any approved private-call tool account
- Password manager and recovery
- Finance/invoicing systems
- Client project repositories and files
- Backup locations and restoration test dates

The owner should be able to recover or transfer the agency's essential systems without relying on one undocumented personal account.

---

## 19. Content governance

### Sources of truth

- `apps/web/app/lib/company.ts`: approved public facts and reusable claims
- `OWNER_LAUNCH_DECISIONS.md`: controlling concise decision register for initial production launch
- `CONTENT_REQUIRED.md`: comprehensive facts and proof reference
- `CONTENT_DECISIONS_REQUIRED.md`: comprehensive owner-decision reference
- `STRIVE_OFFER_AND_PRICING_STRATEGY.md`: canonical commercial strategy for project, recurring-service, pricing, cancellation, ownership, and offboarding direction
- `LEAD_INTAKE_SETUP.md`: project-brief provider contract and production activation gate
- `LEGAL_REVIEW_REQUIRED.md`: legal decisions and production hold
- `STRIVE_DESIGN_TRANSLATION.md`: design intent
- `STRIVE_MOTION_SPEC.md`: motion contract
- This document: comprehensive operational-readiness reference

Historical audit and handoff documents should remain evidence, not competing live sources of truth.

### Current documentation drift to fix

- Historical reports describe older test counts and earlier repository state.
- Multiple reports can make it difficult to know which checklist controls launch.

### Content approval record

For every material public claim, record:

- Exact wording
- Source
- Evidence location
- Owner
- Approver
- Approval date
- Expiry/review date
- Usage restrictions
- Routes/components using the claim

### Content change workflow

1. Draft from verified facts.
2. Review brand and comprehension.
3. Review legal/privacy implications.
4. Confirm asset rights and accessibility text.
5. Update shared data sources.
6. Run tests and visual review.
7. Obtain approval.
8. Deploy through the release process.
9. Record the change and next review date.

---

## 20. Responsibility matrix

No individual names are assigned here. The owner must fill them in.

| Control                        | Primary owner | Backup/approver          | Status              |
| ------------------------------ | ------------- | ------------------------ | ------------------- |
| Legal entity and public facts  | TBD           | Legal/accounting         | Open                |
| Founder publication, if chosen | TBD           | Content/legal            | Optional for launch |
| Client proof and permissions   | TBD           | Client approver/legal    | Open                |
| Domain and DNS                 | TBD           | Backup technical owner   | Open                |
| Hosting and deployment         | TBD           | Backup technical owner   | Open                |
| Repository and releases        | TBD           | Code reviewer            | Open                |
| Contact inbox                  | TBD           | Backup lead owner        | Open                |
| HubSpot and Resend intake      | TBD           | Backup lead owner        | Open                |
| Private scheduling, if enabled | TBD           | Backup lead owner        | Open                |
| Lead pipeline                  | TBD           | Sales owner              | Open                |
| Proposals and contracts        | TBD           | Legal/owner              | Open                |
| Invoicing and payments         | TBD           | Accounting/owner         | Open                |
| Privacy requests               | TBD           | Legal/privacy advisor    | Open                |
| Client credentials/data        | TBD           | Security/technical owner | Open                |
| Support and incidents          | TBD           | Backup support owner     | Open                |
| Monitoring alerts              | TBD           | Backup technical owner   | Open                |
| Content and SEO                | TBD           | Owner/editor             | Open                |
| Accessibility review           | TBD           | Independent reviewer     | Open                |

---

## 21. Prioritized roadmap

### P0 — Production and agency launch blockers

- [ ] Confirm legal entity, DBA relationship, jurisdiction, and notice address.
- [ ] Obtain professional review and approval of Privacy and Terms.
- [ ] Decide whether draft legal pages must be `noindex` and absent from the sitemap until final.
- [ ] Verify `https://www.strivetg.com` as the initial canonical host; confirm apex-to-`www` redirect behavior, DNS ownership, hosting, SSL, and HSTS readiness.
- [ ] Confirm the contact inbox, HubSpot, Resend, pipeline, and any approved private-call tool are owned, monitored, MFA-protected, and recoverable.
- [ ] Confirm the legal entity identity, trade-name relationship, and accountable public contact information.
- [ ] Remove all visible “pending,” “working draft,” and internal production explanations from customer-facing pages before launch.
- [ ] Confirm actual service, support, ownership, privacy, retention, and security practices.
- [ ] Establish counsel-reviewed contract, scope, payment, IP, liability, and change-control documents.
- [ ] Select a production hosting platform and document environments, deploy, rollback, and access.
- [ ] Add CI with required release checks.
- [ ] Establish uptime, SSL/domain, project-intake delivery, and notification-path monitoring.
- [ ] Name primary and backup owners for every critical system.

### P1 — Credibility and conversion

- [x] Replace the current navigation with the pre-proof client journey.
- [x] Rename `/work` as `Approach` until real case studies exist.
- [x] Move FAQ into primary navigation.
- [x] Standardize the form-first primary CTA as `Start a Project`.
- [x] Remove defensive absence-focused copy from Approach, Contact, About, and the homepage.
- [ ] Decide whether founder identity will be published; if yes, supply the complete approved founder package.
- [ ] Add at least one permissioned case study or a set of real capability artifacts.
- [x] Standardize the audience as growing small and midsize service businesses.
- [ ] Add approved fit, timing, pricing, platform, and client-responsibility guidance.
- [x] Update the social image to the current editorial brand and positioning.
- [ ] Confirm Organization schema, profiles, and contact data.
- [ ] Establish search-console ownership and submit the final sitemap.

### P1 — Sales and delivery operations

- [ ] Activate the existing pipeline design, assign owners, approve stage governance, and prove the human qualification and follow-up practice.
- [ ] Approve the project-brief qualification checklist and, if used, the private-call agenda and follow-up template.
- [ ] Create proposal, SOW, change-order, acceptance, and support templates.
- [ ] Choose the project-management, documentation, communication, password, signature, invoice, and secure-file systems.
- [ ] Define project status cadence, decision log, risk log, and scope-change process.
- [ ] Define launch, rollback, handoff, and offboarding checklists.
- [ ] Define an internal response target and lead follow-up ownership.

### P2 — Quality, measurement, and scale

- [ ] Complete manual screen-reader, zoom, forced-colors, and mobile accessibility review.
- [ ] Record Lighthouse baselines and production Web Vitals strategy.
- [ ] Decide the analytics model and update privacy/CSP before implementation.
- [ ] Add dependency-update automation and repository security controls.
- [ ] Add deployed smoke tests and security-header monitoring.
- [ ] Create incident-response and business-continuity runbooks.
- [ ] Define recurring support tiers only after operations can support them.
- [ ] Establish a content and case-study publication cadence.

### P3 — Optional maturity improvements

- [ ] Add a CMS only when publishing frequency and ownership justify it.
- [ ] Activate the first-party project brief only after delivery, spam, privacy, retention, security, and backup ownership are approved and tested.
- [ ] Add advanced scoring, routing, automated follow-up, and rejection only after human qualification is proven.
- [ ] Add a client portal only when a clear recurring workflow requires it.
- [ ] Add richer media only within performance, accessibility, rights, and maintenance budgets.

---

## 22. Definition of website launch-ready

The website is launch-ready only when all of these are true:

- [ ] Public company identity is accurate and approved.
- [x] The public site makes no founder-led claim; founder identity remains an optional credibility improvement.
- [ ] No visible internal placeholders or draft-production messages remain.
- [ ] Privacy and Terms are professionally reviewed and match operations.
- [ ] Canonical domain, DNS, SSL, redirects, and HSTS are confirmed.
- [ ] Email, HubSpot, Resend, and any approved private-call path are owned, monitored, tested, and disclosed.
- [ ] Navigation matches actual content.
- [x] `Approach` does not promise client evidence that is not present.
- [ ] All public claims have sources and approvals.
- [ ] CI and production deployment/rollback are documented.
- [ ] Release gates pass on the exact release commit.
- [ ] Production smoke, accessibility, responsive, link, project-intake, sitemap, robots, social, and header checks pass.
- [ ] Monitoring and alert ownership are active.
- [ ] Nothing is pushed or deployed from an unreviewed dirty working tree.

---

## 23. Definition of agency operating-ready

The agency is operating-ready only when:

- [ ] Lead ownership and qualification are defined.
- [ ] The sales pipeline is recorded outside individual inbox memory.
- [ ] Proposals, contracts, scope, payment, and change control are standardized.
- [ ] Client access and credentials are handled securely.
- [ ] Project phases produce consistent artifacts.
- [ ] Acceptance, launch, rollback, and handoff are explicit.
- [ ] Support is sold only against defined coverage and targets.
- [ ] Finance, tax, insurance, and recordkeeping responsibilities are assigned.
- [ ] Privacy, retention, vendor, and incident practices are documented.
- [ ] Business-critical accounts have MFA, backup owners, and recovery methods.
- [ ] Proof capture and publication permissions are built into project closeout.
- [ ] Weekly, monthly, quarterly, and annual review cadences are operating.

---

## 24. Operating cadence

| Cadence                                      | Required review                                                                                                  |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Every inquiry                                | Record source, context, owner, next action, and retention                                                        |
| Every private qualification call, if offered | Call decision, notes, and approved written follow-up                                                             |
| Weekly                                       | Lead pipeline, proposals, project risks, support issues, overdue actions                                         |
| Every release                                | Full verification, visual review, deployed smoke, rollback record                                                |
| Monthly                                      | Dependency updates, audit, uptime, domain/SSL, broken links, content freshness, access review                    |
| Quarterly                                    | Service/pricing review, processor/privacy review, case-study opportunities, SEO/search review, incident exercise |
| Twice yearly                                 | Manual accessibility review, vendor/access review, restore test, legal-content review                            |
| Annually                                     | Legal, insurance, tax, security, continuity, retention, contract templates, brand/positioning review             |

---

## 25. Recommended operations document set

Create these under `docs/operations/` as the agency matures:

- `AGENCY_FACTS.md` — approved identity, profiles, domains, contact roles, review dates
- `LEAD_INTAKE_AND_QUALIFICATION.md`
- `SALES_PIPELINE.md`
- `DISCOVERY_AND_SCOPING.md`
- `PROJECT_DELIVERY_CHECKLIST.md`
- `WEBSITE_LAUNCH_CHECKLIST.md`
- `SUPPORT_AND_ESCALATION.md`
- `CLIENT_HANDOFF_AND_OFFBOARDING.md`
- `CONTENT_AND_CLAIMS_GOVERNANCE.md`
- `CASE_STUDY_TEMPLATE.md`
- `PRIVACY_DATA_MAP.md`
- `SECURITY_PRACTICES.md`
- `INCIDENT_RESPONSE.md`
- `DEPLOYMENT_AND_ROLLBACK.md`
- `BUSINESS_CONTINUITY.md`
- `VENDOR_INVENTORY.md`

Do not create documents merely to appear mature. Each document must name an owner, reflect actual behavior, and be reviewed on a schedule.

---

## 26. Immediate recommended sequence

Work in this order:

1. **Business truth:** legal entity, accountable contact, service model, commercial facts, and account owners; decide separately whether founder identity will be published.
2. **Legal and contracts:** final policies, MSA/SOW/change/payment/IP/privacy decisions.
3. **Client journey:** preserve the project-brief path, Approach page, positive copy, direct accountability, and FAQ prominence.
4. **Proof:** real artifacts and at least one permissioned project story.
5. **Lead operations:** inbox, project brief, pipeline, optional private call, follow-up, proposal, contract, deposit.
6. **Delivery operations:** access, discovery, scope, project control, validation, launch, handoff.
7. **Production operations:** CI, hosting, DNS, SSL, HSTS, monitoring, rollback, continuity.
8. **Measurement:** search ownership, optional analytics, internal funnel metrics.
9. **Scale only after repetition:** support tiers, CMS, CRM automation, client portal, richer media.

This sequence prevents Strive from automating or polishing processes that have not yet been proven manually.

---

## 27. Repository state at this audit

- Branch: `feat/strive-editorial-design-20260831`
- HEAD: `f92b7ed`
- The working tree contains uncommitted hardening changes made after that commit.
- The repository has a GitHub remote configured.
- No CI, hosting, deployment, monitoring, or environment configuration was found in the tracked repository.
- No push, merge, or production deployment was performed as part of this audit.

Before committing or releasing, review the working-tree diff, run the complete release gate, and record the final commit and deployment evidence.

---

## Final standard

Strive should aim for a site and operating system that feel confident because they are specific, accountable, and verifiable—not because they contain more effects, more pages, or stronger claims.

The website should make a prospective client think:

> They understand the problem, I can see how they work, I know who is accountable, the boundaries are clear, and there is enough real evidence to trust the next step.

That is the threshold for “as smooth as any agency.”
