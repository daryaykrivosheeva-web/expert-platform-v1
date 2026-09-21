import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { painItems } from "../data/pain";

export default function Pain() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading title="Знакомо?" align="center" className="mb-10 sm:mb-14" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {painItems.map((item, i) => (
            <Reveal key={item.text} delay={i * 0.05}>
              <div className="flex h-full items-start gap-4 rounded-3xl bg-white p-6 shadow-[0_16px_40px_-24px_rgba(47,79,65,0.35)]">
                <span className="text-2xl" aria-hidden="true">
                  {item.icon}
                </span>
                <p className="text-[15px] leading-relaxed text-ink/80 sm:text-base">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
