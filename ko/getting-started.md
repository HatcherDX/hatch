---
title: "Getting Started | Hatcher 오픈소스 IDE에 기여하기"
description: "Hatcher 커뮤니티에 참여하세요. 개발 로드맵을 알아보고, 현재 프로젝트 상태를 확인하고, AI 시대를 위한 오픈소스 IDE에 기여하는 방법을 알아보세요."
---

# Hatcher 시작하기

환영합니다, 개척자여.

당신은 소프트웨어 개발의 새로운 시대의 기초 단계에 도착했습니다. Hatcher는 장인 커뮤니티에 의해 공개적으로 제작되고 있으며, 이것은 망치를 잡을 수 있는 초대장입니다.

이 가이드는 Day Zero에 우리와 함께하고 Constitutional IDE의 미래를 형성하고자 하는 개발자를 위한 것입니다.

## 프로젝트 상태 및 로드맵

우리의 비전은 두 가지 별개의 구성을 가진 단일 플랫폼입니다. 오늘 우리가 어디에 있는지 보여드리겠습니다:

### <DocIcon type="constitutional" inline /> Hatcher Generative (활발한 개발 중)

이것은 현재 핵심 팀의 초점입니다. Generative 노드는 개발자가 고수준 지침으로 AI를 안내하는 빠르고 창의적인 개발을 위한 명령 조종석입니다. 이것은 새로운 기여자가 가장 즉각적인 영향을 미칠 수 있는 코드베이스 부분입니다.

### <DocIcon type="building" inline /> Hatcher EGGs (로드맵에 있음)

EGGs(Enforced Governance Guardrails) 노드는 미션 크리티컬 시스템을 위한 궁극적인 목표입니다. 모든 작업이 100% 결정론적이고 감사 가능한 "항공우주 클린룸"을 나타냅니다. **이 기능은 아직 구현되지 않았으며** 미래를 위한 흥미로운 아키텍처 과제를 나타냅니다. 우리는 커뮤니티 토론과 구현에 대한 아이디어를 환영합니다.

## 왜 Hatcher에 기여하나요?

이 초기 알파 단계에 참여함으로써 다음과 같은 독특한 기회를 갖게 됩니다:

- **기초 도구 형성:** 수천 명의 개발자가 사용할 도구의 핵심 아키텍처와 방향에 영향을 미칩니다.

- **세계적 수준의 스택으로 작업:** Rust, TypeScript, WebAssembly 및 최첨단 AI 원칙로 구축된 코드베이스를 깊이 탐구합니다.

- **평판 구축:** 장인 정신과 전문성을 중시하는 커뮤니티인 Hatcher Guild의 인정받는 창립 기여자가 됩니다.

- **흥미로운 문제 해결:** 맞춤형 Git 엔진 구축부터 시각적 UI-to-code 브리지 설계까지, 우리가 다루는 과제는 전혀 사소하지 않습니다.

## 기여 방법

기여자가 될 준비가 되셨나요? 지금 Hatcher를 실행하는 유일한 방법은 소스에서 빌드하는 것입니다.

### 사전 요구 사항

개발 환경에 다음이 있는지 확인하세요:

- **Node.js** 22.0.0 이상
- **pnpm** 10.6.0 이상
- **Git**

### 소스에서 빌드

```bash
# 저장소 복제
git clone https://github.com/HatcherDX/dx-engine.git
cd dx-engine

# 종속성 설치
pnpm install

# 개발 모드 시작
pnpm dev
```

이렇게 하면 로컬 머신에서 최신 개발 빌드를 실행하는 Hatcher IDE가 실행됩니다.

### 비전 이해하기

효과적으로 기여하려면 핵심 철학을 이해하는 것이 필수적입니다. 읽어야 할 것은 단 한 페이지입니다:

- [Hatcher 철학: 통제된 증폭](/ko/philosophy)

### 첫 번째 기여 찾기

시작하는 가장 좋은 방법은 기존 이슈를 해결하는 것입니다.

- **이슈 탐색:** [GitHub Issues](https://github.com/HatcherDX/dx-engine/issues)로 이동하세요. good first issue 또는 help wanted 태그가 있는 이슈를 찾아보세요.

- **대화에 참여:** 코딩을 시작하기 전에 이슈에 댓글을 남기고 [Discord Community](https://discord.gg/cZ7PZvnMk4)에 참여하세요. 핵심 팀과 접근 방식을 논의하는 것이 기여가 프로젝트 방향과 일치하는지 확인하는 가장 좋은 방법입니다.

- **가이드라인 읽기:** 저장소의 [CONTRIBUTING.md](https://github.com/HatcherDX/dx-engine/blob/main/CONTRIBUTING.md) 파일에서 코딩 표준 및 풀 리퀘스트 프로세스에 대한 세부 정보를 확인하세요.

## 커뮤니티 참여

협업은 공개적으로 이루어집니다. 질문, 아이디어가 있거나 그냥 따라가고 싶다면 여기에서 찾을 수 있습니다:

- [Discord](https://discord.gg/cZ7PZvnMk4): 팀 및 다른 기여자와의 실시간 채팅을 위한 메인 허브.

- [GitHub](https://github.com/HatcherDX/dx-engine/): 모든 코드, 이슈 및 풀 리퀘스트용.

- [@HatcherDX](https://twitter.com/HatcherDX)를 팔로우하여 주요 뉴스 및 프로젝트 업데이트를 받으세요.

개발의 미래에 오신 것을 환영합니다!

<PageCTA
  title="혁명에 참여할 준비가 되셨나요?"
  subtitle="오늘 AI 지원 개발의 미래에 기여하기 시작하세요"
  buttonText="오픈 이슈 탐색"
  buttonLink="https://github.com/HatcherDX/dx-engine/issues"
  buttonStyle="secondary"
  footer="지원 및 협업을 위해 Discord 커뮤니티에 참여하세요"
/>
