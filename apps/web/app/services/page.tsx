import type { Metadata } from "next";
import { Button } from "../components/Button";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/Section";
import { StructuredData } from "../components/StructuredData";
import { company, servicePillars } from "../lib/company";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Outcome-led website, search visibility, analytics, automation, hosting, and support services for growing service businesses.",
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
      <PageHero
        eyebrow="Services"
        title="Connected systems for a clearer business."
        intro="Strive brings websites, search, measurement, and automation together around three outcomes a small business can actually use."
      >
        <div className="hero-actions">
          <Button href="/consultation" variant="secondary">
            Discuss the right scope
          </Button>
        </div>
      </PageHero>

      <Section tone="light">
        <div className="section-heading">
          <p className="eyebrow">Outcome-led scope</p>
          <h2>Choose the business problem first.</h2>
          <p>
            The capabilities below are building blocks, not one-size-fits-all
            packages. Discovery determines which pieces belong in a useful
            scope.
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

      <Section tone="ink">
        <div className="support-grid">
          <div>
            <p className="eyebrow eyebrow-on-dark">Managed support</p>
            <h2>Hosting and upkeep sit underneath the outcome.</h2>
            <p>
              Hosting, maintenance, monitoring, content changes, and ongoing
              improvement can be scoped when the business needs a continuing
              operating partner. They are not represented as a universal
              subscription.
            </p>
          </div>
          <div>
            <p className="kicker">A support scope can define:</p>
            <ul className="plain-list">
              <li>Hosting responsibilities and account access</li>
              <li>Maintenance, backups, and update cadence</li>
              <li>Support channels and actual response targets</li>
              <li>Change requests, reporting, and handoff terms</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="section-heading">
          <p className="eyebrow">Scope boundaries</p>
          <h2>Clarity includes what is not included.</h2>
          <p>
            Each proposal should identify dependencies and exclusions. A
            capability listed on this page is not a promise that every project
            includes it.
          </p>
        </div>
        <div className="problem-grid">
          <article className="problem-card">
            <span className="card-number">FIT</span>
            <h3>Useful when</h3>
            <p>
              The business problem is clear enough to investigate,
              decision-makers can participate, and the project has an owner.
            </p>
          </article>
          <article className="problem-card">
            <span className="card-number">SCOPE</span>
            <h3>Defined in writing</h3>
            <p>
              Deliverables, review cycles, content responsibilities,
              integrations, timing assumptions, and payment terms belong in the
              agreement.
            </p>
          </article>
          <article className="problem-card">
            <span className="card-number">LIMITS</span>
            <h3>Not implied</h3>
            <p>
              Paid media, custom software, legal review, unlimited support, and
              specific performance results are not included unless expressly
              scoped.
            </p>
          </article>
        </div>
      </Section>

      <Section tone="dark">
        <div className="ownership-grid">
          <div>
            <p className="eyebrow eyebrow-on-dark">Ownership and handoff</p>
            <h2>Your business assets should remain yours.</h2>
          </div>
          <div>
            <p>
              After full payment, the client owns its domain, data, content, and
              the custom deliverables identified in the agreement. Strive
              retains pre-existing IP, reusable libraries, templates, methods,
              and general know-how.
            </p>
            <p>
              Ending recurring support does not revoke ownership of fully paid
              custom deliverables. Reasonable access, documentation, export, and
              transition expectations should be stated in the scope.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="light">
        <div className="centered-cta">
          <h2>Not sure which capability matters?</h2>
          <p>
            That is what discovery is for. Bring the business problem and the
            current setup; the scope can follow.
          </p>
          <div className="hero-actions">
            <Button href="/consultation" variant="secondary">
              Book a Fit Call
            </Button>
            <Button href="/work" variant="outline">
              See how work is framed
            </Button>
          </div>
        </div>
      </Section>
      <StructuredData data={serviceSchema} />
    </>
  );
}
