---
title: "سیستم Playbooks | مدیریت دینامیک زمینه هوش مصنوعی برای تیم‌ها"
description: "سیستم Playbooks در Hatcher را بیاموزید - راه‌حل نسل بعدی برای مدیریت زمینه هوش مصنوعی. قانون اساسی سازمانی پویا و قابل کنترل بسازید که به هوش مصنوعی استانداردهای کدنویسی و تصمیمات معماری تیمتان را یاد می‌دهد."
---

# سیستم Playbooks

> **نکته:** این صفحه پیاده‌سازی فنی [فلسفه Constitutional Engineering](/fa/constitutional-engineering) ما را توضیح می‌دهد. اگر هنوز درباره پایه‌های فلسفی نخوانده‌اید، توصیه می‌کنیم ابتدا آنجا شروع کنید تا "چرایی" پشت playbooks را درک کنید.

سیستم Playbooks راه‌حل نسل دوم Hatcher برای مشکل زمینه در توسعه هوش مصنوعی است. جایی که فایل‌های ایستا مانند `Claude.md` نقطه شروعی را فراهم می‌کنند، Playbooks یک سیستم پویا، متمرکز و قابل کنترل ارائه می‌دهند که به عنوان یک قانون اساسی سازمانی واقعی برای عوامل هوش مصنوعی شما عمل می‌کند.

## Playbooks چیست؟

Playbooks فایل‌های پیکربندی ساختاریافته هستند که موارد زیر از تیم شما را ضبط می‌کنند:

- **استانداردهای کدنویسی**: قالب‌بندی، قراردادهای نام‌گذاری و ترجیحات سبک
- **تصمیمات معماری**: الگوهای کامپوننت، رویکردهای مدیریت state
- **ویژگی‌های Framework**: بهترین شیوه‌ها و الگوهای خاص کتابخانه
- **قوانین کسب‌وکار**: منطق و محدودیت‌های خاص حوزه

## ساختار Playbook

یک Playbook پایه این ساختار را دنبال می‌کند:

```json
{
  "name": "Vue 3 Component Standards",
  "version": "1.0.0",
  "framework": "vue",
  "rules": [
    {
      "category": "components",
      "type": "naming",
      "pattern": "PascalCase",
      "description": "All Vue components must use PascalCase naming"
    },
    {
      "category": "composition",
      "type": "api",
      "preference": "composition-api",
      "description": "Prefer Composition API over Options API"
    }
  ],
  "examples": [
    {
      "title": "Standard Component Structure",
      "code": "..."
    }
  ]
}
```

## Playbooks داخلی

Hatcher با Playbooks انتخابی برای frameworkهای محبوب عرضه می‌شود:

### Playbooks Vue.js

- **Vue 3 + TypeScript**: الگوهای composition مدرن
- **Nuxt.js**: قراردادهای SSR و مسیریابی مبتنی بر فایل
- **Pinia**: بهترین شیوه‌های مدیریت state

### Playbooks React

- **React + TypeScript**: کامپوننت‌های تابعی و hooks
- **Next.js**: App Router و کامپوننت‌های سرور
- **Zustand**: مدیریت state سبک‌وزن

### Playbooks جهانی

- **استانداردهای TypeScript**: تعاریف نوع و generics
- **CSS-in-JS**: الگوهای Styled-components و emotion
- **تست**: قراردادهای Jest و Cypress

## ایجاد Playbooks سفارشی

### قوانین خاص تیم

Playbooks بسازید که قراردادهای منحصربه‌فرد تیمتان را ضبط کنند:

```json
{
  "name": "Acme Corp Standards",
  "extends": ["vue3-typescript"],
  "rules": [
    {
      "category": "api",
      "type": "structure",
      "pattern": "services/api/*.service.ts",
      "description": "All API calls must go through service layer"
    },
    {
      "category": "components",
      "type": "props",
      "requirement": "interfaces",
      "description": "Component props must use TypeScript interfaces"
    }
  ]
}
```

### زمینه خاص پروژه

دانش خاص پروژه را اضافه کنید:

```json
{
  "name": "E-commerce Dashboard",
  "extends": ["acme-corp-standards"],
  "context": {
    "domain": "e-commerce",
    "entities": ["Product", "Order", "Customer"],
    "apis": [
      {
        "name": "OrdersAPI",
        "baseUrl": "/api/orders",
        "methods": ["GET", "POST", "PUT", "DELETE"]
      }
    ]
  }
}
```

## وراثت Playbook

Playbooks از وراثت برای پیکربندی مقیاس‌پذیر پشتیبانی می‌کنند:

```
Universal TypeScript
    ↓
Vue 3 + TypeScript
    ↓
Acme Corp Standards
    ↓
Project-Specific Rules
```

## یکپارچه‌سازی هوش مصنوعی

