# Coding Standards

यह दस्तावेज़ Hatcher परियोजना के लिए कोडिंग मानकों और परंपराओं की रूपरेखा देता है। इन मानकों का पालन करना पूरे कोडबेस में स्थिरता, रखरखाव और उच्च-गुणवत्ता कोड सुनिश्चित करता है।

> **📊 अनुपालन स्थिति**: दिसंबर 2024 तक, व्यापक ऑडिटिंग और कोड सुधार के बाद हमारा कोडबेस इन मानकों के साथ **100% अनुपालन** प्राप्त करता है।

## सामान्य सिद्धांत

### कोड गुणवत्ता

- **स्पष्टता चतुराई से ऊपर**: ऐसा कोड लिखें जो पढ़ने और समझने में आसान हो
- **स्थिरता**: पूरे कोडबेस में स्थापित पैटर्न का पालन करें
- **रखरखाव**: ऐसा कोड लिखें जो संशोधित करने और विस्तारित करने में आसान हो
- **प्रदर्शन**: प्रदर्शन प्रभावों पर विचार करें, लेकिन पहले पठनीयता को प्राथमिकता दें
- **दस्तावेज़ीकरण**: सभी कोड आवश्यक होने पर स्पष्ट टिप्पणियों के साथ स्व-प्रलेखन होना चाहिए

### भाषा मानक

- **केवल अंग्रेजी**: सभी टिप्पणियां, दस्तावेज़ीकरण और चर नाम अंग्रेजी में होने चाहिए
- **स्पष्ट नामकरण**: वर्णनात्मक नाम का उपयोग करें जो स्पष्ट रूप से उद्देश्य इंगित करते हैं
- **कोई संक्षिप्त रूप नहीं**: संक्षिप्त रूपों से बचें जब तक कि वे व्यापक रूप से समझे नहीं जाते (जैसे, `API`, `URL`)

### फ़ाइल संगठन

- **एकल जिम्मेदारी**: प्रत्येक फ़ाइल का एकल, अच्छी तरह से परिभाषित उद्देश्य होना चाहिए
- **तार्किक समूहन**: संबंधित कार्यक्षमता को एक साथ व्यवस्थित करें
- **स्पष्ट नामकरण**: वर्णनात्मक नाम का उपयोग करें जो स्पष्ट रूप से उद्देश्य इंगित करते हैं

## फॉर्मेटिंग मानक

### कोड शैली (ESLint द्वारा लागू)

```typescript
// ✅ अच्छा: एकल उद्धरण, कोई अर्धविराम नहीं, 2-स्पेस इंडेंटेशन
const message = 'Hello World'
const config = {
  apiUrl: 'https://api.hatche.rs',
  timeout: 5000,
}

// ❌ बचें: दोहरे उद्धरण, अर्धविराम, असंगत इंडेंटेशन
const message = "Hello World";
const config = {
    apiUrl: "https://api.hatche.rs",
    timeout: 5000;
};
```

### त्रुटि प्रबंधन

```typescript
// ✅ अच्छा: वर्णनात्मक त्रुटि प्रबंधन
try {
  const result = await fetchUserData()
  return result
} catch (error) {
  console.error('Failed to fetch user data:', error)
  throw new Error(`User data fetch failed: ${error.message}`)
}

// ❌ बचें: सामान्य त्रुटि प्रबंधन
try {
  const result = await fetchUserData()
  return result
} catch (e) {
  console.error(e)
  throw e
}
```

## सामान्य सिद्धांत

### कोड गुणवत्ता

- **स्पष्टता चतुराई से ऊपर**: ऐसा कोड लिखें जो पढ़ने और समझने में आसान हो
- **स्थिरता**: पूरे कोडबेस में स्थापित पैटर्न का पालन करें
- **रखरखाव**: ऐसा कोड लिखें जो संशोधित करने और विस्तारित करने में आसान हो
- **प्रदर्शन**: प्रदर्शन प्रभावों पर विचार करें, लेकिन पहले पठनीयता को प्राथमिकता दें

### फ़ाइल संगठन

- **एकल जिम्मेदारी**: प्रत्येक फ़ाइल का एकल, अच्छी तरह से परिभाषित उद्देश्य होना चाहिए
- **तार्किक समूहन**: संबंधित कार्यक्षमता को एक साथ व्यवस्थित करें
- **स्पष्ट नामकरण**: वर्णनात्मक नाम का उपयोग करें जो स्पष्ट रूप से उद्देश्य इंगित करते हैं

