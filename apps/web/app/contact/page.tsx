import type { Metadata } from "next";
import { Button } from "../components/Button";
import { EditorialMasthead } from "../components/EditorialMasthead";
import { Section } from "../components/Section";
import { company } from "../lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Strive by sharing what needs to change, the service needed, current systems, timing, and investment context.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${company.name}`,
    description:
      "Send Strive a concise project brief. Direct email and an approved business telephone remain secondary contact paths.",
    url: "/contact",
  },
};

export default function ContactPage() {
  const subject = encodeURIComponent("Strive project inquiry");
  const body = encodeURIComponent(
    "Company name or website:\n\nService needed:\n\nWhat are you trying to accomplish?:\n\nCurrent systems or platforms:\n\nDesired timing:\n\nExpected investment range:\n\nPreferred contact method (optional):\n",
  );

  return (
    <>
      <EditorialMasthead
        eyebrow="Contact"
        title="Start with the context that matters."
        intro="The project brief is the clearest first step. It gives Strive enough information to review the opportunity before requesting more detail or proposing a conversation."
      />
      <Section tone="light">
        <div className="contact-conversion-grid">
          <article className="contact-primary-choice">
            <p className="micro-label">
              <span aria-hidden="true">01</span> Primary path
            </p>
            <h2>Tell us what you need.</h2>
            <p>
              Share what needs to change, the service needed, current systems,
              timing, and expected investment range in one focused brief.
            </p>
            <ul className="prompt-list">
              <li>Choose the closest service area</li>
              <li>Describe what is happening and what should change</li>
              <li>Give the timing and investment context</li>
              <li>Optionally choose email or telephone for follow-up</li>
            </ul>
            <Button href="/start-a-project">Start a Project</Button>
          </article>

          <aside
            className="contact-secondary-paths"
            aria-label="Other contact paths"
          >
            {company.telephone && (
              <article className="contact-secondary-choice contact-card-dark">
                <p className="micro-label micro-label-inverse">
                  <span aria-hidden="true">02</span> Telephone
                </p>
                <h2>Prefer to talk?</h2>
                <p>
                  Call Strive’s dedicated business number and leave a concise
                  voicemail if the call is not answered.
                </p>
                <a className="telephone-link" href={company.telephone.href}>
                  {company.telephone.display}
                </a>
                {company.telephone.businessHours && (
                  <p className="contact-hours">
                    {company.telephone.businessHours}
                  </p>
                )}
              </article>
            )}

            <article className="contact-email-fallback">
              <p className="eyebrow">Accessible fallback</p>
              <h2>Email Strive directly.</h2>
              <p>
                If the form is not practical for you, send the same core context
                by email. Do not include passwords, credentials, customer
                records, or regulated data.
              </p>
              <a
                className="email-link"
                href={`mailto:${company.email}?subject=${subject}&body=${body}`}
              >
                {company.email}
              </a>
            </article>
          </aside>
        </div>
      </Section>
      <Section tone="soft">
        <div className="section-heading">
          <p className="eyebrow">What happens next</p>
          <h2>Review first. Conversation when useful.</h2>
        </div>
        <div className="problem-grid">
          <article className="problem-card">
            <span className="card-number">01</span>
            <h3>The brief is reviewed</h3>
            <p>
              Strive considers the goal, systems involved, timing, investment
              context, and match with its capabilities.
            </p>
          </article>
          <article className="problem-card">
            <span className="card-number">02</span>
            <h3>The response fits the request</h3>
            <p>
              Strive may respond by email, request more information, decline the
              opportunity, or provide a private scheduling link.
            </p>
          </article>
          <article className="problem-card">
            <span className="card-number">03</span>
            <h3>Scope follows clarification</h3>
            <p>
              When an engagement makes sense, a written proposal defines the
              deliverables, responsibilities, assumptions, commercial terms, and
              next decision.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
