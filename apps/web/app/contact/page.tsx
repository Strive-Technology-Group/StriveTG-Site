import type { Metadata } from "next";
import { Button } from "../components/Button";
import { EditorialMasthead } from "../components/EditorialMasthead";
import { Section } from "../components/Section";
import { company } from "../lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Strive Technology Group by email or book a fit call to discuss a website, analytics, or automation need for a growing service business.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${company.name}`,
    description:
      "Email Strive directly or choose a fit call when a conversation is easier.",
    url: "/contact",
  },
};

export default function ContactPage() {
  const subject = encodeURIComponent("Project fit inquiry");
  const body = encodeURIComponent(
    "Business name:\n\nWhat are you trying to improve?\n\nWhat is happening today?\n\nAny important timing or constraints?\n",
  );

  return (
    <>
      <EditorialMasthead
        eyebrow="Contact"
        title="Start with the problem you need to solve."
        intro="Use email when the request is already clear, or book a fit call when talking through the context will be more useful."
      />
      <Section tone="light">
        <div className="contact-grid">
          <article className="contact-card">
            <p className="eyebrow">Email first</p>
            <h2>Send the useful context.</h2>
            <p>
              There is no public contact form because the site does not have a
              verified delivery and spam-protection backend. Email keeps the
              path functional and transparent.
            </p>
            <a
              className="email-link"
              href={`mailto:${company.email}?subject=${subject}&body=${body}`}
            >
              {company.email}
            </a>
            <p className="kicker">Helpful details include:</p>
            <ul className="prompt-list">
              <li>What the business does and who it serves</li>
              <li>The problem or decision that prompted the inquiry</li>
              <li>The current website, tools, or workflow involved</li>
              <li>Any timing, access, or operational constraints</li>
            </ul>
          </article>
          <article className="contact-card contact-card-dark">
            <p className="eyebrow eyebrow-on-dark">Fit call</p>
            <h2>Talk through the context.</h2>
            <p>
              The fit call is for understanding the need and deciding whether
              Strive is the right partner. It is not presented as a guaranteed
              strategy session, audit, or proposal.
            </p>
            <div className="hero-actions">
              <Button href="/consultation" variant="secondary">
                See booking details
              </Button>
            </div>
          </article>
        </div>
      </Section>
      <Section tone="soft">
        <div className="section-heading">
          <p className="eyebrow">What happens next</p>
          <h2>A practical path, without a response-time promise.</h2>
        </div>
        <div className="problem-grid">
          <article className="problem-card">
            <span className="card-number">01</span>
            <h3>Context is reviewed</h3>
            <p>
              Strive reviews what you sent and whether the request fits the
              services described on this site.
            </p>
          </article>
          <article className="problem-card">
            <span className="card-number">02</span>
            <h3>Questions come before scope</h3>
            <p>
              If more context is needed, the next step may be a short exchange
              or fit call—not an immediate estimate.
            </p>
          </article>
          <article className="problem-card">
            <span className="card-number">03</span>
            <h3>A proposal follows fit</h3>
            <p>
              When an engagement makes sense, discovery and scope determine the
              deliverables, assumptions, timing, and price.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
