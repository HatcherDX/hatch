# Constitutional Engineering

> **AI bir anayasa altında çalışmalıdır. Nokta.**

## İlke

Geleneksel yazılım geliştirmede, kalite ve tutarlılığı korumak için kurallar, stil kılavuzları ve kod incelemelerine güveniriz. Ancak AI devreye girdiğinde, bu gayri resmi korkuluklar tehlikeli bir şekilde yetersiz hale gelir. AI nüansı anlamaz—açık, uygulanabilir kurallara ihtiyaç duyar.

Constitutional Engineering, geliştirme ortamınızdaki her AI etkileşimini yöneten değişmez bir kurallar kümesi tanımlama uygulamasıdır. Bunlar öneriler veya kılavuzlar değil—ihlal edilemeyen mimari kısıtlamalardır.

## Nasıl Çalışır

Her AI önerisi birden fazla doğrulama katmanından geçer:

```
AI Önerisi → Anayasal Doğrulama → Bağlam Kontrolü → Eylem Doğrulaması → İnsan İncelemesi
```

Herhangi bir katman başarısız olursa, öneri ya uyum sağlamak için değiştirilir ya da tamamen reddedilir.

## Hatcher'da Uygulama

### Playbook'lar: Projenizin Yasaları

Playbook'lar, şunları tanımlayan çalıştırılabilir spesifikasyonlardır:

- Takip edilmesi gereken kod kalıpları
- İhlal edilemeyen mimari kararlar
- Aşılamayacak güvenlik sınırları
- Korunması gereken performans eşikleri

```yaml
# Örnek Playbook
name: API Security Constitution
rules:
  - no_public_endpoints_without_auth
  - all_inputs_must_be_validated
  - rate_limiting_required
  - audit_log_all_mutations
```

Şöyle düşünün: **Playbook'lar yasadır ve Hatcher Actions polisdir**. Playbook'lar (.yaml) kuralların ne olduğunu insan tarafından okunabilir bir şekilde beyan eder. Actions (.ts) bu kuralları gerçek zamanlı olarak uygulamak için çalıştırılabilir mantık sağlar.

### Hatcher Actions: Gerçek Zamanlı Uygulama

Actions uygulama mekanizmasıdır—AI önerilerini kod tabanınıza ulaşmadan önce anayasanıza karşı doğrulayarak yakalarlar.

```typescript
// Örnek Action
export const validateAPIEndpoint: HatcherAction = {
  trigger: 'api.endpoint.created',
  validate: (code) => {
    // Kimlik doğrulamayı kontrol et
    if (!hasAuthDecorator(code)) {
      return reject('All endpoints must have authentication')
    }
    // Girdi doğrulamasını kontrol et
    if (!hasInputValidation(code)) {
      return reject('All inputs must be validated')
    }
    return approve(code)
  },
}
```

## Constitutional Engineering'in Gücü

### 1. Öngörülebilir AI Davranışı

AI öngörülebilir hale gelir çünkü açık kurallarla kısıtlanmıştır. Yapabileceğini ve yapamayacağını bilirsiniz.

### 2. Ölçekte Ekip Hizalaması

Her geliştirici, insan veya AI, aynı anayasayı takip eder. Artık "stil savaşları" veya tutarsız kalıplar yok.

### 3. Tasarım Gereği Uyumluluk

Düzenleyici gereksinimler anayasal kurallar haline gelir. GDPR, HIPAA, SOC2—kodlanır ve otomatik olarak uygulanır.

### 4. Kaos Olmadan Evrim

Projeniz geliştikçe anayasayı güncelersiniz. Tüm gelecekteki AI etkileşimleri hemen yeni kurallara uyum sağlar.

### 5. Paradigmalar Arasında Birleşik Yönetim

Anayasa sadece yeni oluşturulan UI koduna uygulanmaz. [The Universal Fabricator](/tr/pillars-universal-fabricator)'da çalışan eski iş mantığıyla AI'nın nasıl etkileşime girdiğini dahil tüm sistemin nasıl davrandığını yönetir. Bu, hem eskinin hem de yeninin üzerinde tek, birleşik bir kontrol düzlemi sağlar.

## Gerçek Dünya Örneği: Güvenlik Anayasası

Güvenliğin hayati olduğu bir fintech uygulamasını düşünün:

```yaml
constitution:
  data_handling:
    - encrypt_all_pii_at_rest
    - no_pii_in_logs
    - tokenize_payment_data

  authentication:
    - multi_factor_required
    - session_timeout_15_minutes
    - jwt_rotation_hourly

  api_design:
    - versioned_endpoints_only
    - deprecation_notice_90_days
    - backward_compatibility_required
```

Bu anayasa yerinde olduğunda, AI şunları yapamaz:

- Hassas verileri günlüğe kaydeden kod üretmek
- Uygun kimlik doğrulaması olmadan endpoint oluşturmak
- Geriye dönük uyumluluğu bozan değişiklikler önermek

## Kuralların Ötesinde: Kültürel Kodlama

Constitutional Engineering sadece teknik kısıtlamalarla ilgili değil—mühendislik kültürünüzü geliştirme sürecine kodlamakla ilgilidir. Değerleriniz, öncelikleriniz ve pazarlık edilmezleriniz sistemin kendisinin bir parçası haline gelir.

Kültürü bu şekilde ölçeklendirirsiniz. 10 geliştiriciye sahip olun veya 1000, insan veya AI olsunlar, herkesin yazılımı karar verdiğiniz şekilde inşa etmesini bu şekilde sağlarsınız.

## Başlarken

1. **Temel İlkelerinizi Tanımlayın**: Pazarlık edilmezleriniz nedir?
2. **İlk Playbook'unuzu Oluşturun**: Bir kritik alanla başlayın (güvenlik, performans, vb.)
3. **Uygulama Actions Yazın**: Kuralları koda dönüştürün
4. **Yineleyin ve Genişletin**: Öğrendikçe anayasanızı büyütün

Anayasa taşa kazınmış değildir—anlayışınızla gelişir. Ancak herhangi bir anda yasadır ve açık onayınız olmadan hiçbir şey onun ötesine geçemez.

---

_Constitutional Engineering, AI'yı öngörülemeyen bir kâhinden, kurallarınıza saygı gösteren, kalıplarınızı takip eden ve standartlarınızı koruyan disiplinli bir ekip üyesine dönüştürür. Her seferinde._

<PageCTA
  title="Geliştirme Anayasanızı Tanımlayın"
  subtitle="Her AI ve geliştiricinin takip etmesi gereken kırılmaz kurallar oluşturun"
  buttonText="Playbook'larınızı Oluşturun"
  buttonLink="/tr/playbooks-system"
  buttonStyle="secondary"
  footer="Sizin standartlarınız. Sizin kurallarınız. Otomatik olarak uygulanır."
/>
