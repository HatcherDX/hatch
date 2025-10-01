# 코딩 표준

이 문서는 Hatcher 프로젝트의 코딩 표준 및 규칙을 설명합니다. 이 표준을 따르면 전체 코드베이스에서 일관성, 유지 관리 가능성 및 고품질 코드를 보장할 수 있습니다.

> **📊 준수 상태**: 2024년 12월 기준, 포괄적인 감사 및 코드 개선 후 이 표준에 대해 **100% 준수**를 달성했습니다.

## 일반 원칙

### 코드 품질

- **명확성보다 영리함**: 읽고 이해하기 쉬운 코드 작성
- **일관성**: 코드베이스 전체에서 확립된 패턴 따르기
- **유지 관리 가능성**: 수정 및 확장이 쉬운 코드 작성
- **성능**: 성능 영향 고려, 그러나 가독성 우선
- **문서화**: 모든 코드는 필요한 경우 명확한 주석과 함께 자체 문서화되어야 함

### 언어 표준

- **영어만**: 모든 주석, 문서 및 변수 이름은 영어로 작성
- **명확한 명명**: 목적을 명확하게 나타내는 설명적 이름 사용
- **약어 없음**: 널리 이해되는 경우가 아니면 약어 피하기 (예: `API`, `URL`)

### 파일 구성

- **단일 책임**: 각 파일은 단일하고 잘 정의된 목적을 가져야 함
- **논리적 그룹화**: 관련 기능을 함께 구성
- **명확한 명명**: 목적을 명확하게 나타내는 설명적 이름 사용

## 포맷팅 표준

### 코드 스타일 (ESLint로 시행)

```typescript
// ✅ 좋음: 작은따옴표, 세미콜론 없음, 2칸 들여쓰기
const message = 'Hello World'
const config = {
  apiUrl: 'https://api.hatche.rs',
  timeout: 5000,
}

// ❌ 피하기: 큰따옴표, 세미콜론, 일관되지 않은 들여쓰기
const message = "Hello World";
const config = {
    apiUrl: "https://api.hatche.rs",
    timeout: 5000;
};
```

### 오류 처리

```typescript
// ✅ 좋음: 설명적 오류 처리
try {
  const result = await fetchUserData()
  return result
} catch (error) {
  console.error('Failed to fetch user data:', error)
  throw new Error(`User data fetch failed: ${error.message}`)
}

// ❌ 피하기: 일반적 오류 처리
try {
  const result = await fetchUserData()
  return result
} catch (e) {
  console.error(e)
  throw e
}
```

## TypeScript 표준

### 타입 정의

```typescript
// ✅ 좋음: 객체 형태에 인터페이스 사용
interface UserData {
  id: string
  name: string
  email: string
  isActive: boolean
}

// ❌ 피하기: 간단한 객체 형태에 타입 별칭
type UserData = {
  id: string
  name: string
}
```

### 명명 규칙

```typescript
// ✅ 좋음: 타입, 인터페이스, 클래스에 PascalCase
interface ApiResponse {}
class UserService {}
type ComponentProps = {}

// ✅ 좋음: 변수, 함수, 메서드에 camelCase
const userName = 'john'
function getUserData() {}
const handleClick = () => {}

// ✅ 좋음: 상수에 SCREAMING_SNAKE_CASE
const API_BASE_URL = 'https://api.hatche.rs'
const MAX_RETRY_ATTEMPTS = 3
```

### 함수 및 메서드 설계

```typescript
// ✅ 좋음: 적절한 타이핑이 있는 명확한 함수 시그니처
function processUserData(user: UserData): Promise<ProcessedUser> {
  // 구현
}

// ✅ 좋음: 공개 API에 JSDoc 사용
/**
 * 비주얼 선택을 기반으로 코드 수정 생성
 * @param selection - 선택된 DOM 요소
 * @param context - 현재 프로젝트 컨텍스트
 * @returns 생성된 코드로 해결되는 Promise
 */
async function generateCodeFromSelection(
  selection: DOMSelection[],
  context: ProjectContext
): Promise<CodeModification[]> {
  // 구현
}
```

