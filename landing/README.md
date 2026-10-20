# Как выйти в онлайн — статья + лендинг набора «5 инструментов»

Одностраничный сайт-статья для Даши Радченко: editorial article + product landing.
Проводит читателя от «узнал себя в проблеме» до покупки цифрового набора
«5 инструментов для работы онлайн» за 1 900 ₽ (оплата — Tribute).

Текст статьи используется без изменений (утверждён автором). Контент вынесен
в `src/data/*.ts` — редактировать текст можно там, не трогая вёрстку.

## Стек

React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion (только для
сдержанных fade-up переходов и раскрытия FAQ/чек-листа).

## Структура

```
src/
  components/        — секции страницы (Hero, QuoteBlock, IntroSection,
                        FiveTools, ClientJourney, Philosophy, Checklist,
                        ProductIntro, ProductShowcase, ProductLogic, FAQ,
                        Pricing, FinalCTA, Footer, Header, ScrollProgress,
                        MobileStickyCTA)
  components/ui/     — переиспользуемые примитивы (Container, CTAButton,
                        SectionHeading, Eyebrow, Reveal)
  data/              — весь контент (tools, products, faq, checklist,
                        journey, constants — включая ссылку на оплату)
  hooks/             — useScrollProgress, usePastScrollThreshold, useInView
```

## Оплата

Ссылка на оплату задаётся в одном месте: `src/data/constants.ts` →
`TRIBUTE_URL`. Сейчас: `https://web.tribute.tg/s/13eP`.

## Фото

`public/images/hero-portrait.jpg` и `public/images/footer-portrait.jpg` —
взяты из `Dasha/` в корне репозитория. Чтобы заменить, положите новое фото
в `public/images/` с тем же именем.

## Локальный запуск

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # прод-сборка в dist/
npm run preview   # предпросмотр сборки
```

## Деплой

Самостоятельный Vite-проект. На Vercel/Netlify: **Root Directory = `landing`**,
Build command `npm run build`, Output directory `dist`.
