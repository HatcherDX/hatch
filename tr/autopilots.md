---
title: Copilot'tan Autopilot'a | Komutanın Manifestosu
description: Taktik yardım sadece başlangıçtı. Şimdi stratejik otomasyon zamanı. Uçmayı bırakın. Komuta etmeye başlayın.
---

# Copilot Çağı Bitti

AI eşli programlama bize makinelerin sonraki satırı önerebileceğini öğretti. Ancak bir copilot sizin için görevi uçamaz—bir modülü yeniden düzenleyemez, %100 test kapsamı elde edemez veya bir veritabanını taşıyamaz. Hala sınırlı saatlerinizi sonsuz görevler için takas ederek uçağı uçuran sizsiniz.

**Kokpitten çıkıp Command Deck'e geçme zamanı.**

**Autopilot** çağına hoş geldiniz. Hatcher ile artık uçmuyorsunuz. **Komuta ediyorsunuz**.

## Her Görev için Bir Playbook

Hangarınız tek bir Autopilot ile sınırlı değil. Belirli görevler için uzmanlaşmış bir filo komuta ediyorsunuz.

### Coverage Autopilot

_Siz uyurken %100 test kapsamı sağlar_

Kod yollarınızı analiz eder, uç durumları tanımlar, kapsamlı test süitleri üretir. Sadece mutlu yolu test etmez—hataların gizlendiği karanlık köşeleri test eder.

