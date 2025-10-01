---
title: "Actions 시스템 | 헌법적 판단"
description: "Hatcher의 Actions 시스템 이해 - 모든 변경을 검증하는 결정론적 품질 게이트. 코드가 헌법 표준을 충족하는지 확인하는 최종 판단."
---

# Hatcher Actions: 헌법적 판단

Actions는 Hatcher 생태계의 품질 게이트입니다 - 코드가 표준을 충족하는지 결정하는 헌법적 판사입니다. 워크플로우나 프로세스가 아닙니다; 간단한 질문에 답하는 원자적이고 결정론적인 검증자입니다: **"통과 또는 실패?"**

## Actions란 무엇인가?

Actions는:

- **원자적 검증자**: 하나의 특정 측면을 검증하는 단일 목적 검사
- **결정론적**: 동일한 입력에 대해 항상 동일한 결과 생성
- **이진**: "통과" 또는 "실패"만 반환 (세부사항 포함)
- **빠름**: 복잡한 처리가 아닌 빠른 피드백을 위해 설계

코드의 모든 부분이 프로젝트 헌법을 존중하도록 보장하는 최종 체크포인트입니다.

## 계층 구조에서의 역할

Actions를 이해하려면 Hatcher 철학에서의 위치를 이해해야 합니다:

1. **Playbooks** (전략): 시행하려는 표준을 정의
2. **Autopilots** (전술): 그 표준을 구현하는 방법 실행
3. **Actions** (판단): 구현이 표준을 충족하는지 검증

```yaml
# 완전한 흐름
playbook: 'We use Vue 3 with TypeScript'
autopilot: 'Generate a Vue 3 component with TypeScript'
actions: 'Run type-check, lint, and test to verify correctness'
```

## 핵심 Actions

Hatcher는 보편적 품질 게이트를 위한 필수 Actions를 제공합니다:

### 타입 안전성 Actions

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

### 코드 품질 Actions

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

### 테스팅 Actions

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

### 보안 Actions

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

### 성능 Actions

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

## 커스텀 Actions

`hatcher.config.json`에서 프로젝트별 Actions 정의:

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

## Action 실행

### 개별 Actions

특정 Actions를 주문형으로 실행:

```bash
# 단일 action 실행
hatcher action run test:unit

# 자세한 출력으로 실행
hatcher action run lint:check --verbose

# 커스텀 매개변수로 실행
hatcher action run coverage:verify --threshold=90
```

### Action 그룹

관련 Actions를 함께 실행:

```bash
# 모든 테스트 actions 실행
hatcher action run-group testing

# pre-commit actions 실행
hatcher action run-group pre-commit

# 배포 검증 실행
hatcher action run-group deploy-checks
```

### Action 구성

구성에서 Action 그룹 정의:

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

## Action 결과

Actions는 구조화된 피드백을 제공합니다:

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

## Autopilots와의 통합

Autopilots는 Actions를 품질 체크포인트로 사용:

```yaml
# Autopilot 워크플로우에서
name: Feature Implementation
steps:
  - name: Generate code
    action: ai.create

  - name: Quality checkpoint
    action: run.actions
    actions:
      - lint:check # 통과 필수
      - types:validate # 통과 필수
      - test:unit # 통과 필수
    fail_fast: true # 첫 실패 시 중지

  - name: Commit if quality passed
    action: git.commit
    condition: ${steps.quality_checkpoint.passed}
```

## Action 정책

Actions가 필수인 경우 정의:

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

## 모범 사례

### Action 설계 원칙

1. **단일 책임**: 각 Action은 정확히 하나만 검증
2. **빠른 실행**: Actions는 분이 아닌 초 단위로 완료되어야 함
3. **명확한 실패 메시지**: 실패 시 실행 가능한 피드백 제공
4. **결정론적**: 동일한 입력은 항상 동일한 결과 생성
5. **부작용 없음**: Actions는 검증하지만 수정하지 않음

### 성능 최적화

- **병렬 실행**: 독립적인 Actions 동시 실행
- **증분 검사**: 가능한 경우 변경된 파일만 검증
- **캐싱**: 변경되지 않은 코드의 결과 캐시
- **조기 종료**: 중요한 위반 시 빠른 실패

### 오류 처리

Actions는 명확하고 실행 가능한 오류 메시지를 제공해야 합니다:

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

## 헌법적 판단의 힘

Actions는 코드 품질의 수호자입니다 - 모든 코드가 충족해야 하는 타협할 수 없는 표준입니다. 제안이나 가이드라인이 아닙니다; 코드베이스의 헌법적 법입니다.

검증 (Actions)을 구현 (Autopilots) 및 전략 (Playbooks)에서 분리함으로써, Hatcher는 코드 품질을 보장하기 위한 명확하고 유지 관리 가능하며 확장 가능한 시스템을 만듭니다.

기억하세요: **Actions는 생성하거나 수정하지 않습니다 - 판단합니다. 그리고 그 판단은 최종입니다.**

<PageCTA
  title="표준 자동 시행"
  subtitle="코드 품질을 보호하는 깨지지 않는 검증 규칙 만들기"
  buttonText="Actions 구성"
  buttonLink="/ko/getting-started"
  buttonStyle="secondary"
  footer="타협 없음. 예외 없음. 당신의 표준, 시행됩니다."
/>
