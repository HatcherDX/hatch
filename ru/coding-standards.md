---
title: Стандарты кодирования | Руководство по разработке Hatcher IDE
description: Официальные стандарты кодирования и руководство по разработке для Hatcher IDE. Лучшие практики для TypeScript, Vue, тестирования и поддержания качества кода в проекте.
---

# Стандарты Кодирования

Этот документ описывает стандарты кодирования и соглашения для проекта Hatcher. Следование этим стандартам обеспечивает согласованность, поддерживаемость и высокое качество кода во всей кодовой базе.

> **📊 Статус Соответствия**: По состоянию на декабрь 2024 года наша кодовая база достигает **100% соответствия** этим стандартам после комплексного аудита и улучшений кода.

## Общие Принципы

### Качество Кода

- **Ясность, а не хитроумность**: Писать код, который легко читать и понимать
- **Согласованность**: Следовать установленным паттернам во всей кодовой базе
- **Поддерживаемость**: Писать код, который легко изменять и расширять
- **Производительность**: Учитывать влияние на производительность, но в первую очередь приоритизировать читаемость
- **Документация**: Весь код должен быть само-документированным с ясными комментариями при необходимости

### Языковые Стандарты

- **Только английский**: Все комментарии, документация и имена переменных должны быть на английском языке
- **Ясное именование**: Использовать описательные имена, которые ясно указывают на назначение
- **Без сокращений**: Избегать сокращений, кроме широко понимаемых (например, `API`, `URL`)

### Организация Файлов

- **Единая ответственность**: Каждый файл должен иметь единую, четко определенную цель
- **Логическая группировка**: Организовывать связанный функционал вместе
- **Ясное именование**: Использовать описательные имена, которые ясно указывают на назначение

## Стандарты Форматирования

### Стиль Кода (Принудительно через ESLint)

```typescript
// ✅ Хорошо: Одинарные кавычки, без точек с запятой, отступ в 2 пробела
const message = 'Hello World'
const config = {
  apiUrl: 'https://api.hatche.rs',
  timeout: 5000,
}

// ❌ Избегать: Двойные кавычки, точки с запятой, непоследовательные отступы
const message = "Hello World";
const config = {
    apiUrl: "https://api.hatche.rs",
    timeout: 5000;
};
```

### Обработка Ошибок

```typescript
// ✅ Хорошо: Описательная обработка ошибок
try {
  const result = await fetchUserData()
  return result
} catch (error) {
  console.error('Failed to fetch user data:', error)
  throw new Error(`User data fetch failed: ${error.message}`)
}

// ❌ Избегать: Общая обработка ошибок
try {
  const result = await fetchUserData()
  return result
} catch (e) {
  console.error(e)
  throw e
}
```

## Стандарты TypeScript

### Определения Типов

```typescript
// ✅ Хорошо: Использовать интерфейсы для форм объектов
interface UserData {
  id: string
  name: string
  email: string
  isActive: boolean
}

// ❌ Избегать: Псевдонимы типов для простых форм объектов
type UserData = {
  id: string
  name: string
}
```

### Соглашения по Именованию

```typescript
// ✅ Хорошо: PascalCase для типов, интерфейсов, классов
interface ApiResponse {}
class UserService {}
type ComponentProps = {}

// ✅ Хорошо: camelCase для переменных, функций, методов
const userName = 'john'
function getUserData() {}
const handleClick = () => {}

// ✅ Хорошо: SCREAMING_SNAKE_CASE для констант
const API_BASE_URL = 'https://api.hatche.rs'
const MAX_RETRY_ATTEMPTS = 3
```

### Дизайн Функций и Методов

```typescript
// ✅ Хорошо: Ясные сигнатуры функций с правильной типизацией
function processUserData(user: UserData): Promise<ProcessedUser> {
  // Реализация
}

// ✅ Хорошо: Использовать JSDoc для публичных API
/**
 * Генерирует модификации кода на основе визуальных выборок
 * @param selection - Выбранные DOM элементы
 * @param context - Текущий контекст проекта
 * @returns Promise, разрешающийся в сгенерированный код
 */
async function generateCodeFromSelection(
  selection: DOMSelection[],
  context: ProjectContext
): Promise<CodeModification[]> {
  // Реализация
}
```