**Komutanın Zamanı:** 2 dakika (Playbook'u tanımlamak için)
**Autopilot Çalışma Süresi:** 6 saat (gece boyunca)
**Sonuç:** Döndüğünüzde %100 test kapsamı

### Refactor Autopilot

_Legacy kodu tam kalıplarınızı takip ederek modernize eder_

Mimari kararlarınızı alır ve tüm kod tabanlarına sistematik olarak uygular. Artık "daha sonra yeniden düzenleriz" yok. Sonra şimdidir ve otomatiktir.

**Görev Kapsamı:** 50,000 satır
**Uygulanan Kalıplar:** 12
**Bozucu Değişiklikler:** 0

### Migration Autopilot

_Karmaşık geçişleri sıfır kesinti ile gerçekleştirir_

Veritabanı şemaları, API sürümleri, framework yükseltmeleri. Geriye dönük uyumluluğu ve veri bütünlüğünü korurken karmaşıklığı ele alır.

**Taşınan Tablolar:** 47
**Korunan Veri:** %100
**Geri Alma Hazır:** Her zaman

### Documentation Autopilot

_Tüm API'niz için kapsamlı dokümantasyon üretir_

Sadece yorumlar değil. Örnekler, uç durumlar, hata yanıtları ve etkileşimli oyun alanları içeren tam dokümantasyon süitleri. Geliştiricilerin gerçekten okumak istediği dokümantasyon.

**Dokümante Edilen Endpoint'ler:** 156
**Üretilen Örnekler:** 500+
**OpenAPI Uyumlu:** Evet

### Security Autopilot

_Güvenlik açıklarını önemli olmadan önce denetler ve yamar_

Sürekli güvenlik analizi, bağımlılık güncellemeleri, penetrasyon test kalıpları. Bir saldırgan gibi düşünür, böylece sizin yapmanıza gerek kalmaz.

**Bulunan Güvenlik Açıkları:** 23
**Otomatik Yamalananlar:** 19
**Yanlış Pozitifler:** 0

## Kaos Olmadan Özerklik. Anayasa Altında Güç.

Korku geçerlidir: "Ya Autopilot kontrolden çıkarsa?"

Bu yüzden her Hatcher Autopilot **Constitutional AI** altında çalışır—özerkliğin asla anarşiye dönüşmemesini sağlayan bir yönetişim çerçevesi.

### Autopilot'un Üç Yasası

1. **Playbook Üstünlüğü**: Bir Autopilot Playbook'unu tam olarak takip etmeli ve tanımlanmış kalıplardan ve kısıtlamalardan sapmamalıdır.

2. **Kalite Kontrol Noktaları**: Bir Autopilot görevini tamamlamadan önce tüm Hatcher Actions'ları (testler, linting, tip kontrolü) geçmelidir.

3. **Time Graph Değişmezliği**: Her karar, her değişiklik, her yürütme tam denetlenebilirlik için değişmez Time Graph'te kaydedilir.

### Güvenlik Mekanizmalarınız

- **Önizleme Modu**: Olacakları görmeden önce tam olarak neyin değişeceğini görün
- **Kademeli Yürütme**: Görevleri kontrol noktalarıyla aşamalar halinde çalıştırın
- **Anında Geri Alma**: Time Graph herhangi bir görevin geri alınmasına izin verir
- **Denetim İzi**: Her karar gerekçesine kadar izlenebilir
- **İnsan Müdahalesi**: Her zaman iptal düğmesine sahipsiniz

```typescript
// Constitutional Constraints in Action
const mission = new RefactorMission({
  scope: 'src/legacy',
  playbook: 'modern-patterns-v2',
  constraints: {
    preservePublicAPI: true,
    maintainBackwardCompat: true,
    requireTestsPassing: true,
    maxRiskLevel: 'medium',
  },
})

// The Autopilot will refuse missions that violate constraints
if (mission.estimatedRisk > mission.constraints.maxRiskLevel) {
  return {
    status: 'rejected',
    reason: 'Exceeds maximum risk threshold',
  }
}
```

---

## Command Deck Deneyimi

Yeni geliştirme ortamınız bir editör değil. Bir **Command Deck**.

### Mission Control

Tüm aktif Autopilot görevlerini gerçek zamanlı izleyin. İlerlemeyi görün, kararları gözden geçirin, gerekirse müdahale edin.

### Playbook Library

Birikmiş bilgeliğiniz, kodlanmış ve sürümlenmiş. Ekibinizle paylaşın, ustalardan miras alın, topluluğa katkıda bulunun.

### Fleet Status

Hangarınızdaki her Autopilot, uzmanlaşmaları, başarı oranları, son görevleri.

### Time Graph Navigator

Projenizin geçmişinde seyahat edin, kararların nasıl alındığını görün, kod tabanınızın evrimini anlayın.

## Öncü Gruba Katılın

Yazılım geliştirmenin geleceği kodu daha hızlı yazmakla ilgili değil. Çözülmüş problemler için **hiç kod yazmamakla** ilgili.

Diğerleri hala copilot'larından öneriler isterken, siz karmaşık görevleri yürütmek için Autopilot filoları komuta ediyor olacaksınız. Onlar otomatik tamamlama hatalarını düzeltirken, siz tamamlanmış özellikleri gözden geçireceksiniz. Onlar bakım yaparken, siz yenilik yapacaksınız.

### Seçim Açık

Copilot ile manuel uçmaya devam edin, öneriler alsın...

Ya da Command Deck'e adım atın ve Autopilot'ların vizyonunuzu yürütmesine izin verin.

### Erken Erişim: Alpha Fleet

İlk Fleet Commander filosunu topluyoruz. Otonom geliştirmenin geleceğini tanımlayacak geliştiriciler.

**Alpha Erişime Dahil:**

- Beş çekirdek Autopilot (Coverage, Refactor, Migration, Docs, Security)
- Playbook oluşturma araçları
- Hatcher mühendislik ekibiyle doğrudan hat
- Fleet Commander Guild'de ömür boyu üyelik
- Öncüler Manifestosu'nda adınız

---

## Manifesto

Biz, inşa edenler, kokpitte çok uzun süre kaldık.

Kontrollerde ustalaştık, kalıpları ezberledik, prosedürleri mükemmelleştirdik. Fleet Commander'lar talep eden bir çağda olağanüstü pilotlar olduk.

Bize verilen araçlar—copilot'lar, asistanlar, öneriler—daha hızlı uçmamıza yardımcı oldu. Ama hala uçuyoruz. Hala yürütüyoruz. Hala saatleri satırlarla takas ediyoruz.

**Bu bize vaat edilen gelecek değil.**

Gelecek Autopilot'lardır. Mimari vizyonumuzu hassasiyet ve ölçekte yürüten uzmanlaşmış, otonom ajanlar filolarıdır. Gelecek, kokpitten çıkıp Command Deck'e girmektir; uzmanlığımızın makinelerin kusursuzca yürüttüğü Playbook'lara kodlandığı yer.

Daha fazla öneriye ihtiyacımız yok. Yürütmeye ihtiyacımız var.

Yardıma ihtiyacımız yok. Otomasyona ihtiyacımız var.

Daha iyi copilot'lara ihtiyacımız yok. Tamamen uçmayı bırakmamız gerek.

**Copilot çağı bitti.**

**Autopilot çağı başladı.**

---

_Uçmayı Bırakın. Komuta Etmeye Başlayın._

**Hatcher Autopilots**
Fleet Commander'lar için IDE

---

<PageCTA
  title="Filonuza Komuta Etmeye Hazır mısınız?"
  subtitle="Askeri hassasiyetle kod yazan akıllı Autopilot'ları konuşlandırın"
  buttonText="Autopilots ile Başlayın"
  buttonLink="/tr/getting-started"
  buttonStyle="secondary"
  footer="Manuel uçmayı bırakın. Filolara komuta etmeye başlayın."
/>

<style>
blockquote {
  border-left: 4px solid #667eea;
  padding-left: 1rem;
  margin: 2rem 0;
  font-style: italic;
}

h2 {
  margin-top: 3rem;
  margin-bottom: 1rem;
}

h3 {
  color: #667eea;
}

details {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

details summary {
  cursor: pointer;
  font-weight: bold;
}

code {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}
</style>
