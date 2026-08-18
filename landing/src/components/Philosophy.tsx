import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

export default function Philosophy() {
  return (
    <section className="bg-plum-dark py-20 text-white sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              И вот что важно
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Вам не нужно сначала изучать маркетинг, чтобы всё это создать.
              <br />
              Наоборот.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-6 text-[38px] leading-[1.1] text-white sm:text-[52px]">
              Сначала соберите базу.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
              А потом уже решайте, нужны ли вам: реклама, сложные воронки, автоворонки, десятки
              соцсетей, таргет, продвинутая аналитика и всё остальное.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-10 max-w-xl border-t border-white/15 pt-8 font-quote text-2xl italic leading-snug text-gold sm:text-[28px]">
              Потому что бессмысленно лить больше трафика туда, где пока нечему этот трафик
              принимать.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
