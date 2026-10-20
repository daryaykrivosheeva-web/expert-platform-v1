import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : ""} ${className}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow className={align === "center" ? "justify-center" : ""}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-[28px] leading-[1.2] sm:text-[36px] lg:text-[42px] text-ink">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={`mt-4 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
