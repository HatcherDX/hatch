---
title: "The Time Graph - بعد چهارم توسعه"
description: "هر تغییر، تصمیم و تکامل در یک جدول زمانی قابل کاوش پیگیری می‌شود. codebase شما فقط وضعیت فعلی آن نیست — کل تاریخچه آن قابل پیمایش است."
---

# The Time Graph

## بعد چهارم توسعه

کنترل نسخه سنتی به شما اسنپ‌شات می‌دهد. Time Graph به شما یک **جدول زمانی زنده** می‌دهد — جایی که هر تصمیم، هر تغییر و هر امکان به طور همزمان در یک فضای قابل کاوش و چندبعدی وجود دارد.

### مشکل تاریخچه خطی

Git و سایر ابزارهای VCS یک پیشرفت مسطح و خطی را به شما نشان می‌دهند:

- Commits فقط diffها هستند
- زمینه در پیام‌های commit از دست می‌رود
- تصمیمات پیگیری نمی‌شوند
- جایگزین‌ها ناپدید می‌شوند
- اشکال‌زدایی به معنای باستان‌شناسی است

Time Graph این را به چیزی **اساساً قدرتمندتر** تبدیل می‌کند.

## Codebase چندبعدی

### فراتر از Branchها

سنتی:

```
main ──●──●──●──●──● (اکنون)
```

Time Graph:

```
         ┌─ Attempt 1 ─── Failed ────┐
         │                           │
main ────┼─ Attempt 2 ─── Success ───┼─── Merged ─── Future
         │                           │
         └─ Attempt 3 ─── Partial ───┘
              │
              └── هر تلاش شامل:
                  - زمینه کامل
                  - منطق تصمیم
                  - معیارهای عملکرد
                  - بحث‌های تیمی
                  - رویکردهای جایگزین
```

## قابلیت‌های اصلی

### 1. گره‌های تصمیم

هر تصمیم معماری به یک گره دائمی و قابل جستجو تبدیل می‌شود:

```yaml
node: '2024-01-15-14:30:00'
type: 'architectural-decision'
title: 'Switch from REST to GraphQL'
context:
  problem: 'N+1 queries killing mobile performance'
  constraints:
    - 'Must maintain backward compatibility'
    - 'Cannot increase backend complexity'
  options-considered:
    - REST-optimization: 'Rejected: Too complex'
    - GraphQL: 'Accepted: Solves N+1, good tooling'
    - gRPC: 'Rejected: Client compatibility issues'
participants: ['alice', 'bob', 'charlie']
outcome: 'Implemented GraphQL gateway'
metrics:
  before: 'Avg response: 2.3s'
  after: 'Avg response: 0.4s'
```

### 2. زنجیره‌های علّی

علت و معلول را در طول زمان پیگیری کنید:

```
User Report: "App crashes on login"
    ↓
Time Graph به عقب ردیابی می‌کند...
    ↓
3 ساعت پیش: "Login API response format changed"
    ↓
6 ساعت پیش: "Backend validation updated"
    ↓
2 روز پیش: "Security patch applied"
    ← علت اصلی پیدا شد
```

### 3. جدول‌های زمانی موازی

سناریوهای "چه می‌شد اگر" را بدون اختلال کاوش کنید:

```yaml
timeline-alpha:
  approach: 'Microservices'
  status: 'Testing in staging'
  metrics: 'Good isolation, high complexity'

timeline-beta:
  approach: 'Modular monolith'
  status: 'Testing in staging'
  metrics: 'Simple deployment, harder to scale'

decision-point: '2024-02-01'
chosen: 'timeline-beta'
reason: 'Complexity not justified for our scale'
```

### 4. حفظ دانش

دیگر هرگز زمینه را از دست ندهید:

- **چرا** آن API را منسوخ کردیم؟
- **چه کسی** روی این معماری تصمیم گرفت؟
- **چه** جایگزین‌هایی را در نظر گرفتیم؟
- **چه وقت** عملکرد کاهش یافت؟
- **چگونه** این را قبلاً حل کردیم؟

## کاربردهای عملی

### اشکال‌زدایی در طول زمان

```bash
# زمانی که باگ معرفی شد را پیدا کنید
hatcher time-graph bisect --bad HEAD --good v1.0.0 --test "npm test"

# ببینید چه چیزی در دوره حیاتی تغییر کرده
hatcher time-graph diff --from "last-working" --to "first-broken"

# وضعیت دقیق را در زمان crash بازپخش کنید
hatcher time-graph replay --timestamp "2024-01-15T14:30:00" --with-state
```

