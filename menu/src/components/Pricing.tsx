import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import CTAButton from "./ui/CTAButton";
import { PRICE } from "../data/constants";

const included = [
  "4 PDF-меню: 1250, 1400, 1600 и 1900 ккал",
  "Списки покупок на каждую неделю",
  "План воскресных заготовок",
  "Таблица замен продуктов",
  "Подарок: «Памятки и трекеры» (8 страниц)",
];

export default function Pricing() {
  return (
    <section id="price" className="relative overflow-hidden py-16 sm:py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[32rem] -translate-x-1/2 rounded-full bg-peach/60 blur-3xl"
        aria-hidden="true"
      />
      <Container>
        <Reveal className="relative mx-auto max-w-xl rounded-[2.5rem] border border-terracotta/20 bg-white px-6 py-10 text-center shadow-[0_40px_80px_-32px_rgba(47,79,65,0.3)] sm:px-14 sm:py-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage">
            Неделя без вопроса «Что приготовить?»
          </span>

          <p className="mt-6 font-serif text-6xl text-ink sm:text-7xl">{PRICE}</p>
          <p className="mt-3 text-sm text-ink/55 sm:text-base">
            Единоразовая покупка. Все четыре уровня и подарок — сразу.
          </p>

          <div className="mx-auto mt-9 max-w-sm space-y-3 text-left">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-[15px] text-ink/80">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/15 text-xs text-sage">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <CTAButton className="w-full sm:w-auto">Купить меню</CTAButton>
          </div>

          <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-ink/50">
            Доступ сразу после оплаты. Ссылка на закрытый Telegram-канал придёт после покупки.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
