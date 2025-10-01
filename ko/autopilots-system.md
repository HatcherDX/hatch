---
title: "Autopilot System | 지능형 개발 오케스트레이션"
description: "Hatcher의 Autopilot 시스템을 마스터하세요 - AI 지원으로 복잡한 개발 작업을 실행하는 강력한 자동화 워크플로우입니다. 반복 작업을 지능형 재사용 가능한 레시피로 변환하세요."
---

# Autopilot System

Autopilot 시스템은 복잡한 개발 워크플로우를 지능형 실행 가능한 레시피로 변환하는 Hatcher의 전술적 자동화 프레임워크입니다. Playbooks가 전략(표준 및 패턴)을 정의하는 곳에서, Autopilots는 AI 기반 지능으로 해당 패턴의 구현을 자동화하는 전술입니다.

## Autopilots란 무엇인가?

Autopilots는 다음을 결합한 구조화된 워크플로우입니다:

- **작업 자동화**: 정밀하게 실행되는 다단계 프로세스
- **AI 지능**: 실행 중 맥락 인식 결정
- **도구 통합**: 개발 도구와의 원활한 상호 작용
- **오류 처리**: 일반적인 문제로부터의 지능형 복구

이것은 Playbooks가 당신이 달성하고자 하는 것을 선언하는 반면, 어떻게 달성할지 아는 "레시피"입니다.

## Autopilot 구조

기본 Autopilot은 다음 구조를 따릅니다:

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

## 내장 Autopilots

Hatcher는 일반적인 개발 패턴을 위한 강력한 Autopilots와 함께 제공됩니다:

### Component Autopilots

- **Create Component**: 테스트와 함께 완전한 컴포넌트 생성
- **Extract Component**: 코드를 재사용 가능한 컴포넌트로 리팩토링
- **Update Props**: 컴포넌트 인터페이스를 안전하게 수정

### Refactoring Autopilots

- **Extract Function**: 로직을 유틸리티 함수로 추출
- **Rename Symbol**: 전체 코드베이스에서 안전하게 이름 변경
- **Move Module**: 임포트 업데이트로 코드 재배치

### Testing Autopilots

- **Generate Tests**: 구현에서 테스트 스위트 생성
- **Update Snapshots**: 테스트 스냅샷을 지능적으로 새로 고침
- **Coverage Report**: 테스트 커버리지 분석 및 개선

### Documentation Autopilots

- **Generate JSDoc**: 코드 분석에서 문서 추가
- **Update README**: 문서를 동기화 상태로 유지
- **API Documentation**: 코드에서 API 문서 생성

## 사용자 정의 Autopilots 만들기

### 기본 워크플로우 Autopilots

팀의 특정 워크플로우를 위한 Autopilots를 만듭니다:

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

### AI 강화 Autopilots

지능형 작업 실행을 위해 AI를 활용합니다:

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

## Autopilot 트리거

### 수동 실행

요청 시 Autopilots 실행:

```bash
hatcher run create-component --name UserProfile
```

### 파일 감시 트리거

파일 변경 시 Autopilots 실행:

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

### Git Hook 통합

Git 워크플로우로 Autopilots 자동화:

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

## Autopilot 구성

### 순차 Autopilots

복잡한 워크플로우를 위해 Autopilots 연결:

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

### 병렬 Autopilots

독립적인 작업을 동시에 실행:

```yaml
name: Project Setup
parallel: true
steps:
  - action: npm.install
  - action: generate.types
  - action: setup.environment
```

### 조건부 Autopilots

워크플로우에 로직 추가:

```yaml
steps:
  - name: Check TypeScript
    action: config.check
    key: useTypeScript

  - name: Generate types
    condition: ${steps.checkTypeScript.result}
    action: typescript.generate
```

## 오류 처리

### 재시도 로직

일시적인 실패를 우아하게 처리:

```yaml
steps:
  - name: API Setup
    action: api.initialize
    retry:
      attempts: 3
      delay: 1000
      backoff: exponential
```

### 대체 Autopilots

대안 경로 제공:

```yaml
steps:
  - name: Use npm
    action: npm.install
    fallback:
      - action: yarn.install
      - action: pnpm.install
```

### 오류 복구

실패 시 정리:

```yaml
steps:
  - name: Database migration
    action: db.migrate
    onError:
      - action: db.rollback
      - action: notify.team
        message: Migration failed
```

