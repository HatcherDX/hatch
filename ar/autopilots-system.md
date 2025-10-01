---
title: نظام Autopilot | تنسيق التطوير الذكي
description: إتقان نظام Autopilot في Hatcher - سير عمل التشغيل الآلي القوية التي تنفذ مهام التطوير المعقدة بمساعدة الذكاء الاصطناعي. حوّل المهام المتكررة إلى وصفات ذكية وقابلة لإعادة الاستخدام.
---

# نظام Autopilot

نظام Autopilot هو إطار عمل التشغيل الآلي التكتيكي في Hatcher الذي يحول سير عمل التطوير المعقد إلى وصفات ذكية وقابلة للتنفيذ. حيث تحدد Playbooks الإستراتيجية (المعايير والأنماط)، Autopilots هي التكتيكات التي تُشغل تنفيذ تلك الأنماط بذكاء مدعوم بالذكاء الاصطناعي.

## ما هي Autopilots؟

Autopilots هي سير عمل منظمة تجمع بين:

- **أتمتة المهام**: عمليات متعددة الخطوات يتم تنفيذها بدقة
- **ذكاء الذكاء الاصطناعي**: قرارات مدركة للسياق أثناء التنفيذ
- **تكامل الأدوات**: تفاعل سلس مع أدوات التطوير
- **معالجة الأخطاء**: استرداد ذكي من المشاكل الشائعة

إنها "الوصفات" التي تعرف كيفية تحقيق ما تعلن Playbooks الخاصة بك أنك تريد تحقيقه.

## بنية Autopilot

Autopilot أساسي يتبع هذه البنية:

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

## Autopilots المدمجة

Hatcher يأتي مع Autopilots قوية لأنماط التطوير الشائعة:

### Autopilots المكونات

- **Create Component**: إنشاء مكونات كاملة مع الاختبارات
- **Extract Component**: إعادة هيكلة الكود إلى مكونات قابلة لإعادة الاستخدام
- **Update Props**: تعديل واجهات المكونات بأمان

### Autopilots إعادة الهيكلة

- **Extract Function**: سحب المنطق إلى دوال مساعدة
- **Rename Symbol**: إعادة التسمية بأمان عبر قاعدة الكود بأكملها
- **Move Module**: نقل الكود مع تحديثات الاستيراد

### Autopilots الاختبار

- **Generate Tests**: إنشاء مجموعات اختبار من التنفيذ
- **Update Snapshots**: تحديث لقطات الاختبار بذكاء
- **Coverage Report**: تحليل وتحسين تغطية الاختبار

### Autopilots التوثيق

- **Generate JSDoc**: إضافة توثيق من تحليل الكود
- **Update README**: الحفاظ على التوثيق متزامناً
- **API Documentation**: إنشاء توثيق API من الكود

## إنشاء Autopilots مخصصة

### Autopilots سير العمل الأساسية

أنشئ Autopilots لسير عمل فريقك المحدد:

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

### Autopilots المحسنة بالذكاء الاصطناعي

استفد من الذكاء الاصطناعي للتنفيذ الذكي للمهام:

```yaml
name: Optimize Component Performance
description: Analyze and optimize Vue component performance
ai-mode: enhanced

steps:
  - name: Analyze component
    action: ai.analyze
    prompt: |
      Analyze this Vue component for performance issues:
      - Unnecessary re-renders
      - Missing memoization
      - Inefficient computed properties
      - Large bundle size

  - name: Apply optimizations
    action: ai.refactor
    playbooks:
      - vue-performance
      - bundle-optimization
    constraints:
      - Maintain all existing functionality
      - Keep TypeScript types intact
      - Preserve component API

  - name: Verify changes
    action: run.actions
    actions: ['test:component', 'performance:benchmark']
```

## مشغلات Autopilot

### التنفيذ اليدوي

قم بتشغيل Autopilots عند الطلب:

```bash
hatcher run create-component --name UserProfile
```

### مشغلات مراقبة الملفات

نفذ Autopilots عند تغيير الملفات:

```json
{
  "triggers": [
    {
      "type": "file-change",
      "pattern": "**/*.vue",
      "autopilot": "update-component-docs"
    }
  ]
}
```

### تكامل Git Hook

قم بأتمتة Autopilots مع سير عمل Git:

```json
{
  "triggers": [
    {
      "type": "pre-commit",
      "autopilot": "format-and-lint"
    },
    {
      "type": "post-merge",
      "autopilot": "update-dependencies"
    }
  ]
}
```

## تكوين Autopilot

### Autopilots المتسلسلة

ربط Autopilots لسير عمل معقدة:

```yaml
name: Complete Feature Development
steps:
  - action: run.autopilot
    name: Create Component

  - action: run.autopilot
    name: Generate Tests

  - action: run.autopilot
    name: Update Documentation

  - action: git.commit
    message: 'feat: Add ${featureName} component'

  - action: run.actions
    name: Final Quality Gates
    actions: ['coverage:verify', 'bundle:size']
```

### Autopilots المتوازية

نفذ المهام المستقلة في وقت واحد:

```yaml
name: Project Setup
parallel: true
steps:
  - action: npm.install
  - action: generate.types
  - action: setup.environment
```

### Autopilots المشروطة

أضف منطقاً إلى سير العمل الخاص بك:

```yaml
steps:
  - name: Check TypeScript
    action: config.check
    key: useTypeScript

  - name: Generate types
    condition: ${steps.checkTypeScript.result}
    action: typescript.generate
```

## معالجة الأخطاء

### منطق إعادة المحاولة

تعامل مع الأعطال العابرة بأناقة:

```yaml
steps:
  - name: API Setup
    action: api.initialize
    retry:
      attempts: 3
      delay: 1000
      backoff: exponential
```

