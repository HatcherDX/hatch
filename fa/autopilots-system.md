---
title: "سیستم Autopilot | هماهنگی هوشمند توسعه"
description: "سیستم Autopilot Hatcher را مسلط شوید - گردش‌های کار اتوماسیون قدرتمند که وظایف پیچیده توسعه را با کمک AI اجرا می‌کنند. وظایف تکراری را به دستورالعمل‌های هوشمند و قابل استفاده مجدد تبدیل کنید."
---

# سیستم Autopilot

سیستم Autopilot چارچوب اتوماسیون تاکتیکی Hatcher است که گردش‌های کار پیچیده توسعه را به دستورالعمل‌های هوشمند و قابل اجرا تبدیل می‌کند. جایی که Playbooks استراتژی (استانداردها و الگوها) را تعریف می‌کنند، Autopilots تاکتیک‌هایی هستند که پیاده‌سازی آن الگوها را با هوش قدرت‌گرفته از AI خودکار می‌کنند.

## Autopilots چیستند؟

Autopilots گردش‌های کار ساختاریافته‌ای هستند که ترکیبی از موارد زیر را ارائه می‌دهند:

- **اتوماسیون وظیفه**: فرآیندهای چند مرحله‌ای که با دقت اجرا می‌شوند
- **هوش AI**: تصمیمات آگاه از زمینه در حین اجرا
- **یکپارچگی ابزار**: تعامل یکپارچه با ابزارهای توسعه
- **مدیریت خطا**: بازیابی هوشمند از مشکلات رایج

آنها «دستورالعمل‌هایی» هستند که می‌دانند چگونه آنچه را که Playbooks شما اعلام می‌کنید می‌خواهید به دست آورید، دست یابند.

## ساختار Autopilot

یک Autopilot اساسی از این ساختار پیروی می‌کند:

```json
{
  "name": "Create Vue Component",
  "version": "1.0.0",
  "description": "Generate a complete Vue 3 component with tests",
  "inputs": [
    {
      "name": "componentName",
      "type": "string",
      "description": "Name of the component in PascalCase",
      "required": true
    },
    {
      "name": "useTypeScript",
      "type": "boolean",
      "description": "Use TypeScript",
      "default": true
    }
  ],
  "steps": [
    {
      "name": "create-component",
      "action": "file.create",
      "path": "src/components/${componentName}.vue"
    },
    {
      "name": "create-test",
      "action": "file.create",
      "path": "tests/${componentName}.spec.ts"
    },
    {
      "name": "validate-quality",
      "action": "run.action",
      "name": "test:component"
    }
  ]
}
```

## Autopilots داخلی

Hatcher با Autopilots قدرتمند برای الگوهای توسعه رایج ارسال می‌شود:

### Autopilots کامپوننت

- **ایجاد کامپوننت**: تولید کامپوننت‌های کامل با تست‌ها
- **استخراج کامپوننت**: بازسازی کد به کامپوننت‌های قابل استفاده مجدد
- **به‌روزرسانی Props**: تغییر ایمن رابط‌های کامپوننت

### Autopilots بازسازی

- **استخراج تابع**: کشیدن منطق به توابع کمکی
- **تغییر نام نماد**: تغییر نام ایمن در کل کدبیس
- **انتقال ماژول**: جابجایی کد با به‌روزرسانی‌های import

### Autopilots تست

- **تولید تست‌ها**: ایجاد مجموعه تست‌ها از پیاده‌سازی
- **به‌روزرسانی Snapshots**: تازه‌سازی هوشمند snapshots تست
- **گزارش پوشش**: تجزیه و تحلیل و بهبود پوشش تست

### Autopilots مستندات

- **تولید JSDoc**: افزودن مستندات از تجزیه و تحلیل کد
- **به‌روزرسانی README**: همگام نگه داشتن مستندات
- **مستندات API**: تولید مستندات API از کد

## ایجاد Autopilots سفارشی

### Autopilots گردش کار اساسی

Autopilots را برای گردش‌های کار خاص تیم خود ایجاد کنید:

```yaml
name: Setup New Feature
description: Initialize a new feature with all required structure
inputs:
  - name: featureName
    type: string
    required: true
  - name: includeTests
    type: boolean
    default: true

steps:
  - name: Create feature directory
    action: directory.create
    path: src/features/${featureName}

  - name: Generate index file
    action: file.create
    path: src/features/${featureName}/index.ts
    template: feature-index

  - name: Create component structure
    action: run.autopilot
    name: Create Vue Component
    inputs:
      componentName: ${featureName}View

  - name: Setup routing
    action: file.modify
    path: src/router/index.ts
    operation: add-route
    route:
      path: /${featureName}
      component: ${featureName}View

  - name: Validate with Actions
    action: run.actions
    actions: ["test:unit", "lint:check", "types:validate"]
```

## قدرت اتوماسیون تاکتیکی

سیستم Autopilot وظایف تکراری توسعه را به گردش‌های کار هوشمند و خودکار تبدیل می‌کند که با گذشت زمان یاد می‌گیرند و بهبود می‌یابند. آنها لایه تاکتیکی هستند که شکاف بین Playbooks استراتژیک و Actions اعتبارسنج را پر می‌کنند و یک اکوسیستم اتوماسیون کامل ایجاد می‌کنند که به استانداردهای شما احترام می‌گذارد در حالی که توسعه شما را تسریع می‌کند.

به یاد داشته باشید: **Playbooks چه چیزی را تعریف می‌کنند، Autopilots چگونگی را اجرا می‌کنند، Actions اعتبارسنجی می‌کنند.**

<PageCTA
  title="اولین Autopilot خود را مستقر کنید"
  subtitle="گردش‌های کار پیچیده را با عوامل AI هوشمند و خودبهبود خودکار کنید"
  buttonText="سیستم Autopilot را راه‌اندازی کنید"
  buttonLink="/fa/autopilots"
  buttonStyle="secondary"
  footer="از تکرار به اتوماسیون. از دستی به جادویی."
/>