Hatcher به طور خودکار زمینه مرتبط Playbook را در promptهای هوش مصنوعی تزریق می‌کند:

### انتخاب زمینه

- **خودکار**: بر اساس نوع فایل و ساختار پروژه
- **دستی**: صراحتاً مشخص کنید کدام Playbooks استفاده شود
- **هوشمند**: از ترجیحات شما در طول زمان یاد بگیرید

### بهبود Prompt

موتورهای هوش مصنوعی زمینه ساختاریافته‌ای مانند این دریافت می‌کنند:

```
CONTEXT: Vue 3 Component Creation
PLAYBOOK: vue3-typescript, acme-corp-standards
RULES:
- Use Composition API with <script setup>
- Props must use TypeScript interfaces
- Components must be PascalCase
- API calls go through service layer
```

## بازار و اشتراک‌گذاری

### Playbooks جامعه

Playbooks ایجادشده توسط جامعه را مرور و نصب کنید:

- **خاص Framework**: الگوهای بهینه‌شده برای کتابخانه‌های محبوب
- **خاص صنعت**: دانش حوزه برای بخش‌های مختلف
- **تست‌شده توسط تیم**: قراردادهای دنیای واقعی از پروژه‌های موفق

### انتشار Playbooks شما

تخصص تیمتان را به اشتراک بگذارید:

```bash
hatcher playbook publish acme-corp-standards
```

### مدیریت نسخه

- **نسخه‌بندی معنایی**: تغییرات و سازگاری را پیگیری کنید
- **اعلان‌های به‌روزرسانی**: با بهبودهای جامعه به‌روز بمانید
- **پشتیبانی بازگشت**: به‌روزرسانی‌های مشکل‌دار را با خیال راحت بازگردانید

## پیکربندی

### Playbooks جهانی

Playbooks پیش‌فرض را برای تمام پروژه‌ها تنظیم کنید:

```json
{
  "globalPlaybooks": ["typescript-standards", "git-conventions"]
}
```

### تخطی پروژه

Playbooks خاص پروژه را در `hatcher.config.json` مشخص کنید:

```json
{
  "playbooks": ["vue3-typescript", "team-standards", "./custom-playbook.json"]
}
```

### بارگذاری شرطی

Playbooks مختلف را بر اساس زمینه بارگذاری کنید:

```json
{
  "conditional": {
    "**/*.test.ts": ["testing-standards"],
    "src/components/**": ["component-standards"],
    "src/api/**": ["api-standards"]
  }
}
```

## بهترین شیوه‌ها

### ساده شروع کنید

با اصول پایه framework شروع کنید و به تدریج قوانین خاص تیم را اضافه کنید:

1. **نصب Framework Playbook**: فوراً 80% پوشش داشته باشید
2. **افزودن قوانین تیم**: قراردادهای منحصربه‌فرد را ضبط کنید
3. **بهبود در طول زمان**: بر اساس استفاده واقعی به‌روزرسانی کنید

### آن را جاری نگه دارید

- **بررسی‌های منظم**: Playbooks را با تکامل الگوها به‌روزرسانی کنید
- **بازخورد تیم**: کل تیم را در نگهداری Playbook درگیر کنید
- **کنترل نسخه**: تغییرات Playbook را در کنار کد پیگیری کنید

### اثر را اندازه‌گیری کنید

- **معیارهای سازگاری**: رعایت الگوهای تعریف‌شده را پیگیری کنید
- **بهبودهای سرعت**: افزایش سرعت توسعه را اندازه‌گیری کنید
- **شاخص‌های کیفیت**: کاهش بازخورد بررسی کد را نظارت کنید

## ویژگی‌های آینده

### Playbooks تولیدشده توسط هوش مصنوعی

به طور خودکار با تجزیه‌وتحلیل codebases موجود Playbooks تولید کنید.

### اعتبارسنجی لحظه‌ای

بازخورد زنده در حین کدنویسی، اطمینان از رعایت Playbook.

### همکاری تیمی

گردش‌های کاری ویرایش و تأیید مشارکتی برای به‌روزرسانی‌های Playbook.

سیستم Playbooks هوش مصنوعی را از یک تولیدکننده کد عمومی به یک عضو تخصصی تیم شما تبدیل می‌کند که دقیقاً الزامات و قراردادهای شما را درک می‌کند.

<PageCTA
  title="اولین Playbook خود را بسازید"
  subtitle="هوش مصنوعی را به عضو تیمی تخصصی تبدیل کنید که دقیقاً استانداردهای شما را دنبال می‌کند"
  buttonText="شروع ساخت Playbooks"
  buttonLink="/fa/getting-started"
  buttonStyle="secondary"
  footer="الگوهای شما. استانداردهای شما. به طور مداوم اعمال شده."
/>