## TypeScript मानक

### टाइप परिभाषाएं

```typescript
// ✅ अच्छा: ऑब्जेक्ट आकारों के लिए इंटरफेस का उपयोग करें
interface UserData {
  id: string
  name: string
  email: string
  isActive: boolean
}

// ❌ बचें: सरल ऑब्जेक्ट आकारों के लिए टाइप उपनाम
type UserData = {
  id: string
  name: string
}
```

### नामकरण परंपराएं

```typescript
// ✅ अच्छा: टाइप, इंटरफेस, क्लासेज के लिए PascalCase
interface ApiResponse {}
class UserService {}
type ComponentProps = {}

// ✅ अच्छा: वेरिएबल, फ़ंक्शन, मेथड के लिए camelCase
const userName = 'john'
function getUserData() {}
const handleClick = () => {}

// ✅ अच्छा: स्थिरांकों के लिए SCREAMING_SNAKE_CASE
const API_BASE_URL = 'https://api.hatche.rs'
const MAX_RETRY_ATTEMPTS = 3
```

### फ़ंक्शन और मेथड डिजाइन

```typescript
// ✅ अच्छा: उचित टाइपिंग के साथ स्पष्ट फ़ंक्शन हस्ताक्षर
function processUserData(user: UserData): Promise<ProcessedUser> {
  // Implementation
}

// ✅ अच्छा: सार्वजनिक APIs के लिए JSDoc का उपयोग करें
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

### त्रुटि प्रबंधन

```typescript
// ✅ अच्छा: विशिष्ट त्रुटि प्रकार
class ValidationError extends Error {
  constructor(field: string, value: unknown) {
    super(`Invalid value for field ${field}: ${value}`)
    this.name = 'ValidationError'
  }
}

// ✅ अच्छा: async फ़ंक्शन में उचित त्रुटि प्रबंधन
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

## Vue.js मानक

### घटक संरचना

```vue
<!-- ✅ अच्छा: <script setup> के साथ Composition API का उपयोग करें -->
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

### घटक नामकरण

```typescript
// ✅ अच्छा: घटक नामों के लिए PascalCase
export default defineComponent({
  name: 'UserProfileCard',
})

// ✅ अच्छा: वर्णनात्मक घटक फ़ाइल नाम
UserProfileCard.vue
VisualSelectionPanel.vue
CodeGenerationModal.vue
```

### Props और Events

```typescript
// ✅ अच्छा: डिफ़ॉल्ट के साथ स्पष्ट prop टाइप
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

// ✅ अच्छा: वर्णनात्मक इवेंट नाम
interface Emits {
  'update:modelValue': [value: string]
  'selection-change': [selection: DOMElement[]]
  'code-generated': [code: string]
}
```

### Composables

```typescript
// ✅ अच्छा: Composable संरचना
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

## स्टाइलिंग मानक

### CSS आर्किटेक्चर

```scss
// ✅ अच्छा: थीमिंग के लिए CSS कस्टम गुणों का उपयोग करें
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

// ✅ अच्छा: वर्ग नामों के लिए BEM पद्धति
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

### रिस्पॉन्सिव डिजाइन

```scss
// ✅ अच्छा: मोबाइल-फर्स्ट दृष्टिकोण
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

### Scoped Styles

```vue
<style scoped>
/* ✅ अच्छा: घटक-विशिष्ट स्टाइलिंग के लिए scoped styles का उपयोग करें */
.component-specific {
  /* This won't leak to other components */
}
</style>

<style>
/* ✅ अच्छा: केवल आवश्यक होने पर वैश्विक शैलियाँ */
.hatcher-global-utility {
  /* Global utility class */
}
</style>
```

## परीक्षण मानक

### यूनिट टेस्ट

```typescript
// ✅ अच्छा: वर्णनात्मक परीक्षण संरचना
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

### घटक परीक्षण

```typescript
// ✅ अच्छा: घटक व्यवहार का परीक्षण करें, कार्यान्वयन का नहीं
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

## दस्तावेज़ीकरण मानक

### कोड टिप्पणियां

