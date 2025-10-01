# Standar Coding

Dokumen ini menguraikan standar dan konvensi coding untuk proyek Hatcher. Mengikuti standar ini memastikan konsistensi, maintainability, dan kode berkualitas tinggi di seluruh codebase.

> **📊 Status Kepatuhan**: Per Desember 2024, codebase kami mencapai **100% kepatuhan** dengan standar ini setelah auditing komprehensif dan perbaikan kode.

## Prinsip Umum

### Kualitas Kode

- **Kejelasan di atas kepintaran**: Tulis kode yang mudah dibaca dan dipahami
- **Konsistensi**: Ikuti pola yang telah ditetapkan di seluruh codebase
- **Maintainability**: Tulis kode yang mudah dimodifikasi dan diperluas
- **Performa**: Pertimbangkan implikasi performa, tetapi prioritaskan keterbacaan terlebih dahulu
- **Dokumentasi**: Semua kode harus self-documenting dengan komentar yang jelas bila diperlukan

### Standar Bahasa

- **Hanya Bahasa Inggris**: Semua komentar, dokumentasi, dan nama variabel harus dalam bahasa Inggris
- **Penamaan yang Jelas**: Gunakan nama deskriptif yang dengan jelas menunjukkan tujuan
- **Tanpa Singkatan**: Hindari singkatan kecuali sudah dipahami secara luas (mis., `API`, `URL`)

### Organisasi File

- **Single Responsibility**: Setiap file harus memiliki tujuan tunggal yang terdefinisi dengan baik
- **Pengelompokan Logis**: Organisasikan fungsionalitas terkait bersama-sama
- **Penamaan yang Jelas**: Gunakan nama deskriptif yang dengan jelas menunjukkan tujuan

## Standar Format

### Code Style (Ditegakkan oleh ESLint)

```typescript
// ✅ Baik: Single quotes, tanpa semicolon, indentasi 2 spasi
const message = 'Hello World'
const config = {
  apiUrl: 'https://api.hatche.rs',
  timeout: 5000,
}

// ❌ Hindari: Double quotes, semicolons, indentasi tidak konsisten
const message = "Hello World";
const config = {
    apiUrl: "https://api.hatche.rs",
    timeout: 5000;
};
```

### Penanganan Error

```typescript
// ✅ Baik: Penanganan error deskriptif
try {
  const result = await fetchUserData()
  return result
} catch (error) {
  console.error('Failed to fetch user data:', error)
  throw new Error(`User data fetch failed: ${error.message}`)
}

// ❌ Hindari: Penanganan error generik
try {
  const result = await fetchUserData()
  return result
} catch (e) {
  console.error(e)
  throw e
}
```

## Standar TypeScript

### Definisi Tipe

```typescript
// ✅ Baik: Gunakan interfaces untuk bentuk objek
interface UserData {
  id: string
  name: string
  email: string
  isActive: boolean
}

// ❌ Hindari: Type aliases untuk bentuk objek sederhana
type UserData = {
  id: string
  name: string
}
```

### Konvensi Penamaan

```typescript
// ✅ Baik: PascalCase untuk types, interfaces, classes
interface ApiResponse {}
class UserService {}
type ComponentProps = {}

// ✅ Baik: camelCase untuk variables, functions, methods
const userName = 'john'
function getUserData() {}
const handleClick = () => {}

// ✅ Baik: SCREAMING_SNAKE_CASE untuk constants
const API_BASE_URL = 'https://api.hatche.rs'
const MAX_RETRY_ATTEMPTS = 3
```

### Desain Fungsi dan Method

```typescript
// ✅ Baik: Signature fungsi yang jelas dengan typing yang tepat
function processUserData(user: UserData): Promise<ProcessedUser> {
  // Implementation
}

// ✅ Baik: Gunakan JSDoc untuk API publik
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

### Penanganan Error

```typescript
// ✅ Baik: Tipe error spesifik
class ValidationError extends Error {
  constructor(field: string, value: unknown) {
    super(`Invalid value for field ${field}: ${value}`)
    this.name = 'ValidationError'
  }
}

// ✅ Baik: Penanganan error yang tepat dalam fungsi async
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

## Standar Vue.js

### Struktur Komponen

```vue
<!-- ✅ Baik: Gunakan Composition API dengan <script setup> -->
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

// Composables di bagian atas
const { user } = useAuth()
const { theme } = useTheme()

// Data reaktif
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

### Penamaan Komponen

```typescript
// ✅ Baik: PascalCase untuk nama komponen
export default defineComponent({
  name: 'UserProfileCard',
})

// ✅ Baik: Nama file komponen deskriptif
UserProfileCard.vue
VisualSelectionPanel.vue
CodeGenerationModal.vue
```

### Props dan Events

```typescript
// ✅ Baik: Tipe prop eksplisit dengan defaults
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

