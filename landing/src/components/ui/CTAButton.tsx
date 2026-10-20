import type { ReactNode } from "react";
import { TRIBUTE_URL } from "../../data/constants";

export default function CTAButton({
  children,
  className = "",
  variant = "solid",
}: {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline";
}) {
  const base =
    "group block w-full sm:inline-block sm:w-auto rounded-full px-7 py-4 text-center text-[15px] sm:text-base font-semibold leading-snug tracking-wide transition-all duration-300 ease-out";

  const styles =
    variant === "solid"
      ? "bg-gold text-white shadow-[0_8px_24px_-8px_rgba(184,138,82,0.55)] hover:bg-gold-dark hover:shadow-[0_10px_28px_-6px_rgba(184,138,82,0.6)] hover:-translate-y-0.5"
      : "border border-ink/20 text-ink hover:border-plum hover:text-plum";

  return (
    <a href={TRIBUTE_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      <span
        className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      >
        →
      </span>
    </a>
  );
}
