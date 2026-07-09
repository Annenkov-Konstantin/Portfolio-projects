# 📚 Портфолио проектов — Константин Анненков

Коллекция проектов, созданных в процессе обучения и профессионального развития. Каждый проект демонстрирует определённые навыки и технологии.

---

## 📋 Список проектов

### Современные проекты (React/TypeScript)

| Проект                                     | Описание                                                                     | Технологии                                          |
| ------------------------------------------ | ---------------------------------------------------------------------------- | --------------------------------------------------- |
| [**Web-ларёк**](./1_Web_larek/)            | SPA интернет-магазин на TypeScript по паттерну MVP с событийной архитектурой | TypeScript, MVP, Event Architecture, REST API       |
| [**Stellar Burger**](./2_Stellar_burgers/) | React-приложение для заказа бургеров с Redux Toolkit и JWT-авторизацией      | React, Redux Toolkit, JWT, Jest, Cypress, Storybook |
| [**Mesto**](./3_Mesto/)                    | Интерактивное SPA на чистом JavaScript с REST API и кастомной валидацией     | Vanilla JS, REST API, Custom Validation             |

### Production-проекты

| Проект                                            | Описание                                                                         | Технологии                                 |
| ------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------ |
| [**pheb.ru**](./5_Pheb_ru/)                       | Личный сайт-портфолио с адаптивной вёрсткой, SEO-оптимизацией и защитой от спама | HTML5, CSS3, JavaScript, PHP, reCAPTCHA v3 |
| [**TTS-сервис**](https://pheb.ru/speech_service/) | Сервис перевода текста в речь через Yandex SpeechKit API                         | PHP, MySQL, Yandex SpeechKit API           |
| [**Сервис закладок**](https://pheb.ru/bookmark/)  | Сервис создания закладок веб-страниц с интеграцией ScreenshotMachine API         | PHP, MySQL, ScreenshotMachine API          |

### Адаптивная вёрстка

| Проект                                                      | Описание                                    | Технологии              |
| ----------------------------------------------------------- | ------------------------------------------- | ----------------------- |
| [**Сложно сосредоточиться**](./4_Slozhno_sosredotochitsya/) | Адаптивная статья с тремя темами оформления | HTML5, CSS3, JavaScript |

---

## 🚀 Как запустить проекты

### Требования

- **Node.js** 16+ (для React/TypeScript проектов)
- **npm** 8+ или **yarn** 1.22+
- **PHP** 7.4+ (для pheb.ru, TTS-сервис, Сервис закладок)
- **Git**

### Установка и запуск

Каждый проект содержит собственный `README.md` с подробными инструкциями. Общий порядок:

```bash
# 1. Перейти в папку проекта
cd 1_Web_larek  # или 2_Stellar_burgers, 3_Mesto, 5_Pheb_ru

# 2. Установить зависимости
npm install

# 3. Создать файл .env (если требуется)
cp .env.example .env
# Отредактировать .env и указать необходимые переменные

# 4. Запустить dev-сервер
npm start
```

### Production-проекты (TTS-сервис, Сервис закладок)

Эти проекты размещены на хостинге и доступны по ссылкам:

- **TTS-сервис:** [pheb.ru/speech_service](https://pheb.ru/speech_service/)
- **Сервис закладок:** [pheb.ru/bookmark](https://pheb.ru/bookmark/)

> 💡 **Production-проекты** (TTS-сервис, Сервис закладок) — это реальные работающие сервисы с пользователями. Код написан на стеке jQuery + PHP и требует серьёзного рефакторинга на современный стек (React + TypeScript), над чем я сейчас работаю. По запросу могу предоставить доступ к приватному репозиторию — покажу как есть, с пояснением, что и как планирую улучшать.

## 📁 Структура папки

```
Practicum_projects/
├── 1_Web_larek/                 # SPA интернет-магазин (TypeScript, MVP)
├── 2_Stellar_burgers/           # React-приложение (Redux Toolkit, JWT)
├── 3_Mesto/                     # Vanilla JS SPA (REST API)
├── 4_Slozhno_sosredotochitsya/  # Адаптивная статья (HTML/CSS/JS)
├── 5_Pheb_ru/                   # Личный сайт-портфолио (HTML/CSS/JS/PHP)
└── README.md                    # Этот файл
```

---

## 🛠 Общие технологии

### Frontend

- **React 18** + **TypeScript** + **Redux Toolkit**
- **HTML5** + **CSS3** (Grid, Flexbox, Custom Properties)
- **Vanilla JavaScript** (ES6+)
- **Bootstrap 5**

### Backend & API

- **PHP** (обработка форм, серверная логика)
- **REST API** (интеграция с внешними сервисами)
- **MySQL** (хранение данных)

### Инструменты

- **Webpack** (сборка)
- **Jest** + **Cypress** (тестирование)
- **Storybook** (документация компонентов)
- **Git** (контроль версий)

---

## 📬 Контакты

Если у вас есть вопросы по проектам или вы хотите сотрудничать:

- **Сайт:** [pheb.ru](https://pheb.ru/)
- **Email:** [pheb@list.ru](mailto:pheb@list.ru)
- **Telegram:** [@Knfrei](https://t.me/Knfrei)
- **GitHub:** [@Annenkov-Konstantin](https://github.com/Annenkov-Konstantin)

---

<div align="center">

**Если проекты были полезны, поставьте ⭐ на GitHub!**

</div>
