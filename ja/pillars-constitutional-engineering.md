# Constitutional Engineering

> **AI は憲法の下で動作しなければなりません。絶対に。**

## 原則

従来のソフトウェア開発では、品質と一貫性を維持するために、規約、スタイルガイド、コードレビューに依存しています。しかし、AI が方程式に入ると、これらの非公式なガードレールは危険なほど不十分になります。AI はニュアンスを理解しません — 明示的で強制可能なルールが必要です。

Constitutional Engineering は、開発環境におけるすべての AI インタラクションを管理する不変のルールセットを定義する実践です。これらは提案やガイドラインではありません — 違反できないアーキテクチャ上の制約です。

## 仕組み

すべての AI 提案は、複数の検証層を通過します:

```
AI 提案 → Constitutional 検証 → コンテキストチェック → アクション検証 → 人間レビュー
```

いずれかの層が失敗すると、提案は準拠するように変更されるか、完全に拒否されます。

## Hatcher での実装

### Playbooks: プロジェクトの法律

Playbooks は、以下を定義する実行可能な仕様です:

- 従わなければならないコードパターン
- 違反できないアーキテクチャ決定
- 越えられないセキュリティ境界
- 維持しなければならないパフォーマンスしきい値

```yaml
# Playbook の例
name: API Security Constitution
rules:
  - no_public_endpoints_without_auth
  - all_inputs_must_be_validated
  - rate_limiting_required
  - audit_log_all_mutations
```

このように考えてください: **Playbooks は法律であり、Hatcher Actions は警察です**。Playbooks (.yaml) は、人間が読める方法でルールが何であるかを宣言します。Actions (.ts) は、リアルタイムでそれらのルールを強制するための実行可能なロジックを提供します。

### Hatcher Actions: リアルタイム強制

Actions は強制メカニズムです — AI の提案をインターセプトし、コードベースに到達する前に憲法に対して検証します。

```typescript
// Action の例
export const validateAPIEndpoint: HatcherAction = {
  trigger: 'api.endpoint.created',
  validate: (code) => {
    // 認証をチェック
    if (!hasAuthDecorator(code)) {
      return reject('All endpoints must have authentication')
    }
    // 入力検証をチェック
    if (!hasInputValidation(code)) {
      return reject('All inputs must be validated')
    }
    return approve(code)
  },
}
```

## Constitutional Engineering の力

### 1. 予測可能な AI 動作

AI は明示的なルールによって制約されるため、予測可能になります。何ができて何ができないかがわかります。

### 2. 規模でのチーム調整

すべての開発者、人間または AI は、同じ憲法に従います。「スタイル戦争」や一貫性のないパターンはもうありません。

### 3. 設計によるコンプライアンス

規制要件は憲法ルールになります。GDPR、HIPAA、SOC2 — エンコードされ、自動的に強制されます。

### 4. カオスなしの進化

プロジェクトが進化するにつれて、憲法を更新します。すべての将来の AI インタラクションは、新しいルールに即座に適応します。

### 5. パラダイム全体の統一ガバナンス

憲法は、新しく生成された UI コードだけに適用されるのではありません。[The Universal Fabricator](/ja/pillars-universal-fabricator) で実行されているレガシービジネスロジックと AI がどのように相互作用するかを含む、システム全体がどのように動作するかを管理します。これにより、古いものと新しいものの両方に対する単一の統一された制御プレーンが提供されます。

## 実世界の例: セキュリティ憲法

セキュリティが最重要であるフィンテックアプリケーションを考えてみましょう:

```yaml
constitution:
  data_handling:
    - encrypt_all_pii_at_rest
    - no_pii_in_logs
    - tokenize_payment_data

  authentication:
    - multi_factor_required
    - session_timeout_15_minutes
    - jwt_rotation_hourly

  api_design:
    - versioned_endpoints_only
    - deprecation_notice_90_days
    - backward_compatibility_required
```

この憲法が設置されていると、AI は以下のことができません:

- 機密データをログに記録するコードを生成
- 適切な認証なしでエンドポイントを作成
- 後方互換性を壊す変更を提案

## ルールを超えて: 文化のエンコーディング

Constitutional Engineering は、技術的な制約だけではありません — エンジニアリング文化を開発プロセスにエンコードすることです。あなたの価値観、優先事項、譲れないものが、システム自体の一部になります。

これが文化をスケールする方法です。これが、10人の開発者でも1000人でも、人間でも AI でも、あなたが決定した方法でソフトウェアを構築することを保証する方法です。

## 始め方

1. **コア原則を定義**: 譲れないものは何ですか?
2. **最初の Playbook を作成**: 1つの重要な領域(セキュリティ、パフォーマンスなど)から始める
3. **強制 Actions を書く**: ルールをコードに変換
4. **反復と拡張**: 学習に応じて憲法を成長させる

憲法は石に刻まれていません — それはあなたの理解とともに進化します。しかし、どの瞬間でも、それは法律であり、明示的な承認なしに何もそれを通過しません。

---

_Constitutional Engineering は、AI を予測不可能な神託から、ルールを尊重し、パターンに従い、標準を支持する規律あるチームメンバーに変換します。毎回。_

<PageCTA
  title="開発憲法を定義"
  subtitle="すべての AI と開発者が従わなければならない破れないルールを作成"
  buttonText="Playbooks を構築"
  buttonLink="/ja/playbooks-system"
  buttonStyle="secondary"
  footer="あなたの標準。あなたのルール。自動的に強制。"
/>
