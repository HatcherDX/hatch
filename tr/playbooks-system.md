---
title: "Playbooks Sistemi | Ekipler için Dinamik AI Bağlam Yönetimi"
description: "Hatcher'ın Playbooks sisteminde ustalaşın - AI bağlam yönetimi için yeni nesil çözüm. Ekibinizin kodlama standartlarını ve mimari kararlarını AI'ya öğreten dinamik, yönetilebilir Kurumsal Anayasalar oluşturun."
---

# Playbooks Sistemi

> **Not:** Bu sayfa, [Constitutional Engineering felsefemizin](/tr/constitutional-engineering) teknik uygulamasını açıklar. Henüz felsefi temeli okumadıysanız, playbook'ların arkasındaki "neden"i anlamak için oradan başlamanızı öneririz.

Playbooks sistemi, Hatcher'ın AI geliştirmesindeki bağlam sorununa ikinci nesil çözümüdür. `Claude.md` gibi statik dosyalar bir başlangıç noktası sağlarken, Playbook'lar AI ajanlarınız için gerçek bir Kurumsal Anayasa görevi gören dinamik, merkezi ve yönetilebilir bir sistem sunar.

## Playbook'lar Nedir?

Playbook'lar, ekibinizin şunları yakalayan yapılandırılmış konfigürasyon dosyalarıdır:

- **Kodlama Standartları**: Biçimlendirme, adlandırma kuralları ve stil tercihleri
- **Mimari Kararlar**: Bileşen kalıpları, durum yönetimi yaklaşımları
- **Framework Özellikleri**: Kütüphaneye özgü en iyi uygulamalar ve kalıplar
- **İş Kuralları**: Alan özgü mantık ve kısıtlamalar

## Playbook Yapısı

Temel bir Playbook şu yapıyı takip eder:

```json
{
  "name": "Vue 3 Component Standards",
  "version": "1.0.0",
  "framework": "vue",
  "rules": [
    {
      "category": "components",
      "type": "naming",
      "pattern": "PascalCase",
      "description": "All Vue components must use PascalCase naming"
    },
    {
      "category": "composition",
      "type": "api",
      "preference": "composition-api",
      "description": "Prefer Composition API over Options API"
    }
  ],
  "examples": [
    {
      "title": "Standard Component Structure",
      "code": "..."
    }
  ]
}
```

## Yerleşik Playbook'lar

Hatcher, popüler framework'ler için küratörlü Playbook'larla birlikte gelir:

### Vue.js Playbook'ları

- **Vue 3 + TypeScript**: Modern composition kalıpları
- **Nuxt.js**: SSR ve dosya tabanlı yönlendirme kuralları
- **Pinia**: Durum yönetimi en iyi uygulamaları

### React Playbook'ları

- **React + TypeScript**: Fonksiyonel bileşenler ve hook'lar
- **Next.js**: App Router ve sunucu bileşenleri
- **Zustand**: Hafif durum yönetimi

### Evrensel Playbook'lar

- **TypeScript Standartları**: Tip tanımları ve generic'ler
- **CSS-in-JS**: Styled-components ve emotion kalıpları
- **Testing**: Jest ve Cypress kuralları

## Özel Playbook'lar Oluşturma

### Ekibe Özgü Kurallar

Ekibinizin benzersiz kurallarını yakalayan Playbook'lar oluşturun:

```json
{
  "name": "Acme Corp Standards",
  "extends": ["vue3-typescript"],
  "rules": [
    {
      "category": "api",
      "type": "structure",
      "pattern": "services/api/*.service.ts",
      "description": "All API calls must go through service layer"
    },
    {
      "category": "components",
      "type": "props",
      "requirement": "interfaces",
      "description": "Component props must use TypeScript interfaces"
    }
  ]
}
```

### Projeye Özgü Bağlam

Projeye özgü bilgi ekleyin:

```json
{
  "name": "E-commerce Dashboard",
  "extends": ["acme-corp-standards"],
  "context": {
    "domain": "e-commerce",
    "entities": ["Product", "Order", "Customer"],
    "apis": [
      {
        "name": "OrdersAPI",
        "baseUrl": "/api/orders",
        "methods": ["GET", "POST", "PUT", "DELETE"]
      }
    ]
  }
}
```

## Playbook Kalıtımı

Playbook'lar ölçeklenebilir konfigürasyon için kalıtımı destekler:

```
Universal TypeScript
    ↓
Vue 3 + TypeScript
    ↓
Acme Corp Standards
    ↓
Project-Specific Rules
```

