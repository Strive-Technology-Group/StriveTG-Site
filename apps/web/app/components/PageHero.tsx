import type { ReactNode } from "react";
import { Container } from "./Container";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <Container>
        <div className="page-hero-copy">
          <p className="eyebrow eyebrow-on-dark">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero-intro">{intro}</p>
          {children}
        </div>
      </Container>
    </section>
  );
}
