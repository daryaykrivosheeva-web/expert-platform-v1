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
        <h2 className="mt-4 text-[32px] leading-[1.15] sm:text-[40px] lg:text-[48px] text-ink">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 max-w-2xl text-lg font-normal leading-relaxed text-ink/70 sm:text-xl ${
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
