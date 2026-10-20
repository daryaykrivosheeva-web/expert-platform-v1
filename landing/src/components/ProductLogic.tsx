import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { clientPath } from "../data/journey";

export default function ProductLogic() {
  return (
    <section className="bg-lavender/40 py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[30px] leading-[1.2] text-ink sm:text-[40px]">
            Получается не пять разрозненных шаблонов
          </h2>
          <div className="mx-auto mt-6 max-w-xl space-y-3 text-[17px] leading-relaxed text-ink/75 sm:text-lg">
            <p>И вот это, пожалуй, самое важное.</p>
            <p>
              Я не собирала эти инструменты просто потому, что «сейчас всем нужны AI и Notion».
            </p>
            <p className="font-medium text-ink">
              Они закрывают пять разных задач одного пути клиента:
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-4 sm:mt-16">
          {clientPath.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span
                className={`rounded-full px-4 py-2.5 text-sm font-medium sm:text-[15px] ${
                  i === clientPath.length - 1
                    ? "bg-gold text-white"
                    : "border border-plum/20 bg-white text-ink/80"
                }`}
              >
                {step}
              </span>
              {i < clientPath.length - 1 && (
                <span className="text-plum/40" aria-hidden="true">
                  →
                </span>
              )}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mt-14 text-center sm:mt-16">
          <p className="font-quote text-2xl italic text-plum sm:text-[28px]">
            Именно поэтому я объединила инструменты в один набор.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
