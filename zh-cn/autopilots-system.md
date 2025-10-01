---
title: Autopilot 系统 | 智能开发编排
description: 掌握 Hatcher 的 Autopilot 系统 - 通过 AI 辅助执行复杂开发任务的强大自动化工作流。将重复性任务转化为智能、可复用的配方。
---

# Autopilot 系统

Autopilot 系统是 Hatcher 的战术自动化框架，它将复杂的开发工作流转化为智能、可执行的配方。Playbooks 定义战略（标准和模式），而 Autopilots 则是通过 AI 驱动的智能自动化实现这些模式的战术。

## 什么是 Autopilots？

Autopilots 是结合以下功能的结构化工作流：

- **任务自动化**：精确执行多步骤流程
- **AI 智能**：执行期间的上下文感知决策
- **工具集成**：与开发工具的无缝交互
- **错误处理**：智能恢复常见问题

它们是知道"如何"实现 Playbooks 声明你"想要"实现的目标的"配方"。

## Autopilot 结构

基本的 Autopilot 遵循以下结构：

```json
{
  "name": "Create Vue Component",
  "version": "1.0.0",
  "description": "Generate a complete Vue 3 component with tests",
  "inputs": [
    {
      "name": "componentName",
      "type": "string",
      "description": "Name of the component in PascalCase",
      "required": true
    },
    {
      "name": "useTypeScript",
      "type": "boolean",
      "description": "Use TypeScript",
      "default": true
    }
  ],
  "steps": [
    {
      "name": "create-component",
      "action": "file.create",
      "path": "src/components/${componentName}.vue"
    },
    {
      "name": "create-test",
      "action": "file.create",
      "path": "tests/${componentName}.spec.ts"
    },
    {
      "name": "validate-quality",
      "action": "run.action",
      "name": "test:component"
    }
  ]
}
```

## 内置 Autopilots

Hatcher 为常见开发模式提供了强大的 Autopilots：

### 组件 Autopilots

- **Create Component**：生成带测试的完整组件
- **Extract Component**：将代码重构为可复用组件
- **Update Props**：安全地修改组件接口

### 重构 Autopilots

- **Extract Function**：将逻辑提取到工具函数
- **Rename Symbol**：在整个代码库中安全重命名
- **Move Module**：重新定位代码并更新导入

### 测试 Autopilots

- **Generate Tests**：从实现创建测试套件
- **Update Snapshots**：智能刷新测试快照
- **Coverage Report**：分析并改善测试覆盖率

### 文档 Autopilots

- **Generate JSDoc**：从代码分析添加文档
- **Update README**：保持文档同步
- **API Documentation**：从代码生成 API 文档

## 创建自定义 Autopilots

### 基本工作流 Autopilots

为团队的特定工作流创建 Autopilots：

```yaml
name: Setup New Feature
description: Initialize a new feature with all required structure
inputs:
  - name: featureName
    type: string
    required: true
  - name: includeTests
    type: boolean
    default: true

steps:
  - name: Create feature directory
    action: directory.create
    path: src/features/${featureName}

  - name: Generate index file
    action: file.create
    path: src/features/${featureName}/index.ts
    template: feature-index

  - name: Create component structure
    action: run.autopilot
    name: Create Vue Component
    inputs:
      componentName: ${featureName}View

  - name: Setup routing
    action: file.modify
    path: src/router/index.ts
    operation: add-route
    route:
      path: /${featureName}
      component: ${featureName}View

  - name: Validate with Actions
    action: run.actions
    actions: ["test:unit", "lint:check", "types:validate"]
```

### AI 增强的 Autopilots

利用 AI 进行智能任务执行：

```yaml
name: Optimize Component Performance
description: Analyze and optimize Vue component performance
ai-mode: enhanced

steps:
  - name: Analyze component
    action: ai.analyze
    prompt: |
      Analyze this Vue component for performance issues:
      - Unnecessary re-renders
      - Missing memoization
      - Inefficient computed properties
      - Large bundle size

  - name: Apply optimizations
    action: ai.refactor
    playbooks:
      - vue-performance
      - bundle-optimization
    constraints:
      - Maintain all existing functionality
      - Keep TypeScript types intact
      - Preserve component API

  - name: Verify changes
    action: run.actions
    actions: ['test:component', 'performance:benchmark']
```

## Autopilot 触发器

### 手动执行

按需运行 Autopilots：

```bash
hatcher run create-component --name UserProfile
```

### 文件监视触发器

在文件更改时执行 Autopilots：

```json
{
  "triggers": [
    {
      "type": "file-change",
      "pattern": "**/*.vue",
      "autopilot": "update-component-docs"
    }
  ]
}
```

### Git Hook 集成

使用 Git 工作流自动化 Autopilots：

```json
{
  "triggers": [
    {
      "type": "pre-commit",
      "autopilot": "format-and-lint"
    },
    {
      "type": "post-merge",
      "autopilot": "update-dependencies"
    }
  ]
}
```

## Autopilot 组合

### 顺序 Autopilots

链接 Autopilots 以处理复杂工作流：

