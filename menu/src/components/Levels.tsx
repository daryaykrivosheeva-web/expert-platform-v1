import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { levels } from "../data/levels";

export default function Levels() {
  return (
    <section id="levels" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="4 уровня"
          title="Выберите свой уровень"
          subtitle="В покупку входят все четыре меню — переключайтесь между ними в любую неделю."
          align="center"
          className="mb-10 sm:mb-14"
        />

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {levels.map((level, i) => (
            <Reveal key={level.kcal} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-5 text-center sm:p-6">
                <span className="font-serif text-3xl text-ink sm:text-4xl">{level.kcal}</span>
                <span className="mt-0.5 text-xs text-ink/50">ккал</span>
                <span className="mt-3 text-sm font-semibold text-sage sm:text-base">
                  {level.label}
                </span>
                <p className="mt-2 text-[13px] leading-relaxed text-ink/65 sm:text-sm">
                  {level.text}
                </p>
                {level.note && (
                  <p className="mt-3 border-t border-ink/10 pt-3 text-[12px] leading-relaxed text-terracotta/90">
                    {level.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
