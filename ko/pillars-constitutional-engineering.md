# Constitutional Engineering

> **AI는 헌법 하에 작동해야 합니다. 기간.**

## 원칙

전통적인 소프트웨어 개발에서 우리는 품질과 일관성을 유지하기 위해 규칙, 스타일 가이드, 코드 리뷰에 의존합니다. 그러나 AI가 방정식에 들어오면, 이러한 비공식적 가드레일은 위험할 정도로 부적절해집니다. AI는 뉘앙스를 이해하지 못합니다 - 명시적이고 시행 가능한 규칙이 필요합니다.

Constitutional Engineering은 개발 환경에서 모든 AI 상호작용을 관리하는 불변의 규칙 세트를 정의하는 관행입니다. 이것들은 제안이나 가이드라인이 아닙니다 - 위반될 수 없는 아키텍처 제약입니다.

## 작동 방식

모든 AI 제안은 여러 검증 레이어를 통과합니다:

```
AI Suggestion → Constitutional Validation → Context Check → Action Verification → Human Review
```

레이어가 실패하면, 제안은 준수하도록 수정되거나 완전히 거부됩니다.

## Hatcher에서의 구현

### Playbooks: 프로젝트의 법률

Playbooks는 다음을 정의하는 실행 가능한 사양입니다:

- 따라야 할 코드 패턴
- 위반될 수 없는 아키텍처 결정
- 넘을 수 없는 보안 경계
- 유지되어야 할 성능 임계값

```yaml
# Example Playbook
name: API Security Constitution
rules:
  - no_public_endpoints_without_auth
  - all_inputs_must_be_validated
  - rate_limiting_required
  - audit_log_all_mutations
```

이렇게 생각해보세요: **Playbooks는 법이고, Hatcher Actions는 경찰입니다**. Playbooks (.yaml)는 규칙이 무엇인지 사람이 읽을 수 있는 방식으로 선언합니다. Actions (.ts)는 실시간으로 그 규칙을 시행하는 실행 가능한 로직을 제공합니다.

### Hatcher Actions: 실시간 시행

Actions는 시행 메커니즘입니다 - AI 제안을 가로채서 코드베이스에 도달하기 전에 헌법에 대해 검증합니다.

```typescript
// Example Action
export const validateAPIEndpoint: HatcherAction = {
  trigger: 'api.endpoint.created',
  validate: (code) => {
    // 인증 확인
    if (!hasAuthDecorator(code)) {
      return reject('All endpoints must have authentication')
    }
    // 입력 검증 확인
    if (!hasInputValidation(code)) {
      return reject('All inputs must be validated')
    }
    return approve(code)
  },
}
```

## Constitutional Engineering의 힘

### 1. 예측 가능한 AI 행동

AI는 명시적 규칙에 의해 제약되기 때문에 예측 가능해집니다. 무엇을 할 수 있고 할 수 없는지 알 수 있습니다.

### 2. 대규모 팀 정렬

모든 개발자, 인간이든 AI든, 동일한 헌법을 따릅니다. 더 이상 "스타일 전쟁"이나 일관되지 않은 패턴이 없습니다.

### 3. 설계에 의한 규정 준수

규제 요구사항이 헌법 규칙이 됩니다. GDPR, HIPAA, SOC2 - 자동으로 인코딩되고 시행됩니다.

### 4. 혼돈 없는 진화

프로젝트가 진화함에 따라 헌법을 업데이트합니다. 모든 미래 AI 상호작용이 즉시 새 규칙에 적응합니다.

### 5. 패러다임 전반의 통합 거버넌스

헌법은 새로 생성된 UI 코드에만 적용되는 것이 아닙니다. [Universal Fabricator](/ko/pillars-universal-fabricator)에서 실행되는 레거시 비즈니스 로직과 AI가 상호작용하는 방식을 포함하여 전체 시스템이 작동하는 방식을 관리합니다. 이것은 새것과 옛것 모두에 대한 단일 통합 제어 평면을 제공합니다.

## 실제 예: 보안 헌법

보안이 가장 중요한 핀테크 애플리케이션을 고려하세요:

```yaml
constitution:
  data_handling:
    - encrypt_all_pii_at_rest
    - no_pii_in_logs
    - tokenize_payment_data

  authentication:
    - multi_factor_required
    - session_timeout_15_minutes
    - jwt_rotation_hourly

  api_design:
    - versioned_endpoints_only
    - deprecation_notice_90_days
    - backward_compatibility_required
```

이 헌법이 있으면, AI는 다음을 할 수 없습니다:

- 민감한 데이터를 로깅하는 코드 생성
- 적절한 인증 없이 엔드포인트 생성
- 하위 호환성을 깨는 변경 제안

## 규칙을 넘어서: 문화 인코딩

Constitutional Engineering은 기술적 제약에 관한 것만이 아닙니다 - 엔지니어링 문화를 개발 프로세스에 인코딩하는 것입니다. 당신의 가치, 우선순위, 타협할 수 없는 것들이 시스템 자체의 일부가 됩니다.

이것이 문화를 확장하는 방법입니다. 10명의 개발자든 1000명이든, 인간이든 AI든, 모두가 소프트웨어를 당신이 결정한 방식으로 구축하도록 보장하는 방법입니다.

## 시작하기

1. **핵심 원칙 정의**: 타협할 수 없는 것은 무엇입니까?
2. **첫 번째 Playbook 만들기**: 하나의 중요한 영역 (보안, 성능 등)으로 시작
3. **시행 Actions 작성**: 규칙을 코드로 전환
4. **반복 및 확장**: 배우면서 헌법을 성장

헌법은 돌에 새겨진 것이 아닙니다 - 이해와 함께 진화합니다. 그러나 주어진 순간에는 법이며, 명시적 승인 없이는 아무것도 통과할 수 없습니다.

---

_Constitutional Engineering은 AI를 예측 불가능한 오라클에서 규칙을 존중하고, 패턴을 따르고, 표준을 유지하는 규율 있는 팀 멤버로 변환합니다. 매번._

<PageCTA
  title="개발 헌법 정의하기"
  subtitle="모든 AI와 개발자가 따라야 할 깨지지 않는 규칙 만들기"
  buttonText="Playbooks 구축하기"
  buttonLink="/ko/playbooks-system"
  buttonStyle="secondary"
  footer="당신의 표준. 당신의 규칙. 자동으로 시행됩니다."
/>
