/**
 * Chinese (Simplified) locale data for Hatcher
 * 中文(简体)本地化数据
 *
 * This file contains all translatable content for the Simplified Chinese version of the site.
 * 本文件包含网站简体中文版本的所有可翻译内容。
 */

const zhCn = {
  hero: {
    title: '宪法级 IDE',
    tagline: '指挥一支 AI 无人机舰队,让它们在你睡觉时编写代码。部署遵循你的 Playbooks 并以军事精度执行的 Autopilots。在这个 IDE 中,你是指挥官,而非调试者。',
    ctaText: '加入舰队',
    ctaLink: '/zh-cn/philosophy',
    logoAlt: 'Hatcher DX Engine'
  },

  features: [
    {
      title: '部署自主 AI 无人机',
      description: '启动执行你的 Playbooks 的 AI 代理舰队。它们在你睡觉时编码、测试和重构。醒来时任务已完成。',
      link: '/zh-cn/autopilots',
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
      title: 'Constitutional 指挥与控制',
      description: '你的编码标准成为不可打破的法则。每个无人机都以军事精度遵循你的宪法。没有失控的 AI。',
      link: '/zh-cn/constitutional-engineering',
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
      title: '可视化任务规划',
      description: '通过点击和拖动定义目标。AI 舰队理解视觉命令,而非模糊的提示。零沟通错误。',
      link: '/zh-cn/visual-to-code',
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
      title: '你的堡垒,你的规则',
      description: '100% 本地执行。Rust 驱动的安全性。你的代码永不离开你的指挥中心。完全的操作主权。',
      link: '/zh-cn/architecture',
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
    title: '准备好接受指挥了吗?',
    headline: '成为首批塑造 AI 控制开发未来的指挥官之一。',
    subheadline: '舰队正在集结。早期指挥官将获得终身优先访问权。',
    buttons: [
      {
        label: '加入 Discord',
        description: '与指挥官社区建立联系',
        link: 'https://discord.gg/cZ7PZvnMk4',
        primary: true,
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.1 19.6 7.9 18.9L3 20L4.3 16.1C3.2 14.8 2.5 13.1 2.5 11.5C2.8 6.8 7.1 3 12 3C16.97 3 21 7.582 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        label: '阅读哲学',
        description: '理解我们对 AI 控制的愿景',
        link: '/zh-cn/philosophy',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5C12 5.67157 12.6716 5 13.5 5H20.5C21.3284 5 22 5.67157 22 6.5V19.5C22 20.3284 21.3284 21 20.5 21H13.5C12.6716 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 6.5C12 5.67157 11.3284 5 10.5 5H3.5C2.67157 5 2 5.67157 2 6.5V19.5C2 20.3284 2.67157 21 3.5 21H10.5C11.3284 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 5V21" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        label: '在 GitHub 上加星',
        description: '支持开源使命',
        link: 'https://github.com/HatcherDX/dx-engine',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      }
    ]
  },

  footer: {
    tagline: '宪法级 IDE',
    legalText: '在 <a href="https://github.com/HatcherDX/dx-engine/blob/main/LICENSE">MIT 许可证</a>下发布。',
    attributionText: '由 <a href="https://github.com/chrissmejia">Chriss Mejía</a> 和 <a href="/zh-cn/community">Hatcher 社区</a>用 <svg class="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> 构建。',
    copyrightText: '© {year} Hatcher DX. 保留所有权利。',
    logoDark: '/logo-inline-dark.svg',
    logoLight: '/logo-inline-light.svg',
    logoAlt: 'Hatcher',
    columns: [
      {
        title: '产品',
        links: [
          { text: '入门指南', href: '/zh-cn/getting-started' },
          { text: 'Code HAT', href: '/zh-cn/features-code-hat' },
          { text: 'Gen HAT', href: '/zh-cn/features-gen-hat' },
          { text: 'Visual HAT', href: '/zh-cn/features-visual-hat' },
          { text: 'Time Graph HAT', href: '/zh-cn/features-time-graph-hat' }
        ]
      },
      {
        title: '概念',
        links: [
          { text: '哲学', href: '/zh-cn/philosophy' },
          { text: 'Playbooks', href: '/zh-cn/playbooks-system' },
          { text: 'Autopilots', href: '/zh-cn/autopilots-system' },
          { text: 'Time Graph', href: '/zh-cn/pillars-time-graph' },
          { text: 'Universal Fabricator', href: '/zh-cn/pillars-universal-fabricator' }
        ]
      },
      {
        title: '社区',
        links: [
          { text: 'GitHub', href: 'https://github.com/HatcherDX/dx-engine' },
          { text: 'Discord', href: 'https://discord.gg/cZ7PZvnMk4' },
          { text: 'Twitter/X', href: 'https://twitter.com/HatcherDX' },
          { text: '贡献指南', href: '/zh-cn/contributing' },
          { text: '社区准则', href: '/zh-cn/community' }
        ]
      },
      {
        title: '资源',
        links: [
          { text: '架构', href: '/zh-cn/architecture' },
          { text: '路线图', href: '/zh-cn/roadmap' },
          { text: '发布版本', href: 'https://github.com/HatcherDX/dx-engine/releases' },
          { text: '报告问题', href: 'https://github.com/HatcherDX/dx-engine/issues' },
          { text: '开放核心协议', href: '/zh-cn/pact-pricing' }
        ]
      }
    ]
  },

  systems: {
    title: 'Command Deck 系统',
    subtitle: '四个久经考验的系统,让你从调试者转变为指挥官:',
    systems: [
      {
        title: 'Constitutional Playbooks',
        description: '编写一次你的作战计划。你的编码标准和架构模式成为每个 AI 无人机必须遵循的不可变法则。不允许偏差。不允许解释。纯粹的执行。',
        link: '/zh-cn/playbooks-system',
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
        title: 'Time Graph Engine',
        description: '每个操作的任务控制中心。跟踪每个无人机的行动,回放失败的任务,探索替代时间线。你的指挥历史永久保存。',
        link: '/zh-cn/pillars-time-graph',
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
        description: '部署你武器库中的任何武器。那个久经考验的 2003 年 C++ 模块?运行你的帝国的 COBOL 逻辑?所有资产都可以通过 WebAssembly 部署。',
        link: '/zh-cn/pillars-universal-fabricator',
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
        title: '堡垒级安全性',
        description: '你的指挥中心坚不可摧。Rust 锻造的城墙。零云暴露。每个操作都在本地。你的策略,你的代码,你的主权。不可能被攻破。',
        link: '/zh-cn/philosophy',
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
    title: '核心 HATs',
    subtitle: '开发者在一天中会"戴不同的帽子"。Hatcher 为每项工作提供专用的 HAT 或工作空间:',
    hats: [
      {
        title: 'Code HAT',
        description: '一个由 Monaco 驱动的世界级代码编辑器,用于你处于纯粹创作流程中的时刻。',
        link: '/zh-cn/features-code-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="26,30 36,20 26,10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="14,10 4,20 14,30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        title: 'Gen HAT',
        description: '提示工程界面。你与 AI 舰队的直接通信线路。',
        link: '/zh-cn/features-gen-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="10,28 18,20 10,12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="22" x2="30" y1="28" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>`
      },
      {
        title: 'Visual HAT',
        description: '用于设计和与 UI 组件交互的工作空间,连接设计与代码。',
        link: '/zh-cn/features-visual-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20s5-12 16-12 16 12 16 12-5 12-16 12-16-12-16-12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        title: 'Time Graph HAT',
        description: '终极审计工具。你的项目历史的量子图,可视化每一个变化。',
        link: '/zh-cn/features-time-graph-hat',
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
    title: '数据说话',
    metrics: [
      {
        number: '100%',
        label: '测试覆盖率',
        description: '由 AI 自动化,由你验证。充满信心地发布。'
      },
      {
        number: '0%',
        label: '云依赖',
        description: '你的知识产权属于你。数据永不离开你的机器。'
      },
      {
        number: '∞',
        label: '语言支持',
        description: '通过 WebAssembly 支持从 COBOL 到 Rust。使用有效的工具。',
        isInfinity: true
      }
    ]
  },

  admiral: {
    title: '关于指挥官',
    name: 'Chriss Mejía',
    jobTitle: '创始人兼首席系统架构师',
    photoUrl: '/chriss.jpg',
    photoAlt: 'Chriss Mejía',
    mission: '我在工程领域的旅程跨越了二十多年,从担任硅谷开创性 AI 初创公司的副总裁,到为一家 YC 支持的企业构建 MVP,再到领导拥有 300 人的企业部门。现在正在构建将定义下一个十年开发的工具。',
    quote: '软件的未来不是取代开发者。<br><span class="quote-emphasis">而是赋予他们指挥权。</span>',
    stats: [
      {
        number: '22',
        label: '年工程系统经验'
      },
      {
        number: '300+',
        label: '领导的工程师'
      },
      {
        number: 'YC',
        label: 'MVP 构建者',
        primary: true
      }
    ]
  },

  showcase: {
    scrollText: '滚动以探索'
  }
}

export default zhCn
export type LocaleData = typeof zhCn