### 오류 처리

```typescript
// ✅ 좋음: 특정 오류 타입
class ValidationError extends Error {
  constructor(field: string, value: unknown) {
    super(`Invalid value for field ${field}: ${value}`)
    this.name = 'ValidationError'
  }
}

// ✅ 좋음: 비동기 함수의 적절한 오류 처리
async function saveUserData(user: UserData): Promise<SaveResult> {
  try {
    const result = await api.saveUser(user)
    return { success: true, data: result }
  } catch (error) {
    if (error instanceof ValidationError) {
      return { success: false, error: error.message }
    }
    throw error // 예상치 못한 오류 재발생
  }
}
```

## Vue.js 표준

### 컴포넌트 구조

```vue
<!-- ✅ 좋음: <script setup>과 함께 Composition API 사용 -->
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

// 상단의 Composables
const { user } = useAuth()
const { theme } = useTheme()

// 반응형 데이터
const isLoading = ref(false)
const formData = reactive({
  name: '',
  email: '',
})

// Computed properties
const isFormValid = computed(() => {
  return formData.name.length > 0 && formData.email.includes('@')
})

// 메서드
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

### 컴포넌트 명명

```typescript
// ✅ 좋음: 컴포넌트 이름에 PascalCase
export default defineComponent({
  name: 'UserProfileCard',
})

// ✅ 좋음: 설명적 컴포넌트 파일 이름
UserProfileCard.vue
VisualSelectionPanel.vue
CodeGenerationModal.vue
```

### Props 및 Events

```typescript
// ✅ 좋음: 기본값이 있는 명시적 prop 타입
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

// ✅ 좋음: 설명적 이벤트 이름
interface Emits {
  'update:modelValue': [value: string]
  'selection-change': [selection: DOMElement[]]
  'code-generated': [code: string]
}
```

### Composables

```typescript
// ✅ 좋음: Composable 구조
export function useVisualSelection() {
  const selectedElements = ref<DOMElement[]>([])
  const isSelecting = ref(false)

  function startSelection() {
    isSelecting.value = true
    // 구현
  }

  function endSelection() {
    isSelecting.value = false
    // 구현
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

## 스타일링 표준

### CSS 아키텍처

```scss
// ✅ 좋음: 테마를 위해 CSS 커스텀 속성 사용
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

// ✅ 좋음: 클래스 이름에 BEM 방법론
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

### 반응형 디자인

```scss
// ✅ 좋음: 모바일 우선 접근
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
/* ✅ 좋음: 컴포넌트별 스타일링에 scoped 스타일 사용 */
.component-specific {
  /* 다른 컴포넌트로 누출되지 않음 */
}
</style>

<style>
/* ✅ 좋음: 필요한 경우에만 전역 스타일 */
.hatcher-global-utility {
  /* 전역 유틸리티 클래스 */
}
</style>
```

## 테스팅 표준

### 단위 테스트

```typescript
// ✅ 좋음: 설명적 테스트 구조
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
      // 테스트 구현
    })
  })
})
```

### 컴포넌트 테스트

```typescript
// ✅ 좋음: 구현이 아닌 컴포넌트 동작 테스트
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

## 문서화 표준

### 코드 주석

```typescript
// ✅ 좋음: WHAT이 아닌 WHY 설명
function calculateOptimalAIPrompt(context: ProjectContext): string {
  // AI 모델의 토큰 오버플로우를 방지하기 위해 컨텍스트 크기를 제한하면서
  // 정확한 코드 생성을 위한 충분한 정보를 보장합니다
  const maxContextSize = 4000

  if (context.size > maxContextSize) {
    return compressContext(context, maxContextSize)
  }

  return buildPrompt(context)
}

// ✅ 좋음: 복잡한 알고리즘 문서화
/**
 * Visual-to-Code Bridge 알고리즘 구현
 *
 * 이 함수는 비주얼 DOM 선택을 구조화된 코드 수정으로 변환:
 * 1. 선택된 요소와 관계 분석
 * 2. 적절한 코드 패턴 결정
 * 3. 타입 안전 코드 수정 생성
 *
 * @complexity O(n * m) 여기서 n = 선택된 요소, m = 코드 패턴
 */
function processVisualSelection(elements: DOMElement[]): CodeModification[] {
  // 구현
}
```

