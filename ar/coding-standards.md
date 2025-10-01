# معايير البرمجة

يحدد هذا المستند معايير وقواعد البرمجة لمشروع Hatcher. اتباع هذه المعايير يضمن الاتساق والقابلية للصيانة والكود عالي الجودة عبر قاعدة الكود بأكملها.

> **📊 حالة الامتثال**: اعتباراً من ديسمبر 2024، تحقق قاعدة الكود لدينا **امتثالاً بنسبة 100%** لهذه المعايير بعد التدقيق الشامل وتحسينات الكود.

## المبادئ العامة

### جودة الكود

- **الوضوح على الذكاء**: اكتب كوداً سهل القراءة والفهم
- **الاتساق**: اتبع الأنماط المعتمدة في جميع أنحاء قاعدة الكود
- **قابلية الصيانة**: اكتب كوداً سهل التعديل والتوسيع
- **الأداء**: ضع في اعتبارك تداعيات الأداء، لكن أعط الأولوية لسهولة القراءة أولاً
- **التوثيق**: يجب أن يكون كل الكود موثقاً ذاتياً مع تعليقات واضحة عند الضرورة

### معايير اللغة

- **الإنجليزية فقط**: يجب أن تكون جميع التعليقات والوثائق وأسماء المتغيرات بالإنجليزية
- **أسماء واضحة**: استخدم أسماء وصفية تشير بوضوح إلى الغرض
- **لا اختصارات**: تجنب الاختصارات ما لم تكن مفهومة على نطاق واسع (مثل `API`، `URL`)

### تنظيم الملفات

- **مسؤولية واحدة**: يجب أن يكون لكل ملف غرض واحد محدد بوضوح
- **التجميع المنطقي**: نظم الوظائف ذات الصلة معاً
- **أسماء واضحة**: استخدم أسماء وصفية تشير بوضوح إلى الغرض

## معايير التنسيق

### نمط الكود (مُطبّق بواسطة ESLint)

```typescript
// ✅ جيد: علامات اقتباس فردية، بدون فواصل منقوطة، مسافة بادئة بمسافتين
const message = 'Hello World'
const config = {
  apiUrl: 'https://api.hatche.rs',
  timeout: 5000,
}

// ❌ تجنب: علامات اقتباس مزدوجة، فواصل منقوطة، مسافة بادئة غير متسقة
const message = "Hello World";
const config = {
    apiUrl: "https://api.hatche.rs",
    timeout: 5000;
};
```

### معالجة الأخطاء

```typescript
// ✅ جيد: معالجة أخطاء وصفية
try {
  const result = await fetchUserData()
  return result
} catch (error) {
  console.error('Failed to fetch user data:', error)
  throw new Error(`User data fetch failed: ${error.message}`)
}

// ❌ تجنب: معالجة أخطاء عامة
try {
  const result = await fetchUserData()
  return result
} catch (e) {
  console.error(e)
  throw e
}
```

## المبادئ العامة

### جودة الكود

- **الوضوح على الذكاء**: اكتب كوداً سهل القراءة والفهم
- **الاتساق**: اتبع الأنماط المعتمدة في جميع أنحاء قاعدة الكود
- **قابلية الصيانة**: اكتب كوداً سهل التعديل والتوسيع
- **الأداء**: ضع في اعتبارك تداعيات الأداء، لكن أعط الأولوية لسهولة القراءة أولاً

### تنظيم الملفات

- **مسؤولية واحدة**: يجب أن يكون لكل ملف غرض واحد محدد بوضوح
- **التجميع المنطقي**: نظم الوظائف ذات الصلة معاً
- **أسماء واضحة**: استخدم أسماء وصفية تشير بوضوح إلى الغرض

## معايير TypeScript

### تعريفات الأنواع

```typescript
// ✅ جيد: استخدم الواجهات لأشكال الكائنات
interface UserData {
  id: string
  name: string
  email: string
  isActive: boolean
}

// ❌ تجنب: أسماء مستعارة للأنواع لأشكال الكائنات البسيطة
type UserData = {
  id: string
  name: string
}
```

### اصطلاحات التسمية

```typescript
// ✅ جيد: PascalCase للأنواع والواجهات والفئات
interface ApiResponse {}
class UserService {}
type ComponentProps = {}

// ✅ جيد: camelCase للمتغيرات والدوال والطرق
const userName = 'john'
function getUserData() {}
const handleClick = () => {}

// ✅ جيد: SCREAMING_SNAKE_CASE للثوابت
const API_BASE_URL = 'https://api.hatche.rs'
const MAX_RETRY_ATTEMPTS = 3
```

### تصميم الدوال والطرق

