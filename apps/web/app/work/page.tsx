import type { Metadata } from "next";
import { Button } from "../components/Button";
import { EditorialMasthead } from "../components/EditorialMasthead";
import { Section } from "../components/Section";
import { company, engagementSteps } from "../lib/company";

export const metadata: Metadata = {
  title: "Work",
  description:
    "How Strive frames, builds, validates, and documents small-business technology work without unsupported case-study claims.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: `Work | ${company.name}`,
    description:
      "A transparent look at Strive's problem-solving and evidence standards.",
    url: "/work",
  },
};

const patterns = [
  {
    label: "Engagement pattern 01",
    title: "Clarify the path from visit to inquiry",
    body: "Useful when a capable business has a website but visitors cannot quickly understand the offer, trust the provider, or choose a next step.",
    flow: [
      [
        "Examine",
        "Offer, audience, content, search intent, and current conversion path",
      ],
      [
        "Shape",
        "Information hierarchy, proof requirements, calls to action, and measurement plan",
      ],
      [
        "Validate",
        "Content accuracy, accessibility, performance, and agreed inquiry signals",
      ],
    ],
  },
  {
    label: "Engagement pattern 02",
    title: "Turn scattered activity into a useful view",
    body: "Useful when teams collect data across platforms but cannot answer a small set of recurring business questions with confidence.",
    flow: [
      [
        "Examine",
        "Decisions, source systems, event quality, access, and known blind spots",
      ],
      [
        "Shape",
        "Metric definitions, data flow, focused reporting, and ownership",
      ],
      [
        "Validate",
        "Sample records, edge cases, reconciliation, and decision usefulness",
      ],
    ],
  },
  {
    label: "Engagement pattern 03",
    title: "Remove a repeat workflow responsibly",
    body: "Useful when a frequent handoff or copy-paste process is stable enough to map but still needs human review for exceptions or judgment.",
    flow: [
      [
        "Examine",
        "Trigger, inputs, rules, exceptions, sensitive data, and failure cost",
      ],
      [
        "Shape",
        "Automation boundary, integration, alerts, human review, and fallback",
      ],
      [
        "Validate",
        "Representative cases, failure modes, access controls, and handoff",
      ],
    ],
  },
] as const;

export default function WorkPage() {
  return (
    <>
      <EditorialMasthead
        eyebrow="Work"
        title="Evidence belongs next to the claim."
        intro="Until a client has approved a documented story, Strive will show the method—not invented logos, anonymous testimonials, or unsupported performance numbers."
      >
        <div className="hero-actions">
          <Button href="/consultation">Discuss a real problem</Button>
        </div>
      </EditorialMasthead>

      <Section tone="light">
        <div className="section-heading">
          <p className="eyebrow">How problems are framed</p>
          <h2>Three recurring patterns. No fictional case studies.</h2>
          <p>
            These are engagement patterns, not claims about completed client
            results. They show the questions and validation work that can turn a
            broad request into a useful project.
          </p>
        </div>
        <div className="work-grid">
          {patterns.map((pattern) => (
            <article className="work-card" key={pattern.label}>
              <p className="work-label">{pattern.label}</p>
              <h3>{pattern.title}</h3>
              <p>{pattern.body}</p>
              <div className="work-flow">
                {pattern.flow.map(([key, value]) => (
                  <div key={key}>
                    <strong>{key}</strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="proof-standard">
          <p className="eyebrow">Publication standard</p>
          <h2>A future client story needs all four.</h2>
          <p className="lede">
            A logo or quote is not proof by itself. Before a story is published,
            the facts, measurement, and permission should be explicit.
          </p>
          <div className="proof-standard-grid">
            <div>
              <strong>Context</strong>
              <span>The business situation and relevant baseline.</span>
            </div>
            <div>
              <strong>Scope</strong>
              <span>What Strive did—and what was outside the work.</span>
            </div>
            <div>
              <strong>Evidence</strong>
              <span>The measurement source, period, and limitations.</span>
            </div>
            <div>
              <strong>Permission</strong>
              <span>
                Written approval for the name, quote, logo, and result.
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="section-heading">
          <p className="eyebrow eyebrow-on-dark">Engagement model</p>
          <h2>The work stays reviewable from fit to handoff.</h2>
          <p>
            A good delivery process reduces surprise without pretending every
            project has the same timing or shape.
          </p>
        </div>
        <div className="approach-list">
          {engagementSteps.map((step) => (
            <article className="approach-item" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
