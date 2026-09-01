import type { Metadata } from "next";
import { EditorialMasthead } from "../components/EditorialMasthead";
import { Section } from "../components/Section";
import { company } from "../lib/company";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Website-use terms for Strive Technology Group and the relationship between website information and separate project agreements.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <EditorialMasthead
        document
        eyebrow="Terms"
        title="Website terms in plain language."
        intro="These terms cover use of this website. Any client work is governed by a separate written agreement accepted by the parties."
      />
      <Section tone="light">
        <div className="legal-content">
          <div className="legal-notice">
            <strong>Last updated:</strong> September 1, 2026
          </div>

          <section>
            <h2>1. Website information</h2>
            <p>
              This website provides general information about {company.name},
              its capabilities, and ways to make contact. Website content is not
              a proposal, fixed package, or professional legal, financial, or
              accounting advice.
            </p>
            <p>
              Using the website or sending an inquiry does not by itself create
              a client relationship or require either party to begin an
              engagement.
            </p>
          </section>

          <section>
            <h2>2. Project agreements</h2>
            <p>
              Client work begins through a separate written agreement or
              accepted proposal. That document identifies the parties, scope,
              deliverables, exclusions, responsibilities, review process,
              commercial terms, ownership, third-party services, support, and
              handoff terms that apply to the engagement.
            </p>
            <p>
              If website information differs from an accepted project agreement,
              the project agreement controls for that engagement.
            </p>
          </section>

          {/* Working commercial direction. Owner and qualified legal review are required before production publication. */}
          <section>
            <h2>3. Commercial terms and ending work</h2>
            <p>
              Initial projects, eligible ongoing services, and material
              additions are separate forms of work. The applicable agreement
              identifies deposits or setup fees, invoices, milestones,
              acceptance, changes, third-party costs, renewal, cancellation,
              refund treatment, ownership, and offboarding.
            </p>
            <p>
              Eligible ongoing monthly services do not require a long-term
              commitment. They may be canceled before the next renewal, and
              future recurring charges stop according to the agreement. Initial
              projects, completed work, work already in progress, committed
              third-party costs, active billing periods, and handoff
              responsibilities remain governed by the approved agreement.
            </p>
          </section>

          <section>
            <h2>4. Capabilities and outcomes</h2>
            <p>
              Descriptions on this website explain the types of problems Strive
              addresses. They do not establish a universal scope, price,
              timeline, service level, search ranking, lead volume, revenue
              result, time saving, or other guaranteed outcome.
            </p>
            <p>
              Project-specific commitments and validation criteria belong in the
              applicable written agreement.
            </p>
          </section>

          <section>
            <h2>5. Acceptable website use</h2>
            <p>
              Use the website for lawful informational and contact purposes. Do
              not interfere with its operation, test it without authorization,
              introduce malicious code, misrepresent Strive, or use website
              content in a way that infringes applicable rights.
            </p>
          </section>

          <section>
            <h2>6. Website content and third parties</h2>
            <p>
              The website design, copy, branding, and other materials are owned
              or licensed by Strive unless stated otherwise. Third-party links
              and embedded services are governed by their respective operators.
            </p>
          </section>

          <section>
            <h2>7. Changes and contact</h2>
            <p>
              These terms may change as the website and business practices
              evolve. The date above identifies the latest published revision.
            </p>
            <p>
              Questions can be sent to{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a>.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
