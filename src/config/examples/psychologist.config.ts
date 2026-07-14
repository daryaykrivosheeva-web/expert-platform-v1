import type { SiteConfig } from "@/types/config";

/**
 * Example niche variant: psychologist.
 * Copy this file's contents into src/config/site.config.ts to switch the
 * whole template — no component code changes required.
 */
const psychologistConfig: SiteConfig = {
  brand: {
    logoText: "Elena Marsh",
    colors: {
      primary: "#0D9488",
      primaryDark: "#0F766E",
      secondary: "#F59E0B",
      accent: "#FB7185",
      background: "#FFFFFF",
      surface: "#F7F9F9",
      text: "#1E293B",
      muted: "#64748B",
      border: "#E2E8F0",
    },
    fonts: { heading: "playfair", body: "inter" },
  },
  expert: {
    name: "Elena Marsh",
    role: "Клинический психолог",
    niche: "psychology",
    tagline: "Помогаю разобраться в себе и вернуть спокойствие в повседневную жизнь",
    bio: [
      "Работаю с тревогой, отношениями и последствиями стресса больше 11 лет.",
      "Использую доказательные подходы: КПТ, схема-терапию и элементы ACT.",
      "Создаю пространство, где можно говорить честно и без осуждения.",
    ],
    photo: "",
    credentials: ["11 лет практики", "Магистр клинической психологии", "Супервизия каждую неделю", "800+ клиентов"],
    experienceYears: 11,
    clientsHelped: "800+",
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
    eyebrow: "Индивидуальная психотерапия",
    headline: "Вернуть себе",
    highlight: "спокойствие и ясность",
    subheadline: "Онлайн-консультации для тех, кто хочет разобраться в тревоге, отношениях и внутренних конфликтах.",
    ctaPrimaryText: "Записаться на консультацию",
    ctaSecondaryText: "Смотреть услуги",
    image: "",
    stats: [
      { value: "11 лет", label: "практики" },
      { value: "800+", label: "клиентов" },
      { value: "92%", label: "продолжают терапию после первой сессии" },
    ],
  },
  about: {
    heading: "Обо мне",
    subheading: "Немного о моём пути и подходе к терапии",
    paragraphs: [
      "Работаю с тревогой, отношениями и последствиями стресса больше 11 лет.",
      "Использую доказательные подходы: КПТ, схема-терапию и элементы ACT.",
      "Создаю пространство, где можно говорить честно и без осуждения.",
    ],
    photo: "",
    highlights: [
      { icon: "GraduationCap", text: "Магистр клинической психологии" },
      { icon: "Briefcase", text: "11 лет практики" },
      { icon: "Users", text: "800+ клиентов" },
      { icon: "Award", text: "Еженедельная супервизия" },
    ],
  },
  helpWith: {
    heading: "С чем я помогаю",
    subheading: "Основные запросы, с которыми приходят клиенты",
    items: [
      { icon: "Compass", title: "Тревога и стресс", description: "Учимся справляться с тревожными состояниями и хронической усталостью." },
      { icon: "Users2", title: "Отношения", description: "Разбираем повторяющиеся сложности в паре, семье и на работе." },
      { icon: "Brain", title: "Самооценка", description: "Работаем с внутренним критиком и неуверенностью в себе." },
      { icon: "BatteryCharging", title: "Выгорание", description: "Восстанавливаем ресурс после длительного эмоционального истощения." },
      { icon: "TrendingUp", title: "Жизненные переходы", description: "Сопровождение в периоды перемен: переезд, развод, смена работы." },
      { icon: "Target", title: "Личные границы", description: "Учимся выстраивать здоровые границы в общении с близкими." },
    ],
  },
  services: {
    heading: "Услуги и стоимость",
    subheading: "Форматы работы под разные запросы",
    items: [
      { title: "Разовая консультация", description: "Знакомство и разбор актуального запроса.", price: "6 000 ₽", duration: "50 минут", features: ["Диагностика запроса", "Первые рекомендации", "Понимание, подходим ли мы друг другу"], ctaText: "Записаться" },
      { title: "Курс из 8 сессий", description: "Системная работа над основным запросом.", price: "42 000 ₽", priceNote: "за 8 сессий", duration: "8 сессий по 50 минут", features: ["Еженедельные сессии", "Поддержка между встречами", "Домашние задания", "Отслеживание динамики"], ctaText: "Начать курс", highlighted: true },
      { title: "Долгосрочная терапия", description: "Глубокая работа с личностными паттернами.", price: "5 500 ₽", priceNote: "за сессию", duration: "от 3 месяцев", features: ["Еженедельные сессии", "Гибкий график", "Работа с глубинными паттернами"], ctaText: "Обсудить формат" },
    ],
    footnote: "Первая консультация — ознакомительная, вы ничем не обязаны продолжать.",
  },
  process: {
    heading: "Как проходит работа",
    subheading: "От заявки до первой сессии — простой и понятный путь",
    steps: [
      { title: "Заявка", description: "Пишете в Telegram или WhatsApp, коротко описываете запрос." },
      { title: "Знакомство", description: "Договариваемся о времени первой встречи." },
      { title: "Первая сессия", description: "Знакомимся, обсуждаем запрос и формат дальнейшей работы." },
      { title: "Регулярные сессии", description: "Работаем в удобном темпе, отслеживая изменения." },
      { title: "Итоги", description: "Периодически подводим итоги и корректируем цели терапии." },
    ],
  },
  testimonials: {
    heading: "Отзывы",
    subheading: "Что говорят клиенты о работе со мной",
    items: [
      { name: "Ольга", role: "Клиентка, 6 месяцев терапии", text: "Впервые за долгое время чувствую, что тревога не управляет моей жизнью.", rating: 5 },
      { name: "Сергей", role: "Клиент, 3 месяца терапии", text: "Помогло разобраться в отношениях с родителями и наконец выстроить границы.", rating: 5 },
      { name: "Анна", role: "Клиентка, разовая консультация", text: "Уже после одной встречи стало значительно легче смотреть на ситуацию.", rating: 5 },
    ],
  },
  faq: {
    heading: "Частые вопросы",
    subheading: "Если не нашли ответ — напишите напрямую",
    items: [
      { question: "Сессии проходят онлайн?", answer: "Да, все консультации проходят по видеосвязи." },
      { question: "Как понять, что мне нужна терапия?", answer: "Если состояние мешает жить привычной жизнью дольше двух недель — стоит обратиться." },
      { question: "Соблюдается ли конфиденциальность?", answer: "Да, всё, что обсуждается на сессиях, строго конфиденциально." },
      { question: "Что если мне не подойдёт психолог?", answer: "Первая встреча ознакомительная — вы решаете, продолжать ли работу." },
    ],
  },
  finalCta: {
    heading: "Пора позаботиться о себе",
    subheading: "Запишитесь на консультацию — сделаем первый шаг вместе.",
    ctaText: "Записаться на консультацию",
    secondaryText: "Отвечаю в течение дня",
  },
  contacts: {
    heading: "Контакты",
    subheading: "Свяжитесь удобным для вас способом",
    email: "hello@elenamarsh.expert",
    phone: "+7 (999) 765-43-21",
    city: "Санкт-Петербург (работаю онлайн)",
    telegram: "https://t.me/elenamarsh",
    whatsapp: "https://wa.me/79997654321",
    instagram: "https://instagram.com/elenamarsh",
    workingHours: "Пн–Сб, 9:00–20:00 (МСК)",
  },
  footer: {
    description: "Индивидуальная психотерапия для взрослых.",
    links: [
      { label: "Обо мне", href: "#about" },
      { label: "Услуги", href: "#services" },
      { label: "FAQ", href: "#faq" },
      { label: "Контакты", href: "#contacts" },
    ],
    legalName: "Elena Marsh",
  },
  seo: {
    title: "Elena Marsh — клинический психолог",
    description: "Онлайн-консультации психолога: тревога, отношения, самооценка, выгорание.",
    keywords: ["психолог онлайн", "консультация психолога", "психотерапия", "КПТ"],
    siteUrl: "https://elenamarsh.expert",
    ogImage: "/images/og-cover.jpg",
    locale: "ru_RU",
    themeColor: "#0D9488",
  },
};

export default psychologistConfig;
