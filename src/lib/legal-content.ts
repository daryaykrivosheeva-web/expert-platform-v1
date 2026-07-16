import type { SiteConfig, LegalConfig } from "@/types/config";

/**
 * Auto-generates the site's legal documents (Privacy Policy, Consent,
 * Terms, Cookies, Requisites) from a client's own SiteConfig — the same
 * "one config, many clients" model as the rest of the template.
 *
 * These are standard-form templates for an individual online-consultation
 * practice in Russia. They are a starting point, not legal advice — a
 * client should have their own lawyer review and adjust the generated
 * text before relying on it, especially the entity details in `legal`.
 */

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDocument {
  title: string;
  updatedAtLabel: string;
  sections: LegalSection[];
}

const RU_MONTHS = [
  "января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря",
];

function formatRuDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return iso;
  return `${day} ${RU_MONTHS[month - 1]} ${year} г.`;
}

function entityIdentifiers(legal: LegalConfig): string {
  const parts = [`ИНН ${legal.inn}`];
  if (legal.ogrn) {
    parts.push(legal.entityType === "llc" ? `ОГРН ${legal.ogrn}` : `ОГРНИП ${legal.ogrn}`);
  }
  return parts.join(", ");
}

function entityFullName(legal: LegalConfig): string {
  return `${legal.entityLabel} ${legal.entityName} (${entityIdentifiers(legal)})`;
}

function updatedAtLabel(legal: LegalConfig): string {
  return `Действует с ${formatRuDate(legal.effectiveDate)}`;
}

export function getPrivacyPolicyContent({ legal, contacts, seo }: SiteConfig): LegalDocument {
  const entity = entityFullName(legal);
  return {
    title: "Политика конфиденциальности",
    updatedAtLabel: updatedAtLabel(legal),
    sections: [
      {
        heading: "1. Общие положения",
        paragraphs: [
          `Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки персональных данных пользователей сайта ${seo.siteUrl} (далее — «Сайт») со стороны ${entity} (далее — «Оператор»).`,
          "Используя Сайт и оставляя свои данные через формы связи, пользователь подтверждает согласие с условиями настоящей Политики.",
        ],
      },
      {
        heading: "2. Какие данные обрабатываются",
        paragraphs: [
          "Оператор обрабатывает персональные данные, которые пользователь предоставляет самостоятельно: имя, контактный телефон, адрес электронной почты, никнейм в Telegram/WhatsApp, а также иные сведения, добровольно указанные в сообщении при обращении.",
          "Сайт не запрашивает специальные категории персональных данных и не осуществляет автоматическую обработку данных без участия пользователя.",
        ],
      },
      {
        heading: "3. Цели обработки персональных данных",
        paragraphs: [
          "Персональные данные обрабатываются исключительно в целях: связи с пользователем для организации консультации; предоставления информации об услугах и стоимости; исполнения обязательств по оказанию услуг.",
        ],
      },
      {
        heading: "4. Правовые основания обработки",
        paragraphs: [
          "Обработка персональных данных осуществляется на основании согласия пользователя, предоставляемого при заполнении форм на Сайте или при обращении в мессенджеры, указанные в разделе «Контакты».",
        ],
      },
      {
        heading: "5. Порядок обработки и защиты персональных данных",
        paragraphs: [
          "Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа, изменения, раскрытия или уничтожения.",
          "Персональные данные не передаются третьим лицам, за исключением случаев, прямо предусмотренных законодательством Российской Федерации.",
        ],
      },
      {
        heading: "6. Права субъекта персональных данных",
        paragraphs: [
          "Пользователь вправе в любой момент отозвать согласие на обработку персональных данных, а также запросить уточнение, блокирование или уничтожение своих данных, направив запрос на адрес электронной почты, указанный в разделе «Контакты».",
        ],
      },
      {
        heading: "7. Срок обработки и хранения данных",
        paragraphs: [
          "Персональные данные хранятся до достижения целей обработки либо до отзыва согласия пользователем, если иной срок не установлен законодательством.",
        ],
      },
      {
        heading: "8. Контакты",
        paragraphs: [
          `По всем вопросам, связанным с обработкой персональных данных, можно обратиться по адресу электронной почты ${contacts.email}.`,
        ],
      },
    ],
  };
}

export function getConsentContent({ legal, contacts, seo }: SiteConfig): LegalDocument {
  const entity = entityFullName(legal);
  return {
    title: "Согласие на обработку персональных данных",
    updatedAtLabel: updatedAtLabel(legal),
    sections: [
      {
        heading: "1. Предмет согласия",
        paragraphs: [
          `Отправляя сообщение через формы связи на сайте ${seo.siteUrl} или в мессенджеры (Telegram, WhatsApp), указанные в разделе «Контакты», пользователь даёт согласие ${entity} (далее — «Оператор») на обработку своих персональных данных на условиях, изложенных ниже.`,
        ],
      },
      {
        heading: "2. Перечень данных",
        paragraphs: [
          "Согласие предоставляется в отношении следующих данных: имя, контактный телефон и/или адрес электронной почты, идентификатор в мессенджере, а также иные данные, добровольно сообщённые пользователем в ходе переписки.",
        ],
      },
      {
        heading: "3. Цели обработки",
        paragraphs: [
          "Данные обрабатываются для связи с пользователем, организации и проведения консультации, информирования об услугах и стоимости.",
        ],
      },
      {
        heading: "4. Срок действия согласия",
        paragraphs: [
          "Согласие действует бессрочно и может быть отозвано пользователем в любой момент путём направления соответствующего уведомления на адрес электронной почты Оператора.",
        ],
      },
      {
        heading: "5. Контакты Оператора",
        paragraphs: [
          `Email: ${contacts.email}. Полные реквизиты Оператора приведены на странице «Реквизиты».`,
        ],
      },
    ],
  };
}

