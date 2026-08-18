import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

const negations = [
  "Вам не нужно становиться маркетологом.",
  "Не нужно знать всё про алгоритмы.",
  "Не нужно уметь создавать сайты с нуля.",
  "Не нужно осваивать десять сервисов.",
  "Не нужно ждать момента, когда вы «наконец-то разберётесь в продвижении».",
];

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-xl text-center">
          <div className="space-y-2">
            {negations.map((line) => (
              <p key={line} className="text-base leading-relaxed text-ink/55 sm:text-lg">
                {line}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-2xl text-center sm:mt-14">
          <h2 className="text-[30px] leading-[1.25] text-ink sm:text-[42px]">
            Вам нужно начать с того, чтобы вас было легко найти, понять и выбрать.
          </h2>
          <p className="mt-6 text-base text-ink/55 sm:text-lg">
            А остальное можно достраивать постепенно.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mx-auto mt-14 max-w-md text-center sm:mt-16">
          <div className="space-y-2 font-serif text-2xl italic text-plum sm:text-3xl">
            <p>Сначала — система.</p>
            <p>Потом — трафик.</p>
            <p>Потом — масштабирование.</p>
          </div>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">
            А не наоборот
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mx-auto mt-20 flex max-w-md flex-col items-center text-center sm:mt-24">
          <img
            src="/images/footer-portrait.jpg"
            alt="Даша Радченко"
            className="h-20 w-20 rounded-full object-cover shadow-[0_12px_30px_-10px_rgba(37,33,39,0.35)] sm:h-24 sm:w-24"
          />
          <p className="mt-5 font-serif text-xl text-ink sm:text-2xl">Даша Радченко</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/60 sm:text-base">
            Помогаю тем, кто работает на себя, использовать интернет как рабочий инструмент — без
            необходимости становиться маркетологом.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
