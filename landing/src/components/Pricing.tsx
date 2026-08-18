import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import CTAButton from "./ui/CTAButton";
import { PRICE } from "../data/constants";

const included = [
  { icon: "🌐", label: "Сайт-визитка" },
  { icon: "🎯", label: "Квиз" },
  { icon: "📋", label: "CRM" },
  { icon: "📱", label: "Контент" },
  { icon: "📑", label: "Гайды и презентации" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-lavender/60 blur-3xl"
        aria-hidden="true"
      />
      <Container>
        <Reveal className="relative mx-auto max-w-xl rounded-[2.5rem] border border-gold/25 bg-white px-8 py-12 text-center shadow-[0_40px_80px_-32px_rgba(37,33,39,0.25)] sm:px-14 sm:py-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-plum/70">
            Набор
          </span>
          <h2 className="mt-4 text-[28px] leading-tight text-ink sm:text-[34px]">
            5 инструментов для работы онлайн
          </h2>

          <p className="mt-8 font-serif text-6xl text-ink sm:text-7xl">{PRICE}</p>
          <p className="mt-3 text-sm text-ink/55 sm:text-base">
            Единоразовая покупка. Доступ остаётся у вас.
          </p>

          <div className="mx-auto mt-9 grid max-w-sm grid-cols-1 gap-3 text-left sm:grid-cols-2">
            {included.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 text-[15px] text-ink/80">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lavender text-plum">
                  ✓
                </span>
                {item.icon} {item.label}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-xs space-y-1.5 text-sm leading-relaxed text-ink/50">
            <p>Не подписка. Не ежемесячный платёж. Не курс на три месяца.</p>
            <p>Просто набор инструментов, который можно использовать в своей работе.</p>
          </div>

          <div className="mt-10">
            <CTAButton className="w-full sm:w-auto">Забрать набор</CTAButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
