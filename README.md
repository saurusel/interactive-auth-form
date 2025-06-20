# Interactive Auth Form

Учебный сквозной проект по курсу «Web‑программирование 2025». Репозиторий демонстрирует три независ‑ные реализации одной и той же формы авторизации:

| Каталог | Реализвация |
|-|-|
| `/native` | Чистый HTML + CSS + JS без сборки |
| `/with-infrastructure` | (будет позже) |
| `/framework` | (будет позже) |

---
## Как запустить 📦

Рассматривалась ситуация, что уже установлен git и тп на компьютере

<details><summary>Native</summary>

```bash
git checkout native
open native/index.html            # macOS
python3 -m http.server -d native  # встроенный сервер
npx live-server native            # если установлен live‑server
```
</details>

<details><summary>With‑infrastructure</summary>

```-
# первая инициализация
git checkout with-infrastructure         # создать и перейти
npm i -g pnpm                             # менеджер пакетов
pnpm install                              # установит всё из package.json

# дев‑сервер
pnpm dev

# сборка
pnpm build
```
</details>

<details><summary>Framework </summary>

```-
(будет позже)
```
</details>

---
## Ответы на вопросы ❓ 

1 часть

| Раздел | Вопрос | Краткий ответ |
|-|-|-|
| HTML | Как обеспечена доступность? | `lang="ru"`, семантические секции, связка `<label>` - `<input>`, `aria-labelledby`, `role="alert"` |
| HTML | Почему **Grid + Flex**? | Grid задаёт вертикальный стек, Flex укладывает кнопки в горизонт. Минимум CSS при гибкой адаптивке |
| CSS | Какие брейкпоинты? | Mobile‑first. < 640 px — телефоны; ≥ 640 px — планшеты и десктопы |
| JS | Где храним данные и почему? | `localStorage`: логин не секретен и должен пережить рестарт браузера. Пароль не сохраняем |
| JS | Стрелочные vs именованные функции? | Стрелки компактны для одноразовых коллбеков. Именованные удобны для переиспользуемых инструментов |

2 часть

| Раздел | Вопрос | Краткий ответ |
|-|-|-|
| **Infra**   | Почему **pnpm**?                   | Использует жёсткие ссылки → экономит место, быстрее `install`; lock‑файл детерминирован; хорошо работает в monorepo.                     |
| **Infra**   | Как зафиксирована версия Node?     | `nvm use 20 && echo "v20" > .nvmrc`; дубль в `package.json → engines: { "node":"^20" }`.                                                 |
| **TS**      | Какой базовый tsconfig?            | `strict: true`, `target: ES2020`, `module: ESNext`, `jsx: preserve`. Взята `tsconfig/vite.json` + частичный override.                    |
| **Bundler** | Почему **Vite**?                   | Мгновенный HMR, встроенный dev‑сервер, поддержка TypeScript «из коробки», минимальная конфигурация.                                      |
| **Lint**    | ESLint preset                      | `eslint:recommended` + `@typescript-eslint/recommended` + `prettier`. Проверяет TS‑правильность и код‑стайл.                             |
| **Format**  | Prettier + eslint‑plugin‑prettier  | Один стиль форматирования, интеграция с ESLint чтобы избегать конфликтов правил.                                                         |
| **Test**    | Почему **Vitest**?                 | Поддержка esm/TypeScript, тот же dev‑сервер что и Vite, быстрые и изолированные юнит‑тесты.                                              |

---
## Структура

```text
interactive-auth-form/
├── native/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/
├── with-infrastructure/
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── .nvmrc
│   ├── .eslintrc.cjs
│   ├── .prettierrc.cjs
│   ├── src/
│   │   ├── index.html
│   │   ├── styles.css
│   │   ├── script.ts
│   │   ├── validation.ts
└── framework/             # появится на 3‑м этапе
```

---
## Лицензия

MIT © 2025 Matvey Olenin
