---
title: Autopilot Sistemi | Akıllı Geliştirme Orkestrasyonu
description: "Hatcher'ın Autopilot sisteminde ustalaşın - karmaşık geliştirme görevlerini AI yardımıyla yürüten güçlü otomasyon iş akışları. Tekrarlayan görevleri akıllı, yeniden kullanılabilir tariflere dönüştürün."
---

# Autopilot Sistemi

Autopilot sistemi, karmaşık geliştirme iş akışlarını akıllı, yürütülebilir tariflere dönüştüren Hatcher'ın taktik otomasyon çerçevesidir. Playbooks stratejiyi (standartlar ve kalıplar) tanımlarken, Autopilots bu kalıpların uygulanmasını AI destekli zeka ile otomatikleştiren taktiklerdir.

## Autopilots Nedir?

Autopilots şunları birleştiren yapılandırılmış iş akışlarıdır:

- **Görev Otomasyonu**: Hassasiyetle yürütülen çok adımlı süreçler
- **AI Zekası**: Yürütme sırasında bağlama duyarlı kararlar
- **Araç Entegrasyonu**: Geliştirme araçlarıyla sorunsuz etkileşim
- **Hata İşleme**: Yaygın sorunlardan akıllı kurtarma

Playbooks'unuzun elde etmek istediğinizi bildiren WHAT'ini bilen "tariflerdir", Autopilots ise bunu nasıl başaracağını bilen HOW'dur.

## Autopilot Yapısı

Temel bir Autopilot şu yapıyı takip eder:

```json
{
  "name": "Create Vue Component",
  "version": "1.0.0",
  "description": "Generate a complete Vue 3 component with tests",
  "inputs": [
    {
      "name": "componentName",
      "type": "string",
      "description": "Name of the component in PascalCase",
      "required": true
    },
    {
      "name": "useTypeScript",
      "type": "boolean",
      "description": "Use TypeScript",
      "default": true
    }
  ],
  "steps": [
    {
      "name": "create-component",
      "action": "file.create",
      "path": "src/components/${componentName}.vue"
    },
    {
      "name": "create-test",
      "action": "file.create",
      "path": "tests/${componentName}.spec.ts"
    },
    {
      "name": "validate-quality",
      "action": "run.action",
      "name": "test:component"
    }
  ]
}
```

## Yerleşik Autopilots

Hatcher, yaygın geliştirme kalıpları için güçlü Autopilots ile gelir:

### Component Autopilots

- **Create Component**: Testlerle birlikte tam bileşenler oluşturun
- **Extract Component**: Kodu yeniden kullanılabilir bileşenlere yeniden düzenleyin
- **Update Props**: Bileşen arayüzlerini güvenli bir şekilde değiştirin

### Refactoring Autopilots

- **Extract Function**: Mantığı yardımcı fonksiyonlara çekin
- **Rename Symbol**: Tüm kod tabanında güvenli bir şekilde yeniden adlandırın
- **Move Module**: Import güncellemeleriyle kodu yeniden konumlandırın

### Testing Autopilots

- **Generate Tests**: Uygulamadan test süitleri oluşturun
- **Update Snapshots**: Test anlık görüntülerini akıllıca yenileyin
- **Coverage Report**: Test kapsamını analiz edin ve geliştirin

### Documentation Autopilots

- **Generate JSDoc**: Kod analizinden dokümantasyon ekleyin
- **Update README**: Dokümantasyonu senkronize tutun
- **API Documentation**: Koddan API dokümanları oluşturun

## Özel Autopilots Oluşturma

### Temel İş Akışı Autopilots

Ekibinizin spesifik iş akışları için Autopilots oluşturun:

```yaml
name: Setup New Feature
description: Initialize a new feature with all required structure
inputs:
  - name: featureName
    type: string
    required: true
  - name: includeTests
    type: boolean
    default: true

steps:
  - name: Create feature directory
    action: directory.create
    path: src/features/${featureName}

  - name: Generate index file
    action: file.create
    path: src/features/${featureName}/index.ts
    template: feature-index

  - name: Create component structure
    action: run.autopilot
    name: Create Vue Component
    inputs:
      componentName: ${featureName}View

  - name: Setup routing
    action: file.modify
    path: src/router/index.ts
    operation: add-route
    route:
      path: /${featureName}
      component: ${featureName}View

  - name: Validate with Actions
    action: run.actions
    actions: ["test:unit", "lint:check", "types:validate"]
```

