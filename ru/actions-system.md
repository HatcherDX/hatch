---
title: "Система Actions | Ваше конституционное суждение"
description: "Поймите систему Actions Hatcher - детерминистские качественные шлюзы, которые валидируют каждое изменение. Окончательное суждение, которое гарантирует соответствие вашего кода вашим конституционным стандартам."
---

# Hatcher Actions: Ваше конституционное суждение

Actions - это качественные шлюзы экосистемы Hatcher - конституционные судьи, которые определяют, соответствует ли ваш код вашим стандартам. Они не рабочие процессы или процессы; они атомарные, детерминистские валидаторы, которые отвечают на простой вопрос: **"Пройдено или провалено?"**

## Что такое Actions?

Actions - это:

- **Атомарные валидаторы**: Однозадачные проверки, валидирующие один специфический аспект
- **Детерминистские**: Всегда производят одинаковый результат для одинакового ввода
- **Бинарные**: Возвращают только "пройдено" или "провалено" (с деталями)
- **Быстрые**: Разработаны для быстрой обратной связи, не сложной обработки

Они финальный контрольный пункт, который гарантирует, что каждый кусок кода соблюдает конституцию вашего проекта.

## Роль в иерархии

Понимание Actions требует понимания их места в философии Hatcher:

1. **Playbooks** (Стратегия): Определяют ЧТО стандарты вы хотите применять
2. **Autopilots** (Тактика): Выполняют КАК реализовать эти стандарты
3. **Actions** (Суждение): Валидируют ЕСЛИ реализация соответствует стандартам

```yaml
# Полный поток
playbook: 'We use Vue 3 with TypeScript'
autopilot: 'Generate a Vue 3 component with TypeScript'
actions: 'Run type-check, lint, and test to verify correctness'
```

## Основные Actions

Hatcher предоставляет основные Actions для универсальных качественных шлюзов:

### Actions типобезопасности

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

### Actions качества кода

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

### Actions тестирования

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

### Actions безопасности

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

### Actions производительности

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

## Пользовательские Actions

Определяйте Actions для конкретного проекта в вашем `hatcher.config.json`:

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

## Выполнение Action

### Индивидуальные Actions

Запускайте специфические Actions по требованию:

```bash
# Запустить одну action
hatcher action run test:unit

# Запустить с подробным выводом
hatcher action run lint:check --verbose

# Запустить с пользовательскими параметрами
hatcher action run coverage:verify --threshold=90
```

### Группы Action

Выполняйте связанные Actions вместе:

```bash
# Запустить все actions тестирования
hatcher action run-group testing

# Запустить actions pre-commit
hatcher action run-group pre-commit

# Запустить валидации развертывания
hatcher action run-group deploy-checks
```

### Конфигурация Action

Определяйте группы Action в вашей конфигурации:

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

## Результаты Action

Actions предоставляют структурированную обратную связь:

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

## Интеграция с Autopilots

Autopilots используют Actions как качественные контрольные точки:

```yaml
# В рабочем процессе Autopilot
name: Feature Implementation
steps:
  - name: Generate code
    action: ai.create

  - name: Quality checkpoint
    action: run.actions
    actions:
      - lint:check # Должно пройти
      - types:validate # Должно пройти
      - test:unit # Должно пройти
    fail_fast: true # Остановиться на первой неудаче

  - name: Commit if quality passed
    action: git.commit
    condition: ${steps.quality_checkpoint.passed}
```

## Политики Action

Определяйте, когда Actions обязательны:

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

## Лучшие практики

### Принципы дизайна Action

1. **Единая ответственность**: Каждая Action валидирует точно одну вещь
2. **Быстрое выполнение**: Actions должны завершаться за секунды, не минуты
3. **Четкие сообщения об ошибках**: Предоставляйте действенную обратную связь при неудачах
4. **Детерминистские**: Одинаковый ввод всегда производит одинаковый результат
5. **Без побочных эффектов**: Actions валидируют, но не модифицируют

### Оптимизация производительности

- **Параллельное выполнение**: Запускайте независимые Actions одновременно
- **Инкрементальные проверки**: Валидируйте только измененные файлы, когда возможно
- **Кэширование**: Кэшируйте результаты для неизмененного кода
- **Ранний выход**: Проваливайтесь быстро на критических нарушениях

### Обработка ошибок

Actions должны предоставлять четкие, действенные сообщения об ошибках:

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

## Сила конституционного суждения

Actions - это стражи вашего качества кода - неоспоримые стандарты, которым должен соответствовать каждый кусок кода. Они не предложения или руководства; они конституционный закон вашей кодовой базы.

Разделяя валидацию (Actions) от реализации (Autopilots) и стратегии (Playbooks), Hatcher создает четкую, поддерживаемую и масштабируемую систему для обеспечения качества кода.

Помните: **Actions не создают и не модифицируют - они судят. И их суждение окончательно.**

<PageCTA
  title="Применяйте свои стандарты автоматически"
  subtitle="Создайте нерушимые правила валидации, охраняющие качество вашего кода"
  buttonText="Настроить ваши Actions"
  buttonLink="/ru/getting-started"
  buttonStyle="secondary"
  footer="Без компромиссов. Без исключений. Ваши стандарты, применяемые."
/>
