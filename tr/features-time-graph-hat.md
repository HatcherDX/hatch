---
title: Time Graph HAT - Geliştirme Zaman Makineniz
description: Kodunuzun zaman çizelgesinde yolculuk yapın. Her kararı görün, her değişikliği anlayın ve zamanın kendisinde hata ayıklayın.
---

# <DocIcon type="time-graph" inline /> Time Graph HAT

> **Direk Bağlantısı:** Bu HAT, [Time Graph direğimizin](/tr/pillars-time-graph) doğrudan uygulamasıdır; her eylemin geri alınabilir, her kararın denetlenebilir olmasını ve hiçbir şeyin kaybolmamasını sağlar.

## Geliştirme Zaman Makineniz

Time Graph HAT, kod tabanınızı bir anlık görüntüden **yaşayan bir zaman çizelgesine** dönüştürür. Her karar, her değişiklik, her hata, anlamanız, hata ayıklamanız ve hatta geçmişi yeniden yazmanız için zamanda yolculuk yapmanıza izin veren keşfedilebilir bir grafikte bir düğüm olur.

### Git Geçmişinin Ötesinde

Git size **neyin** değiştiğini gösterir. Time Graph HAT size **neden**, **nasıl** ve **ya olsaydı**'yı gösterir:

- **Karar İzleme**: Kaydedilen her mimari seçim
- **Etki Haritalama**: Değişikliklerin zamanla nasıl dalgalandığını görün
- **Paralel Zaman Çizelgeleri**: Alternatif uygulamaları keşfedin
- **Nedensel Hata Ayıklama**: Geriye giderek kök nedenleri bulun

## Geliştirmenin Dördüncü Boyutu

### Geleneksel Sürüm Kontrolü

```
main ──●──●──●──●──●── (current)
        └──●──●── (feature branch)
```

Doğrusal. Düz. Sınırlı.

### Time Graph Gerçekliği

```
        ┌─ Decision: Use REST ─── Implementation A ─── Bug Found ───┐
        │                                                            │
main ───┼─ Decision: Use GraphQL ─ Implementation B ─── Success ────┼─── Merged
        │                                                            │
        └─ Decision: Use gRPC ──── Implementation C ─── Abandoned ───┘
              │                         │
              └── Why: Latency ────── Benchmark ──── Results
```

Çok boyutlu. Keşfedilebilir. **Anlaşılabilir**.

## Gerçek Dünya Güçleri

### Senaryo 1: Production Gizemi

**Zorluk**: Uygulama production'da rastgele çöküyor. Kalıp yok. Yeniden üretme yok.

**Time Graph Çözümü**:

1. Çökme zaman damgasına gidin
2. HAT tüm eşzamanlı değişiklikleri gösterir
3. Görünüşte ilgisiz deploy'u tanımlayın
4. Bağımlılık grafiği boyunca etkiyi izleyin
5. 3 hafta önce eklenen race condition'ı bulun

**Sonuç**: "İmkansız" hata 30 dakikada düzeltildi.

### Senaryo 2: Mimari Tartışma

**Zorluk**: "Neden PostgreSQL yerine MongoDB'yi seçtik?"

**Time Graph Çözümü**:

```yaml
query: decision-node
topic: 'database-selection'
timestamp: '3-months-ago'

result:
  decision: 'MongoDB'
  reasons:
    - 'Flexible schema for rapid iteration'
    - 'Better horizontal scaling'
    - 'Team expertise'
  alternatives-explored:
    - PostgreSQL: 'Rejected: Schema migrations concern'
    - DynamoDB: 'Rejected: Vendor lock-in'
  participants: ['alice', 'bob', 'charlie']
  supporting-data: ['benchmark-results.json', 'cost-analysis.xlsx']
```

**Sonuç**: Herhangi bir teknik karar için anında bağlam.

### Senaryo 3: Paralel Geliştirme

**Zorluk**: Aynı anda geliştirilen iki özellik çakışıyor.

**Time Graph Çözümü**:

- HAT paralel zaman çizelgelerini korur
- Ayrılma noktalarını gösterir
- Çakışma kaynaklarını tanımlar
- Birleştirme stratejileri önerir
- Birleştirme sonuçlarını simüle eder

**Sonuç**: Her iki özelliği de bozmadan güvenle birleştirme.

## Gelişmiş Yetenekler

### Nedensel Analiz

