# Standards de Codage

Ce document décrit les standards de codage et conventions pour le projet Hatcher. Suivre ces standards garantit la cohérence, la maintenabilité et un code de haute qualité dans toute la base de code.

> **📊 Statut de Conformité**: En décembre 2024, notre base de code atteint **100% de conformité** avec ces standards après un audit complet et des améliorations du code.

## Principes Généraux

### Qualité du Code

- **Clarté plutôt que complexité**: Écrivez du code facile à lire et comprendre
- **Cohérence**: Suivez les patterns établis dans toute la base de code
- **Maintenabilité**: Écrivez du code facile à modifier et étendre
- **Performance**: Considérez les implications de performance, mais priorisez la lisibilité d'abord
- **Documentation**: Tout le code devrait être auto-documenté avec des commentaires clairs si nécessaire

### Standards de Langage

- **Anglais Uniquement**: Tous les commentaires, documentation et noms de variables doivent être en anglais
- **Nommage Clair**: Utilisez des noms descriptifs qui indiquent clairement le but
- **Pas d'Abréviations**: Évitez les abréviations sauf si elles sont largement comprises (ex: `API`, `URL`)

### Organisation des Fichiers

- **Responsabilité Unique**: Chaque fichier devrait avoir un but unique et bien défini
- **Regroupement Logique**: Organisez les fonctionnalités liées ensemble
- **Nommage Clair**: Utilisez des noms descriptifs qui indiquent clairement le but

## Standards de Formatage

### Style de Code (Appliqué par ESLint)

```typescript
// ✅ Good: Single quotes, no semicolons, 2-space indentation
const message = 'Hello World'
const config = {
  apiUrl: 'https://api.hatche.rs',
  timeout: 5000,
}

// ❌ Avoid: Double quotes, semicolons, inconsistent indentation
const message = "Hello World";
const config = {
    apiUrl: "https://api.hatche.rs",
    timeout: 5000;
};
```

### Gestion des Erreurs

```typescript
// ✅ Good: Descriptive error handling
try {
  const result = await fetchUserData()
  return result
} catch (error) {
  console.error('Failed to fetch user data:', error)
  throw new Error(`User data fetch failed: ${error.message}`)
}

// ❌ Avoid: Generic error handling
try {
  const result = await fetchUserData()
  return result
} catch (e) {
  console.error(e)
  throw e
}
```

## Standards TypeScript

### Définitions de Types

```typescript
// ✅ Good: Use interfaces for object shapes
interface UserData {
  id: string
  name: string
  email: string
  isActive: boolean
}

// ❌ Avoid: Type aliases for simple object shapes
type UserData = {
  id: string
  name: string
}
```

### Conventions de Nommage

```typescript
// ✅ Good: PascalCase for types, interfaces, classes
interface ApiResponse {}
class UserService {}
type ComponentProps = {}

// ✅ Good: camelCase for variables, functions, methods
const userName = 'john'
function getUserData() {}
const handleClick = () => {}

// ✅ Good: SCREAMING_SNAKE_CASE for constants
const API_BASE_URL = 'https://api.hatche.rs'
const MAX_RETRY_ATTEMPTS = 3
```

### Conception de Fonctions et Méthodes

```typescript
// ✅ Good: Clear function signatures with proper typing
function processUserData(user: UserData): Promise<ProcessedUser> {
  // Implementation
}

// ✅ Good: Use JSDoc for public APIs
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

### Gestion des Erreurs

```typescript
// ✅ Good: Specific error types
class ValidationError extends Error {
  constructor(field: string, value: unknown) {
    super(`Invalid value for field ${field}: ${value}`)
    this.name = 'ValidationError'
  }
}

// ✅ Good: Proper error handling in async functions
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

## Standards Vue.js

### Structure de Composant

```vue
<!-- ✅ Good: Use Composition API with <script setup> -->
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

### Nommage des Composants

```typescript
// ✅ Good: PascalCase for component names
export default defineComponent({
  name: 'UserProfileCard',
})

// ✅ Good: Descriptive component file names
UserProfileCard.vue
VisualSelectionPanel.vue
CodeGenerationModal.vue
```

### Props et Événements

```typescript
// ✅ Good: Explicit prop types with defaults
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

// ✅ Good: Descriptive event names
interface Emits {
  'update:modelValue': [value: string]
  'selection-change': [selection: DOMElement[]]
  'code-generated': [code: string]
}
```

### Composables

```typescript
// ✅ Good: Composable structure
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

