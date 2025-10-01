# コーディング標準

このドキュメントは、Hatcher プロジェクトのコーディング標準と規約を概説しています。これらの標準に従うことで、コードベース全体で一貫性、保守性、高品質なコードが保証されます。

> **📊 コンプライアンスステータス**: 2024年12月現在、包括的な監査とコード改善の後、コードベースはこれらの標準に対して**100%のコンプライアンス**を達成しています。

## 一般原則

### コード品質

- **巧妙さよりも明確さ**: 読みやすく理解しやすいコードを書く
- **一貫性**: コードベース全体で確立されたパターンに従う
- **保守性**: 変更と拡張が容易なコードを書く
- **パフォーマンス**: パフォーマンスへの影響を考慮するが、可読性を優先
- **ドキュメント**: すべてのコードは、必要に応じて明確なコメントで自己文書化されるべき

### 言語標準

- **英語のみ**: すべてのコメント、ドキュメント、変数名は英語である必要がある
- **明確な命名**: 目的を明確に示す説明的な名前を使用
- **略語なし**: 広く理解されている場合を除き、略語を避ける (例: `API`、`URL`)

### ファイル構成

- **単一責任**: 各ファイルは単一の明確に定義された目的を持つべき
- **論理的なグループ化**: 関連する機能を一緒に整理
- **明確な命名**: 目的を明確に示す説明的な名前を使用

## フォーマット標準

### コードスタイル (ESLint によって強制)

```typescript
// ✅ Good: シングルクォート、セミコロンなし、2スペースインデント
const message = 'Hello World'
const config = {
  apiUrl: 'https://api.hatche.rs',
  timeout: 5000,
}

// ❌ Avoid: ダブルクォート、セミコロン、一貫性のないインデント
const message = "Hello World";
const config = {
    apiUrl: "https://api.hatche.rs",
    timeout: 5000;
};
```

### エラー処理

```typescript
// ✅ Good: 説明的なエラー処理
try {
  const result = await fetchUserData()
  return result
} catch (error) {
  console.error('Failed to fetch user data:', error)
  throw new Error(`User data fetch failed: ${error.message}`)
}

// ❌ Avoid: 汎用エラー処理
try {
  const result = await fetchUserData()
  return result
} catch (e) {
  console.error(e)
  throw e
}
```

## TypeScript 標準

### 型定義

```typescript
// ✅ Good: オブジェクトシェイプにはインターフェースを使用
interface UserData {
  id: string
  name: string
  email: string
  isActive: boolean
}

// ❌ Avoid: 単純なオブジェクトシェイプに型エイリアス
type UserData = {
  id: string
  name: string
}
```

### 命名規則

```typescript
// ✅ Good: 型、インターフェース、クラスには PascalCase
interface ApiResponse {}
class UserService {}
type ComponentProps = {}

// ✅ Good: 変数、関数、メソッドには camelCase
const userName = 'john'
function getUserData() {}
const handleClick = () => {}

// ✅ Good: 定数には SCREAMING_SNAKE_CASE
const API_BASE_URL = 'https://api.hatche.rs'
const MAX_RETRY_ATTEMPTS = 3
```

### 関数とメソッドの設計

```typescript
// ✅ Good: 適切な型付けでの明確な関数シグネチャ
function processUserData(user: UserData): Promise<ProcessedUser> {
  // 実装
}

// ✅ Good: 公開 API には JSDoc を使用
/**
 * ビジュアル選択に基づいてコード変更を生成
 * @param selection - 選択された DOM 要素
 * @param context - 現在のプロジェクトコンテキスト
 * @returns 生成されたコードを解決する Promise
 */
async function generateCodeFromSelection(
  selection: DOMSelection[],
  context: ProjectContext
): Promise<CodeModification[]> {
  // 実装
}
```

## Vue.js 標準

### コンポーネント構造

```vue
<!-- ✅ Good: <script setup> で Composition API を使用 -->
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

// 上部の Composables
const { user } = useAuth()
const { theme } = useTheme()

// リアクティブデータ
const isLoading = ref(false)
const formData = reactive({
  name: '',
  email: '',
})

// 計算プロパティ
const isFormValid = computed(() => {
  return formData.name.length > 0 && formData.email.includes('@')
})

// メソッド
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
      <!-- フォームコンテンツ -->
    </form>
  </div>
</template>

<style scoped>
.modal {
  /* スタイル */
}
</style>
```

### コンポーネント命名

```typescript
// ✅ Good: コンポーネント名には PascalCase
export default defineComponent({
  name: 'UserProfileCard',
})

// ✅ Good: 説明的なコンポーネントファイル名
UserProfileCard.vue
VisualSelectionPanel.vue
CodeGenerationModal.vue
```

### Props とイベント

```typescript
// ✅ Good: デフォルト付きの明示的な prop 型
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

// ✅ Good: 説明的なイベント名
interface Emits {
  'update:modelValue': [value: string]
  'selection-change': [selection: DOMElement[]]
  'code-generated': [code: string]
}
```

### Composables