// ✅ Baik: Nama event deskriptif
interface Emits {
  'update:modelValue': [value: string]
  'selection-change': [selection: DOMElement[]]
  'code-generated': [code: string]
}
```

### Composables

```typescript
// ✅ Baik: Struktur composable
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

## Standar Styling

### Arsitektur CSS

```scss
// ✅ Baik: Gunakan CSS custom properties untuk theming
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

// ✅ Baik: Metodologi BEM untuk nama class
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

### Desain Responsif

```scss
// ✅ Baik: Pendekatan mobile-first
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
/* ✅ Baik: Gunakan scoped styles untuk styling spesifik komponen */
.component-specific {
  /* Ini tidak akan bocor ke komponen lain */
}
</style>

<style>
/* ✅ Baik: Global styles hanya bila diperlukan */
.hatcher-global-utility {
  /* Global utility class */
}
</style>
```

## Standar Testing

### Unit Tests

```typescript
// ✅ Baik: Struktur test deskriptif
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

### Component Tests

```typescript
// ✅ Baik: Test perilaku komponen, bukan implementasi
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

## Standar Dokumentasi

### Komentar Kode

```typescript
// ✅ Baik: Jelaskan MENGAPA, bukan APA
function calculateOptimalAIPrompt(context: ProjectContext): string {
  // Kami membatasi ukuran konteks untuk mencegah token overflow dalam model AI
  // sambil memastikan informasi yang cukup untuk pembuatan kode yang akurat
  const maxContextSize = 4000

  if (context.size > maxContextSize) {
    return compressContext(context, maxContextSize)
  }

  return buildPrompt(context)
}

// ✅ Baik: Dokumentasikan algoritma kompleks
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

## Konvensi Git

### Pesan Commit

Kami mengikuti [Conventional Commits](https://conventionalcommits.org/):

```bash
# ✅ Baik: Pesan commit yang jelas dan deskriptif
feat: add visual element selection to code generation
fix: resolve memory leak in AI response processing
docs: update installation guide for macOS
style: improve code formatting in user service
refactor: extract common AI prompt logic
test: add unit tests for visual selection composable
chore: update dependencies to latest versions

# ✅ Baik: Sertakan scope bila membantu
feat(visual-bridge): implement drag-to-select functionality
fix(ai-engine): handle Claude API rate limiting
docs(playbooks): add examples for team configurations
```

### Penamaan Branch

```bash
# ✅ Baik: Nama branch deskriptif
feature/visual-selection-ui
fix/ai-response-parsing
docs/coding-standards
refactor/composables-structure
```

## Pedoman Performa

### Ukuran Bundle

- Lebih suka import yang ramah tree-shaking
- Gunakan dynamic imports untuk dependensi besar
- Pantau ukuran bundle di CI/CD

```typescript
// ✅ Baik: Import yang dapat di-tree-shake
import { ref, computed } from 'vue'
import { debounce } from 'lodash-es'

// ❌ Hindari: Import library lengkap
import * as vue from 'vue'
import _ from 'lodash'

// ✅ Baik: Dynamic imports untuk fitur besar
const AdvancedEditor = defineAsyncComponent(
  () => import('./AdvancedEditor.vue')
)
```

### Manajemen Memori

```typescript
// ✅ Baik: Bersihkan sumber daya
onUnmounted(() => {
  // Bersihkan event listeners
  window.removeEventListener('resize', handleResize)

  // Batalkan pending requests
  abortController.abort()

  // Hapus timers
  clearInterval(intervalId)
})
```

## Standar Integrasi AI

### Prompt Engineering

```typescript
// ✅ Baik: Pembuatan prompt terstruktur
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

### Penanganan Error

```typescript
// ✅ Baik: Degradasi layanan AI yang anggun
async function generateCode(prompt: string): Promise<CodeResult> {
  try {
    return await aiService.generate(prompt)
  } catch (error) {
    if (error instanceof RateLimitError) {
      // Fall back ke cached patterns
      return generateFromPatterns(prompt)
    }

    if (error instanceof NetworkError) {
      // Tawarkan mode offline
      return {
        code: '',
        error: 'Offline mode - manual coding required',
      }
    }

    throw error
  }
}
```

## Penegakan

Standar ini ditegakkan melalui:

- **ESLint**: Pemeriksaan gaya kode otomatis
- **TypeScript**: Type safety dan konsistensi
- **Prettier**: Format kode
- **Husky**: Pre-commit hooks
- **CI/CD**: Testing dan linting otomatis

### Pengembangan Lokal

```bash
# Jalankan linting
pnpm lint

# Perbaiki masalah yang dapat diperbaiki otomatis
pnpm lint:fix

# Type checking
pnpm typecheck

# Jalankan tests
pnpm test
```

## Pertanyaan dan Klarifikasi

Untuk pertanyaan tentang standar ini atau saran perbaikan:

1. Buka GitHub Discussion
2. Bergabung dengan komunitas Discord kami
3. Buat issue dengan label `standards`

Standar ini adalah dokumen hidup yang berkembang dengan proyek dan umpan balik komunitas.
