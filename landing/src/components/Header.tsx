import { useEffect, useState } from "react";
import Container from "./ui/Container";
import { navLinks, TRIBUTE_URL } from "../data/constants";

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
          ? "bg-bg/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(37,33,39,0.08)] py-3"
          : "bg-bg/0 py-5 sm:py-6"
      }`}
    >
      <Container className="flex items-center justify-between">
        <a
          href="#top"
          className="font-serif text-base sm:text-lg font-semibold tracking-tight text-ink"
        >
          Даша Радченко
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 hover:text-plum transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={TRIBUTE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-plum px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-plum-dark sm:px-5"
        >
          Забрать набор
        </a>
      </Container>
    </header>
  );
}
