---
title: 入门指南 | 为Hatcher开源IDE做出贡献
description: 加入Hatcher社区。了解我们的开发路线图，查看当前项目状态，并了解如何为AI时代的开源IDE做出贡献。
---

# Hatcher入门指南

欢迎，先锋者。

你已经来到了软件开发新时代的基础阶段。Hatcher正在由工匠社区公开打造，这是你拿起锤子的邀请。

本指南适用于想要在第零天加入我们并帮助塑造宪法式IDE未来的开发者。

## 项目状态与路线图

我们的愿景是一个具有两种不同配置的单一平台。以下是我们今天的位置：

### <DocIcon type="constitutional" inline /> Hatcher Generative（正在积极开发中）

这是我们核心团队当前的重点。Generative节点是快速、创意开发的指挥舱，开发者通过高级指令引导AI。这是代码库中新贡献者可以产生最直接影响的部分。

### <DocIcon type="building" inline /> Hatcher EGGs（在路线图上）

EGGs（Enforced Governance Guardrails）节点是我们关键任务系统的最终目标。它代表"航空航天洁净室"，其中每个操作都是100%确定性和可审计的。**此功能尚未实现**，代表着未来令人兴奋的架构挑战。我们欢迎社区对其实现进行讨论和提出想法。

## 为什么要为Hatcher做出贡献？

通过在这个早期Alpha阶段加入我们，你有独特的机会：

- **塑造基础工具：** 影响将被数千名开发者使用的工具的核心架构和方向。

- **使用世界级技术栈：** 深入研究使用Rust、TypeScript、WebAssembly和尖端AI原则构建的代码库。

- **建立你的声誉：** 成为Hatcher Guild中公认的创始贡献者，一个重视工艺和专业知识的社区。

- **解决有趣的问题：** 从构建自定义Git引擎到设计可视化UI到代码桥梁，我们正在解决的挑战绝非琐碎。

## 如何贡献

准备成为贡献者了吗？目前运行Hatcher的唯一方法是从源代码构建。

### 先决条件

确保你的开发环境具备：

- **Node.js** 22.0.0或更高版本
- **pnpm** 10.6.0或更高版本
- **Git**

### 从源代码构建

```bash
# 克隆仓库
git clone https://github.com/HatcherDX/dx-engine.git
cd dx-engine

# 安装依赖
pnpm install

# 启动开发模式
pnpm dev
```

这将在你的本地机器上启动Hatcher IDE，运行最新的开发版本。

### 理解我们的愿景

为了有效地做出贡献，理解我们的核心哲学至关重要。你只需要阅读一页：

- [Hatcher哲学：受控放大](/zh-cn/philosophy)

### 找到你的第一个贡献

最好的开始方式是处理现有的问题。

- **浏览我们的问题：** 前往我们的[GitHub Issues](https://github.com/HatcherDX/dx-engine/issues)。寻找标记为good first issue或help wanted的问题。

- **加入对话：** 在开始编码之前，在问题上留言并加入我们的[Discord社区](https://discord.gg/cZ7PZvnMk4)。与核心团队讨论你的方法是确保你的贡献与项目方向一致的最佳方式。

- **阅读我们的指南：** 查看仓库中的[CONTRIBUTING.md](https://github.com/HatcherDX/dx-engine/blob/main/CONTRIBUTING.md)文件，了解我们的编码标准和拉取请求流程的详细信息。

## 加入社区

协作在公开场合进行。如果你有问题、想法，或者只是想跟进，这里是找到我们的地方：

- [Discord](https://discord.gg/cZ7PZvnMk4)：与团队和其他贡献者进行实时聊天的主要中心。

- [GitHub](https://github.com/HatcherDX/dx-engine/)：所有代码、问题和拉取请求。

- 关注[@HatcherDX](https://twitter.com/HatcherDX)获取重大新闻和项目更新。

欢迎来到开发的未来！

<PageCTA
  title="准备好加入革命了吗？"
  subtitle="今天就开始为AI辅助开发的未来做出贡献"
  buttonText="浏览开放问题"
  buttonLink="https://github.com/HatcherDX/dx-engine/issues"
  buttonStyle="secondary"
  footer="加入我们的Discord社区获取支持和协作"
/>
