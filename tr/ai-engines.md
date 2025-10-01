---
title: "AI Motorları | Hatcher ile Claude Code, Gemini CLI ve Daha Fazlasını Entegre Edin"
description: Hatcher IDE ile birden fazla AI kodlama asistanını yapılandırın ve entegre edin. Esnek, güçlü geliştirme iş akışları için Claude Code, Gemini CLI ve diğer AI motorları desteği.
---

# AI Motorları

Hatcher, esneklik sağlamak ve farklı modellerin benzersiz güçlerinden yararlanmak için birden fazla AI kodlama asistanıyla entegre olur.

## Desteklenen Motorlar

### Claude Code

Anthropic'in Claude'u, şu konularda optimize edilmiş birincil AI motorumuzdur:

- **Kod Anlama**: Mevcut kod tabanlarının mükemmel kavranması
- **Kalıp Tanıma**: Proje kurallarıyla tutarlılığı korur
- **Güvenli Refactoring**: Kod değişikliklerine muhafazakar yaklaşım
- **Bağlam Farkındalığı**: Büyük kod tabanlarını etkili bir şekilde ele alır

**Konfigürasyon:**

```json
{
  "engine": "claude",
  "model": "claude-3-sonnet",
  "maxTokens": 4096,
  "temperature": 0.1
}
```

### Gemini CLI

Google'ın Gemini'si tamamlayıcı yetenekler sağlar:

- **Yaratıcı Çözümler**: Karmaşık problemlere alternatif yaklaşımlar
- **Performans Optimizasyonu**: Verimli kod üretimine odaklanma
- **Çoklu Dil Desteği**: Çeşitli teknoloji yığınları için güçlü destek
- **Hızlı İterasyon**: Hızlı düzenlemeler için hızlı yanıt süreleri

**Konfigürasyon:**

```json
{
  "engine": "gemini",
  "model": "gemini-pro",
  "maxTokens": 2048,
  "temperature": 0.2
}
```

## Motor Seçim Stratejisi

Hatcher, göreve göre en iyi motoru otomatik olarak seçer:

### Kod Üretim Görevleri

- **Yeni Bileşenler**: Yapı için Claude, yaratıcılık için Gemini
- **Hata Düzeltmeleri**: Dikkatli analiz için Claude
- **Performans**: Optimizasyon önerileri için Gemini

### Bağlam Değerlendirmeleri

- **Büyük Kod Tabanları**: Claude'un üstün bağlam işleme
- **Hızlı Prototipleme**: Gemini'nin hız avantajı
- **Karmaşık Refactoring**: Claude'un muhafazakar yaklaşımı

## Konfigürasyon

### Global Ayarlar

Tercih ettiğiniz varsayılan motoru ayarlayın:

```json
{
  "defaultEngine": "claude",
  "fallbackEngine": "gemini",
  "autoSwitch": true
}
```

### Projeye Özgü Geçersiz Kılmalar

Belirli projeler için motorları geçersiz kılın:

```json
{
  "engines": {
    "vue": "claude",
    "optimization": "gemini",
    "testing": "claude"
  }
}
```

## API Anahtarı Kurulumu

### Claude API Anahtarı

1. [Anthropic Console](https://console.anthropic.com)'u ziyaret edin
2. Yeni bir API anahtarı oluşturun
3. Hatcher ayarlarına veya ortam değişkenine ekleyin:
   ```bash
   export ANTHROPIC_API_KEY="your-key-here"
   ```

### Gemini API Anahtarı

1. [Google AI Studio](https://aistudio.google.com)'yu ziyaret edin
2. Yeni bir API anahtarı oluşturun
3. Hatcher'da yapılandırın:
   ```bash
   export GOOGLE_AI_API_KEY="your-key-here"
   ```

## Motor Karşılaştırması

| Özellik        | Claude     | Gemini     |
| -------------- | ---------- | ---------- |
| Kod Kalitesi   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐   |
| Hız            | ⭐⭐⭐     | ⭐⭐⭐⭐⭐ |
| Bağlam Boyutu  | ⭐⭐⭐⭐⭐ | ⭐⭐⭐     |
| Yaratıcılık    | ⭐⭐⭐     | ⭐⭐⭐⭐⭐ |
| Güvenlik       | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐   |

## Gelecek Motorlar

Aktif olarak şunlar için destek üzerinde çalışıyoruz:

- **GitHub Copilot**: VS Code iş akışlarıyla doğrudan entegrasyon
- **OpenAI GPT-4**: Genel amaçlı kodlama yardımı
- **Yerel Modeller**: Gizlilik bilinçli ekipler için kendi kendine barındırılan seçenekler
- **Özel Motorlar**: Tescilli AI araçları için eklenti sistemi

## En İyi Uygulamalar

### Prompt Mühendisliği

Hatcher, her motor için promptları otomatik olarak optimize eder:

- **Claude**: Detaylı bağlam ve açık talimatlar
- **Gemini**: Net hedeflerle özlü promptlar

### Hata İşleme

Sürekliliği sağlayan sağlam yedek sistemler:

- **Birincil Motor Kapalı**: Otomatik olarak yedeklemeye geçiş
- **Oran Sınırlama**: Akıllı istek kuyruğu
- **Ağ Sorunları**: Yaygın kalıpların yerel önbelleği

### Maliyet Optimizasyonu

- **Token Yönetimi**: Verimli bağlam sıkıştırma
- **İstek Gruplama**: Birden fazla küçük değişikliği birleştirin
- **Önbellekleme**: Benzer kod üretim sonuçlarını yeniden kullanın
