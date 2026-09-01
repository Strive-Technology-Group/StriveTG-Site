import Link from "next/link";

export function Logo({
  surface = "dark",
  compact = false,
}: {
  surface?: "dark" | "light";
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`logo-link logo-link-${surface}`}
      aria-label="Strive Technology Group home"
    >
      <span
        aria-hidden="true"
        className={compact ? "logo-mark logo-mark-compact" : "logo-mark"}
      />
    </Link>
  );
}
