# Kodlama Standartları

Bu belge, Hatcher projesi için kodlama standartlarını ve kurallarını özetler. Bu standartları takip etmek, tüm kod tabanında tutarlılık, sürdürülebilirlik ve yüksek kaliteli kod sağlar.

> **📊 Uyumluluk Durumu**: Aralık 2024 itibariyle, kod tabanımız kapsamlı denetim ve kod iyileştirmelerinden sonra bu standartlara **%100 uyumluluk** sağlar.

## Genel İlkeler

### Kod Kalitesi

- **Zekice olandan açık olana**: Okuması ve anlaşılması kolay kod yazın
- **Tutarlılık**: Kod tabanı boyunca yerleşik kalıpları takip edin
- **Sürdürülebilirlik**: Değiştirilmesi ve genişletilmesi kolay kod yazın
- **Performans**: Performans etkilerini düşünün, ancak önce okunabilirliği önceliklendirin
- **Dokümantasyon**: Tüm kodlar gerektiğinde net yorumlarla kendi kendini belgelemeli

### Dil Standartları

- **Sadece İngilizce**: Tüm yorumlar, dokümantasyon ve değişken adları İngilizce olmalıdır
- **Net Adlandırma**: Amacı açıkça belirten tanımlayıcı adlar kullanın
- **Kısaltma Yok**: Yaygın anlaşılmadıkça kısaltmalardan kaçının (örn. `API`, `URL`)

### Dosya Organizasyonu

- **Tek Sorumluluk**: Her dosyanın tek, iyi tanımlanmış bir amacı olmalıdır
- **Mantıksal Gruplama**: İlgili işlevselliği birlikte organize edin
- **Net Adlandırma**: Amacı açıkça belirten tanımlayıcı adlar kullanın

## Biçimlendirme Standartları

### Kod Stili (ESLint tarafından uygulanır)

```typescript
// ✅ İyi: Tek tırnak, noktalı virgül yok, 2 boşluk girinti
const message = 'Hello World'
const config = {
  apiUrl: 'https://api.hatche.rs',
  timeout: 5000,
}

// ❌ Kaçının: Çift tırnak, noktalı virgüller, tutarsız girinti
const message = "Hello World";
const config = {
    apiUrl: "https://api.hatche.rs",
    timeout: 5000;
};
```

### Hata İşleme

```typescript
// ✅ İyi: Açıklayıcı hata işleme
try {
  const result = await fetchUserData()
  return result
} catch (error) {
  console.error('Failed to fetch user data:', error)
  throw new Error(`User data fetch failed: ${error.message}`)
}

// ❌ Kaçının: Genel hata işleme
try {
  const result = await fetchUserData()
  return result
} catch (e) {
  console.error(e)
  throw e
}
```

## TypeScript Standartları

### Tip Tanımları

```typescript
// ✅ İyi: Nesne şekilleri için arayüzleri kullanın
interface UserData {
  id: string
  name: string
  email: string
  isActive: boolean
}

// ❌ Kaçının: Basit nesne şekilleri için tip takma adları
type UserData = {
  id: string
  name: string
}
```

### Adlandırma Kuralları

```typescript
// ✅ İyi: Tipler, arayüzler, sınıflar için PascalCase
interface ApiResponse {}
class UserService {}
type ComponentProps = {}

// ✅ İyi: Değişkenler, fonksiyonlar, metotlar için camelCase
const userName = 'john'
function getUserData() {}
const handleClick = () => {}

// ✅ İyi: Sabitler için SCREAMING_SNAKE_CASE
const API_BASE_URL = 'https://api.hatche.rs'
const MAX_RETRY_ATTEMPTS = 3
```

### Fonksiyon ve Metot Tasarımı

```typescript
// ✅ İyi: Uygun tiplemeyle net fonksiyon imzaları
function processUserData(user: UserData): Promise<ProcessedUser> {
  // Uygulama
}

// ✅ İyi: Public API'ler için JSDoc kullanın
/**
 * Görsel seçimlere dayalı kod değişiklikleri oluşturur
 * @param selection - Seçilen DOM öğeleri
 * @param context - Mevcut proje bağlamı
 * @returns Oluşturulan koda çözümlenen Promise
 */
async function generateCodeFromSelection(
  selection: DOMSelection[],
  context: ProjectContext
): Promise<CodeModification[]> {
  // Uygulama
}
```

## Vue.js Standartları

### Bileşen Yapısı

