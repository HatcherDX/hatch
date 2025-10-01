---
title: "Contributing | Hatcher オープンソースコミュニティに参加"
description: "Hatcher IDE、オープンソース AI 開発プラットフォームへの貢献方法を学びます。制御された AI 開発ツールへの貢献のためのセットアップガイド、コーディング標準、コミュニティガイドラインを見つけてください。"
---

# Hatcher への貢献

Hatcher への貢献に興味を持っていただきありがとうございます! あなたは、AI 時代のソフトウェア開発の未来を構築する運動に参加しています — 開発者が AI の増幅の力を活用しながら絶対的な制御を維持する未来。このガイドは、始めるための実用的なステップを提供しますが、まだの場合は、[**Philosophy**](/ja/philosophy)を読んで、作業の「なぜ」を理解することをお勧めします。

Hatcher に貢献することで、単にコードを書くだけでなく、人類が AI 時代にソフトウェアを構築する方法を定義するのを助けています。バグ修正、機能、またはドキュメント改善であっても、すべての貢献は、Controlled Amplification のミッションを前進させます。

## Code of Conduct

このプロジェクトに参加することで、[Code of Conduct](CODE_OF_CONDUCT.md)に従うことに同意します。貢献する前にお読みください。

## 始め方

### 開発セットアップ

1. **フォークとクローン**

   ```bash
   git clone https://github.com/your-username/dx-engine.git
   cd dx-engine
   ```

2. **依存関係のインストール**

   ```bash
   pnpm install
   ```

3. **開発サーバーの起動**
   ```bash
   pnpm dev
   ```

### プロジェクト構造

```
dx-engine/
├── apps/                           # アプリケーションパッケージ
│   ├── electron/                   # メイン Electron プロセス
│   ├── web/                       # レンダラープロセス (Vue 3 + TypeScript)
│   ├── preload/                   # Electron のプリロードスクリプト
│   └── docs/                      # VitePress ドキュメントサイト
├── universal/                      # 共有ライブラリとシステム
│   ├── terminal-system/           # ターミナルエミュレーションと管理
│   ├── storage/                   # ストレージ抽象化層
│   ├── git-genius/               # Git 操作とタイムライン
│   ├── shared-rendering/         # 共有レンダリングユーティリティ
│   └── shared-utils/             # 共通ユーティリティ
├── tooling/                       # 開発およびビルドツール
│   ├── vite-plugin/              # カスタム Vite プラグイン
│   ├── translation-system/       # i18n と翻訳ツール
│   └── puppeteer-google-translate/ # 自動翻訳
├── scripts/                       # ビルド、テスト、ユーティリティスクリプト
├── brand/                         # ブランドアセット (ロゴ、アイコンなど)
└── types/                         # 共有 TypeScript 型定義
```

## 貢献の方法

### バグの報告

バグを報告する際は、以下を含めてください:

- **明確な説明**: 何が起こったか vs. 何を期待したか
- **再現手順**: 問題を再現するための詳細な手順
- **環境**: OS、Node.js バージョン、pnpm バージョン
- **スクリーンショット**: 該当する場合、視覚的な証拠を含める

問題を作成する際は、[バグレポートテンプレート](.github/ISSUE_TEMPLATE/bug_report.md)を使用してください。

### 機能リクエスト

機能リクエストを歓迎します! 以下を含めてください:

- **使用例**: なぜこの機能が必要か?
- **提案されたソリューション**: どのように機能すべきか?
- **代替案**: 他にどのようなアプローチを検討しましたか?

[機能リクエストテンプレート](.github/ISSUE_TEMPLATE/feature_request.md)を使用してください。

### コード貢献

#### 始める前に

1. **既存の Issue をチェック**: 関連する issue または機能リクエストを探す
2. **大きな変更を議論**: issue を開いて重要な変更を議論する
3. **小さく始める**: 小さく、焦点を絞った貢献から始める

#### 開発ワークフロー

1. **ブランチを作成**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **変更を加える**
   - コーディング標準に従う (以下を参照)
   - 新機能のテストを書く
   - 必要に応じてドキュメントを更新

3. **変更をテスト**

   ```bash
   pnpm build
   pnpm test
   ```

