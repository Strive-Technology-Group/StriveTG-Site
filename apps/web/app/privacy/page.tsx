import type { Metadata } from "next";
import { EditorialMasthead } from "../components/EditorialMasthead";
import { Section } from "../components/Section";
import { company } from "../lib/company";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How the Strive Technology Group website, project brief, direct email, and related service providers handle information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <EditorialMasthead
        document
        eyebrow="Privacy"
        title="How this website handles information."
        intro="This page explains what happens when you browse the website, submit a project brief, or contact Strive directly."
      />
      <Section tone="light">
        <div className="legal-content">
          <div className="legal-notice">
            <strong>Last updated:</strong> September 1, 2026
          </div>

          <section>
            <h2>1. Contact choices</h2>
            <p>
              This website provides a project-brief form and a direct email
              address. A dedicated business telephone number is displayed only
              when it has been approved for public use. The website does not
              provide user accounts, online payments, or file uploads.
            </p>
          </section>

          <section>
            <h2>2. When you browse</h2>
            <p>
              The hosting and network services that deliver the website may
              process standard technical request information, including an IP
              address, browser or device details, requested pages, timestamps,
              and security or diagnostic logs.
            </p>
            <p>
              The website code does not load a first-party analytics product or
              advertising pixel. Fonts and visual assets are served locally
              rather than requested from a font provider.
            </p>
          </section>

          <section>
            <h2>3. When you submit a project brief</h2>
            <p>The form asks for:</p>
            <ul>
              <li>
                Full name, work email, and either a company name or company
                website
              </li>
              <li>
                Service needed, what you are trying to accomplish, and optional
                information about existing systems
              </li>
              <li>Desired timing and expected investment range</li>
              <li>
                An optional preferred contact method and a telephone number when
                telephone is selected
              </li>
              <li>An optional referral source</li>
            </ul>
            <p>
              The application adds the submission time, source page, and a
              unique reference. It uses a one-way representation of the network
              address for short-term rate limiting rather than placing the
              address in the lead record.
            </p>
          </section>

          <section>
            <h2>4. Delivery, use, and access</h2>
            <p>
              When project intake is enabled, accepted briefs are stored in
              HubSpot CRM. A project brief is reported as received only after
              the CRM confirms a durable record. Resend may then deliver a
              notification to the approved Strive inbox and an acknowledgment to
              the work email supplied in the brief. An email failure does not
              replace or erase the CRM record.
            </p>
            <p>Project-inquiry information is used to:</p>
            <ul>
              <li>
                Review the opportunity and its fit with Strive’s capabilities
              </li>
              <li>
                Respond, request more information, decline, or privately offer a
                scheduling link
              </li>
              <li>Maintain related operational and business records</li>
              <li>
                Prevent duplicate submissions, abuse, and technical failures
              </li>
            </ul>
            <p>
              Access should be limited to the people and providers responsible
              for lead review, delivery, security, and required business
              records.
            </p>
          </section>

          <section>
            <h2>5. Failure and application logs</h2>
            <p>
              The application does not intentionally write project-brief
              contents, email addresses, telephone numbers, or raw network
              addresses to its logs. A delivery failure may record the unique
              reference and a technical failure category so the issue can be
              investigated.
            </p>
            <p>
              If the lead provider does not confirm delivery, the website shows
              an error and does not tell the visitor that the brief was
              received.
            </p>
          </section>

          <section>
            <h2>6. Sensitive information</h2>
            <p>
              Do not submit passwords, credentials, payment details, regulated
              data, customer records, identity documents, or other sensitive
              information through the project brief or a general inquiry.
            </p>
          </section>

          <section>
            <h2>7. Retention, deletion, and providers</h2>
            <p>
              Inquiry records should be kept only for the approved review,
              follow-up, security, legal, and business-record purposes that
              apply to the request. HubSpot and Resend, along with the
              configured hosting and network providers, may process information
              under their contracts, security controls, retention settings, and
              subprocessor terms when those services are enabled.
            </p>
            <p>
              Questions about information you submitted, including access,
              correction, or deletion requests, can be directed to{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a>.
            </p>
          </section>

          <section>
            <h2>8. Changes</h2>
            <p>
              This page will be updated when the website’s contact paths, data
              collection, provider configuration, or retention practices
              materially change. The date above identifies the latest published
              revision.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
