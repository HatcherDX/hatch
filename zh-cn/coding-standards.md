# 编码标准

本文档概述了Hatcher项目的编码标准和约定。遵循这些标准可确保整个代码库的一致性、可维护性和高质量代码。

> **合规状态**：截至2024年12月，经过全面审计和代码改进后，我们的代码库实现了**100%符合**这些标准。

## 一般原则

### 代码质量

- **清晰胜于聪明**：编写易于阅读和理解的代码
- **一致性**：在整个代码库中遵循既定模式
- **可维护性**：编写易于修改和扩展的代码
- **性能**：考虑性能影响，但首先优先考虑可读性
- **文档**：所有代码都应该是自文档化的，必要时有清晰的注释

### 语言标准

- **仅英语**：所有注释、文档和变量名必须使用英语
- **清晰命名**：使用清楚表明目的的描述性名称
- **不使用缩写**：避免缩写，除非它们被广泛理解（例如，`API`、`URL`）

### 文件组织

- **单一职责**：每个文件应该有一个单一的、明确定义的目的
- **逻辑分组**：将相关功能组织在一起
- **清晰命名**：使用清楚表明目的的描述性名称

## 格式标准

### 代码风格（由ESLint强制执行）

```typescript
// ✅ 好：单引号，无分号，2空格缩进
const message = 'Hello World'
const config = {
  apiUrl: 'https://api.hatche.rs',
  timeout: 5000,
}

// ❌ 避免：双引号，分号，不一致的缩进
const message = "Hello World";
const config = {
    apiUrl: "https://api.hatche.rs",
    timeout: 5000;
};
```

### 错误处理

```typescript
// ✅ 好：描述性错误处理
try {
  const result = await fetchUserData()
  return result
} catch (error) {
  console.error('Failed to fetch user data:', error)
  throw new Error(`User data fetch failed: ${error.message}`)
}

// ❌ 避免：通用错误处理
try {
  const result = await fetchUserData()
  return result
} catch (e) {
  console.error(e)
  throw e
}
```

## 一般原则

### 代码质量

- **清晰胜于聪明**：编写易于阅读和理解的代码
- **一致性**：在整个代码库中遵循既定模式
- **可维护性**：编写易于修改和扩展的代码
- **性能**：考虑性能影响，但首先优先考虑可读性

### 文件组织

- **单一职责**：每个文件应该有一个单一的、明确定义的目的
- **逻辑分组**：将相关功能组织在一起
- **清晰命名**：使用清楚表明目的的描述性名称

## TypeScript标准

### 类型定义

```typescript
// ✅ 好：对对象形状使用接口
interface UserData {
  id: string
  name: string
  email: string
  isActive: boolean
}

// ❌ 避免：对简单对象形状使用类型别名
type UserData = {
  id: string
  name: string
}
```

### 命名约定

```typescript
// ✅ 好：PascalCase用于类型、接口、类
interface ApiResponse {}
class UserService {}
type ComponentProps = {}

// ✅ 好：camelCase用于变量、函数、方法
const userName = 'john'
function getUserData() {}
const handleClick = () => {}

// ✅ 好：SCREAMING_SNAKE_CASE用于常量
const API_BASE_URL = 'https://api.hatche.rs'
const MAX_RETRY_ATTEMPTS = 3
```

### 函数和方法设计

```typescript
// ✅ 好：清晰的函数签名与适当的类型
function processUserData(user: UserData): Promise<ProcessedUser> {
  // 实现
}

// ✅ 好：对公共API使用JSDoc
/**
 * 根据视觉选择生成代码修改
 * @param selection - 选定的DOM元素
 * @param context - 当前项目上下文
 * @returns Promise解析为生成的代码
 */
async function generateCodeFromSelection(
  selection: DOMSelection[],
  context: ProjectContext
): Promise<CodeModification[]> {
  // 实现
}
```

### 错误处理

```typescript
// ✅ 好：特定的错误类型
class ValidationError extends Error {
  constructor(field: string, value: unknown) {
    super(`Invalid value for field ${field}: ${value}`)
    this.name = 'ValidationError'
  }
}

// ✅ 好：异步函数中的适当错误处理
async function saveUserData(user: UserData): Promise<SaveResult> {
  try {
    const result = await api.saveUser(user)
    return { success: true, data: result }
  } catch (error) {
    if (error instanceof ValidationError) {
      return { success: false, error: error.message }
    }
    throw error // 重新抛出意外错误
  }
}
```

## Vue.js标准

### 组件结构

```vue
<!-- ✅ 好：使用<script setup>的Composition API -->
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

// Composables在顶部
const { user } = useAuth()
const { theme } = useTheme()

// 响应式数据
const isLoading = ref(false)
const formData = reactive({
  name: '',
  email: '',
})

// 计算属性
const isFormValid = computed(() => {
  return formData.name.length > 0 && formData.email.includes('@')
})

// 方法
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
      <!-- 表单内容 -->
    </form>
  </div>
</template>

<style scoped>
.modal {
  /* 样式 */
}
</style>
```

### 组件命名

```typescript
// ✅ 好：组件名称使用PascalCase
export default defineComponent({
  name: 'UserProfileCard',
})

// ✅ 好：描述性组件文件名
UserProfileCard.vue
VisualSelectionPanel.vue
CodeGenerationModal.vue
```

### Props和事件

```typescript
// ✅ 好：带默认值的显式prop类型
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

// ✅ 好：描述性事件名称
interface Emits {
  'update:modelValue': [value: string]
  'selection-change': [selection: DOMElement[]]
  'code-generated': [code: string]
}
```

### Composables

