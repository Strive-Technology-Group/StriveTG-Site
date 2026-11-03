import type { Metadata } from "next";
import { Button } from "../components/Button";
import { EditorialMasthead } from "../components/EditorialMasthead";
import { Section } from "../components/Section";
import { StructuredData } from "../components/StructuredData";
import {
  appliedAI,
  company,
  researchFocusAreas,
  researchSteps,
} from "../lib/company";

export const metadata: Metadata = {
  title: "Applied AI Research & Development",
  description:
    "Explore Strive's technical interests in agentic AI, multimodal learning, efficient ML architectures, and trustworthy AI through prototyping and evaluation.",
  alternates: { canonical: "/research" },
  openGraph: {
    title: `${appliedAI.title} | ${company.name}`,
    description: appliedAI.tagline,
    url: "/research",
  },
};

export default function ResearchPage() {
  return (
    <>
      <EditorialMasthead
        eyebrow="Research & Engineering"
        title={appliedAI.title}
        intro={appliedAI.tagline}
      >
        <div className="hero-actions">
          <Button href="/start-a-project">Discuss an AI Project</Button>
        </div>
      </EditorialMasthead>

      <Section tone="light">
        <div className="section-heading section-heading-editorial">
          <p className="micro-label">
            <span aria-hidden="true">01</span> Technical interests
          </p>
          <h2 data-reveal="type">Research questions with practical purpose.</h2>
          <p>{appliedAI.introduction}</p>
        </div>
        <div className="commitment-grid research-focus-grid">
          {researchFocusAreas.map((area, index) => (
            <article
              id={area.id}
              className="commitment-card research-focus"
              key={area.id}
            >
              <span>0{index + 1}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="section-heading section-heading-editorial">
          <p className="micro-label">
            <span aria-hidden="true">02</span> Research process
          </p>
          <h2 data-reveal="type">Experiment. Prototype. Evaluate.</h2>
          <p>
            Complex technical problems become clearer through focused
            experiments, useful prototypes, and rigorous evaluation. Each step
            makes the assumptions and evidence available for review.
          </p>
        </div>
        <div className="steps-grid research-steps">
          {researchSteps.map((step) => (
            <article className="step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="support-grid">
          <div>
            <p className="eyebrow eyebrow-on-dark">
              From exploration to a decision
            </p>
            <h2>Let the evidence guide what comes next.</h2>
            <p>
              A research prototype helps answer a question. Evaluation shows
              where an idea is useful, where it fails, and what further work
              would require.
            </p>
            <Button href="/start-a-project" variant="outline">
              Discuss an AI Project
            </Button>
          </div>
          <div>
            <p className="kicker">A research scope can define:</p>
            <ul className="plain-list">
              <li>
                The question, data requirements, and practical constraints
              </li>
              <li>A bounded experiment or prototype</li>
              <li>Comparison baselines and evaluation criteria</li>
              <li>Findings, limitations, documentation, and next steps</li>
            </ul>
            <p>
              Moving from a prototype to a production system is a separate
              decision, informed by the results and an agreed implementation
              scope.
            </p>
          </div>
        </div>
      </Section>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: appliedAI.title,
          description: appliedAI.introduction,
          serviceType: "Applied AI research and development",
          url: `${company.url}/research`,
          provider: {
            "@type": "Organization",
            name: company.name,
            url: company.url,
          },
        }}
      />
    </>
  );
}
