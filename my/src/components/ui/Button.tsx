"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { usePointerFine } from "@/lib/motion";
import type { MouseEvent, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-volt text-ink hover:shadow-lift active:scale-[0.98]",
  secondary: "bg-obsidian text-concrete hover:shadow-lift active:scale-[0.98]",
  ghost: "text-ink border border-charcoal hover:bg-ash-gray active:scale-[0.98]",
};

const MotionLink = motion.create(Link);

/** Subtle magnetic pull toward the cursor — the one signature micro-interaction repeated on every CTA. */
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
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const reduceMotion = useReducedMotion();
  const pointerFine = usePointerFine();
  const magnetic = pointerFine && !reduceMotion;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!magnetic) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <MotionLink
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={magnetic ? { x: springX, y: springY } : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-200",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </MotionLink>
  );
}
