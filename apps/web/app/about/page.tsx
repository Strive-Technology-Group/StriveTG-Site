import type { Metadata } from "next";
import { Button } from "../components/Button";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/Section";
import { company, trustCommitments } from "../lib/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "A founder-led technology partner for growing service businesses, built around clear scope, practical systems, and accountable handoff.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${company.name}`,
    description: "Why Strive stays founder-led, direct, and close to the work.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Small by design. Serious about the work."
        intro="Strive is a founder-led technology partner for growing service businesses that need a clearer online presence, better operating visibility, or a practical path to automation."
      >
        <div className="hero-actions">
          <Button href="/consultation" variant="secondary">
            Start with a fit call
          </Button>
        </div>
      </PageHero>

      <Section tone="light">
        <div className="founder-grid">
          <div className="founder-mark" aria-hidden="true">
            <span>Direct responsibility</span>
          </div>
          <div className="founder-copy">
            <p className="eyebrow">Founder-led</p>
            <h2>The person shaping the work stays close to delivery.</h2>
            <p>
              A layered agency structure can create distance between the
              business question and the technical decision. Strive takes a more
              direct approach: listen carefully, make tradeoffs visible, and
              keep responsibility clear.
            </p>
            <p>
              When a scope needs a specialist outside the core work, that need
              should be discussed openly rather than hidden behind vague team
              language.
            </p>
            <div className="founder-principles">
              <div>
                <strong>Clarity</strong>
                <span>
                  Plain language, visible assumptions, and written scope.
                </span>
              </div>
              <div>
                <strong>Restraint</strong>
                <span>Use only the complexity the outcome requires.</span>
              </div>
              <div>
                <strong>Stewardship</strong>
                <span>
                  Treat client access, data, and continuity as operational
                  responsibilities.
                </span>
              </div>
              <div>
                <strong>Handoff</strong>
                <span>
                  Build toward a usable transition, not dependency for its own
                  sake.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="section-heading">
          <p className="eyebrow">Point of view</p>
          <h2>
            Technology should make the business easier to understand and run.
          </h2>
          <p>
            That principle connects the work across websites, search,
            measurement, and automation.
          </p>
        </div>
        <div className="problem-grid">
          <article className="problem-card">
            <span className="card-number">01</span>
            <h3>Professional presence</h3>
            <p>
              A website should make the offer, credibility, and next step clear
              without relying on inflated claims.
            </p>
          </article>
          <article className="problem-card">
            <span className="card-number">02</span>
            <h3>Useful visibility</h3>
            <p>
              Reporting should help someone make a decision, with definitions
              and limitations that are easy to inspect.
            </p>
          </article>
          <article className="problem-card">
            <span className="card-number">03</span>
            <h3>Responsible leverage</h3>
            <p>
              Automation should remove stable repeat work while preserving human
              review where context and judgment matter.
            </p>
          </article>
        </div>
      </Section>

      <Section tone="dark">
        <div className="section-heading">
          <p className="eyebrow eyebrow-on-dark">Working commitments</p>
          <h2>Credibility comes from how the engagement runs.</h2>
        </div>
        <div className="commitment-grid">
          {trustCommitments.map((item) => (
            <article className="commitment-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <div className="centered-cta">
          <h2>See whether the working style fits.</h2>
          <p>
            Bring a real business problem and the current constraints. The first
            goal is to decide whether there is a useful next step.
          </p>
          <div className="hero-actions">
            <Button href="/consultation" variant="secondary">
              Book a Fit Call
            </Button>
            <Button href="/work" variant="outline">
              Review the work standard
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
