import type { SiteConfig } from "@/types/config";

/**
 * Commercial niche adaptation: lawyer (personal legal practice).
 *
 * Built entirely through configuration and content — no component
 * architecture was touched. Demonstrates two universal, backward-compatible
 * additions made to the shared template while building this adaptation:
 *
 * 1. An optional "why trust me" section (`whyTrust`) — a small grid of
 *    trust factors. Any future niche can opt in by adding this field;
 *    niches that omit it (all four existing configs) are unaffected.
 * 2. Services and Testimonials are now optional per niche — set
 *    `services.items` / `testimonials.items` to `[]` to omit the section
 *    entirely (used here: this niche shows services as plain cards via
 *    `helpWith` instead of a priced grid, and has no collected reviews yet).
 *
 * Palette: minimalist, restrained — white / graphite / deep navy, inspired
 * by Apple, Stripe, Linear, Notion, Framer. No literal legal iconography
 * (scales, gavels) — abstract trust/quality icons only.
 *
 * This is a portfolio/demo build (no real client behind it) — the name,
 * contacts, prices, and legal entity details are illustrative, not a real
 * person's data. Photos are real (studio-provided) portraits used with
 * permission for this portfolio piece.
 */
const lawyerConfig: SiteConfig = {
  brand: {
    logoText: "Дмитрий Соколов",
    colors: {
      primary: "#1E3A8A",
      primaryDark: "#14245C",
      secondary: "#374151",
      accent: "#2F4F8F",
      background: "#FFFFFF",
      surface: "#F7F8FA",
      text: "#1A1D23",
      muted: "#667085",
      border: "#E4E7EC",
    },
    fonts: {
      heading: "sora",
      body: "inter",
    },
  },

  expert: {
    name: "Дмитрий Соколов",
    role: "Юрист",
    niche: "law",
    tagline: "Беру ваш вопрос под личный контроль — от первой встречи до результата",
    bio: [
      "Больше 15 лет веду частную практику: договоры, споры, защита бизнеса.",
      "Не даю громких обещаний — трезво оцениваю ситуацию и говорю, как есть.",
      "Веду дело лично, от первого разговора до последней подписи — без передачи младшим юристам.",
    ],
    photo: "/images/lawyer-hero.jpg",
    credentials: [
      "15+ лет практики в гражданском и коммерческом праве",
      "300+ успешно закрытых дел и сделок",
      "Опыт представительства в арбитражных судах",
      "Работаю лично, без делегирования младшим специалистам",
    ],
    experienceYears: 15,
    clientsHelped: "300+",
  },

  nav: [
    { label: "Обо мне", href: "#about" },
    { label: "Чем помогу", href: "#help-with" },
    { label: "Почему я", href: "#why-trust" },
    { label: "Как проходит работа", href: "#process" },
    { label: "Вопросы", href: "#faq" },
    { label: "Связаться", href: "#contacts" },
  ],

  hero: {
    eyebrow: "Личная юридическая практика",
    headline: "Вы приходите с проблемой — я",
    highlight: "беру её под контроль",
    subheadline:
      "Договоры, споры, защита бизнеса и личных интересов. Работаю лично, спокойно и по существу — без лишних обещаний.",
    ctaPrimaryText: "Получить консультацию",
    ctaSecondaryText: "Связаться",
    ctaSecondaryHref: "#contacts",
    image: "/images/lawyer-hero.jpg",
    stats: [
      { value: "15 лет", label: "практики" },
      { value: "300+", label: "дел и сделок" },
      { value: "Лично", label: "веду каждое дело" },
    ],
  },

  about: {
    heading: "Обо мне",
    subheading: "Как я работаю и почему мне доверяют",
    paragraphs: [
      "Я начал заниматься юридической практикой больше 15 лет назад — и с тех пор веду дела лично, от первого разговора до итогового результата.",
      "За это время прошёл через сотни ситуаций: от простых договоров до сложных арбитражных споров. Это опыт, который помогает быстро видеть суть дела и не терять время на лишнее.",
      "Я не обещаю то, что не могу гарантировать. Моя задача — трезво оценить ситуацию, предложить рабочий путь решения и пройти его вместе с вами.",
    ],
    photo: "/images/lawyer-about.jpg",
    highlights: [
      { icon: "Briefcase", text: "15+ лет практики" },
      { icon: "Award", text: "300+ дел и сделок" },
      { icon: "ShieldCheck", text: "Полная конфиденциальность" },
      { icon: "Target", text: "Личное ведение каждого дела" },
    ],
  },

  helpWith: {
    heading: "Чем могу помочь",
    subheading: "Основные направления, с которыми обращаются клиенты",
    items: [
      {
        icon: "Briefcase",
        title: "Подготовка договоров",
        description: "Составляю и проверяю договоры так, чтобы в них не было слабых мест, которые всплывут в самый неподходящий момент.",
      },
      {
        icon: "MessageCircle",
        title: "Юридические консультации",
        description: "Разбираем вашу ситуацию и находим понятный, реалистичный путь решения — без юридического жаргона.",
      },
      {
        icon: "ShieldCheck",
        title: "Арбитражные споры",
        description: "Сопровождаю споры между компаниями и предпринимателями — от досудебной претензии до решения суда.",
      },
      {
        icon: "Users",
        title: "Представительство в суде",
        description: "Представляю ваши интересы в суде лично, беру на себя всю подготовку и защиту позиции.",
      },
      {
        icon: "Target",
        title: "Защита бизнеса",
        description: "Помогаю снизить юридические риски бизнеса и подготовиться к возможным спорам заранее.",
      },
      {
        icon: "CheckCircle2",
        title: "Регистрация ИП и ООО",
        description: "Беру на себя весь процесс регистрации — от документов до итоговых печатей и реквизитов.",
      },
      {
        icon: "Compass",
        title: "Сопровождение сделок",
        description: "Веду сделку от переговоров до подписания — проверяю условия и слежу, чтобы интересы клиента были защищены.",
      },
      {
        icon: "Award",
        title: "Проверка документов",
        description: "Проверяю документы перед подписанием, чтобы вы точно понимали, на что соглашаетесь.",
      },
    ],
  },

  services: {
    heading: "Стоимость",
    subheading: "",
    items: [],
  },

  whyTrust: {
    heading: "Почему мне доверяют",
    subheading: "Четыре причины, по которым клиенты возвращаются и рекомендуют дальше",
    items: [
      {
        icon: "ShieldCheck",
        title: "Конфиденциальность",
        description: "Всё, что вы рассказываете, остаётся между нами — это профессиональная и юридическая обязанность, а не просто обещание.",
      },
      {
        icon: "Award",
        title: "15 лет практики",
        description: "За плечами сотни дел и сделок — большинство ситуаций я уже видел и знаю, как в них действовать.",
      },
      {
        icon: "Target",
        title: "Индивидуальный подход",
        description: "Не использую шаблонные решения — разбираю именно вашу ситуацию и предлагаю то, что действительно работает в вашем случае.",
      },
      {
        icon: "CheckCircle2",
        title: "Понятные условия",
        description: "Стоимость и сроки обсуждаем на старте. Никаких доплат и сюрпризов по ходу работы.",
      },
    ],
  },

  process: {
    heading: "Как проходит работа",
    subheading: "Четыре простых шага от обращения до результата",
    steps: [
      {
        title: "Обращение",
        description: "Вы пишете в Telegram, WhatsApp или на почту — коротко описываете ситуацию.",
      },
      {
        title: "Консультация",
        description: "Разбираем детали, я оцениваю перспективы и предлагаю варианты решения.",
      },
      {
        title: "Работа по делу",
        description: "Готовлю документы, веду переговоры или представляю ваши интересы в суде.",
      },
      {
        title: "Результат",
        description: "Вы получаете решённый вопрос и понятные следующие шаги, если они нужны.",
      },
    ],
  },

  testimonials: {
    heading: "Отзывы",
    subheading: "",
    items: [],
  },

  faq: {
    heading: "Частые вопросы",
    subheading: "Если не нашли ответ — напишите напрямую в Telegram или WhatsApp",
    items: [
      {
        question: "Как быстро можно получить консультацию?",
        answer: "Обычно я отвечаю в течение рабочего дня и могу назначить встречу или созвон в ближайшие 1–2 дня.",
      },
      {
        question: "Работаете ли вы удалённо?",
        answer: "Да, консультации и часть работы по документам провожу дистанционно — по видеосвязи и через мессенджеры. Очные встречи и представительство в суде — по необходимости.",
      },
      {
        question: "Сколько будет стоить моё дело?",
        answer: "Стоимость зависит от сложности и объёма работы. Я называю её после консультации, когда понимаю ситуацию — без скрытых доплат в процессе.",
      },
      {
        question: "Соблюдается ли конфиденциальность?",
        answer: "Да, это не только этическое, но и профессиональное обязательство. Детали дела не передаются третьим лицам.",
      },
      {
        question: "Что если моя ситуация нестандартная?",
        answer: "Как раз с такими чаще всего и обращаются. На консультации разберём детали, и я скажу честно, есть ли рабочее решение.",
      },
    ],
  },

  finalCta: {
    heading: "Готовы обсудить вашу ситуацию?",
    subheading: "Расскажите, что случилось — и я скажу, как действовать дальше.",
    ctaText: "Получить консультацию",
    secondaryText: "Отвечаю лично, обычно в течение дня",
  },

  contacts: {
    heading: "Связаться",
    subheading: "Опишите ситуацию — отвечу лично",
    email: "info@dmitrysokolov-law.ru",
    phone: "+7 (999) 123-45-67",
    city: "Москва (очно и онлайн)",
    telegram: "https://t.me/dmitrysokolov_law",
    whatsapp: "https://wa.me/79991234567",
    workingHours: "Пн–Пт, 10:00–19:00 (МСК)",
    consentLabel: "Я согласен(а) на обработку персональных данных в соответствии с Политикой конфиденциальности",
  },

  footer: {
    description: "Личная юридическая практика. Договоры, споры, защита бизнеса — лично и по существу.",
    links: [
      { label: "Обо мне", href: "#about" },
      { label: "Чем помогу", href: "#help-with" },
      { label: "Вопросы", href: "#faq" },
      { label: "Связаться", href: "#contacts" },
    ],
    legalName: "Дмитрий Соколов",
  },

  seo: {
    title: "Дмитрий Соколов — юрист | Договоры, споры, защита бизнеса",
    description:
      "Личная юридическая практика: подготовка договоров, арбитражные споры, представительство в суде, защита бизнеса. 15 лет опыта, работаю лично.",
    keywords: [
      "юрист",
      "юридическая консультация",
      "арбитражные споры",
      "защита бизнеса",
      "подготовка договоров",
      "регистрация ООО",
    ],
    siteUrl: "https://dmitrysokolov.legal",
    ogImage: "/images/og-cover.jpg",
    locale: "ru_RU",
    themeColor: "#1E3A8A",
  },

  legal: {
    entityType: "ip",
    entityLabel: "ИП",
    entityName: "Соколов Дмитрий Игоревич",
    inn: "770512345679",
    registrationAddress: "г. Москва",
    effectiveDate: "2026-07-24",
    disclaimer: "Информация на сайте носит информационный характер и не является публичной офертой.",
  },
};

export default lawyerConfig;
