import { defineConfig } from 'vitepress'

const baseUrl = '' // Using custom domain, no base path needed

// Function to generate navigation for any language
function generateNavigation(langCode) {
  const baseNav = [
    { textKey: 'Home', link: '/' },
    { textKey: 'Getting Started', link: '/getting-started' },
    { textKey: 'Philosophy', link: '/philosophy' },
    { textKey: 'Community', link: '/community-vision' },
  ]

  const baseSidebar = [
    {
      textKey: 'Introduction',
      items: [
        { textKey: 'What is Hatcher?', link: '/introduction' },
        { textKey: 'The Counter-Narrative', link: '/counter-narrative' },
        { textKey: 'Getting Started', link: '/getting-started' },
      ],
    },
    {
      textKey: 'The Vision',
      items: [{ textKey: 'The Philosophy', link: '/philosophy' }],
    },
    {
      textKey: 'The Four Pillars',
      items: [
        { textKey: 'Overview', link: '/pillars' },
        { textKey: 'Constitutional Engineering', link: '/constitutional-engineering' },
        { textKey: 'The Time Graph', link: '/pillars-time-graph' },
        { textKey: 'AI Under Command', link: '/pillars-ai-under-command' },
        { textKey: 'The Universal Fabricator', link: '/pillars-universal-fabricator' },
      ],
    },
    {
      textKey: 'Product Features',
      items: [
        { textKey: 'The HATs System', link: '/core-hats' },
        { textKey: 'Visual HAT', link: '/features-visual-hat' },
        { textKey: 'Code HAT', link: '/features-code-hat' },
        { textKey: 'Gen HAT', link: '/features-gen-hat' },
        { textKey: 'Time Graph HAT', link: '/features-time-graph-hat' },
      ],
    },
    {
      textKey: 'Autopilots',
      items: [
        { textKey: 'Manifesto', link: '/autopilots' },
        { textKey: 'The Autopilot System', link: '/autopilots-system' },
        { textKey: 'The Playbooks System', link: '/playbooks-system' },
        { textKey: 'The Actions System', link: '/actions-system' },
      ],
    },
    {
      textKey: 'Community',
      items: [
        { textKey: 'Join the Guild', link: '/community-vision' },
        { textKey: 'For Contributors', link: '/contributing' },
      ],
    },
    {
      textKey: 'Technical Docs',
      items: [
        { textKey: 'Architecture', link: '/architecture' },
        { textKey: 'Coding Standards', link: '/coding-standards' },
        { textKey: 'Roadmap', link: '/roadmap' },
      ],
    },
  ]

  // Text translations for navigation
  const translations = {
    en: {
      'Home': 'Home',
      'Getting Started': 'Getting Started',
      'Philosophy': 'Philosophy',
      'Community': 'Community',
      'Introduction': 'Introduction',
      'What is Hatcher?': 'What is Hatcher?',
      'The Counter-Narrative': 'The Counter-Narrative',
      'The Vision': 'The Vision',
      'The Philosophy': 'The Philosophy',
      'The Four Pillars': 'The Four Pillars',
      'Overview': 'Overview',
      'Constitutional Engineering': 'Constitutional Engineering',
      'The Time Graph': 'The Time Graph',
      'AI Under Command': 'AI Under Command',
      'The Universal Fabricator': 'The Universal Fabricator',
      'Product Features': 'Product Features',
      'The HATs System': 'The HATs System',
      'Visual HAT': 'Visual HAT',
      'Code HAT': 'Code HAT',
      'Gen HAT': 'Gen HAT',
      'Time Graph HAT': 'Time Graph HAT',
      'Autopilots': 'Autopilots',
      'Manifesto': 'Manifesto',
      'The Autopilot System': 'The Autopilot System',
      'The Playbooks System': 'The Playbooks System',
      'The Actions System': 'The Actions System',
      'Join the Guild': 'Join the Guild',
      'For Contributors': 'For Contributors',
      'Technical Docs': 'Technical Docs',
      'Architecture': 'Architecture',
      'Contributing Guide': 'Contributing Guide',
      'Coding Standards': 'Coding Standards',
      'Roadmap': 'Roadmap',
    },
    es: {
      'Home': 'Inicio',
      'Getting Started': 'Comenzar',
      'Philosophy': 'Filosofía',
      'Community': 'Comunidad',
      'Join the Guild': 'Únete al Gremio',
      'Introduction': 'Introducción',
      'What is Hatcher?': '¿Qué es Hatcher?',
      'The Counter-Narrative': 'La Contra-Narrativa',
      'The Vision': 'La Visión',
      'The Philosophy': 'La Filosofía',
      'The Four Pillars': 'Los Cuatro Pilares',
      'Overview': 'Resumen',
      'Constitutional Engineering': 'Ingeniería Constitucional',
      'The Time Graph': 'El Gráfico del Tiempo',
      'AI Under Command': 'IA Bajo Comando',
      'The Universal Fabricator': 'El Fabricador Universal',
      'Product Features': 'Características del Producto',
      'The HATs System': 'El Sistema de HATs',
      'Visual HAT': 'Visual HAT',
      'Code HAT': 'Code HAT',
      'Gen HAT': 'Gen HAT',
      'Time Graph HAT': 'Time Graph HAT',
      'Autopilots': 'Autopilots',
      'Manifesto': 'Manifiesto',
      'The Autopilot System': 'El Sistema Autopilot',
      'The Playbooks System': 'El Sistema de Playbooks',
      'The Actions System': 'El Sistema de Acciones',
      'For Contributors': 'Para Contribuidores',
      'Architecture': 'Arquitectura',
      'Contributing Guide': 'Guía de Contribución',
      'Coding Standards': 'Estándares de Código',
      'Roadmap': 'Plan de Ruta',
    },
    fr: {
      'Home': 'Accueil',
      'Getting Started': 'Commencer',
      'Philosophy': 'Philosophie',
      'Community': 'Communauté',
      'Join the Guild': 'Rejoindre la Guilde',
      'Introduction': 'Introduction',
      'What is Hatcher?': 'Qu\'est-ce que Hatcher ?',
      'The Counter-Narrative': 'La Contre-Narrative',
      'The Vision': 'La Vision',
      'The Philosophy': 'La Philosophie',
      'The Four Pillars': 'Les Quatre Piliers',
      'Overview': 'Aperçu',
      'Constitutional Engineering': 'Ingénierie Constitutionnelle',
      'The Time Graph': 'Le Graphe Temporel',
      'AI Under Command': 'IA Sous Commandement',
      'The Universal Fabricator': 'Le Fabricateur Universel',
      'Product Features': 'Fonctionnalités du Produit',
      'The HATs System': 'Le Système HATs',
      'Visual HAT': 'Visual HAT',
      'Code HAT': 'Code HAT',
      'Gen HAT': 'Gen HAT',
      'Time Graph HAT': 'Time Graph HAT',
      'Autopilots': 'Autopilots',
      'Manifesto': 'Manifeste',
      'The Autopilot System': 'Le Système Autopilot',
      'The Playbooks System': 'Le Système Playbooks',
      'The Actions System': 'Le Système d\'Actions',
      'For Contributors': 'Pour les Contributeurs',
      'Architecture': 'Architecture',
      'Contributing Guide': 'Guide de Contribution',
      'Coding Standards': 'Standards de Code',
      'Roadmap': 'Feuille de Route',
    },
    'zh-cn': {
      'Home': '首页',
      'Getting Started': '开始使用',
      'Philosophy': '哲学',
      'Community': '社区',
      'Introduction': '介绍',
      'What is Hatcher?': '什么是 Hatcher？',
      'The Counter-Narrative': '反叙事',
      'The Vision': '愿景',
      'The Philosophy': '哲学',
      'The Four Pillars': '四大支柱',
      'Overview': '概述',
      'Constitutional Engineering': '宪法工程',
      'The Time Graph': '时间图',
      'AI Under Command': '指挥下的AI',
      'The Universal Fabricator': '通用制造器',
      'Product Features': '产品功能',
      'The HATs System': 'HATs系统',
      'Visual HAT': '可视化HAT',
      'Code HAT': '代码HAT',
      'Gen HAT': '生成HAT',
      'Time Graph HAT': '时间图HAT',
      'Autopilots': '自动驾驶系统',
      'Manifesto': '宣言',
      'The Autopilot System': '自动驾驶系统',
      'The Playbooks System': 'Playbooks 系统',
      'The Actions System': '动作系统',
      'For Contributors': '贡献者指南',
      'Architecture': '架构',
      'Contributing Guide': '贡献指南',
      'Coding Standards': '编码标准',
      'Roadmap': '路线图',
    },
    de: {
      'Home': 'Startseite',
      'Getting Started': 'Erste Schritte',
      'Philosophy': 'Philosophie',
      'Community': 'Gemeinschaft',
      'Introduction': 'Einführung',
      'What is Hatcher?': 'Was ist Hatcher?',
      'The Counter-Narrative': 'Die Gegenerzählung',
      'The Vision': 'Die Vision',
      'The Philosophy': 'Die Philosophie',
      'The Four Pillars': 'Die Vier Säulen',
      'Overview': 'Übersicht',
      'Constitutional Engineering': 'Verfassungstechnik',
      'The Time Graph': 'Der Zeitgraph',
      'AI Under Command': 'KI unter Befehl',
      'The Universal Fabricator': 'Der Universelle Fabrikator',
      'Product Features': 'Produktfunktionen',
      'The HATs System': 'Das HATs-System',
      'Visual HAT': 'Visueller HAT',
      'Code HAT': 'Code HAT',
      'Gen HAT': 'Generativer HAT',
      'Time Graph HAT': 'Zeitgraph HAT',
      'Autopilots': 'Autopiloten',
      'Manifesto': 'Manifest',
      'The Autopilot System': 'Das Autopilot-System',
      'The Playbooks System': 'Das Playbooks-System',
      'The Actions System': 'Das Aktionssystem',
      'For Contributors': 'Für Mitwirkende',
      'Architecture': 'Architektur',
      'Contributing Guide': 'Beitragsleitfaden',
      'Coding Standards': 'Codierungsstandards',
      'Roadmap': 'Roadmap',
    },
    ja: {
      'Home': 'ホーム',
      'Getting Started': 'はじめに',
      'Philosophy': '哲学',
      'Community': 'コミュニティ',
      'Introduction': '紹介',
      'What is Hatcher?': 'Hatcherとは？',
      'The Counter-Narrative': 'カウンターナラティブ',
      'The Vision': 'ビジョン',
      'The Philosophy': '哲学',
      'The Four Pillars': '4つの柱',
      'Overview': '概要',
      'Constitutional Engineering': '憲法工学',
      'The Time Graph': 'タイムグラフ',
      'AI Under Command': '指揮下のAI',
      'The Universal Fabricator': 'ユニバーサル製造機',
      'Product Features': '製品機能',
      'The HATs System': 'HATsシステム',
      'Visual HAT': 'ビジュアルHAT',
      'Code HAT': 'コードHAT',
      'Gen HAT': '生成HAT',
      'Time Graph HAT': 'タイムグラフHAT',
      'Autopilots': 'オートパイロット',
      'Manifesto': 'マニフェスト',
      'The Autopilot System': 'オートパイロットシステム',
      'The Playbooks System': 'プレイブックシステム',
      'The Actions System': 'アクションシステム',
      'For Contributors': '貢献者向け',
      'Architecture': 'アーキテクチャ',
      'Contributing Guide': '貢献ガイド',
      'Coding Standards': 'コーディング規約',
      'Roadmap': 'ロードマップ',
    },
    ko: {
      'Home': '홈',
      'Getting Started': '시작하기',
      'Philosophy': '철학',
      'Community': '커뮤니티',
      'Introduction': '소개',
      'What is Hatcher?': 'Hatcher란?',
      'The Counter-Narrative': '반대 서사',
      'The Vision': '비전',
      'The Philosophy': '철학',
      'The Four Pillars': '네 가지 기둥',
      'Overview': '개요',
      'Constitutional Engineering': '헌법 공학',
      'The Time Graph': '시간 그래프',
      'AI Under Command': '지휘 하의 AI',
      'The Universal Fabricator': '범용 제조기',
      'Product Features': '제품 기능',
      'The HATs System': 'HATs 시스템',
      'Visual HAT': '비주얼 HAT',
      'Code HAT': '코드 HAT',
      'Gen HAT': '생성 HAT',
      'Time Graph HAT': '시간 그래프 HAT',
      'Autopilots': '자동 조종',
      'Manifesto': '선언문',
      'The Autopilot System': '자동 조종 시스템',
      'The Playbooks System': '플레이북 시스템',
      'The Actions System': '액션 시스템',
      'For Contributors': '기여자를 위해',
      'Architecture': '아키텍처',
      'Contributing Guide': '기여 가이드',
      'Coding Standards': '코딩 표준',
      'Roadmap': '로드맵',
    },
  }

  // Get translations for current language, fallback to English
  const t = translations[langCode] || translations.en

  // Transform navigation with translated text
  const transformItem = (item) => {
    const transformed = { ...item }
    if (item.textKey) {
      transformed.text = t[item.textKey] || item.textKey
      delete transformed.textKey
    }
    if (item.items) {
      transformed.items = item.items.map(transformItem)
    }
    // Prefix links with language code for non-root languages
    if (langCode !== 'en' && item.link && !item.link.startsWith('http')) {
      transformed.link = `/${langCode}${item.link}`
    }
    return transformed
  }

  return {
    nav: baseNav.map(transformItem),
    sidebar: baseSidebar.map(transformItem),
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: baseUrl,
  title: 'Hatcher | The IDE for Controlled AI Development',
  description:
    'An open-source IDE that gives professional developers deterministic control over AI. Stop the guesswork. Start shipping.',

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'An open-source IDE that gives professional developers deterministic control over AI. Stop the guesswork. Start shipping.',
      themeConfig: generateNavigation('en')
    },
    es: {
      label: 'Español',
      lang: 'es',
      description: 'Un IDE de código abierto que brinda a los desarrolladores profesionales control determinista sobre IA. Deja de adivinar. Empieza a entregar.',
      themeConfig: generateNavigation('es')
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      description: 'Un IDE open-source qui donne aux développeurs professionnels un contrôle déterministe sur l\'IA. Arrêtez les devinettes. Commencez à livrer.',
      themeConfig: generateNavigation('fr')
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      description: 'Eine Open-Source-IDE, die professionellen Entwicklern deterministisch Kontrolle über KI gibt. Schluss mit dem Rätselraten. Fangen Sie an zu liefern.',
      themeConfig: generateNavigation('de')
    },
    'zh-cn': {
      label: '简体中文',
      lang: 'zh-cn',
      description: '一个开源IDE，为专业开发人员提供对AI的确定性控制。停止猜测。开始交付。',
      themeConfig: generateNavigation('zh-cn')
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      description: 'プロの開発者にAIの確定的な制御を提供するオープンソースIDE。推測をやめる。出荷を始める。',
      themeConfig: generateNavigation('ja')
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      description: '전문 개발자에게 AI에 대한 결정론적 제어를 제공하는 오픈 소스 IDE. 추측을 멈추고 배송을 시작하세요.',
      themeConfig: generateNavigation('ko')
    },
    pt: {
      label: 'Português',
      lang: 'pt',
      description: 'Um IDE de código aberto que oferece aos desenvolvedores profissionais controle determinístico sobre IA. Pare de adivinhar. Comece a entregar.',
      themeConfig: generateNavigation('pt')
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      description: 'IDE с открытым исходным кодом, которая дает профессиональным разработчикам детерминированный контроль над ИИ. Хватит гадать. Начните поставлять.',
      themeConfig: generateNavigation('ru')
    },
    ar: {
      label: 'العربية',
      lang: 'ar',
      dir: 'rtl',
      description: 'بيئة تطوير مفتوحة المصدر تمنح المطورين المحترفين تحكمًا حتميًا في الذكاء الاصطناعي. توقف عن التخمين. ابدأ بالشحن.',
      themeConfig: generateNavigation('ar')
    },
    hi: {
      label: 'हिन्दी',
      lang: 'hi',
      description: 'एक ओपन-सोर्स IDE जो पेशेवर डेवलपर्स को AI पर निर्धारक नियंत्रण देता है। अनुमान लगाना बंद करें। शिपिंग शुरू करें।',
      themeConfig: generateNavigation('hi')
    },
    fa: {
      label: 'فارسی',
      lang: 'fa',
      dir: 'rtl',
      description: 'یک IDE منبع باز که به توسعه‌دهندگان حرفه‌ای کنترل قطعی بر هوش مصنوعی می‌دهد. حدس زدن را متوقف کنید. شروع به ارسال کنید.',
      themeConfig: generateNavigation('fa')
    },
    id: {
      label: 'Bahasa Indonesia',
      lang: 'id',
      description: 'IDE open-source yang memberikan kontrol deterministik kepada pengembang profesional atas AI. Berhenti menebak. Mulai mengirim.',
      themeConfig: generateNavigation('id')
    },
  },

  head: [
    // Favicon and basic meta
    ['link', { rel: 'icon', href: '/favicon.ico' }],

    // Apple Touch Icons
    ['link', { rel: 'apple-touch-icon', href: '/brand/egg-white.png' }],

    // Google Fonts for Constitutional typography
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap',
        rel: 'stylesheet',
      },
    ],

    // Theme color for mobile status bar - matches VitePress theme
    ['meta', { name: 'theme-color', content: '#ffffff' }], // Light mode
    [
      'meta',
      {
        name: 'theme-color',
        content: '#1b1b1f',
        media: '(prefers-color-scheme: dark)',
      },
    ], // Dark mode

    // Apple-specific mobile configuration
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    ],

    // Canonical URL - tells Google which is your preferred URL
    ['link', { rel: 'canonical', href: 'https://hatch.rs' }],

    // Google Analytics 4
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-LMJ8EF40PZ' }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-LMJ8EF40PZ');"
    ],

    // Open Graph meta tags for social sharing
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Hatcher | Command AI Fleets That Code While You Sleep' }],
    ['meta', { property: 'og:description', content: 'The Constitutional IDE where you are the commander, not the debugger. Deploy autonomous AI drones that follow your playbooks with military precision.' }],
    ['meta', { property: 'og:image', content: 'https://hatch.rs/fb.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:url', content: 'https://hatch.rs' }],
    ['meta', { property: 'og:site_name', content: 'Hatcher' }],

    // Twitter Card meta tags
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Hatcher | Command AI Fleets That Code While You Sleep' }],
    ['meta', { name: 'twitter:description', content: 'The Constitutional IDE where you are the commander, not the debugger.' }],
    ['meta', { name: 'twitter:image', content: 'https://hatch.rs/fb.png' }],
    ['meta', { name: 'twitter:site', content: '@HatcherDX' }]
  ],

  themeConfig: {
    logo: {
      light: '/logo-small-inline-light.svg',
      dark: '/logo-small-inline-dark.svg',
    },
    siteTitle: false, // Hide text since we're using inline logo

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HatcherDX/dx-engine' },
      { icon: 'twitter', link: 'https://twitter.com/HatcherDX' },
      { icon: 'discord', link: 'https://discord.gg/cZ7PZvnMk4' },
    ],

    editLink: {
      pattern:
        'https://github.com/HatcherDX/dx-engine/edit/main/apps/docs/:path',
      text: 'Edit this page on GitHub',
    },

    search: {
      provider: 'local',
    },
  },

  ignoreDeadLinks: [
    /^\/CODE_OF_CONDUCT/,
    /^\.\/CODE_OF_CONDUCT/,
    /^\.\.\/CODE_OF_CONDUCT/,
    /\.github\//,
    /bug_report/,
    /feature_request/,
  ],

  sitemap: {
    hostname: 'https://hatch.rs',
  },

  cleanUrls: true,

  markdown: {
    config: (md) => {
      // Make external links open in new tab
      const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
      };

      md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
        const token = tokens[idx];
        const href = token.attrGet('href');

        // Check if it's an external link
        if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
          token.attrSet('target', '_blank');
          token.attrSet('rel', 'noopener noreferrer');
        }

        return defaultRender(tokens, idx, options, env, self);
      };
    }
  }
})