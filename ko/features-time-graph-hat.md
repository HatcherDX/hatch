---
title: "Time Graph HAT - 개발 타임 머신"
description: "코드의 타임라인을 여행하세요. 모든 결정을 확인하고, 모든 변경을 이해하고, 시간 자체를 통해 디버그하세요."
---

# <DocIcon type="time-graph" inline /> Time Graph HAT

> **기둥 연결:** 이 HAT는 [Time Graph 기둥](/ko/pillars-time-graph)의 직접 구현으로, 모든 작업이 되돌릴 수 있고, 모든 결정이 감사 가능하며, 아무것도 잃어버리지 않도록 보장합니다.

## 개발 타임 머신

Time Graph HAT는 코드베이스를 스냅샷에서 **살아있는 타임라인**으로 변환합니다. 모든 결정, 모든 변경, 모든 버그는 이해하고, 디버그하고, 심지어 역사를 다시 쓰기 위해 시간을 여행할 수 있는 탐색 가능한 그래프의 노드가 됩니다.

### Git 히스토리를 넘어서

Git은 **무엇**이 변경되었는지 보여줍니다. Time Graph HAT는 **왜**, **어떻게**, **만약**을 보여줍니다:

- **결정 추적**: 기록된 모든 아키텍처 선택
- **영향 매핑**: 시간이 지남에 따라 변경이 어떻게 파급되는지 확인
- **병렬 타임라인**: 대체 구현 탐색
- **인과 디버깅**: 뒤로 여행하여 근본 원인 찾기

## 개발의 4차원

### 전통적인 버전 제어

```
main ──●──●──●──●──●── (현재)
        └──●──●── (기능 브랜치)
```

선형. 평면. 제한적.

### Time Graph 현실

```
        ┌─ Decision: Use REST ─── Implementation A ─── Bug Found ───┐
        │                                                            │
main ───┼─ Decision: Use GraphQL ─ Implementation B ─── Success ────┼─── Merged
        │                                                            │
        └─ Decision: Use gRPC ──── Implementation C ─── Abandoned ───┘
              │                         │
              └── Why: Latency ────── Benchmark ──── Results
```

다차원. 탐색 가능. **이해 가능**.

## 실제 능력

### 시나리오 1: 프로덕션 미스터리

**과제**: 앱이 프로덕션에서 무작위로 충돌합니다. 패턴 없음. 재현 없음.

**Time Graph 솔루션**:

1. 충돌 타임스탬프로 이동
2. HAT가 모든 동시 변경 사항 표시
3. 관련 없어 보이는 배포 식별
4. 종속성 그래프를 통해 영향 추적
5. 3주 전에 도입된 경쟁 조건 찾기

**결과**: "불가능한" 버그를 30분 만에 수정.

### 시나리오 2: 아키텍처 논쟁

**과제**: "왜 PostgreSQL 대신 MongoDB를 선택했나요?"

**Time Graph 솔루션**:

```yaml
query: decision-node
topic: 'database-selection'
timestamp: '3-months-ago'

result:
  decision: 'MongoDB'
  reasons:
    - 'Flexible schema for rapid iteration'
    - 'Better horizontal scaling'
    - 'Team expertise'
  alternatives-explored:
    - PostgreSQL: 'Rejected: Schema migrations concern'
    - DynamoDB: 'Rejected: Vendor lock-in'
  participants: ['alice', 'bob', 'charlie']
  supporting-data: ['benchmark-results.json', 'cost-analysis.xlsx']
```

**결과**: 모든 기술 결정에 대한 즉각적인 맥락.

### 시나리오 3: 병렬 개발

**과제**: 동시에 개발된 두 기능이 충돌합니다.

**Time Graph 솔루션**:

- HAT가 병렬 타임라인 유지
- 분기 지점 표시
- 충돌 소스 식별
- 병합 전략 제안
- 병합 결과 시뮬레이션

**결과**: 어느 기능도 깨뜨리지 않고 자신 있게 병합.

## 고급 기능

### 인과 분석

단순히 "무엇이 깨졌는가"가 아니라 "무엇이 깨진 것을 야기했는가":

