---
title: 参与贡献 | 加入 Hatcher 开源社区
description: 了解如何为 Hatcher IDE（开源 AI 开发平台）做出贡献。查找设置指南、编码标准和社区指南，为可控的 AI 开发工具做出贡献。
---

# 为 Hatcher 做出贡献

感谢您有兴趣为 Hatcher 做出贡献！您正在加入一个致力于构建 AI 时代软件开发未来的运动——一个开发者在利用 AI 放大能力的同时保持绝对控制权的未来。本指南提供了入门的实际步骤，但如果您还没有阅读我们的[**理念**](/zh-cn/philosophy)，我们建议您先阅读，以了解我们工作背后的"为什么"。

通过为 Hatcher 做出贡献，您不仅仅是在编写代码——您正在帮助定义人类在 AI 时代如何构建软件。每一个贡献，无论是错误修复、功能还是文档改进，都在推进我们的可控放大使命。

## 行为准则

通过参与此项目，您同意遵守我们的[行为准则](CODE_OF_CONDUCT.md)。请在贡献之前阅读它。

## 入门指南

### 开发环境设置

1. **Fork 和克隆**

   ```bash
   git clone https://github.com/your-username/dx-engine.git
   cd dx-engine
   ```

2. **安装依赖**

   ```bash
   pnpm install
   ```

3. **启动开发服务器**
   ```bash
   pnpm dev
   ```

### 项目结构

```
dx-engine/
├── apps/                           # Application packages
│   ├── electron/                   # Main Electron process
│   ├── web/                       # Renderer process (Vue 3 + TypeScript)
│   ├── preload/                   # Preload scripts for Electron
│   └── docs/                      # VitePress documentation site
├── universal/                      # Shared libraries and systems
│   ├── terminal-system/           # Terminal emulation and management
│   ├── storage/                   # Storage abstraction layer
│   ├── git-genius/               # Git operations and timeline
│   ├── shared-rendering/         # Shared rendering utilities
│   └── shared-utils/             # Common utilities
├── tooling/                       # Development and build tools
│   ├── vite-plugin/              # Custom Vite plugins
│   ├── translation-system/       # i18n and translation tools
│   └── puppeteer-google-translate/ # Automated translation
├── scripts/                       # Build, test, and utility scripts
├── brand/                         # Brand assets (logos, icons, etc.)
└── types/                         # Shared TypeScript type definitions
```

## 贡献方式

### 报告错误

报告错误时，请包括：

- **清晰的描述**：发生了什么与您期望的
- **重现步骤**：重现问题的详细步骤
- **环境**：操作系统、Node.js 版本、pnpm 版本
- **截图**：如适用，包括视觉证据

创建问题时使用我们的[错误报告模板](.github/ISSUE_TEMPLATE/bug_report.md)。

### 功能请求

我们欢迎功能请求！请包括：

- **用例**：为什么需要此功能？
- **建议的解决方案**：它应该如何工作？
- **替代方案**：您考虑了哪些其他方法？

使用我们的[功能请求模板](.github/ISSUE_TEMPLATE/feature_request.md)。

### 代码贡献

#### 开始之前

1. **检查现有问题**：查找相关问题或功能请求
2. **讨论重大更改**：打开问题讨论重大更改
3. **从小处开始**：从小而专注的贡献开始

#### 开发工作流程

1. **创建分支**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **进行更改**
   - 遵循我们的编码标准（见下文）
   - 为新功能编写测试
   - 根据需要更新文档

3. **测试您的更改**

   ```bash
   pnpm build
   pnpm test
   ```

