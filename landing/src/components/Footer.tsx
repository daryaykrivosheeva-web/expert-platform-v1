import Container from "./ui/Container";
import { TRIBUTE_URL, navLinks } from "../data/constants";

export default function Footer() {
  return (
    <footer id="site-footer" className="border-t border-ink/10 bg-white py-10">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="font-serif text-base text-ink">Даша Радченко</span>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/55 transition-colors hover:text-plum"
            >
              {link.label}
            </a>
          ))}
          <a
            href={TRIBUTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-plum hover:text-plum-dark"
          >
            Забрать набор
          </a>
        </nav>
      </Container>
    </footer>
  );
}
