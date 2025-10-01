---
title: "سیستم Actions | قضاوت قانون اساسی شما"
description: "سیستم Actions Hatcher را درک کنید - دروازه‌های کیفیت قطعی که هر تغییر را اعتبارسنجی می‌کنند. قضاوت نهایی که اطمینان می‌دهد کد شما با استانداردهای قانون اساسی شما مطابقت دارد."
---

# Hatcher Actions: قضاوت قانون اساسی شما

Actions دروازه‌های کیفیت اکوسیستم Hatcher هستند—قضات قانون اساسی که تعیین می‌کنند آیا کد شما با استانداردهای شما مطابقت دارد یا خیر. آنها گردش‌های کار یا فرآیندها نیستند؛ آنها اعتبارسنج‌های atomic و قطعی هستند که به یک سؤال ساده پاسخ می‌دهند: **"قبول یا رد؟"**

## Actions چیست؟

Actions هستند:

- **اعتبارسنج‌های Atomic**: بررسی‌های تک‌هدفه که یک جنبه خاص را اعتبارسنجی می‌کنند
- **قطعی**: همیشه برای ورودی یکسان نتیجه یکسان تولید می‌کنند
- **دوتایی**: فقط "قبول" یا "رد" (با جزئیات) بازمی‌گردانند
- **سریع**: برای بازخورد سریع طراحی شده‌اند، نه پردازش پیچیده

آنها چک‌پوینت نهایی هستند که اطمینان می‌دهند هر قطعه کد به قانون اساسی پروژه شما احترام می‌گذارد.

## نقش در سلسله‌مراتب

درک Actions نیاز به درک جایگاه آنها در فلسفه Hatcher دارد:

1. **Playbooks** (استراتژی): تعریف می‌کنند چه استانداردهایی می‌خواهید اجرا کنید
2. **Autopilots** (تاکتیک): اجرا می‌کنند چگونه آن استانداردها را پیاده‌سازی کنید
3. **Actions** (قضاوت): اعتبارسنجی می‌کنند آیا پیاده‌سازی با استانداردها مطابقت دارد

```yaml
# جریان کامل
playbook: 'ما از Vue 3 با TypeScript استفاده می‌کنیم'
autopilot: 'یک کامپوننت Vue 3 با TypeScript تولید کنید'
actions: 'type-check، lint و test را برای تأیید صحت اجرا کنید'
```

## Actions اصلی

Hatcher Actions ضروری برای دروازه‌های کیفیت جهانی فراهم می‌کند:

### Actions امنیت نوع

```yaml
actions:
  - name: types:validate
    description: تأیید کامپایل TypeScript
    command: tsc --noEmit
    pass_criteria: exit_code == 0

  - name: types:strict
    description: اجرای قوانین TypeScript سخت
    command: tsc --strict --noEmit
    pass_criteria: exit_code == 0
```

### Actions کیفیت کد

```yaml
actions:
  - name: lint:check
    description: تأیید کد با استانداردهای linting
    command: eslint . --max-warnings 0
    pass_criteria: exit_code == 0

  - name: format:verify
    description: بررسی قالب‌بندی کد
    command: prettier --check .
    pass_criteria: exit_code == 0
```

### Actions تست

```yaml
actions:
  - name: test:unit
    description: اجرای تست‌های واحد
    command: npm test
    pass_criteria: exit_code == 0

  - name: test:integration
    description: اجرای تست‌های یکپارچه‌سازی
    command: npm run test:integration
    pass_criteria: exit_code == 0

  - name: coverage:verify
    description: اطمینان از رسیدن پوشش تست به آستانه
    command: npm run test:coverage
    pass_criteria: coverage >= 80
```

### Actions امنیت

```yaml
actions:
  - name: security:audit
    description: بررسی آسیب‌پذیری‌های شناخته‌شده
    command: npm audit --audit-level=moderate
    pass_criteria: exit_code == 0

  - name: secrets:scan
    description: اطمینان از نبود راز در کد
    command: trufflehog scan .
    pass_criteria: no_secrets_found
```

### Actions عملکرد

```yaml
actions:
  - name: bundle:size
    description: تأیید محدودیت‌های اندازه بسته
    command: bundlesize
    pass_criteria: all_bundles_under_limit

  - name: performance:lighthouse
    description: بررسی امتیازهای Lighthouse
    command: lighthouse-ci
    pass_criteria:
      performance: >= 90
      accessibility: >= 95
```

## Actions سفارشی

Actions خاص پروژه را در `hatcher.config.json` خود تعریف کنید:

```json
{
  "actions": {
    "custom:api-contracts": {
      "description": "اعتبارسنجی قراردادهای API",
      "command": "./scripts/validate-api.sh",
      "pass_criteria": "exit_code == 0"
    },
    "custom:db-migrations": {
      "description": "تأیید مهاجرت‌های پایگاه داده",
      "command": "npm run migrate:verify",
      "pass_criteria": "exit_code == 0"
    },
    "custom:i18n-complete": {
      "description": "بررسی کامل بودن ترجمه",
      "command": "i18n-validator",
      "pass_criteria": "missing_keys == 0"
    }
  }
}
```

## اجرای Action

### Actions فردی

Actions خاص را به صورت درخواستی اجرا کنید:

```bash
# اجرای یک action واحد
hatcher action run test:unit

# اجرا با خروجی verbose
hatcher action run lint:check --verbose

# اجرا با پارامترهای سفارشی
hatcher action run coverage:verify --threshold=90
```

