---
title: Time Graph HAT - آلة الزمن التطويرية الخاصة بك
description: سافر عبر الخط الزمني لكودك. شاهد كل قرار، افهم كل تغيير، وصحح عبر الزمن نفسه.
---

# <DocIcon type="time-graph" inline /> Time Graph HAT

> **ارتباط الركيزة:** هذا HAT هو التنفيذ المباشر لركيزة [Time Graph](/ar/pillars-time-graph)، مضمنًا أن كل إجراء قابل للعكس، كل قرار قابل للتدقيق، ولا شيء يُفقد أبدًا.

## آلة الزمن التطويرية الخاصة بك

Time Graph HAT يحول قاعدة كودك من لقطة إلى **جدول زمني حي**. كل قرار، كل تغيير، كل خطأ يصبح عقدة في رسم بياني قابل للاستكشاف يتيح لك السفر عبر الزمن للفهم والتصحيح وحتى إعادة كتابة التاريخ.

### ما وراء سجل Git

Git يعرض لك **ماذا** تغير. Time Graph HAT يعرض لك **لماذا**، **كيف**، و **ماذا لو**:

- **تتبع القرارات**: كل اختيار معماري مسجل
- **رسم التأثير**: شاهد كيف تموج التغييرات عبر الزمن
- **الجداول الزمنية المتوازية**: استكشف التطبيقات البديلة
- **التصحيح السببي**: ابحث عن الأسباب الجذرية بالسفر للخلف

## البعد الرابع للتطوير

### التحكم في الإصدارات التقليدي

```
main ──●──●──●──●──●── (current)
        └──●──●── (feature branch)
```

خطي. مسطح. محدود.

### واقع Time Graph

```
        ┌─ Decision: Use REST ─── Implementation A ─── Bug Found ───┐
        │                                                            │
main ───┼─ Decision: Use GraphQL ─ Implementation B ─── Success ────┼─── Merged
        │                                                            │
        └─ Decision: Use gRPC ──── Implementation C ─── Abandoned ───┘
              │                         │
              └── Why: Latency ────── Benchmark ──── Results
```

متعدد الأبعاد. قابل للاستكشاف. **مفهوم**.

## قوى من العالم الحقيقي

### السيناريو 1: لغز الإنتاج

**التحدي**: التطبيق يتعطل عشوائيًا في الإنتاج. لا نمط. لا إعادة إنتاج.

**حل Time Graph**:

1. انتقل إلى الطابع الزمني للتعطل
2. HAT يعرض جميع التغييرات المتزامنة
3. حدد نشر يبدو غير مرتبط
4. تتبع التأثير عبر رسم التبعية
5. ابحث عن حالة سباق تم إدخالها منذ 3 أسابيع

**النتيجة**: خطأ "مستحيل" تم إصلاحه في 30 دقيقة.

### السيناريو 2: النقاش المعماري

**التحدي**: "لماذا اخترنا MongoDB بدلاً من PostgreSQL؟"

**حل Time Graph**:

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

**النتيجة**: سياق فوري لأي قرار تقني.

### السيناريو 3: التطوير المتوازي

**التحدي**: ميزتان تم تطويرهما في وقت واحد تتعارضان.

**حل Time Graph**:

- HAT يحافظ على الجداول الزمنية المتوازية
- يعرض نقاط الاختلاف
- يحدد مصادر التعارض
- يقترح استراتيجيات الدمج
- يحاكي نتائج الدمج

**النتيجة**: دمج واثق دون كسر أي من الميزتين.

## القدرات المتقدمة

### التحليل السببي

ليس فقط "ما الذي انكسر" بل "ما الذي تسبب في ما انكسر":

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

### الاستعلامات الزمنية

اطرح أسئلة عبر الزمن:

```bash
# When did performance degrade?
hatcher time-graph query "response_time > 200ms" --first-occurrence

# Who has touched this file?
hatcher time-graph contributors "./src/auth.js" --with-context

# What changed between working and broken?
hatcher time-graph diff --from "last-working" --to "first-broken"

# Show all decisions about authentication
hatcher time-graph decisions --topic "auth" --timeline
```

### تتبع تأثير الفراشة

شاهد كيف تتتالى التغييرات الصغيرة:

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

## التكامل مع HATs الأخرى

Time Graph HAT يحسّن كل شيء:

- **مع Code HAT**: سافر إلى حين كان الكود أبسط
- **مع Gen HAT**: شاهد تطور التوليد
- **مع Visual HAT**: التراجع البصري عبر الزمن

## عمليات السفر عبر الزمن

### إنشاء نقطة تفتيش

```bash
# Create a temporal checkpoint
hatcher time-graph checkpoint "Before major refactor"

# Create decision node
hatcher time-graph decision "Switching to microservices" \
  --reasons "Scale,Team autonomy" \
  --alternatives "Monolith,Serverless"
```

### التنقل في الجدول الزمني

```bash
# Go to specific point
hatcher time-graph goto "2024-01-15 14:00"

# Go to last working state
hatcher time-graph goto "last-green-ci"

# Compare timelines
hatcher time-graph compare "timeline-a" "timeline-b"
```

### التصحيح الزمني

```bash
# Bisect to find breaking change
hatcher time-graph bisect --good "v1.0" --bad "HEAD" --test "npm test"

# Replay execution at point in time
hatcher time-graph replay "crash-timestamp" --with-state
```

## الحفاظ على المعرفة

Time Graph HAT يحافظ على المعرفة المؤسسية:

### لا تفقد السياق أبدًا

- لماذا تم إيقاف X؟
- من قرر Y؟
- ما البدائل التي تم النظر فيها؟
- ما المشاكل التي حلها Z؟

### تسريع التأهيل

المطورون الجدد يمكنهم:

- استكشاف تاريخ القرارات
- فهم التطور
- التعلم من الأخطاء السابقة
- رؤية السياق الكامل

## التحرير الزمني

Time Graph HAT ليس عن التركيز على الماضي - إنه عن **التعلم منه**:

- لا مزيد من التصحيح الأثري
- لا مزيد من "لا أحد يعرف لماذا"
- لا مزيد من تكرار الأخطاء
- لا مزيد من فقدان السياق

كودك له تاريخ. Time Graph HAT يجعله **قابلاً للتنقل**.

---

هل أنت مستعد لاستكشاف الخط الزمني لكودك؟ [ابدأ مع Time Graph HAT](/ar/getting-started#time-graph-hat)

<PageCTA
  title="تنقل في تطور كودك"
  subtitle="سافر عبر الزمن لفهم كيف ولماذا تطور كودك"
  buttonText="استكشف Time Graph"
  buttonLink="/ar/getting-started"
  buttonStyle="secondary"
  footer="كل تغيير له قصة. كل قرار له سياق."
/>