Sadece "ne kırıldı" değil "neyi kıranın nedeni":

```yaml
analysis: login-failure
symptoms:
  - "Users can't login"
  - 'Started 2024-01-15 14:30'

time-graph-trace:
  - 14:30: 'Login failures spike'
  - 14:25: 'API response times increase'
  - 14:20: 'Database query patterns change'
  - 14:15: 'ORM library updated'
  - 13:00: 'Dependency update merged'

root-cause: 'ORM update changed query generation'
fix: 'Rollback or patch query builder'
```

### Zamansal Sorgular

Zaman boyunca sorular sorun:

```bash
# Performans ne zaman düştü?
hatcher time-graph query "response_time > 200ms" --first-occurrence

# Bu dosyaya kim dokundu?
hatcher time-graph contributors "./src/auth.js" --with-context

# Çalışan ve bozuk arasında ne değişti?
hatcher time-graph diff --from "last-working" --to "first-broken"

# Kimlik doğrulama hakkındaki tüm kararları göster
hatcher time-graph decisions --topic "auth" --timeline
```

### Kelebek Etkisi İzleme

Küçük değişikliklerin nasıl yayıldığını görün:

```yaml
change: 'Update button color'
immediate-impact:
  - 'button.css modified'
cascade:
  - 'Component snapshot tests fail'
  - 'Visual regression detected'
  - 'Accessibility contrast warning'
  - 'Design system version bump'
  - 'All apps using design system need updates'
  - 'Marketing screenshots outdated'
```

## Diğer HATs ile Entegrasyon

Time Graph HAT her şeyi geliştirir:

- **Code HAT ile**: Kodun daha basit olduğu zamana seyahat edin
- **Gen HAT ile**: Oluşturma evrimini görün
- **Visual HAT ile**: Zamanla görsel regresyon

## Zaman Yolculuğu İşlemleri

### Checkpoint Oluşturma

```bash
# Zamansal checkpoint oluşturun
hatcher time-graph checkpoint "Before major refactor"

# Karar düğümü oluşturun
hatcher time-graph decision "Switching to microservices" \
  --reasons "Scale,Team autonomy" \
  --alternatives "Monolith,Serverless"
```

### Zaman Çizelgesi Navigasyonu

```bash
# Belirli bir noktaya gidin
hatcher time-graph goto "2024-01-15 14:00"

# Son çalışan duruma gidin
hatcher time-graph goto "last-green-ci"

# Zaman çizelgelerini karşılaştırın
hatcher time-graph compare "timeline-a" "timeline-b"
```

### Zamansal Hata Ayıklama

```bash
# Bozucu değişikliği bulmak için bisect
hatcher time-graph bisect --good "v1.0" --bad "HEAD" --test "npm test"

# Zamandaki noktada yürütmeyi tekrar oynat
hatcher time-graph replay "crash-timestamp" --with-state
```

## Bilgi Koruma

Time Graph HAT kurumsal bilgiyi korur:

### Asla Bağlam Kaybetme

- X neden kullanımdan kaldırıldı?
- Y'ye kim karar verdi?
- Hangi alternatifler değerlendirildi?
- Z hangi sorunları çözdü?

### İşe Alım Hızlandırma

Yeni geliştiriciler şunları yapabilir:

- Karar geçmişini keşfedin
- Evrimi anlayın
- Geçmiş hatalardan öğrenin
- Tam bağlamı görün

## Zamansal Özgürlük

Time Graph HAT geçmişte takılı kalmakla ilgili değil — ondan **öğrenmekle** ilgilidir:

- Artık arkeolojik hata ayıklama yok
- Artık "kimse neden bilmiyor" yok
- Artık hataları tekrarlama yok
- Artık bağlam kaybı yok

Kodunuzun bir geçmişi var. Time Graph HAT onu **gezinebilir** yapar.

---

Kodunuzun zaman çizelgesini keşfetmeye hazır mısınız? [Time Graph HAT ile Başlayın](/tr/getting-started#time-graph-hat)

<PageCTA
  title="Kodunuzun Evriminde Gezinin"
  subtitle="Kodunuzun nasıl ve neden evrimleştiğini anlamak için zamanda seyahat edin"
  buttonText="Time Graph'ı Keşfedin"
  buttonLink="/tr/getting-started"
  buttonStyle="secondary"
  footer="Her değişikliğin bir hikayesi var. Her kararın bir bağlamı var."
/>
