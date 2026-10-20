import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
};

export default function CTAButton({ children, className = "", variant = "solid", ...rest }: Props) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-[2px] px-7 py-3.5 text-center text-[15px] font-medium leading-snug tracking-wide transition-all duration-300 ease-out cursor-pointer";

  const styles = {
    solid: "bg-ink text-on-dark hover:bg-charcoal",
    outline: "border border-ink/25 text-ink hover:border-bronze hover:text-bronze",
    ghost: "border border-on-dark/25 text-on-dark hover:border-bronze hover:text-bronze",
  }[variant];

  return (
    <a className={`${base} ${styles} ${className}`} {...rest}>
      <span>{children}</span>
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </a>
  );
}