export function getTermsContent({ legal, expert, contacts, seo }: SiteConfig): LegalDocument {
  const entity = entityFullName(legal);
  return {
    title: "Пользовательское соглашение",
    updatedAtLabel: updatedAtLabel(legal),
    sections: [
      {
        heading: "1. Общие положения",
        paragraphs: [
          `Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между ${entity} (далее — «Исполнитель») и посетителем сайта ${seo.siteUrl} (далее — «Пользователь»), возникающие в связи с использованием Сайта и получением информации об услугах Исполнителя.`,
          `${legal.disclaimer} Соглашение не является договором оказания услуг — условия конкретной консультации согласовываются с Пользователем индивидуально при обращении.`,
        ],
      },
      {
        heading: "2. Предмет соглашения",
        paragraphs: [
          `Исполнитель (${expert.role.toLowerCase()}) размещает на Сайте информацию о своих услугах, стоимости и порядке записи на консультацию. Пользователь использует Сайт для ознакомления с этой информацией и связи с Исполнителем.`,
        ],
      },
      {
        heading: "3. Порядок записи и оплаты",
        paragraphs: [
          "Запись на консультацию осуществляется через контактные каналы, указанные в разделе «Контакты» (Telegram, WhatsApp, email). Стоимость и порядок оплаты услуг согласовываются индивидуально и могут отличаться от ориентировочных цен, указанных в разделе «Стоимость».",
        ],
      },
      {
        heading: "4. Права и обязанности сторон",
        paragraphs: [
          "Исполнитель обязуется оказывать консультации добросовестно и в согласованные сроки. Пользователь обязуется предоставлять достоверную информацию, необходимую для оказания услуги.",
        ],
      },
      {
        heading: "5. Ответственность",
        paragraphs: [
          "Исполнитель не несёт ответственности за решения, принятые Пользователем самостоятельно вне рамок консультаций, а также за обстоятельства непреодолимой силы, препятствующие оказанию услуги.",
        ],
      },
      {
        heading: "6. Разрешение споров",
        paragraphs: [
          "Все споры и разногласия стороны стремятся разрешить путём переговоров. При недостижении согласия спор передаётся на рассмотрение в порядке, установленном законодательством Российской Федерации.",
        ],
      },
      {
        heading: "7. Контакты",
        paragraphs: [`Email: ${contacts.email}. Реквизиты Исполнителя — на странице «Реквизиты».`],
      },
    ],
  };
}

export function getCookiesContent({ legal, seo }: SiteConfig): LegalDocument {
  return {
    title: "Политика использования Cookie",
    updatedAtLabel: updatedAtLabel(legal),
    sections: [
      {
        heading: "1. Что такое cookie",
        paragraphs: [
          `Cookie — небольшие текстовые файлы, которые сохраняются в браузере при посещении сайта ${seo.siteUrl} и используются для корректной работы сайта и анализа его посещаемости.`,
        ],
      },
      {
        heading: "2. Какие cookie используются",
        paragraphs: [
          "Сайт может использовать технические cookie, необходимые для корректной работы страниц, а также аналитические cookie для оценки посещаемости и удобства использования сайта.",
        ],
      },
      {
        heading: "3. Управление cookie",
        paragraphs: [
          "Пользователь может ограничить или отключить сохранение cookie в настройках своего браузера. Отключение cookie может повлиять на работу отдельных функций сайта.",
        ],
      },
      {
        heading: "4. Согласие на использование cookie",
        paragraphs: [
          "Продолжая использовать сайт, пользователь соглашается с использованием cookie в соответствии с настоящей политикой.",
        ],
      },
    ],
  };
}

export function getRequisitesContent({ legal, contacts, seo }: SiteConfig): LegalDocument {
  const rows: [string, string][] = [
    ["Статус", legal.entityLabel],
    ["Полное имя / наименование", legal.entityName],
    ["ИНН", legal.inn],
  ];
  if (legal.ogrn) {
    rows.push([legal.entityType === "llc" ? "ОГРН" : "ОГРНИП", legal.ogrn]);
  }
  rows.push(
    ["Адрес регистрации", legal.registrationAddress],
    ["Email", contacts.email],
    ["Телефон", contacts.phone],
    ["Сайт", seo.siteUrl],
  );

  return {
    title: "Реквизиты",
    updatedAtLabel: updatedAtLabel(legal),
    sections: [
      {
        heading: "Реквизиты специалиста",
        paragraphs: rows.map(([label, value]) => `${label}: ${value}`),
      },
      {
        heading: "Дополнительно",
        paragraphs: [legal.disclaimer],
      },
    ],
  };
}
