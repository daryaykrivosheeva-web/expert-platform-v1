import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { solutionCards } from "../data/solution";

export default function Solution() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Решение"
          title="Всё уже посчитано и разложено по дням"
          subtitle="Вам остаётся выбрать уровень калорийности, распечатать список и готовить по готовому плану."
          align="center"
          className="mb-10 sm:mb-14"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {solutionCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-ink/10 bg-white p-7 text-center sm:text-left">
                <span className="text-3xl" aria-hidden="true">
                  {card.icon}
                </span>
                <h3 className="mt-4 text-xl text-ink">{card.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70 sm:text-base">
                  {card.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