### AI ile Geliştirilmiş Autopilots

Akıllı görev yürütme için AI'den yararlanın:

```yaml
name: Optimize Component Performance
description: Analyze and optimize Vue component performance
ai-mode: enhanced

steps:
  - name: Analyze component
    action: ai.analyze
    prompt: |
      Analyze this Vue component for performance issues:
      - Unnecessary re-renders
      - Missing memoization
      - Inefficient computed properties
      - Large bundle size

  - name: Apply optimizations
    action: ai.refactor
    playbooks:
      - vue-performance
      - bundle-optimization
    constraints:
      - Maintain all existing functionality
      - Keep TypeScript types intact
      - Preserve component API

  - name: Verify changes
    action: run.actions
    actions: ['test:component', 'performance:benchmark']
```

## Autopilot Tetikleyicileri

### Manuel Yürütme

Autopilots'u talep üzerine çalıştırın:

```bash
hatcher run create-component --name UserProfile
```

### Dosya İzleme Tetikleyicileri

Dosya değişikliklerinde Autopilots'u çalıştırın:

```json
{
  "triggers": [
    {
      "type": "file-change",
      "pattern": "**/*.vue",
      "autopilot": "update-component-docs"
    }
  ]
}
```

### Git Hook Entegrasyonu

Git iş akışlarıyla Autopilots'u otomatikleştirin:

```json
{
  "triggers": [
    {
      "type": "pre-commit",
      "autopilot": "format-and-lint"
    },
    {
      "type": "post-merge",
      "autopilot": "update-dependencies"
    }
  ]
}
```

## Autopilot Kompozisyonu

### Sıralı Autopilots

Karmaşık iş akışları için Autopilots'u zincirleyin:

```yaml
name: Complete Feature Development
steps:
  - action: run.autopilot
    name: Create Component

  - action: run.autopilot
    name: Generate Tests

  - action: run.autopilot
    name: Update Documentation

  - action: git.commit
    message: 'feat: Add ${featureName} component'

  - action: run.actions
    name: Final Quality Gates
    actions: ['coverage:verify', 'bundle:size']
```

### Paralel Autopilots

Bağımsız görevleri aynı anda yürütün:

```yaml
name: Project Setup
parallel: true
steps:
  - action: npm.install
  - action: generate.types
  - action: setup.environment
```

### Koşullu Autopilots

İş akışlarınıza mantık ekleyin:

```yaml
steps:
  - name: Check TypeScript
    action: config.check
    key: useTypeScript

  - name: Generate types
    condition: ${steps.checkTypeScript.result}
    action: typescript.generate
```

## Hata İşleme

### Yeniden Deneme Mantığı

Geçici hataları zarif bir şekilde ele alın:

```yaml
steps:
  - name: API Setup
    action: api.initialize
    retry:
      attempts: 3
      delay: 1000
      backoff: exponential
```

### Yedek Autopilots

Alternatif yollar sağlayın:

```yaml
steps:
  - name: Use npm
    action: npm.install
    fallback:
      - action: yarn.install
      - action: pnpm.install
```

### Hata Kurtarma

Başarısızlıkta temizleyin:

```yaml
steps:
  - name: Database migration
    action: db.migrate
    onError:
      - action: db.rollback
      - action: notify.team
        message: Migration failed
```

## Autopilot Marketi

### Topluluk Autopilots

Topluluktan Autopilots'a göz atın ve yükleyin:

- **Framework'e özgü**: React, Vue, Angular için optimize edilmiş
- **Araç entegrasyonları**: Docker, Kubernetes, CI/CD
- **Alan spesifik**: E-ticaret, SaaS, Mobil

### Autopilots Yayınlama

Autopilots'unuzu toplulukla paylaşın:

```bash
hatcher autopilot publish my-awesome-workflow
```

### Autopilot Sürümleme

- **Anlamsal Sürümleme**: Uyumluluğu takip edin
- **Bağımlılık Yönetimi**: Autopilot bağımlılıklarını yönetin
- **Güncelleme Bildirimleri**: İyileştirmelerden haberdar olun

## Yapılandırma

### Global Autopilots

Tüm projeler için varsayılan Autopilots'u yapılandırın:

```json
{
  "globalAutopilots": [
    "code-formatter",
    "commit-validator",
    "dependency-checker"
  ]
}
```

