---
title: Time Graph HAT - 您的开发时光机
description: 穿越代码的时间线。查看每个决策，理解每个变更，并在时间本身中进行调试。
---

# <DocIcon type="time-graph" inline /> Time Graph HAT

> **支柱关联：** 此HAT是我们[Time Graph支柱](/zh-cn/pillars-time-graph)的直接实现，确保每个操作都是可逆的，每个决策都是可审计的，并且没有任何东西会丢失。

## 您的开发时光机

Time Graph HAT将您的代码库从快照转变为**活生生的时间线**。每个决策、每个变更、每个bug都成为可探索图中的一个节点，让您能够穿越时间来理解、调试，甚至重写历史。

### 超越Git历史

Git向您展示**什么**被改变了。Time Graph HAT向您展示**为什么**、**如何**以及**如果**：

- **决策跟踪**：记录每个架构选择
- **影响映射**：查看变更如何在时间中波及
- **平行时间线**：探索替代实现
- **因果调试**：通过时间倒退找到根本原因

## 开发的第四维度

### 传统版本控制

```
main ──●──●──●──●──●── (当前)
        └──●──●── (功能分支)
```

线性。扁平。有限。

### Time Graph现实

```
        ┌─ 决策：使用REST ─── 实现A ─── 发现Bug ───┐
        │                                            │
main ───┼─ 决策：使用GraphQL ─ 实现B ─── 成功 ────┼─── 合并
        │                                            │
        └─ 决策：使用gRPC ──── 实现C ─── 放弃 ───┘
              │                         │
              └── 原因：延迟 ────── 基准测试 ──── 结果
```

多维度。可探索。**可理解**。

## 实际应用能力

### 场景1：生产环境之谜

**挑战**：应用在生产环境中随机崩溃。没有模式。无法复现。

**Time Graph解决方案**：

1. 导航到崩溃时间戳
2. HAT显示所有并发更改
3. 识别看似无关的部署
4. 通过依赖图追踪影响
5. 找到3周前引入的竞态条件

**结果**：在30分钟内修复"不可能"的bug。

### 场景2：架构辩论

**挑战**："我们为什么选择MongoDB而不是PostgreSQL？"

**Time Graph解决方案**：

```yaml
query: decision-node
topic: 'database-selection'
timestamp: '3-months-ago'

result:
  decision: 'MongoDB'
  reasons:
    - '灵活的schema用于快速迭代'
    - '更好的横向扩展'
    - '团队专业知识'
  alternatives-explored:
    - PostgreSQL: '拒绝：Schema迁移顾虑'
    - DynamoDB: '拒绝：供应商锁定'
  participants: ['alice', 'bob', 'charlie']
  supporting-data: ['benchmark-results.json', 'cost-analysis.xlsx']
```

**结果**：即时获得任何技术决策的上下文。

### 场景3：并行开发

**挑战**：同时开发的两个功能发生冲突。

**Time Graph解决方案**：

- HAT维护平行时间线
- 显示分歧点
- 识别冲突源
- 建议合并策略
- 模拟合并结果

**结果**：自信地合并而不破坏任何功能。

## 高级能力

### 因果分析

不仅是"什么坏了"，而是"什么导致了坏掉"：

```yaml
analysis: login-failure
symptoms:
  - "用户无法登录"
  - '开始于2024-01-15 14:30'

time-graph-trace:
  - 14:30: '登录失败激增'
  - 14:25: 'API响应时间增加'
  - 14:20: '数据库查询模式改变'
  - 14:15: 'ORM库更新'
  - 13:00: '依赖更新合并'

root-cause: 'ORM更新改变了查询生成'
fix: '回滚或修补查询构建器'
```

### 时间查询

跨时间提问：

```bash
# 性能何时下降？
hatcher time-graph query "response_time > 200ms" --first-occurrence

# 谁触碰过这个文件？
hatcher time-graph contributors "./src/auth.js" --with-context

# 工作和损坏之间发生了什么变化？
hatcher time-graph diff --from "last-working" --to "first-broken"

# 显示所有关于身份验证的决策
hatcher time-graph decisions --topic "auth" --timeline
```

### 蝴蝶效应跟踪

查看小变化如何级联：

```yaml
change: '更新按钮颜色'
immediate-impact:
  - 'button.css已修改'
cascade:
  - '组件快照测试失败'
  - '检测到视觉回归'
  - '无障碍对比度警告'
  - '设计系统版本升级'
  - '所有使用设计系统的应用需要更新'
  - '营销截图过时'
```

## 与其他HATs的集成

Time Graph HAT增强一切：

- **与Code HAT配合**：回到代码更简单的时候
- **与Gen HAT配合**：查看生成演变
- **与Visual HAT配合**：跨时间的视觉回归

## 时间旅行操作

### 检查点创建

```bash
# 创建时间检查点
hatcher time-graph checkpoint "重大重构前"

# 创建决策节点
hatcher time-graph decision "切换到微服务" \
  --reasons "规模,团队自主权" \
  --alternatives "单体,无服务器"
```

### 时间线导航

```bash
# 前往特定时间点
hatcher time-graph goto "2024-01-15 14:00"

# 前往最后工作状态
hatcher time-graph goto "last-green-ci"

# 比较时间线
hatcher time-graph compare "timeline-a" "timeline-b"
```

### 时间调试

```bash
# 二分查找破坏性变更
hatcher time-graph bisect --good "v1.0" --bad "HEAD" --test "npm test"

# 在时间点重放执行
hatcher time-graph replay "crash-timestamp" --with-state
```

## 知识保存

Time Graph HAT保存机构知识：

### 永不丢失上下文

- 为什么X被弃用？
- 谁决定了Y？
- 考虑了哪些替代方案？
- Z解决了什么问题？

### 加速入职

新开发人员可以：

- 探索决策历史
- 理解演变
- 从过去的错误中学习
- 看到完整的上下文

## 时间的解放

Time Graph HAT不是停留在过去——而是从中**学习**：

- 不再有考古式调试
- 不再有"没人知道为什么"
- 不再重复错误
- 不再有上下文丢失

您的代码有历史。Time Graph HAT使其**可导航**。

---

准备好探索您代码的时间线了吗？[开始使用Time Graph HAT](/zh-cn/getting-started#time-graph-hat)

<PageCTA
  title="导航您代码的演变"
  subtitle="穿越时间以理解您的代码如何以及为何演变"
  buttonText="探索Time Graph"
  buttonLink="/zh-cn/getting-started"
  buttonStyle="secondary"
  footer="每个变更都有故事。每个决策都有上下文。"
/>
