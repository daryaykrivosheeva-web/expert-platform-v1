// Блок отзывов намеренно скрыт: компонент Testimonials.tsx существует,
// но не подключён на странице (см. src/pages/Landing.tsx).
// Когда появятся настоящие отзывы — заполните массив ниже и раскомментируйте
// <Testimonials /> в Landing.tsx. Не используйте вымышленные имена/отзывы.
export type Testimonial = {
  name: string;
  text: string;
};

export const testimonials: Testimonial[] = [];
