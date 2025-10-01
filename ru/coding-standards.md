# Стандарты кодирования

Этот документ описывает стандарты кодирования и соглашения для проекта Hatcher. Следование этим стандартам обеспечивает согласованность, поддерживаемость и высококачественный код во всей кодовой базе.

> **📊 Статус соответствия**: По состоянию на декабрь 2024 года наша кодовая база достигает **100% соответствия** этим стандартам после комплексного аудита и улучшений кода.

## Общие принципы

### Качество кода

- **Ясность важнее хитрости**: Пишите код, который легко читать и понимать
- **Согласованность**: Следуйте установленным паттернам во всей кодовой базе
- **Поддерживаемость**: Пишите код, который легко модифицировать и расширять
- **Производительность**: Учитывайте влияние на производительность, но сначала приоритизируйте читаемость
- **Документация**: Весь код должен быть самодокументирующимся с четкими комментариями при необходимости

### Языковые стандарты

- **Только английский**: Все комментарии, документация и имена переменных должны быть на английском
- **Четкое именование**: Используйте описательные имена, четко указывающие назначение
- **Никаких сокращений**: Избегайте сокращений, если они не широко понятны (например, `API`, `URL`)

### Организация файлов

- **Единая ответственность**: Каждый файл должен иметь единую, хорошо определенную цель
- **Логическая группировка**: Организуйте связанную функциональность вместе
- **Четкое именование**: Используйте описательные имена, четко указывающие назначение

## Стандарты форматирования

### Стиль кода (применяется ESLint)

```typescript
// ✅ Хорошо: Одинарные кавычки, без точек с запятой, отступ 2 пробела
const message = 'Hello World'
const config = {
  apiUrl: 'https://api.hatche.rs',
  timeout: 5000,
}

// ❌ Избегайте: Двойные кавычки, точки с запятой, непоследовательный отступ
const message = "Hello World";
const config = {
    apiUrl: "https://api.hatche.rs",
    timeout: 5000;
};
```

### Обработка ошибок

```typescript
// ✅ Хорошо: Описательная обработка ошибок
try {
  const result = await fetchUserData()
  return result
} catch (error) {
  console.error('Failed to fetch user data:', error)
  throw new Error(`User data fetch failed: ${error.message}`)
}

// ❌ Избегайте: Общая обработка ошибок
try {
  const result = await fetchUserData()
  return result
} catch (e) {
  console.error(e)
  throw e
}
```

## Общие принципы

### Качество кода

- **Ясность важнее хитрости**: Пишите код, который легко читать и понимать
- **Согласованность**: Следуйте установленным паттернам во всей кодовой базе
- **Поддерживаемость**: Пишите код, который легко модифицировать и расширять
- **Производительность**: Учитывайте влияние на производительность, но сначала приоритизируйте читаемость

### Организация файлов

- **Единая ответственность**: Каждый файл должен иметь единую, хорошо определенную цель
- **Логическая группировка**: Организуйте связанную функциональность вместе
- **Четкое именование**: Используйте описательные имена, четко указывающие назначение

## Стандарты TypeScript

### Определения типов

```typescript
// ✅ Хорошо: Используйте интерфейсы для форм объектов
interface UserData {
  id: string
  name: string
  email: string
  isActive: boolean
}

// ❌ Избегайте: Псевдонимы типов для простых форм объектов
type UserData = {
  id: string
  name: string
}
```

### Соглашения об именовании

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

### Дизайн функций и методов

```typescript
// ✅ Хорошо: Четкие сигнатуры функций с правильной типизацией
function processUserData(user: UserData): Promise<ProcessedUser> {
  // Реализация
}

// ✅ Хорошо: Используйте JSDoc для публичных API
/**
 * Генерирует модификации кода на основе визуальных выборов
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

### Обработка ошибок

```typescript
// ✅ Хорошо: Специфические типы ошибок
class ValidationError extends Error {
  constructor(field: string, value: unknown) {
    super(`Invalid value for field ${field}: ${value}`)
    this.name = 'ValidationError'
  }
}

// ✅ Хорошо: Правильная обработка ошибок в асинхронных функциях
async function saveUserData(user: UserData): Promise<SaveResult> {
  try {
    const result = await api.saveUser(user)
    return { success: true, data: result }
  } catch (error) {
    if (error instanceof ValidationError) {
      return { success: false, error: error.message }
    }
    throw error // Перебросить неожиданные ошибки
  }
}
```

## Стандарты Vue.js

### Структура компонента

```vue
<!-- ✅ Хорошо: Используйте Composition API с <script setup> -->
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

// Composables вверху
const { user } = useAuth()
const { theme } = useTheme()

// Реактивные данные
const isLoading = ref(false)
const formData = reactive({
  name: '',
  email: '',
})

