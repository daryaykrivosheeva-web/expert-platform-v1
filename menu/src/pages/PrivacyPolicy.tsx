import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import {
  PRODUCT_NAME,
  SELLER_CITY,
  SELLER_INN,
  SELLER_NAME,
  SELLER_STATUS,
  TELEGRAM_HANDLE,
  TELEGRAM_URL,
  TRIBUTE_URL,
} from "../data/constants";

const sectionClass = "space-y-4 text-[16px] leading-relaxed text-ink/80 sm:text-lg";

export default function PrivacyPolicy() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Политика конфиденциальности | " + PRODUCT_NAME;
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <main className="pt-32 pb-24 sm:pt-40">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Link to="/" className="text-sm font-medium text-ink/50 transition-colors hover:text-sage">
            ← Назад на сайт
          </Link>

          <h1 className="mt-6 text-[32px] leading-[1.15] text-ink sm:text-[42px]">
            Политика конфиденциальности и обработки персональных данных
          </h1>

          <div className="mt-12 space-y-12">
            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">1. Оператор персональных данных</h2>
              <p>
                {SELLER_NAME}, {SELLER_STATUS.toLowerCase()}, {SELLER_CITY}, ИНН {SELLER_INN}{" "}
                (далее — «Оператор»), является владельцем сайта, на котором размещена эта
                политика (далее — «Сайт»).
              </p>
              <p>
                По вопросам обработки персональных данных можно обратиться к Оператору в
                Telegram:{" "}
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sage hover:text-sage-dark"
                >
                  {TELEGRAM_HANDLE}
                </a>
                .
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">2. Что делает Сайт</h2>
              <p>
                Сайт содержит описание цифрового продукта «{PRODUCT_NAME}» и позволяет перейти к
                оплате. На Сайте нет форм регистрации, форм сбора контактов и системы аккаунтов.
              </p>
              <p>
                Раздел «Частые вопросы» (аккордеон) работает только в браузере посетителя и ничего
                не передаёт Оператору или третьим лицам.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">3. Аналитика и файлы cookie</h2>
              <p>
                Сайт может использовать Яндекс.Метрику для анализа посещаемости и определения
                источника перехода (например, Pinterest или Threads). Яндекс.Метрика может
                использовать файлы cookie и собирать обезличенные технические данные: тип
                устройства и браузера, приблизительное местоположение, страницы и время
                посещения.
              </p>
              <p>
                Файлы cookie можно отключить в настройках браузера — часть функций сайта при этом
                может работать некорректно.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">4. Оплата</h2>
              <p>
                Кнопки «Купить» ведут на внешний сервис приёма платежей Tribute (
                <a
                  href={TRIBUTE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sage hover:text-sage-dark"
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
              <h2 className="text-xl text-ink sm:text-2xl">5. Предоставление доступа к материалам</h2>
              <p>
                После оплаты покупатель получает ссылку на закрытый Telegram-канал, где размещены
                материалы. Для использования канала необходим аккаунт Telegram — на это
                распространяется также политика конфиденциальности Telegram.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">6. Обращения в Telegram</h2>
              <p>
                Если вы пишете Оператору в Telegram ({TELEGRAM_HANDLE}) — по вопросам покупки,
                доступа или возврата — Оператор обрабатывает переданные вами данные (имя
                пользователя, текст сообщения) только для того, чтобы ответить на обращение.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">7. Хостинг и технические данные</h2>
              <p>
                Как и любой веб-сервер, инфраструктура хостинга может в стандартном порядке
                фиксировать технические данные запроса (IP-адрес, тип браузера, время обращения) в
                собственных служебных журналах — это техническая функция хостинга, а не
                самостоятельный сбор данных Оператором.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">8. Правовое основание</h2>
              <p>
                Обработка персональных данных осуществляется в соответствии с Федеральным законом
                от 27.07.2006 № 152-ФЗ «О персональных данных» — на основании согласия,
                выражаемого использованием Сайта и обращением в Telegram, а также для целей
                исполнения договора (публичной оферты) при оплате.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">9. Ваши права</h2>
              <p>
                Вы вправе запросить у Оператора информацию о том, какие данные о вас
                обрабатываются в связи с перепиской, потребовать их уточнения, блокирования или
                уничтожения — для этого достаточно написать в Telegram {TELEGRAM_HANDLE}.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">10. Изменения политики</h2>
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
