# «Неделя без вопроса «Что приготовить?»» — лендинг

Одностраничный mobile-first лендинг цифрового продукта: меню на 4 недели со
списками покупок и воскресной заготовкой (990 ₽, оплата — Tribute). Трафик —
Pinterest и Threads, до 80% с телефона, поэтому вёрстка спроектирована от
мобильного экрана к десктопу.

Весь текст вынесен в `src/data/*.ts` — редактировать копирайт можно там, не
трогая вёрстку.

## Стек

React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion (сдержанные
fade-up переходы, раскрытие FAQ, липкая кнопка на мобильном).

## Структура

```
src/
  components/        — секции страницы (Hero, Pain, Solution, HowItWorks,
                        WhatsInside, Levels, Bonus, Comparison, Audience,
                        Pricing, FAQ, FinalCTA, Header, Footer,
                        ScrollProgress, MobileStickyCTA)
  components/Testimonials.tsx
                      — блок отзывов. НЕ подключён на странице (см.
                        src/pages/Landing.tsx) — компонент возвращает null,
                        пока src/data/testimonials.ts пуст. Когда появятся
                        настоящие отзывы: заполните массив в
                        src/data/testimonials.ts и раскомментируйте
                        <Testimonials /> в src/pages/Landing.tsx.
  components/ui/     — переиспользуемые примитивы (Container, CTAButton,
                        SectionHeading, Eyebrow, Reveal)
  data/              — весь контент и константы (цена, ссылка на оплату,
                        уровни калорийности, FAQ и т.д.)
  hooks/             — useScrollProgress, useInView
  pages/Landing.tsx  — сборка секций в порядке, заданном в ТЗ
```

## Оплата

Ссылка на оплату задаётся в одном месте: `src/data/constants.ts` →
`TRIBUTE_URL`. Сейчас: `https://web.tribute.tg/s/16Sh`. Все кнопки «Купить»
ведут на неё и открываются в новой вкладке.

Чтобы видеть, откуда приходят покупатели (Pinterest / Threads), добавьте
UTM-метки прямо в `TRIBUTE_URL`, например:
`https://web.tribute.tg/s/16Sh?utm_source=pinterest&utm_medium=social&utm_campaign=menu`.

## Аналитика

Код счётчика Яндекс.Метрики подготовлен (закомментирован) в `index.html` —
вставьте свой counter ID и раскомментируйте перед публикацией.

## Что нужно донастроить перед публикацией (плейсхолдеры)

Всё, что не было указано в брифе, оставлено плейсхолдером в коде — искать по
`TODO` и квадратным скобкам `[...]`:

- `src/data/constants.ts` — `AUTHOR_NAME` (имя/название в шапке и футере),
  `PINTEREST_URL`, `THREADS_URL`, `OFERTA_URL`, `PRIVACY_URL`.
- `src/data/faq.ts` — ответ на вопрос «Можно ли вернуть деньги?» (сейчас
  плейсхолдер `[Вставьте вашу политику возврата]`).
- `index.html` — `<link rel="canonical">`, `og:site_name`, Яндекс.Метрика
  (counter ID), `og:image` как абсолютный URL после публикации.
- `public/robots.txt` — ссылка на sitemap (или удалите строку).
- Картинки — все изображения в `public/images/*.svg` и сгенерированный из
  og-image.svg `public/images/og-image.png` сейчас нейтральные заглушки
  (мокапы телефона/планшета, превью страниц PDF). Замените на реальные
  скриншоты меню — компоненты уже подключены и ждут `<img>` с теми же
  путями (или обновите пути в `src/data/inside.ts`, `Hero.tsx`, `Bonus.tsx`).
- Блок отзывов (`Testimonials.tsx`) — скрыт, см. раздел «Структура» выше.

## Локальный запуск

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # прод-сборка в dist/
npm run preview   # предпросмотр сборки
```

## Деплой

Самостоятельный Vite-проект. На Vercel/Netlify: **Root Directory = `menu`**,
Build command `npm run build`, Output directory `dist`.