## AI Entegrasyonu

Hatcher, ilgili Playbook bağlamını AI promptlarına otomatik olarak enjekte eder:

### Bağlam Seçimi

- **Otomatik**: Dosya türlerine ve proje yapısına dayalı
- **Manuel**: Hangi Playbook'ların kullanılacağını açıkça belirtin
- **Akıllı**: Zamanla tercihlerinizden öğrenin

### Prompt Geliştirme

AI motorları şu gibi yapılandırılmış bağlam alır:

```
CONTEXT: Vue 3 Component Creation
PLAYBOOK: vue3-typescript, acme-corp-standards
RULES:
- Use Composition API with <script setup>
- Props must use TypeScript interfaces
- Components must be PascalCase
- API calls go through service layer
```

## Pazar Yeri ve Paylaşım

### Topluluk Playbook'ları

Topluluk tarafından oluşturulan Playbook'lara göz atın ve kurun:

- **Framework'e özgü**: Popüler kütüphaneler için optimize edilmiş kalıplar
- **Sektöre özgü**: Farklı sektörler için alan bilgisi
- **Ekip tarafından test edilmiş**: Başarılı projelerden gerçek dünya kuralları

### Playbook'larınızı Yayınlama

Ekibinizin uzmanlığını paylaşın:

```bash
hatcher playbook publish acme-corp-standards
```

### Versiyon Yönetimi

- **Anlamsal Sürümleme**: Değişiklikleri ve uyumluluğu izleyin
- **Güncelleme Bildirimleri**: Topluluk iyileştirmeleriyle güncel kalın
- **Geri Alma Desteği**: Sorunlu güncellemeleri güvenle geri alın

## Konfigürasyon

### Global Playbook'lar

Tüm projeler için varsayılan Playbook'ları ayarlayın:

```json
{
  "globalPlaybooks": ["typescript-standards", "git-conventions"]
}
```

### Proje Geçersiz Kılma

`hatcher.config.json` dosyasında projeye özgü Playbook'ları belirtin:

```json
{
  "playbooks": ["vue3-typescript", "team-standards", "./custom-playbook.json"]
}
```

### Koşullu Yükleme

Bağlama göre farklı Playbook'ları yükleyin:

```json
{
  "conditional": {
    "**/*.test.ts": ["testing-standards"],
    "src/components/**": ["component-standards"],
    "src/api/**": ["api-standards"]
  }
}
```

## En İyi Uygulamalar

### Basit Başlayın

Framework temellerinden başlayın ve ekibe özgü kuralları kademeli olarak ekleyin:

1. **Framework Playbook'unu Kurun**: Anında %80 kapsam elde edin
2. **Ekip Kuralları Ekleyin**: Benzersiz kuralları yakalayın
3. **Zamanla Rafine Edin**: Gerçek kullanıma dayalı güncelleyin

### Güncel Tutun

- **Düzenli İncelemeler**: Kalıplar geliştikçe Playbook'ları güncelleyin
- **Ekip Geri Bildirimi**: Tüm ekibi Playbook bakımına dahil edin
- **Versiyon Kontrolü**: Playbook değişikliklerini kodla birlikte izleyin

### Etkiyi Ölçün

- **Tutarlılık Metrikleri**: Tanımlanan kalıplara uyumu izleyin
- **Hız İyileştirmeleri**: Geliştirme hızı kazançlarını ölçün
- **Kalite Göstergeleri**: Azalan kod incelemesi geri bildirimlerini izleyin

## Gelecek Özellikler

### AI Tarafından Oluşturulan Playbook'lar

Mevcut kod tabanlarını analiz ederek Playbook'ları otomatik olarak oluşturun.

### Gerçek Zamanlı Doğrulama

Kod yazarken canlı geri bildirim, Playbook uyumluluğunu sağlar.

### Ekip İşbirliği

Playbook güncellemeleri için işbirlikçi düzenleme ve onay iş akışları.

Playbooks sistemi, AI'yı genel bir kod üretecinden, tam gereksinimlerinizi ve kurallarınızı anlayan özel bir ekip üyesine dönüştürür.

<PageCTA
  title="İlk Playbook'unuzu Oluşturun"
  subtitle="AI'yı tam standartlarınızı takip eden özel bir ekip üyesine dönüştürün"
  buttonText="Playbook'lar Oluşturmaya Başlayın"
  buttonLink="/tr/getting-started"
  buttonStyle="secondary"
  footer="Sizin kalıplarınız. Sizin standartlarınız. Tutarlı bir şekilde uygulanır."
/>
