import Container from "./ui/Container";
import {
  AUTHOR_NAME,
  OFERTA_URL,
  PRIVACY_URL,
  PINTEREST_URL,
  THREADS_URL,
} from "../data/constants";

export default function Footer() {
  return (
    <footer id="site-footer" className="border-t border-ink/10 bg-white py-10">
      <Container className="flex flex-col gap-8 text-center sm:text-left">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="font-serif text-base text-ink">{AUTHOR_NAME}</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-end">
            <a
              href={PINTEREST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink/55 transition-colors hover:text-sage"
            >
              Pinterest
            </a>
            <a
              href={THREADS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink/55 transition-colors hover:text-sage"
            >
              Threads
            </a>
            <a
              href={OFERTA_URL}
              className="text-sm text-ink/55 transition-colors hover:text-sage"
            >
              Оферта
            </a>
            <a
              href={PRIVACY_URL}
              className="text-sm text-ink/55 transition-colors hover:text-sage"
            >
              Политика конфиденциальности
            </a>
          </nav>
        </div>

        <p className="text-xs leading-relaxed text-ink/45 sm:max-w-2xl">
          Материалы носят информационный характер и не заменяют консультацию врача или
          диетолога. КБЖУ рассчитаны по справочным таблицам и являются приблизительными.
        </p>
      </Container>
    </footer>
  );
}
