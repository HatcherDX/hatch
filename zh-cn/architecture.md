---
title: 架构 | Hatcher 的四大支柱
description: 探索 Hatcher 的技术架构，这是我们四大支柱的直接实现。了解我们如何构建确定性、模型无关且以开发者为中心的 IDE。
---

# Hatcher 架构

Hatcher 的架构是我们**四大支柱**向代码的直接转换。每个选择都是朝着确定性、强大且让人类指挥官拥有绝对控制权的开发环境迈出的深思熟虑的一步。

我们的工程由一个问题指导：**这是否服务于支柱？**

## 四大支柱：我们的架构基础

我们的架构不是建立在抽象原则上，而是建立在四个具体的、承重的支柱上。它们就是系统。

### <DocIcon type="constitutional" inline /> Constitutional Engineering

这是治理层。它由 **Playbooks 系统**（动态上下文引擎）提供支持，并由 **Hatcher Actions** 执行。每个操作，尤其是来自 AI 的操作，都会根据这个用户定义的宪法进行验证。这个支柱使 **Autopilots 系统**能够在尊重您的规则的同时自信地执行。

### <DocIcon type="time-graph" inline /> The Time Graph

这是安全和可审计性层。它由专为 AI 开发的精细、高频率更改而构建的**自定义高性能 Git 引擎**提供支持。它提供了为 **The Time Graph HAT** 提供动力的不可变历史记录，以及每个 Autopilot 任务的可审计日志。

### <DocIcon type="ai-command" inline /> AI Under Command

这是编排层。它充当模型无关的控制平面，管理**一组 AI 模型**（如 Claude 和 Gemini）。它将人类意图转换为精确的、受宪法约束的 AI 操作。这个支柱为 **Gen HAT** 和 **Code HAT** 提供动力，让您能够指挥多个 AI 代理。

### <DocIcon type="universal-fabricator" inline /> The Universal Fabricator

这是执行和现代化层。它使用 **WebAssembly** 在 Hatcher **EGG**（Enforced Governance Guardrails）的安全、确定性环境中运行多语言 **Hatcher Functions**（Delphi、C++、Rust 等）。这使得遗留代码可以在任何地方运行，同时尊重现代标准。

## 技术栈与愿景

我们的技术选择既务实又前瞻，在快速创新的需求与对性能和安全的长期承诺之间取得平衡。

| 组件              | 技术                      | 我们为什么选择它                                                                                       |
| :---------------- | :------------------------ | :----------------------------------------------------------------------------------------------------- |
| **桌面外壳**      | **Electron（当前）**      | 为快速的跨平台开发提供强大、久经考验的基础，使我们能够专注于我们的核心价值主张。                       |
| **UI 框架**       | **Vue.js 3 + TypeScript** | 其组合 API 和类型安全性非常适合专业 IDE 的复杂、有状态界面。                                           |
| **核心（愿景）**  | **Tauri + Rust**          | 我们的长期愿景是用 Rust 锻造 Hatcher 的核心，以获得其无与伦比的性能、内存安全和安全保证。             |

这条"通往 Rust 之路"是我们承诺的核心。我们正在经过验证的原型上构建未来，有一个清晰的架构终局，优先考虑最高的工程卓越标准。

## 设计中的安全与隐私

安全不是一个功能；它是一个架构先决条件。

- **默认本地优先：** 您的源代码和历史记录保存在您的机器上。除非您明确执行操作（例如为不可变审计日志启用团队同步），否则不会将任何内容发送到云服务。

- **零代码存储：** 我们的云服务（用于 Playbooks 等团队功能）**不存储您存储库的完整副本**。我们只存储必要的治理数据（如 Playbooks 和审计日志条目），而不是您静态的整个代码库。

- **沙盒执行：** Hatcher Functions 在安全的 WebAssembly 沙盒中运行，默认情况下无法访问您的系统。

- **透明操作：** Time Graph 和人类防火墙确保您拥有每个操作的清晰、可审计记录，以及对每次更改的最终决定权。

<PageCTA
  title="准备深入了解？"
  subtitle="探索我们的架构如何实现下一代 AI 辅助开发"
  buttonText="阅读理念"
  buttonLink="/zh-cn/philosophy"
  buttonStyle="secondary"
  footer="以安全、隐私和开发者控制为核心构建"
/>
