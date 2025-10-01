/**
 * Japanese locale data for Hatcher
 * Hatcherの日本語ロケールデータ
 *
 * This file contains all translatable content for the Japanese version of the site.
 * このファイルには、サイトの日本語版の翻訳可能なすべてのコンテンツが含まれています。
 */

const ja = {
  hero: {
    title: 'Constitutional IDE',
    tagline: 'あなたが寝ている間にコードを書くAIドローンの艦隊を指揮しましょう。軍事的な精度であなたのPlaybooksに従うAutopilotsを展開します。あなたはデバッガーではなく、司令官となるIDEです。',
    ctaText: '艦隊に参加',
    ctaLink: '/ja/philosophy',
    logoAlt: 'Hatcher DXエンジン'
  },

  features: [
    {
      title: '自律型AIドローンの展開',
      description: 'あなたのPlaybooksを実行するAIエージェントの艦隊を起動します。彼らはあなたが寝ている間にコーディング、テスト、リファクタリングを行います。完了したミッションで目覚めましょう。',
      link: '/ja/autopilots',
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="18" y="20" width="12" height="8" rx="1" stroke="currentColor" stroke-width="1.5"/>
              <path d="M18 24H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M30 24H38" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M24 20V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M24 28V36" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="10" cy="24" r="4" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="38" cy="24" r="4" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="24" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="24" cy="36" r="4" stroke="currentColor" stroke-width="1.5"/>
              <path d="M10 20V28" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <path d="M6 24H14" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <path d="M38 20V28" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <path d="M34 24H42" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <path d="M24 8V16" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <path d="M20 12H28" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <path d="M24 32V40" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <path d="M20 36H28" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <circle cx="24" cy="24" r="2" fill="currentColor"/>
            </svg>`
    },
    {
      title: 'Constitutional指揮統制',
      description: 'あなたのコーディング標準は不可侵の法律になります。すべてのドローンは軍事的な精度であなたのConstitutionに従います。不正なAIはありません。',
      link: '/ja/constitutional-engineering',
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="16" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="24" cy="24" r="12" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/>
              <circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="24" cy="24" r="3" fill="currentColor"/>
              <path d="M24 8V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M24 32V40" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M8 24H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M32 24H40" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>`
    },
    {
      title: 'ビジュアルミッション計画',
      description: 'ポイント＆クリックで目標を定義します。AI艦隊は曖昧なプロンプトではなく、視覚的なコマンドを理解します。誤解はゼロです。',
      link: '/ja/visual-to-code',
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="12" width="32" height="28" rx="2" stroke="currentColor" stroke-width="1.5"/>
              <path d="M14 18H34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M14 24H28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="20" cy="30" r="2" fill="currentColor"/>
              <circle cx="28" cy="30" r="2" fill="currentColor"/>
              <circle cx="36" cy="30" r="2" stroke="currentColor" stroke-width="1.5"/>
              <path d="M14 34L34 34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"/>
            </svg>`
    },
    {
      title: 'あなたの要塞、あなたのルール',
      description: '100%ローカル実行。Rust駆動のセキュリティ。あなたのコードは司令センターから決して離れません。完全な運用主権。',
      link: '/ja/architecture',
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 8L8 20V40H18V30H30V40H40V20L24 8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              <rect x="14" y="24" width="6" height="6" stroke="currentColor" stroke-width="1.5"/>
              <rect x="28" y="24" width="6" height="6" stroke="currentColor" stroke-width="1.5"/>
              <path d="M24 8V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="24" cy="20" r="2" fill="currentColor"/>
            </svg>`
    }
  ],

  cta: {
    title: '指揮を執る準備はできましたか？',
    headline: 'AI制御開発の未来を形作る最初の司令官の一人になりましょう。',
    subheadline: '艦隊が集結しています。早期の司令官は生涯優先アクセスを獲得します。',
    buttons: [
      {
        label: 'Discordに参加',
        description: '司令官のコミュニティと繋がる',
        link: 'https://discord.gg/cZ7PZvnMk4',
        primary: true,
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.1 19.6 7.9 18.9L3 20L4.3 16.1C3.2 14.8 2.5 13.1 2.5 11.5C2.8 6.8 7.1 3 12 3C16.97 3 21 7.582 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        label: '理念を読む',
        description: 'AI制御に関する私たちのビジョンを理解する',
        link: '/ja/philosophy',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5C12 5.67157 12.6716 5 13.5 5H20.5C21.3284 5 22 5.67157 22 6.5V19.5C22 20.3284 21.3284 21 20.5 21H13.5C12.6716 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 6.5C12 5.67157 11.3284 5 10.5 5H3.5C2.67157 5 2 5.67157 2 6.5V19.5C2 20.3284 2.67157 21 3.5 21H10.5C11.3284 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 5V21" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        label: 'GitHubにスター',
        description: 'オープンソースミッションをサポート',
        link: 'https://github.com/HatcherDX/dx-engine',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      }
    ]
  },

  footer: {
    tagline: 'The Constitutional IDE',
    legalText: '<a href="https://github.com/HatcherDX/dx-engine/blob/main/LICENSE">MITライセンス</a>の下でリリースされています。',
    attributionText: '<svg class="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> で構築 by <a href="https://github.com/chrissmejia">Chriss Mejía</a> and the <a href="/ja/community">Hatcherコミュニティ</a>。',
    copyrightText: '© {year} Hatcher DX. All rights reserved.',
    logoDark: '/logo-inline-dark.svg',
    logoLight: '/logo-inline-light.svg',
    logoAlt: 'Hatcher',
    columns: [
      {
        title: 'プロダクト',
        links: [
          { text: 'はじめに', href: '/ja/getting-started' },
          { text: 'Code HAT', href: '/ja/features-code-hat' },
          { text: 'Gen HAT', href: '/ja/features-gen-hat' },
          { text: 'Visual HAT', href: '/ja/features-visual-hat' },
          { text: 'Time Graph HAT', href: '/ja/features-time-graph-hat' }
        ]
      },
      {
        title: 'コンセプト',
        links: [
          { text: '理念', href: '/ja/philosophy' },
          { text: 'Playbooks', href: '/ja/playbooks-system' },
          { text: 'Autopilots', href: '/ja/autopilots-system' },
          { text: 'Time Graph', href: '/ja/pillars-time-graph' },
          { text: 'Universal Fabricator', href: '/ja/pillars-universal-fabricator' }
        ]
      },
      {
        title: 'コミュニティ',
        links: [
          { text: 'GitHub', href: 'https://github.com/HatcherDX/dx-engine' },
          { text: 'Discord', href: 'https://discord.gg/cZ7PZvnMk4' },
          { text: 'Twitter/X', href: 'https://twitter.com/HatcherDX' },
          { text: '貢献', href: '/ja/contributing' },
          { text: 'コミュニティガイドライン', href: '/ja/community' }
        ]
      },
      {
        title: 'リソース',
        links: [
          { text: 'アーキテクチャ', href: '/ja/architecture' },
          { text: 'ロードマップ', href: '/ja/roadmap' },
          { text: 'リリース', href: 'https://github.com/HatcherDX/dx-engine/releases' },
          { text: '問題を報告', href: 'https://github.com/HatcherDX/dx-engine/issues' },
          { text: 'Open Core Pact', href: '/ja/pact-pricing' }
        ]
      }
    ]
  },

  systems: {
    title: 'Command Deckシステム',
    subtitle: 'あなたをデバッガーから司令官に変える4つの実戦テスト済みシステム：',
    systems: [
      {
        title: 'Constitutional Playbooks',
        description: '戦闘計画を一度だけ書きます。あなたのコーディング標準とアーキテクチャパターンは、すべてのAIドローンが従わなければならない不変の法則になります。逸脱なし。解釈なし。純粋な実行のみ。',
        link: '/ja/playbooks-system',
        icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="8" width="28" height="36" rx="2" stroke="currentColor" stroke-width="1.5"/>
                <path d="M10 14H38" stroke="currentColor" stroke-width="1.5"/>
                <path d="M16 22H32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M16 28H32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M16 34H26" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <circle cx="34" cy="10" r="2" fill="currentColor"/>
                <path d="M34 8V40" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 3" opacity="0.3"/>
              </svg>`
      },
      {
        title: 'Time Graphエンジン',
        description: 'すべての操作のミッションコントロール。すべてのドローンのアクションを追跡し、失敗したミッションを巻き戻し、代替のタイムラインを探索します。あなたのコマンド履歴は永遠に保存されます。',
        link: '/ja/pillars-time-graph',
        icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16H40M8 24H40M8 32H40M16 8V40M24 8V40M32 8V40" stroke="currentColor" stroke-width="1" opacity="0.2"/>
                <path d="M12 36L20 28L28 32L36 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="36" r="3" fill="currentColor"/>
                <circle cx="20" cy="28" r="3" stroke="currentColor" stroke-width="1.5" fill="white"/>
                <circle cx="28" cy="32" r="3" stroke="currentColor" stroke-width="1.5" fill="white"/>
                <circle cx="36" cy="20" r="3" fill="currentColor"/>
                <path d="M28 32L32 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
                <circle cx="32" cy="24" r="2" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
              </svg>`
      },
      {
        title: 'Universal Fabricator',
        description: 'あなたの武器庫からあらゆる武器を展開します。2003年からの実戦テスト済みのC++モジュール？あなたの帝国を動かすCOBOLロジック？すべてのアセットがWebAssembly経由で展開準備完了です。',
        link: '/ja/pillars-universal-fabricator',
        icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 6L38 14V30L24 38L10 30V14L24 6Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <rect x="18" y="18" width="12" height="12" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="24" cy="24" r="3" fill="currentColor"/>
                <path d="M24 6V18M24 30V38" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
                <path d="M10 14L18 18M30 18L38 14" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
                <path d="M10 30L18 30M30 30L38 30" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
              </svg>`
      },
      {
        title: '要塞グレードのセキュリティ',
        description: 'あなたの司令センターは難攻不落です。Rustで鍛造された壁。クラウド曝露ゼロ。すべての操作はローカル。あなたの戦略、あなたのコード、あなたの主権。侵害は不可能です。',
        link: '/ja/philosophy',
        icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L8 12V22C8 31.2 15.2 39.6 24 42C32.8 39.6 40 31.2 40 22V12L24 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <rect x="20" y="22" width="8" height="10" rx="1" stroke="currentColor" stroke-width="1.5"/>
                <path d="M22 22V19C22 17.9 22.9 17 24 17C25.1 17 26 17.9 26 19V22" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="24" cy="27" r="1" fill="currentColor"/>
                <path d="M24 8L12 14V22C12 28 17 34 24 36" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
              </svg>`
      }
    ]
  },

  hats: {
    title: 'コアHATs',
    subtitle: '開発者は一日中「異なる帽子をかぶります」。Hatcherはすべての仕事のための専用HAT、つまりワークスペースを提供します：',
    hats: [
      {
        title: 'Code HAT',
        description: '純粋な創造のフローにいるときのための、Monacoを搭載した世界クラスのコードエディター。',
        link: '/ja/features-code-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="26,30 36,20 26,10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="14,10 4,20 14,30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        title: 'Gen HAT',
        description: 'プロンプトエンジニアリングインターフェース。AI艦隊との直接的なコミュニケーションライン。',
        link: '/ja/features-gen-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="10,28 18,20 10,12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="22" x2="30" y1="28" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>`
      },
      {
        title: 'Visual HAT',
        description: 'デザインとコードを橋渡しする、UIコンポーネントの設計と対話のためのワークスペース。',
        link: '/ja/features-visual-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20s5-12 16-12 16 12 16 12-5 12-16 12-16-12-16-12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        title: 'Time Graph HAT',
        description: '究極の監査ツール。プロジェクトの履歴の量子グラフですべての変更を視覚化します。',
        link: '/ja/features-time-graph-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 26 L17 22" stroke="currentColor" stroke-width="1.5"/>
                <path d="M18 18 L24 14" stroke="currentColor" stroke-width="1"/>
                <circle cx="26" cy="28" r="6" stroke="currentColor" fill="none" stroke-width="1.5"/>
                <circle cx="14" cy="20" r="4.5" stroke="currentColor" fill="none" stroke-width="1.3"/>
                <circle cx="25" cy="12" r="3" stroke="currentColor" fill="none" stroke-width="1"/>
              </svg>`
      }
    ]
  },

  metrics: {
    title: '数字で見る',
    metrics: [
      {
        number: '100%',
        label: 'テストカバレッジ',
        description: 'AIによって自動化され、あなたによって検証されます。自信を持って出荷します。'
      },
      {
        number: '0%',
        label: 'クラウド依存度',
        description: 'あなたの知的財産はあなたのものです。データはマシンから離れません。'
      },
      {
        number: '∞',
        label: '言語サポート',
        description: 'COBOLからRustまでWebAssembly経由で。機能するものを使用します。',
        isInfinity: true
      }
    ]
  },

  admiral: {
    title: '提督について',
    name: 'Chriss Mejía',
    jobTitle: '創業者＆主席システムアーキテクト',
    photoUrl: '/chriss.jpg',
    photoAlt: 'Chriss Mejía',
    mission: '私のエンジニアリングの旅は20年以上にわたり、シリコンバレーのパイオニアAIスタートアップの副社長を務めることから、YCバックベンチャーのMVP構築、そして300人規模のエンタープライズ部門をリードすることまで、多岐にわたります。現在、開発の次の10年を定義するツールを構築しています。',
    quote: 'ソフトウェアの未来は開発者を置き換えることではありません。<br><span class="quote-emphasis">開発者に指揮権を与えることです。</span>',
    stats: [
      {
        number: '22',
        label: '年のシステムエンジニアリング'
      },
      {
        number: '300+',
        label: 'エンジニアをリード'
      },
      {
        number: 'YC',
        label: 'MVPビルダー',
        primary: true
      }
    ]
  },

  showcase: {
    scrollText: 'スクロールして探索'
  }
}

export default ja

export type LocaleData = typeof ja
