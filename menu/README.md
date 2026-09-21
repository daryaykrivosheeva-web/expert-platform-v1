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
- `public/images/og-image.png` — пока сгенерированная абстрактная превьюшка
  (не реальный скриншот), но og-картинку можно оставить и такой.

## Скриншоты

Реальные скриншоты PDF (10 штук, `public/images/01…10-*.png`, 1050×1427)
расставлены по секциям:

| Файл | Где используется |
|---|---|
| `01-oblozhka.png` | Hero — обложка PDF (нижнее/большое изображение) |
| `02-obzor-nedeli.png` | Hero — таблица недели (верхнее/малое изображение) |
| `03-den-menyu.png` | «Что внутри» — «День меню + КБЖУ» |
| `04-spisok-pokupok.png` | «Что внутри» — «Список покупок» |
| `05-voskresnaya-zagotovka.png` | «Что внутри» — «Воскресная заготовка» |
| `07-podarok-oblozhka.png` | «Бонус» — обложка сборника (переднее изображение) |
| `08-podarok-trekher-vody.png` | «Бонус» — трекер воды (заднее изображение) |

Ещё не задействованы на странице (можно использовать при желании
расширить какой-то блок): `06-zameny-produktov.png` (таблица замен —
уже пересказана текстом в блоке «Что внутри»), `09-podarok-ne-pereedat.png`
и `10-podarok-trekher-pitaniya.png` (страницы бонуса — их содержание уже
перечислено списком в блоке «Бонус»).

Чтобы заменить любое изображение — положите новый файл в `public/images/`
с тем же именем (тем же соотношением сторон ~0.74, как у остальных
скриншотов PDF) и перезапустите `npm run build` / `npm run preview`.

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
