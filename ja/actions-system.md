---
title: "Actions System | あなたの Constitutional 判断"
description: "Hatcherの Actions システムを理解する - すべての変更を検証する決定論的品質ゲート。コードが constitutional 標準を満たすことを保証する最終判断。"
---

# Hatcher Actions: あなたの Constitutional 判断

Actions は Hatcher エコシステムの品質ゲートです — コードが標準を満たすかどうかを決定する constitutional ジャッジです。これらはワークフローやプロセスではありません。単純な質問に答えるアトミックで決定論的な検証者です: **「合格または不合格?」**

## Actions とは?

Actions は:

- **アトミックバリデーター**: 1つの特定の側面を検証する単一目的のチェック
- **決定論的**: 同じ入力に対して常に同じ結果を生成
- **バイナリ**: 「合格」または「不合格」のみを返す(詳細付き)
- **高速**: 複雑な処理ではなく、迅速なフィードバックのために設計

それらは、すべてのコードがプロジェクトの憲法を尊重することを保証する最終チェックポイントです。

## 階層における役割

Actions を理解するには、Hatcher 哲学における位置を理解する必要があります:

1. **Playbooks** (戦略): 強制したい標準を定義
2. **Autopilots** (戦術): それらの標準を実装する方法を実行
3. **Actions** (判断): 実装が標準を満たしているかどうかを検証

```yaml
# 完全なフロー
playbook: 'We use Vue 3 with TypeScript'
autopilot: 'Generate a Vue 3 component with TypeScript'
actions: 'Run type-check, lint, and test to verify correctness'
```

## コア Actions

Hatcher は、普遍的な品質ゲートのための必須 Actions を提供します:

### 型安全性 Actions

```yaml
actions:
  - name: types:validate
    description: Verify TypeScript compilation
    command: tsc --noEmit
    pass_criteria: exit_code == 0

  - name: types:strict
    description: Enforce strict TypeScript rules
    command: tsc --strict --noEmit
    pass_criteria: exit_code == 0
```

### コード品質 Actions

```yaml
actions:
  - name: lint:check
    description: Verify code meets linting standards
    command: eslint . --max-warnings 0
    pass_criteria: exit_code == 0

  - name: format:verify
    description: Check code formatting
    command: prettier --check .
    pass_criteria: exit_code == 0
```

### テスト Actions

```yaml
actions:
  - name: test:unit
    description: Run unit tests
    command: npm test
    pass_criteria: exit_code == 0

  - name: test:integration
    description: Run integration tests
    command: npm run test:integration
    pass_criteria: exit_code == 0

  - name: coverage:verify
    description: Ensure test coverage meets threshold
    command: npm run test:coverage
    pass_criteria: coverage >= 80
```

### セキュリティ Actions

```yaml
actions:
  - name: security:audit
    description: Check for known vulnerabilities
    command: npm audit --audit-level=moderate
    pass_criteria: exit_code == 0

  - name: secrets:scan
    description: Ensure no secrets in code
    command: trufflehog scan .
    pass_criteria: no_secrets_found
```

### パフォーマンス Actions

```yaml
actions:
  - name: bundle:size
    description: Verify bundle size limits
    command: bundlesize
    pass_criteria: all_bundles_under_limit

  - name: performance:lighthouse
    description: Check Lighthouse scores
    command: lighthouse-ci
    pass_criteria:
      performance: >= 90
      accessibility: >= 95
```

## カスタム Actions

`hatcher.config.json` でプロジェクト固有の Actions を定義:

```json
{
  "actions": {
    "custom:api-contracts": {
      "description": "Validate API contracts",
      "command": "./scripts/validate-api.sh",
      "pass_criteria": "exit_code == 0"
    },
    "custom:db-migrations": {
      "description": "Verify database migrations",
      "command": "npm run migrate:verify",
      "pass_criteria": "exit_code == 0"
    },
    "custom:i18n-complete": {
      "description": "Check translation completeness",
      "command": "i18n-validator",
      "pass_criteria": "missing_keys == 0"
    }
  }
}
```

## Action 実行

### 個別 Actions

特定の Actions をオンデマンドで実行:

```bash
# 単一の action を実行
hatcher action run test:unit

# 詳細出力で実行
hatcher action run lint:check --verbose

# カスタムパラメータで実行
hatcher action run coverage:verify --threshold=90
```

### Action グループ

関連する Actions を一緒に実行:

```bash
# すべてのテスト actions を実行
hatcher action run-group testing

# pre-commit actions を実行
hatcher action run-group pre-commit

# デプロイ検証を実行
hatcher action run-group deploy-checks
```

### Action 設定

設定で Action グループを定義:

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

## Action 結果

Actions は構造化されたフィードバックを提供:

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
  "suggestion": "Fix failing tests before committing"
}
```

## Autopilots との統合

Autopilots は品質チェックポイントとして Actions を使用:

```yaml
# Autopilot ワークフロー内
name: Feature Implementation
steps:
  - name: Generate code
    action: ai.create

  - name: Quality checkpoint
    action: run.actions
    actions:
      - lint:check # 合格必須
      - types:validate # 合格必須
      - test:unit # 合格必須
    fail_fast: true # 最初の失敗で停止

  - name: Commit if quality passed
    action: git.commit
    condition: ${steps.quality_checkpoint.passed}
```

## Action ポリシー

Actions が必須である場合を定義:

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

## ベストプラクティス

### Action 設計原則

1. **単一責任**: 各 Action は正確に1つのことを検証
2. **高速実行**: Actions は分ではなく秒で完了すべき
3. **明確な失敗メッセージ**: 失敗時に実行可能なフィードバックを提供
4. **決定論的**: 同じ入力が常に同じ結果を生成
5. **副作用なし**: Actions は検証するが変更しない

### パフォーマンス最適化

- **並列実行**: 独立した Actions を同時に実行
- **増分チェック**: 可能な場合、変更されたファイルのみを検証
- **キャッシング**: 変更されていないコードの結果をキャッシュ
- **早期終了**: 重大な違反で高速に失敗

### エラー処理

Actions は明確で実行可能なエラーメッセージを提供する必要があります:

```json
{
  "action": "lint:check",
  "status": "fail",
  "message": "Code quality issues detected",
  "fixes": {
    "automatic": "Run 'npm run lint:fix' to auto-fix 12 issues",
    "manual": "3 issues require manual intervention",
    "details": [
      {
        "file": "src/components/Header.vue",
        "line": 25,
        "rule": "no-unused-vars",
        "message": "'oldValue' is defined but never used"
      }
    ]
  }
}
```

## Constitutional 判断の力

Actions は、コード品質の守護者です — すべてのコードが満たさなければならない譲れない標準。それらは提案やガイドラインではありません。コードベースの憲法上の法律です。

検証 (Actions) を実装 (Autopilots) と戦略 (Playbooks) から分離することで、Hatcher は、コード品質を保証するための明確で保守可能でスケーラブルなシステムを作成します。

覚えておいてください: **Actions は作成または変更しません — 判断します。そして、その判断は最終的です。**

<PageCTA
  title="標準を自動的に強制"
  subtitle="コード品質を守る破れない検証ルールを作成"
  buttonText="Actions を設定"
  buttonLink="/ja/getting-started"
  buttonStyle="secondary"
  footer="妥協なし。例外なし。あなたの標準、強制。"
/>
