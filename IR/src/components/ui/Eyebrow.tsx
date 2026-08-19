import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  className = "",
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] ${
        tone === "dark" ? "text-on-dark-muted" : "text-stone"
      } ${className}`}
    >
      <span className="h-px w-6 bg-bronze" aria-hidden="true" />
      {children}
    </span>
  );
}
