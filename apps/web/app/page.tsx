import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import {
  EditorialRule,
  HeroSystemInsert,
  MicroLabel,
  SystemDiagram,
} from "./components/Editorial";
import { Section } from "./components/Section";
import {
  engagementSteps,
  faqs,
  servicePillars,
  trustCommitments,
} from "./lib/company";

export const metadata: Metadata = {
  title: "Websites, reporting, and practical automation",
  description:
    "Strive builds connected web, reporting, and automation systems for growing service businesses.",
  alternates: { canonical: "/" },
};

const problems = [
  {
    number: "01",
    title: "The website no longer reflects the business.",
    body: "The offer has matured, but visitors still have to work too hard to understand the value, credibility, or next step.",
    signal: "Presence",
  },
  {
    number: "02",
    title: "Useful information is split across disconnected tools.",
    body: "Marketing, sales, and operational signals exist, but nobody has a dependable view of what they mean together.",
    signal: "Visibility",
  },
  {
    number: "03",
    title: "Repeat work keeps absorbing judgment time.",
    body: "Manual handoffs and copy-paste processes persist because the workflow has never been mapped carefully enough to improve.",
    signal: "Operations",
  },
  {
    number: "04",
    title: "There is no accountable technical owner.",
    body: "Individual vendors can handle isolated tasks, but the complete system—and the tradeoffs between its parts—has no clear steward.",
    signal: "Ownership",
  },
] as const;

