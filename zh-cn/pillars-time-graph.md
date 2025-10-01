---
title: Time Graph - 开发的第四维度
description: 每一次更改、决策和演进都在可探索的时间线中被追踪。你的代码库不仅仅是它的当前状态——而是它的整个历史变得可导航。
---

# Time Graph

## 开发的第四维度

传统版本控制给你快照。Time Graph给你**活的时间线**——每个决策、每次更改和每种可能性同时存在于可探索的多维空间中。

### 线性历史的问题

Git和其他VCS工具向你展示扁平的线性进程：

- 提交只是差异
- 上下文在提交消息中丢失
- 决策未被追踪
- 替代方案消失
- 调试意味着考古

Time Graph将其转变为**根本上更强大**的东西。

## 多维代码库

### 超越分支

传统：

```
main ──●──●──●──●──● (now)
```

Time Graph：

```
         ┌─ Attempt 1 ─── Failed ────┐
         │                           │
main ────┼─ Attempt 2 ─── Success ───┼─── Merged ─── Future
         │                           │
         └─ Attempt 3 ─── Partial ───┘
              │
              └── Each attempt contains:
                  - Full context
                  - Decision rationale
                  - Performance metrics
                  - Team discussions
                  - Alternative approaches
```

## 核心能力

### 1. 决策节点

每个架构决策都成为永久的、可查询的节点：

```yaml
node: '2024-01-15-14:30:00'
type: 'architectural-decision'
title: 'Switch from REST to GraphQL'
context:
  problem: 'N+1 queries killing mobile performance'
  constraints:
    - 'Must maintain backward compatibility'
    - 'Cannot increase backend complexity'
  options-considered:
    - REST-optimization: 'Rejected: Too complex'
    - GraphQL: 'Accepted: Solves N+1, good tooling'
    - gRPC: 'Rejected: Client compatibility issues'
participants: ['alice', 'bob', 'charlie']
outcome: 'Implemented GraphQL gateway'
metrics:
  before: 'Avg response: 2.3s'
  after: 'Avg response: 0.4s'
```

### 2. 因果链

跨时间追踪因果关系：

```
User Report: "App crashes on login"
    ↓
Time Graph traces backward...
    ↓
3 hours ago: "Login API response format changed"
    ↓
6 hours ago: "Backend validation updated"
    ↓
2 days ago: "Security patch applied"
    ← ROOT CAUSE FOUND
```

### 3. 平行时间线

探索"如果"场景而不中断：

```yaml
timeline-alpha:
  approach: 'Microservices'
  status: 'Testing in staging'
  metrics: 'Good isolation, high complexity'

timeline-beta:
  approach: 'Modular monolith'
  status: 'Testing in staging'
  metrics: 'Simple deployment, harder to scale'

decision-point: '2024-02-01'
chosen: 'timeline-beta'
reason: 'Complexity not justified for our scale'
```

### 4. 知识保存

再也不会丢失上下文：

- **为什么**我们弃用了那个API？
- **谁**决定了这个架构？
- **什么**替代方案我们考虑过？
- **何时**性能下降？
- **如何**我们以前解决过这个问题？

## 实际应用

### 跨时间调试

```bash
# 找到bug引入的时间
hatcher time-graph bisect --bad HEAD --good v1.0.0 --test "npm test"

# 查看关键时期的变化
hatcher time-graph diff --from "last-working" --to "first-broken"

# 重放崩溃时的确切状态
hatcher time-graph replay --timestamp "2024-01-15T14:30:00" --with-state
```

### 架构演进

追踪系统如何演进：

```yaml
query: 'Show database evolution'
result:
  2021: 'SQLite - MVP phase'
  2022: 'PostgreSQL - Scaling up'
  2023: 'PostgreSQL + Redis - Caching layer'
  2024: 'PostgreSQL + Redis + Elasticsearch - Search features'

Each transition includes:
  - Migration strategies
  - Rollback plans
  - Performance benchmarks
  - Lessons learned
```

### 团队知识

Time Graph捕获人类智慧：

```yaml
query: 'Who knows about payment integration?'
result:
  experts:
    - alice: 'Implemented Stripe integration'
    - bob: 'Debugged webhook issues'
  decisions:
    - 'Chose Stripe over PayPal (2023-03-15)'
    - 'Added idempotency keys (2023-06-20)'
  problems-solved:
    - 'Double charging bug (2023-07-10)'
    - 'Webhook replay issue (2023-09-05)'
```

## 与HATs集成

Time Graph驱动每个HAT：

- **Code HAT**：显示代码演进模式
- **Gen HAT**：追踪生成历史
- **Visual HAT**：视觉回归时间线
- **Time Graph HAT**：直接时间线操作

## 哲学转变

### 从状态到历史

传统开发以**状态**思考：

- 当前代码
- 当前bug
- 当前功能

Time Graph思维拥抱**历史**：

- 我们如何到达这里
- 为什么我们做出选择
- 我们学到了什么
- 我们要去哪里

### 从个人到集体

Time Graph将个人知识转化为集体智慧：

- 决策自动记录
- 上下文永久保存
- 模式从历史中浮现
- 错误成为教训

## 开发的未来

有了Time Graph，我们可以：

### 从模式中学习

```yaml
pattern-detected: 'Performance degrades after deploys'
analysis:
  - 'Cache not warming properly'
  - 'Happens every 3rd deploy on average'
  - 'Solution applied 5 times before'
recommendation: 'Implement cache warmup in CD pipeline'
```

### 预测问题

```yaml
prediction: 'Database will hit connection limit'
based-on:
  - 'Current growth rate: 10% weekly'
  - 'Historical pattern: Issues at 80% capacity'
  - 'Time to limit: ~3 weeks'
action: 'Scale connection pool now'
```

### 优化决策

```yaml
similar-decision: 'Choosing message queue'
previous-instances:
  - 2023: 'Chose RabbitMQ - worked well'
  - 2022: 'Chose Kafka - over-engineered'
  - 2021: 'Chose Redis Pub/Sub - outgrew it'
recommendation: 'RabbitMQ fits your scale'
```

## 时间革命

Time Graph不仅仅是一个功能——它是我们如何思考代码的**根本转变**：

- 代码不仅仅是它是什么，而是**它如何成为**
- Bug不是谜团，而是**可追踪的效果**
- 决策不会丢失，而是**永久可访问的**
- 知识不是孤立的，而是**集体共享的**

---

你的代码库有丰富的历史。Time Graph使其**可导航、可查询和可学习**。

<PageCTA
  title="掌握你的代码时间线"
  subtitle="将你的git历史转变为可导航的智能知识库"
  buttonText="探索Time Graph"
  buttonLink="/zh-cn/features-time-graph-hat"
  buttonStyle="secondary"
  footer="每次提交都讲述一个故事。每次更改都有智慧。"
/>
