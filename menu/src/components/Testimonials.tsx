import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { testimonials } from "../data/testimonials";

// Компонент не подключён в src/pages/Landing.tsx — блок отзывов скрыт до
// появления настоящих отзывов. Заполните src/data/testimonials.ts и
// раскомментируйте <Testimonials /> в Landing.tsx, чтобы включить блок.
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading title="Отзывы" align="center" className="mb-10 sm:mb-14" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-ink/10 bg-white p-6">
                <p className="text-[15px] leading-relaxed text-ink/80">{item.text}</p>
                <p className="mt-4 text-sm font-semibold text-ink/60">{item.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
