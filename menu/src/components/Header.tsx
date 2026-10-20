import { useEffect, useState } from "react";
import Container from "./ui/Container";
import { navLinks, TRIBUTE_URL, CTA_LABEL_SHORT, PRODUCT_NAME } from "../data/constants";

export default function Header() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    function onScroll() {
      setCompact(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
        compact
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(47,79,65,0.08)] py-3"
          : "bg-cream/0 py-4 sm:py-6"
      }`}
    >
      <Container className="flex items-center justify-between gap-4">
        <a
          href="#top"
          className="font-serif text-sm sm:text-lg font-semibold tracking-tight text-ink truncate"
        >
          {PRODUCT_NAME}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 hover:text-sage transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={TRIBUTE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex shrink-0 items-center rounded-full bg-terracotta px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-terracotta-dark sm:px-5"
        >
          {CTA_LABEL_SHORT}
        </a>
      </Container>
    </header>
  );
}
