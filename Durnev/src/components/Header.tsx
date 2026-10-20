import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./ui/Container";
import ScrollProgress from "./ScrollProgress";
import { NAV, SITE } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";

const SECTION_IDS = NAV.map((item) => item.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open ? "bg-paper/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
        }`}
      >
        <Container className="flex h-16 items-center justify-between sm:h-[72px]">
          <a href="#hero" className="font-display text-lg font-semibold uppercase tracking-wide text-ink transition-colors hover:text-gold sm:text-xl">
            {SITE.name} <span className="text-gold">«{SITE.callsign}»</span>
          </a>

          <nav className="hidden lg:flex lg:items-center lg:gap-7" aria-label="Основная навигация">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative py-2 text-sm font-medium tracking-wide transition-colors ${
                  active === item.id ? "text-ink" : "text-stone hover:text-ink"
                }`}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-gold"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </a>
            ))}
          </nav>

          <a
            href={SITE.phoneHref}
            className="hidden rounded-[2px] bg-ink px-5 py-2 text-sm font-semibold uppercase tracking-wide text-on-dark transition-colors hover:bg-gold lg:inline-flex"
          >
            {SITE.phone}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 cursor-pointer items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          >
            <span className="relative block h-4 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-6 bg-ink transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-6 bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </Container>

        <ScrollProgress />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 bg-paper lg:hidden"
          >
            <nav className="flex h-full flex-col gap-1 px-6 pt-8" aria-label="Мобильная навигация">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="border-b border-border py-4 font-display text-2xl uppercase text-ink"
                >
                  {item.label}
                </motion.a>
              ))}
              <a href={SITE.phoneHref} className="mt-6 rounded-[2px] bg-ink px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-on-dark">
                Позвонить: {SITE.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