## Стандарты Vue.js

### Структура Компонента

```vue
<!-- ✅ Хорошо: Использовать Composition API с <script setup> -->
<script setup lang="ts">
interface Props {
  title: string
  isVisible?: boolean
}

interface Emits {
  close: []
  submit: [data: FormData]
}

const props = withDefaults(defineProps<Props>(), {
  isVisible: true,
})

const emit = defineEmits<Emits>()

// Композиции в верхней части
const { user } = useAuth()
const { theme } = useTheme()

// Реактивные данные
const isLoading = ref(false)
const formData = reactive({
  name: '',
  email: '',
})

// Вычисляемые свойства
const isFormValid = computed(() => {
  return formData.name.length > 0 && formData.email.includes('@')
})

// Методы
function handleSubmit() {
  if (!isFormValid.value) return

  isLoading.value = true
  emit('submit', formData)
}
</script>

<template>
  <div v-if="isVisible" class="modal">
    <h2>{{ title }}</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Содержимое формы -->
    </form>
  </div>
</template>

<style scoped>
.modal {
  /* Стили */
}
</style>
```

## Стандарты Стилей

### CSS Архитектура

```scss
// ✅ Хорошо: Использовать CSS кастомные свойства для тем
:root {
  --hatcher-primary: #646cff;
  --hatcher-secondary: #42b883;
  --hatcher-background: #1a1a1a;
  --hatcher-text: #ffffff;

  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}

// ✅ Хорошо: Методология BEM для имен классов
.code-editor {
  /* Block */
}

.code-editor__toolbar {
  /* Element */
}

.code-editor__button {
  /* Element */
}

.code-editor__button--active {
  /* Modifier */
}
```

## Стандарты Тестирования

### Модульные Тесты

```typescript
// ✅ Хорошо: Описательная структура тестов
describe('useVisualSelection', () => {
  describe('startSelection', () => {
    it('should set isSelecting to true', () => {
      const { isSelecting, startSelection } = useVisualSelection()

      startSelection()

      expect(isSelecting.value).toBe(true)
    })
  })
})
```

## Стандарты Документации

### Комментарии к Коду

```typescript
// ✅ Хорошо: Объяснять ПОЧЕМУ, а не ЧТО
function calculateOptimalAIPrompt(context: ProjectContext): string {
  // Мы ограничиваем размер контекста для предотвращения переполнения токенов в AI моделях
  // при этом обеспечивая достаточно информации для точной генерации кода
  const maxContextSize = 4000

  if (context.size > maxContextSize) {
    return compressContext(context, maxContextSize)
  }

  return buildPrompt(context)
}
```

## Git Соглашения

### Сообщения Коммитов

Мы следуем [Conventional Commits](https://conventionalcommits.org/):

```bash
# ✅ Хорошо: Ясные, описательные сообщения коммитов
feat: add visual element selection to code generation
fix: resolve memory leak in AI response processing
docs: update installation guide for macOS
style: improve code formatting in user service
refactor: extract common AI prompt logic
```

## Применение

Эти стандарты применяются через:

- **ESLint**: Автоматизированная проверка стиля кода
- **TypeScript**: Безопасность типов и согласованность
- **Prettier**: Форматирование кода
- **Husky**: Pre-commit хуки
- **CI/CD**: Автоматизированное тестирование и линтинг

### Локальная Разработка

```bash
# Запустить линтинг
pnpm lint

# Исправить автоматически исправимые проблемы
pnpm lint:fix

# Проверка типов
pnpm typecheck

# Запустить тесты
pnpm test
```

Эти стандарты являются живыми документами, которые развиваются вместе с проектом и обратной связью сообщества.