### گروه‌های Action

Actions مرتبط را با هم اجرا کنید:

```bash
# اجرای تمام actionsهای تست
hatcher action run-group testing

# اجرای actionsهای pre-commit
hatcher action run-group pre-commit

# اجرای اعتبارسنجی‌های استقرار
hatcher action run-group deploy-checks
```

### پیکربندی Action

گروه‌های Action را در پیکربندی خود تعریف کنید:

```json
{
  "actionGroups": {
    "pre-commit": [
      "format:verify",
      "lint:check",
      "types:validate",
      "test:unit"
    ],
    "pre-deploy": [
      "test:integration",
      "coverage:verify",
      "security:audit",
      "bundle:size"
    ],
    "quality": ["lint:check", "types:strict", "coverage:verify"]
  }
}
```

## نتایج Action

Actions بازخورد ساختاریافته فراهم می‌کنند:

```json
{
  "action": "test:unit",
  "status": "fail",
  "duration": 3420,
  "details": {
    "total_tests": 142,
    "passed": 140,
    "failed": 2,
    "failures": [
      {
        "test": "UserService.authenticate",
        "error": "Expected true, received false",
        "file": "services/user.spec.ts",
        "line": 47
      }
    ]
  },
  "suggestion": "تست‌های شکست‌خورده را قبل از commit رفع کنید"
}
```

## یکپارچه‌سازی با Autopilots

Autopilots از Actions به عنوان چک‌پوینت‌های کیفیت استفاده می‌کنند:

```yaml
# در یک گردش کار Autopilot
name: پیاده‌سازی ویژگی
steps:
  - name: تولید کد
    action: ai.create

  - name: چک‌پوینت کیفیت
    action: run.actions
    actions:
      - lint:check # باید قبول شود
      - types:validate # باید قبول شود
      - test:unit # باید قبول شود
    fail_fast: true # توقف در اولین شکست

  - name: Commit در صورت قبولی کیفیت
    action: git.commit
    condition: ${steps.quality_checkpoint.passed}
```

## سیاست‌های Action

تعریف کنید Actions چه زمانی اجباری هستند:

```json
{
  "policies": {
    "pre-commit": {
      "required": ["lint:check", "types:validate"],
      "recommended": ["test:unit"]
    },
    "pre-merge": {
      "required": ["test:unit", "test:integration", "coverage:verify"],
      "threshold": {
        "coverage": 80,
        "performance": 85
      }
    },
    "pre-deploy": {
      "required": ["security:audit", "test:integration", "bundle:size"],
      "block_on_failure": true
    }
  }
}
```

## بهترین شیوه‌ها

### اصول طراحی Action

1. **مسئولیت واحد**: هر Action دقیقاً یک چیز را اعتبارسنجی می‌کند
2. **اجرای سریع**: Actions باید در ثانیه‌ها کامل شوند، نه دقیقه‌ها
3. **پیام‌های شکست واضح**: بازخورد قابل اجرا در شکست‌ها فراهم کنید
4. **قطعی**: ورودی یکسان همیشه نتیجه یکسان تولید می‌کند
5. **بدون اثرات جانبی**: Actions اعتبارسنجی می‌کنند اما تغییر نمی‌دهند

### بهینه‌سازی عملکرد

- **اجرای موازی**: Actions مستقل را به طور همزمان اجرا کنید
- **بررسی‌های تدریجی**: فقط فایل‌های تغییریافته را در صورت امکان اعتبارسنجی کنید
- **Caching**: نتایج را برای کد تغییرنیافته cache کنید
- **خروج زودهنگام**: سریع در نقض‌های حیاتی شکست بخورید

### مدیریت خطا

Actions باید پیام‌های خطای واضح و قابل اجرا فراهم کنند:

```json
{
  "action": "lint:check",
  "status": "fail",
  "message": "مسائل کیفیت کد شناسایی شد",
  "fixes": {
    "automatic": "برای رفع خودکار 12 مسئله 'npm run lint:fix' را اجرا کنید",
    "manual": "3 مسئله نیاز به مداخله دستی دارند",
    "details": [
      {
        "file": "src/components/Header.vue",
        "line": 25,
        "rule": "no-unused-vars",
        "message": "'oldValue' تعریف شده اما هرگز استفاده نشده"
      }
    ]
  }
}
```

## قدرت قضاوت قانون اساسی

Actions نگهبانان کیفیت کد شما هستند—استانداردهای غیرقابل مذاکره که هر قطعه کد باید برآورده کند. آنها پیشنهاد یا راهنما نیستند؛ قانون قانون اساسی codebase شما هستند.

با جداسازی اعتبارسنجی (Actions) از پیاده‌سازی (Autopilots) و استراتژی (Playbooks)، Hatcher یک سیستم واضح، قابل نگهداری و مقیاس‌پذیر برای اطمینان از کیفیت کد ایجاد می‌کند.

به یاد داشته باشید: **Actions ایجاد یا تغییر نمی‌دهند—قضاوت می‌کنند. و قضاوت آنها نهایی است.**

<PageCTA
  title="استانداردهای خود را به طور خودکار اجرا کنید"
  subtitle="قوانین اعتبارسنجی تغییرناپذیری بسازید که کیفیت کد شما را محافظت می‌کنند"
  buttonText="Actions خود را پیکربندی کنید"
  buttonLink="/fa/getting-started"
  buttonStyle="secondary"
  footer="بدون سازش. بدون استثنا. استانداردهای شما، اجرا شده."
/>