// Computed свойства
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

### Именование компонентов

```typescript
// ✅ Хорошо: PascalCase для имен компонентов
export default defineComponent({
  name: 'UserProfileCard',
})

// ✅ Хорошо: Описательные имена файлов компонентов
UserProfileCard.vue
VisualSelectionPanel.vue
CodeGenerationModal.vue
```

### Props и события

```typescript
// ✅ Хорошо: Явные типы props со значениями по умолчанию
interface Props {
  modelValue: string
  placeholder?: string
  isRequired?: boolean
  maxLength?: number
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  isRequired: false,
  maxLength: 100,
})

// ✅ Хорошо: Описательные имена событий
interface Emits {
  'update:modelValue': [value: string]
  'selection-change': [selection: DOMElement[]]
  'code-generated': [code: string]
}
```

### Composables

```typescript
// ✅ Хорошо: Структура composable
export function useVisualSelection() {
  const selectedElements = ref<DOMElement[]>([])
  const isSelecting = ref(false)

  function startSelection() {
    isSelecting.value = true
    // Реализация
  }

  function endSelection() {
    isSelecting.value = false
    // Реализация
  }

  function clearSelection() {
    selectedElements.value = []
  }

  return {
    selectedElements: readonly(selectedElements),
    isSelecting: readonly(isSelecting),
    startSelection,
    endSelection,
    clearSelection,
  }
}
```

## Стандарты стилизации

### Архитектура CSS

```scss
// ✅ Хорошо: Используйте CSS custom properties для темизации
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
  /* Блок */
}

.code-editor__toolbar {
  /* Элемент */
}

.code-editor__button {
  /* Элемент */
}

.code-editor__button--active {
  /* Модификатор */
}
```

### Отзывчивый дизайн

```scss
// ✅ Хорошо: Подход mobile-first
.visual-panel {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  // Планшет
  @media (min-width: 768px) {
    flex-direction: row;
    gap: var(--spacing-md);
  }

  // Десктоп
  @media (min-width: 1024px) {
    gap: var(--spacing-lg);
  }
}
```

### Scoped стили

```vue
<style scoped>
/* ✅ Хорошо: Используйте scoped стили для компонентно-специфичной стилизации */
.component-specific {
  /* Это не утечет в другие компоненты */
}
</style>

<style>
/* ✅ Хорошо: Глобальные стили только при необходимости */
.hatcher-global-utility {
  /* Глобальный утилитарный класс */
}
</style>
```

## Стандарты тестирования

### Юнит-тесты

```typescript
// ✅ Хорошо: Описательная структура тестов
describe('useVisualSelection', () => {
  describe('startSelection', () => {
    it('should set isSelecting to true', () => {
      const { isSelecting, startSelection } = useVisualSelection()

      startSelection()

      expect(isSelecting.value).toBe(true)
    })

    it('should initialize empty selection array', () => {
      const { selectedElements, startSelection } = useVisualSelection()

      startSelection()

      expect(selectedElements.value).toHaveLength(0)
    })
  })

  describe('when elements are selected', () => {
    it('should track selected elements', () => {
      // Реализация теста
    })
  })
})
```

### Тесты компонентов

```typescript
// ✅ Хорошо: Тестируйте поведение компонента, а не реализацию
import { mount } from '@vue/test-utils'
import CodeGenerationModal from './CodeGenerationModal.vue'

describe('CodeGenerationModal', () => {
  it('should emit close event when close button is clicked', async () => {
    const wrapper = mount(CodeGenerationModal, {
      props: { isVisible: true },
    })

    await wrapper.find('[data-testid="close-button"]').trigger('click')

    expect(wrapper.emitted('close')).toHaveLength(1)
  })

  it('should display generated code when provided', () => {
    const code = 'const example = "test"'
    const wrapper = mount(CodeGenerationModal, {
      props: { generatedCode: code },
    })

    expect(wrapper.text()).toContain(code)
  })
})
```

## Стандарты документации

### Комментарии к коду

```typescript
// ✅ Хорошо: Объясняйте ПОЧЕМУ, а не ЧТО
function calculateOptimalAIPrompt(context: ProjectContext): string {
  // Мы ограничиваем размер контекста для предотвращения переполнения токенов в ИИ моделях
  // обеспечивая при этом достаточно информации для точной генерации кода
  const maxContextSize = 4000

  if (context.size > maxContextSize) {
    return compressContext(context, maxContextSize)
  }

  return buildPrompt(context)
}

// ✅ Хорошо: Документируйте сложные алгоритмы
/**
 * Реализует алгоритм Visual-to-Code Bridge
 *
 * Эта функция преобразует визуальные выборы DOM в структурированные
 * модификации кода путем:
 * 1. Анализа выбранных элементов и их отношений
 * 2. Определения соответствующих паттернов кода
 * 3. Генерации типобезопасных модификаций кода
 *
 * @complexity O(n * m) где n = выбранные элементы, m = паттерны кода
 */
function processVisualSelection(elements: DOMElement[]): CodeModification[] {
  // Реализация
}
```

