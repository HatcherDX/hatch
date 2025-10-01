---
title: 从Copilot到Autopilot | 指挥官宣言
description: 战术辅助只是开始。现在是战略自动化的时候了。停止飞行，开始指挥。
---

# Copilot时代已经结束

AI配对编程教会我们机器可以建议下一行。但copilot无法为你执行任务——它无法重构模块、实现100%测试覆盖率或迁移数据库。你仍然是驾驶飞机的人，用你有限的时间换取无限的任务。

**是时候走出驾驶舱，进入Command Deck了。**

欢迎来到**Autopilot**的时代。有了Hatcher，你不再飞行。你**指挥**。

## 每个任务都有一个Playbook

你的机库不限于一个Autopilot。你指挥整个舰队，每个都专门用于特定任务。

### Coverage Autopilot

_在你睡觉时确保100%测试覆盖率_

分析你的代码路径，识别边缘情况，生成全面的测试套件。它不仅测试成功路径——它测试错误隐藏的黑暗角落。

**指挥官时间：** 2分钟（定义Playbook）
**Autopilot运行时间：** 6小时（通宵）
**结果：** 返回时100%测试覆盖率

### Refactor Autopilot

_按照你的确切模式现代化遗留代码_

采用你的架构决策并系统地应用于整个代码库。不再有"我们稍后会重构它"。稍后就是现在，而且是自动化的。

**任务范围：** 50,000行
**应用的模式：** 12个
**破坏性变更：** 0

### Migration Autopilot

_以零停机时间执行复杂迁移_

数据库模式、API版本、框架升级。它在保持向后兼容性和数据完整性的同时处理复杂性。

**迁移的表：** 47个
**保留的数据：** 100%
**回滚就绪：** 始终

### Documentation Autopilot

_为你的整个API生成详尽的文档_

不仅仅是注释。包含示例、边缘情况、错误响应和交互式playground的完整文档套件。开发者真正想要阅读的文档。

**记录的端点：** 156个
**生成的示例：** 500+
**OpenAPI兼容：** 是

### Security Autopilot

_在漏洞重要之前审计和修补它们_

持续安全分析、依赖更新、渗透测试模式。它像攻击者一样思考，所以你不必这样做。

**发现的漏洞：** 23个
**自动修补：** 19个
**误报：** 0

## 自主但不混乱。宪法下的力量。

这种恐惧是合理的："如果Autopilot失控怎么办？"

这就是为什么每个Hatcher Autopilot都在**Constitutional AI**下运行——一个确保自主永远不会变成无政府状态的治理框架。

### Autopilot的三大法则

1. **Playbook至上**：Autopilot必须严格遵循其Playbook，不得偏离定义的模式和约束。

2. **质量门**：Autopilot必须在完成任务之前通过所有Hatcher Actions（测试、linting、类型检查）。

3. **Time Graph不可变性**：每个决策、每个变更、每次执行都记录在不可变的Time Graph中，以实现完全可审计性。

### 你的安全机制

- **预览模式**：在发生之前准确查看将要改变的内容
- **增量执行**：分阶段运行任务，设置检查点
- **即时回滚**：Time Graph允许回滚任何任务
- **审计追踪**：每个决策都可追溯到其推理
- **人工覆盖**：你始终拥有中止按钮

```typescript
// Constitutional约束在行动中
const mission = new RefactorMission({
  scope: 'src/legacy',
  playbook: 'modern-patterns-v2',
  constraints: {
    preservePublicAPI: true,
    maintainBackwardCompat: true,
    requireTestsPassing: true,
    maxRiskLevel: 'medium',
  },
})

// Autopilot将拒绝违反约束的任务
if (mission.estimatedRisk > mission.constraints.maxRiskLevel) {
  return {
    status: 'rejected',
    reason: 'Exceeds maximum risk threshold',
  }
}
```

---

## Command Deck体验

你的新开发环境不是编辑器。它是一个**Command Deck**。

### 任务控制

实时监控所有活跃的Autopilot任务。查看进度，审查决策，必要时干预。

### Playbook库

你积累的智慧，编码和版本化。与团队共享，从大师那里继承，为社区贡献。

### 舰队状态

你机库中的每个Autopilot、它们的专业领域、成功率、最近的任务。

### Time Graph导航器

穿越项目的历史，查看决策是如何做出的，理解代码库的演变。

## 加入先锋队

软件开发的未来不是更快地编写代码。而是对于已解决的问题**根本不写代码**。

当其他人还在向他们的copilot寻求建议时，你将指挥Autopilots舰队执行复杂任务。当他们调试自动完成错误时，你将审查完成的功能。当他们维护时，你将创新。

### 选择很明确

继续使用copilot手动飞行并获得建议...

或者进入Command Deck，让Autopilots执行你的愿景。

### 早期访问：Alpha舰队

我们正在组建第一支舰队指挥官中队。将定义自主开发未来的开发者。

**Alpha访问包含：**

- 五个核心Autopilots（Coverage、Refactor、Migration、Docs、Security）
- Playbook创建工具
- 与Hatcher工程团队的直接联系
- 舰队指挥官公会的终身会员资格
- 你的名字在先锋宣言中

---

## 宣言

我们这些建造者，在驾驶舱中待得太久了。

我们掌握了控制，记住了模式，完善了程序。我们在一个需要舰队指挥官的时代成为了出色的飞行员。

我们得到的工具——copilots、助手、建议——帮助我们飞得更快。但我们仍在飞行。仍在执行。仍在用时间换取代码行。

**这不是我们被承诺的未来。**

未来是Autopilots。专门的、自主的代理舰队，精确且大规模地执行我们的架构愿景。未来是走出驾驶舱进入Command Deck，我们的专业知识被编码到机器完美执行的Playbooks中。

我们不需要更多建议。我们需要执行。

我们不需要辅助。我们需要自动化。

我们不需要更好的copilots。我们需要完全停止飞行。

**copilot的时代已经结束。**

**Autopilot的时代已经开始。**

---

_停止飞行。开始指挥。_

**Hatcher Autopilots**
舰队指挥官的IDE

---

<PageCTA
  title="准备好指挥你的舰队了吗？"
  subtitle="部署以军事精度编码的智能Autopilots"
  buttonText="开始使用Autopilots"
  buttonLink="/zh-cn/getting-started"
  buttonStyle="secondary"
  footer="停止手动飞行。开始指挥舰队。"
/>

<style>
blockquote {
  border-left: 4px solid #667eea;
  padding-left: 1rem;
  margin: 2rem 0;
  font-style: italic;
}

h2 {
  margin-top: 3rem;
  margin-bottom: 1rem;
}

h3 {
  color: #667eea;
}

details {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

details summary {
  cursor: pointer;
  font-weight: bold;
}

code {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}
</style>
