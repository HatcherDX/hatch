---
title: "Playbooks 시스템 | 팀을 위한 동적 AI 컨텍스트 관리"
description: "Hatcher의 Playbooks 시스템을 마스터하세요 - AI 컨텍스트 관리를 위한 차세대 솔루션입니다. 팀의 코딩 표준과 아키텍처 결정을 AI에게 가르치는 동적이고 거버넌스 가능한 기업 헌법을 만드세요."
---

# Playbooks 시스템

> **참고:** 이 페이지는 [Constitutional Engineering 철학](/ko/constitutional-engineering)의 기술적 구현을 설명합니다. 아직 철학적 기반에 대해 읽지 않으셨다면, playbooks의 "왜"를 이해하기 위해 먼저 그곳부터 시작하시는 것을 권장합니다.

Playbooks 시스템은 AI 개발에서 컨텍스트 문제에 대한 Hatcher의 2세대 솔루션입니다. `Claude.md`와 같은 정적 파일이 시작점을 제공하는 반면, Playbooks는 AI 에이전트를 위한 진정한 기업 헌법으로 작동하는 동적이고 중앙화되며 거버넌스 가능한 시스템을 제공합니다.

## Playbooks란 무엇인가?

Playbooks는 팀의 다음 항목들을 캡처하는 구조화된 구성 파일입니다:

- **코딩 표준**: 포맷팅, 명명 규칙, 스타일 선호도
- **아키텍처 결정**: 컴포넌트 패턴, 상태 관리 접근법
- **프레임워크 세부사항**: 라이브러리별 모범 사례 및 패턴
- **비즈니스 규칙**: 도메인별 로직 및 제약조건

## Playbook 구조

기본 Playbook은 다음 구조를 따릅니다:

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

## 내장 Playbooks

Hatcher는 인기 있는 프레임워크를 위한 큐레이션된 Playbooks와 함께 제공됩니다:

### Vue.js Playbooks

- **Vue 3 + TypeScript**: 최신 composition 패턴
- **Nuxt.js**: SSR 및 파일 기반 라우팅 규칙
- **Pinia**: 상태 관리 모범 사례

### React Playbooks

- **React + TypeScript**: 함수형 컴포넌트 및 hooks
- **Next.js**: App Router 및 서버 컴포넌트
- **Zustand**: 경량 상태 관리

### 범용 Playbooks

- **TypeScript Standards**: 타입 정의 및 제네릭
- **CSS-in-JS**: Styled-components 및 emotion 패턴
- **Testing**: Jest 및 Cypress 규칙

## 커스텀 Playbooks 만들기

### 팀별 규칙

팀의 고유한 규칙을 캡처하는 Playbooks를 만드세요:

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

### 프로젝트별 컨텍스트

프로젝트별 지식을 추가하세요:

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

## Playbook 상속

Playbooks는 확장 가능한 구성을 위한 상속을 지원합니다:

```
Universal TypeScript
    ↓
Vue 3 + TypeScript
    ↓
Acme Corp Standards
    ↓
Project-Specific Rules
```

## AI 통합

Hatcher는 관련 Playbook 컨텍스트를 AI 프롬프트에 자동으로 주입합니다:

### 컨텍스트 선택

- **자동**: 파일 유형 및 프로젝트 구조 기반
- **수동**: 사용할 Playbooks를 명시적으로 지정
- **스마트**: 시간이 지남에 따라 사용자의 선호도 학습

### 프롬프트 향상

AI 엔진은 다음과 같은 구조화된 컨텍스트를 받습니다:

```
CONTEXT: Vue 3 Component Creation
PLAYBOOK: vue3-typescript, acme-corp-standards
RULES:
- Use Composition API with <script setup>
- Props must use TypeScript interfaces
- Components must be PascalCase
- API calls go through service layer
```

## 마켓플레이스 및 공유

### 커뮤니티 Playbooks

커뮤니티에서 만든 Playbooks를 탐색하고 설치하세요:

- **프레임워크별**: 인기 있는 라이브러리를 위한 최적화된 패턴
- **산업별**: 다양한 분야를 위한 도메인 지식
- **팀 테스트 완료**: 성공적인 프로젝트의 실제 규칙

### Playbooks 게시

팀의 전문 지식을 공유하세요:

```bash
hatcher playbook publish acme-corp-standards
```

### 버전 관리

- **시맨틱 버저닝**: 변경 사항 및 호환성 추적
- **업데이트 알림**: 커뮤니티 개선 사항을 최신 상태로 유지
- **롤백 지원**: 문제가 있는 업데이트를 안전하게 되돌리기

## 구성

### 전역 Playbooks

모든 프로젝트의 기본 Playbooks를 설정하세요:

```json
{
  "globalPlaybooks": ["typescript-standards", "git-conventions"]
}
```

### 프로젝트 재정의

`hatcher.config.json`에서 프로젝트별 Playbooks를 지정하세요:

```json
{
  "playbooks": ["vue3-typescript", "team-standards", "./custom-playbook.json"]
}
```

### 조건부 로딩

컨텍스트에 따라 다른 Playbooks를 로드하세요:

```json
{
  "conditional": {
    "**/*.test.ts": ["testing-standards"],
    "src/components/**": ["component-standards"],
    "src/api/**": ["api-standards"]
  }
}
```

## 모범 사례

### 간단하게 시작하기

프레임워크 기본부터 시작하여 점진적으로 팀별 규칙을 추가하세요:

1. **프레임워크 Playbook 설치**: 즉시 80% 커버리지 확보
2. **팀 규칙 추가**: 고유한 규칙 캡처
3. **시간이 지남에 따라 개선**: 실제 사용을 기반으로 업데이트

### 최신 상태 유지

- **정기적 검토**: 패턴이 진화함에 따라 Playbooks 업데이트
- **팀 피드백**: Playbook 유지 관리에 전체 팀 참여
- **버전 관리**: 코드와 함께 Playbook 변경 사항 추적

### 영향 측정

- **일관성 지표**: 정의된 패턴에 대한 준수 추적
- **속도 개선**: 개발 속도 향상 측정
- **품질 지표**: 코드 리뷰 피드백 감소 모니터링

## 향후 기능

### AI 생성 Playbooks

기존 코드베이스를 분석하여 Playbooks를 자동으로 생성합니다.

### 실시간 검증

코드를 작성하는 동안 실시간 피드백으로 Playbook 준수를 보장합니다.

### 팀 협업

Playbook 업데이트를 위한 협업 편집 및 승인 워크플로.

Playbooks 시스템은 AI를 일반적인 코드 생성기에서 정확한 요구 사항과 규칙을 이해하는 팀의 전문 멤버로 변환합니다.

<PageCTA
  title="첫 번째 Playbook 만들기"
  subtitle="AI를 정확한 표준을 따르는 전문 팀 멤버로 변환하세요"
  buttonText="Playbooks 구축 시작하기"
  buttonLink="/ko/getting-started"
  buttonStyle="secondary"
  footer="당신의 패턴. 당신의 표준. 일관되게 적용됩니다."
/>