4. **変更をコミット**

   ```bash
   git commit -m "feat: add amazing new feature"
   ```

   [Conventional Commits](https://conventionalcommits.org/) 形式に従います。

5. **プッシュして PR を作成**
   ```bash
   git push origin feature/your-feature-name
   ```

## コーディング標準

Hatcher は、プロジェクト全体で一貫性、保守性、高品質なコードを保証するために、厳格なコーディング標準に従っています。

**📋 [完全なコーディング標準ガイド](./coding-standards.md)**

### クイックリファレンス

**TypeScript**

- strict モードを有効にしたすべての新しいコードに TypeScript を使用
- オブジェクトシェイプには types よりも interfaces を優先
- 変数と関数に意味のある説明的な名前を使用
- すべての公開 API に JSDoc コメントを含める

**Vue.js**

- `<script setup>` 構文で Composition API を使用
- TypeScript インターフェースで props と emits を定義
- 再利用可能なロジックには composables を優先
- 単一ファイルコンポーネント構造に従う: script → template → style

**スタイリング**

- コンポーネント固有の CSS には scoped スタイルを使用
- クラス命名には BEM 方法論に従う
- テーマには CSS カスタムプロパティを使用
- レイアウトには flexbox と CSS Grid を優先

**Git 規約**

- [Conventional Commits](https://conventionalcommits.org/) 形式に従う
- 説明的なブランチ名を使用: `feature/`、`fix/`、`docs/`、`refactor/`
- コミットをアトミックに保ち、単一の変更に焦点を当てる

### コード品質ツール

標準を強制するために自動化ツールを使用します:

```bash
# コードスタイル問題をリントして修正
pnpm lint:fix

# 型チェック
pnpm typecheck

# すべてのテストを実行
pnpm test

# コードをフォーマット
pnpm format
```

### Pre-commit Hooks

Husky は各コミットの前に自動チェックを実行します:

- コード品質のための ESLint
- TypeScript コンパイル
- フォーマットのための Prettier
- クリティカルパスの単体テスト

詳細なガイドライン、例、ベストプラクティスについては、[コーディング標準](./coding-standards.md)ドキュメントを参照してください。

## ドキュメント

### ドキュメントの種類

- **コードコメント**: 複雑なロジックを説明
- **README ファイル**: 概要とセットアップ手順
- **API ドキュメント**: 公開インターフェースを文書化
- **ユーザーガイド**: エンドユーザー向けのハウツーガイド

### 執筆ガイドライン

- 明確で簡潔な言語を使用
- コード例を含める
- ドキュメントをコード変更と同期させる
- すべてのコード例をテスト

## Pull Request プロセス

### 提出前

- [ ] コードがプロジェクト標準に従っている
- [ ] テストがローカルで合格
- [ ] ドキュメントが更新されている
- [ ] 変更が焦点を絞ってアトミック

### PR 説明テンプレート

```markdown
## 説明

変更の簡単な説明

## 変更の種類

- [ ] バグ修正
- [ ] 新機能
- [ ] 破壊的変更
- [ ] ドキュメント更新

## テスト

- [ ] 単体テストが追加/更新された
- [ ] 統合テストが追加/更新された
- [ ] 手動テストが完了

## スクリーンショット (該当する場合)

UI 変更の前後のスクリーンショットを含める
```

### レビュープロセス

1. **自動チェック**: CI/CD が合格する必要がある
2. **コードレビュー**: 少なくとも1人のメンテナーレビュー
3. **テスト**: 開発環境で変更がテストされる
4. **ドキュメント**: ドキュメントが更新されていることを確認
5. **マージ**: 承認された PR を squash してマージ

## リリースプロセス

### バージョニング

[セマンティックバージョニング](https://semver.org/)に従います:

- **MAJOR**: 破壊的変更
- **MINOR**: 新機能 (後方互換)
- **PATCH**: バグ修正 (後方互換)

### リリースワークフロー

1. **機能フリーズ**: 新機能の受け入れを停止
2. **テスト**: 包括的なテストフェーズ
3. **ドキュメント**: 変更ログとドキュメントを更新
4. **リリース**: タグ付きリリースを作成
5. **アナウンス**: コミュニティに変更を伝える

## コミュニティ

### コミュニケーションチャネル

- **GitHub Issues**: バグレポートと機能リクエスト
- **GitHub Discussions**: 一般的な質問とアイデア
- **Discord**: コミュニティとのリアルタイムチャット
- **Twitter**: 更新のために [@HatcherDX](https://twitter.com/HatcherDX) をフォロー

### コミュニティガイドライン

- **敬意を持つ**: すべての人を敬意を持って扱う
- **建設的である**: 問題ではなく、ソリューションに焦点を当てる
- **忍耐強くある**: 私たちは皆ボランティアであることを覚えておく
- **助けになる**: 知識を共有し、他の人を助ける

## 認識

すべての貢献に感謝します! 貢献者は以下で認識されます:

- **CONTRIBUTORS.md**: すべてのプロジェクト貢献者のリスト
- **リリースノート**: 主要な貢献が強調される
- **ソーシャルメディア**: コミュニティの貢献を特集

## 開発リソース

### 有用なリンク

- [Vue.js Documentation](https://vuejs.org/)
- [Electron Documentation](https://electronjs.org/)
- [TypeScript Handbook](https://typescriptlang.org/)
- [Vite Documentation](https://vitejs.dev/)

### 開発ツール

- **VS Code**: Vue と TypeScript 拡張機能を備えた推奨エディター
- **Vue DevTools**: Vue アプリケーションのデバッグ用ブラウザ拡張機能
- **Electron DevTools**: 組み込みデバッグツール

## 質問がありますか?

貢献について質問がある場合:

1. 既存の [GitHub Discussions](https://github.com/HatcherDX/dx-engine/discussions) を確認
2. [Discord コミュニティ](https://discord.gg/hatcher)に参加
3. 新しいディスカッションまたは issue を作成

Hatcher への貢献ありがとうございます! 一緒に、AI 支援開発の未来を構築しています。

<PageCTA
  title="あなたの足跡を残す準備はできましたか?"
  subtitle="AI 時代の Constitutional IDE を構築するコミュニティに参加"
  buttonText="貢献を始める"
  buttonLink="https://github.com/HatcherDX/dx-engine/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
  buttonStyle="secondary"
  footer="すべての貢献が開発の未来を形作ります"
/>
