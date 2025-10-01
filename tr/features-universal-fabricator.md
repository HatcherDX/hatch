# Universal Fabricator

> **Legacy kodun yaşama ikinci bir şans aldığı yer.**

## Universal Fabricator Nedir?

Universal Fabricator, Hatcher'ın modernizasyon motorudur. **Function Foundry** adını verdiğimiz bir süreç çalıştırır—Delphi ve COBOL gibi legacy dillerden savaş testinden geçmiş iş mantığını yüksek performanslı, güvenli **Hatcher Functions**'a (WebAssembly tarafından desteklenir) dönüştüren bir boru hattı.

Bu **Hatcher Functions**, daha sonra bir Hatcher **EGG** (Enforced Governance Guardrails) güvenliği içinde monte edilen ve yürütülen çekirdek bileşenlerdir.

## Foundry Süreci

### Aşama 1: Analiz

Kodunuza dokunmadan önce onu anlıyoruz:

```bash
hatcher analyze --source="./legacy/payroll.pas" --language="delphi"

> Analysis Complete:
> - Functions found: 247
> - Business rules identified: 89
> - External dependencies: 12
> - Estimated complexity: High
> - Modernization feasibility: 94%
```

### Aşama 2: Hazırlık

Kodunuz dönüşüm için hazırlanır:

- **Bağımlılık haritalama**: Neyin dahil edilmesi gerektiğini tanımlama
- **Arayüz çıkarma**: Girdileri ve çıktıları anlama
- **Bellek profilleme**: Kaynak gereksinimlerini tahmin etme
- **Risk değerlendirmesi**: Potansiyel sorunları tanımlama

### Aşama 3: Derleme

WebAssembly'ye gerçek dönüşüm:

```bash
hatcher compile --input="./legacy/payroll.pas" --output="./hatcher/functions/payroll.wasm"

> Compiling Delphi to WebAssembly...
> ✓ Parsing source code
> ✓ Resolving dependencies
> ✓ Optimizing for WASM
> ✓ Generating bindings
>
> Output: payroll.wasm (247KB)
> Performance: 0.97x native speed
> Memory: 12MB heap required
```

### Aşama 4: Doğrulama

Her Hatcher Function kapsamlı bir şekilde test edilir:

```typescript
// Auto-generated test harness
describe('Payroll Hatcher Function Validation', () => {
  test('Matches original output', async () => {
    const original = await runOriginalDelphi(testData)
    const functionName = await runWASMModule(testData)

    expect(functionName.output).toEqual(original.output)
    expect(functionName.performance).toBeWithin(0.1).of(original.performance)
  })
})
```

### Aşama 5: Paketleme

Hatcher Function'ınız ihtiyaç duyulan her şeyle paketlenir:

```yaml
# payroll.function.yaml
metadata:
  name: payroll-processor
  version: 1.0.0
  original: delphi-7.0
  compiled: 2024-01-15

module:
  binary: payroll.wasm
  size: 247KB
  memory: 12MB

interface:
  typescript: ./types/payroll.d.ts
  documentation: ./docs/payroll-api.md

validation:
  tests: ./tests/payroll.spec.js
  coverage: 94%
  performance: 0.97x
```

## Fabrication Ortamı

### İzole Derleme

Her derleme tamamen izole bir ortamda çalışır:

```dockerfile
# Fabricator Container
FROM hatcher/fabricator:latest

# Language-specific toolchain
RUN install-toolchain --language=delphi

# Isolation boundaries
USER foundry
WORKDIR /sandbox
RESTRICT network=none filesystem=readonly

# Compile with full isolation
CMD ["hatcher", "compile", "--safe-mode"]
```

### Çok Dilli Destek

Universal Fabricator, çoğu aracın görmezden geldiği legacy dilleri destekler:

- **Delphi/Pascal**: Tam Object Pascal desteği
- **COBOL**: COBOL-85 ve COBOL-2002 dahil
- **Visual Basic**: VB6 ve VB.NET
- **Fortran**: Bilimsel hesaplama koruması
- **C/C++**: Legacy derleyici uyumluluğuyla
- **Ada**: Misyon kritik sistem desteği

## Gelişmiş Özellikler

### Kademeli Modernizasyon

Her şeyi bir kerede modernize etmeyin:

```javascript
// Start with critical functions
const criticalFunctions = await compile({
  source: './legacy/core-business.pas',
  functions: ['calculateTax', 'processPayroll', 'validateCompliance'],
})

// Add more over time
const phase2 = await compile({
  source: './legacy/reporting.pas',
  functions: ['generateReport', 'exportData'],
})

// Combine into single module
const combined = await merge([criticalFunctions, phase2])
```

