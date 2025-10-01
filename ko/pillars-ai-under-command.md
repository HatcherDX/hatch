# AI Under Command

> **인간이 사령관입니다. AI는 힘의 증폭기입니다. 결코 반대가 아닙니다.**

## 원칙

AI는 강력하지만 현명하지 않습니다. 초인적 속도로 코드를 생성할 수 있지만 전문 소프트웨어 개발을 정의하는 컨텍스트, 판단, 책임이 부족합니다. 해결책은 AI의 능력을 제한하는 것이 아니라 적절한 지휘 구조 하에 두는 것입니다.

AI Under Command는 인간 개발자가 코더에서 사령관으로 전환하여 AI 힘을 정밀하게 지휘하면서 코드베이스에 들어가는 것에 대한 절대적 권한을 유지하는 것을 의미합니다.

## 지휘 구조

### 지휘 체계

```
Human Commander (당신)
    ↓ 명령 발행
AI Forces (여러 AI 모델)
    ↓ 옵션 생성
Constitutional Validation
    ↓ 필터링 및 검증
Human Final Approval
    ↓ 실행
Codebase
```

이 체계의 모든 링크는 AI가 자율적으로 행동하는 것을 방지하면서 인간의 의도를 증폭하도록 설계되었습니다.

## Visual-to-Code Bridge

AI Under Command의 플래그십 구현은 Visual-to-Code Bridge입니다. 두 가지 수준의 명령으로 작동합니다:

- **직접 명령 (마이크로):** 수술적 변경을 위해 라이브 UI의 기존 요소를 가리켜 AI의 컨텍스트를 고정할 수 있어 텍스트 기반 명령이 완벽한 정밀도로 실행되도록 합니다.

- **전략적 구현 (매크로):** 더 큰 작업의 경우, bridge는 완전한 디자인 파일, 스케치 또는 목업을 분석할 수 있습니다. AI 플릿은 성능 및 접근성 분석을 포함한 여러 고수준 구현 전략을 제안하여 정적 비전을 인터랙티브하고 프로덕션 준비된 코드로 전환합니다.

### 제어 패널

```typescript
interface CommanderView {
  // AI가 분석하는 것
  context: {
    design: VisualInput
    existingCode: CodeContext
    constraints: ProjectConstitution
  }

  // AI가 생성한 것
  options: AIImplementation[]

  // 당신이 제어하는 것
  controls: {
    approve: () => void
    reject: (reason: string) => void
    modify: (changes: Directive[]) => void
    regenerate: (newConstraints: Constraint[]) => void
  }

  // 당신이 보는 것
  analysis: {
    performance: MetricsComparison
    accessibility: A11yReport
    security: SecurityAudit
    compatibility: BrowserMatrix
  }
}
```

## 다중 모델 플릿

### 다양한 미션을 위한 다양한 AI

사령관이 다양한 목표를 위해 다양한 부대를 배치하는 것처럼, Hatcher는 여러 AI 모델을 오케스트레이션합니다:

```yaml
fleet_composition:
  scouts:
    - model: fast-inference-model
    - mission: rapid-prototyping
    - strength: speed

  engineers:
    - model: code-specialized-model
    - mission: implementation
    - strength: syntax-accuracy

  architects:
    - model: reasoning-model
    - mission: system-design
    - strength: architectural-patterns

  reviewers:
    - model: security-focused-model
    - mission: vulnerability-detection
    - strength: threat-analysis
```

### 조율된 작전

모델들은 당신의 명령 하에 함께 작동합니다:

```bash
# 당신이 고수준 목표를 발행
hatcher generate --objective="Add payment processing"

# 플릿이 조율:
# 1. Architect가 시스템 설계
# 2. Security가 설계 검토
# 3. Engineers가 컴포넌트 구현
# 4. Reviewers가 구현 검증

# 당신은 반대 의견과 함께 통합 권장사항을 봄
> Architect: Recommends microservice pattern
> Security: Warns about PCI compliance requirements
> Engineer: Suggests 3 implementation options
> Reviewer: Identifies 2 potential race conditions

# 당신이 전략적 결정을 내림
hatcher approve --option=2 --add-constraint="pci-compliant"
```

## 명령 인터페이스

### 자연어 명령

코더가 아닌 사령관처럼 말하세요:

```bash
# 전통적 코딩
[200줄의 인증 코드 작성]

# AI Under Command
hatcher: "Implement OAuth2 with refresh tokens, following our security constitution"

# AI가 생성하고, 당신이 검증
> Generated 347 lines across 5 files
> Constitution checks: ✓ Passed
> Security audit: ✓ No vulnerabilities
> Test coverage: 94%
>
> Review changes? [Y/n]
```

### 비주얼 Command Center

모든 것을 한 번에 보세요:

```
┌─────────────────────────────────────────────────┐
│              COMMAND CENTER                     │
├──────────────┬──────────────┬──────────────────┤
│ AI Activity  │ Constitution │ Impact Analysis  │
│              │   Status     │                  │
│ 3 models     │ ✓ Compliant  │ +145 lines      │
│ 5 suggestions│ 0 violations │ 3 files changed  │
│ 2 warnings   │ 2 overrides  │ 98% test coverage│
├──────────────┴──────────────┴──────────────────┤
│           CURRENT OPERATION                     │
│                                                 │
│ Objective: Add real-time notifications          │
│ Strategy: WebSocket implementation              │
│ Progress: ████████░░ 80%                       │
│                                                 │
│ [Approve] [Modify] [Abort] [Details]           │
└─────────────────────────────────────────────────┘
```

