import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

export default function ProductIntro() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-base text-ink/55 sm:text-lg">
            И именно здесь я решила сделать то, чего мне самой не хватало.
          </p>
          <h2 className="mt-5 text-[30px] leading-[1.2] text-ink sm:text-[40px]">
            Я собрала готовый набор для тех, кто хочет сделать это самостоятельно
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-xl">
          <div className="space-y-4 text-[17px] leading-relaxed text-ink/80 sm:text-lg">
            <p className="font-medium text-ink">Я Даша Радченко.</p>
            <p>
              Я помогаю людям, которые работают на себя, выходить в онлайн и выстраивать вокруг
              своей деятельности простую цифровую систему.
            </p>
            <p>И я собрала 5 инструментов, которые закрывают основные задачи из этой статьи.</p>
            <p className="text-ink/55">
              Не курс на несколько месяцев. Не теория. Не 50 уроков, которые нужно сначала
              посмотреть.
            </p>
            <p className="font-medium text-ink">
              Готовые инструменты + инструкции, чтобы взять и настроить под себя.
            </p>
            <p className="pt-2 font-serif text-xl italic text-plum">Вот что внутри.</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