### Hibrit Yürütme

Legacy ve modern kodu yan yana çalıştırın:

```typescript
class HybridSystem {
  // Legacy calculation engine
  private legacy = await loadFunction('./hatcher/function/calculation.wasm')

  // Modern enhancement layer
  private modern = new ModernEnhancements()

  async process(data: Input): Output {
    // Use legacy for core logic
    const calculated = await this.legacy.calculate(data)

    // Enhance with modern features
    const enhanced = this.modern.addRealTimeAnalytics(calculated)

    return enhanced
  }
}
```

### Performans Optimizasyonu

Universal Fabricator otomatik olarak WebAssembly için optimize eder:

```
Original Delphi: 100ms average execution
Naive WASM: 180ms (1.8x slower)
Optimized WASM: 103ms (1.03x slower)

Optimizations applied:
- SIMD vectorization
- Memory alignment
- Dead code elimination
- Function inlining
- Loop unrolling
```

## Fabricator'da Güvenlik

### Kod Sanitizasyonu

Legacy kod genellikle güvenlik sorunlarına sahiptir. Universal Fabricator onları düzeltir:

```yaml
security_fixes:
  buffer_overflows:
    detected: 3
    fixed: 3
    method: automatic_bounds_checking

  sql_injection:
    detected: 7
    fixed: 7
    method: parameterized_queries

  memory_leaks:
    detected: 12
    fixed: 12
    method: automatic_memory_management
```

### Yetenek Tabanlı Güvenlik

Hatcher Functions minimum izinlerle çalışır:

```javascript
const functionName = await loadFunction('./payroll.wasm', {
  capabilities: {
    memory: { limit: '50MB' },
    cpu: { timeout: '5s' },
    io: {
      filesystem: 'none',
      network: 'none',
      random: 'deterministic',
    },
  },
})
```

## Gerçek Dünya Dönüşümleri

### Önce: Monolitik Delphi Uygulaması

```pascal
// 500,000 lines of Delphi code
// Single executable
// Windows-only
// No API
```

### Sonra: Modüler Hatcher Functions Sistemi

```yaml
functions:
  - core-business.wasm (45KB)
  - reporting.wasm (89KB)
  - calculations.wasm (156KB)
  - validation.wasm (67KB)

deployment:
  - Web browsers
  - Node.js servers
  - Edge functions
  - Mobile apps
  - IoT devices

api:
  - REST endpoints
  - GraphQL schema
  - WebSocket streams
  - gRPC services
```

## Başlarken

### 1. Legacy Kodunuzun Envanterini Çıkarın

```bash
hatcher inventory --directory="./legacy"

> Found:
> - Delphi: 1,247 files (500K lines)
> - VB6: 89 files (45K lines)
> - C++: 456 files (200K lines)
```

### 2. Modernizasyona Öncelik Verin

```bash
hatcher recommend --business-critical

> Recommended modernization order:
> 1. PayrollCalculation.pas (high usage, low complexity)
> 2. TaxEngine.pas (high value, medium complexity)
> 3. ReportGenerator.pas (medium usage, low risk)
```

### 3. Universal Fabricator'ı Başlatın

```bash
hatcher fabricator --start

> Universal Fabricator initialized
> Function Foundry pipeline ready
> Run 'hatcher compile' to begin transformation
```

## Legacy Kodun Geleceği

Universal Fabricator, legacy kod hakkında nasıl düşündüğümüzde temel bir değişimi temsil eder. Onu ortadan kaldırılması gereken teknik borç olarak görmek yerine, korunması ve geliştirilmesi gereken iş mantığı olarak görüyoruz.

1995'teki Delphi kodunuz 2024'te React uygulamanıza güç verebilir. COBOL işlemleriniz serverless fonksiyonlarda çalışabilir. Visual Basic hesaplamalarınız web tarayıcılarında yürütülebilir.

Bu sadece modernizasyon değil—özgürleşmedir.

---

_Universal Fabricator: Legacy kodunuzun ölmediği, evrimleştiği yer._

<PageCTA
  title="Legacy'yi Modern Varlıklara Dönüştürün"
  subtitle="Onlarca yıllık kodu WebAssembly'ye derleyin ve her yerde çalıştırın"
  buttonText="Geçişinizi Başlatın"
  buttonLink="/tr/getting-started"
  buttonStyle="secondary"
  footer="COBOL'dan buluta. Delphi'den Docker'a. Kodunuz, evrensel."
/>
