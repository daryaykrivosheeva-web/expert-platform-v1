import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import CTAButton from "./ui/CTAButton";
import { PRICE } from "../data/constants";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-xl text-[28px] leading-[1.2] text-ink sm:text-[38px]">
            Неделя без вопроса «Что приготовить?»
          </h2>
          <p className="mt-4 font-serif text-4xl text-terracotta sm:text-5xl">{PRICE}</p>
          <div className="mt-8 flex justify-center">
            <CTAButton>Получить меню за 990 ₽</CTAButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
