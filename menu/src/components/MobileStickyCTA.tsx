import { AnimatePresence, motion } from "framer-motion";
import { useElementInView } from "../hooks/useInView";
import { CTA_LABEL, TRIBUTE_URL } from "../data/constants";

export default function MobileStickyCTA() {
  const heroVisible = useElementInView("#hero");
  const footerVisible = useElementInView("#site-footer");
  const visible = !heroVisible && !footerVisible;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-ink/10 bg-cream/95 px-4 py-3 backdrop-blur-md md:hidden"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <a
            href={TRIBUTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-full bg-terracotta px-5 py-4 text-[15px] font-semibold text-white shadow-[0_10px_24px_-6px_rgba(201,105,74,0.55)] active:scale-[0.98] transition-transform"
          >
            {CTA_LABEL}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
