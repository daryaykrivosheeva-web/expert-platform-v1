"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOut } from "@/lib/motion";

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
  className,
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: easeOut }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-badge border border-cloud px-2 py-1 text-caption font-medium uppercase text-graphite">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-heading-sm font-semibold text-obsidian sm:text-heading lg:text-heading-lg">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-body-lg text-steel">{subheading}</p>
      )}
    </motion.div>
  );
}
