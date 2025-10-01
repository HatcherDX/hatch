---
title: Actions 系统 | 您的宪法判决
description: 了解 Hatcher 的 Actions 系统——验证每一项更改的确定性质量门槛。这是确保您的代码符合宪法标准的最终判决。
---

# Hatcher Actions：您的宪法判决

Actions 是 Hatcher 生态系统的质量门槛——宪法法官,决定您的代码是否符合您的标准。它们不是工作流或流程;它们是原子性的、确定性的验证器,回答一个简单的问题:**"通过还是失败?"**

## 什么是 Actions?

Actions 是:

- **原子验证器**:验证一个特定方面的单一目的检查
- **确定性的**:对相同的输入始终产生相同的结果
- **二元的**:只返回"通过"或"失败"(带有详细信息)
- **快速的**:专为快速反馈而设计,而非复杂处理

它们是最终的检查点,确保每一段代码都尊重您项目的宪法。

## 在层次结构中的角色

理解 Actions 需要理解它们在 Hatcher 理念中的位置:

1. **Playbooks**(战略):定义您想要执行的标准
2. **Autopilots**(战术):执行如何实施这些标准
3. **Actions**(判决):验证实施是否符合标准

```yaml
# 完整的流程
playbook: '我们使用 Vue 3 与 TypeScript'
autopilot: '生成一个使用 TypeScript 的 Vue 3 组件'
actions: '运行类型检查、代码检查和测试以验证正确性'
```

## 核心 Actions

Hatcher 为通用质量门槛提供了基本的 Actions:

### 类型安全 Actions

```yaml
actions:
  - name: types:validate
    description: 验证 TypeScript 编译
    command: tsc --noEmit
    pass_criteria: exit_code == 0

  - name: types:strict
    description: 执行严格的 TypeScript 规则
    command: tsc --strict --noEmit
    pass_criteria: exit_code == 0
```

### 代码质量 Actions

```yaml
actions:
  - name: lint:check
    description: 验证代码符合代码检查标准
    command: eslint . --max-warnings 0
    pass_criteria: exit_code == 0

  - name: format:verify
    description: 检查代码格式
    command: prettier --check .
    pass_criteria: exit_code == 0
```

### 测试 Actions

```yaml
actions:
  - name: test:unit
    description: 运行单元测试
    command: npm test
    pass_criteria: exit_code == 0

  - name: test:integration
    description: 运行集成测试
    command: npm run test:integration
    pass_criteria: exit_code == 0

  - name: coverage:verify
    description: 确保测试覆盖率达到阈值
    command: npm run test:coverage
    pass_criteria: coverage >= 80
```

### 安全 Actions

```yaml
actions:
  - name: security:audit
    description: 检查已知漏洞
    command: npm audit --audit-level=moderate
    pass_criteria: exit_code == 0

  - name: secrets:scan
    description: 确保代码中没有秘密信息
    command: trufflehog scan .
    pass_criteria: no_secrets_found
```

### 性能 Actions

```yaml
actions:
  - name: bundle:size
    description: 验证包大小限制
    command: bundlesize
    pass_criteria: all_bundles_under_limit

  - name: performance:lighthouse
    description: 检查 Lighthouse 分数
    command: lighthouse-ci
    pass_criteria:
      performance: >= 90
      accessibility: >= 95
```

## 自定义 Actions

在您的 `hatcher.config.json` 中定义项目特定的 Actions:

```json
{
  "actions": {
    "custom:api-contracts": {
      "description": "验证 API 合约",
      "command": "./scripts/validate-api.sh",
      "pass_criteria": "exit_code == 0"
    },
    "custom:db-migrations": {
      "description": "验证数据库迁移",
      "command": "npm run migrate:verify",
      "pass_criteria": "exit_code == 0"
    },
    "custom:i18n-complete": {
      "description": "检查翻译完整性",
      "command": "i18n-validator",
      "pass_criteria": "missing_keys == 0"
    }
  }
}
```

## Action 执行

### 单个 Actions

按需运行特定的 Actions:

```bash
# 运行单个 action
hatcher action run test:unit

# 使用详细输出运行
hatcher action run lint:check --verbose

# 使用自定义参数运行
hatcher action run coverage:verify --threshold=90
```

