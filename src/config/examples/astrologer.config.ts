import type { SiteConfig } from "@/types/config";

/**
 * Example niche variant: astrologer.
 * Copy this file's contents into src/config/site.config.ts to switch the
 * whole template — no component code changes required.
 */
const astrologerConfig: SiteConfig = {
  brand: {
    logoText: "Sofia Luna",
    colors: {
      primary: "#7C3AED",
      primaryDark: "#5B21B6",
      secondary: "#DB2777",
      accent: "#F59E0B",
      background: "#FFFFFF",
      surface: "#FAF8FF",
      text: "#241B3A",
      muted: "#6B6483",
      border: "#E7E1F5",
    },
    fonts: { heading: "playfair", body: "manrope" },
  },
  expert: {
    name: "Sofia Luna",
    role: "Практикующий астролог",
    niche: "astrology",
    tagline: "Помогаю увидеть свой путь через натальную карту и прогнозы",
    bio: [
      "Работаю с натальной астрологией, прогнозами и синастрией больше 8 лет.",
      "Соединяю классические техники с практическими рекомендациями для жизни.",
      "Помогаю принимать решения с опорой на понимание своих циклов и потенциала.",
    ],
    photo: "",
    credentials: ["8 лет практики", "500+ разборов карт", "Обучение у международных школ астрологии", "Авторский курс по натальной астрологии"],
    experienceYears: 8,
    clientsHelped: "500+",
  },
  nav: [
    { label: "Обо мне", href: "#about" },
    { label: "С чем помогаю", href: "#help-with" },
    { label: "Услуги", href: "#services" },
    { label: "Как проходит работа", href: "#process" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакты", href: "#contacts" },
  ],
  hero: {
    eyebrow: "Натальная астрология и прогнозы",
    headline: "Увидеть свой путь",
    highlight: "через звёзды",
    subheadline: "Индивидуальные разборы натальной карты и прогнозы, которые помогают принимать решения осознанно.",
    ctaPrimaryText: "Записаться на разбор",
    ctaSecondaryText: "Смотреть услуги",
    image: "",
    stats: [
      { value: "8 лет", label: "практики" },
      { value: "500+", label: "разборов" },
      { value: "4.9", label: "средняя оценка клиентов" },
    ],
  },
  about: {
    heading: "Обо мне",
    subheading: "Немного о моём пути в астрологии",
    paragraphs: [
      "Работаю с натальной астрологией, прогнозами и синастрией больше 8 лет.",
      "Соединяю классические техники с практическими рекомендациями для жизни.",
      "Помогаю принимать решения с опорой на понимание своих циклов и потенциала.",
    ],
    photo: "",
    highlights: [
      { icon: "GraduationCap", text: "Обучение у международных школ" },
      { icon: "Briefcase", text: "8 лет практики" },
      { icon: "Users", text: "500+ разборов" },
      { icon: "Award", text: "Авторский курс по астрологии" },
    ],
  },
  helpWith: {
    heading: "С чем я помогаю",
    subheading: "Частые запросы на консультациях",
    items: [
      { icon: "Compass", title: "Натальная карта", description: "Полный разбор личности, потенциала и жизненных задач." },
      { icon: "TrendingUp", title: "Прогнозы", description: "Разбор ключевых периодов и транзитов на ближайший год." },
      { icon: "Users2", title: "Совместимость", description: "Синастрия для пары — сильные стороны и точки роста отношений." },
      { icon: "Target", title: "Профориентация", description: "Поиск профессионального направления через карту." },
      { icon: "Brain", title: "Жизненные решения", description: "Выбор времени и подхода к важным решениям." },
      { icon: "BatteryCharging", title: "Личные циклы", description: "Понимание своих ресурсных и сложных периодов." },
    ],
  },
  services: {
    heading: "Услуги и стоимость",
    subheading: "Форматы консультаций",
    items: [
      { title: "Разбор натальной карты", description: "Базовый разбор личности и потенциала.", price: "5 000 ₽", duration: "75 минут", features: ["Полный разбор карты", "Запись консультации", "Краткое резюме в текстовом виде"], ctaText: "Записаться" },
      { title: "Годовой прогноз", description: "Разбор ключевых периодов на 12 месяцев вперёд.", price: "7 500 ₽", duration: "90 минут", features: ["Разбор транзитов года", "Рекомендации по месяцам", "Запись консультации"], ctaText: "Заказать прогноз", highlighted: true },
      { title: "Синастрия для пары", description: "Разбор совместимости двух карт.", price: "9 000 ₽", duration: "90 минут", features: ["Разбор обеих карт", "Анализ совместимости", "Рекомендации для отношений"], ctaText: "Записаться на разбор" },
    ],
    footnote: "Для разбора нужны точные дата, время и место рождения.",
  },
  process: {
    heading: "Как проходит работа",
    subheading: "От заявки до готового разбора",
    steps: [
      { title: "Заявка", description: "Пишете в Telegram или WhatsApp с датой, временем и местом рождения." },
      { title: "Подготовка", description: "Рассчитываю карту и готовлю разбор к встрече." },
      { title: "Консультация", description: "Разбираем карту в удобном для вас формате видеосвязи." },
      { title: "Материалы", description: "Присылаю запись встречи и краткое резюме." },
      { title: "Поддержка", description: "Отвечаю на уточняющие вопросы после консультации." },
    ],
  },
  testimonials: {
    heading: "Отзывы",
    subheading: "Что говорят клиенты",
    items: [
      { name: "Виктория", role: "Разбор натальной карты", text: "Много лет искала ответы на вопросы о себе — здесь наконец получила ясную картину.", rating: 5 },
      { name: "Алексей", role: "Годовой прогноз", text: "Прогноз оказался удивительно точным, помог спланировать важные решения.", rating: 5 },
      { name: "Мария и Павел", role: "Синастрия для пары", text: "Разбор помог понять причины наших конфликтов и лучше слышать друг друга.", rating: 5 },
    ],
  },
  faq: {
    heading: "Частые вопросы",
    subheading: "Если не нашли ответ — напишите напрямую",
    items: [
      { question: "Что нужно для разбора карты?", answer: "Точные дата, время и место рождения — чем точнее время, тем точнее разбор." },
      { question: "Что если я не знаю точное время рождения?", answer: "Возможен разбор по приблизительному времени с рядом оговорок." },
      { question: "Консультации проходят онлайн?", answer: "Да, все встречи проходят по видеосвязи в удобном для вас часовом поясе." },
      { question: "Можно ли получить запись консультации?", answer: "Да, запись и краткое резюме отправляются после встречи." },
    ],
  },
  finalCta: {
    heading: "Готовы узнать свой путь?",
    subheading: "Запишитесь на консультацию — разберём вашу карту и ответим на главные вопросы.",
    ctaText: "Записаться на разбор",
    secondaryText: "Отвечаю в течение дня",
  },
  contacts: {
    heading: "Контакты",
    subheading: "Свяжитесь удобным для вас способом",
    email: "hello@sofialuna.expert",
    phone: "+7 (999) 444-55-66",
    city: "Работаю онлайн по всему миру",
    telegram: "https://t.me/sofialuna",
    whatsapp: "https://wa.me/79994445566",
    instagram: "https://instagram.com/sofialuna",
    workingHours: "Ежедневно, 11:00–21:00 (МСК)",
  },
  footer: {
    description: "Натальная астрология и прогнозы для осознанных решений.",
    links: [
      { label: "Обо мне", href: "#about" },
      { label: "Услуги", href: "#services" },
      { label: "FAQ", href: "#faq" },
      { label: "Контакты", href: "#contacts" },
    ],
    legalName: "Sofia Luna",
  },
  seo: {
    title: "Sofia Luna — практикующий астролог",
    description: "Разбор натальной карты, годовые прогнозы и синастрия для пары.",
    keywords: ["астролог онлайн", "натальная карта", "прогноз по астрологии", "синастрия"],
    siteUrl: "https://sofialuna.expert",
    ogImage: "/images/og-cover.jpg",
    locale: "ru_RU",
    themeColor: "#7C3AED",
  },
};

export default astrologerConfig;
