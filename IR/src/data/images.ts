export type SiteImage = {
  src: string;
  srcMobile: string;
  width: number;
  height: number;
  alt: string;
};

export const IMAGES = {
  hero: {
    src: "/images/hero-portrait.webp",
    srcMobile: "/images/hero-portrait-800.webp",
    width: 853,
    height: 1280,
    alt: "Игорь Радченко выступает с трибуны",
  },
  about: {
    src: "/images/about-portrait.webp",
    srcMobile: "/images/about-portrait-800.webp",
    width: 1280,
    height: 853,
    alt: "Игорь Радченко в студии телеинтервью",
  },
  timeline: {
    src: "/images/timeline-podium.webp",
    srcMobile: "/images/timeline-podium-800.webp",
    width: 1020,
    height: 925,
    alt: "Игорь Радченко, портрет",
  },
  results: {
    src: "/images/results-conference.webp",
    srcMobile: "/images/results-conference-800.webp",
    width: 1280,
    height: 745,
    alt: "Игорь Радченко выступает на деловой конференции",
  },
  govService: {
    src: "/images/gov-meeting.webp",
    srcMobile: "/images/gov-meeting-800.webp",
    width: 1280,
    height: 852,
    alt: "Игорь Радченко на рабочем совещании",
  },
  ai: {
    src: "/images/ai-media.webp",
    srcMobile: "/images/ai-media-800.webp",
    width: 960,
    height: 1280,
    alt: "Игорь Радченко даёт интервью в телестудии",
  },
  digital: {
    src: "/images/office-desk.webp",
    srcMobile: "/images/office-desk-800.webp",
    width: 800,
    height: 681,
    alt: "Игорь Радченко за рабочим столом",
  },
  contact: {
    src: "/images/contact-portrait.webp",
    srcMobile: "/images/contact-portrait-800.webp",
    width: 1280,
    height: 960,
    alt: "Игорь Радченко, портрет на открытом воздухе",
  },
} satisfies Record<string, SiteImage>;