## Autopilot Marketplace

### 커뮤니티 Autopilots

커뮤니티에서 Autopilots 탐색 및 설치:

- **프레임워크 특정**: React, Vue, Angular에 최적화
- **도구 통합**: Docker, Kubernetes, CI/CD
- **도메인 특정**: 전자 상거래, SaaS, 모바일

### Autopilots 게시

커뮤니티와 Autopilots 공유:

```bash
hatcher autopilot publish my-awesome-workflow
```

### Autopilot 버전 관리

- **시맨틱 버전 관리**: 호환성 추적
- **종속성 관리**: Autopilot 종속성 처리
- **업데이트 알림**: 개선 사항을 최신 상태로 유지

## 구성

### 전역 Autopilots

모든 프로젝트에 대한 기본 Autopilots 구성:

```json
{
  "globalAutopilots": [
    "code-formatter",
    "commit-validator",
    "dependency-checker"
  ]
}
```

### 프로젝트 Autopilots

`hatcher.config.json`에서 프로젝트별 Autopilots 정의:

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

## 모범 사례

### Autopilot 설계

- **단일 책임**: 각 Autopilot은 하나의 워크플로우를 잘 오케스트레이션해야 합니다
- **멱등성**: Autopilots는 여러 번 실행해도 안전해야 합니다
- **구성 가능**: Autopilots가 함께 작동하도록 설계
- **문서화**: 명확한 설명과 예제

### 성능

- **결과 캐싱**: 중복 작업 방지
- **병렬 실행**: 가능한 곳에 병렬 처리 사용
- **점진적 향상**: 간단하게 시작하고 필요에 따라 복잡성 추가

### 보안

- **입력 검증**: 실행 전 모든 입력 확인
- **샌드박스 실행**: 신뢰할 수 없는 Autopilots를 안전하게 실행
- **감사 로깅**: 모든 Autopilot 실행 추적

## Playbooks 및 Actions와의 통합

Autopilots는 Playbooks(전략)와 Actions(검증) 사이를 오케스트레이션합니다:

```yaml
name: Implement Feature
playbooks:
  - vue3-typescript # 따를 표준
  - team-standards # 사용할 패턴

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
      - test:unit # 테스트 통과 확인
      - lint:check # 코드 품질 확인
      - coverage:verify # 테스트 커버리지 확인
```

## 모니터링 및 분석

### 실행 추적

Autopilot 성능 모니터링:

- **실행 시간**: 지속 시간 및 병목 현상 추적
- **성공률**: 신뢰성 모니터링
- **사용 패턴**: 팀 워크플로우 이해

### 최적화 제안

AI 기반 인사이트:

- **워크플로우 개선**: 더 나은 Autopilot 시퀀스 제안
- **성능 팁**: 최적화 기회 식별
- **패턴 감지**: 자동화 기회 발견

## 미래 기능

### 시각적 Autopilot 빌더

코드 없이 복잡한 워크플로우를 만들기 위한 드래그 앤 드롭 인터페이스.

### AI Autopilot 생성

개발자 패턴을 관찰하여 자동으로 Autopilots 생성.

### 분산 실행

대규모 병렬 처리를 위해 여러 머신에서 Autopilots 실행.

### 시간 여행 디버깅

복잡한 워크플로우를 디버그하기 위해 Autopilot 실행 히스토리를 단계별로 진행.

## 전술적 자동화의 힘

Autopilot 시스템은 반복적인 개발 작업을 시간이 지남에 따라 학습하고 개선되는 지능형 자동화 워크플로우로 변환합니다. 이것은 전략적 Playbooks와 검증 Actions 사이의 격차를 메우는 전술 계층으로, 표준을 존중하면서 개발을 가속화하는 완전한 자동화 생태계를 만듭니다.

기억하세요: **Playbooks는 무엇을, Autopilots는 어떻게를, Actions는 여부를 확인합니다.**

<PageCTA
  title="첫 번째 Autopilot 배포"
  subtitle="지능형, 자체 개선 AI 에이전트로 복잡한 워크플로우 자동화"
  buttonText="Autopilot System 시작"
  buttonLink="/ko/autopilots"
  buttonStyle="secondary"
  footer="반복에서 자동화로. 수동에서 마법으로."
/>
