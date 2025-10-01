---
title: نظام Actions | الحكم الدستوري الخاص بك
description: فهم نظام Actions في Hatcher - بوابات الجودة الحتمية التي تتحقق من صحة كل تغيير. الحكم النهائي الذي يضمن أن الكود الخاص بك يلبي معاييرك الدستورية.
---

# Hatcher Actions: الحكم الدستوري الخاص بك

Actions هي بوابات الجودة في نظام Hatcher البيئي - القضاة الدستوريون الذين يحددون ما إذا كان الكود الخاص بك يلبي معاييرك. إنها ليست سير عمل أو عمليات؛ إنها مدققات ذرية وحتمية تجيب على سؤال بسيط: **"نجاح أم فشل؟"**

## ما هي Actions؟

Actions هي:

- **مدققات ذرية**: فحوصات ذات غرض واحد تتحقق من جانب محدد واحد
- **حتمية**: تنتج دائماً نفس النتيجة لنفس المدخلات
- **ثنائية**: ترجع فقط "نجاح" أو "فشل" (مع التفاصيل)
- **سريعة**: مصممة للحصول على ملاحظات سريعة، وليس للمعالجة المعقدة

إنها نقطة التفتيش النهائية التي تضمن أن كل جزء من الكود يحترم دستور مشروعك.

## الدور في التسلسل الهرمي

فهم Actions يتطلب فهم مكانها في فلسفة Hatcher:

1. **Playbooks** (الإستراتيجية): تحدد ما هي المعايير التي تريد تطبيقها
2. **Autopilots** (التكتيكات): تنفذ كيفية تنفيذ تلك المعايير
3. **Actions** (الحكم): تتحقق من صحة ما إذا كان التنفيذ يلبي المعايير

```yaml
# التدفق الكامل
playbook: 'We use Vue 3 with TypeScript'
autopilot: 'Generate a Vue 3 component with TypeScript'
actions: 'Run type-check, lint, and test to verify correctness'
```

## Actions الأساسية

Hatcher توفر Actions أساسية لبوابات الجودة العالمية:

### Actions أمان الأنواع

```yaml
actions:
  - name: types:validate
    description: Verify TypeScript compilation
    command: tsc --noEmit
    pass_criteria: exit_code == 0

  - name: types:strict
    description: Enforce strict TypeScript rules
    command: tsc --strict --noEmit
    pass_criteria: exit_code == 0
```

### Actions جودة الكود

```yaml
actions:
  - name: lint:check
    description: Verify code meets linting standards
    command: eslint . --max-warnings 0
    pass_criteria: exit_code == 0

  - name: format:verify
    description: Check code formatting
    command: prettier --check .
    pass_criteria: exit_code == 0
```

### Actions الاختبار

```yaml
actions:
  - name: test:unit
    description: Run unit tests
    command: npm test
    pass_criteria: exit_code == 0

  - name: test:integration
    description: Run integration tests
    command: npm run test:integration
    pass_criteria: exit_code == 0

  - name: coverage:verify
    description: Ensure test coverage meets threshold
    command: npm run test:coverage
    pass_criteria: coverage >= 80
```

### Actions الأمان

```yaml
actions:
  - name: security:audit
    description: Check for known vulnerabilities
    command: npm audit --audit-level=moderate
    pass_criteria: exit_code == 0

  - name: secrets:scan
    description: Ensure no secrets in code
    command: trufflehog scan .
    pass_criteria: no_secrets_found
```

### Actions الأداء

```yaml
actions:
  - name: bundle:size
    description: Verify bundle size limits
    command: bundlesize
    pass_criteria: all_bundles_under_limit

  - name: performance:lighthouse
    description: Check Lighthouse scores
    command: lighthouse-ci
    pass_criteria:
      performance: >= 90
      accessibility: >= 95
```

## Actions مخصصة

حدد Actions خاصة بالمشروع في `hatcher.config.json` الخاص بك:

```json
{
  "actions": {
    "custom:api-contracts": {
      "description": "Validate API contracts",
      "command": "./scripts/validate-api.sh",
      "pass_criteria": "exit_code == 0"
    },
    "custom:db-migrations": {
      "description": "Verify database migrations",
      "command": "npm run migrate:verify",
      "pass_criteria": "exit_code == 0"
    },
    "custom:i18n-complete": {
      "description": "Check translation completeness",
      "command": "i18n-validator",
      "pass_criteria": "missing_keys == 0"
    }
  }
}
```

