---
title: कोडिंग मानक | Hatcher IDE विकास दिशानिर्देश
description: Hatcher IDE के लिए आधिकारिक कोडिंग मानक और विकास दिशानिर्देश। TypeScript, Vue, टेस्टिंग और प्रोजेक्ट में कोड गुणवत्ता बनाए रखने के लिए सर्वोत्तम प्रथाएं।
---

# कोडिंग मानक

यह दस्तावेज़ Hatcher प्रोजेक्ट के लिए कोडिंग मानकों और सम्मेलनों को रेखांकित करता है। इन मानकों का पालन करना पूरे कोडबेस में निरंतरता, रखरखाव योग्यता और उच्च-गुणवत्ता कोड सुनिश्चित करता है।

> **📊 अनुपालन स्थिति**: दिसंबर 2024 तक, व्यापक ऑडिटिंग और कोड सुधार के बाद हमारा कोडबेस इन मानकों के साथ **100% अनुपालन** प्राप्त करता है।

## सामान्य सिद्धांत

### कोड गुणवत्ता

- **चतुराई से स्पष्टता**: ऐसा कोड लिखें जो पढ़ने और समझने में आसान हो
- **निरंतरता**: कोडबेस भर में स्थापित पैटर्न का पालन करें
- **रखरखाव योग्यता**: ऐसा कोड लिखें जो संशोधित और विस्तारित करना आसान हो
- **प्रदर्शन**: प्रदर्शन निहितार्थों पर विचार करें, लेकिन पहले पठनीयता को प्राथमिकता दें
- **दस्तावेज़ीकरण**: सभी कोड आवश्यकता पड़ने पर स्पष्ट टिप्पणियों के साथ स्व-दस्तावेज़ित होना चाहिए

### भाषा मानक

- **केवल अंग्रेजी**: सभी टिप्पणियाँ, दस्तावेज़ीकरण, और चर नाम अंग्रेजी में होने चाहिए
- **स्पष्ट नामकरण**: वर्णनात्मक नामों का उपयोग करें जो स्पष्ट रूप से उद्देश्य दर्शाते हैं
- **कोई संक्षेप नहीं**: संक्षेप से बचें जब तक कि वे व्यापक रूप से समझे न जाएं (जैसे `API`, `URL`)

### फ़ाइल संगठन

- **एकल ज़िम्मेदारी**: प्रत्येक फ़ाइल का एक एकल, अच्छी तरह से परिभाषित उद्देश्य होना चाहिए
- **तार्किक समूहीकरण**: संबंधित कार्यक्षमता को एक साथ व्यवस्थित करें
- **स्पष्ट नामकरण**: वर्णनात्मक नामों का उपयोग करें जो स्पष्ट रूप से उद्देश्य दर्शाते हैं

## स्वरूपण मानक

### कोड शैली (ESLint द्वारा लागू)

```typescript
// ✅ अच्छा: एकल उद्धरण, कोई सेमीकोलन नहीं, 2-स्थान इंडेंटेशन
const message = 'Hello World'
const config = {
  apiUrl: 'https://api.hatche.rs',
  timeout: 5000,
}

// ❌ बचें: दोहरे उद्धरण, सेमीकोलन, असंगत इंडेंटेशन
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

## TypeScript मानक

### प्रकार परिभाषाएं

```typescript
// ✅ अच्छा: ऑब्जेक्ट आकारों के लिए इंटरफेस का उपयोग करें
interface UserData {
  id: string
  name: string
  email: string
  isActive: boolean
}

// ❌ बचें: सरल ऑब्जेक्ट आकारों के लिए प्रकार उपनाम
type UserData = {
  id: string
  name: string
}
```

### नामकरण सम्मेलन

```typescript
// ✅ अच्छा: प्रकार, इंटरफेस, क्लासेस के लिए PascalCase
interface ApiResponse {}
class UserService {}
type ComponentProps = {}

// ✅ अच्छा: चर, फंक्शन, मेथड के लिए camelCase
const userName = 'john'
function getUserData() {}
const handleClick = () => {}

