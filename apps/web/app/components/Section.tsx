import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  id,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  id?: string;
  tone?: "light" | "soft" | "dark" | "ink";
  className?: string;
}) {
  return (
    <section id={id} className={`section section-${tone} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