```typescript
// ✅ Good: Composable 構造
export function useVisualSelection() {
  const selectedElements = ref<DOMElement[]>([])
  const isSelecting = ref(false)

  function startSelection() {
    isSelecting.value = true
    // 実装
  }

  function endSelection() {
    isSelecting.value = false
    // 実装
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

## スタイリング標準

### CSS アーキテクチャ

```scss
// ✅ Good: テーマには CSS カスタムプロパティを使用
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

// ✅ Good: クラス名には BEM 方法論
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

### レスポンシブデザイン

```scss
// ✅ Good: モバイルファーストアプローチ
.visual-panel {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  // タブレット
  @media (min-width: 768px) {
    flex-direction: row;
    gap: var(--spacing-md);
  }

  // デスクトップ
  @media (min-width: 1024px) {
    gap: var(--spacing-lg);
  }
}
```

## テスト標準

### 単体テスト

```typescript
// ✅ Good: 説明的なテスト構造
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
      // テスト実装
    })
  })
})
```

### コンポーネントテスト

```typescript
// ✅ Good: 実装ではなく、コンポーネントの動作をテスト
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

## ドキュメント標準

### コードコメント

```typescript
// ✅ Good: WHAT ではなく WHY を説明
function calculateOptimalAIPrompt(context: ProjectContext): string {
  // AI モデルのトークンオーバーフローを防ぐためにコンテキストサイズを制限しながら、
  // 正確なコード生成のための十分な情報を確保します
  const maxContextSize = 4000

  if (context.size > maxContextSize) {
    return compressContext(context, maxContextSize)
  }

  return buildPrompt(context)
}

// ✅ Good: 複雑なアルゴリズムを文書化
/**
 * Visual-to-Code Bridge アルゴリズムを実装
 *
 * この関数は、ビジュアル DOM 選択を構造化されたコード変更に変換します:
 * 1. 選択された要素とその関係を分析
 * 2. 適切なコードパターンを決定
 * 3. 型安全なコード変更を生成
 *
 * @complexity O(n * m) ここで n = 選択された要素、m = コードパターン
 */
function processVisualSelection(elements: DOMElement[]): CodeModification[] {
  // 実装
}
```

## Git 規約

### コミットメッセージ

[Conventional Commits](https://conventionalcommits.org/)に従います:

```bash
# ✅ Good: 明確で説明的なコミットメッセージ
feat: add visual element selection to code generation
fix: resolve memory leak in AI response processing
docs: update installation guide for macOS
style: improve code formatting in user service
refactor: extract common AI prompt logic
test: add unit tests for visual selection composable
chore: update dependencies to latest versions

# ✅ Good: 役立つ場合はスコープを含める
feat(visual-bridge): implement drag-to-select functionality
fix(ai-engine): handle Claude API rate limiting
docs(playbooks): add examples for team configurations
```

### ブランチ命名

```bash
# ✅ Good: 説明的なブランチ名
feature/visual-selection-ui
fix/ai-response-parsing
docs/coding-standards
refactor/composables-structure
```

## パフォーマンスガイドライン

### バンドルサイズ

- ツリーシェイキング対応のインポートを優先
- 大きな依存関係には動的インポートを使用
- CI/CD でバンドルサイズを監視

```typescript
// ✅ Good: ツリーシェイカブルなインポート
import { ref, computed } from 'vue'
import { debounce } from 'lodash-es'

// ❌ Avoid: 完全なライブラリインポート
import * as vue from 'vue'
import _ from 'lodash'

// ✅ Good: 大きな機能には動的インポート
const AdvancedEditor = defineAsyncComponent(
  () => import('./AdvancedEditor.vue')
)
```

### メモリ管理

```typescript
// ✅ Good: リソースをクリーンアップ
onUnmounted(() => {
  // イベントリスナーをクリーンアップ
  window.removeEventListener('resize', handleResize)

  // 保留中のリクエストをキャンセル
  abortController.abort()

  // タイマーをクリア
  clearInterval(intervalId)
})
```

## AI 統合標準

### プロンプトエンジニアリング

```typescript
// ✅ Good: 構造化されたプロンプト構築
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

### エラー処理

```typescript
// ✅ Good: 優雅な AI サービス劣化
async function generateCode(prompt: string): Promise<CodeResult> {
  try {
    return await aiService.generate(prompt)
  } catch (error) {
    if (error instanceof RateLimitError) {
      // キャッシュされたパターンにフォールバック
      return generateFromPatterns(prompt)
    }

    if (error instanceof NetworkError) {
      // オフラインモードを提供
      return {
        code: '',
        error: 'Offline mode - manual coding required',
      }
    }

    throw error
  }
}
```

## 強制

これらの標準は次を通じて強制されます:

- **ESLint**: 自動コードスタイルチェック
- **TypeScript**: 型安全性と一貫性
- **Prettier**: コードフォーマット
- **Husky**: Pre-commit フック
- **CI/CD**: 自動テストとリンティング

### ローカル開発

```bash
# リンティングを実行
pnpm lint

# 自動修正可能な問題を修正
pnpm lint:fix

# 型チェック
pnpm typecheck

# テストを実行
pnpm test
```

## 質問と明確化

これらの標準についての質問や改善提案がある場合:

1. GitHub Discussion を開く
2. Discord コミュニティに参加
3. `standards` ラベルで issue を作成

これらの標準は、プロジェクトとコミュニティのフィードバックとともに進化する生きたドキュメントです。
