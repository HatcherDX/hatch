---
title: نظام Playbooks | إدارة سياق الذكاء الاصطناعي الديناميكية للفرق
description: أتقن نظام Playbooks في Hatcher - الحل من الجيل التالي لإدارة سياق الذكاء الاصطناعي. أنشئ دساتير مؤسسية ديناميكية وقابلة للحوكمة تعلّم الذكاء الاصطناعي معايير الترميز والقرارات المعمارية لفريقك.
---

# نظام Playbooks

> **ملاحظة:** تصف هذه الصفحة التطبيق التقني لـ [فلسفة Constitutional Engineering](/ar/constitutional-engineering). إذا لم تقرأ عن الأساس الفلسفي بعد، نوصي بالبدء من هناك لفهم "لماذا" وراء playbooks.

نظام Playbooks هو حل Hatcher من الجيل الثاني لمشكلة السياق في تطوير الذكاء الاصطناعي. بينما توفر الملفات الثابتة مثل `Claude.md` نقطة بداية، توفر Playbooks نظاماً ديناميكياً ومركزياً وقابلاً للحوكمة يعمل كدستور مؤسسي حقيقي لوكلاء الذكاء الاصطناعي الخاصين بك.

## ما هي Playbooks؟

Playbooks هي ملفات تكوين منظمة تلتقط:

- **معايير الترميز**: التنسيق، واصطلاحات التسمية، وتفضيلات الأسلوب
- **القرارات المعمارية**: أنماط المكونات، وأساليب إدارة الحالة
- **خصائص إطار العمل**: أفضل الممارسات والأنماط الخاصة بالمكتبة
- **قواعد العمل**: المنطق والقيود الخاصة بالمجال

## بنية Playbook

يتبع Playbook الأساسي هذه البنية:

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

## Playbooks المدمجة

يأتي Hatcher مع Playbooks منسقة لأطر العمل الشائعة:

### Vue.js Playbooks

- **Vue 3 + TypeScript**: أنماط تركيبية حديثة
- **Nuxt.js**: اصطلاحات SSR والتوجيه المستند إلى الملفات
- **Pinia**: أفضل ممارسات إدارة الحالة

### React Playbooks

- **React + TypeScript**: المكونات الوظيفية و hooks
- **Next.js**: App Router ومكونات الخادم
- **Zustand**: إدارة الحالة خفيفة الوزن

### Playbooks العامة

- **معايير TypeScript**: تعريفات الأنواع والعموميات
- **CSS-in-JS**: أنماط styled-components و emotion
- **الاختبار**: اصطلاحات Jest و Cypress

## إنشاء Playbooks مخصصة

### قواعد خاصة بالفريق

أنشئ Playbooks تلتقط اصطلاحات فريقك الفريدة:

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

### سياق خاص بالمشروع

أضف معرفة خاصة بالمشروع:

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

## وراثة Playbook

تدعم Playbooks الوراثة للتكوين القابل للتوسع:

```
Universal TypeScript
    ↓
Vue 3 + TypeScript
    ↓
Acme Corp Standards
    ↓
Project-Specific Rules
```

## تكامل الذكاء الاصطناعي

يحقن Hatcher تلقائياً سياق Playbook ذي الصلة في مطالبات الذكاء الاصطناعي:

### اختيار السياق

- **تلقائي**: بناءً على أنواع الملفات وبنية المشروع
- **يدوي**: حدد صراحةً أي Playbooks لاستخدامها
- **ذكي**: تعلّم من تفضيلاتك بمرور الوقت

### تحسين المطالبة

تتلقى محركات الذكاء الاصطناعي سياقاً منظماً مثل:

```
CONTEXT: Vue 3 Component Creation
PLAYBOOK: vue3-typescript, acme-corp-standards
RULES:
- Use Composition API with <script setup>
- Props must use TypeScript interfaces
- Components must be PascalCase
- API calls go through service layer
```

## السوق والمشاركة

### Playbooks المجتمع

تصفح وثبّت Playbooks التي أنشأها المجتمع:

- **خاصة بإطار العمل**: أنماط محسّنة للمكتبات الشائعة
- **خاصة بالصناعة**: معرفة المجال لقطاعات مختلفة
- **مختبرة من الفرق**: اصطلاحات من العالم الحقيقي من مشاريع ناجحة

### نشر Playbooks الخاصة بك

شارك خبرة فريقك:

```bash
hatcher playbook publish acme-corp-standards
```

### إدارة الإصدارات

- **الإصدارات الدلالية**: تتبع التغييرات والتوافق
- **إشعارات التحديث**: ابقَ على اطلاع بتحسينات المجتمع
- **دعم التراجع**: أعد بأمان التحديثات الإشكالية

## التكوين

### Playbooks العامة

عيّن Playbooks الافتراضية لجميع المشاريع:

```json
{
  "globalPlaybooks": ["typescript-standards", "git-conventions"]
}
```

### تجاوز المشروع

حدد Playbooks خاصة بالمشروع في `hatcher.config.json`:

```json
{
  "playbooks": ["vue3-typescript", "team-standards", "./custom-playbook.json"]
}
```

### التحميل الشرطي

حمّل Playbooks مختلفة بناءً على السياق:

```json
{
  "conditional": {
    "**/*.test.ts": ["testing-standards"],
    "src/components/**": ["component-standards"],
    "src/api/**": ["api-standards"]
  }
}
```

## أفضل الممارسات

### ابدأ ببساطة

ابدأ بأساسيات إطار العمل وأضف تدريجياً قواعد خاصة بالفريق:

1. **ثبّت Playbook إطار العمل**: احصل على تغطية 80% على الفور
2. **أضف قواعد الفريق**: التقط الاصطلاحات الفريدة
3. **حسّن بمرور الوقت**: حدّث بناءً على الاستخدام الفعلي

### حافظ على التحديث

- **مراجعات منتظمة**: حدّث Playbooks مع تطور الأنماط
- **ملاحظات الفريق**: إشراك الفريق بأكمله في صيانة Playbook
- **التحكم في الإصدار**: تتبع تغييرات Playbook جنباً إلى جنب مع الكود

### قياس التأثير

- **مقاييس الاتساق**: تتبع الالتزام بالأنماط المحددة
- **تحسينات السرعة**: قِس مكاسب سرعة التطوير
- **مؤشرات الجودة**: راقب تقليل ملاحظات مراجعة الكود

## الميزات المستقبلية

### Playbooks المُولَّدة بالذكاء الاصطناعي

إنشاء Playbooks تلقائياً عن طريق تحليل قواعد الأكواد الموجودة.

### التحقق في الوقت الفعلي

ملاحظات مباشرة أثناء البرمجة، لضمان الامتثال لـ Playbook.

### تعاون الفريق

تحرير تعاوني وسير عمل موافقة لتحديثات Playbook.

يحوّل نظام Playbooks الذكاء الاصطناعي من مولد كود عام إلى عضو متخصص في فريقك يفهم متطلباتك واصطلاحاتك بالضبط.

<PageCTA
  title="أنشئ Playbook الأول الخاص بك"
  subtitle="حوّل الذكاء الاصطناعي إلى عضو فريق متخصص يتبع معاييرك بالضبط"
  buttonText="ابدأ بناء Playbooks"
  buttonLink="/ar/getting-started"
  buttonStyle="secondary"
  footer="أنماطك. معاييرك. مُطبَّقة بشكل متسق."
/>
