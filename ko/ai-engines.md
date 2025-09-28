---
title: AI 엔진 | Hatcher와 Claude Code, Gemini CLI 등 통합
description: 여러 AI 코딩 어시스턴트를 Hatcher IDE와 구성하고 통합하세요. Claude Code, Gemini CLI 및 기타 AI 엔진을 지원하여 유연하고 강력한 개발 워크플로를 제공합니다.
---

# AI 엔진

Hatcher는 여러 AI 코딩 도우미와 통합하여 유연성을 제공하고 다양한 모델의 고유한 장점을 활용합니다.

## 지원되는 엔진

### Claude Code

Anthropic의 Claude는 우리의 주요 AI 엔진으로 다음을 위해 최적화되었습니다:

- **코드 이해**: 기존 코드베이스의 뛰어난 이해
- **패턴 인식**: 프로젝트 규약과의 일관성 유지
- **안전한 리팩토링**: 코드 수정에 대한 보수적 접근
- **컨텍스트 인식**: 대규모 코드베이스를 효과적으로 처리

**구성:**

```json
{
  "engine": "claude",
  "model": "claude-3-sonnet",
  "maxTokens": 4096,
  "temperature": 0.1
}
```

### Gemini CLI

Google의 Gemini는 보완적인 기능을 제공합니다:

- **창의적 솔루션**: 복잡한 문제에 대한 대안적 접근
- **성능 최적화**: 효율적인 코드 생성에 집중
- **다중 언어 지원**: 다양한 기술 스택에 대한 강력한 지원
- **빠른 반복**: 빠른 편집을 위한 신속한 응답 시간

## 엔진 선택 전략

Hatcher는 작업에 따라 최적의 엔진을 자동 선택합니다:

- **새 컴포넌트**: 구조는 Claude, 창의성은 Gemini
- **버그 수정**: 신중한 분석을 위해 Claude
- **성능**: 최적화 제안을 위해 Gemini

## API 키 설정

### Claude API 키

1. [Anthropic Console](https://console.anthropic.com) 방문
2. 새 API 키 생성
3. Hatcher 설정 또는 환경 변수에 추가:
   ```bash
   export ANTHROPIC_API_KEY="your-key-here"
   ```

### Gemini API 키

1. [Google AI Studio](https://aistudio.google.com) 방문
2. 새 API 키 생성
3. Hatcher에서 구성:
   ```bash
   export GOOGLE_AI_API_KEY="your-key-here"
   ```

## 엔진 비교

| 기능          | Claude     | Gemini     |
| ------------- | ---------- | ---------- |
| 코드 품질     | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐   |
| 속도          | ⭐⭐⭐     | ⭐⭐⭐⭐⭐ |
| 컨텍스트 크기 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐     |
| 창의성        | ⭐⭐⭐     | ⭐⭐⭐⭐⭐ |
| 안전성        | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐   |

## 미래 엔진

현재 지원 작업 중:

- **GitHub Copilot**: VS Code 워크플로우와의 직접 통합
- **OpenAI GPT-4**: 범용 코딩 도움
- **로컬 모델**: 프라이버시를 중시하는 팀을 위한 자체 호스팅 옵션
- **커스텀 엔진**: 독점 AI 도구를 위한 플러그인 시스템

## 최적 관행

### 프롬프트 엔지니어링

Hatcher는 각 엔진에 대해 프롬프트를 자동 최적화:

- **Claude**: 상세한 컨텍스트와 명시적 지침
- **Gemini**: 명확한 목표가 있는 간결한 프롬프트

### 오류 처리

강력한 대체 시스템으로 연속성 보장:

- **메인 엔진 다운**: 대체 엔진으로 자동 전환
- **속도 제한**: 지능적 요청 대기열
- **네트워크 문제**: 일반적인 패턴의 로컬 캐싱

### 비용 최적화

- **토큰 관리**: 효율적인 컨텍스트 압축
- **요청 배치**: 여러 작은 변경사항 결합
- **캐싱**: 유사한 코드 생성 결과 재사용
