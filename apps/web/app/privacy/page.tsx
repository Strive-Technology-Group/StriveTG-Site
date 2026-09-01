import type { Metadata } from "next";
import { EditorialMasthead } from "../components/EditorialMasthead";
import { Section } from "../components/Section";
import { company } from "../lib/company";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Working privacy disclosure for the Strive Technology Group website, email contact path, hosting logs, and click-to-load Calendly booking.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <EditorialMasthead
        document
        eyebrow="Privacy"
        title="A plain-language working privacy draft."
        intro="This disclosure is written to match the current website behavior. It still requires owner confirmation and professional legal review before production publication."
      />
      <Section tone="light">
        <div className="legal-content">
          <div className="legal-notice">
            <strong>Review status:</strong> Working draft dated August 31, 2026.
            Confirm the legal entity, hosting provider, retention practices,
            processor terms, and applicable-law requirements with qualified
            counsel before deployment.
          </div>

          <section>
            <h2>1. What this site does</h2>
            <p>
              This is a public marketing website for {company.name}. It does not
              currently provide user accounts, a customer portal, online
              payments, a first-party contact form, advertising pixels, or a
              first-party analytics product.
            </p>
            <p>
              The site provides two ways to contact Strive: send an email using
              your own email provider, or choose to load Calendly and book a fit
              call.
            </p>
          </section>

          <section>
            <h2>2. Information that may be processed</h2>
            <h3>When you browse</h3>
            <p>
              The hosting and network providers that deliver the site may
              process technical request information such as an IP address,
              browser or device details, requested pages, timestamps, and
              security or diagnostic logs. The exact provider and retention
              settings must be confirmed before deployment.
            </p>
            <h3>When you email</h3>
            <p>
              If you email Strive, the email address, message, attachments, and
              any information you choose to include are processed to review and
              respond to the inquiry and to maintain relevant business records.
            </p>
            <h3>When you open the booking scheduler</h3>
            <p>
              Calendly is not loaded globally. It loads only after you select
              “Open secure booking” on the consultation page. Calendly may then
              process booking details, technical data, and cookies under its own
              terms and privacy practices. Do not include sensitive information
              that is not needed to schedule the call.
            </p>
          </section>

          <section>
            <h2>3. Cookies and third parties</h2>
            <p>
              The current Strive code does not set a first-party marketing or
              analytics cookie. The website uses a local/system font stack and
              does not make a browser request to Google Fonts.
            </p>
            <p>
              If you choose to load the Calendly frame, Calendly may use its own
              storage, cookies, and subprocessors. Review{" "}
              <a href="https://calendly.com/privacy">
                Calendly’s privacy policy
              </a>{" "}
              before using the scheduler if you need more detail. You can use
              email instead.
            </p>
          </section>

          <section>
            <h2>4. How information is used</h2>
            <ul>
              <li>To deliver and secure the website</li>
              <li>To understand and respond to an inquiry you send</li>
              <li>To schedule and prepare for a call you request</li>
              <li>
                To maintain appropriate operational, security, and business
                records
              </li>
              <li>To comply with applicable legal obligations</li>
            </ul>
            <p>
              Strive does not state that visitor information is sold. The owner
              must confirm actual business practices and applicable legal
              definitions before this draft is published.
            </p>
          </section>

          <section>
            <h2>5. Retention and safeguards</h2>
            <p>
              Information should be kept only as long as reasonably needed for
              the purpose for which it was collected, legitimate business
              records, security, dispute handling, or legal obligations.
              Specific retention schedules have not yet been owner-approved and
              must be documented before production launch.
            </p>
            <p>
              Reasonable technical and organizational safeguards should be used,
              but no website, email system, or third-party service can guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2>6. Choices and requests</h2>
            <p>
              You can avoid loading Calendly by using email. Depending on where
              you live, you may have rights concerning access, correction,
              deletion, objection, restriction, or portability. Applicability
              and identity-verification procedures require legal review.
            </p>
            <p>
              To make a privacy request, email{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a>. Do not
              send sensitive identity documents unless Strive has provided a
              secure and necessary verification method.
            </p>
          </section>

          <section>
            <h2>7. Changes and contact</h2>
            <p>
              This disclosure should be updated when the site’s providers, data
              collection, contact paths, or business practices change. Material
              runtime behavior should not drift from the published text.
            </p>
            <p>
              Privacy questions can be sent to{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a>. The owner
              must provide the legal entity name and any legally required
              address before deployment.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
