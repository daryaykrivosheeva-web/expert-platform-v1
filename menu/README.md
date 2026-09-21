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
- Картинки — см. раздел «Скриншоты» ниже.

## Скриншоты

Все изображения сейчас — нейтральные PNG-заглушки (мокапы телефона/
планшета, превью страниц PDF), без реального контента. Чтобы заменить их:

1. Положите файлы в `public/images/`.
2. Назовите их **точно так же**, как заглушки ниже, — тогда в коде ничего
   менять не нужно, файлы просто перезапишутся:

   | Файл | Где используется | Рекомендуемый размер |
   |---|---|---|
   | `mockup-phone.png` | Hero, экран телефона | 360×720 (соотношение ~1:2) |
   | `mockup-tablet.png` | Hero, экран планшета | 480×640 (соотношение 3:4) |
   | `preview-menu-day.png` | «Что внутри», галерея | 400×520 (соотношение ~10:13) |
   | `preview-shopping-list.png` | «Что внутри», галерея | 400×520 |
   | `preview-sunday-prep.png` | «Что внутри», галерея | 400×520 |
   | `preview-bonus.png` | Блок «Бонус» | 400×520 |
   | `og-image.png` | og:image / превью в соцсетях и мессенджерах | 1200×630 (жёстко, не менять) |

3. Формат — PNG (или JPG, тогда поменяйте расширение в трёх местах:
   `src/components/Hero.tsx`, `src/components/Bonus.tsx`,
   `src/data/inside.ts`). Точный размер не обязателен — важны примерные
   пропорции, картинка растянется по контейнеру.
4. После замены проверьте `npm run build` и `npm run preview`.

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
