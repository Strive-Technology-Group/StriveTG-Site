import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "text";
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary: "button-primary",
  secondary: "button-secondary",
  outline: "button-outline",
  text: "button-text",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const classes = `button ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18">
        <path
          d="M4 10h11M11 5l5 5-5 5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    </>
  );

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </a>
  );
}
