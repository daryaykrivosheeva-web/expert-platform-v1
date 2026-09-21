import { Link } from "react-router-dom";
import Container from "./ui/Container";
import { SELLER_CITY, SELLER_INN, SELLER_NAME, SELLER_STATUS } from "../data/constants";

export default function Footer() {
  return (
    <footer id="site-footer" className="border-t border-ink/10 bg-white py-10">
      <Container className="flex flex-col gap-8 text-center sm:text-left">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="font-serif text-base text-ink">{SELLER_NAME}</span>
            <p className="mt-2 text-sm leading-relaxed text-ink/55">
              {SELLER_STATUS}, {SELLER_CITY}. ИНН {SELLER_INN}
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-end">
            <Link to="/oferta" className="text-sm text-ink/55 transition-colors hover:text-sage">
              Оферта
            </Link>
            <Link to="/privacy" className="text-sm text-ink/55 transition-colors hover:text-sage">
              Политика конфиденциальности
            </Link>
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
