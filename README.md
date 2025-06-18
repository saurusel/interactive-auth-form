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
(будет позже)
```
</details>

<details><summary>Framework </summary>

```-
(будет позже)
```
</details>

---
## Ответы на вопросы ❓ 

| Раздел | Вопрос | Краткий ответ |
|-|-|-|
| HTML | Как обеспечена доступность? | `lang="ru"`, семантические секции, связка `<label>` - `<input>`, `aria-labelledby`, `role="alert"` |
| HTML | Почему **Grid + Flex**? | Grid задаёт вертикальный стек, Flex укладывает кнопки в горизонт. Минимум CSS при гибкой адаптивке |
| CSS | Какие брейкпоинты? | Mobile‑first. < 640 px — телефоны; ≥ 640 px — планшеты и десктопы |
| JS | Где храним данные и почему? | `localStorage`: логин не секретен и должен пережить рестарт браузера. Пароль не сохраняем |
| JS | Стрелочные vs именованные функции? | Стрелки компактны для одноразовых коллбеков. Именованные удобны для переиспользуемых инструментов |

---
## Структура

```text
interactive-auth-form/
├── native/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/
├── with-infrastructure/   # появится на 2‑м этапе
└── framework/             # появится на 3‑м этапе
```

---
## Лицензия

MIT © 2025 Matvey Olenin