4. **提交您的更改**

   ```bash
   git commit -m "feat: add amazing new feature"
   ```

   我们遵循[约定式提交](https://conventionalcommits.org/)格式。

5. **推送并创建 PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## 编码标准

Hatcher 遵循严格的编码标准，以确保整个项目的一致性、可维护性和高质量代码。

**📋 [完整编码标准指南](/zh-cn/coding-standards)**

### 快速参考

**TypeScript**

- 对所有新代码使用启用严格模式的 TypeScript
- 对于对象形状，优先使用接口而不是类型
- 为变量和函数使用有意义的描述性名称
- 为所有公共 API 包含 JSDoc 注释

**Vue.js**

- 使用带有 `<script setup>` 语法的 Composition API
- 使用 TypeScript 接口定义 props 和 emits
- 对于可重用逻辑，优先使用 composables
- 遵循单文件组件结构：script → template → style

**样式**

- 对组件特定的 CSS 使用作用域样式
- 遵循 BEM 方法论进行类命名
- 使用 CSS 自定义属性进行主题化
- 对于布局，优先使用 flexbox 和 CSS Grid

**Git 约定**

- 遵循[约定式提交](https://conventionalcommits.org/)格式
- 使用描述性分支名称：`feature/`、`fix/`、`docs/`、`refactor/`
- 保持提交原子化并专注于单个更改

### 代码质量工具

我们使用自动化工具来执行标准：

```bash
# 检查并修复代码风格问题
pnpm lint:fix

# 类型检查
pnpm typecheck

# 运行所有测试
pnpm test

# 格式化代码
pnpm format
```

### 预提交钩子

Husky 在每次提交前运行自动检查：

- ESLint 进行代码质量检查
- TypeScript 编译
- Prettier 进行格式化
- 关键路径的单元测试

有关详细的指南、示例和最佳实践，请参阅我们的[编码标准](/zh-cn/coding-standards)文档。

## 文档

### 文档类型

- **代码注释**：解释复杂的逻辑
- **README 文件**：概述和设置说明
- **API 文档**：记录公共接口
- **用户指南**：最终用户的操作指南

### 编写指南

- 使用清晰、简洁的语言
- 包括代码示例
- 保持文档与代码更改同步
- 测试所有代码示例

## Pull Request 流程

### 提交之前

- [ ] 代码遵循项目标准
- [ ] 测试在本地通过
- [ ] 文档已更新
- [ ] 更改专注且原子化

### PR 描述模板

```markdown
## 描述

更改的简要描述

## 更改类型

- [ ] 错误修复
- [ ] 新功能
- [ ] 破坏性更改
- [ ] 文档更新

## 测试

- [ ] 添加/更新单元测试
- [ ] 添加/更新集成测试
- [ ] 完成手动测试

## 截图（如适用）

包括 UI 更改的前后截图
```

### 审查流程

1. **自动检查**：CI/CD 必须通过
2. **代码审查**：至少一位维护者审查
3. **测试**：在开发环境中测试更改
4. **文档**：验证文档已更新
5. **合并**：压缩并合并已批准的 PR

## 发布流程

### 版本控制

我们遵循[语义化版本控制](https://semver.org/)：

- **主版本**：破坏性更改
- **次版本**：新功能（向后兼容）
- **补丁版本**：错误修复（向后兼容）

### 发布工作流程

1. **功能冻结**：停止接受新功能
2. **测试**：全面测试阶段
3. **文档**：更新变更日志和文档
4. **发布**：创建标记的发布
5. **公告**：向社区传达更改

## 社区

### 沟通渠道

- **GitHub Issues**：错误报告和功能请求
- **GitHub Discussions**：一般问题和想法
- **Discord**：与社区实时聊天
- **Twitter**：关注 [@HatcherDX](https://twitter.com/HatcherDX) 获取更新

### 社区指南

- **尊重他人**：尊重每个人
- **建设性**：专注于解决方案，而不是问题
- **耐心**：记住我们都是志愿者
- **乐于助人**：分享知识并帮助他人

## 认可

我们感谢所有贡献！贡献者将在以下位置获得认可：

- **CONTRIBUTORS.md**：所有项目贡献者列表
- **发布说明**：突出显示主要贡献
- **社交媒体**：展示社区贡献

## 开发资源

### 有用链接

- [Vue.js 文档](https://vuejs.org/)
- [Electron 文档](https://electronjs.org/)
- [TypeScript 手册](https://typescriptlang.org/)
- [Vite 文档](https://vitejs.dev/)

### 开发工具

- **VS Code**：推荐的编辑器，包含 Vue 和 TypeScript 扩展
- **Vue DevTools**：用于调试 Vue 应用程序的浏览器扩展
- **Electron DevTools**：内置调试工具

## 有疑问？

如果您对贡献有疑问：

1. 查看现有的 [GitHub Discussions](https://github.com/HatcherDX/dx-engine/discussions)
2. 加入我们的 [Discord 社区](https://discord.gg/hatcher)
3. 创建新的讨论或问题

感谢您为 Hatcher 做出贡献！我们一起构建 AI 辅助开发的未来。

<PageCTA
  title="准备好留下您的印记了吗？"
  subtitle="加入正在构建 AI 时代 Constitutional IDE 的社区"
  buttonText="开始贡献"
  buttonLink="https://github.com/HatcherDX/dx-engine/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
  buttonStyle="secondary"
  footer="每一个贡献都在塑造开发的未来"
/>
