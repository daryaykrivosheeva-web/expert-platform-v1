import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { bonusList } from "../data/bonus";

export default function Bonus() {
  return (
    <section className="py-4 sm:py-8">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-peach">
            <div className="grid grid-cols-1 gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-14">
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-dark">
                  Подарок
                </span>
                <h2 className="mt-4 text-[26px] leading-[1.2] text-ink sm:text-[34px]">
                  Бонус: памятки и трекеры
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/70 sm:text-lg">
                  Сборник на 8 страниц — идёт в подарок к любому уровню меню.
                </p>

                <ul className="mx-auto mt-6 max-w-sm space-y-2.5 text-left lg:mx-0">
                  {bonusList.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink/80 sm:text-[15px]">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/70 text-xs text-terracotta-dark">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mx-auto w-full max-w-[220px] sm:max-w-[260px]">
                <img
                  src="/images/preview-bonus.png"
                  alt="Заглушка: страница сборника «Памятки и трекеры» — замените на реальный скриншот"
                  className="w-full rounded-2xl shadow-[0_24px_50px_-20px_rgba(47,79,65,0.4)]"
                  width={400}
                  height={520}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
