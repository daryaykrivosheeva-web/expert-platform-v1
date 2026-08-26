import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { FAQ_ITEMS } from "../data/profile";

export default function FAQ() {
  return (
    <section id="faq" className="bg-paper-alt py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Вопросы и ответы" title="Часто спрашивают" />

        <div className="mt-12 divide-y divide-border border-t border-b border-border">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.question} delay={0.04 * i} className="py-7">
              <h3 className="text-lg uppercase leading-snug text-ink sm:text-xl">{item.question}</h3>
              <p className="mt-3 max-w-3xl text-balance text-base leading-relaxed text-stone sm:text-lg">{item.answer}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
