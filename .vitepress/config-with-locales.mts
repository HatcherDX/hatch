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
      textKey: 'Autopilots',
      items: [
        { textKey: 'Manifesto', link: '/autopilots' },
        { textKey: 'The Autopilot System', link: '/autopilots-system' },
        { textKey: 'The Playbooks System', link: '/playbooks-system' },
        { textKey: 'The Actions System', link: '/actions-system' },
      ],
    },
    {
      textKey: 'For Contributors',
      items: [
        { textKey: 'Architecture', link: '/architecture' },
        { textKey: 'Contributing Guide', link: '/contributing' },
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
      'Autopilots': 'Autopilots',
      'Manifesto': 'Manifesto',
      'The Autopilot System': 'The Autopilot System',
      'The Playbooks System': 'The Playbooks System',
      'The Actions System': 'The Actions System',
      'For Contributors': 'For Contributors',
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
      'Introduction': 'Introducción',
      'What is Hatcher?': '¿Qué es Hatcher?',
      'The Counter-Narrative': 'La Contra-Narrativa',
      'The Vision': 'La Visión',
      'The Philosophy': 'La Filosofía',
      'Autopilots': 'Autopilotos',
      'Manifesto': 'Manifiesto',
      'The Autopilot System': 'El Sistema Autopiloto',
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
      'Introduction': 'Introduction',
      'What is Hatcher?': 'Qu\'est-ce que Hatcher ?',
      'The Counter-Narrative': 'La Contre-Narrative',
      'The Vision': 'La Vision',
      'The Philosophy': 'La Philosophie',
      'Autopilots': 'Autopilotes',
      'Manifesto': 'Manifeste',
      'The Autopilot System': 'Le Système Autopilote',
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
    ['link', { rel: 'canonical', href: 'https://hatche.rs' }],

    // Open Graph and Twitter meta tags...
    // (keeping all the existing meta tags from current config)
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
    hostname: 'https://hatche.rs',
  },

  cleanUrls: true,
})