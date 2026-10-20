# Андрей Дурнев «Амур» — персональный сайт

Одностраничный сайт ветерана СВО. Главная задача сайта — не портфолио, а оффер:
бесплатное получение улучшенного протеза (микропроцессорного, бионического,
спортивного) от государства через изменение ИПРА и электронный сертификат.
Контент основан на материалах, присланных клиентом, и фотографиях из папки
`fotoDurnev/` в корне репозитория.

## Стек

React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

## Структура

```
src/
  components/        — секции страницы (Hero, Offer, About, Sport, HowToGet,
                        Achievements, FAQ, Contacts, Header, Footer, ScrollProgress)
  components/ui/     — переиспользуемые примитивы (Container, CTAButton,
                        SectionHeading, Eyebrow, Reveal, StaggerGroup, PhotoFrame)
  data/               — весь контент (profile.ts — тексты и факты, images.ts — фото)
  hooks/              — useActiveSection, useScrollProgress, useCountUp
public/images/        — фотографии (взяты из fotoDurnev/, оригинальные JPG)
```

## Контент

Весь текст — в `src/data/profile.ts`. Ключевой блок оффера (путь от бесплатного
протеза до сертификата на 3 100 000 ₽ и обращение «Братаны, кто хочет...») —
в объекте `OFFER`, вынесен в отдельную секцию `Offer.tsx` с тёмным акцентным
фоном, чтобы визуально выделяться на странице. Фото — в `src/data/images.ts` +
`public/images/`.

## SEO и гео

- `index.html`: title и description с ключевыми фразами («бесплатный протез»,
  «электронный сертификат», «ветеран СВО», «Благовещенск», «Амурская область»),
  canonical, Open Graph, Twitter Card.
- Гео-метатеги: `geo.region` (RU-AMU), `geo.placename` (Благовещенск),
  `geo.position` / `ICBM` (координаты Благовещенска).
- JSON-LD `Person` — имя, позывной, регион, `areaServed: Россия`, `sameAs` на
  профиль ВКонтакте и страницу команды по волейболу сидя.
- JSON-LD `FAQPage` — синхронизирован с блоком `FAQ_ITEMS` в `profile.ts`,
  один из вопросов явно закрывает гео-охват (вся Россия + новые захваченные
  территории).
- `public/robots.txt` и `public/sitemap.xml`.

При получении реального домена нужно заменить `https://durnev-amur.ru/` во
всех местах: `index.html` (canonical, OG, JSON-LD), `public/robots.txt`,
`public/sitemap.xml`.

## Контакты клиента

Указаны реальные контакты из брифа: телефон `+7 914 583-81-92` (звонок,
Telegram, MAX), профиль ВКонтакте и страница команды «Амур» по волейболу
сидя. Ссылка на Telegram сформирована по номеру телефона
(`https://t.me/+79145838192`) — если у клиента появится юзернейм, заменить
в `SITE.telegramHref` (`src/data/profile.ts`).

## Локальный запуск

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # прод-сборка в dist/
npm run preview   # предпросмотр сборки
```

## Деплой на Vercel

Самостоятельный Vite-проект. При импорте репозитория в Vercel укажите:
**Root Directory = `Durnev`**, Build command `npm run build`, Output
directory `dist`.
