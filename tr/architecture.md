---
title: "Mimari | Hatcher'ın Dört Sütunu"
description: "Hatcher'ın teknik mimarisini, Dört Sütunumuzun doğrudan bir uygulamasını keşfedin. Deterministik, model agnostik ve geliştirici merkezli bir IDE'yi nasıl inşa ettiğimizi öğrenin."
---

# Hatcher Mimarisi

Hatcher'ın mimarisi, **Dört Sütunumuzun** kodda doğrudan bir çevirisidir. Her seçim, deterministik, güçlü ve insan komutanı mutlak kontrol altında tutan bir geliştirme ortamına yönelik bilinçli bir adımdır.

Mühendisliğimiz bir soruyla yönlendirilir: **Bu sütunlara hizmet ediyor mu?**

## Dört Sütun: Mimari Temellimiz

Soyut ilkeler yerine, mimarimiz dört somut, yük taşıyan sütun üzerine inşa edilmiştir. Onlar sistemdir.

### <DocIcon type="constitutional" inline /> Constitutional Engineering

Bu yönetim katmanıdır. **Playbooks Sistemi** (dinamik bir bağlam motoru) tarafından güçlendirilir ve **Hatcher Actions** tarafından uygulanır. Her operasyon, özellikle AI'dan gelen, bu kullanıcı tanımlı anayasaya karşı doğrulanır. Bu sütun, **Autopilots Sisteminin** kurallarınıza saygı göstererek güvenle yürütülmesini sağlar.

### <DocIcon type="time-graph" inline /> The Time Graph

Bu güvenlik ve denetlenebilirlik katmanıdır. AI geliştirmesinin ayrıntılı, yüksek frekanslı değişiklikleri için oluşturulmuş **özel, yüksek performanslı bir Git motoru** tarafından güçlendirilir. **The Time Graph HAT**'i güçlendiren değişmez geçmişi ve her Autopilot görevi için denetlenebilir günlükleri sağlar.

### <DocIcon type="ai-command" inline /> AI Under Command

Bu orkestrasyon katmanıdır. Model agnostik bir kontrol düzlemi olarak hareket eder, bir **AI modelleri filosunu** (Claude ve Gemini gibi) yönetir. İnsan niyetini kesin, anayasal olarak bağlı AI operasyonlarına çevirir. Bu sütun, **Gen HAT** ve **Code HAT**'i güçlendirir, size birden fazla AI ajanı üzerinde komut verir.

### <DocIcon type="universal-fabricator" inline /> The Universal Fabricator

Bu yürütme ve modernleşme katmanıdır. Çok dilli **Hatcher Fonksiyonlarını** (Delphi, C++, Rust, vb.) bir Hatcher **EGG**'in (Enforced Governance Guardrails) güvenli, deterministik ortamı içinde çalıştırmak için **WebAssembly** kullanır. Bu, eski kodun modern standartlara saygı gösterirken her yerde çalışmasını sağlar.

## Teknoloji Yığını ve Vizyon

Teknoloji seçimlerimiz pragmatik ve ileriye dönüktür, hızlı inovasyon ihtiyacını performans ve güvenliğe uzun vadeli bağlılıkla dengeler.

| Bileşen           | Teknoloji                 | Neden Seçtik                                                                                                                                           |
| :---------------- | :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Masaüstü Kabuğu** | **Electron (Güncel)**     | Hızlı, çapraz platform geliştirme için sağlam, test edilmiş bir temel sağlar, temel değer önerimize odaklanmamızı sağlar.                          |
| **UI Framework**  | **Vue.js 3 + TypeScript** | Composition API'si ve tip güvenliği, profesyonel bir IDE'nin karmaşık, durumlu arayüzü için idealdir.                                                  |
| **Çekirdek (Vizyon)** | **Tauri + Rust**          | Uzun vadeli vizyonumuz, Hatcher'ın çekirdeğini Rust'ta dövmektir - eşsiz performans, bellek güvenliği ve güvenlik garantileri için.                  |

Bu "Rust'a Giden Yol", vaadimizin merkezindedir. Kanıtlanmış bir prototip üzerinde geleceği inşa ediyoruz, mühendislik mükemmelliğinin en yüksek standartlarını önceliklendiren net bir mimari son oyunla.

## Tasarım Gereği Güvenlik ve Gizlilik

Güvenlik bir özellik değildir; mimari bir ön koşuldur.

- **Varsayılan Olarak Yerel İlk:** Kaynak kodunuz ve geçmişiniz makinenizde yaşar. Değişmez denetim günlüğü için ekip senkronizasyonunu etkinleştirmek gibi açık bir eylem olmadan hiçbir şey bulut hizmetine gönderilmez.

- **Sıfır Kod Depolama:** Bulut hizmetlerimiz (Playbook'lar gibi ekip özellikleri için) **deponuzun tam bir kopyasını depolamaz**. Yalnızca gerekli yönetim verilerini (Playbook'lar ve denetim günlüğü girişleri gibi) depolarız, tüm kod tabanınızı asla.

- **Sandboxed Yürütme:** Hatcher Fonksiyonları, varsayılan olarak sisteminize erişimi olmayan güvenli bir WebAssembly sandbox'ında çalışır.

- **Şeffaf Operasyonlar:** Time Graph ve Human Firewall, her eylem için net, denetlenebilir bir kayıt ve her değişiklik için son sözü garanti eder.

<PageCTA
  title="Daha Derine Dalmaya Hazır mısınız?"
  subtitle="Mimarimizin yeni nesil AI destekli geliştirmeyi nasıl mümkün kıldığını keşfedin"
  buttonText="Felsefeyi Okuyun"
  buttonLink="/tr/philosophy"
  buttonStyle="secondary"
  footer="Güvenlik, gizlilik ve geliştirici kontrolü çekirdekte inşa edildi"
/>