### Proje Autopilots

`hatcher.config.json`'da projeye özgü Autopilots tanımlayın:

```json
{
  "autopilots": {
    "directory": "./autopilots",
    "autoload": ["setup", "deploy"],
    "aliases": {
      "dev": "start-development",
      "ship": "deploy-production"
    }
  }
}
```

## En İyi Uygulamalar

### Autopilot Tasarımı

- **Tek Sorumluluk**: Her Autopilot bir iş akışını iyi yönetmelidir
- **İdempotent**: Autopilots birden çok kez çalıştırmak güvenli olmalıdır
- **Birleştirilebilir**: Autopilots'u birlikte çalışacak şekilde tasarlayın
- **Dokümante**: Net açıklamalar ve örnekler

### Performans

- **Sonuçları Önbelleğe Alın**: Gereksiz işlemlerden kaçının
- **Paralel Yürütme**: Mümkün olduğunda paralellikten yararlanın
- **Aşamalı İyileştirme**: Basit başlayın, gerektiğinde karmaşıklık ekleyin

### Güvenlik

- **Girdi Doğrulaması**: Yürütmeden önce tüm girdileri doğrulayın
- **Sandbox Yürütme**: Güvenilmeyen Autopilots'u güvenli bir şekilde çalıştırın
- **Denetim Günlüğü**: Tüm Autopilot yürütmelerini takip edin

## Playbooks ve Actions ile Entegrasyon

Autopilots, Playbooks (strateji) ve Actions (doğrulama) arasında orkestra eder:

```yaml
name: Implement Feature
playbooks:
  - vue3-typescript # Takip edilecek standartlar
  - team-standards # Kullanılacak kalıplar

steps:
  - name: Generate component
    action: ai.create
    prompt: Create a Vue component following our standards

  - name: Apply team patterns
    action: playbook.apply
    strict: true

  - name: Validate with Actions
    action: run.actions
    actions:
      - test:unit # Testlerin geçtiğini doğrula
      - lint:check # Kod kalitesini doğrula
      - coverage:verify # Test kapsamını doğrula
```

## İzleme ve Analitik

### Yürütme Takibi

Autopilot performansını izleyin:

- **Yürütme Süresi**: Süreyi ve darboğazları takip edin
- **Başarı Oranı**: Güvenilirliği izleyin
- **Kullanım Kalıpları**: Ekip iş akışlarını anlayın

### Optimizasyon Önerileri

AI destekli içgörüler:

- **İş Akışı İyileştirmeleri**: Daha iyi Autopilot dizileri önerin
- **Performans İpuçları**: Optimizasyon fırsatlarını belirleyin
- **Kalıp Algılama**: Otomasyon fırsatlarını keşfedin

## Gelecek Özellikler

### Görsel Autopilot Oluşturucu

Kodsuz karmaşık iş akışları oluşturmak için sürükle ve bırak arayüzü.

### AI Autopilot Üretimi

Geliştirici kalıplarını gözlemleyerek otomatik olarak Autopilots üretin.

### Dağıtık Yürütme

Büyük paralellik için Autopilots'u birden fazla makinede çalıştırın.

### Zaman Yolculuğu Hata Ayıklama

Karmaşık iş akışlarında hata ayıklamak için Autopilot yürütme geçmişinde adım adım ilerleyin.

## Taktik Otomasyonun Gücü

Autopilot sistemi, tekrarlayan geliştirme görevlerini zamanla öğrenen ve gelişen akıllı, otomatik iş akışlarına dönüştürür. Stratejik Playbooks ile doğrulayan Actions arasındaki boşluğu köprüleyen, standartlarınıza saygı gösterirken geliştirmenizi hızlandıran eksiksiz bir otomasyon ekosistemi yaratan taktik katmandırlar.

Unutmayın: **Playbooks WHAT'i tanımlar, Autopilots HOW'u yürütür, Actions IF'i doğrular.**

<PageCTA
  title="İlk Autopilot'unuzu Konuşlandırın"
  subtitle="Karmaşık iş akışlarını akıllı, kendi kendini geliştiren AI ajanlarıyla otomatikleştirin"
  buttonText="Autopilot Sistemini Başlatın"
  buttonLink="/tr/autopilots"
  buttonStyle="secondary"
  footer="Tekrardan otomasyona. Manuel'den büyülüye."
/>