```vue
<!-- ✅ İyi: <script setup> ile Composition API kullanın -->
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

// Composable'lar en üstte
const { user } = useAuth()
const { theme } = useTheme()

// Reaktif veri
const isLoading = ref(false)
const formData = reactive({
  name: '',
  email: '',
})

// Hesaplanan özellikler
const isFormValid = computed(() => {
  return formData.name.length > 0 && formData.email.includes('@')
})

// Metotlar
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
      <!-- Form içeriği -->
    </form>
  </div>
</template>

<style scoped>
.modal {
  /* Stiller */
}
</style>
```

### Bileşen Adlandırma

```typescript
// ✅ İyi: Bileşen adları için PascalCase
export default defineComponent({
  name: 'UserProfileCard',
})

// ✅ İyi: Açıklayıcı bileşen dosya adları
UserProfileCard.vue
VisualSelectionPanel.vue
CodeGenerationModal.vue
```

## Stil Standartları

### CSS Mimarisi

```scss
// ✅ İyi: Temalama için CSS özel özelliklerini kullanın
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

// ✅ İyi: Sınıf adları için BEM metodolojisi
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

### Responsive Tasarım

```scss
// ✅ İyi: Mobil öncelikli yaklaşım
.visual-panel {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  // Tablet
  @media (min-width: 768px) {
    flex-direction: row;
    gap: var(--spacing-md);
  }

  // Masaüstü
  @media (min-width: 1024px) {
    gap: var(--spacing-lg);
  }
}
```

## Test Standartları

### Birim Testleri

```typescript
// ✅ İyi: Açıklayıcı test yapısı
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

## Dokümantasyon Standartları

### Kod Yorumları

```typescript
// ✅ İyi: NE'yi değil NEDEN'i açıklayın
function calculateOptimalAIPrompt(context: ProjectContext): string {
  // AI modellerinde token taşmasını önlemek için bağlam boyutunu sınırlıyoruz
  // aynı zamanda doğru kod üretimi için yeterli bilgi sağlıyoruz
  const maxContextSize = 4000

  if (context.size > maxContextSize) {
    return compressContext(context, maxContextSize)
  }

  return buildPrompt(context)
}
```

## Git Kuralları

### Commit Mesajları

[Conventional Commits](https://conventionalcommits.org/)'i takip ediyoruz:

```bash
# ✅ İyi: Net, açıklayıcı commit mesajları
feat: add visual element selection to code generation
fix: resolve memory leak in AI response processing
docs: update installation guide for macOS
style: improve code formatting in user service
refactor: extract common AI prompt logic
test: add unit tests for visual selection composable
chore: update dependencies to latest versions

# ✅ İyi: Yardımcı olduğunda kapsam ekleyin
feat(visual-bridge): implement drag-to-select functionality
fix(ai-engine): handle Claude API rate limiting
docs(playbooks): add examples for team configurations
```

### Branch Adlandırma

```bash
# ✅ İyi: Açıklayıcı branch adları
feature/visual-selection-ui
fix/ai-response-parsing
docs/coding-standards
refactor/composables-structure
```

## Performans Kılavuzları

### Bundle Boyutu

- Tree-shaking dostu import'ları tercih edin
- Büyük bağımlılıklar için dinamik import'lar kullanın
- CI/CD'de bundle boyutunu izleyin

```typescript
// ✅ İyi: Tree-shakable import'lar
import { ref, computed } from 'vue'
import { debounce } from 'lodash-es'

// ❌ Kaçının: Tam kütüphane import'ları
import * as vue from 'vue'
import _ from 'lodash'

// ✅ İyi: Büyük özellikler için dinamik import'lar
const AdvancedEditor = defineAsyncComponent(
  () => import('./AdvancedEditor.vue')
)
```

## Uygulama

Bu standartlar şunlar aracılığıyla uygulanır:

- **ESLint**: Otomatik kod stili kontrolü
- **TypeScript**: Tip güvenliği ve tutarlılık
- **Prettier**: Kod biçimlendirme
- **Husky**: Pre-commit hook'ları
- **CI/CD**: Otomatik test ve linting

### Yerel Geliştirme

```bash
# Linting çalıştır
pnpm lint

# Otomatik düzeltilebilir sorunları düzelt
pnpm lint:fix

# Tip kontrolü
pnpm typecheck

# Testleri çalıştır
pnpm test
```

## Sorular ve Açıklamalar

Bu standartlar hakkında sorular veya iyileştirme önerileri için:

1. Bir GitHub Discussion açın
2. Discord topluluğumuza katılın
3. `standards` etiketi ile bir issue oluşturun

Bu standartlar proje ve topluluk geri bildirimleriyle evrim geçiren yaşayan belgelerdir.
