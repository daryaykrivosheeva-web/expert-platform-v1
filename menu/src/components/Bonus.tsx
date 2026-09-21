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

              <div className="relative mx-auto w-full max-w-[200px] pb-6 sm:max-w-[240px] sm:pb-10">
                <img
                  src="/images/08-podarok-trekher-vody.png"
                  alt="Страница трекера воды на 4 недели из сборника «Памятки и трекеры»"
                  className="absolute -bottom-2 -right-4 hidden w-3/5 rotate-3 rounded-xl shadow-[0_20px_44px_-18px_rgba(47,79,65,0.4)] sm:block"
                  width={1050}
                  height={1427}
                  loading="lazy"
                />
                <img
                  src="/images/07-podarok-oblozhka.png"
                  alt="Обложка сборника «Спокойная неделя: вода, аппетит и трекеры»"
                  className="relative w-full -rotate-2 rounded-xl shadow-[0_24px_50px_-20px_rgba(47,79,65,0.4)]"
                  width={1050}
                  height={1427}
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
