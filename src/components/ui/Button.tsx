import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-soft hover:bg-primary-dark hover:shadow-lift active:scale-[0.98]",
  secondary:
    "bg-surface text-ink border border-border hover:border-primary/40 hover:bg-primary/5 active:scale-[0.98]",
  ghost: "text-ink hover:bg-surface active:scale-[0.98]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  target,
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  target?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
