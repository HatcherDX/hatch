---
title: "Katkıda Bulunma | Hatcher Açık Kaynak Topluluğuna Katılın"
description: "Hatcher IDE'ye, açık kaynaklı AI geliştirme platformuna nasıl katkıda bulunacağınızı öğrenin. Kontrollü AI geliştirme araçlarına katkıda bulunmak için kurulum kılavuzları, kodlama standartları ve topluluk yönergelerini bulun."
---

# Hatcher'a Katkıda Bulunma

Hatcher'a katkıda bulunma ilginiz için teşekkür ederiz! AI çağında yazılım geliştirmenin geleceğini inşa etme hareketine katılıyorsunuz—geliştiricilerin AI güçlendirmesinden yararlanırken mutlak kontrolü koruduğu bir gelecek. Bu kılavuz, başlamak için pratik adımları sağlar, ancak henüz okumadıysanız, çalışmamızın arkasındaki "neden"i anlamak için [**Felsefemizi**](/tr/philosophy) okumanızı öneririz.

Hatcher'a katkıda bulunarak, sadece kod yazmıyorsunuz—insanlığın AI çağında yazılımı nasıl inşa edeceğini tanımlamaya yardımcı oluyorsunuz. Hata düzeltmesi, özellik veya dokümantasyon iyileştirmesi olsun her katkı, Kontrollü Güçlendirme misyonumuzu ilerletiyor.

## Davranış Kuralları

Bu projeye katılarak, [Davranış Kurallarımızı](CODE_OF_CONDUCT.md) kabul etmiş olursunuz. Lütfen katkıda bulunmadan önce okuyun.

## Başlarken

### Geliştirme Kurulumu

1. **Fork ve Clone**

   ```bash
   git clone https://github.com/your-username/dx-engine.git
   cd dx-engine
   ```

2. **Bağımlılıkları Kur**

   ```bash
   pnpm install
   ```

3. **Geliştirme Sunucusunu Başlat**
   ```bash
   pnpm dev
   ```

### Proje Yapısı

```
dx-engine/
├── apps/                           # Uygulama paketleri
│   ├── electron/                   # Ana Electron süreci
│   ├── web/                       # Renderer süreci (Vue 3 + TypeScript)
│   ├── preload/                   # Electron için preload scriptleri
│   └── docs/                      # VitePress dokümantasyon sitesi
├── universal/                      # Paylaşılan kütüphaneler ve sistemler
│   ├── terminal-system/           # Terminal emülasyonu ve yönetimi
│   ├── storage/                   # Depolama soyutlama katmanı
│   ├── git-genius/               # Git operasyonları ve zaman çizelgesi
│   ├── shared-rendering/         # Paylaşılan render yardımcı programları
│   └── shared-utils/             # Ortak yardımcı programlar
├── tooling/                       # Geliştirme ve build araçları
│   ├── vite-plugin/              # Özel Vite eklentileri
│   ├── translation-system/       # i18n ve çeviri araçları
│   └── puppeteer-google-translate/ # Otomatik çeviri
├── scripts/                       # Build, test ve yardımcı scriptler
├── brand/                         # Marka varlıkları (logolar, simgeler, vb.)
└── types/                         # Paylaşılan TypeScript tip tanımları
```

## Katkı Yolları

### Hata Bildirme

Hata bildirirken lütfen şunları ekleyin:

- **Net Açıklama**: Ne oldu vs. ne beklediniz
- **Yeniden Üretme Adımları**: Sorunu yeniden oluşturmak için detaylı adımlar
- **Ortam**: OS, Node.js sürümü, pnpm sürümü
- **Ekran Görüntüleri**: Uygulanabilirse, görsel kanıt ekleyin

Issue oluştururken [hata raporu şablonumuzu](.github/ISSUE_TEMPLATE/bug_report.md) kullanın.

### Özellik Talepleri

Özellik taleplerini memnuniyetle karşılıyoruz! Lütfen şunları ekleyin:

- **Kullanım Durumu**: Bu özellik neden gerekli?
- **Önerilen Çözüm**: Nasıl çalışmalı?
- **Alternatifler**: Hangi diğer yaklaşımları değerlendirdiniz?

[Özellik talebi şablonumuzu](.github/ISSUE_TEMPLATE/feature_request.md) kullanın.

