# استانداردهای کدنویسی

این سند استانداردها و قراردادهای کدنویسی برای پروژه Hatcher را مشخص می‌کند. پیروی از این استانداردها سازگاری، قابلیت نگهداری و کد با کیفیت بالا را در کل codebase تضمین می‌کند.

> **📊 وضعیت انطباق**: تا دسامبر 2024، codebase ما به **100% انطباق** با این استانداردها پس از ممیزی جامع و بهبودهای کد دست یافته است.

## اصول کلی

### کیفیت کد

- **وضوح بر زیرکی**: کدی بنویسید که خواندن و درک آن آسان باشد
- **سازگاری**: الگوهای تأسیس‌شده را در سراسر codebase دنبال کنید
- **قابلیت نگهداری**: کدی بنویسید که تغییر و گسترش آن آسان باشد
- **عملکرد**: پیامدهای عملکرد را در نظر بگیرید، اما ابتدا خوانایی را اولویت دهید
- **مستندسازی**: تمام کد باید خود-مستندساز باشد با نظرات واضح در صورت لزوم

### استانداردهای زبان

- **فقط انگلیسی**: تمام نظرات، مستندات و نام متغیرها باید به انگلیسی باشند
- **نام‌گذاری واضح**: از نام‌های توصیفی استفاده کنید که هدف را به وضوح نشان می‌دهند
- **بدون اختصارات**: از اختصارات اجتناب کنید مگر اینکه به طور گسترده درک شوند (مثلاً `API`، `URL`)

### سازماندهی فایل

- **مسئولیت واحد**: هر فایل باید یک هدف واحد و به خوبی تعریف‌شده داشته باشد
- **گروه‌بندی منطقی**: عملکرد مرتبط را با هم سازماندهی کنید
- **نام‌گذاری واضح**: از نام‌های توصیفی استفاده کنید که هدف را به وضوح نشان می‌دهند

## استانداردهای قالب‌بندی

### سبک کد (اجرا شده توسط ESLint)

```typescript
// ✅ خوب: نقل قول‌های تکی، بدون نقطه‌ویرگول، تورفتگی 2 فضا
const message = 'Hello World'
const config = {
  apiUrl: 'https://api.hatche.rs',
  timeout: 5000,
}

// ❌ اجتناب: نقل قول‌های دوتایی، نقطه‌ویرگول، تورفتگی ناسازگار
const message = "Hello World";
const config = {
    apiUrl: "https://api.hatche.rs",
    timeout: 5000;
};
```

### مدیریت خطا

```typescript
// ✅ خوب: مدیریت خطای توصیفی
try {
  const result = await fetchUserData()
  return result
} catch (error) {
  console.error('Failed to fetch user data:', error)
  throw new Error(`User data fetch failed: ${error.message}`)
}

// ❌ اجتناب: مدیریت خطای عمومی
try {
  const result = await fetchUserData()
  return result
} catch (e) {
  console.error(e)
  throw e
}
```

## استانداردهای TypeScript

### تعاریف نوع

```typescript
// ✅ خوب: از interfaceها برای اشکال شیء استفاده کنید
interface UserData {
  id: string
  name: string
  email: string
  isActive: boolean
}

// ❌ اجتناب: alias نوع برای اشکال شیء ساده
type UserData = {
  id: string
  name: string
}
```

### قراردادهای نام‌گذاری

```typescript
// ✅ خوب: PascalCase برای انواع، interfaceها، کلاس‌ها
interface ApiResponse {}
class UserService {}
type ComponentProps = {}

// ✅ خوب: camelCase برای متغیرها، توابع، متدها
const userName = 'john'
function getUserData() {}
const handleClick = () => {}

// ✅ خوب: SCREAMING_SNAKE_CASE برای ثابت‌ها
const API_BASE_URL = 'https://api.hatche.rs'
const MAX_RETRY_ATTEMPTS = 3
```

## استانداردهای Vue.js

### ساختار کامپوننت

```vue
<!-- ✅ خوب: از Composition API با <script setup> استفاده کنید -->
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

// Composables در بالا
const { user } = useAuth()
const { theme } = useTheme()

// داده‌های reactive
const isLoading = ref(false)
const formData = reactive({
  name: '',
  email: '',
})

// ویژگی‌های computed
const isFormValid = computed(() => {
  return formData.name.length > 0 && formData.email.includes('@')
})

// متدها
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
      <!-- محتوای فرم -->
    </form>
  </div>
</template>

<style scoped>
.modal {
  /* استایل‌ها */
}
</style>
```

## استانداردهای استایل

### معماری CSS

```scss
// ✅ خوب: از ویژگی‌های سفارشی CSS برای تم‌بندی استفاده کنید
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

// ✅ خوب: روش BEM برای نام کلاس‌ها
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

### طراحی responsive

```scss
// ✅ خوب: رویکرد موبایل-اول
.visual-panel {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  // تبلت
  @media (min-width: 768px) {
    flex-direction: row;
    gap: var(--spacing-md);
  }

  // دسکتاپ
  @media (min-width: 1024px) {
    gap: var(--spacing-lg);
  }
}
```

## استانداردهای تست

### تست‌های واحد

```typescript
// ✅ خوب: ساختار تست توصیفی
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
})
```

## قراردادهای Git

### پیام‌های Commit

ما از [Conventional Commits](https://conventionalcommits.org/) پیروی می‌کنیم:

```bash
# ✅ خوب: پیام‌های commit واضح و توصیفی
feat: add visual element selection to code generation
fix: resolve memory leak in AI response processing
docs: update installation guide for macOS
style: improve code formatting in user service
refactor: extract common AI prompt logic
test: add unit tests for visual selection composable
chore: update dependencies to latest versions

# ✅ خوب: شامل scope در صورت مفید بودن
feat(visual-bridge): implement drag-to-select functionality
fix(ai-engine): handle Claude API rate limiting
docs(playbooks): add examples for team configurations
```

### نام‌گذاری Branch

```bash
# ✅ خوب: نام‌های branch توصیفی
feature/visual-selection-ui
fix/ai-response-parsing
docs/coding-standards
refactor/composables-structure
```

## اجرا

این استانداردها از طریق این موارد اجرا می‌شوند:

- **ESLint**: بررسی خودکار سبک کد
- **TypeScript**: امنیت نوع و سازگاری
- **Prettier**: قالب‌بندی کد
- **Husky**: hookهای pre-commit
- **CI/CD**: تست و linting خودکار

### توسعه محلی

```bash
# اجرای linting
pnpm lint

# رفع مسائل قابل رفع خودکار
pnpm lint:fix

# بررسی نوع
pnpm typecheck

# اجرای تست‌ها
pnpm test
```

## سؤالات و توضیحات

برای سؤالات درباره این استانداردها یا پیشنهادات برای بهبود:

1. یک GitHub Discussion باز کنید
2. به جامعه Discord ما بپیوندید
3. یک issue با برچسب `standards` بسازید

این استانداردها اسناد زنده‌ای هستند که با پروژه و بازخورد جامعه تکامل می‌یابند.
