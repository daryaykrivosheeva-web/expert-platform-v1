import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import { TELEGRAM_HANDLE, TELEGRAM_URL, TRIBUTE_URL } from "../data/constants";

const sectionClass = "space-y-4 text-[16px] leading-relaxed text-ink/80 sm:text-lg";

export default function PrivacyPolicy() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Политика конфиденциальности | Даша Радченко";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <main className="pt-32 pb-24 sm:pt-40">
      <Container>
        <div className="mx-auto article-measure">
          <Link
            to="/"
            className="text-sm font-medium text-ink/50 transition-colors hover:text-plum"
          >
            ← Назад на сайт
          </Link>

          <h1 className="mt-6 text-[32px] leading-[1.15] text-ink sm:text-[42px]">
            Политика конфиденциальности и обработки персональных данных
          </h1>
          <p className="mt-4 text-sm text-ink/50">Действует с 1 января 2026 года</p>

          <div className="mt-12 space-y-12">
            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">1. Оператор персональных данных</h2>
              <p>
                Радченко Дарья, самозанятая (плательщик налога на профессиональный доход),
                г. Благовещенск, ИНН 282514212660 (далее — «Оператор»), является владельцем
                сайта, на котором размещена эта политика (далее — «Сайт»).
              </p>
              <p>
                По всем вопросам, связанным с обработкой персональных данных, можно обратиться к
                Оператору в Telegram:{" "}
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-plum hover:text-plum-dark"
                >
                  {TELEGRAM_HANDLE}
                </a>
                .
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">2. Что делает Сайт</h2>
              <p>
                Сайт — это статья и информация о цифровом наборе «5 инструментов для работы
                онлайн». На Сайте нет форм регистрации, форм сбора контактов и системы аккаунтов.
              </p>
              <p>
                Раздел «Проверьте себя» (чек-лист) работает только в браузере посетителя: отметки
                хранятся в оперативной памяти страницы, нигде не сохраняются и не передаются
                Оператору или третьим лицам — при обновлении или закрытии страницы они исчезают.
              </p>
              <p>
                Сайт не использует файлы cookie, счётчики или пиксели аналитики, собственные и от
                третьих лиц.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">3. Оплата набора</h2>
              <p>
                Кнопка «Забрать набор» ведёт на внешний сервис приёма платежей Tribute (
                <a
                  href={TRIBUTE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-plum hover:text-plum-dark"
                >
                  web.tribute.tg
                </a>
                ). Данные, необходимые для оплаты (например, номер карты, имя, контактные
                данные), вводятся непосредственно на стороне Tribute и обрабатываются в
                соответствии с политикой конфиденциальности этого сервиса. Оператор не получает и
                не хранит платёжные данные покупателя.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">4. Обращения в Telegram</h2>
              <p>
                Если вы пишете Оператору в Telegram ({TELEGRAM_HANDLE}) — по вопросам набора,
                личной работы или по любым другим — Оператор обрабатывает переданные вами данные
                (имя пользователя, текст сообщения и то, что вы сочли нужным сообщить) только для
                того, чтобы ответить на обращение и оказать услугу. Такая переписка происходит на
                стороне Telegram и подчиняется также политике конфиденциальности Telegram.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">5. Хостинг и технические данные</h2>
              <p>
                Сайт размещён на технической инфраструктуре хостинг-провайдера. Как и любой
                веб-сервер, инфраструктура хостинга может в стандартном порядке фиксировать
                технические данные запроса (IP-адрес, тип браузера, время обращения) в
                собственных служебных журналах — это техническая функция хостинга, а не
                самостоятельный сбор данных Оператором.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">6. Правовое основание</h2>
              <p>
                Обработка персональных данных, которая всё же происходит в рамках переписки
                (раздел 4), осуществляется в соответствии с Федеральным законом от 27.07.2006
                № 152-ФЗ «О персональных данных» — на основании вашего добровольного обращения и
                для целей ответа на него.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">7. Ваши права</h2>
              <p>
                Вы вправе запросить у Оператора информацию о том, какие данные о вас обрабатываются
                в связи с перепиской, потребовать их уточнения, блокирования или уничтожения —
                для этого достаточно написать в Telegram {TELEGRAM_HANDLE}.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">8. Изменения политики</h2>
              <p>
                Оператор может обновлять эту политику — актуальная версия всегда доступна на этой
                странице.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