```yaml
name: Complete Feature Development
steps:
  - action: run.autopilot
    name: Create Component

  - action: run.autopilot
    name: Generate Tests

  - action: run.autopilot
    name: Update Documentation

  - action: git.commit
    message: 'feat: Add ${featureName} component'

  - action: run.actions
    name: Final Quality Gates
    actions: ['coverage:verify', 'bundle:size']
```

### 并行 Autopilots

同时执行独立任务：

```yaml
name: Project Setup
parallel: true
steps:
  - action: npm.install
  - action: generate.types
  - action: setup.environment
```

### 条件 Autopilots

为工作流添加逻辑：

```yaml
steps:
  - name: Check TypeScript
    action: config.check
    key: useTypeScript

  - name: Generate types
    condition: ${steps.checkTypeScript.result}
    action: typescript.generate
```

## 错误处理

### 重试逻辑

优雅地处理临时故障：

```yaml
steps:
  - name: API Setup
    action: api.initialize
    retry:
      attempts: 3
      delay: 1000
      backoff: exponential
```

### 回退 Autopilots

提供替代路径：

```yaml
steps:
  - name: Use npm
    action: npm.install
    fallback:
      - action: yarn.install
      - action: pnpm.install
```

### 错误恢复

失败时清理：

```yaml
steps:
  - name: Database migration
    action: db.migrate
    onError:
      - action: db.rollback
      - action: notify.team
        message: Migration failed
```

## Autopilot 市场

### 社区 Autopilots

浏览并安装来自社区的 Autopilots：

- **特定框架**：针对 React、Vue、Angular 优化
- **工具集成**：Docker、Kubernetes、CI/CD
- **特定领域**：电子商务、SaaS、移动端

### 发布 Autopilots

与社区分享你的 Autopilots：

```bash
hatcher autopilot publish my-awesome-workflow
```

### Autopilot 版本控制

- **语义化版本**：跟踪兼容性
- **依赖管理**：处理 Autopilot 依赖关系
- **更新通知**：保持改进的最新状态

## 配置

### 全局 Autopilots

为所有项目配置默认 Autopilots：

```json
{
  "globalAutopilots": [
    "code-formatter",
    "commit-validator",
    "dependency-checker"
  ]
}
```

### 项目 Autopilots

在 `hatcher.config.json` 中定义项目特定的 Autopilots：

```json
{
  "autopilots": {
    "directory": "./autopilots",
    "autoload": ["setup", "deploy"],
    "aliases": {
      "dev": "start-development",
      "ship": "deploy-production"
    }
  }
}
```

## 最佳实践

### Autopilot 设计

- **单一职责**：每个 Autopilot 应该精通编排一个工作流
- **幂等性**：Autopilots 应该可以安全地多次运行
- **可组合性**：设计 Autopilots 使其能够协同工作
- **文档化**：清晰的描述和示例

### 性能

- **缓存结果**：避免冗余操作
- **并行执行**：尽可能使用并行处理
- **渐进增强**：从简单开始，根据需要增加复杂性

### 安全性

- **输入验证**：执行前验证所有输入
- **沙箱执行**：安全运行不受信任的 Autopilots
- **审计日志**：跟踪所有 Autopilot 执行

## 与 Playbooks 和 Actions 的集成

Autopilots 在 Playbooks（战略）和 Actions（验证）之间进行编排：

```yaml
name: Implement Feature
playbooks:
  - vue3-typescript # The standards to follow
  - team-standards # The patterns to use

steps:
  - name: Generate component
    action: ai.create
    prompt: Create a Vue component following our standards

  - name: Apply team patterns
    action: playbook.apply
    strict: true

  - name: Validate with Actions
    action: run.actions
    actions:
      - test:unit # Verify tests pass
      - lint:check # Verify code quality
      - coverage:verify # Verify test coverage
```

## 监控和分析

### 执行跟踪

监控 Autopilot 性能：

- **执行时间**：跟踪持续时间和瓶颈
- **成功率**：监控可靠性
- **使用模式**：了解团队工作流

### 优化建议

AI 驱动的洞察：

- **工作流改进**：建议更好的 Autopilot 序列
- **性能提示**：识别优化机会
- **模式检测**：发现自动化机会

## 未来功能

### 可视化 Autopilot 构建器

无需代码即可通过拖放界面创建复杂工作流。

### AI Autopilot 生成

通过观察开发者模式自动生成 Autopilots。

### 分布式执行

在多台机器上运行 Autopilots 以实现大规模并行处理。

### Time Travel 调试

逐步查看 Autopilot 执行历史以调试复杂工作流。

## 战术自动化的力量

Autopilot 系统将重复的开发任务转化为随时间学习和改进的智能、自动化工作流。它们是战术层，连接战略性 Playbooks 和验证性 Actions 之间的桥梁，创建一个尊重你的标准同时加速开发的完整自动化生态系统。

记住：**Playbooks 定义"什么"，Autopilots 执行"如何"，Actions 验证"是否"。**

<PageCTA
  title="部署你的第一个 Autopilot"
  subtitle="使用智能、自我改进的 AI 代理自动化复杂工作流"
  buttonText="启动 Autopilot 系统"
  buttonLink="/zh-cn/autopilots"
  buttonStyle="secondary"
  footer="从重复到自动化。从手动到魔法。"
/>
