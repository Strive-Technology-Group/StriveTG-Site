import type { Metadata } from "next";
import { CalendlyDialog } from "../components/CalendlyDialog";
import { EditorialMasthead } from "../components/EditorialMasthead";
import { Section } from "../components/Section";
import { company } from "../lib/company";

export const metadata: Metadata = {
  title: "Book a Fit Call",
  description:
    "Review what the Strive fit call covers, then load the third-party Calendly scheduler only when you choose to book.",
  alternates: { canonical: "/consultation" },
  openGraph: {
    title: `Book a Fit Call | ${company.name}`,
    description:
      "A focused first conversation about the business problem, context, and potential fit.",
    url: "/consultation",
  },
};

export default function ConsultationPage() {
  return (
    <>
      <EditorialMasthead
        eyebrow="Fit call"
        title="A focused first conversation."
        intro="Use the call to explain the business problem, current situation, and constraints. The immediate goal is to decide whether there is a useful fit and next step."
      />
      <Section tone="light">
        <div className="booking-panel">
          <p className="eyebrow">Before you load Calendly</p>
          <h2>Know what the call is—and is not.</h2>
          <p>
            The scheduler is intentionally click-to-load. Opening it connects
            your browser to Calendly, whose privacy and cookie practices then
            apply.
          </p>
          <div className="booking-expectations">
            <div>
              <strong>Bring</strong>
              <span>
                The problem, current setup, business context, and known
                constraints.
              </span>
            </div>
            <div>
              <strong>Discuss</strong>
              <span>
                Fit, priority, dependencies, open questions, and a sensible next
                step.
              </span>
            </div>
            <div>
              <strong>After booking</strong>
              <span>
                Calendly should send the calendar invitation and meeting details
                directly.
              </span>
            </div>
          </div>
          <CalendlyDialog />
          <p className="booking-email-note">
            Prefer email?{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>
      </Section>
      <Section tone="soft">
        <div className="section-heading">
          <p className="eyebrow">A useful call</p>
          <h2>Specific context makes the conversation better.</h2>
        </div>
        <div className="problem-grid">
          <article className="problem-card">
            <span className="card-number">01</span>
            <h3>What needs to change?</h3>
            <p>
              Describe the customer, reporting, or operating problem—not just
              the tool you think you need.
            </p>
          </article>
          <article className="problem-card">
            <span className="card-number">02</span>
            <h3>What exists today?</h3>
            <p>
              Share the relevant website, systems, process, access limitations,
              and decisions already made.
            </p>
          </article>
          <article className="problem-card">
            <span className="card-number">03</span>
            <h3>What would useful look like?</h3>
            <p>
              Explain the decision, behavior, or workflow that should become
              clearer after the work.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
