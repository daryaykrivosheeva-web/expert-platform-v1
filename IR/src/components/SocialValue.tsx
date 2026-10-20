import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { SOCIAL_VALUE } from "../data/profile";

export default function SocialValue() {
  return (
    <section id="social" className="bg-paper-alt py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Общественная деятельность" title={SOCIAL_VALUE.title} subtitle={SOCIAL_VALUE.intro} />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {SOCIAL_VALUE.items.map((item, i) => (
            <Reveal key={item} delay={Math.min(i * 0.05, 0.2)}>
              <li className="flex gap-4 border-t border-border pt-5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
                <span className="leading-relaxed text-stone">{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.15} className="mt-10 text-sm text-stone-muted">
          <p>{SOCIAL_VALUE.personal}</p>
        </Reveal>
      </Container>
    </section>
  );
}