```typescript
// ✅ 好：Composable结构
export function useVisualSelection() {
  const selectedElements = ref<DOMElement[]>([])
  const isSelecting = ref(false)

  function startSelection() {
    isSelecting.value = true
    // 实现
  }

  function endSelection() {
    isSelecting.value = false
    // 实现
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

## 样式标准

### CSS架构

```scss
// ✅ 好：使用CSS自定义属性进行主题化
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

// ✅ 好：BEM方法论用于类名
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

### 响应式设计

```scss
// ✅ 好：移动优先方法
.visual-panel {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  // 平板
  @media (min-width: 768px) {
    flex-direction: row;
    gap: var(--spacing-md);
  }

  // 桌面
  @media (min-width: 1024px) {
    gap: var(--spacing-lg);
  }
}
```

### 作用域样式

```vue
<style scoped>
/* ✅ 好：对组件特定样式使用作用域样式 */
.component-specific {
  /* 这不会泄漏到其他组件 */
}
</style>

<style>
/* ✅ 好：仅在必要时使用全局样式 */
.hatcher-global-utility {
  /* 全局实用类 */
}
</style>
```

## 测试标准

### 单元测试

```typescript
// ✅ 好：描述性测试结构
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
      // 测试实现
    })
  })
})
```

### 组件测试

```typescript
// ✅ 好：测试组件行为，而不是实现
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

## 文档标准

### 代码注释

```typescript
// ✅ 好：解释为什么，而不是什么
function calculateOptimalAIPrompt(context: ProjectContext): string {
  // 我们限制上下文大小以防止AI模型中的token溢出
  // 同时确保足够的信息用于准确的代码生成
  const maxContextSize = 4000

  if (context.size > maxContextSize) {
    return compressContext(context, maxContextSize)
  }

  return buildPrompt(context)
}

// ✅ 好：记录复杂算法
/**
 * 实现Visual-to-Code Bridge算法
 *
 * 此函数通过以下方式将视觉DOM选择转换为结构化代码修改：
 * 1. 分析选定的元素及其关系
 * 2. 确定适当的代码模式
 * 3. 生成类型安全的代码修改
 *
 * @complexity O(n * m) 其中n = 选定元素，m = 代码模式
 */
function processVisualSelection(elements: DOMElement[]): CodeModification[] {
  // 实现
}
```

### README文档

````markdown
# 组件名称

组件功能的简要说明。

## 使用方法

```vue
<ComponentName :prop1="value1" :prop2="value2" @event1="handler1" />
```
````

## Props

| Prop  | 类型    | 默认值 | 描述         |
| ----- | ------- | ------ | ------------ |
| prop1 | string  | ''     | prop1的描述  |
| prop2 | boolean | false  | prop2的描述  |

## 事件

| 事件   | 载荷   | 描述       |
| ------ | ------ | ---------- |
| event1 | string | 当...时发出 |

## 示例

### 基本使用

（示例代码）

### 高级使用

（示例代码）

````

## Git约定

### 提交消息
我们遵循[Conventional Commits](https://conventionalcommits.org/)：

```bash
# ✅ 好：清晰、描述性的提交消息
feat: add visual element selection to code generation
fix: resolve memory leak in AI response processing
docs: update installation guide for macOS
style: improve code formatting in user service
refactor: extract common AI prompt logic
test: add unit tests for visual selection composable
chore: update dependencies to latest versions

# ✅ 好：在有帮助时包含范围
feat(visual-bridge): implement drag-to-select functionality
fix(ai-engine): handle Claude API rate limiting
docs(playbooks): add examples for team configurations
````

### 分支命名

```bash
# ✅ 好：描述性分支名称
feature/visual-selection-ui
fix/ai-response-parsing
docs/coding-standards
refactor/composables-structure
```

## 性能指南

### 包大小

- 优先使用支持树摇的导入
- 对大型依赖项使用动态导入
- 在CI/CD中监控包大小

```typescript
// ✅ 好：可树摇的导入
import { ref, computed } from 'vue'
import { debounce } from 'lodash-es'

// ❌ 避免：完整库导入
import * as vue from 'vue'
import _ from 'lodash'

// ✅ 好：大型功能的动态导入
const AdvancedEditor = defineAsyncComponent(
  () => import('./AdvancedEditor.vue')
)
```

### 内存管理

```typescript
// ✅ 好：清理资源
onUnmounted(() => {
  // 清理事件监听器
  window.removeEventListener('resize', handleResize)

  // 取消待处理的请求
  abortController.abort()

  // 清除定时器
  clearInterval(intervalId)
})
```

## AI集成标准

### Prompt工程

```typescript
// ✅ 好：结构化prompt构建
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

### 错误处理

```typescript
// ✅ 好：优雅的AI服务降级
async function generateCode(prompt: string): Promise<CodeResult> {
  try {
    return await aiService.generate(prompt)
  } catch (error) {
    if (error instanceof RateLimitError) {
      // 回退到缓存的模式
      return generateFromPatterns(prompt)
    }

    if (error instanceof NetworkError) {
      // 提供离线模式
      return {
        code: '',
        error: 'Offline mode - manual coding required',
      }
    }

    throw error
  }
}
```

## 执行

这些标准通过以下方式执行：

- **ESLint**：自动代码风格检查
- **TypeScript**：类型安全和一致性
- **Prettier**：代码格式化
- **Husky**：预提交钩子
- **CI/CD**：自动测试和检查

### 本地开发

```bash
# 运行检查
pnpm lint

# 修复可自动修复的问题
pnpm lint:fix

# 类型检查
pnpm typecheck

# 运行测试
pnpm test
```

## 问题和说明

有关这些标准的问题或改进建议：

1. 打开GitHub讨论
2. 加入我们的Discord社区
3. 创建带有`standards`标签的issue

这些标准是随着项目和社区反馈而发展的活文档。
