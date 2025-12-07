# Viktor UI - Краткое справочное руководство

## Обзор

Шаблон веб-сайта ресторана на Next.js с модульными компонентами секций. Многостраничная архитектура с системой тем, поддержкой интернационализации и адаптивным дизайном.

## Технологический стек

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **PostCSS**

## Структура проекта

```
app/              # Страницы и layout Next.js
sections/         # Переиспользуемые компоненты секций
public/           # Статические ассеты (изображения)
```

## Страницы

| Маршрут | Файл | Компоненты |
|---------|------|------------|
| `/` | `app/page.tsx` | Hero, About |
| `/menu` | `app/menu/page.tsx` | Menu, Footer |
| `/hours` | `app/hours/page.tsx` | Hours, Footer |
| `/gallery` | `app/gallery/page.tsx` | Gallery, Footer |
| `/contact` | `app/contact/page.tsx` | Contact, Footer |

## Компоненты секций

- **Hero**: Название, слоган, изображение, описание
- **About**: Расширенный текст о ресторане
- **Menu**: Категории и блюда с ценами
- **Hours**: Часы работы сгруппированные по дням
- **Gallery**: Сетка изображений из элементов меню
- **Contact**: Контактная информация + форма резервирования
- **Footer**: Название, город, копирайт

## Источник данных

`sections/sample-data.json` содержит:
- Информацию о ресторане (название, тема, контакты, местоположение)
- Категории и блюда меню
- Часы работы

## Система тем

CSS переменные устанавливаются динамически:
- `--brand-color`: Основной цвет
- `--accent-color`: Вторичный цвет
- `--page-bg`: Фон
- `--paper-bg`: Область контента
- `--body-text`: Основной текст
- `--secondary-text`: Приглушенный текст

## Ключевые файлы

- `app/layout.tsx`: Корневой layout + обертка RestaurantLayout
- `app/globals.css`: Глобальные стили + CSS переменные
- `app/types.ts`: Определения TypeScript
- `sections/helpers.ts`: Утилитарные функции (локализация, пути изображений)
- `sections/components.tsx`: Общий компонент SectionBoundary

## Разработка

```bash
npm install    # Установка зависимостей
npm run dev    # Запуск сервера разработки (localhost:3000)
npm run build  # Сборка для продакшена
```

## Кастомизация

1. **Тема**: Редактируйте `sample-data.json` → объект `theme`
2. **Контент**: Редактируйте `sample-data.json` → `restaurant.info`
3. **Меню**: Редактируйте `sample-data.json` → `categories` и `items`
4. **Часы работы**: Редактируйте `sample-data.json` → `openingHours`
5. **Стили**: Изменяйте `app/globals.css` или классы Tailwind компонентов

## Вспомогательные функции

- `getLocalizedText(obj, lang)`: Получение переведенного текста
- `normalizeImagePath(path)`: Нормализация URL изображений
- `getInitials(name)`: Извлечение инициалов (например, "CT")

## Пропсы компонентов

**HeroVariant1**: `{ restaurant, lang }`  
**AboutVariant1**: `{ restaurant, lang }`  
**MenuVariant1**: `{ categories, items, lang }`  
**HoursVariant1**: `{ openingHours }`  
**GalleryVariant1**: `{ items }`  
**ContactVariant1**: `{ restaurant }`  
**FooterVariant1**: `{ restaurant }`

## Стилизация

- **Tailwind CSS**: Утилитарные классы для layout/отступов
- **CSS переменные**: Цвета темы через `var(--brand-color)`
- **Инлайн стили**: Динамические значения с типами TypeScript
- **Адаптивность**: Mobile-first с брейкпоинтами `sm:`, `md:`, `lg:`

## Интернационализация

- Поддерживает несколько языков (сейчас EN/ES)
- Тип `LocalizedText`: `Record<string, string>`
- Используйте хелпер `getLocalizedText()` для извлечения переводов
- Язык передается как проп `lang` компонентам

## Работа с изображениями

- Размещайте изображения в `public/images/`
- Ссылайтесь как `/images/filename.jpg` в данных
- Использует компонент Next.js `Image` для оптимизации
- Откат к инициалам если изображение отсутствует

## Типобезопасность

Все структуры данных типизированы в `app/types.ts`:
- `RestaurantRow`: Основной объект ресторана
- `MenuCategory`, `MenuItem`: Структура меню
- `OpeningHour`: Данные часов работы
- `LocalizedText`: Многоязычные строки

## Навигация

Липкий заголовок со ссылками:
- Главная → `/`
- Меню → `/menu`
- Часы работы → `/hours`
- Резервирование → `/contact`

## Возможности

✅ Многостраничная маршрутизация  
✅ Динамическая тематизация (светлая/темная)  
✅ Адаптивный дизайн  
✅ Типобезопасный TypeScript  
✅ Компонентная архитектура  
✅ Готовность к интернационализации  
✅ Оптимизация изображений  
✅ Валидация форм