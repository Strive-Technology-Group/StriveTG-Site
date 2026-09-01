import type { Metadata } from "next";
import { EditorialMasthead } from "../components/EditorialMasthead";
import { Section } from "../components/Section";
import { StructuredData } from "../components/StructuredData";
import { company, faqs } from "../lib/company";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Clear answers about fit, scope, pricing, cancellation, ownership, support, automation, and project offboarding.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `FAQ | ${company.name}`,
    description:
      "Practical answers about working with Strive Technology Group.",
    url: "/faq",
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <EditorialMasthead
        eyebrow="FAQ"
        title="Questions that shape a good fit."
        intro="Review how Strive approaches fit, scope, pricing, recurring service, project cancellation, ownership, support, and offboarding before starting a conversation."
      />
      <Section tone="light">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}</summary>
              <div className="faq-answer">{faq.answer}</div>
            </details>
          ))}
        </div>
      </Section>
      <StructuredData data={faqSchema} />
    </>
  );
}