## تنفيذ Action

### Actions فردية

قم بتشغيل Actions محددة عند الطلب:

```bash
# Run a single action
hatcher action run test:unit

# Run with verbose output
hatcher action run lint:check --verbose

# Run with custom parameters
hatcher action run coverage:verify --threshold=90
```

### مجموعات Action

نفذ Actions ذات الصلة معاً:

```bash
# Run all test actions
hatcher action run-group testing

# Run pre-commit actions
hatcher action run-group pre-commit

# Run deployment validations
hatcher action run-group deploy-checks
```

### تكوين Action

حدد مجموعات Action في التكوين الخاص بك:

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

## نتائج Action

Actions توفر ملاحظات منظمة:

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
  "suggestion": "Fix failing tests before committing"
}
```

## التكامل مع Autopilots

Autopilots تستخدم Actions كنقاط تفتيش للجودة:

```yaml
# In an Autopilot workflow
name: Feature Implementation
steps:
  - name: Generate code
    action: ai.create

  - name: Quality checkpoint
    action: run.actions
    actions:
      - lint:check # Must pass
      - types:validate # Must pass
      - test:unit # Must pass
    fail_fast: true # Stop on first failure

  - name: Commit if quality passed
    action: git.commit
    condition: ${steps.quality_checkpoint.passed}
```

## سياسات Action

حدد متى تكون Actions إلزامية:

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

## أفضل الممارسات

### مبادئ تصميم Action

1. **مسؤولية واحدة**: كل Action تتحقق من صحة شيء واحد بالضبط
2. **تنفيذ سريع**: Actions يجب أن تكتمل في ثوانٍ، وليس دقائق
3. **رسائل فشل واضحة**: توفير ملاحظات قابلة للتنفيذ عند الفشل
4. **حتمية**: نفس المدخلات تنتج دائماً نفس النتيجة
5. **بدون آثار جانبية**: Actions تتحقق ولكنها لا تعدل

### تحسين الأداء

- **التنفيذ المتوازي**: قم بتشغيل Actions المستقلة في وقت واحد
- **الفحوصات التدريجية**: تحقق فقط من الملفات المتغيرة عندما يكون ذلك ممكناً
- **التخزين المؤقت**: قم بتخزين النتائج مؤقتاً للكود غير المتغير
- **الخروج المبكر**: فشل سريع عند الانتهاكات الحرجة

### معالجة الأخطاء

Actions يجب أن توفر رسائل خطأ واضحة وقابلة للتنفيذ:

```json
{
  "action": "lint:check",
  "status": "fail",
  "message": "Code quality issues detected",
  "fixes": {
    "automatic": "Run 'npm run lint:fix' to auto-fix 12 issues",
    "manual": "3 issues require manual intervention",
    "details": [
      {
        "file": "src/components/Header.vue",
        "line": 25,
        "rule": "no-unused-vars",
        "message": "'oldValue' is defined but never used"
      }
    ]
  }
}
```

## قوة الحكم الدستوري

Actions هي حراس جودة الكود الخاص بك - المعايير غير القابلة للتفاوض التي يجب على كل جزء من الكود تلبيتها. إنها ليست اقتراحات أو إرشادات؛ إنها القانون الدستوري لقاعدة الكود الخاصة بك.

من خلال فصل التحقق (Actions) عن التنفيذ (Autopilots) والإستراتيجية (Playbooks)، Hatcher يخلق نظاماً واضحاً وقابلاً للصيانة وقابلاً للتطوير لضمان جودة الكود.

تذكر: **Actions لا تنشئ أو تعدل - إنها تحكم. وحكمها نهائي.**

<PageCTA
  title="طبق معاييرك تلقائياً"
  subtitle="أنشئ قواعد تحقق لا تنكسر تحمي جودة الكود الخاص بك"
  buttonText="قم بتكوين Actions الخاصة بك"
  buttonLink="/ar/getting-started"
  buttonStyle="secondary"
  footer="لا تسوية. لا استثناءات. معاييرك، مطبقة."
/>
