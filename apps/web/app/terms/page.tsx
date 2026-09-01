import type { Metadata } from "next";
import { EditorialMasthead } from "../components/EditorialMasthead";
import { Section } from "../components/Section";
import { company } from "../lib/company";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Working website and engagement terms for Strive Technology Group, including scope, ownership, support, and handoff principles.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <EditorialMasthead
        document
        eyebrow="Terms"
        title="Clear ownership starts with clear language."
        intro="These website terms and engagement principles are a working draft. Signed project agreements control client work and require professional legal review."
      />
      <Section tone="light">
        <div className="legal-content">
          <div className="legal-notice">
            <strong>Review status:</strong> Working draft dated August 31, 2026.
            Do not deploy as final terms until the owner confirms the
            contracting entity and commercial model and qualified counsel
            reviews the document.
          </div>

          <section>
            <h2>1. Website use</h2>
            <p>
              This website provides general information about {company.name} and
              its services. It is not professional legal, financial, or
              accounting advice, and it does not create a client relationship or
              guarantee that Strive will accept an engagement.
            </p>
            <p>
              You may use the site for lawful informational and contact
              purposes. Do not attempt to interfere with the site, test it
              without authorization, introduce malicious code, or use its
              content in a way that violates applicable rights or law.
            </p>
          </section>

          <section>
            <h2>2. Proposals and project agreements</h2>
            <p>
              Website descriptions are capabilities, not fixed packages or
              promises that every engagement includes every item. A client
              engagement begins only when the parties accept a written agreement
              or proposal identifying the parties, scope, deliverables,
              exclusions, responsibilities, review process, fees, payment
              schedule, assumptions, and other applicable terms.
            </p>
            <p>
              If this website conflicts with a signed client agreement, the
              signed agreement controls for that engagement.
            </p>
          </section>

          <section>
            <h2>3. Ownership model</h2>
            <h3>Client-owned assets</h3>
            <p>
              After full payment, the client owns its domain, data, content, and
              the custom deliverables identified for transfer in the signed
              agreement. Client-provided material remains the client’s or its
              licensors’ property.
            </p>
            <h3>Strive’s retained materials</h3>
            <p>
              Strive retains ownership of pre-existing intellectual property,
              reusable libraries, templates, tools, methods, processes, and
              general knowledge. When those materials are embedded in a
              deliverable, the agreement should provide the client a license
              sufficient to use the fully paid deliverable as intended.
            </p>
            <h3>Third-party and subscription products</h3>
            <p>
              Open-source software, platforms, fonts, plugins, stock materials,
              and other third-party products remain subject to their own
              licenses and terms. Any separately licensed or subscription-based
              Strive product must be identified explicitly; it should not be
              implied to be a transferred custom deliverable.
            </p>
          </section>

          <section>
            <h2>4. Hosting, support, cancellation, and handoff</h2>
            <p>
              Hosting, maintenance, monitoring, content changes, support, and
              improvement work may be recurring services when included in a
              written agreement. The agreement should state the covered systems,
              service period, renewal or cancellation process, access model,
              support channel, and any actual service target.
            </p>
            <p>
              Ending recurring support does not remove the client’s ownership of
              fully paid custom deliverables. Subject to payment and third-party
              limitations, Strive should provide reasonable access, export,
              documentation, and transition assistance as defined in the
              agreement. Additional migration work may be separately scoped.
            </p>
          </section>

          <section>
            <h2>5. Fees, timing, and changes</h2>
            <p>
              Fees, deposits, billing schedules, expenses, taxes, refunds,
              pauses, and late-payment consequences must be stated in the
              applicable agreement. This website does not establish a universal
              project price or timeline.
            </p>
            <p>
              Changes to scope, assumptions, dependencies, client
              responsibilities, or third-party systems can affect timing and
              fees. Material changes should be documented and approved before
              the changed work proceeds.
            </p>
          </section>

          <section>
            <h2>6. Client responsibilities</h2>
            <p>
              A project agreement may require the client to provide timely
              access, accurate content, lawful materials, decisions, feedback,
              approvals, and a responsible point of contact. The client is
              responsible for having rights to the content, data, trademarks,
              accounts, and instructions it provides.
            </p>
          </section>

          <section>
            <h2>7. Results, warranties, and liability</h2>
            <p>
              Technology, search visibility, analytics, and automation outcomes
              depend on factors outside Strive’s control, including the client’s
              offer, market, traffic, data quality, operations, decisions,
              third-party platforms, and implementation after handoff. Unless a
              signed agreement says otherwise, the site does not promise a
              ranking, lead volume, revenue result, time saving, uninterrupted
              service, or specific return.
            </p>
            <p>
              Warranty disclaimers, indemnities, limitation of liability,
              dispute procedures, governing law, and venue are legal terms that
              must be established in a professionally reviewed client agreement.
              This draft intentionally does not invent those decisions.
            </p>
          </section>

          <section>
            <h2>8. Site content and third-party links</h2>
            <p>
              Strive owns or licenses the website design, copy, and branding
              except where otherwise stated. You may not reproduce substantial
              website content or use Strive’s marks without permission, subject
              to rights provided by law.
            </p>
            <p>
              Third-party links and embedded services are provided for
              convenience. Their availability, security, content, and practices
              are governed by their operators.
            </p>
          </section>

          <section>
            <h2>9. Changes and contact</h2>
            <p>
              These website terms may be updated as the site and business
              practices change. The published date should be revised when
              material changes are made.
            </p>
            <p>
              Questions can be sent to{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a>. The owner
              must confirm the legal entity name, effective address, billing
              contact, and governing-law choices before production use.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
