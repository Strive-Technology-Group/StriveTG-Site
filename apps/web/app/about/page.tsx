import type { Metadata } from "next";
import { Button } from "../components/Button";
import { EditorialMasthead } from "../components/EditorialMasthead";
import { Section } from "../components/Section";
import { company } from "../lib/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Strive applies clear scope, practical systems, visible decisions, and direct accountability for growing small and midsize service businesses.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${company.name}`,
    description:
      "The engineering principles behind Strive's digital systems and applied AI research and development.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <EditorialMasthead
        eyebrow="About"
        title="Built for clarity. Accountable by design."
        intro="Strive is a technology partner for growing small and midsize service businesses that need a clearer online presence, more useful reporting, or a practical path to automation."
      >
        <div className="hero-actions">
          <Button href="/start-a-project">Start a Project</Button>
        </div>
      </EditorialMasthead>

      <Section tone="light">
        <div className="responsibility-grid">
          <div className="responsibility-copy">
            <p className="eyebrow">Operating model</p>
            <h2>A clear point of contact, from first question to handoff.</h2>
            <p>
              Strive keeps planning, implementation, and communication
              connected. You can see what is being built, why it matters, and
              what decisions need your input.
            </p>
            <p>
              When a project needs specialist input, the scope identifies who is
              involved and what they are responsible for. Decisions and review
              points stay documented throughout the work.
            </p>
            <p>
              That engineering mindset also informs Strive&apos;s applied AI
              research and development: exploring technical questions through
              experimentation, building focused prototypes, and measuring
              results before expanding the work.
            </p>
            <Button href="/research" variant="text">
              Explore Research &amp; Engineering
            </Button>
          </div>
          <dl className="responsibility-principles">
            <div>
              <dt>Clarity</dt>
              <dd>Plain language, visible assumptions, and written scope.</dd>
            </div>
            <div>
              <dt>Restraint</dt>
              <dd>Use only the complexity the outcome requires.</dd>
            </div>
            <div>
              <dt>Stewardship</dt>
              <dd>
                Treat client access, data, and continuity as operational
                responsibilities.
              </dd>
            </div>
            <div>
              <dt>Handoff</dt>
              <dd>
                Build toward a usable transition, not dependency for its own
                sake.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section tone="soft">
        <div className="section-heading">
          <p className="eyebrow">Point of view</p>
          <h2>
            Technology should make the business easier to understand and run.
          </h2>
          <p>
            For growing small and midsize service businesses, that means making
            customer journeys, operating signals, and repetitive workflows
            easier to inspect and improve.
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
            <h3>Practical automation</h3>
            <p>
              Automation should remove stable repeat work while preserving human
              review where context and judgment matter.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
