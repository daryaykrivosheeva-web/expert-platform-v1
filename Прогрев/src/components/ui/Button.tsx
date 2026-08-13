"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white shadow-button hover:bg-accent-dark",
  secondary: "bg-white text-accent-dark border border-border hover:border-accent",
};

const MotionLink = motion.create(Link);

export function Button({
  href,
  children,
  variant = "primary",
  className,
  target,
  id,
  block = false,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  target?: string;
  id?: string;
  block?: boolean;
}) {
  return (
    <MotionLink
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      id={id}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-colors duration-200",
        block && "w-full",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </MotionLink>
  );
}
