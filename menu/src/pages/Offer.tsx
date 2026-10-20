import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import {
  PRICE,
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

export default function Offer() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Публичная оферта | " + PRODUCT_NAME;
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
            Публичная оферта на продажу цифрового контента
          </h1>
          <p className="mt-4 text-sm text-ink/50">
            Действует с момента размещения на сайте до момента отзыва или изменения.
          </p>

          <div className="mt-12 space-y-12">
            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">1. Общие положения</h2>
              <p>
                {SELLER_NAME}, {SELLER_STATUS.toLowerCase()}, {SELLER_CITY}, ИНН {SELLER_INN}{" "}
                (далее — «Продавец»), предлагает любому дееспособному физическому лицу (далее —
                «Покупатель») заключить договор на условиях, изложенных в настоящей публичной
                оферте (далее — «Оферта»).
              </p>
              <p>
                Оплата стоимости продукта означает полное и безоговорочное согласие Покупателя с
                условиями Оферты (акцепт).
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">2. Предмет оферты</h2>
              <p>
                Продавец предоставляет Покупателю доступ к цифровым материалам «{PRODUCT_NAME}»:
                четыре PDF-файла с меню на 4 недели на выбор по калорийности (1250, 1400, 1600 и
                1900 ккал) и дополнительный файл «Памятки и трекеры» (далее — «Материалы»).
              </p>
              <p>Материалы предоставляются в электронном виде через закрытый Telegram-канал.</p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">3. Стоимость и порядок оплаты</h2>
              <p>Стоимость доступа ко всем Материалам — {PRICE}.</p>
              <p>
                Оплата производится через сервис приёма платежей Tribute по ссылке, указанной на
                сайте (
                <a
                  href={TRIBUTE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sage hover:text-sage-dark"
                >
                  web.tribute.tg
                </a>
                ).
              </p>
              <p>
                Обязательства Покупателя по оплате считаются исполненными с момента поступления
                денежных средств Продавцу.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">4. Порядок предоставления доступа</h2>
              <p>
                После поступления оплаты Покупатель получает ссылку на закрытый Telegram-канал, в
                котором размещены все Материалы. Доступ предоставляется сразу после оплаты.
              </p>
              <p>
                Если ссылка не была получена в течение 24 часов, необходимо обратиться к Продавцу
                по контактам, указанным в разделе 9.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">5. Права и обязанности сторон</h2>
              <p>
                Продавец обязуется предоставить Покупателю доступ к Материалам, соответствующим
                описанию на сайте.
              </p>
              <p>
                Покупатель обязуется оплатить стоимость Материалов в полном объёме и использовать
                их исключительно для личных целей. Материалы не подлежат распространению,
                перепродаже, публикации в открытом доступе или передаче третьим лицам.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">
                6. Характер материалов и ограничение ответственности
              </h2>
              <p>
                Материалы носят информационный характер, представляют собой примеры меню питания
                и не являются медицинской рекомендацией, диетой или программой лечения. Значения
                КБЖУ рассчитаны по справочным таблицам продуктов и являются приблизительными.
              </p>
              <p>
                При наличии заболеваний, требующих особой диеты, а также при беременности и
                кормлении грудью Покупателю рекомендуется проконсультироваться с врачом перед
                использованием Материалов.
              </p>
              <p>
                Продавец не несёт ответственности за индивидуальную реакцию организма Покупателя и
                результаты использования Материалов.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">7. Возврат денежных средств</h2>
              <p>
                Материалы являются цифровым контентом с мгновенным предоставлением доступа.
                В соответствии с этим, а также с пп. 4 п. 1 ст. 26.1 Закона РФ «О защите прав
                потребителей», возврат денежных средств после предоставления доступа к Материалам
                не производится.
              </p>
              <p>
                Исключение — случаи, когда доступ к Материалам не был предоставлен по вине
                Продавца и не может быть предоставлен в течение 7 календарных дней с момента
                оплаты, а также случаи технической ошибки двойного списания за один и тот же
                заказ. В этих случаях Покупатель вправе получить возврат полной уплаченной суммы.
              </p>
              <p>
                Для оформления возврата обратитесь к Продавцу по контактам, указанным в разделе 9,
                указав дату оплаты и причину обращения.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">8. Срок действия и изменение оферты</h2>
              <p>
                Оферта действует бессрочно с момента размещения на сайте до момента её отзыва
                Продавцом.
              </p>
              <p>
                Продавец вправе вносить изменения в условия Оферты в одностороннем порядке —
                актуальная версия всегда доступна на этой странице.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl text-ink sm:text-2xl">9. Реквизиты и контакты Продавца</h2>
              <p>{SELLER_NAME}</p>
              <p>Статус: {SELLER_STATUS}</p>
              <p>Место деятельности: {SELLER_CITY}</p>
              <p>ИНН: {SELLER_INN}</p>
              <p>
                Контакты для связи: Telegram{" "}
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sage hover:text-sage-dark"
                >
                  {TELEGRAM_HANDLE}
                </a>
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