```typescript
// ✅ جيد: توقيعات دوال واضحة مع كتابة صحيحة
function processUserData(user: UserData): Promise<ProcessedUser> {
  // Implementation
}

// ✅ جيد: استخدم JSDoc للواجهات البرمجية العامة
/**
 * Generates code modifications based on visual selections
 * @param selection - The selected DOM elements
 * @param context - The current project context
 * @returns Promise resolving to generated code
 */
async function generateCodeFromSelection(
  selection: DOMSelection[],
  context: ProjectContext
): Promise<CodeModification[]> {
  // Implementation
}
```

### معالجة الأخطاء

```typescript
// ✅ جيد: أنواع أخطاء محددة
class ValidationError extends Error {
  constructor(field: string, value: unknown) {
    super(`Invalid value for field ${field}: ${value}`)
    this.name = 'ValidationError'
  }
}

// ✅ جيد: معالجة أخطاء صحيحة في الدوال غير المتزامنة
async function saveUserData(user: UserData): Promise<SaveResult> {
  try {
    const result = await api.saveUser(user)
    return { success: true, data: result }
  } catch (error) {
    if (error instanceof ValidationError) {
      return { success: false, error: error.message }
    }
    throw error // Re-throw unexpected errors
  }
}
```

## معايير Vue.js

### بنية المكون

```vue
<!-- ✅ جيد: استخدم Composition API مع <script setup> -->
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

// Composables at the top
const { user } = useAuth()
const { theme } = useTheme()

// Reactive data
const isLoading = ref(false)
const formData = reactive({
  name: '',
  email: '',
})

// Computed properties
const isFormValid = computed(() => {
  return formData.name.length > 0 && formData.email.includes('@')
})

// Methods
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
      <!-- Form content -->
    </form>
  </div>
</template>

<style scoped>
.modal {
  /* Styles */
}
</style>
```

### تسمية المكونات

```typescript
// ✅ جيد: PascalCase لأسماء المكونات
export default defineComponent({
  name: 'UserProfileCard',
})

// ✅ جيد: أسماء ملفات مكونات وصفية
UserProfileCard.vue
VisualSelectionPanel.vue
CodeGenerationModal.vue
```

### الخصائص والأحداث

```typescript
// ✅ جيد: أنواع خصائص صريحة مع قيم افتراضية
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

// ✅ جيد: أسماء أحداث وصفية
interface Emits {
  'update:modelValue': [value: string]
  'selection-change': [selection: DOMElement[]]
  'code-generated': [code: string]
}
```

### Composables

```typescript
// ✅ جيد: بنية Composable
export function useVisualSelection() {
  const selectedElements = ref<DOMElement[]>([])
  const isSelecting = ref(false)

  function startSelection() {
    isSelecting.value = true
    // Implementation
  }

  function endSelection() {
    isSelecting.value = false
    // Implementation
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

## معايير التنسيق

### بنية CSS

```scss
// ✅ جيد: استخدم خصائص CSS المخصصة للسمات
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

// ✅ جيد: منهجية BEM لأسماء الفئات
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

### التصميم المستجيب

```scss
// ✅ جيد: نهج الهاتف المحمول أولاً
.visual-panel {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  // Tablet
  @media (min-width: 768px) {
    flex-direction: row;
    gap: var(--spacing-md);
  }

  // Desktop
  @media (min-width: 1024px) {
    gap: var(--spacing-lg);
  }
}
```

### الأنماط المحددة النطاق

```vue
<style scoped>
/* ✅ جيد: استخدم الأنماط المحددة النطاق للتنسيق الخاص بالمكون */
.component-specific {
  /* This won't leak to other components */
}
</style>

<style>
/* ✅ جيد: الأنماط العامة فقط عند الضرورة */
.hatcher-global-utility {
  /* Global utility class */
}
</style>
```

## معايير الاختبار

### اختبارات الوحدة

```typescript
// ✅ جيد: بنية اختبار وصفية
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
      // Test implementation
    })
  })
})
```

### اختبارات المكونات

```typescript
// ✅ جيد: اختبر سلوك المكون، وليس التنفيذ
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

## معايير التوثيق

### تعليقات الكود

```typescript
// ✅ جيد: اشرح لماذا، وليس ماذا
function calculateOptimalAIPrompt(context: ProjectContext): string {
  // We limit context size to prevent token overflow in AI models
  // while ensuring enough information for accurate code generation
  const maxContextSize = 4000

  if (context.size > maxContextSize) {
    return compressContext(context, maxContextSize)
  }

  return buildPrompt(context)
}

