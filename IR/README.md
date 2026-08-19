# Игорь Радченко — персональный сайт

Одностраничный профессиональный сайт-портфолио. Контент основан только на материалах
из папки `Igor/` в корне репозитория (бриф + фотографии) — фактов сверх брифа нет.

## Стек

React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

## Структура

```
src/
  components/        — секции страницы (Hero, About, Timeline, Results, Cases,
                        GovService, AI, Digitalization, Entrepreneurs, Book,
                        SocialValue, Contacts, Header, Footer, ScrollProgress)
  components/ui/     — переиспользуемые примитивы (Container, CTAButton,
                        SectionHeading, Eyebrow, Reveal, StaggerGroup, PhotoFrame)
  data/               — весь контент (profile.ts — тексты и факты, images.ts — фото)
  hooks/              — useActiveSection, useScrollProgress, useCountUp
design-system/        — дизайн-система (ui-ux-pro-max), MASTER.md — источник правды
                         по цвету/типографике/motion
```

## Контент

Весь текст — в `src/data/profile.ts`. Редактировать копирайт, добавлять новые кейсы,
пункты таймлайна или результаты можно там, не трогая вёрстку. Фото — в
`src/data/images.ts` + `public/images/` (WebP, две ширины на файл: полная и `-800`
для мобильных).

## Контакты

Указаны реальные контакты из брифа: телефон и email. Других каналов (Telegram, VK,
Max) в исходных материалах не было — при появлении добавить в `SITE` в `profile.ts`
и вывести в `Footer.tsx` / `Contacts.tsx`.

## Локальный запуск

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # прод-сборка в dist/
npm run preview   # предпросмотр сборки
```

## Деплой на Vercel

Самостоятельный Vite-проект. При импорте репозитория в Vercel укажите:
**Root Directory = `IR`**, Build command `npm run build`, Output directory `dist`.

После получения реального домена обновите `https://igor-radchenko.ru/` на
актуальный адрес в `index.html` (canonical, Open Graph, JSON-LD) и в
`public/robots.txt` / `public/sitemap.xml`.
