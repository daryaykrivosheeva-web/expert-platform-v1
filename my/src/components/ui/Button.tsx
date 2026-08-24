"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { usePointerFine } from "@/lib/motion";
import type { MouseEvent, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "border border-[#2c2e34] bg-obsidian text-snow shadow-btn-primary active:scale-[0.98]",
  secondary: "border border-cloud bg-snow text-graphite hover:bg-paper active:scale-[0.98]",
  ghost: "border border-iron bg-snow text-iron hover:bg-cloud/40 active:scale-[0.98]",
};

const MotionLink = motion.create(Link);

/** Subtle magnetic pull toward the cursor — the one signature micro-interaction repeated on every CTA. */
export function Button({
  href,
  children,
  variant = "primary",
  pill = false,
  className,
  target,
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  /** Full-pill radius, reserved for navigation CTAs per the reference's geometry rule. */
  pill?: boolean;
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
        "inline-flex items-center justify-center gap-2 px-4 py-3 text-body font-normal transition-all duration-200",
        pill ? "rounded-pill" : "rounded-btn",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </MotionLink>
  );
}
