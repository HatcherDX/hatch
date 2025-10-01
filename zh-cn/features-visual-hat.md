---
title: Visual HAT - 从截图到系统
description: 将任何视觉输入转化为功能代码。从模型到截图到白板图——如果您能看到它，Visual HAT就能构建它。
---

# <DocIcon type="visual" inline /> Visual HAT

> **支柱关联：** Visual HAT体现了我们["从文本猜测到视觉意图"](/zh-cn/philosophy#pillar-1-from-textual-guesswork-to-visual-intent)的理念，实现了[Visual-to-Code Bridge](/zh-cn/visual-to-code)以消除AI通信中的歧义。

## 从截图到系统

Visual HAT是愿景与实现之间的桥梁。将它指向任何视觉内容——截图、模型、竞争对手的网站，甚至是餐巾纸草图——并观看它转化为功能齐全、可用于生产的代码。

### "让它看起来像这样"的终结

不再有：

- 为匹配设计而推动像素
- "能把它向左移2px吗？"
- 解释同一布局10次
- 重建其他地方已经存在的东西

只需向Visual HAT展示您想要什么。它会构建它。完美地。

## 工作原理

### 1. 捕获

指向任何东西：

- 现有应用的截图
- Figma/Sketch设计
- 竞争对手网站
- 手绘线框图
- 甚至是白板照片

### 2. 分析

Visual HAT理解：

- 布局结构和层次
- 组件模式
- 交互模型
- 设计系统规则
- 响应式行为

### 3. 生成

获得可用于生产的代码：

- 语义化HTML/JSX
- 使用您的框架样式化
- 默认响应式
- 包含无障碍性
- 推断动画

## 实际应用魔法

### 场景1：竞争对等

**挑战**："让我们的仪表板看起来像Stripe的，但用我们的品牌"

**Visual HAT解决方案**：

1. 截取Stripe仪表板的截图
2. HAT提取布局模式
3. 应用您的设计系统
4. 生成您的技术栈代码
5. 维护您的组件库

**结果**：几小时而非几个月内获得Stripe品质的UI。

### 场景2：设计到代码管道

**挑战**：设计师更新Figma，开发人员争相实现。

**Visual HAT解决方案**：

```yaml
pipeline: figma-sync
trigger: design-updated
actions:
  - extract: components-changed
  - generate: react-components
  - test: visual-regression
  - pr: auto-create
```

**结果**：设计自动变成代码。设计师看到他们的确切愿景。开发人员专注于逻辑。

### 场景3：遗留UI现代化

**挑战**：古老的jQuery UI需要变成现代的React。

**Visual HAT解决方案**：

1. 截取现有UI的截图
2. HAT识别UI模式
3. 映射到现代组件
4. 生成React等效代码
5. 保留确切功能

**结果**：无需规范的像素完美现代化。

## 高级能力

### 交互检测

Visual HAT不仅看到静态布局：

- **悬停状态**：从设计变体中推断
- **动画**：检测运动模式
- **微交互**：再现细微行为
- **状态变化**：理解UI流程

### 设计系统集成

```yaml
visual-config:
  design-system: 'our-company-ds'
  component-mapping:
    - detected: 'button-primary'
      use: "Button variant='primary'"
    - detected: 'card-layout'
      use: 'Card elevation={2}'
  style-overrides:
    - colors: 'use-brand-palette'
    - spacing: 'use-8px-grid'
```

### 多平台生成

一个截图，多个输出：

- **Web**：React、Vue、Angular
- **移动**：React Native、Flutter
- **桌面**：Electron、Tauri
- **电子邮件**：MJML模板
- **打印**：PDF布局

## 与其他HATs的集成

Visual HAT放大一切：

- **与Code HAT配合**：视觉→功能，即刻实现
- **与Gen HAT配合**：增强捕获的设计
- **与Time Graph HAT配合**：跟踪视觉演变

## 命令示例

```bash
# 将截图转换为代码
hatcher visual convert --input screenshot.png --output react

# 同步Figma到代码库
hatcher visual sync --figma-url "..." --target "./src/components"

# 提取设计系统
hatcher visual extract-system --source "competitor.com" --output "ds.yaml"

# 生成响应式变体
hatcher visual responsive --input "desktop.png" --breakpoints "mobile,tablet"
```

## 视觉工作流革命

### Visual HAT之前

1. 设计师创建模型（2天）
2. 开发人员解释设计（1天）
3. 细节来回讨论（2天）
4. 响应式适配（1天）
5. 无障碍性添加（1天）
6. 最终润色（1天）

**总计：8天**

### 使用Visual HAT

1. 设计师创建模型（2天）
2. Visual HAT生成代码（5分钟）
3. 开发人员添加逻辑（2小时）

**总计：2.5天**

## 模式识别库

Visual HAT从每次转换中学习：

- **常见模式**：页眉、页脚、导航
- **行业标准**：电子商务、SaaS、内容网站
- **文化变体**：RTL布局、亚洲排版
- **无障碍模式**：屏幕阅读器优化

## 视觉的解放

Visual HAT不是要跳过设计——而是要**完美实现**：

- 不再有实现漂移
- 不再有"几乎像模型"
- 不再有响应式猜测
- 不再有事后考虑的无障碍性

设计师设计。Visual HAT实现。完美地。

---

准备好看到您的愿景变成代码了吗？[开始使用Visual HAT](/zh-cn/getting-started#visual-hat)

<PageCTA
  title="从愿景到完美代码"
  subtitle="立即将任何设计转化为像素完美、响应式的实现"
  buttonText="尝试Visual HAT"
  buttonLink="/zh-cn/getting-started"
  buttonStyle="secondary"
  footer="设计一次。完美实现。"
/>
