import type { ReactNode } from "react";
import { Container } from "./Container";
import { MicroLabel } from "./Editorial";

export function EditorialMasthead({
  eyebrow,
  title,
  intro,
  children,
  document = false,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
  document?: boolean;
}) {
  return (
    <section
      className={document ? "page-hero page-hero-document" : "page-hero"}
    >
      <Container>
        <div className="page-hero-register" aria-hidden="true">
          STRIVE / {eyebrow.toUpperCase()}
        </div>
        <div className="page-hero-grid">
          <MicroLabel index="00">{eyebrow}</MicroLabel>
          <div className="page-hero-copy">
            <h1 data-reveal="type">{title}</h1>
          </div>
          <div className="page-hero-side">
            <p className="page-hero-intro">{intro}</p>
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