### Kod Katkıları

#### Başlamadan Önce

1. **Mevcut Issue'ları Kontrol Edin**: İlgili issue'ları veya özellik taleplerini arayın
2. **Büyük Değişiklikleri Tartışın**: Önemli değişiklikleri tartışmak için bir issue açın
3. **Küçük Başlayın**: Küçük, odaklanmış katkılarla başlayın

#### Geliştirme İş Akışı

1. **Bir Branch Oluşturun**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Değişiklik Yapın**
   - Kodlama standartlarımızı takip edin (aşağıya bakın)
   - Yeni işlevsellik için testler yazın
   - Gerektiğinde dokümantasyonu güncelleyin

3. **Değişikliklerinizi Test Edin**

   ```bash
   pnpm build
   pnpm test
   ```

4. **Değişikliklerinizi Commit Edin**

   ```bash
   git commit -m "feat: add amazing new feature"
   ```

   [Conventional Commits](https://conventionalcommits.org/) formatını takip ediyoruz.

5. **Push ve PR Oluşturun**
   ```bash
   git push origin feature/your-feature-name
   ```

## Kodlama Standartları

Hatcher, tüm projede tutarlılık, sürdürülebilirlik ve yüksek kaliteli kod sağlamak için katı kodlama standartlarını takip eder.

**📋 [Tam Kodlama Standartları Kılavuzu](/tr/coding-standards)**

### Hızlı Referans

**TypeScript**

- Strict modu etkinleştirilmiş tüm yeni kodlar için TypeScript kullanın
- Nesne şekilleri için tip'ler yerine arayüzleri tercih edin
- Değişkenler ve fonksiyonlar için anlamlı, açıklayıcı adlar kullanın
- Tüm public API'ler için JSDoc yorumları ekleyin

**Vue.js**

- `<script setup>` sözdizimi ile Composition API kullanın
- TypeScript arayüzleriyle props ve emits tanımlayın
- Yeniden kullanılabilir mantık için composable'ları tercih edin
- Tek dosya bileşen yapısını takip edin: script → template → style

**Stil**

- Bileşene özgü CSS için kapsamlı stiller kullanın
- Sınıf adlandırması için BEM metodolojisini takip edin
- Temalama için CSS özel özelliklerini kullanın
- Düzenler için flexbox ve CSS Grid tercih edin

**Git Kuralları**

- [Conventional Commits](https://conventionalcommits.org/) formatını takip edin
- Açıklayıcı branch adları kullanın: `feature/`, `fix/`, `docs/`, `refactor/`
- Commit'leri atomik tutun ve tek bir değişikliğe odaklanın

### Kod Kalite Araçları

Standartları uygulamak için otomatik araçlar kullanıyoruz:

```bash
# Lint ve kod stili sorunlarını düzelt
pnpm lint:fix

# Tip kontrolü
pnpm typecheck

# Tüm testleri çalıştır
pnpm test

# Kodu biçimlendir
pnpm format
```

### Pre-commit Hook'ları

Husky her commit'ten önce otomatik kontroller çalıştırır:

- Kod kalitesi için ESLint
- TypeScript derlemesi
- Biçimlendirme için Prettier
- Kritik yollar için birim testleri

Detaylı yönergeler, örnekler ve en iyi uygulamalar için [Kodlama Standartları](/tr/coding-standards) dokümantasyonumuza bakın.

## Dokümantasyon

### Dokümantasyon Türleri

- **Kod Yorumları**: Karmaşık mantığı açıklayın
- **README Dosyaları**: Genel bakış ve kurulum talimatları
- **API Dokümantasyonu**: Public arayüzleri belgeleyin
- **Kullanıcı Kılavuzları**: Son kullanıcılar için nasıl yapılır kılavuzları

### Yazma Yönergeleri

- Net, özlü dil kullanın
- Kod örnekleri ekleyin
- Dokümantasyonu kod değişiklikleriyle güncel tutun
- Tüm kod örneklerini test edin

## Pull Request Süreci

### Göndermeden Önce

- [ ] Kod proje standartlarını takip ediyor
- [ ] Testler yerel olarak geçiyor
- [ ] Dokümantasyon güncellendi
- [ ] Değişiklikler odaklanmış ve atomik

### PR Açıklama Şablonu

```markdown
## Açıklama

Değişikliklerin kısa açıklaması

## Değişiklik Türü

- [ ] Hata düzeltmesi
- [ ] Yeni özellik
- [ ] Breaking change
- [ ] Dokümantasyon güncellemesi

## Test

- [ ] Birim testleri eklendi/güncellendi
- [ ] Entegrasyon testleri eklendi/güncellendi
- [ ] Manuel test tamamlandı

## Ekran Görüntüleri (uygulanabilirse)

UI değişiklikleri için önce/sonra ekran görüntüleri ekleyin
```

### İnceleme Süreci

1. **Otomatik Kontroller**: CI/CD geçmelidir
2. **Kod İncelemesi**: En az bir bakımcı incelemesi
3. **Test**: Değişiklikler geliştirme ortamında test edilir
4. **Dokümantasyon**: Dokümanların güncellendiğini doğrulayın
5. **Merge**: Onaylanan PR'ları squash ve merge edin

## Yayın Süreci

### Sürümleme

[Anlamsal Sürümlemeyi](https://semver.org/) takip ediyoruz:

- **MAJOR**: Breaking değişiklikler
- **MINOR**: Yeni özellikler (geriye dönük uyumlu)
- **PATCH**: Hata düzeltmeleri (geriye dönük uyumlu)

### Yayın İş Akışı

1. **Feature Freeze**: Yeni özellikleri kabul etmeyi durdurun
2. **Test**: Kapsamlı test aşaması
3. **Dokümantasyon**: Changelog ve dokümanları güncelleyin
4. **Yayın**: Etiketli yayın oluşturun
5. **Duyuru**: Değişiklikleri topluluğa iletin

## Topluluk

### İletişim Kanalları

- **GitHub Issues**: Hata raporları ve özellik talepleri
- **GitHub Discussions**: Genel sorular ve fikirler
- **Discord**: Toplulukla gerçek zamanlı sohbet
- **Twitter**: Güncellemeler için [@HatcherDX](https://twitter.com/HatcherDX)'i takip edin

### Topluluk Yönergeleri

- **Saygılı Olun**: Herkese saygıyla davranın
- **Yapıcı Olun**: Sorunlar değil çözümlere odaklanın
- **Sabırlı Olun**: Hepimizin gönüllü olduğunu unutmayın
- **Yardımcı Olun**: Bilgi paylaşın ve başkalarına yardım edin

## Tanınma

Tüm katkıları takdir ediyoruz! Katkıcılar şunlarda tanınır:

- **CONTRIBUTORS.md**: Tüm proje katkıcılarının listesi
- **Yayın Notları**: Önemli katkılar vurgulanır
- **Sosyal Medya**: Topluluk katkıları öne çıkarılır

## Geliştirme Kaynakları

### Yararlı Bağlantılar

- [Vue.js Dokümantasyonu](https://vuejs.org/)
- [Electron Dokümantasyonu](https://electronjs.org/)
- [TypeScript El Kitabı](https://typescriptlang.org/)
- [Vite Dokümantasyonu](https://vitejs.dev/)

### Geliştirme Araçları

- **VS Code**: Vue ve TypeScript uzantıları ile önerilen editör
- **Vue DevTools**: Vue uygulamalarını hata ayıklamak için tarayıcı uzantısı
- **Electron DevTools**: Yerleşik hata ayıklama araçları

## Sorular?

Katkıda bulunma hakkında sorularınız varsa:

1. Mevcut [GitHub Discussions](https://github.com/HatcherDX/dx-engine/discussions)'ı kontrol edin
2. [Discord topluluğumuza](https://discord.gg/hatcher) katılın
3. Yeni bir discussion veya issue oluşturun

Hatcher'a katkıda bulunduğunuz için teşekkür ederiz! Birlikte, AI destekli geliştirmenin geleceğini inşa ediyoruz.

<PageCTA
  title="İzinizi Bırakmaya Hazır mısınız?"
  subtitle="AI çağı için Constitutional IDE'yi inşa eden topluluğa katılın"
  buttonText="Katkıda Bulunmaya Başlayın"
  buttonLink="https://github.com/HatcherDX/dx-engine/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
  buttonStyle="secondary"
  footer="Her katkı geliştirmenin geleceğini şekillendirir"
/>
