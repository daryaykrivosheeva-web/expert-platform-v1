import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

const baseP = "text-[17px] sm:text-lg leading-[1.7] text-ink/80";

export default function IntroSection() {
  return (
    <section id="intro" className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto article-measure">
          <Reveal>
            <div className="space-y-5">
              <p className={baseP}>Вы умеете делать свою работу.</p>
              <p className={baseP}>
                Но чтобы сегодня вас находили в интернете, почему-то приходится ещё уметь делать
                сайт, писать тексты, придумывать контент, собирать заявки, вести CRM, делать
                презентации и разбираться в нейросетях.
              </p>
              <p className={baseP}>И в какой-то момент возникает ощущение:</p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="my-10 font-quote text-2xl italic leading-snug text-plum sm:text-3xl">
              «Я вообще когда-нибудь просто буду заниматься своей работой?»
            </p>
          </Reveal>

          <Reveal>
            <div className="space-y-5">
              <p className={baseP}>Я знаю это чувство.</p>
              <p className={baseP}>
                Можно открыть очередной курс «Как продвигаться в интернете в 2026 году», начать
                изучать воронки, контент, рекламу, личный бренд…
              </p>
              <p className={baseP}>
                А потом закрыть его через несколько дней, потому что у вас уже есть основная
                работа, клиенты, семья и ещё сто дел.
              </p>
              <p className={baseP}>И дело не в том, что вам не хватает знаний.</p>
              <p className={`${baseP} font-medium text-ink`}>
                Вам не обязательно становиться маркетологом, дизайнером и техническим специалистом
                одновременно.
              </p>
              <p className={baseP}>Вам нужна простая база, которая позволяет:</p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <ul className="my-8 space-y-3 border-l-2 border-lavender pl-6">
              {[
                "представить себя в интернете",
                "показать, чем вы занимаетесь",
                "собрать потенциального клиента",
                "не потерять его",
                "регулярно напоминать о себе",
                "показать свою компетентность",
              ].map((item) => (
                <li key={item} className="text-[17px] sm:text-lg leading-relaxed text-ink/80">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="space-y-5">
              <p className={baseP}>Именно поэтому я собрала эту статью.</p>
              <p className={baseP}>Не про то, что ещё вам нужно изучить.</p>
              <p className={`${baseP} font-medium text-ink`}>А про то, что у вас должно быть готово.</p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="mt-16 mb-6 text-2xl text-ink sm:text-[28px]">
              Сначала — простая проверка
            </h3>
          </Reveal>

          <Reveal>
            <div className="space-y-5">
              <p className={baseP}>Представьте человека, которому порекомендовали вас.</p>
              <p className={baseP}>Он открывает телефон и хочет понять:</p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="my-8 rounded-3xl bg-lavender/50 px-7 py-8 sm:px-9">
              <ul className="space-y-2.5">
                {["Кто вы?", "Что вы делаете?", "Подойдёте ли вы ему?", "Сколько это стоит?", "Как с вами связаться?"].map(
                  (q) => (
                    <li
                      key={q}
                      className="font-serif text-xl italic leading-snug text-plum sm:text-2xl"
                    >
                      {q}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-5">
              <p className={baseP}>
                Теперь представьте, что он не готов сразу писать вам в личные сообщения.
              </p>
              <p className={baseP}>Он хочет сначала посмотреть информацию самостоятельно.</p>
              <p className={baseP}>И вот здесь начинается самое интересное.</p>
              <p className={`${baseP} font-medium text-ink`}>
                Если у вас нет нескольких простых точек, человек может просто исчезнуть.
              </p>
              <p className={baseP}>Не потому что вы плохой специалист.</p>
              <p className={baseP}>Не потому что у конкурента лучше услуга.</p>
              <p className={baseP}>А потому что конкурента было проще найти и понять.</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
