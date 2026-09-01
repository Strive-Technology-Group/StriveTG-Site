import Image from "next/image";
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
      className="logo-link"
      aria-label="Strive Technology Group home"
    >
      <Image
        src={surface === "dark" ? "/Full logo.svg" : "/Full logo on light.svg"}
        alt="Strive Technology Group"
        width={586}
        height={54}
        className={compact ? "logo-image logo-image-compact" : "logo-image"}
        priority
      />
    </Link>
  );
}
