import { motion, useReducedMotion } from "framer-motion";
import type { SiteImage } from "../../data/images";

export default function PhotoFrame({
  image,
  className = "",
  priority = false,
  frame = "portrait",
}: {
  image: SiteImage;
  className?: string;
  priority?: boolean;
  frame?: "portrait" | "landscape" | "square";
}) {
  const reduceMotion = useReducedMotion();
  const ratio = { portrait: "aspect-[4/5]", landscape: "aspect-[4/3]", square: "aspect-square" }[frame];

  return (
    <motion.div
      className={`relative overflow-hidden bg-paper-alt ${ratio} ${className}`}
      initial={reduceMotion ? undefined : { opacity: 0, scale: 1.04 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding={priority ? "sync" : "async"}
        className={`h-full w-full object-cover ${image.position ?? ""}`}
      />
    </motion.div>
  );
}