// ✅ अच्छा: स्थिरांक के लिए SCREAMING_SNAKE_CASE
const API_BASE_URL = 'https://api.hatche.rs'
const MAX_RETRY_ATTEMPTS = 3
```

### फंक्शन और मेथड डिज़ाइन

```typescript
// ✅ अच्छा: उचित टाइपिंग के साथ स्पष्ट फंक्शन हस्ताक्षर
function processUserData(user: UserData): Promise<ProcessedUser> {
  // कार्यान्वयन
}

// ✅ अच्छा: सार्वजनिक API के लिए JSDoc का उपयोग करें
/**
 * दृश्य चयन के आधार पर कोड संशोधन उत्पन्न करता है
 * @param selection - चयनित DOM तत्व
 * @param context - वर्तमान प्रोजेक्ट संदर्भ
 * @returns उत्पन्न कोड के लिए Promise रिज़ॉल्व करता है
 */
async function generateCodeFromSelection(
  selection: DOMSelection[],
  context: ProjectContext
): Promise<CodeModification[]> {
  // कार्यान्वयन
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

// शीर्ष पर Composables
const { user } = useAuth()
const { theme } = useTheme()

// प्रतिक्रियाशील डेटा
const isLoading = ref(false)
const formData = reactive({
  name: '',
  email: '',
})

// गणना की गई गुण
const isFormValid = computed(() => {
  return formData.name.length > 0 && formData.email.includes('@')
})

// मेथड्स
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
      <!-- फॉर्म सामग्री -->
    </form>
  </div>
</template>

<style scoped>
.modal {
  /* स्टाइल्स */
}
</style>
```

## स्टाइल मानक

### CSS आर्किटेक्चर

```scss
// ✅ अच्छा: थीमिंग के लिए CSS कस्टम प्रॉपर्टीज़ का उपयोग करें
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

// ✅ अच्छा: क्लास नामों के लिए BEM पद्धति
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

## परीक्षण मानक

### यूनिट परीक्षण

```typescript
// ✅ अच्छा: वर्णनात्मक परीक्षण संरचना
describe('useVisualSelection', () => {
  describe('startSelection', () => {
    it('should set isSelecting to true', () => {
      const { isSelecting, startSelection } = useVisualSelection()

      startSelection()

      expect(isSelecting.value).toBe(true)
    })
  })
})
```

## दस्तावेज़ीकरण मानक

### कोड टिप्पणियाँ

```typescript
// ✅ अच्छा: क्या नहीं, क्यों समझाएं
function calculateOptimalAIPrompt(context: ProjectContext): string {
  // हम AI मॉडल में टोकन ओवरफ़्लो को रोकने के लिए संदर्भ आकार को सीमित करते हैं
  // जबकि सटीक कोड जेनरेशन के लिए पर्याप्त जानकारी सुनिश्चित करते हैं
  const maxContextSize = 4000

  if (context.size > maxContextSize) {
    return compressContext(context, maxContextSize)
  }

  return buildPrompt(context)
}
```

## Git सम्मेलन

### कमिट संदेश

हम [Conventional Commits](https://conventionalcommits.org/) का पालन करते हैं:

```bash
# ✅ अच्छा: स्पष्ट, वर्णनात्मक कमिट संदेश
feat: add visual element selection to code generation
fix: resolve memory leak in AI response processing
docs: update installation guide for macOS
style: improve code formatting in user service
refactor: extract common AI prompt logic
```

## प्रवर्तन

ये मानक निम्नलिखित के माध्यम से लागू किए जाते हैं:

- **ESLint**: स्वचालित कोड शैली जाँच
- **TypeScript**: प्रकार सुरक्षा और निरंतरता
- **Prettier**: कोड स्वरूपण
- **Husky**: Pre-commit हुक्स
- **CI/CD**: स्वचालित परीक्षण और लिंटिंग

### स्थानीय विकास

```bash
# लिंटिंग चलाएं
pnpm lint

# स्वतः-सुधार योग्य समस्याओं को ठीक करें
pnpm lint:fix

# प्रकार जाँच
pnpm typecheck

# परीक्षण चलाएं
pnpm test
```

ये मानक जीवित दस्तावेज़ हैं जो प्रोजेक्ट और समुदाय प्रतिक्रिया के साथ विकसित होते हैं।
