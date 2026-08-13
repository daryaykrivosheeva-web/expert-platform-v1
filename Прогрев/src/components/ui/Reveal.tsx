"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { easeOut } from "@/lib/motion";

/**
 * Fades a section up into place once it scrolls into view.
 *
 * A 2s fallback timer force-reveals the content even if it never
 * intersects the viewport — a fast anchor jump or "scroll to bottom" can
 * skip a section without the browser ever painting a frame where it was
 * visible, and whileInView alone would then leave it hidden forever.
 * This bounds the worst case to "revealed a couple seconds late" instead.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  distance = 20,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [forced, setForced] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setForced(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const visible = inView || forced || reduceMotion;

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: distance }}
      animate={visible ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay: reduceMotion ? 0 : delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
