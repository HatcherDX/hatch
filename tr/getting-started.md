---
title: Başlangıç | Hatcher Açık Kaynak IDE'ye Katkıda Bulunun
description: Hatcher topluluğuna katılın. Geliştirme yol haritamız hakkında bilgi edinin, mevcut proje durumunu görün ve AI çağı için açık kaynak IDE'ye nasıl katkıda bulunabileceğinizi öğrenin.
---

# Hatcher ile Başlangıç

Hoş geldiniz, Öncü.

Yazılım geliştirmede yeni bir çağın temel aşamasına vardınız. Hatcher, bir zanaatkar topluluğu tarafından açık bir şekilde dövülüyor ve bu sizin çekiç almaya davetinizdir.

Bu rehber, Sıfırıncı Gün'de bize katılmak ve Constitutional IDE'nin geleceğini şekillendirmeye yardımcı olmak isteyen geliştiriciler içindir.

## Proje Durumu ve Yol Haritası

Vizyonumuz, iki farklı yapılandırmaya sahip tek bir platformdur. Bugün neredeyiz:

### <DocIcon type="constitutional" inline /> Hatcher Generative (Aktif Geliştirmede)

Bu, çekirdek ekibimizin mevcut odağıdır. Generative düğümü, geliştiricinin AI'yi üst düzey talimatlarla yönlendirdiği hızlı, yaratıcı geliştirme için komuta kokpitidir. Bu, yeni katılımcıların en hızlı etki yaratabilecekleri kod tabanı bölümüdür.

### <DocIcon type="building" inline /> Hatcher EGGs (Yol Haritasında)

EGGs (Enforced Governance Guardrails) düğümü, misyon kritik sistemler için nihai hedefimizdir. Her eylemin %100 deterministik ve denetlenebilir olduğu "havacılık temiz odası"nı temsil eder. **Bu işlevsellik henüz uygulanmamıştır** ve gelecek için heyecan verici bir mimari zorluk temsil eder. Uygulanması hakkında topluluk tartışmalarını ve fikirlerini bekliyoruz.

## Neden Hatcher'a Katkıda Bulunmalısınız?

Bu erken Alpha aşamasında bize katılarak, benzersiz bir fırsata sahipsiniz:

- **Temel Bir Aracı Şekillendirin:** Binlerce geliştirici tarafından kullanılacak bir aracın çekirdek mimarisini ve yönünü etkileyin.

- **Dünya Çapında Bir Stack ile Çalışın:** Rust, TypeScript, WebAssembly ve son teknoloji AI prensipleriyle inşa edilmiş bir kod tabanına derinlemesine dalın.

- **İtibarınızı Oluşturun:** Hatcher Guild'de, zanaatkarlığa ve uzmanlığa değer veren bir toplulukta tanınmış bir kurucu katılımcı olun.

- **İlginç Sorunları Çözün:** Özel bir Git motoru inşa etmekten görsel bir UI-to-code köprüsü tasarlamaya kadar, üstesinden geldiğimiz zorluklar sıradan değildir.

## Nasıl Katkıda Bulunulur

Katılımcı olmaya hazır mısınız? Hatcher'ı şu anda çalıştırmanın tek yolu kaynaktan derlemektir.

### Ön Gereksinimler

Geliştirme ortamınızda bunların olduğundan emin olun:

- **Node.js** 22.0.0 veya üzeri
- **pnpm** 10.6.0 veya üzeri
- **Git**

### Kaynaktan Derleme

```bash
# Depoyu klonlayın
git clone https://github.com/HatcherDX/dx-engine.git
cd dx-engine

# Bağımlılıkları yükleyin
pnpm install

# Geliştirme modunu başlatın
pnpm dev
```

Bu, yerel makinenizde Hatcher IDE'yi başlatacak ve en son geliştirme derlemesini çalıştıracaktır.

### Vizyonumuzu Anlayın

Etkin bir şekilde katkıda bulunmak için temel felsefeyi anlamak önemlidir. Okumanız gereken tek sayfa:

- [Hatcher Felsefesi: Kontrollü Güçlendirme](/tr/philosophy)

### İlk Katkınızı Bulun

Başlamanın en iyi yolu mevcut bir sorunu ele almaktır.

- **Sorunlarımıza Göz Atın:** [GitHub Issues](https://github.com/HatcherDX/dx-engine/issues) sayfamıza gidin. good first issue veya help wanted etiketli sorunları arayın.

- **Sohbete Katılın:** Kodlamaya başlamadan önce, soruna bir yorum bırakın ve [Discord Topluluğu](https://discord.gg/cZ7PZvnMk4)'muza katılın. Yaklaşımınızı çekirdek ekiple tartışmak, katkınızın projenin yönüyle uyumlu olmasını sağlamanın en iyi yoludur.

- **Kılavuzlarımızı Okuyun:** Kodlama standartlarımız ve pull request sürecimiz hakkında ayrıntılar için depodaki [CONTRIBUTING.md](https://github.com/HatcherDX/dx-engine/blob/main/CONTRIBUTING.md) dosyamıza göz atın.

## Topluluğa Katılın

İşbirliği açıkta gerçekleşir. Sorularınız, fikirleriniz varsa veya sadece takip etmek istiyorsanız, bizi burada bulabilirsiniz:

- [Discord](https://discord.gg/cZ7PZvnMk4): Ekip ve diğer katılımcılarla gerçek zamanlı sohbet için ana merkez.

- [GitHub](https://github.com/HatcherDX/dx-engine/): Tüm kod, sorunlar ve pull request'ler için.

- Önemli haberler ve proje güncellemeleri için [@HatcherDX](https://twitter.com/HatcherDX)'i takip edin.

Geliştirmenin geleceğine hoş geldiniz!

<PageCTA
  title="Devrime Katılmaya Hazır mısınız?"
  subtitle="Bugün AI destekli geliştirmenin geleceğine katkıda bulunmaya başlayın"
  buttonText="Açık Sorunlara Göz Atın"
  buttonLink="https://github.com/HatcherDX/dx-engine/issues"
  buttonStyle="secondary"
  footer="Destek ve işbirliği için Discord topluluğumuza katılın"
/>