### Autopilots الاحتياطية

قدم مسارات بديلة:

```yaml
steps:
  - name: Use npm
    action: npm.install
    fallback:
      - action: yarn.install
      - action: pnpm.install
```

### استرداد الأخطاء

قم بالتنظيف عند الفشل:

```yaml
steps:
  - name: Database migration
    action: db.migrate
    onError:
      - action: db.rollback
      - action: notify.team
        message: Migration failed
```

## سوق Autopilot

### Autopilots المجتمع

تصفح وثبت Autopilots من المجتمع:

- **خاصة بإطار العمل**: محسنة لـ React، Vue، Angular
- **تكاملات الأدوات**: Docker، Kubernetes، CI/CD
- **خاصة بالمجال**: التجارة الإلكترونية، SaaS، الهاتف المحمول

### نشر Autopilots

شارك Autopilots الخاصة بك مع المجتمع:

```bash
hatcher autopilot publish my-awesome-workflow
```

### إصدارات Autopilot

- **الإصدارات الدلالية**: تتبع التوافق
- **إدارة الاعتماديات**: التعامل مع اعتماديات Autopilot
- **إشعارات التحديث**: ابق على اطلاع بالتحسينات

## التكوين

### Autopilots العامة

قم بتكوين Autopilots الافتراضية لجميع المشاريع:

```json
{
  "globalAutopilots": [
    "code-formatter",
    "commit-validator",
    "dependency-checker"
  ]
}
```

### Autopilots المشروع

حدد Autopilots خاصة بالمشروع في `hatcher.config.json`:

```json
{
  "autopilots": {
    "directory": "./autopilots",
    "autoload": ["setup", "deploy"],
    "aliases": {
      "dev": "start-development",
      "ship": "deploy-production"
    }
  }
}
```

## أفضل الممارسات

### تصميم Autopilot

- **مسؤولية واحدة**: كل Autopilot يجب أن تنسق سير عمل واحد بشكل جيد
- **متماثل القوة**: Autopilots يجب أن يكون آمناً تشغيله عدة مرات
- **قابل للتركيب**: صمم Autopilots للعمل معاً
- **موثق**: أوصاف وأمثلة واضحة

### الأداء

- **نتائج التخزين المؤقت**: تجنب العمليات الزائدة عن الحاجة
- **التنفيذ المتوازي**: استخدم التوازي حيثما كان ذلك ممكناً
- **التحسين التدريجي**: ابدأ بسيطاً، أضف التعقيد حسب الحاجة

### الأمان

- **التحقق من صحة المدخلات**: تحقق من جميع المدخلات قبل التنفيذ
- **التنفيذ في صندوق الرمل**: قم بتشغيل Autopilots غير الموثوقة بأمان
- **تدقيق السجلات**: تتبع جميع عمليات تنفيذ Autopilot

## التكامل مع Playbooks و Actions

Autopilots تنسق بين Playbooks (الإستراتيجية) و Actions (التحقق):

```yaml
name: Implement Feature
playbooks:
  - vue3-typescript # The standards to follow
  - team-standards # The patterns to use

steps:
  - name: Generate component
    action: ai.create
    prompt: Create a Vue component following our standards

  - name: Apply team patterns
    action: playbook.apply
    strict: true

  - name: Validate with Actions
    action: run.actions
    actions:
      - test:unit # Verify tests pass
      - lint:check # Verify code quality
      - coverage:verify # Verify test coverage
```

## المراقبة والتحليلات

### تتبع التنفيذ

راقب أداء Autopilot:

- **وقت التنفيذ**: تتبع المدة والاختناقات
- **معدل النجاح**: مراقبة الموثوقية
- **أنماط الاستخدام**: فهم سير عمل الفريق

### اقتراحات التحسين

رؤى مدعومة بالذكاء الاصطناعي:

- **تحسينات سير العمل**: اقتراح تسلسلات Autopilot أفضل
- **نصائح الأداء**: تحديد فرص التحسين
- **كشف الأنماط**: اكتشاف فرص التشغيل الآلي

## الميزات المستقبلية

### منشئ Autopilot المرئي

واجهة السحب والإفلات لإنشاء سير عمل معقدة بدون كود.

### إنشاء Autopilot بالذكاء الاصطناعي

إنشاء Autopilots تلقائياً من خلال ملاحظة أنماط المطورين.

### التنفيذ الموزع

تشغيل Autopilots عبر أجهزة متعددة للتوازي الهائل.

### تصحيح أخطاء السفر عبر الزمن

الانتقال عبر تاريخ تنفيذ Autopilot لتصحيح سير العمل المعقد.

## قوة التشغيل الآلي التكتيكي

نظام Autopilot يحول مهام التطوير المتكررة إلى سير عمل ذكية وآلية تتعلم وتتحسن بمرور الوقت. إنها الطبقة التكتيكية التي تسد الفجوة بين Playbooks الإستراتيجية و Actions المُحققة، مما يخلق نظاماً بيئياً كاملاً للتشغيل الآلي يحترم معاييرك بينما يسرع تطويرك.

تذكر: **Playbooks تحدد ماذا، Autopilots تنفذ كيف، Actions تتحقق إذا.**

<PageCTA
  title="انشر Autopilot الأول الخاص بك"
  subtitle="قم بأتمتة سير العمل المعقدة مع وكلاء ذكاء اصطناعي ذكيين ومحسنين ذاتياً"
  buttonText="أطلق نظام Autopilot"
  buttonLink="/ar/autopilots"
  buttonStyle="secondary"
  footer="من التكرار إلى التشغيل الآلي. من اليدوي إلى السحري."
/>