## Standards de Style

### Architecture CSS

```scss
// ✅ Good: Use CSS custom properties for theming
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

// ✅ Good: BEM methodology for class names
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

### Design Responsive

```scss
// ✅ Good: Mobile-first approach
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

### Styles Scopés

```vue
<style scoped>
/* ✅ Good: Use scoped styles for component-specific styling */
.component-specific {
  /* This won't leak to other components */
}
</style>

<style>
/* ✅ Good: Global styles only when necessary */
.hatcher-global-utility {
  /* Global utility class */
}
</style>
```

## Standards de Test

### Tests Unitaires

```typescript
// ✅ Good: Descriptive test structure
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

### Tests de Composants

```typescript
// ✅ Good: Test component behavior, not implementation
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

## Standards de Documentation

### Commentaires de Code

```typescript
// ✅ Good: Explain WHY, not WHAT
function calculateOptimalAIPrompt(context: ProjectContext): string {
  // We limit context size to prevent token overflow in AI models
  // while ensuring enough information for accurate code generation
  const maxContextSize = 4000

  if (context.size > maxContextSize) {
    return compressContext(context, maxContextSize)
  }

  return buildPrompt(context)
}

// ✅ Good: Document complex algorithms
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

### Documentation README

````markdown
# Nom du Composant

Brève description de ce que fait ce composant.

## Utilisation

```vue
<ComponentName :prop1="value1" :prop2="value2" @event1="handler1" />
```
````

## Props

| Prop  | Type    | Défaut | Description          |
| ----- | ------- | ------ | -------------------- |
| prop1 | string  | ''     | Description de prop1 |
| prop2 | boolean | false  | Description de prop2 |

## Événements

| Événement | Payload | Description     |
| --------- | ------- | --------------- |
| event1    | string  | Émis quand...   |

## Exemples

### Utilisation Basique

(Code d'exemple)

### Utilisation Avancée

(Code d'exemple)

````

## Conventions Git

### Messages de Commit
Nous suivons [Conventional Commits](https://conventionalcommits.org/):

```bash
# ✅ Good: Clear, descriptive commit messages
feat: add visual element selection to code generation
fix: resolve memory leak in AI response processing
docs: update installation guide for macOS
style: improve code formatting in user service
refactor: extract common AI prompt logic
test: add unit tests for visual selection composable
chore: update dependencies to latest versions

# ✅ Good: Include scope when helpful
feat(visual-bridge): implement drag-to-select functionality
fix(ai-engine): handle Claude API rate limiting
docs(playbooks): add examples for team configurations
````

### Nommage des Branches

```bash
# ✅ Good: Descriptive branch names
feature/visual-selection-ui
fix/ai-response-parsing
docs/coding-standards
refactor/composables-structure
```

## Directives de Performance

### Taille du Bundle

- Préférez les imports favorisant le tree-shaking
- Utilisez les imports dynamiques pour les dépendances volumineuses
- Surveillez la taille du bundle dans CI/CD

```typescript
// ✅ Good: Tree-shakable imports
import { ref, computed } from 'vue'
import { debounce } from 'lodash-es'

// ❌ Avoid: Full library imports
import * as vue from 'vue'
import _ from 'lodash'

// ✅ Good: Dynamic imports for large features
const AdvancedEditor = defineAsyncComponent(
  () => import('./AdvancedEditor.vue')
)
```

### Gestion de la Mémoire

```typescript
// ✅ Good: Clean up resources
onUnmounted(() => {
  // Clean up event listeners
  window.removeEventListener('resize', handleResize)

  // Cancel pending requests
  abortController.abort()

  // Clear timers
  clearInterval(intervalId)
})
```

## Standards d'Intégration IA

### Ingénierie de Prompts

```typescript
// ✅ Good: Structured prompt building
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

### Gestion des Erreurs

```typescript
// ✅ Good: Graceful AI service degradation
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

## Application

Ces standards sont appliqués via:

- **ESLint**: Vérification automatique du style de code
- **TypeScript**: Sécurité de type et cohérence
- **Prettier**: Formatage du code
- **Husky**: Hooks pre-commit
- **CI/CD**: Tests et linting automatisés

### Développement Local

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

## Questions et Clarifications

Pour des questions sur ces standards ou suggestions d'améliorations:

1. Ouvrir une Discussion GitHub
2. Rejoindre notre communauté Discord
3. Créer une issue avec le label `standards`

Ces standards sont des documents vivants qui évoluent avec le projet et les retours de la communauté.
