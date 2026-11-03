import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import {
  EditorialRule,
  MicroLabel,
  SystemDiagram,
} from "./components/Editorial";
import { Section } from "./components/Section";
import {
  appliedAI,
  engagementSteps,
  faqs,
  servicePillars,
  trustCommitments,
} from "./lib/company";

export const metadata: Metadata = {
  title: "Digital systems and applied AI engineering",
  description:
    "Strive builds websites, reporting, and automation systems for growing service businesses, alongside applied AI research and development.",
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
    title: "Repetitive tasks take time away from clients.",
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
    title: "Website path audit",
    body: "An annotated map of the offer, content hierarchy, inquiry path, search foundations, and measurement needs.",
  },
  {
    number: "B",
    title: "Reporting definition model",
    body: "A focused record of business questions, source systems, metric definitions, data checks, and ownership.",
  },
  {
    number: "C",
    title: "Workflow and controls map",
    body: "A current-state and proposed flow showing triggers, rules, exceptions, human review, and fallback paths.",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Container>
          <div className="hero-register" aria-hidden="true">
            STRIVE / TECHNOLOGY FOR SERVICE BUSINESSES
          </div>
          <div className="home-hero-layout">
            <div className="home-hero-stage">
              <MicroLabel>Websites / reporting / automation</MicroLabel>
              <h1 aria-label="Replace the systems your business has outgrown.">
                <span className="hero-line hero-line-one" aria-hidden="true">
                  <span className="hero-line-content">Replace the</span>
                </span>
                <span className="hero-line hero-line-two" aria-hidden="true">
                  <span className="hero-line-content">systems your</span>
                </span>
                <span className="hero-line hero-line-three" aria-hidden="true">
                  <span className="hero-line-content">business has</span>
                </span>
                <span className="hero-line hero-line-four" aria-hidden="true">
                  <span className="hero-line-content">outgrown.</span>
                </span>
              </h1>
            </div>
            <div className="home-hero-rail">
              <p className="hero-rail-summary">
                Strive builds websites, connects reporting, and automates
                repetitive work for growing small and midsize service
                businesses.
              </p>
              <div className="hero-actions">
                <Button href="/start-a-project">Start a Project</Button>
                <Button href="/approach" variant="text">
                  Explore Our Approach
                </Button>
              </div>
              <p className="hero-rail-detail">
                Need help after launch? Hosting, maintenance, and ongoing
                support are optional.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <div className="trust-strip" aria-label="Engagement principles">
        <Container>
          <ul className="trust-strip-list">
            <li>
              <span>01</span> Direct project accountability
            </li>
            <li>
              <span>02</span> Scope before build
            </li>
            <li>
              <span>03</span> Ownership defined in writing
            </li>
            <li>
              <span>04</span> Documented handoff
            </li>
          </ul>
        </Container>
      </div>

      <Section tone="light" className="problem-section">
        <div className="section-heading section-heading-editorial">
          <MicroLabel index="01">Where growth creates friction</MicroLabel>
          <h2 data-reveal="type">
            The tools still work. The system around them does not.
          </h2>
          <p>
            Growing small and midsize service businesses often reach a point
            where isolated fixes no longer solve the customer and operating
            friction between their tools.
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
          <MicroLabel index="02">What Strive does</MicroLabel>
          <h2 data-reveal="type">
            A better website. Clearer reporting. Less repeat work.
          </h2>
          <p>
            Start with one service or connect them around a shared goal. The
            scope follows what your business needs.
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
              Your website, reporting, and internal tools work better when they
              connect. Strive plans those connections with clear
              responsibilities and a documented handoff.
            </p>
            <Button href="/approach" variant="outline">
              Explore the approach
            </Button>
          </div>
          <SystemDiagram inverse />
        </div>
      </Section>

      <Section tone="soft" className="research-feature">
        <div className="responsibility-grid">
          <div className="responsibility-copy">
            <MicroLabel index="04">{appliedAI.title}</MicroLabel>
            <h2 data-reveal="type">{appliedAI.tagline}</h2>
            <Button href="/research" variant="text">
              Explore Research &amp; Engineering
            </Button>
          </div>
          <div className="research-summary">
            <p>{appliedAI.introduction}</p>
            <p>{appliedAI.description}</p>
          </div>
        </div>
      </Section>

      <Section tone="light" className="approach-section">
        <div className="approach-grid">
          <div className="approach-copy">
            <MicroLabel index="05">How Strive solves problems</MicroLabel>
            <h2 data-reveal="type">See the plan before the build.</h2>
            <p>
              Audits, system maps, reporting definitions, workflow diagrams, and
              handoff records show what is changing and why.
            </p>
            <Button href="/approach" variant="text">
              See example project plans
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
          <MicroLabel index="06">Engagement model</MicroLabel>
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

      <Section tone="light" className="responsibility-section">
        <div className="responsibility-grid">
          <div className="responsibility-copy">
            <MicroLabel index="07">Clear point of responsibility</MicroLabel>
            <h2 data-reveal="type">
              Business questions stay connected to technical decisions.
            </h2>
            <p>
              Strive keeps planning, technical decisions, and client
              communication connected so assumptions and tradeoffs remain
              visible throughout the engagement.
            </p>
            <p>
              If a project needs specialist input, the scope identifies who is
              involved, what they are responsible for, and how the work comes
              together.
            </p>
            <Button href="/about" variant="text">
              About the operating model
            </Button>
          </div>
          <dl className="responsibility-principles">
            <div>
              <dt>Visible decisions</dt>
              <dd>Questions, assumptions, and tradeoffs are recorded.</dd>
            </div>
            <div>
              <dt>Right-sized systems</dt>
              <dd>Complexity has to earn its place.</dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section tone="dark" className="commitments-section">
        <div className="section-heading section-heading-editorial">
          <MicroLabel index="08" inverse>
            Trust is operational
          </MicroLabel>
          <h2 data-reveal="type">
            Clear commitments make the work easier to trust.
          </h2>
          <p>
            Scope, ownership terms, evidence, and handoff expectations become
            part of the working record—not assumptions left for the end.
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
            <MicroLabel index="09">Before the first call</MicroLabel>
            <h2 data-reveal="type">Decide whether Strive fits the problem.</h2>
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
