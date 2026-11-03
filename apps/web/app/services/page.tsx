import type { Metadata } from "next";
import { Button } from "../components/Button";
import { EditorialMasthead } from "../components/EditorialMasthead";
import { Section } from "../components/Section";
import { StructuredData } from "../components/StructuredData";
import { company, servicePillars } from "../lib/company";

const operatingModel = [
  {
    number: "01",
    title: "Lean delivery",
    body: "Work stays close to the people responsible for planning, implementation, and review instead of moving through unnecessary layers.",
    signal: "Delivery",
  },
  {
    number: "02",
    title: "Direct accountability",
    body: "The written scope identifies who owns decisions, reviews, client inputs, and delivery responsibilities.",
    signal: "Responsibility",
  },
  {
    number: "03",
    title: "Transparent scope",
    body: "Initial projects define deliverables, exclusions, dependencies, acceptance checks, and commercial terms. Material additions require a separate scope or change order.",
    signal: "Boundaries",
  },
  {
    number: "04",
    title: "Flexible ongoing service",
    body: "Eligible ongoing monthly services do not require a long-term commitment. Renewal, cancellation, the active billing period, and support boundaries are stated in the agreement.",
    signal: "Continuity",
  },
  {
    number: "05",
    title: "Ownership clarity",
    body: "The agreement distinguishes client assets and accounts, custom deliverables, reusable Strive materials, and third-party licenses.",
    signal: "Ownership",
  },
  {
    number: "06",
    title: "Planned handoff",
    body: "Access, documentation, exports, subscriptions, and transition needs are addressed before the engagement closes.",
    signal: "Offboarding",
  },
] as const;

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website, search, reporting, automation, hosting, and support capabilities for growing small and midsize service businesses.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Services | ${company.name}`,
    description:
      "Three connected outcomes: get found and convert, understand what works, and remove repetitive work.",
    url: "/services",
  },
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": servicePillars.map((pillar) => ({
      "@type": "Service",
      name: pillar.eyebrow,
      description: pillar.description,
      provider: {
        "@type": "Organization",
        name: company.name,
        url: company.url,
      },
      url: `${company.url}/services#${pillar.id}`,
    })),
  };

  return (
    <>
      <EditorialMasthead
        eyebrow="Services"
        title="Connected systems for a clearer business."
        intro="Strive helps growing small and midsize service businesses improve how customers find them, how teams understand activity, and how repeat work moves."
      >
        <div className="hero-actions">
          <Button href="/start-a-project">Start a Project</Button>
        </div>
      </EditorialMasthead>

      <Section tone="light">
        <div className="section-heading">
          <p className="eyebrow">Outcome-led scope</p>
          <h2>Choose the business problem first.</h2>
          <p>
            Start with the decision, customer action, or workflow that needs to
            improve. The right capabilities follow from that context.
          </p>
        </div>
        <div className="service-detail-list">
          {servicePillars.map((pillar) => (
            <article id={pillar.id} className="service-detail" key={pillar.id}>
              <div>
                <p className="eyebrow">
                  {pillar.number} · {pillar.eyebrow}
                </p>
                <h2>{pillar.title}</h2>
                <p>{pillar.description}</p>
              </div>
              <ul className="capability-list">
                {pillar.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="section-heading section-heading-editorial">
          <p className="eyebrow">How the work is structured</p>
          <h2>Clear scope. Direct responsibility. Flexible continuity.</h2>
          <p>
            Initial implementation, optional ongoing service, and expanded work
            are treated as different commitments so cost, ownership, and next
            steps remain understandable.
          </p>
        </div>
        <div className="problem-ledger">
          {operatingModel.map((item) => (
            <article className="problem-row" data-reveal="row" key={item.title}>
              <span className="card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className="row-signal">{item.signal}</span>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="support-grid">
          <div>
            <p className="eyebrow eyebrow-on-dark">Managed support</p>
            <h2>Keep the system useful after launch.</h2>
            <p>
              Ongoing involvement is optional and scoped separately from an
              initial implementation. When it is useful, the agreement can
              define hosting, maintenance, monitoring, content changes, or
              continuous improvement.
            </p>
          </div>
          <div>
            <p className="kicker">An ongoing scope can define:</p>
            <ul className="plain-list">
              <li>Hosting responsibilities and account access</li>
              <li>Maintenance, backups, and update cadence</li>
              <li>Support channels and service boundaries</li>
              <li>Renewal, cancellation, change, and handoff terms</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="section-heading">
          <p className="eyebrow">Scope boundaries</p>
          <h2>A useful proposal makes the edges visible.</h2>
          <p>
            Deliverables, responsibilities, dependencies, review points, and
            exclusions should be understandable before implementation starts.
          </p>
        </div>
        <div className="problem-grid">
          <article className="problem-card">
            <span className="card-number">FIT</span>
            <h3>Right problem</h3>
            <p>
              The business can identify the customer, reporting, or operating
              problem and the decision the work should support.
            </p>
          </article>
          <article className="problem-card">
            <span className="card-number">SCOPE</span>
            <h3>Clear deliverables</h3>
            <p>
              The written scope identifies outputs, review cycles, content and
              access responsibilities, integrations, and acceptance checks.
            </p>
          </article>
          <article className="problem-card">
            <span className="card-number">INPUTS</span>
            <h3>What the project needs</h3>
            <p>
              Platform access, source data, client decisions, third-party tools,
              and specialist needs are surfaced before they become blockers.
            </p>
          </article>
        </div>
      </Section>

      <Section tone="dark">
        <div className="ownership-grid">
          <div>
            <p className="eyebrow eyebrow-on-dark">Ownership and handoff</p>
            <h2>Define ownership and handoff before the build.</h2>
          </div>
          <div>
            <p>
              The written scope should identify domains, data, content,
              accounts, custom deliverables, reusable materials, and third-party
              licenses so each responsibility is clear.
            </p>
            <p>
              Access, documentation, export, transition needs, and any ongoing
              services should be addressed alongside the deliverables—not left
              until the project closes.
            </p>
          </div>
        </div>
      </Section>

      <StructuredData data={serviceSchema} />
    </>
  );
}