```yaml
analysis: login-failure
symptoms:
  - "Users can't login"
  - 'Started 2024-01-15 14:30'

time-graph-trace:
  - 14:30: 'Login failures spike'
  - 14:25: 'API response times increase'
  - 14:20: 'Database query patterns change'
  - 14:15: 'ORM library updated'
  - 13:00: 'Dependency update merged'

root-cause: 'ORM update changed query generation'
fix: 'Rollback or patch query builder'
```

### 시간적 쿼리

시간을 통해 질문:

```bash
# 성능은 언제 저하되었나요?
hatcher time-graph query "response_time > 200ms" --first-occurrence

# 이 파일을 누가 건드렸나요?
hatcher time-graph contributors "./src/auth.js" --with-context

# 작동과 중단 사이에 무엇이 변경되었나요?
hatcher time-graph diff --from "last-working" --to "first-broken"

# 인증에 대한 모든 결정 표시
hatcher time-graph decisions --topic "auth" --timeline
```

### 나비 효과 추적

작은 변경이 어떻게 캐스케이드되는지 확인:

```yaml
change: 'Update button color'
immediate-impact:
  - 'button.css modified'
cascade:
  - 'Component snapshot tests fail'
  - 'Visual regression detected'
  - 'Accessibility contrast warning'
  - 'Design system version bump'
  - 'All apps using design system need updates'
  - 'Marketing screenshots outdated'
```

## 다른 HATs와의 통합

Time Graph HAT는 모든 것을 향상시킵니다:

- **Code HAT와 함께**: 코드가 더 간단했을 때로 여행
- **Gen HAT와 함께**: 생성 진화 확인
- **Visual HAT와 함께**: 시간을 통한 시각적 회귀

## 시간 여행 작업

### 체크포인트 생성

```bash
# 시간적 체크포인트 생성
hatcher time-graph checkpoint "Before major refactor"

# 결정 노드 생성
hatcher time-graph decision "Switching to microservices" \
  --reasons "Scale,Team autonomy" \
  --alternatives "Monolith,Serverless"
```

### 타임라인 탐색

```bash
# 특정 시점으로 이동
hatcher time-graph goto "2024-01-15 14:00"

# 마지막 작동 상태로 이동
hatcher time-graph goto "last-green-ci"

# 타임라인 비교
hatcher time-graph compare "timeline-a" "timeline-b"
```

### 시간적 디버깅

```bash
# 이등분하여 중단 변경 찾기
hatcher time-graph bisect --good "v1.0" --bad "HEAD" --test "npm test"

# 특정 시점의 실행 재생
hatcher time-graph replay "crash-timestamp" --with-state
```

## 지식 보존

Time Graph HAT는 제도적 지식을 보존합니다:

### 맥락을 잃지 마세요

- X가 왜 더 이상 사용되지 않나요?
- 누가 Y를 결정했나요?
- 어떤 대안이 고려되었나요?
- Z가 어떤 문제를 해결했나요?

### 온보딩 가속화

새로운 개발자는 다음을 수행할 수 있습니다:

- 결정 히스토리 탐색
- 진화 이해
- 과거 실수로부터 학습
- 전체 맥락 확인

## 시간적 해방

Time Graph HAT는 과거에 머무는 것이 아니라 **배우는** 것입니다:

- 더 이상 고고학적 디버깅 없음
- 더 이상 "아무도 모르는 이유" 없음
- 더 이상 실수 반복 없음
- 더 이상 맥락 손실 없음

코드에는 히스토리가 있습니다. Time Graph HAT는 그것을 **탐색 가능**하게 만듭니다.

---

코드의 타임라인을 탐색할 준비가 되셨나요? [Time Graph HAT 시작하기](/ko/getting-started#time-graph-hat)

<PageCTA
  title="코드의 진화 탐색"
  subtitle="코드가 어떻게 그리고 왜 진화했는지 이해하기 위해 시간을 여행하세요"
  buttonText="Time Graph 탐색"
  buttonLink="/ko/getting-started"
  buttonStyle="secondary"
  footer="모든 변경에는 이야기가 있습니다. 모든 결정에는 맥락이 있습니다."
/>
