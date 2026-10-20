export type SiteImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  position?: string;
};

export const IMAGES = {
  hero: {
    src: "/images/hero-elbrus-flag.jpg",
    width: 721,
    height: 1280,
    alt: "Андрей Дурнев «Амур» с флагом «Защитники Отечества» на фоне Эльбруса",
    position: "object-[50%_30%]",
  },
  elbrusSummit: {
    src: "/images/elbrus-summit-team.jpg",
    width: 720,
    height: 1280,
    alt: "Андрей Дурнев с группой альпинистов на вершине Эльбруса, 5642 метра",
  },
  volleyball: {
    src: "/images/volleyball-medals.jpg",
    width: 1280,
    height: 960,
    alt: "Андрей Дурнев с медалями после турнира по волейболу сидя в Благовещенске",
  },
  enduro: {
    src: "/images/enduro-moto.jpg",
    width: 591,
    height: 1280,
    alt: "Андрей Дурнев на эндуро-мотоцикле летом",
    position: "object-[50%_25%]",
  },
  medals: {
    src: "/images/medals-wall.jpg",
    width: 960,
    height: 1280,
    alt: "Спортивные медали Андрея Дурнева: волейбол сидя, жим лёжа, восхождение на Эльбрус",
  },
  waterfall: {
    src: "/images/waterfall-victory.jpg",
    width: 1280,
    height: 960,
    alt: "Андрей Дурнев с протезом ноги радуется победе под водопадом",
  },
} satisfies Record<string, SiteImage>;
