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
    "block w-full sm:inline-block sm:w-auto rounded-full px-7 py-4 text-center text-[15px] sm:text-base font-semibold leading-snug transition-all duration-300 ease-out";

  const styles =
    variant === "solid"
      ? "bg-terracotta text-white shadow-[0_10px_28px_-8px_rgba(201,105,74,0.55)] hover:bg-terracotta-dark hover:shadow-[0_12px_32px_-6px_rgba(201,105,74,0.6)] hover:-translate-y-0.5"
      : "border border-ink/20 text-ink hover:border-sage hover:text-sage";

  return (
    <a href={TRIBUTE_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
