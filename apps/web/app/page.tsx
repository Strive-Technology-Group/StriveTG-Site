import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Section } from "./components/Section";
import {
  company,
  engagementSteps,
  faqs,
  servicePillars,
  trustCommitments,
} from "./lib/company";

export const metadata: Metadata = {
  title: "Websites, analytics, and practical automation",
  description: company.positioning,
  alternates: { canonical: "/" },
};

const problems = [
  {
    number: "01",
    title: "The website does not explain the value clearly",
    body: "Visitors have to work too hard to understand the offer, the difference, or the next step.",
  },
  {
    number: "02",
    title: "Marketing activity is hard to interpret",
    body: "Useful signals are scattered across tools, leaving decisions to instinct and incomplete reports.",
  },
  {
    number: "03",
    title: "Repeat work keeps stealing attention",
    body: "Manual handoffs and copy-paste processes consume time that could be spent on customers and judgment.",
  },
] as const;

const approaches = [
  {
    title: "Start with the decision",
    body: "Define what a visitor, operator, or owner needs to understand or do next.",
  },
  {
    title: "Trace the system",
    body: "Review the content, tools, data, dependencies, and handoffs shaping the current result.",
  },
  {
    title: "Build the smallest useful change",
    body: "Prioritize a clear, maintainable improvement and agree how it will be evaluated.",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Container>
          <div className="home-hero-grid">
            <div className="home-hero-copy">
              <p className="eyebrow eyebrow-on-dark">
                Web, data, and automation for growing businesses
              </p>
              <h1>Your business has outgrown patchwork technology.</h1>
              <p>
                Strive designs and builds the websites, reporting systems, and
                workflow automations growing service businesses need, with
                managed support scoped when it is useful.
              </p>
              <div className="hero-actions">
                <Button href="/consultation">Book a Fit Call</Button>
                <Button href="/#how-we-work" variant="outline">
                  See How We Work
                </Button>
              </div>
            </div>
            <div
              className="hero-system"
              aria-label="Three connected business outcomes"
            >
              <div className="hero-system-label">
                <span>One connected approach</span>
                <span className="status-dot" />
              </div>
              <div className="system-card">
                <span>Presence</span>
                <strong>Help the right people find and understand you</strong>
              </div>
              <div className="system-path" />
              <div className="system-card">
                <span>Insight</span>
                <strong>See the signals behind useful decisions</strong>
              </div>
              <div className="system-path" />
              <div className="system-card">
                <span>Operations</span>
                <strong>Remove repeat work without losing control</strong>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="trust-strip" aria-label="Working commitments">
        <Container>
          <ul className="trust-strip-list">
            <li>Direct, founder-led communication</li>
            <li>Scope before build</li>
            <li>Client-owned domains and data</li>
            <li>Documented handoff</li>
          </ul>
        </Container>
      </div>

      <Section tone="light">
        <div className="section-heading">
          <p className="eyebrow">When technology gets in the way</p>
          <h2>Good businesses can look less capable than they are.</h2>
          <p>
            The usual problem is not a lack of tools. It is that the website,
            data, and day-to-day systems do not make the business easier to
            understand or operate.
          </p>
        </div>
        <div className="problem-grid">
          {problems.map((problem) => (
            <article className="problem-card" key={problem.number}>
              <span className="card-number">{problem.number}</span>
              <h3>{problem.title}</h3>
              <p>{problem.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <div className="section-heading">
          <p className="eyebrow eyebrow-on-dark">Three outcomes</p>
          <h2>Technology organized around the business result.</h2>
          <p>
            Websites, search, analytics, and automation work better when they
            are treated as connected parts of the same customer and operating
            experience.
          </p>
        </div>
        <div className="pillar-grid">
          {servicePillars.map((pillar) => (
            <article className="pillar-card" key={pillar.id}>
              <span className="pillar-number">{pillar.number}</span>
              <p className="eyebrow">{pillar.eyebrow}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <ul className="capability-list">
                {pillar.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="section-link-row">
          <Button href="/services" variant="secondary">
            See the service detail
          </Button>
        </div>
      </Section>

      <Section tone="ink">
        <div className="approach-grid">
          <div className="approach-copy">
            <p className="eyebrow eyebrow-on-dark">How we solve problems</p>
            <h2>No theatre. A clear line from problem to build.</h2>
            <p>
              Strive does not publish unverified client results. The working
              method is visible now; client stories will be published only when
              the facts and permission are in place.
            </p>
            <Button href="/work" variant="secondary">
              See the work standard
            </Button>
          </div>
          <div className="approach-list">
            {approaches.map((approach, index) => (
              <article className="approach-item" key={approach.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{approach.title}</h3>
                  <p>{approach.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="how-we-work" tone="soft">
        <div className="section-heading">
          <p className="eyebrow">How we work</p>
          <h2>A six-step engagement with visible decisions.</h2>
          <p>
            Every engagement is scoped separately, but the operating rhythm
            stays deliberate: understand first, write down the plan, build in
            reviewable increments, and hand over cleanly.
          </p>
        </div>
        <div className="steps-grid">
          {engagementSteps.map((step) => (
            <article className="step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <div className="founder-grid">
          <div className="founder-mark" aria-hidden="true">
            <span>Founder-led by design</span>
          </div>
          <div className="founder-copy">
            <p className="eyebrow">Close to the work</p>
            <h2>Accountability without layers.</h2>
            <p>
              Strive is a founder-led technology partner. Planning, build
              decisions, and client communication stay closely connected, with
              outside specialists used only when a scope calls for them.
            </p>
            <p>
              That structure is intentionally simple: fewer handoffs, clearer
              ownership, and a direct path from the business question to the
              technical decision.
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
            <div className="hero-actions">
              <Button href="/about" variant="outline">
                About Strive
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="section-heading">
          <p className="eyebrow eyebrow-on-dark">Trust is operational</p>
          <h2>Clear commitments, not a wall of badges.</h2>
          <p>
            These are the working principles the website can support today.
            Certifications, results, or client endorsements will not appear here
            without verification.
          </p>
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
        <div className="section-heading">
          <p className="eyebrow">Focused answers</p>
          <h2>Know the operating model before the call.</h2>
        </div>
        <div className="faq-list">
          {faqs.slice(0, 4).map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <div className="faq-answer">{faq.answer}</div>
            </details>
          ))}
        </div>
        <div className="section-link-row">
          <Link href="/faq" className="button button-text">
            Read every FAQ <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>

      <Section tone="soft">
        <div className="centered-cta">
          <div
            style={{
              width: "min(18rem, 60%)",
              margin: "0 auto 2rem",
              padding: "0.75rem",
              borderRadius: "0.75rem",
              background: "white",
            }}
          >
            <Logo surface="light" />
          </div>
          <h2>Start with the problem, not a package.</h2>
          <p>
            A fit call is the simplest way to decide whether the need, scope,
            and working style line up.
          </p>
          <div className="hero-actions">
            <Button href="/consultation" variant="secondary">
              Book a Fit Call
            </Button>
            <Button href={`mailto:${company.email}`} variant="outline">
              Email Strive
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
