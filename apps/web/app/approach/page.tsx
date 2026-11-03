import type { Metadata } from "next";
import { Button } from "../components/Button";
import { EditorialMasthead } from "../components/EditorialMasthead";
import { Section } from "../components/Section";
import { StructuredData } from "../components/StructuredData";
import { company } from "../lib/company";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "See how Strive audits websites, defines useful reporting, maps workflows, and keeps technology decisions reviewable.",
  alternates: { canonical: "/approach" },
  openGraph: {
    title: `Approach | ${company.name}`,
    description:
      "Clear project plans, useful checks, and documented decisions for websites, reporting, and automation.",
    url: "/approach",
  },
};

const artifacts = [
  {
    label: "Example plan 01",
    title: "Website path audit",
    body: "Maps how a prospect moves from search or referral to understanding the offer, evaluating credibility, and choosing a next step.",
    flow: [
      [
        "Inputs",
        "Audience, offer, page structure, search intent, and inquiry path",
      ],
      [
        "Plan",
        "Annotated page map, content hierarchy, and conversion checklist",
      ],
      ["Review", "Accuracy, accessibility, performance, and measurement needs"],
    ],
  },
  {
    label: "Example plan 02",
    title: "Reporting definition model",
    body: "Connects a recurring business question to the source systems, definitions, and checks needed for a useful reporting view.",
    flow: [
      ["Inputs", "Business questions, source systems, access, and known gaps"],
      ["Plan", "Metric definitions, data map, dashboard outline, and owners"],
      ["Review", "Sample records, reconciliation, edge cases, and usefulness"],
    ],
  },
  {
    label: "Example plan 03",
    title: "Workflow and controls map",
    body: "Shows where repeat work can be reduced while keeping exceptions, sensitive data, and judgment visible.",
    flow: [
      [
        "Inputs",
        "Trigger, steps, systems, rules, exceptions, and failure cost",
      ],
      ["Plan", "Current-state map, proposed flow, controls, and fallback path"],
      [
        "Review",
        "Representative cases, access, alerts, human review, and handoff",
      ],
    ],
  },
] as const;

const reviewControls = [
  {
    number: "01",
    title: "Written brief",
    body: "The business problem, desired decision, constraints, and responsible participants are made explicit.",
  },
  {
    number: "02",
    title: "Visible decisions",
    body: "Important assumptions, options, dependencies, and tradeoffs are recorded as the work develops.",
  },
  {
    number: "03",
    title: "Defined validation",
    body: "The scope states what will be checked, what evidence is available, and who reviews the result.",
  },
  {
    number: "04",
    title: "Handoff record",
    body: "Access, documentation, ownership terms, and transition needs are addressed before the work closes.",
  },
] as const;

export default function ApproachPage() {
  const approachSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Approach | ${company.name}`,
    description:
      "How Strive turns website, reporting, and workflow problems into clear project plans and documented decisions.",
    url: `${company.url}/approach`,
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Growing small and midsize service businesses",
    },
  };

  return (
    <>
      <EditorialMasthead
        eyebrow="Approach"
        title="Make the system visible before changing it."
        intro="Understand the current website, reporting, or workflow first. Then agree on what to change, how to check it, and what you will receive."
      >
        <div className="hero-actions">
          <Button href="/start-a-project">Start a Project</Button>
        </div>
      </EditorialMasthead>

      <Section tone="light">
        <div className="section-heading">
          <p className="eyebrow">Example project plans</p>
          <h2>A clear plan for each kind of problem.</h2>
          <p>
            These examples show how a project can be planned before the build.
            Your deliverables depend on the agreed scope.
          </p>
        </div>
        <div className="work-grid">
          {artifacts.map((artifact) => (
            <article className="work-card" key={artifact.label}>
              <p className="work-label">{artifact.label}</p>
              <h3>{artifact.title}</h3>
              <p>{artifact.body}</p>
              <div className="work-flow">
                {artifact.flow.map(([key, value]) => (
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
          <p className="eyebrow">Decision standard</p>
          <h2>Every recommendation should show its reasoning.</h2>
          <p className="lede">
            A useful recommendation connects the business context, available
            evidence, chosen direction, and validation method.
          </p>
          <div className="proof-standard-grid">
            <div>
              <strong>Context</strong>
              <span>
                The problem, current system, constraints, and decision.
              </span>
            </div>
            <div>
              <strong>Options</strong>
              <span>The practical alternatives and their tradeoffs.</span>
            </div>
            <div>
              <strong>Decision</strong>
              <span>The selected direction, rationale, and dependencies.</span>
            </div>
            <div>
              <strong>Validation</strong>
              <span>
                The checks, evidence source, reviewer, and limitations.
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="section-heading">
          <p className="eyebrow eyebrow-on-dark">Review controls</p>
          <h2>The work stays understandable as it moves.</h2>
          <p>
            A shared record keeps the business question connected to technical
            choices from discovery through handoff.
          </p>
        </div>
        <div className="approach-list">
          {reviewControls.map((control) => (
            <article className="approach-item" key={control.number}>
              <span>{control.number}</span>
              <div>
                <h3>{control.title}</h3>
                <p>{control.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <StructuredData data={approachSchema} />
    </>
  );
}