const approaches = [
  {
    number: "A",
    title: "Start with the decision",
    body: "Define what a visitor, operator, or owner needs to understand or do next.",
  },
  {
    number: "B",
    title: "Trace the complete system",
    body: "Review the content, tools, data, dependencies, and handoffs shaping the current result.",
  },
  {
    number: "C",
    title: "Build the smallest useful change",
    body: "Prioritize a maintainable improvement and agree how it will be evaluated before adding complexity.",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Container>
          <div className="hero-register" aria-hidden="true">
            STRIVE / SYSTEMS FOR GROWING BUSINESS
          </div>
          <div className="home-hero-stage">
            <MicroLabel>Web / data / automation</MicroLabel>
            <h1 aria-label="Replace the systems your business has outgrown.">
              <span className="hero-line hero-line-one" aria-hidden="true">
                <span className="hero-line-content">
                  Replace the <HeroSystemInsert variant="presence" />
                </span>
              </span>
              <span className="hero-line hero-line-two" aria-hidden="true">
                <span className="hero-line-content">systems your</span>
              </span>
              <span className="hero-line hero-line-three" aria-hidden="true">
                <span className="hero-line-content">
                  business has <HeroSystemInsert variant="insight" />
                </span>
              </span>
              <span className="hero-line hero-line-four" aria-hidden="true">
                <span className="hero-line-content">
                  <HeroSystemInsert variant="operations" /> outgrown.
                </span>
              </span>
            </h1>
          </div>
          <div className="home-hero-rail">
            <p className="hero-rail-label">
              <span>01—03</span>
              Presence / insight / operations
            </p>
            <p className="hero-rail-summary">
              Strive designs and manages the websites, reporting systems, and
              workflow automations growing service businesses need to operate
              with greater clarity and less manual work.
            </p>
            <div className="hero-actions">
              <Button href="/consultation">Book a Fit Call</Button>
              <Button href="/#how-we-work" variant="text">
                Explore Our Approach
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <div className="trust-strip" aria-label="Working commitments">
        <Container>
          <ul className="trust-strip-list">
            <li>
              <span>01</span> Founder-led communication
            </li>
            <li>
              <span>02</span> Scope before build
            </li>
            <li>
              <span>03</span> Client-owned domains and data
            </li>
            <li>
              <span>04</span> Documented handoff
            </li>
          </ul>
        </Container>
      </div>

      <Section tone="light" className="problem-section">
        <div className="section-heading section-heading-editorial">
          <MicroLabel index="01">What growing businesses outgrow</MicroLabel>
          <h2 data-reveal="type">
            The tools still work. The system around them does not.
          </h2>
          <p>
            Strive enters when a capable business has accumulated enough digital
            friction that isolated fixes no longer hold.
          </p>
        </div>
        <EditorialRule />
        <div className="problem-ledger">
          {problems.map((problem) => (
            <article
              className="problem-row"
              data-reveal="row"
              key={problem.number}
            >
              <span className="card-number">{problem.number}</span>
              <h3>{problem.title}</h3>
              <p>{problem.body}</p>
              <span className="row-signal">{problem.signal}</span>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft" className="services-editorial">
        <div className="section-heading section-heading-editorial">
          <MicroLabel index="02">Three connected operating layers</MicroLabel>
          <h2 data-reveal="type">
            Organize the work around the business outcome.
          </h2>
          <p>
            Websites, measurement, and automation are treated as parts of one
            customer and operating system—not unrelated technical products.
          </p>
        </div>
        <div className="service-matrix">
          {servicePillars.map((pillar) => (
            <article
              className="service-matrix-row"
              data-reveal="row"
              key={pillar.id}
            >
              <div className="service-matrix-index">
                <span>{pillar.number}</span>
                <p>{pillar.eyebrow}</p>
              </div>
              <div className="service-matrix-statement">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
              <ul className="capability-list">
                {pillar.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="section-link-row">
          <Button href="/services" variant="text">
            Read the service scope
          </Button>
        </div>
      </Section>

      <Section tone="ink" className="connective-section">
        <MicroLabel index="03" inverse>
          One connected partner
        </MicroLabel>
        <div className="connective-grid">
          <div className="connective-copy">
            <h2 data-reveal="type">
              One partner for the systems your customers see <em>and</em> the
              operations behind them.
            </h2>
            <EditorialRule inverse />
            <p>
              The value is not more software. It is a clearer relationship
              between presence, information, and repeatable work—with ownership
              and handoff defined before the build.
            </p>
            <Button href="/work" variant="outline">
              Review the work standard
            </Button>
          </div>
          <SystemDiagram inverse />
        </div>
      </Section>

      <Section tone="light" className="approach-section">
        <div className="approach-grid">
          <div className="approach-copy">
            <MicroLabel index="04">How Strive solves problems</MicroLabel>
            <h2 data-reveal="type">Evidence belongs next to the claim.</h2>
            <p>
              Strive does not publish unverified client results. The method is
              visible now; client stories appear only when the facts,
              measurement, and permission are in place.
            </p>
            <Button href="/work" variant="text">
              See the evidence standard
            </Button>
          </div>
          <div className="approach-list">
            {approaches.map((approach) => (
              <article
                className="approach-item"
                data-reveal="row"
                key={approach.title}
              >
                <span>{approach.number}</span>
                <div>
                  <h3>{approach.title}</h3>
                  <p>{approach.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="how-we-work" tone="soft" className="engagement-section">
        <div className="section-heading section-heading-editorial">
          <MicroLabel index="05">Engagement model</MicroLabel>
          <h2 data-reveal="type">Six phases. Decisions stay visible.</h2>
          <p>
            Each engagement is scoped separately, but the rhythm remains
            deliberate: understand first, make the plan explicit, build in
            reviewable increments, and hand over cleanly.
          </p>
        </div>
        <div className="steps-grid">
          {engagementSteps.map((step) => (
            <article className="step" data-reveal="row" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="light" className="founder-section">
        <div className="founder-grid">
          <div className="founder-mark" aria-hidden="true">
            <span className="founder-monogram">STG</span>
            <small>Founder profile / approved image pending</small>
          </div>
          <div className="founder-copy">
            <MicroLabel index="06">Accountability without layers</MicroLabel>
            <h2 data-reveal="type">
              The person shaping the work stays close to delivery.
            </h2>
            <p>
              Strive is a founder-led technology partner. Planning, build
              decisions, and client communication stay closely connected, with
              outside specialists used only when a scope calls for them.
            </p>
            <p>
              No founder name, biography, portrait, or profile is published
              until the owner approves the real material.
            </p>
            <div className="founder-principles">
              <div>
                <strong>Direct communication</strong>
                <span>Questions and tradeoffs stay close to delivery.</span>
              </div>
              <div>
                <strong>Right-sized systems</strong>
                <span>Complexity has to earn its place.</span>
              </div>
            </div>
            <Button href="/about" variant="text">
              About the operating model
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="dark" className="commitments-section">
        <div className="section-heading section-heading-editorial">
          <MicroLabel index="07" inverse>
            Trust is operational
          </MicroLabel>
          <h2 data-reveal="type">Clear commitments. No wall of badges.</h2>
          <p>
            These are the working principles the site can support today.
            Certifications, results, or client endorsements do not appear
            without verification.
          </p>
        </div>
        <div className="commitment-grid">
          {trustCommitments.map((item, index) => (
            <article className="commitment-card" key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="light" className="faq-preview-section">
        <div className="faq-preview-grid">
          <div className="section-heading">
            <MicroLabel index="08">Before the first call</MicroLabel>
            <h2 data-reveal="type">
              Know the operating model before you reach out.
            </h2>
            <Link href="/faq" className="button button-text">
              Read every FAQ <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="faq-list">
            {faqs.slice(0, 4).map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
