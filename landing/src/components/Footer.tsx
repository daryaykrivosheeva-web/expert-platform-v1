import { Link } from "react-router-dom";
import Container from "./ui/Container";
import { TRIBUTE_URL, TELEGRAM_URL, TELEGRAM_HANDLE, navLinks } from "../data/constants";

export default function Footer() {
  return (
    <footer id="site-footer" className="border-t border-ink/10 bg-white py-10">
      <Container className="flex flex-col gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div>
          <span className="font-serif text-base text-ink">Даша Радченко</span>
          <p className="mt-2 text-sm leading-relaxed text-ink/55">
            Самозанятая, г. Благовещенск. ИНН 282514212660
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-sm text-ink/55 transition-colors hover:text-plum"
          >
            Для связи: {TELEGRAM_HANDLE}
          </a>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-end">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/55 transition-colors hover:text-plum"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/privacy"
            className="text-sm text-ink/55 transition-colors hover:text-plum"
          >
            Политика конфиденциальности
          </Link>
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
