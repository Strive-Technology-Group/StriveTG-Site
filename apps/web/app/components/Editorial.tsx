import type { ReactNode } from "react";

export function MicroLabel({
  children,
  index,
  inverse = false,
}: {
  children: ReactNode;
  index?: string;
  inverse?: boolean;
}) {
  return (
    <p className={inverse ? "micro-label micro-label-inverse" : "micro-label"}>
      {index ? <span aria-hidden="true">{index}</span> : null}
      {children}
    </p>
  );
}

export function EditorialRule({ inverse = false }: { inverse?: boolean }) {
  return (
    <hr
      data-reveal="rule"
      className={
        inverse ? "editorial-rule editorial-rule-inverse" : "editorial-rule"
      }
    />
  );
}

export function SystemDiagram({ inverse = false }: { inverse?: boolean }) {
  return (
    <div
      data-reveal="diagram"
      className={
        inverse ? "system-diagram system-diagram-inverse" : "system-diagram"
      }
      role="img"
      aria-label="A website and search layer feeds business reporting, which informs a human-controlled automation layer."
    >
      <div className="diagram-register" aria-hidden="true">
        STG / SYSTEM MAP
      </div>
      <div className="diagram-node diagram-node-primary">
        <span>01</span>
        <strong>Presence</strong>
        <small>Website / search / conversion</small>
      </div>
      <div className="diagram-connector" aria-hidden="true">
        <i />
        <span>VERIFIED SIGNALS</span>
      </div>
      <div className="diagram-node">
        <span>02</span>
        <strong>Insight</strong>
        <small>Measurement / reporting / decisions</small>
      </div>
      <div className="diagram-connector" aria-hidden="true">
        <i />
        <span>DEFINED RULES</span>
      </div>
      <div className="diagram-node">
        <span>03</span>
        <strong>Operations</strong>
        <small>Workflow / integration / handoff</small>
      </div>
      <div className="diagram-human" aria-hidden="true">
        <span /> Human judgment stays in the loop
      </div>
    </div>
  );
}

export function HeroSystemInsert({
  variant,
}: {
  variant: "presence" | "insight" | "operations";
}) {
  const labels = {
    presence: ["Presence", "Search / web", "Indexed"],
    insight: ["Insight", "Reporting", "Live view"],
    operations: ["Operations", "Workflow", "Guarded"],
  } as const;
  const [title, detail, status] = labels[variant];

  return (
    <span
      className={`hero-system-insert hero-system-insert-${variant}`}
      aria-hidden="true"
    >
      <span className="hero-insert-register">
        <b>{title}</b>
        <small>{status}</small>
      </span>
      <span className="hero-insert-visual">
        <i />
        <i />
        <i />
      </span>
      <span className="hero-insert-detail">{detail}</span>
    </span>
  );
}
