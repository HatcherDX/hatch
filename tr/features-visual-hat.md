---
title: Visual HAT - Ekran Görüntüsünden Sisteme
description: Herhangi bir görsel girdiyi işlevsel koda dönüştürün. Maketlerden ekran görüntülerine, beyaz tahta çizimlerine — görebiliyorsanız, Visual HAT inşa edebilir.
---

# <DocIcon type="visual" inline /> Visual HAT

> **Direk Bağlantısı:** Visual HAT, ["Metinsel Tahminlerden Görsel Niyete"](/tr/philosophy#pillar-1-from-textual-guesswork-to-visual-intent) felsefemizi somutlaştırır, AI iletişimindeki belirsizliği ortadan kaldırmak için [Visual-to-Code Bridge](/tr/visual-to-code)'i uygular.

## Ekran Görüntüsünden Sisteme

Visual HAT, vizyon ve uygulama arasındaki köprüdür. Herhangi bir görsel şeye yöneltin — bir ekran görüntüsü, bir maket, rakip bir site, hatta peçete çizimi — ve işlevsel, üretime hazır koda dönüştüğünü izleyin.

### "Bunu Şöyle Yap"nın Sonu

Artık yok:

- Tasarımları eşleştirmek için piksel itme
- "2px sola taşıyabilir misin?"
- Aynı düzeni 10 kez açıklama
- Başka yerlerde zaten var olanı yeniden inşa etme

Sadece Visual HAT'e ne istediğinizi gösterin. İnşa eder. Mükemmel şekilde.

## Nasıl Çalışır

### 1. Yakalama

Herhangi bir şeye yönelin:

- Mevcut uygulamaların ekran görüntüleri
- Figma/Sketch tasarımları
- Rakip web siteleri
- Elle çizilmiş wireframe'ler
- Hatta beyaz tahtaların fotoğrafları

### 2. Analiz

Visual HAT şunları anlar:

- Düzen yapısı ve hiyerarşi
- Bileşen kalıpları
- Etkileşim modelleri
- Tasarım sistemi kuralları
- Responsive davranış

### 3. Oluşturma

Üretime hazır kod alın:

- Anlamsal HTML/JSX
- Framework'ünüzle stillendirilmiş
- Varsayılan olarak responsive
- Erişilebilirlik dahil
- Animasyonlar çıkarılmış

## Gerçek Dünya Büyüsü

### Senaryo 1: Rekabetçi Parite

**Zorluk**: "Panomuzun Stripe'ınki gibi görünmesini ama markamızla istiyoruz"

**Visual HAT Çözümü**:

1. Stripe'ın panosunun ekran görüntüsünü alın
2. HAT düzen kalıplarını çıkarır
3. Tasarım sisteminizi uygular
4. Teknoloji yığınınızın kodunu üretir
5. Bileşen kütüphanenizi korur

**Sonuç**: Aylar değil saatler içinde Stripe kalitesinde UI.

### Senaryo 2: Tasarımdan Koda Boru Hattı

**Zorluk**: Tasarımcı Figma'yı günceller, geliştiriciler uygulamak için çırpınır.

**Visual HAT Çözümü**:

```yaml
pipeline: figma-sync
trigger: design-updated
actions:
  - extract: components-changed
  - generate: react-components
  - test: visual-regression
  - pr: auto-create
```

**Sonuç**: Tasarımlar otomatik olarak kod olur. Tasarımcılar tam vizyonlarını görür. Geliştiriciler mantığa odaklanır.

### Senaryo 3: Legacy UI Modernizasyonu

**Zorluk**: Eski jQuery UI'nin modern React olması gerekiyor.

**Visual HAT Çözümü**:

1. Mevcut UI'nin ekran görüntüsünü alın
2. HAT UI kalıplarını tanımlar
3. Modern bileşenlere eşler
4. React eşdeğerini üretir
5. Tam işlevselliği korur

**Sonuç**: Spesifikasyonlar olmadan piksel mükemmel modernizasyon.

## Gelişmiş Yetenekler

### Etkileşim Algılama

Visual HAT sadece statik düzenleri görmez:

- **Hover Durumları**: Tasarım varyasyonlarından çıkarır
- **Animasyonlar**: Hareket kalıplarını algılar
- **Mikro etkileşimler**: İnce davranışları yeniden üretir
- **Durum Değişiklikleri**: UI akışlarını anlar

### Tasarım Sistemi Entegrasyonu

```yaml
visual-config:
  design-system: 'our-company-ds'
  component-mapping:
    - detected: 'button-primary'
      use: "Button variant='primary'"
    - detected: 'card-layout'
      use: 'Card elevation={2}'
  style-overrides:
    - colors: 'use-brand-palette'
    - spacing: 'use-8px-grid'
```

### Çok Platformlu Oluşturma

Bir ekran görüntüsü, birden fazla çıktı:

- **Web**: React, Vue, Angular
- **Mobil**: React Native, Flutter
- **Masaüstü**: Electron, Tauri
- **E-posta**: MJML şablonları
- **Baskı**: PDF düzenleri

## Diğer HATs ile Entegrasyon

Visual HAT her şeyi güçlendirir:

- **Code HAT ile**: Görsel → Anında işlevsel
- **Gen HAT ile**: Yakalanan tasarımları geliştirin
- **Time Graph HAT ile**: Görsel evrimi izleyin

## Komut Örnekleri

```bash
# Ekran görüntüsünü koda dönüştürün
hatcher visual convert --input screenshot.png --output react

# Figma'yı kod tabanıyla senkronize edin
hatcher visual sync --figma-url "..." --target "./src/components"

# Tasarım sistemini çıkarın
hatcher visual extract-system --source "competitor.com" --output "ds.yaml"

# Responsive varyantlar oluşturun
hatcher visual responsive --input "desktop.png" --breakpoints "mobile,tablet"
```

## Görsel İş Akışı Devrimi

### Visual HAT Öncesi

1. Tasarımcı maket oluşturur (2 gün)
2. Geliştirici tasarımı yorumlar (1 gün)
3. Detaylar hakkında gidip gelme (2 gün)
4. Responsive adaptasyonlar (1 gün)
5. Erişilebilirlik eklemeleri (1 gün)
6. Son cilalama (1 gün)

**Toplam: 8 gün**

### Visual HAT ile

1. Tasarımcı maket oluşturur (2 gün)
2. Visual HAT kod üretir (5 dakika)
3. Geliştirici mantık ekler (2 saat)

**Toplam: 2.5 gün**

## Kalıp Tanıma Kütüphanesi

Visual HAT her dönüşümden öğrenir:

- **Yaygın Kalıplar**: Başlıklar, altbilgiler, navigasyon
- **Sektör Standartları**: E-ticaret, SaaS, içerik siteleri
- **Kültürel Varyasyonlar**: RTL düzenleri, Asya tipografisi
- **Erişilebilirlik Kalıpları**: Ekran okuyucu optimizasyonları

## Görsel Özgürlük

Visual HAT tasarımı atlamakla ilgili değil — **mükemmel uygulamayla** ilgilidir:

- Artık uygulama kayması yok
- Artık "makete neredeyse benzer" yok
- Artık responsive tahmin yok
- Artık erişilebilirlik sonradan düşünceleri yok

Tasarımcılar tasarlar. Visual HAT uygular. Mükemmel şekilde.

---

Vizyonunuzu kodda görmeye hazır mısınız? [Visual HAT ile Başlayın](/tr/getting-started#visual-hat)

<PageCTA
  title="Vizyondan Mükemmel Koda"
  subtitle="Herhangi bir tasarımı anında piksel mükemmel, responsive uygulamaya dönüştürün"
  buttonText="Visual HAT'i Deneyin"
  buttonLink="/tr/getting-started"
  buttonStyle="secondary"
  footer="Bir kez tasarlayın. Mükemmel uygulayın."
/>
