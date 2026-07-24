import type { SiteConfig } from "@/types/config";

/**
 * Example niche variant: nutritionist.
 * Copy this file's contents into src/config/site.config.ts to switch the
 * whole template — no component code changes required.
 */
const nutritionistConfig: SiteConfig = {
  brand: {
    logoText: "Maria Green",
    colors: {
      primary: "#16A34A",
      primaryDark: "#15803D",
      secondary: "#0EA5E9",
      accent: "#F97316",
      background: "#FFFFFF",
      surface: "#F6FBF7",
      text: "#14532D",
      muted: "#5B7566",
      border: "#DCEEE1",
    },
    fonts: { heading: "poppins", body: "inter" },
  },
  expert: {
    name: "Maria Green",
    role: "Нутрициолог, специалист по питанию",
    niche: "nutrition",
    tagline: "Помогаю выстроить питание, которое работает на вашу энергию и здоровье",
    bio: [
      "Составляю индивидуальные планы питания без жёстких диет и запретов.",
      "Работаю с пищевым поведением, энергией и лабораторными показателями.",
      "Опираюсь на доказательную нутрициологию, а не на модные тренды.",
    ],
    photo: "",
    credentials: ["7 лет практики", "Диплом нутрициолога", "400+ клиентов", "Регулярное повышение квалификации"],
    experienceYears: 7,
    clientsHelped: "400+",
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
    eyebrow: "Персональное сопровождение по питанию",
    headline: "Питание, которое",
    highlight: "даёт вам энергию",
    subheadline: "Индивидуальные программы питания без жёстких диет — с опорой на ваш образ жизни и цели.",
    ctaPrimaryText: "Записаться на консультацию",
    ctaSecondaryText: "Смотреть услуги",
    image: "",
    stats: [
      { value: "7 лет", label: "практики" },
      { value: "400+", label: "клиентов" },
      { value: "89%", label: "достигают цели за 3 месяца" },
    ],
  },
  about: {
    heading: "Обо мне",
    subheading: "Немного о подходе к работе с питанием",
    paragraphs: [
      "Составляю индивидуальные планы питания без жёстких диет и запретов.",
      "Работаю с пищевым поведением, энергией и лабораторными показателями.",
      "Опираюсь на доказательную нутрициологию, а не на модные тренды.",
    ],
    photo: "",
    highlights: [
      { icon: "GraduationCap", text: "Диплом нутрициолога" },
      { icon: "Briefcase", text: "7 лет практики" },
      { icon: "Users", text: "400+ клиентов" },
      { icon: "Award", text: "Доказательный подход" },
    ],
  },
  helpWith: {
    heading: "С чем я помогаю",
    subheading: "Частые запросы клиентов",
    items: [
      { icon: "Compass", title: "Снижение веса", description: "Устойчивое снижение веса без эффекта качелей." },
      { icon: "BatteryCharging", title: "Энергия и бодрость", description: "Настраиваем питание под ваш ритм и уровень активности." },
      { icon: "Brain", title: "Пищевое поведение", description: "Работаем с перееданием и эмоциональным голодом." },
      { icon: "TrendingUp", title: "Лабораторные показатели", description: "Приводим анализы в норму через питание." },
      { icon: "Users2", title: "Питание семьи", description: "Простые решения для всей семьи, включая детей." },
      { icon: "Target", title: "Спортивное питание", description: "Питание под тренировочные цели и восстановление." },
    ],
  },
  services: {
    heading: "Услуги и стоимость",
    subheading: "Форматы сопровождения по питанию",
    items: [
      { title: "Консультация", description: "Разбор рациона и первые рекомендации.", price: "4 500 ₽", duration: "60 минут", features: ["Анализ текущего питания", "Рекомендации по анализам", "Базовый план на неделю"], ctaText: "Записаться" },
      { title: "Программа на месяц", description: "Индивидуальный план питания с сопровождением.", price: "18 000 ₽", priceNote: "за месяц", duration: "4 встречи + чат", features: ["Индивидуальный план питания", "Еженедельные корректировки", "Поддержка в чате", "Разбор анализов"], ctaText: "Начать программу", highlighted: true },
      { title: "Сопровождение 3 месяца", description: "Полное сопровождение до устойчивого результата.", price: "48 000 ₽", priceNote: "за 3 месяца", duration: "12 встреч + чат", features: ["Полное сопровождение", "Гибкая корректировка плана", "Приоритетная поддержка", "Итоговый разбор результатов"], ctaText: "Обсудить программу" },
    ],
    footnote: "Возможна оплата в рассрочку. Скидки для повторных программ.",
  },
  process: {
    heading: "Как проходит работа",
    subheading: "Простой путь от заявки до результата",
    steps: [
      { title: "Заявка", description: "Оставляете заявку и коротко описываете цель." },
      { title: "Анкета", description: "Заполняете анкету о питании и образе жизни." },
      { title: "Консультация", description: "Обсуждаем цели и составляем первый план." },
      { title: "Сопровождение", description: "Корректируем план на основе вашей обратной связи." },
      { title: "Результат", description: "Фиксируем результат и планируем дальнейшие шаги." },
    ],
  },
  testimonials: {
    heading: "Отзывы",
    subheading: "Истории клиентов",
    items: [
      { name: "Наталья", role: "Клиентка, 3 месяца сопровождения", text: "Впервые питание стало комфортным, а не источником стресса.", rating: 5 },
      { name: "Виктор", role: "Клиент, программа на месяц", text: "Улучшились анализы и появилась энергия для тренировок.", rating: 5 },
      { name: "Екатерина", role: "Клиентка, разовая консультация", text: "Понятный план без строгих запретов — именно то, что искала.", rating: 5 },
    ],
  },
  faq: {
    heading: "Частые вопросы",
    subheading: "Если не нашли ответ — напишите напрямую",
    items: [
      { question: "Нужно ли сдавать анализы перед консультацией?", answer: "Не обязательно, но при наличии свежих анализов мы сможем составить более точный план." },
      { question: "Это диета с запретами?", answer: "Нет, я не работаю с жёсткими диетами — план строится под ваш образ жизни." },
      { question: "Подходит ли программа при заболеваниях ЖКТ?", answer: "Да, план адаптируется под медицинские ограничения при их наличии." },
      { question: "Как проходят встречи?", answer: "Онлайн по видеосвязи, что удобно из любого города." },
    ],
  },
  finalCta: {
    heading: "Готовы изменить своё питание?",
    subheading: "Запишитесь на консультацию — составим план под ваши цели.",
    ctaText: "Записаться на консультацию",
    secondaryText: "Отвечаю в течение дня",
  },
  contacts: {
    heading: "Контакты",
    subheading: "Свяжитесь удобным для вас способом",
    email: "hello@mariagreen.expert",
    phone: "+7 (999) 111-22-33",
    city: "Казань (работаю онлайн)",
    telegram: "https://t.me/mariagreen",
    whatsapp: "https://wa.me/79991112233",
    instagram: "https://instagram.com/mariagreen",
    workingHours: "Пн–Пт, 9:00–18:00 (МСК)",
    consentLabel: "Я согласен(а) на обработку персональных данных в соответствии с Политикой конфиденциальности",
  },
  footer: {
    description: "Индивидуальные программы питания для здоровья и энергии.",
    links: [
      { label: "Обо мне", href: "#about" },
      { label: "Услуги", href: "#services" },
      { label: "FAQ", href: "#faq" },
      { label: "Контакты", href: "#contacts" },
    ],
    legalName: "Maria Green",
  },
  seo: {
    title: "Maria Green — нутрициолог",
    description: "Индивидуальные программы питания: снижение веса, энергия, пищевое поведение.",
    keywords: ["нутрициолог онлайн", "консультация по питанию", "план питания", "похудение"],
    siteUrl: "https://mariagreen.expert",
    ogImage: "/images/og-cover.jpg",
    locale: "ru_RU",
    themeColor: "#16A34A",
  },

  legal: {
    entityType: "self-employed",
    entityLabel: "Самозанятая",
    entityName: "Грин Мария Игоревна",
    inn: "165812345678",
    registrationAddress: "г. Казань",
    effectiveDate: "2026-07-14",
    disclaimer: "Информация на сайте носит информационный характер и не является публичной офертой.",
  },
};

export default nutritionistConfig;