### Документация README

````markdown
# Имя компонента

Краткое описание того, что делает этот компонент.

## Использование

```vue
<ComponentName :prop1="value1" :prop2="value2" @event1="handler1" />
```
````

## Props

| Prop | Тип | По умолчанию | Описание |
| --- | --- | --- | --- |
| prop1 | string | '' | Описание prop1 |
| prop2 | boolean | false | Описание prop2 |

## События

| Событие | Payload | Описание |
| --- | --- | --- |
| event1 | string | Эмитится когда... |

## Примеры

### Базовое использование

(Пример кода)

### Продвинутое использование

(Пример кода)

````

## Соглашения Git

### Сообщения коммитов
Мы следуем [Conventional Commits](https://conventionalcommits.org/):

```bash
# ✅ Хорошо: Четкие, описательные сообщения коммитов
feat: add visual element selection to code generation
fix: resolve memory leak in AI response processing
docs: update installation guide for macOS
style: improve code formatting in user service
refactor: extract common AI prompt logic
test: add unit tests for visual selection composable
chore: update dependencies to latest versions

# ✅ Хорошо: Включайте scope при полезности
feat(visual-bridge): implement drag-to-select functionality
fix(ai-engine): handle Claude API rate limiting
docs(playbooks): add examples for team configurations
````

### Именование веток

```bash
# ✅ Хорошо: Описательные имена веток
feature/visual-selection-ui
fix/ai-response-parsing
docs/coding-standards
refactor/composables-structure
```

## Руководства по производительности

### Размер бандла

- Предпочитайте tree-shaking дружественные импорты
- Используйте динамические импорты для больших зависимостей
- Мониторьте размер бандла в CI/CD

```typescript
// ✅ Хорошо: Tree-shakable импорты
import { ref, computed } from 'vue'
import { debounce } from 'lodash-es'

// ❌ Избегайте: Полные импорты библиотек
import * as vue from 'vue'
import _ from 'lodash'

// ✅ Хорошо: Динамические импорты для больших функций
const AdvancedEditor = defineAsyncComponent(
  () => import('./AdvancedEditor.vue')
)
```

### Управление памятью

```typescript
// ✅ Хорошо: Очищайте ресурсы
onUnmounted(() => {
  // Очистите слушатели событий
  window.removeEventListener('resize', handleResize)

  // Отмените ожидающие запросы
  abortController.abort()

  // Очистите таймеры
  clearInterval(intervalId)
})
```

## Стандарты интеграции ИИ

### Проектирование промптов

```typescript
// ✅ Хорошо: Структурированное построение промптов
function buildAIPrompt(context: ProjectContext): string {
  return [
    '# Code Generation Request',
    '',
    '## Context',
    `Framework: ${context.framework}`,
    `Component Type: ${context.componentType}`,
    '',
    '## Requirements',
    context.requirements.map((req) => `- ${req}`).join('\n'),
    '',
    '## Code Style',
    'Use TypeScript with strict mode',
    'Follow Vue 3 Composition API patterns',
    'Include proper error handling',
  ].join('\n')
}
```

### Обработка ошибок

```typescript
// ✅ Хорошо: Изящная деградация ИИ-сервиса
async function generateCode(prompt: string): Promise<CodeResult> {
  try {
    return await aiService.generate(prompt)
  } catch (error) {
    if (error instanceof RateLimitError) {
      // Откат к кешированным паттернам
      return generateFromPatterns(prompt)
    }

    if (error instanceof NetworkError) {
      // Предложите офлайн режим
      return {
        code: '',
        error: 'Offline mode - manual coding required',
      }
    }

    throw error
  }
}
```

## Применение

Эти стандарты применяются через:

- **ESLint**: Автоматизированная проверка стиля кода
- **TypeScript**: Типобезопасность и согласованность
- **Prettier**: Форматирование кода
- **Husky**: Хуки pre-commit
- **CI/CD**: Автоматизированное тестирование и линтинг

### Локальная разработка

```bash
# Запустить линтинг
pnpm lint

# Исправить автоисправляемые проблемы
pnpm lint:fix

# Проверка типов
pnpm typecheck

# Запустить тесты
pnpm test
```

## Вопросы и уточнения

По вопросам об этих стандартах или предложениям по улучшениям:

1. Откройте GitHub Discussion
2. Присоединяйтесь к нашему Discord сообществу
3. Создайте issue с меткой `standards`

Эти стандарты - живые документы, которые эволюционируют вместе с проектом и обратной связью сообщества.
