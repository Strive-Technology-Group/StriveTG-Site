import { randomUUID } from "node:crypto";
import type { Metadata } from "next";
import { EditorialMasthead } from "../components/EditorialMasthead";
import { ProjectBriefForm } from "../components/ProjectBriefForm";
import { Section } from "../components/Section";
import { company } from "../lib/company";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Send Strive a concise project brief about a website, reporting, automation, or ongoing technology need.",
  alternates: { canonical: "/start-a-project" },
  openGraph: {
    title: `Start a Project | ${company.name}`,
    description:
      "Share what you want to accomplish, the service needed, current systems, timing, and investment context.",
    url: "/start-a-project",
  },
};

export const dynamic = "force-dynamic";

type StartProjectPageProps = {
  searchParams: Promise<{
    submission?: string;
    reference?: string;
  }>;
};

export default async function StartProjectPage({
  searchParams,
}: StartProjectPageProps) {
  const { submission, reference } = await searchParams;
  const idempotencyKey = randomUUID();

  return (
    <>
      <EditorialMasthead
        eyebrow="Project brief"
        title="Tell us what needs to change."
        intro="Share what needs to change, the service you need, and the timing and investment context. Strive reviews each brief before proposing a conversation or next step."
      />
      <Section tone="light" className="project-intake-section">
        <div className="project-intake-layout">
          <aside
            className="project-intake-aside"
            aria-labelledby="brief-guide-title"
          >
            <p className="micro-label">
              <span aria-hidden="true">01</span> Before you begin
            </p>
            <h2 id="brief-guide-title">
              Useful context beats a polished pitch.
            </h2>
            <p>
              Explain what the business is trying to improve, what is getting in
              the way now, and what a useful outcome would make possible.
            </p>
            <ol className="brief-review-list">
              <li>
                <span>01</span>
                <strong>Submit the brief</strong>
                <p>Provide enough context for an informed first review.</p>
              </li>
              <li>
                <span>02</span>
                <strong>Strive reviews the fit</strong>
                <p>
                  The request is assessed against the problem and capabilities.
                </p>
              </li>
              <li>
                <span>03</span>
                <strong>Receive a relevant next step</strong>
                <p>
                  Strive may reply, request more detail, decline, or privately
                  share a scheduling link.
                </p>
              </li>
            </ol>
            {company.telephone ? (
              <p className="project-intake-contact">
                Prefer to talk? <a href={company.telephone.href}>Call Strive</a>
                <span>{company.telephone.display}</span>
              </p>
            ) : (
              <p className="project-intake-contact">
                Need an accessible alternative? Email{" "}
                <a href={`mailto:${company.email}`}>{company.email}</a>.
              </p>
            )}
          </aside>

          <div className="project-intake-main">
            {submission === "received" ? (
              <div
                className="project-brief-success"
                role="status"
                tabIndex={-1}
              >
                <p className="micro-label">
                  <span aria-hidden="true">✓</span> Brief received
                </p>
                <h2>Thank you. Strive will review the project brief.</h2>
                <p>
                  Strive will use your selected contact method if the
                  opportunity needs a reply, more information, or a private
                  scheduling link.
                </p>
                {reference && (
                  <p className="submission-reference">
                    Reference <strong>{reference}</strong>
                  </p>
                )}
              </div>
            ) : (
              <>
                {submission === "invalid" && (
                  <div className="form-route-notice" role="alert">
                    Some required information was not accepted. Review the brief
                    and submit it again.
                  </div>
                )}
                {submission === "unavailable" && (
                  <div className="form-route-notice" role="alert">
                    The secure project-intake channel could not accept the
                    brief. Please email{" "}
                    <a href={`mailto:${company.email}`}>{company.email}</a>.
                  </div>
                )}
                {submission === "limited" && (
                  <div className="form-route-notice" role="alert">
                    Too many briefs were submitted from this connection. Please
                    wait before trying again or email{" "}
                    <a href={`mailto:${company.email}`}>{company.email}</a>.
                  </div>
                )}
                <ProjectBriefForm initialIdempotencyKey={idempotencyKey} />
              </>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