## Git 규칙

### 커밋 메시지

[Conventional Commits](https://conventionalcommits.org/)를 따릅니다:

```bash
# ✅ 좋음: 명확하고 설명적인 커밋 메시지
feat: add visual element selection to code generation
fix: resolve memory leak in AI response processing
docs: update installation guide for macOS
style: improve code formatting in user service
refactor: extract common AI prompt logic
test: add unit tests for visual selection composable
chore: update dependencies to latest versions

# ✅ 좋음: 도움이 될 때 범위 포함
feat(visual-bridge): implement drag-to-select functionality
fix(ai-engine): handle Claude API rate limiting
docs(playbooks): add examples for team configurations
```

### 브랜치 명명

```bash
# ✅ 좋음: 설명적 브랜치 이름
feature/visual-selection-ui
fix/ai-response-parsing
docs/coding-standards
refactor/composables-structure
```

## 성능 가이드라인

### 번들 크기

- Tree-shaking 친화적 임포트 선호
- 큰 종속성에 동적 임포트 사용
- CI/CD에서 번들 크기 모니터링

```typescript
// ✅ 좋음: Tree-shakable 임포트
import { ref, computed } from 'vue'
import { debounce } from 'lodash-es'

// ❌ 피하기: 전체 라이브러리 임포트
import * as vue from 'vue'
import _ from 'lodash'

// ✅ 좋음: 큰 기능에 동적 임포트
const AdvancedEditor = defineAsyncComponent(
  () => import('./AdvancedEditor.vue')
)
```

### 메모리 관리

```typescript
// ✅ 좋음: 리소스 정리
onUnmounted(() => {
  // 이벤트 리스너 정리
  window.removeEventListener('resize', handleResize)

  // 대기 중인 요청 취소
  abortController.abort()

  // 타이머 지우기
  clearInterval(intervalId)
})
```

## AI 통합 표준

### 프롬프트 엔지니어링

```typescript
// ✅ 좋음: 구조화된 프롬프트 빌딩
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

### 오류 처리

```typescript
// ✅ 좋음: 우아한 AI 서비스 저하
async function generateCode(prompt: string): Promise<CodeResult> {
  try {
    return await aiService.generate(prompt)
  } catch (error) {
    if (error instanceof RateLimitError) {
      // 캐시된 패턴으로 폴백
      return generateFromPatterns(prompt)
    }

    if (error instanceof NetworkError) {
      // 오프라인 모드 제공
      return {
        code: '',
        error: 'Offline mode - manual coding required',
      }
    }

    throw error
  }
}
```

## 시행

이 표준은 다음을 통해 시행됩니다:

- **ESLint**: 자동화된 코드 스타일 검사
- **TypeScript**: 타입 안전성 및 일관성
- **Prettier**: 코드 포맷팅
- **Husky**: Pre-commit hooks
- **CI/CD**: 자동화된 테스팅 및 린팅

### 로컬 개발

```bash
# 린팅 실행
pnpm lint

# 자동 수정 가능한 문제 수정
pnpm lint:fix

# 타입 검사
pnpm typecheck

# 테스트 실행
pnpm test
```

## 질문 및 명확화

이 표준에 대한 질문이나 개선 제안:

1. GitHub Discussion 열기
2. Discord 커뮤니티 가입
3. `standards` 레이블로 이슈 생성

이 표준은 프로젝트 및 커뮤니티 피드백과 함께 진화하는 살아있는 문서입니다.