```typescript
// ✅ अच्छा: क्यों समझाएं, क्या नहीं
function calculateOptimalAIPrompt(context: ProjectContext): string {
  // We limit context size to prevent token overflow in AI models
  // while ensuring enough information for accurate code generation
  const maxContextSize = 4000

  if (context.size > maxContextSize) {
    return compressContext(context, maxContextSize)
  }

  return buildPrompt(context)
}

// ✅ अच्छा: जटिल एल्गोरिदम का दस्तावेज़ीकरण करें
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

### README दस्तावेज़ीकरण

````markdown
# Component Name

Brief description of what this component does.

## Usage

```vue
<ComponentName :prop1="value1" :prop2="value2" @event1="handler1" />
```
````

## Props

| Prop  | Type    | Default | Description          |
| ----- | ------- | ------- | -------------------- |
| prop1 | string  | ''      | Description of prop1 |
| prop2 | boolean | false   | Description of prop2 |

## Events

| Event  | Payload | Description     |
| ------ | ------- | --------------- |
| event1 | string  | Emitted when... |

## Examples

### Basic Usage

(Example code)

### Advanced Usage

(Example code)

````

## Git परंपराएं

### Commit संदेश
हम [Conventional Commits](https://conventionalcommits.org/) का पालन करते हैं:

```bash
# ✅ अच्छा: स्पष्ट, वर्णनात्मक commit संदेश
feat: add visual element selection to code generation
fix: resolve memory leak in AI response processing
docs: update installation guide for macOS
style: improve code formatting in user service
refactor: extract common AI prompt logic
test: add unit tests for visual selection composable
chore: update dependencies to latest versions

# ✅ अच्छा: सहायक होने पर scope शामिल करें
feat(visual-bridge): implement drag-to-select functionality
fix(ai-engine): handle Claude API rate limiting
docs(playbooks): add examples for team configurations
````

### शाखा नामकरण

```bash
# ✅ अच्छा: वर्णनात्मक शाखा नाम
feature/visual-selection-ui
fix/ai-response-parsing
docs/coding-standards
refactor/composables-structure
```

## प्रदर्शन दिशानिर्देश

### बंडल आकार

- tree-shaking अनुकूल आयात को प्राथमिकता दें
- बड़े निर्भरता के लिए गतिशील आयात का उपयोग करें
- CI/CD में बंडल आकार की निगरानी करें

```typescript
// ✅ अच्छा: Tree-shakable आयात
import { ref, computed } from 'vue'
import { debounce } from 'lodash-es'

// ❌ बचें: पूर्ण लाइब्रेरी आयात
import * as vue from 'vue'
import _ from 'lodash'

// ✅ अच्छा: बड़े फीचर्स के लिए गतिशील आयात
const AdvancedEditor = defineAsyncComponent(
  () => import('./AdvancedEditor.vue')
)
```

### मेमोरी प्रबंधन

```typescript
// ✅ अच्छा: संसाधन साफ करें
onUnmounted(() => {
  // Clean up event listeners
  window.removeEventListener('resize', handleResize)

  // Cancel pending requests
  abortController.abort()

  // Clear timers
  clearInterval(intervalId)
})
```

## AI एकीकरण मानक

### Prompt इंजीनियरिंग

```typescript
// ✅ अच्छा: संरचित prompt निर्माण
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

### त्रुटि प्रबंधन

```typescript
// ✅ अच्छा: सुंदर AI सेवा अवनति
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

## प्रवर्तन

इन मानकों को इसके माध्यम से लागू किया जाता है:

- **ESLint**: स्वचालित कोड शैली जांच
- **TypeScript**: टाइप सुरक्षा और स्थिरता
- **Prettier**: कोड फॉर्मेटिंग
- **Husky**: Pre-commit hooks
- **CI/CD**: स्वचालित परीक्षण और linting

### स्थानीय विकास

```bash
# Run linting
pnpm lint

# Fix auto-fixable issues
pnpm lint:fix

# Type checking
pnpm typecheck

# Run tests
pnpm test
```

## प्रश्न और स्पष्टीकरण

इन मानकों के बारे में प्रश्नों या सुधार के सुझावों के लिए:

1. GitHub Discussion खोलें
2. हमारे Discord समुदाय में शामिल हों
3. `standards` लेबल के साथ एक issue बनाएं

ये मानक जीवित दस्तावेज़ हैं जो परियोजना और समुदाय प्रतिक्रिया के साथ विकसित होते हैं।