### Action 组

一起执行相关的 Actions:

```bash
# 运行所有测试 actions
hatcher action run-group testing

# 运行预提交 actions
hatcher action run-group pre-commit

# 运行部署验证
hatcher action run-group deploy-checks
```

### Action 配置

在您的配置中定义 Action 组:

```json
{
  "actionGroups": {
    "pre-commit": [
      "format:verify",
      "lint:check",
      "types:validate",
      "test:unit"
    ],
    "pre-deploy": [
      "test:integration",
      "coverage:verify",
      "security:audit",
      "bundle:size"
    ],
    "quality": ["lint:check", "types:strict", "coverage:verify"]
  }
}
```

## Action 结果

Actions 提供结构化反馈:

```json
{
  "action": "test:unit",
  "status": "fail",
  "duration": 3420,
  "details": {
    "total_tests": 142,
    "passed": 140,
    "failed": 2,
    "failures": [
      {
        "test": "UserService.authenticate",
        "error": "Expected true, received false",
        "file": "services/user.spec.ts",
        "line": 47
      }
    ]
  },
  "suggestion": "在提交前修复失败的测试"
}
```

## 与 Autopilots 集成

Autopilots 使用 Actions 作为质量检查点:

```yaml
# 在 Autopilot 工作流中
name: Feature Implementation
steps:
  - name: Generate code
    action: ai.create

  - name: Quality checkpoint
    action: run.actions
    actions:
      - lint:check # 必须通过
      - types:validate # 必须通过
      - test:unit # 必须通过
    fail_fast: true # 第一次失败时停止

  - name: Commit if quality passed
    action: git.commit
    condition: ${steps.quality_checkpoint.passed}
```

## Action 策略

定义何时 Actions 是强制性的:

```json
{
  "policies": {
    "pre-commit": {
      "required": ["lint:check", "types:validate"],
      "recommended": ["test:unit"]
    },
    "pre-merge": {
      "required": ["test:unit", "test:integration", "coverage:verify"],
      "threshold": {
        "coverage": 80,
        "performance": 85
      }
    },
    "pre-deploy": {
      "required": ["security:audit", "test:integration", "bundle:size"],
      "block_on_failure": true
    }
  }
}
```

## 最佳实践

### Action 设计原则

1. **单一职责**:每个 Action 只验证一件事
2. **快速执行**:Actions 应该在几秒钟内完成,而不是几分钟
3. **清晰的失败消息**:提供可操作的失败反馈
4. **确定性**:相同的输入始终产生相同的结果
5. **无副作用**:Actions 验证但不修改

### 性能优化

- **并行执行**:同时运行独立的 Actions
- **增量检查**:仅在可能时验证更改的文件
- **缓存**:缓存未更改代码的结果
- **早期退出**:在关键违规时快速失败

### 错误处理

Actions 应该提供清晰、可操作的错误消息:

```json
{
  "action": "lint:check",
  "status": "fail",
  "message": "检测到代码质量问题",
  "fixes": {
    "automatic": "运行 'npm run lint:fix' 自动修复 12 个问题",
    "manual": "3 个问题需要手动干预",
    "details": [
      {
        "file": "src/components/Header.vue",
        "line": 25,
        "rule": "no-unused-vars",
        "message": "'oldValue' 已定义但从未使用"
      }
    ]
  }
}
```

## 宪法判决的力量

Actions 是代码质量的守护者——每段代码必须满足的不可协商的标准。它们不是建议或指导方针;它们是代码库的宪法法律。

通过将验证(Actions)与实施(Autopilots)和战略(Playbooks)分离,Hatcher 创建了一个清晰、可维护和可扩展的系统来确保代码质量。

记住:**Actions 不创建或修改——它们判断。它们的判决是最终的。**

<PageCTA
  title="自动执行您的标准"
  subtitle="创建守护代码质量的不可破坏的验证规则"
  buttonText="配置您的 Actions"
  buttonLink="/zh-cn/getting-started"
  buttonStyle="secondary"
  footer="没有妥协。没有例外。您的标准,得到执行。"
/>
