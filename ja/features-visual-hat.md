---
title: Visual HAT - スクリーンショットからシステムへ
description: 任意のビジュアル入力を機能的なコードに変換。モックアップからスクリーンショット、ホワイトボードのドローイングまで - 見ることができれば、Visual HATはそれを構築できます。
---

# <DocIcon type="visual" inline /> Visual HAT

> **柱の接続：** Visual HATは、[「テキストによる推測からビジュアルな意図へ」](/ja/philosophy#pillar-1-from-textual-guesswork-to-visual-intent)という私たちの哲学を体現し、[Visual-to-Code Bridge](/ja/visual-to-code)を実装してAIコミュニケーションの曖昧さを排除します。

## スクリーンショットからシステムへ

Visual HATは、ビジョンと実装の間の橋です。任意のビジュアル - スクリーンショット、モックアップ、競合他社のサイト、さらにはナプキンのスケッチ - を指し示すと、それが機能的で本番対応のコードに変換されるのを見ます。

### 「これのように見せて」の終わり

もはや：

- デザインに一致させるためのピクセルプッシング
- 「2px左に移動できますか？」
- 同じレイアウトを10回説明
- すでに他の場所に存在するものを再構築

Visual HATに欲しいものを示すだけです。それが構築します。完璧に。

## どのように機能するか

### 1. キャプチャ

任意のものを指し示す：

- 既存のアプリのスクリーンショット
- Figma/Sketchデザイン
- 競合他社のウェブサイト
- 手書きのワイヤーフレーム
- さらにはホワイトボードの写真

### 2. 分析

Visual HATは次を理解します：

- レイアウト構造と階層
- コンポーネントパターン
- インタラクションモデル
- デザインシステムルール
- レスポンシブ動作

### 3. 生成

本番対応のコードを取得：

- セマンティックHTML/JSX
- あなたのフレームワークでスタイル化
- デフォルトでレスポンシブ
- アクセシビリティ含む
- アニメーション推論

## 実世界の魔法

### シナリオ1：競争力のあるパリティ

**課題**：「私たちのダッシュボードをStripeのように見せるが、私たちのブランドで」

**Visual HATソリューション**：

1. Stripeのダッシュボードをスクリーンショット
2. HATがレイアウトパターンを抽出
3. あなたのデザインシステムを適用
4. あなたの技術スタックコードを生成
5. あなたのコンポーネントライブラリを維持

**結果**：数か月ではなく、数時間でStripe品質のUI。

### シナリオ2：デザインからコードへのパイプライン

**課題**：デザイナーがFigmaを更新し、開発者が実装にスクランブル。

**Visual HATソリューション**：

```yaml
pipeline: figma-sync
trigger: design-updated
actions:
  - extract: components-changed
  - generate: react-components
  - test: visual-regression
  - pr: auto-create
```

**結果**：デザインが自動的にコードになります。デザイナーは正確なビジョンを見ます。開発者はロジックに集中します。

### シナリオ3：レガシーUIの近代化

**課題**：古代のjQuery UIをモダンなReactにする必要があります。

**Visual HATソリューション**：

1. 既存のUIをスクリーンショット
2. HATがUIパターンを特定
3. モダンなコンポーネントにマップ
4. React同等物を生成
5. 正確な機能を保存

**結果**：仕様なしでピクセル完璧な近代化。

## 高度な機能

### インタラクション検出

Visual HATは静的レイアウトを見るだけではありません：

- **ホバー状態**：デザインバリエーションから推論
- **アニメーション**：モーションパターンを検出
- **マイクロインタラクション**：微妙な動作を再現
- **状態変化**：UIフローを理解

### デザインシステム統合

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

### マルチプラットフォーム生成

1つのスクリーンショット、複数の出力：

- **Web**：React、Vue、Angular
- **モバイル**：React Native、Flutter
- **デスクトップ**：Electron、Tauri
- **メール**：MJMLテンプレート
- **印刷**：PDFレイアウト

## 他のHATsとの統合

Visual HATはすべてを増幅します：

- **Code HATと**：ビジュアル → 即座に機能的
- **Gen HATと**：キャプチャされたデザインを強化
- **Time Graph HATと**：ビジュアルの進化を追跡

## コマンド例

```bash
# スクリーンショットをコードに変換
hatcher visual convert --input screenshot.png --output react

# Figmaをコードベースに同期
hatcher visual sync --figma-url "..." --target "./src/components"

# デザインシステムを抽出
hatcher visual extract-system --source "competitor.com" --output "ds.yaml"

# レスポンシブバリアントを生成
hatcher visual responsive --input "desktop.png" --breakpoints "mobile,tablet"
```

## ビジュアルワークフロー革命

### Visual HAT以前

1. デザイナーがモックアップを作成（2日）
2. 開発者がデザインを解釈（1日）
3. 詳細についてのやり取り（2日）
4. レスポンシブ適応（1日）
5. アクセシビリティ追加（1日）
6. 最終仕上げ（1日）

**合計：8日**

### Visual HATと

1. デザイナーがモックアップを作成（2日）
2. Visual HATがコードを生成（5分）
3. 開発者がロジックを追加（2時間）

**合計：2.5日**

## パターン認識ライブラリ

Visual HATはすべての変換から学習します：

- **一般的なパターン**：ヘッダー、フッター、ナビゲーション
- **業界標準**：eコマース、SaaS、コンテンツサイト
- **文化的バリエーション**：RTLレイアウト、アジアのタイポグラフィ
- **アクセシビリティパターン**：スクリーンリーダー最適化

## ビジュアル解放

Visual HATはデザインをスキップすることではありません。それは**完璧な実装**です：

- もはや実装のドリフトがない
- もはや「ほぼモックアップのよう」がない
- もはやレスポンシブの推測がない
- もはやアクセシビリティの後付けがない

デザイナーはデザインします。Visual HATは実装します。完璧に。

---

コードでビジョンを見る準備はできましたか？[Visual HATを始める](/ja/getting-started#visual-hat)

<PageCTA
  title="ビジョンから完璧なコードへ"
  subtitle="任意のデザインをピクセル完璧でレスポンシブな実装に即座に変換"
  buttonText="Visual HATを試す"
  buttonLink="/ja/getting-started"
  buttonStyle="secondary"
  footer="一度デザイン。完璧に実装。"
/>
