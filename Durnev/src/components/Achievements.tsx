import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import PhotoFrame from "./ui/PhotoFrame";
import Reveal from "./ui/Reveal";
import { useCountUp } from "../hooks/useCountUp";
import { ACHIEVEMENT_STATS } from "../data/profile";
import { IMAGES } from "../data/images";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div>
      <p className="font-display text-4xl text-gold sm:text-5xl">
        <span ref={ref}>{current.toLocaleString("ru-RU")}</span>
        {suffix}
      </p>
      <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-on-dark-muted">{label}</p>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="bg-charcoal py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Достижения" title="Цифры, которые говорят сами за себя" tone="dark" />

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {ACHIEVEMENT_STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <PhotoFrame image={IMAGES.medals} frame="portrait" />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <p className="text-balance text-lg leading-relaxed text-on-dark-muted sm:text-xl">
              Медали и грамоты по волейболу сидя, жиму лёжа и восхождению на Эльбрус — фестивали адаптивного спорта
              «Инваамур» и городские турниры Благовещенска. Спорт — не декорация, а часть повседневной жизни.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
