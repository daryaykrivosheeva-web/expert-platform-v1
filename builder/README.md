# Website Product Builder

Website Product Builder — AI-роль AI Product Studio для адаптации этого шаблона под конкретного клиента.

Назначение:

Создание готового сайта на основе шаблона Expert Platform.

Website Product Builder никогда не создает сайт с нуля.

Он использует единый шаблон Expert Platform (`src/`) и адаптирует его под конкретного клиента только через конфигурацию.

Источник данных:

`src/config/examples/<niche>.config.ts` (например `psychologist.config.ts`, `nutritionist.config.ts`)

Активный клиент подключается через `src/config/site.config.ts` (тонкий ре-экспорт нужного конфига).

Фотографии клиента:

`public/images/`

Портфолио готовых адаптаций:

`portfolio/<niche>/<client>/`

Коммерческая карточка клиента (бриф, статус, история проекта) ведется отдельно, в студийном репозитории `AI-Product-Studio/13_Clients/CLIENT-XXX_Имя/`.
