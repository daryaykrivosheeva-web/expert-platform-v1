import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-plum ${className}`}
    >
      <span className="h-px w-6 bg-gold" aria-hidden="true" />
      {children}
    </span>
  );
}
