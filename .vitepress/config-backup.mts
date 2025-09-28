import { defineConfig } from 'vitepress'

const baseUrl = '' // Using custom domain, no base path needed

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: baseUrl,
  title: 'Hatcher | The IDE for Controlled AI Development',
  description:
    'An open-source IDE that gives professional developers deterministic control over AI. Stop the guesswork. Start shipping.',

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

    // Open Graph meta tags for Facebook, LinkedIn, etc.
    [
      'meta',
      {
        property: 'og:title',
        content: 'Hatcher | The IDE for Controlled AI Development',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'An open-source IDE that gives professional developers deterministic control over AI. Stop the guesswork. Start shipping.',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://hatche.rs/brand/egg-white.png',
      },
    ],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    [
      'meta',
      {
        property: 'og:image:alt',
        content: 'Hatcher - The IDE for Controlled AI Development',
      },
    ],
    ['meta', { property: 'og:url', content: 'https://hatche.rs' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Hatcher' }],

    // Twitter Card meta tags
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    [
      'meta',
      {
        name: 'twitter:title',
        content: 'Hatcher | The IDE for Controlled AI Development',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:description',
        content:
          'An open-source IDE that gives professional developers deterministic control over AI. Stop the guesswork. Start shipping.',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://hatche.rs/brand/egg-white.png',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:image:alt',
        content: 'Hatcher - The IDE for Controlled AI Development',
      },
    ],
    ['meta', { name: 'twitter:creator', content: '@HatcherDX' }],
    ['meta', { name: 'twitter:site', content: '@HatcherDX' }],

    // Additional SEO meta tags
    [
      'meta',
      {
        name: 'keywords',
        content:
          'AI IDE, visual-to-code, Vue AI tool, Claude Code IDE, deterministic AI control, open-source IDE, AI development, developer tools',
      },
    ],
    [
      'meta',
      { name: 'author', content: 'Chriss Mejía and the Hatcher community' },
    ],
    ['meta', { name: 'robots', content: 'index, follow' }],

    // Google Analytics
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-LMJ8EF40PZ',
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-LMJ8EF40PZ');`,
    ],
  ],

  themeConfig: {
    logo: {
      light: '/logo-small-inline-light.svg',
      dark: '/logo-small-inline-dark.svg',
    },
    siteTitle: false, // Hide text since we're using inline logo

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Philosophy', link: '/philosophy' },
      { text: 'Community', link: '/community-vision' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Hatcher?', link: '/introduction' },
          { text: 'The Counter-Narrative', link: '/counter-narrative' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
      {
        text: 'The Vision',
        items: [{ text: 'The Philosophy', link: '/philosophy' }],
      },
      {
        text: 'Autopilots',
        items: [
          { text: 'Manifesto', link: '/autopilots' },
          { text: 'The Autopilot System', link: '/autopilots-system' },
          { text: 'The Playbooks System', link: '/playbooks-system' },
          { text: 'The Actions System', link: '/actions-system' },
        ],
      },
      {
        text: 'The Hatcher "Operating System"',
        items: [
          {
            text: 'The Four Pillars',
            link: '/pillars',
            collapsed: true,
            items: [
              {
                text: 'Constitutional Engineering',
                link: '/pillars-constitutional-engineering',
              },
              { text: 'The Time Graph', link: '/pillars-time-graph' },
              { text: 'AI Under Command', link: '/pillars-ai-under-command' },
              {
                text: 'The Universal Fabricator',
                link: '/pillars-universal-fabricator',
              },
            ],
          },
          {
            text: 'The Core HATs',
            link: '/core-hats',
            collapsed: true,
            items: [
              { text: 'The Code HAT', link: '/features-code-hat' },
              { text: 'The Gen HAT', link: '/features-gen-hat' },
              {
                text: 'The Visual HAT',
                link: '/features-visual-hat',
                collapsed: true,
                items: [
                  { text: 'Visual-to-Code Bridge', link: '/visual-to-code' },
                ],
              },
              { text: 'The Time Graph HAT', link: '/features-time-graph-hat' },
            ],
          },
          {
            text: 'The Universal Fabricator',
            link: '/features-universal-fabricator',
          },
        ],
      },
      {
        text: 'Solutions',
        items: [{ text: 'Who is Hatcher For?', link: '/who-is-hatcher-for' }],
      },
      {
        text: 'The Hatcher Guild',
        items: [
          { text: 'Our Community Vision', link: '/community-vision' },
          { text: 'Join the Community', link: '/community' },
        ],
      },
      {
        text: 'Our Model',
        items: [{ text: 'Our Pact & Pricing', link: '/pact-pricing' }],
      },
      {
        text: 'For Contributors',
        items: [
          { text: 'Architecture', link: '/architecture' },
          { text: 'Contributing Guide', link: '/contributing' },
          { text: 'Coding Standards', link: '/coding-standards' },
          { text: 'Roadmap', link: '/roadmap' },
        ],
      },
    ],

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