// ✅ جيد: وثق الخوارزميات المعقدة
/**
 * Implements the Visual-to-Code Bridge algorithm
 *
 * This function converts visual DOM selections into structured
 * code modifications by:
 * 1. Analyzing selected elements and their relationships
 * 2. Determining the appropriate code patterns
 * 3. Generating type-safe code modifications
 *
 * @complexity O(n * m) where n = selected elements, m = code patterns
 */
function processVisualSelection(elements: DOMElement[]): CodeModification[] {
  // Implementation
}
```

### توثيق README

````markdown
# اسم المكون

وصف موجز لما يفعله هذا المكون.

## الاستخدام

```vue
<ComponentName :prop1="value1" :prop2="value2" @event1="handler1" />
```
````

## الخصائص

| الخاصية | النوع | الافتراضي | الوصف |
| ----- | ------- | ------- | -------------------- |
| prop1 | string  | ''      | وصف prop1 |
| prop2 | boolean | false   | وصف prop2 |

## الأحداث

| الحدث | البيانات | الوصف |
| ------ | ------- | --------------- |
| event1 | string  | يُصدر عندما... |

## أمثلة

### الاستخدام الأساسي

(مثال على الكود)

### الاستخدام المتقدم

(مثال على الكود)

````

## اصطلاحات Git

### رسائل Commit
نتبع [Conventional Commits](https://conventionalcommits.org/):

```bash
# ✅ جيد: رسائل commit واضحة ووصفية
feat: add visual element selection to code generation
fix: resolve memory leak in AI response processing
docs: update installation guide for macOS
style: improve code formatting in user service
refactor: extract common AI prompt logic
test: add unit tests for visual selection composable
chore: update dependencies to latest versions

# ✅ جيد: قم بتضمين النطاق عند المساعدة
feat(visual-bridge): implement drag-to-select functionality
fix(ai-engine): handle Claude API rate limiting
docs(playbooks): add examples for team configurations
````

### تسمية الفروع

```bash
# ✅ جيد: أسماء فروع وصفية
feature/visual-selection-ui
fix/ai-response-parsing
docs/coding-standards
refactor/composables-structure
```

## إرشادات الأداء

### حجم الحزمة

- فضل الاستيرادات الصديقة لـ tree-shaking
- استخدم الاستيرادات الديناميكية للتبعيات الكبيرة
- راقب حجم الحزمة في CI/CD

```typescript
// ✅ جيد: استيرادات قابلة لـ tree-shaking
import { ref, computed } from 'vue'
import { debounce } from 'lodash-es'

// ❌ تجنب: استيرادات المكتبة الكاملة
import * as vue from 'vue'
import _ from 'lodash'

// ✅ جيد: استيرادات ديناميكية للميزات الكبيرة
const AdvancedEditor = defineAsyncComponent(
  () => import('./AdvancedEditor.vue')
)
```

### إدارة الذاكرة

```typescript
// ✅ جيد: تنظيف الموارد
onUnmounted(() => {
  // Clean up event listeners
  window.removeEventListener('resize', handleResize)

  // Cancel pending requests
  abortController.abort()

  // Clear timers
  clearInterval(intervalId)
})
```

## معايير تكامل الذكاء الاصطناعي

### هندسة المطالبات

```typescript
// ✅ جيد: بناء مطالبة منظمة
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

### معالجة الأخطاء

```typescript
// ✅ جيد: انخفاض رشيق لخدمة الذكاء الاصطناعي
async function generateCode(prompt: string): Promise<CodeResult> {
  try {
    return await aiService.generate(prompt)
  } catch (error) {
    if (error instanceof RateLimitError) {
      // Fall back to cached patterns
      return generateFromPatterns(prompt)
    }

    if (error instanceof NetworkError) {
      // Offer offline mode
      return {
        code: '',
        error: 'Offline mode - manual coding required',
      }
    }

    throw error
  }
}
```

## التطبيق

يتم تطبيق هذه المعايير من خلال:

- **ESLint**: فحص نمط الكود الآلي
- **TypeScript**: أمان الأنواع والاتساق
- **Prettier**: تنسيق الكود
- **Husky**: خطافات ما قبل الالتزام
- **CI/CD**: الاختبار والتحقق الآلي

### التطوير المحلي

```bash
# تشغيل التحقق
pnpm lint

# إصلاح المشكلات القابلة للإصلاح التلقائي
pnpm lint:fix

# فحص الأنواع
pnpm typecheck

# تشغيل الاختبارات
pnpm test
```

## الأسئلة والتوضيحات

للأسئلة حول هذه المعايير أو اقتراحات للتحسينات:

1. افتح نقاش GitHub
2. انضم إلى مجتمع Discord الخاص بنا
3. أنشئ مشكلة مع تسمية `standards`

هذه المعايير هي وثائق حية تتطور مع المشروع وملاحظات المجتمع.