### تکامل معماری

پیگیری کنید سیستم شما چگونه تکامل یافته:

```yaml
query: 'Show database evolution'
result:
  2021: 'SQLite - MVP phase'
  2022: 'PostgreSQL - Scaling up'
  2023: 'PostgreSQL + Redis - Caching layer'
  2024: 'PostgreSQL + Redis + Elasticsearch - Search features'

هر انتقال شامل:
  - استراتژی‌های مهاجرت
  - برنامه‌های بازگشت
  - معیارهای عملکرد
  - درس‌های آموخته‌شده
```

### دانش تیمی

Time Graph هوش انسانی را ضبط می‌کند:

```yaml
query: 'Who knows about payment integration?'
result:
  experts:
    - alice: 'Implemented Stripe integration'
    - bob: 'Debugged webhook issues'
  decisions:
    - 'Chose Stripe over PayPal (2023-03-15)'
    - 'Added idempotency keys (2023-06-20)'
  problems-solved:
    - 'Double charging bug (2023-07-10)'
    - 'Webhook replay issue (2023-09-05)'
```

## یکپارچه‌سازی با HATs

Time Graph هر HAT را تقویت می‌کند:

- **Code HAT**: الگوهای تکامل کد را نشان می‌دهد
- **Gen HAT**: تاریخچه تولید را پیگیری می‌کند
- **Visual HAT**: جدول زمانی regression بصری
- **Time Graph HAT**: دستکاری مستقیم جدول زمانی

## تغییر فلسفی

### از State به History

توسعه سنتی در **stateها** فکر می‌کند:

- کد فعلی
- باگ‌های فعلی
- ویژگی‌های فعلی

تفکر Time Graph **تاریخچه** را در آغوش می‌گیرد:

- چگونه به اینجا رسیدیم
- چرا انتخاب‌ها کردیم
- چه چیزی یاد گرفتیم
- به کجا می‌رویم

### از فردی به جمعی

Time Graph دانش فردی را به هوش جمعی تبدیل می‌کند:

- تصمیمات به طور خودکار مستندسازی می‌شوند
- زمینه برای همیشه حفظ می‌شود
- الگوها از تاریخچه ظاهر می‌شوند
- اشتباهات به درس‌ها تبدیل می‌شوند

## آینده توسعه

با Time Graph، می‌توانیم:

### از الگوها یاد بگیریم

```yaml
pattern-detected: 'Performance degrades after deploys'
analysis:
  - 'Cache not warming properly'
  - 'Happens every 3rd deploy on average'
  - 'Solution applied 5 times before'
recommendation: 'Implement cache warmup in CD pipeline'
```

### مشکلات را پیش‌بینی کنیم

```yaml
prediction: 'Database will hit connection limit'
based-on:
  - 'Current growth rate: 10% weekly'
  - 'Historical pattern: Issues at 80% capacity'
  - 'Time to limit: ~3 weeks'
action: 'Scale connection pool now'
```

### تصمیمات را بهینه کنیم

```yaml
similar-decision: 'Choosing message queue'
previous-instances:
  - 2023: 'Chose RabbitMQ - worked well'
  - 2022: 'Chose Kafka - over-engineered'
  - 2021: 'Chose Redis Pub/Sub - outgrew it'
recommendation: 'RabbitMQ fits your scale'
```

## انقلاب زمانی

Time Graph فقط یک ویژگی نیست — یک **تغییر اساسی** در نحوه فکر ما درباره کد است:

- کد فقط آنچه هست نیست، بلکه **چگونه شد**
- باگ‌ها رازآلود نیستند، بلکه **اثرات قابل ردیابی** هستند
- تصمیمات گم نمی‌شوند، بلکه **دائماً قابل دسترس** هستند
- دانش منزوی نیست، بلکه **به طور جمعی به اشتراک گذاشته می‌شود**

---

codebase شما تاریخچه غنی دارد. Time Graph آن را **قابل پیمایش، قابل جستجو و قابل یادگیری** می‌کند.

<PageCTA
  title="جدول زمانی کد خود را مسلط شوید"
  subtitle="تاریخچه git خود را به یک پایگاه دانش قابل پیمایش و هوشمند تبدیل کنید"
  buttonText="Time Graph را کاوش کنید"
  buttonLink="/fa/features-time-graph-hat"
  buttonStyle="secondary"
  footer="هر commit داستانی را تعریف می‌کند. هر تغییر حکمتی دارد."
/>
