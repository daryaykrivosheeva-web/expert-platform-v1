export interface JourneyStep {
  number: string;
  title: string;
  subtitle: string;
}

export const systemJourney: JourneyStep[] = [
  { number: "01", title: "Вас можно найти", subtitle: "Сайт или цифровая визитка" },
  { number: "02", title: "С вами можно начать контакт", subtitle: "Форма или квиз" },
  { number: "03", title: "Вы не теряете потенциальных клиентов", subtitle: "CRM" },
  { number: "04", title: "Вас можно регулярно видеть", subtitle: "Хотя бы одна соцсеть" },
  {
    number: "05",
    title: "Вам можно доверять",
    subtitle: "Полезный материал, который показывает вашу компетентность",
  },
];

export const clientPath: string[] = [
  "Человек вас нашёл",
  "Посмотрел, кто вы и чем занимаетесь",
  "Оставил заявку",
  "Вы не потеряли его",
  "Увидел ваш контент и материалы",
  "Понял вашу компетентность",
  "Купил",
];
