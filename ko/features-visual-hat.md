---
title: "Visual HAT - 스크린샷에서 시스템으로"
description: "모든 시각적 입력을 기능 코드로 변환합니다. 목업에서 스크린샷, 화이트보드 그림까지 — 볼 수 있다면 Visual HAT가 구축할 수 있습니다."
---

# <DocIcon type="visual" inline /> Visual HAT

> **기둥 연결:** Visual HAT는 ["텍스트 추측에서 시각적 의도로"](/ko/philosophy#pillar-1-from-textual-guesswork-to-visual-intent) 철학을 구현하여, AI 통신의 모호성을 제거하는 [Visual-to-Code Bridge](/ko/visual-to-code)를 구현합니다.

## 스크린샷에서 시스템으로

Visual HAT는 비전과 구현 사이의 다리입니다. 시각적인 것 — 스크린샷, 목업, 경쟁사의 사이트, 심지어 냅킨 스케치 — 을 가리키면 기능적이고 프로덕션 준비된 코드로 변환되는 것을 지켜보세요.

### "이렇게 만들어 주세요"의 종말

더 이상 없습니다:

- 디자인과 일치하도록 픽셀 푸싱
- "2px 왼쪽으로 이동할 수 있나요?"
- 같은 레이아웃을 10번 설명
- 다른 곳에 이미 존재하는 것을 다시 구축

Visual HAT에게 원하는 것을 보여주기만 하면 됩니다. 완벽하게 구축합니다.

## 작동 방식

### 1. 캡처

무엇이든 가리키세요:

- 기존 앱의 스크린샷
- Figma/Sketch 디자인
- 경쟁사 웹사이트
- 손으로 그린 와이어프레임
- 심지어 화이트보드 사진

### 2. 분석

Visual HAT는 다음을 이해합니다:

- 레이아웃 구조 및 계층
- 컴포넌트 패턴
- 상호 작용 모델
- 디자인 시스템 규칙
- 반응형 동작

### 3. 생성

프로덕션 준비 코드 받기:

- 시맨틱 HTML/JSX
- 프레임워크로 스타일링
- 기본적으로 반응형
- 접근성 포함
- 애니메이션 추론

## 실제 마법

### 시나리오 1: 경쟁 패리티

**과제**: "대시보드를 Stripe처럼 만들되 우리 브랜드로"

**Visual HAT 솔루션**:

1. Stripe 대시보드 스크린샷
2. HAT가 레이아웃 패턴 추출
3. 디자인 시스템 적용
4. 기술 스택 코드 생성
5. 컴포넌트 라이브러리 유지

**결과**: 몇 달이 아닌 몇 시간 만에 Stripe 품질 UI.

### 시나리오 2: 디자인-투-코드 파이프라인

**과제**: 디자이너가 Figma를 업데이트하면 개발자가 구현하기 위해 분주합니다.

**Visual HAT 솔루션**:

```yaml
pipeline: figma-sync
trigger: design-updated
actions:
  - extract: components-changed
  - generate: react-components
  - test: visual-regression
  - pr: auto-create
```

**결과**: 디자인이 자동으로 코드가 됩니다. 디자이너는 정확한 비전을 봅니다. 개발자는 로직에 집중합니다.

### 시나리오 3: 레거시 UI 현대화

**과제**: 고대 jQuery UI가 현대 React가 되어야 합니다.

**Visual HAT 솔루션**:

1. 기존 UI 스크린샷
2. HAT가 UI 패턴 식별
3. 현대 컴포넌트에 매핑
4. React 동등물 생성
5. 정확한 기능 보존

**결과**: 사양 없이 픽셀 완벽 현대화.

## 고급 기능

### 상호 작용 감지

Visual HAT는 단순히 정적 레이아웃을 보는 것이 아닙니다:

- **호버 상태**: 디자인 변형에서 추론
- **애니메이션**: 모션 패턴 감지
- **마이크로 상호 작용**: 미묘한 동작 재현
- **상태 변경**: UI 흐름 이해

### 디자인 시스템 통합

```yaml
visual-config:
  design-system: 'our-company-ds'
  component-mapping:
    - detected: 'button-primary'
      use: "Button variant='primary'"
    - detected: 'card-layout'
      use: 'Card elevation={2}'
  style-overrides:
    - colors: 'use-brand-palette'
    - spacing: 'use-8px-grid'
```

### 다중 플랫폼 생성

하나의 스크린샷, 여러 출력:

- **Web**: React, Vue, Angular
- **Mobile**: React Native, Flutter
- **Desktop**: Electron, Tauri
- **Email**: MJML 템플릿
- **Print**: PDF 레이아웃

## 다른 HATs와의 통합

Visual HAT는 모든 것을 증폭시킵니다:

- **Code HAT와 함께**: 시각적 → 즉시 기능적
- **Gen HAT와 함께**: 캡처된 디자인 향상
- **Time Graph HAT와 함께**: 시각적 진화 추적

## 명령 예제

```bash
# 스크린샷을 코드로 변환
hatcher visual convert --input screenshot.png --output react

# Figma를 코드베이스와 동기화
hatcher visual sync --figma-url "..." --target "./src/components"

# 디자인 시스템 추출
hatcher visual extract-system --source "competitor.com" --output "ds.yaml"

# 반응형 변형 생성
hatcher visual responsive --input "desktop.png" --breakpoints "mobile,tablet"
```

## 시각적 워크플로우 혁명

### Visual HAT 이전

1. 디자이너가 목업 생성 (2일)
2. 개발자가 디자인 해석 (1일)
3. 세부 사항에 대한 왕복 (2일)
4. 반응형 적응 (1일)
5. 접근성 추가 (1일)
6. 최종 다듬기 (1일)

**총: 8일**

### Visual HAT와 함께

1. 디자이너가 목업 생성 (2일)
2. Visual HAT가 코드 생성 (5분)
3. 개발자가 로직 추가 (2시간)

**총: 2.5일**

## 패턴 인식 라이브러리

Visual HAT는 모든 변환에서 학습합니다:

- **일반 패턴**: 헤더, 푸터, 내비게이션
- **업계 표준**: 전자 상거래, SaaS, 콘텐츠 사이트
- **문화적 변형**: RTL 레이아웃, 아시아 타이포그래피
- **접근성 패턴**: 스크린 리더 최적화

## 시각적 해방

Visual HAT는 디자인을 건너뛰는 것이 아니라 **완벽한 구현**에 관한 것입니다:

- 더 이상 구현 드리프트 없음
- 더 이상 "목업과 거의 비슷" 없음
- 더 이상 반응형 추측 없음
- 더 이상 접근성 사후 고려 없음

디자이너가 디자인합니다. Visual HAT가 완벽하게 구현합니다.

---

코드에서 비전을 볼 준비가 되셨나요? [Visual HAT 시작하기](/ko/getting-started#visual-hat)

<PageCTA
  title="비전에서 완벽한 코드로"
  subtitle="모든 디자인을 픽셀 완벽하고 반응형 구현으로 즉시 변환"
  buttonText="Visual HAT 시도"
  buttonLink="/ko/getting-started"
  buttonStyle="secondary"
  footer="한 번 디자인. 완벽하게 구현."
/>