## Human Firewall

### 모든 AI 출력이 격리됨

AI 생성 코드는 human firewall을 통과하지 않고는 코드베이스에 닿지 않습니다:

```typescript
class HumanFirewall {
  async review(aiOutput: AIGeneration): Promise<Decision> {
    // 자동 검사
    const constitutionCheck = await this.validateConstitution(aiOutput)
    const securityScan = await this.scanSecurity(aiOutput)
    const testResults = await this.runTests(aiOutput)

    // 인간에게 제시
    const decision = await this.presentToCommander({
      code: aiOutput,
      checks: { constitutionCheck, securityScan, testResults },
      risks: this.analyzeRisks(aiOutput),
      alternatives: this.generateAlternatives(aiOutput),
    })

    // 결정 실행
    return this.execute(decision)
  }
}
```

### 재정의 권한

당신은 항상 재정의 권한을 가집니다:

```bash
# AI가 헌법에 기반하여 거부
> Cannot generate: Violates security rule #3

# 당신이 정당화와 함께 재정의
hatcher override --rule="security#3" --reason="Temporary for debugging" --expires="2h"

# 로그되고 시간 제한됨
> Override granted until 15:30
> Audit log updated
> Notification sent to security team
```

## 품질 게이트

### 자동화된 품질 파이프라인

AI 제안은 당신에게 도달하기 전에 품질 게이트를 통과해야 합니다:

```
AI Output
    ↓
Syntax Validation ──✗── Rejected
    ↓
Constitution Check ──✗── Rejected
    ↓
Test Execution ──✗── Rejected
    ↓
Performance Analysis ──✗── Warning
    ↓
Security Scan ──✗── Warning
    ↓
Human Review ← You are here
```

### 점진적 위임

AI가 신뢰할 수 있음을 증명함에 따라, 더 많이 위임할 수 있습니다:

```typescript
// Level 1: 모든 것 검토
delegation = {
  autoApprove: [],
  autoReject: ['security-violations'],
  requireReview: ['*'],
}

// Level 2: 간단한 변경 자동 승인
delegation = {
  autoApprove: ['formatting', 'documentation'],
  autoReject: ['security-violations', 'breaking-changes'],
  requireReview: ['logic-changes', 'new-features'],
}

// Level 3: 경계 내에서 자동 승인
delegation = {
  autoApprove: ['changes-with-100%-test-coverage'],
  autoReject: ['constitutional-violations'],
  requireReview: ['architectural-changes'],
}
```

## 실제 시나리오

### 시나리오: 기능 요청

```bash
# 제품 관리자가 기능 요청
"We need user avatars with crop and resize"

# 당신이 AI 플릿에 명령
hatcher: "Implement avatar system with crop/resize. Use our media constitution."

# AI 플릿이 응답
> Architect: Designed client-side processing with fallback
> Engineer: Implemented with HTML5 Canvas API
> Security: Added file type validation and size limits
> Tests: 96% coverage, all passing

# 당신이 검토하고 결정
[View Diff] [Run Locally] [Check Performance]

# 수정과 함께 승인
hatcher approve --add-test="edge-case-heic-format"
```

### 시나리오: 버그 사냥

```bash
# 사용자가 보고: "App crashes on mobile"

# 플릿 배치
hatcher investigate --issue="mobile-crash" --severity="high"

# 조율된 조사
> Scout: Found memory leak in image processing
> Engineer: Identified recursive function without base case
> Architect: Suggests refactor to iterative approach
> Security: No security implications

# 당신의 결정
hatcher fix --approach="iterative" --add-monitoring="memory-usage"
```

## 지휘의 철학

AI Under Command는 AI를 제한하는 것이 아니라 인간의 판단을 증폭하는 것입니다. 코드를 작성하는 것에서 결정을 내리는 것으로, 세부 사항을 구현하는 것에서 전략을 정의하는 것으로 전환합니다.

이것이 개발의 미래입니다: 인간은 "무엇"과 "왜"를 정의하고, AI는 "어떻게"를 처리하지만, 인간은 항상 결과를 검증합니다. 당신은 힘의 증폭기가 되어 전문 소프트웨어 개발을 정의하는 책임과 권한을 유지하면서 AI 군대를 지휘합니다.

## 시작하기

1. **지휘 스타일 정의**: 얼마나 많은 통제를 원하십니까?
2. **플릿 구성**: 어떤 작업에 어떤 AI 모델?
3. **위임 수준 설정**: AI가 묻지 않고 무엇을 할 수 있습니까?
4. **지휘 연습**: 낮은 위험 작업으로 시작

기억하세요: 당신은 교체되는 것이 아니라 승진하는 것입니다. 코더에서 사령관으로. 구현자에서 전략가로. 개인 기여자에서 힘의 증폭기로.

---

_AI Under Command는 당신을 단일 개발자에서 AI 힘의 사령관으로 변환합니다. 이전에는 인간 혼자서는 불가능했던 속도를 달성하면서 권한, 책임, 통제를 유지합니다._

<PageCTA
  title="AI를 지휘하세요"
  subtitle="통제 하에 AI 힘으로 코더에서 사령관으로 변환하세요"
  buttonText="Command 전략 배우기"
  buttonLink="/ko/getting-started"
  buttonStyle="secondary"
/>
