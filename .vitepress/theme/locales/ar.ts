/**
 * Arabic locale data for Hatcher
 *
 * This file contains all translatable content for the Arabic version of the site.
 * Based on the English (en.ts) locale structure.
 * Language: Modern Standard Arabic (MSA)
 */

import type { LocaleData } from './en'

export const ar: LocaleData = {
  hero: {
    title: 'بيئة تطوير دستورية',
    tagline: 'قُد أسطولاً من طائرات الذكاء الاصطناعي التي تكتب الأكواد أثناء نومك. انشر أنظمة Autopilots التي تتبع Playbooks الخاصة بك بدقة عسكرية. بيئة التطوير حيث أنت القائد، وليس المصحح.',
    ctaText: 'انضم إلى الأسطول',
    ctaLink: '/ar/philosophy',
    logoAlt: 'Hatcher DX Engine'
  },

  features: [
    {
      title: 'انشر طائرات ذكاء اصطناعي مستقلة',
      description: 'أطلق أساطيل من وكلاء الذكاء الاصطناعي الذين ينفذون Playbooks الخاصة بك. يكتبون الأكواد ويختبرونها ويعيدون هيكلتها أثناء نومك. استيقظ على مهام مكتملة.',
      link: '/ar/autopilots',
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
      title: 'القيادة والتحكم الدستوري',
      description: 'معايير البرمجة الخاصة بك تصبح قوانين لا تُنتهك. كل طائرة تتبع دستورك بدقة عسكرية. لا ذكاء اصطناعي متمرد.',
      link: '/ar/constitutional-engineering',
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
      title: 'تخطيط مهام مرئي',
      description: 'أشر وانقر لتحديد الأهداف. أسطول الذكاء الاصطناعي يفهم الأوامر المرئية، وليس الأوامر الغامضة. لا سوء فهم على الإطلاق.',
      link: '/ar/visual-to-code',
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
      title: 'حصنك، قواعدك',
      description: '100% تنفيذ محلي. أمان مدعوم بـ Rust. الكود الخاص بك لا يغادر مركز القيادة أبداً. سيادة تشغيلية كاملة.',
      link: '/ar/architecture',
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 8L8 20V40H18V30H30V40H40V20L24 8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              <rect x="14" y="24" width="6" height="6" stroke="currentColor" stroke-width="1.5"/>
              <rect x="28" y="24" width="6" height="6" stroke="currentColor" stroke-width="1.5"/>
              <path d="M24 8V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="24" cy="20" r="2" fill="currentColor"/>
            </svg>`
    }
  ],

  systems: {
    title: 'أنظمة Command Deck',
    subtitle: 'أربعة أنظمة مختبرة في المعارك تحولك من مصحح إلى قائد:',
    systems: [
      {
        title: 'Playbooks الدستورية',
        description: 'اكتب خطط معاركك مرة واحدة. معايير البرمجة وأنماط البنية المعمارية الخاصة بك تصبح قوانين ثابتة يجب على كل طائرة ذكاء اصطناعي اتباعها. لا انحراف. لا تفسير. تنفيذ صافٍ.',
        link: '/ar/playbooks-system',
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
        title: 'محرك Time Graph',
        description: 'مركز التحكم في كل عملية. تتبع إجراءات كل طائرة، أرجع المهام الفاشلة، استكشف خطوط زمنية بديلة. سجل أوامرك محفوظ للأبد.',
        link: '/ar/pillars-time-graph',
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
        description: 'انشر أي سلاح من ترسانتك. وحدة C++ المختبرة في المعارك من عام 2003؟ منطق COBOL الذي يدير إمبراطوريتك؟ جميع الأصول جاهزة للنشر عبر WebAssembly.',
        link: '/ar/pillars-universal-fabricator',
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
        title: 'أمان على مستوى الحصون',
        description: 'مركز القيادة الخاص بك منيع. جدران مصنوعة من Rust. لا تعرض سحابي. كل عملية محلية. استراتيجياتك، كودك، سيادتك. لا ثغرات ممكنة.',
        link: '/ar/philosophy',
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
    title: 'HATs الأساسية',
    subtitle: 'المطور "يرتدي قبعات مختلفة" طوال اليوم. Hatcher يمنحك HAT مخصص، أو مساحة عمل، لكل مهمة:',
    hats: [
      {
        title: 'Code HAT',
        description: 'محرر كود عالمي المستوى، مدعوم بـ Monaco، لحظات التدفق في الإبداع الخالص.',
        link: '/ar/features-code-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="26,30 36,20 26,10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="14,10 4,20 14,30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        title: 'Gen HAT',
        description: 'واجهة هندسة الأوامر. خط الاتصال المباشر بك مع أسطول الذكاء الاصطناعي.',
        link: '/ar/features-gen-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="10,28 18,20 10,12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="22" x2="30" y1="28" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>`
      },
      {
        title: 'Visual HAT',
        description: 'مساحة عمل لتصميم والتفاعل مع مكونات واجهة المستخدم، تربط بين التصميم والكود.',
        link: '/ar/features-visual-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20s5-12 16-12 16 12 16 12-5 12-16 12-16-12-16-12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        title: 'Time Graph HAT',
        description: 'أداة المراجعة المطلقة. رسم بياني كمّي لتاريخ مشروعك لتصور كل تغيير.',
        link: '/ar/features-time-graph-hat',
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
    title: 'بالأرقام',
    metrics: [
      {
        number: '100%',
        label: 'تغطية الاختبارات',
        description: 'مؤتمت بواسطة الذكاء الاصطناعي، مُتحقَق منه بواسطتك. انشر بثقة.'
      },
      {
        number: '0%',
        label: 'الاعتماد على السحابة',
        description: 'ملكيتك الفكرية تبقى لك. لا بيانات تغادر جهازك.'
      },
      {
        number: '∞',
        label: 'دعم اللغات',
        description: 'من COBOL إلى Rust عبر WebAssembly. استخدم ما يعمل.',
        isInfinity: true
      }
    ]
  },

  admiral: {
    title: 'عن الأدميرال',
    name: 'Chriss Mejía',
    jobTitle: 'المؤسس ومهندس الأنظمة الرئيسي',
    photoUrl: '/chriss.jpg',
    photoAlt: 'Chriss Mejía',
    mission: 'رحلتي في الهندسة تمتد لأكثر من عقدين، من العمل كنائب رئيس في شركة ناشئة رائدة في الذكاء الاصطناعي في وادي السيليكون إلى بناء MVP لمشروع مدعوم من YC، وقيادة أقسام مؤسسية من 300 شخص. الآن أبني الأدوات التي ستحدد العقد القادم من التطوير.',
    quote: 'مستقبل البرمجيات ليس استبدال المطورين.<br><span class="quote-emphasis">بل منحهم القيادة.</span>',
    stats: [
      {
        number: '22',
        label: 'عاماً في هندسة الأنظمة'
      },
      {
        number: '300+',
        label: 'مهندس تحت القيادة'
      },
      {
        number: 'YC',
        label: 'باني MVP',
        primary: true
      }
    ]
  },

  cta: {
    title: 'هل أنت مستعد لتولي القيادة؟',
    headline: 'كن من بين القادة الأوائل الذين يشكّلون مستقبل التطوير المتحكم به بالذكاء الاصطناعي.',
    subheadline: 'الأسطول يتجمع. القادة الأوائل يحصلون على وصول مدى الحياة بالأولوية.',
    buttons: [
      {
        label: 'انضم إلى Discord',
        description: 'تواصل مع مجتمع القادة',
        link: 'https://discord.gg/cZ7PZvnMk4',
        primary: true,
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.1 19.6 7.9 18.9L3 20L4.3 16.1C3.2 14.8 2.5 13.1 2.5 11.5C2.8 6.8 7.1 3 12 3C16.97 3 21 7.582 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        label: 'اقرأ الفلسفة',
        description: 'افهم رؤيتنا للتحكم بالذكاء الاصطناعي',
        link: '/ar/philosophy',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5C12 5.67157 12.6716 5 13.5 5H20.5C21.3284 5 22 5.67157 22 6.5V19.5C22 20.3284 21.3284 21 20.5 21H13.5C12.6716 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 6.5C12 5.67157 11.3284 5 10.5 5H3.5C2.67157 5 2 5.67157 2 6.5V19.5C2 20.3284 2.67157 21 3.5 21H10.5C11.3284 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 5V21" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        label: 'نجمة على GitHub',
        description: 'ادعم مهمة المصدر المفتوح',
        link: 'https://github.com/HatcherDX/dx-engine',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      }
    ]
  },

  footer: {
    tagline: 'بيئة التطوير الدستورية',
    legalText: 'صدر تحت <a href="https://github.com/HatcherDX/dx-engine/blob/main/LICENSE">رخصة MIT</a>.',
    attributionText: 'بُني بـ&nbsp;<svg class="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>&nbsp;بواسطة <a href="https://github.com/chrissmejia">Chriss Mejía</a> و<a href="/ar/community">مجتمع Hatcher</a>.',
    copyrightText: '© {year} Hatcher DX. جميع الحقوق محفوظة.',
    logoDark: '/logo-inline-dark.svg',
    logoLight: '/logo-inline-light.svg',
    logoAlt: 'Hatcher',
    columns: [
      {
        title: 'المنتج',
        links: [
          { text: 'البدء', href: '/ar/getting-started' },
          { text: 'Code HAT', href: '/ar/features-code-hat' },
          { text: 'Gen HAT', href: '/ar/features-gen-hat' },
          { text: 'Visual HAT', href: '/ar/features-visual-hat' },
          { text: 'Time Graph HAT', href: '/ar/features-time-graph-hat' }
        ]
      },
      {
        title: 'المفاهيم',
        links: [
          { text: 'الفلسفة', href: '/ar/philosophy' },
          { text: 'Playbooks', href: '/ar/playbooks-system' },
          { text: 'Autopilots', href: '/ar/autopilots-system' },
          { text: 'Time Graph', href: '/ar/pillars-time-graph' },
          { text: 'Universal Fabricator', href: '/ar/pillars-universal-fabricator' }
        ]
      },
      {
        title: 'المجتمع',
        links: [
          { text: 'GitHub', href: 'https://github.com/HatcherDX/dx-engine' },
          { text: 'Discord', href: 'https://discord.gg/cZ7PZvnMk4' },
          { text: 'Twitter/X', href: 'https://twitter.com/HatcherDX' },
          { text: 'المساهمة', href: '/ar/contributing' },
          { text: 'إرشادات المجتمع', href: '/ar/community' }
        ]
      },
      {
        title: 'الموارد',
        links: [
          { text: 'البنية المعمارية', href: '/ar/architecture' },
          { text: 'خارطة الطريق', href: '/ar/roadmap' },
          { text: 'الإصدارات', href: 'https://github.com/HatcherDX/dx-engine/releases' },
          { text: 'الإبلاغ عن المشاكل', href: 'https://github.com/HatcherDX/dx-engine/issues' },
          { text: 'ميثاق Open Core', href: '/ar/pact-pricing' }
        ]
      }
    ]
  },

  showcase: {
    scrollText: 'مرّر للاستكشاف'
  }
}
