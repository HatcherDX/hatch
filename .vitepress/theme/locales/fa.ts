/**
 * Persian (Farsi) locale data for Hatcher
 * داده‌های محلی‌سازی فارسی برای Hatcher
 *
 * This file contains all translatable content for the Persian version of the site.
 * این فایل شامل تمام محتوای قابل ترجمه برای نسخه فارسی سایت است.
 */

const fa = {
  hero: {
    title: 'محیط توسعه قانون‌اساسی',
    tagline: 'ناوگانی از پهپادهای هوش مصنوعی را فرماندهی کنید که در خواب شما کدنویسی می‌کنند. خلبان‌های خودکار را مستقر کنید که از پلی‌بوک‌های شما با دقت نظامی پیروی می‌کنند. محیط توسعه‌ای که در آن شما فرمانده هستید، نه اشکال‌یاب.',
    ctaText: 'به ناوگان بپیوندید',
    ctaLink: '/fa/philosophy',
    logoAlt: 'موتور Hatcher DX'
  },

  features: [
    {
      title: 'پهپادهای هوش مصنوعی خودمختار را مستقر کنید',
      description: 'ناوگانی از عامل‌های هوش مصنوعی راه‌اندازی کنید که پلی‌بوک‌های شما را اجرا می‌کنند. آن‌ها کدنویسی، تست و بازسازی می‌کنند در حالی که شما می‌خوابید. با ماموریت‌های تکمیل شده بیدار شوید.',
      link: '/fa/autopilots',
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
      title: 'فرماندهی و کنترل قانون‌اساسی',
      description: 'استانداردهای کدنویسی شما به قوانین شکست‌ناپذیر تبدیل می‌شوند. هر پهپاد از قانون‌اساسی شما با دقت نظامی پیروی می‌کند. بدون هوش مصنوعی سرکش.',
      link: '/fa/constitutional-engineering',
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
      title: 'برنامه‌ریزی بصری ماموریت',
      description: 'با اشاره و کلیک اهداف را تعریف کنید. ناوگان هوش مصنوعی دستورات بصری را درک می‌کند، نه درخواست‌های مبهم. بدون سوءتفاهم.',
      link: '/fa/visual-to-code',
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
      title: 'دژ شما، قوانین شما',
      description: 'اجرای ۱۰۰٪ محلی. امنیت تقویت شده با Rust. کد شما هرگز مرکز فرماندهی شما را ترک نمی‌کند. حاکمیت عملیاتی کامل.',
      link: '/fa/architecture',
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
    title: 'آماده تصدی فرماندهی هستید؟',
    headline: 'در میان نخستین فرماندهانی باشید که آینده توسعه کنترل‌شده توسط هوش مصنوعی را شکل می‌دهند.',
    subheadline: 'ناوگان در حال جمع‌آوری است. فرماندهان اولیه دسترسی اولویت‌دار مادام‌العمر دریافت می‌کنند.',
    buttons: [
      {
        label: 'به Discord بپیوندید',
        description: 'با جامعه فرماندهان ارتباط برقرار کنید',
        link: 'https://discord.gg/cZ7PZvnMk4',
        primary: true,
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.1 19.6 7.9 18.9L3 20L4.3 16.1C3.2 14.8 2.5 13.1 2.5 11.5C2.8 6.8 7.1 3 12 3C16.97 3 21 7.582 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        label: 'فلسفه را بخوانید',
        description: 'چشم‌انداز ما برای کنترل هوش مصنوعی را درک کنید',
        link: '/fa/philosophy',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5C12 5.67157 12.6716 5 13.5 5H20.5C21.3284 5 22 5.67157 22 6.5V19.5C22 20.3284 21.3284 21 20.5 21H13.5C12.6716 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 6.5C12 5.67157 11.3284 5 10.5 5H3.5C2.67157 5 2 5.67157 2 6.5V19.5C2 20.3284 2.67157 21 3.5 21H10.5C11.3284 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 5V21" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        label: 'ستاره در GitHub',
        description: 'از ماموریت متن‌باز پشتیبانی کنید',
        link: 'https://github.com/HatcherDX/dx-engine',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      }
    ]
  },

  footer: {
    tagline: 'محیط توسعه قانون‌اساسی',
    legalText: 'منتشر شده تحت <a href="https://github.com/HatcherDX/dx-engine/blob/main/LICENSE">مجوز MIT</a>.',
    attributionText: 'ساخته شده با <svg class="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> توسط <a href="https://github.com/chrissmejia">Chriss Mejía</a> و <a href="/fa/community">جامعه Hatcher</a>.',
    copyrightText: '© {year} Hatcher DX. تمامی حقوق محفوظ است.',
    logoDark: '/logo-inline-dark.svg',
    logoLight: '/logo-inline-light.svg',
    logoAlt: 'Hatcher',
    columns: [
      {
        title: 'محصول',
        links: [
          { text: 'شروع کار', href: '/fa/getting-started' },
          { text: 'Code HAT', href: '/fa/features-code-hat' },
          { text: 'Gen HAT', href: '/fa/features-gen-hat' },
          { text: 'Visual HAT', href: '/fa/features-visual-hat' },
          { text: 'Time Graph HAT', href: '/fa/features-time-graph-hat' }
        ]
      },
      {
        title: 'مفاهیم',
        links: [
          { text: 'فلسفه', href: '/fa/philosophy' },
          { text: 'Playbooks', href: '/fa/playbooks-system' },
          { text: 'Autopilots', href: '/fa/autopilots-system' },
          { text: 'Time Graph', href: '/fa/pillars-time-graph' },
          { text: 'Universal Fabricator', href: '/fa/pillars-universal-fabricator' }
        ]
      },
      {
        title: 'جامعه',
        links: [
          { text: 'GitHub', href: 'https://github.com/HatcherDX/dx-engine' },
          { text: 'Discord', href: 'https://discord.gg/cZ7PZvnMk4' },
          { text: 'Twitter/X', href: 'https://twitter.com/HatcherDX' },
          { text: 'مشارکت', href: '/fa/contributing' },
          { text: 'رهنمودهای جامعه', href: '/fa/community' }
        ]
      },
      {
        title: 'منابع',
        links: [
          { text: 'معماری', href: '/fa/architecture' },
          { text: 'نقشه راه', href: '/fa/roadmap' },
          { text: 'انتشارات', href: 'https://github.com/HatcherDX/dx-engine/releases' },
          { text: 'گزارش مشکلات', href: 'https://github.com/HatcherDX/dx-engine/issues' },
          { text: 'پیمان هسته باز', href: '/fa/pact-pricing' }
        ]
      }
    ]
  },

  systems: {
    title: 'سیستم‌های عرشه فرماندهی',
    subtitle: 'چهار سیستم آزموده‌شده در نبرد که شما را از اشکال‌یاب به فرمانده تبدیل می‌کنند:',
    systems: [
      {
        title: 'Playbooks قانون‌اساسی',
        description: 'برنامه‌های نبرد خود را یک بار بنویسید. استانداردهای کدنویسی و الگوهای معماری شما به قوانین تغییرناپذیری تبدیل می‌شوند که هر پهپاد هوش مصنوعی باید از آن‌ها پیروی کند. بدون انحراف. بدون تفسیر. اجرای خالص.',
        link: '/fa/playbooks-system',
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
        title: 'موتور Time Graph',
        description: 'کنترل ماموریت برای هر عملیات. هر عمل پهپاد را ردیابی کنید، ماموریت‌های ناموفق را به عقب برگردانید، جدول‌های زمانی جایگزین را کاوش کنید. تاریخچه فرماندهی شما برای همیشه حفظ می‌شود.',
        link: '/fa/pillars-time-graph',
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
        description: 'هر سلاحی را از زرادخانه خود مستقر کنید. آن ماژول C++ آزموده‌شده در نبرد از سال ۲۰۰۳؟ منطق COBOL که امپراتوری شما را اداره می‌کند؟ تمام دارایی‌ها آماده استقرار از طریق WebAssembly هستند.',
        link: '/fa/pillars-universal-fabricator',
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
        title: 'امنیت درجه دژ',
        description: 'مرکز فرماندهی شما نفوذناپذیر است. دیوارهای آهنین Rust. بدون قرار گرفتن در معرض ابر. هر عملیات محلی. استراتژی‌های شما، کد شما، حاکمیت شما. نقض امکان‌پذیر نیست.',
        link: '/fa/philosophy',
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
    title: 'HAT‌های اصلی',
    subtitle: 'یک توسعه‌دهنده در طول روز "کلاه‌های متفاوتی بر سر می‌گذارد". Hatcher یک HAT یا فضای کاری اختصاصی برای هر کار به شما می‌دهد:',
    hats: [
      {
        title: 'Code HAT',
        description: 'یک ویرایشگر کد در سطح جهانی، قدرت گرفته از Monaco، برای زمانی که در جریان خلاقیت خالص هستید.',
        link: '/fa/features-code-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="26,30 36,20 26,10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="14,10 4,20 14,30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        title: 'Gen HAT',
        description: 'رابط مهندسی درخواست. خط ارتباط مستقیم شما با ناوگان هوش مصنوعی.',
        link: '/fa/features-gen-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="10,28 18,20 10,12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="22" x2="30" y1="28" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>`
      },
      {
        title: 'Visual HAT',
        description: 'فضای کاری برای طراحی و تعامل با اجزای رابط کاربری، پل زدن بین طراحی و کد.',
        link: '/fa/features-visual-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20s5-12 16-12 16 12 16 12-5 12-16 12-16-12-16-12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        title: 'Time Graph HAT',
        description: 'ابزار نهایی حسابرسی. یک گراف کوانتومی از تاریخچه پروژه شما برای تجسم هر تغییر.',
        link: '/fa/features-time-graph-hat',
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
    title: 'بر اساس اعداد',
    metrics: [
      {
        number: '۱۰۰٪',
        label: 'پوشش تست',
        description: 'خودکار شده توسط هوش مصنوعی، تأیید شده توسط شما. با اطمینان ارسال کنید.'
      },
      {
        number: '۰٪',
        label: 'وابستگی به ابر',
        description: 'مالکیت فکری شما متعلق به شماست. هیچ داده‌ای دستگاه شما را ترک نمی‌کند.'
      },
      {
        number: '∞',
        label: 'پشتیبانی زبان',
        description: 'COBOL تا Rust از طریق WebAssembly. از آنچه کار می‌کند استفاده کنید.',
        isInfinity: true
      }
    ]
  },

  admiral: {
    title: 'درباره دریاسالار',
    name: 'Chriss Mejía',
    jobTitle: 'بنیانگذار و معمار ارشد سیستم‌ها',
    photoUrl: '/chriss.jpg',
    photoAlt: 'Chriss Mejía',
    mission: 'سفر من در مهندسی بیش از دو دهه را شامل می‌شود، از خدمت به عنوان معاون رئیس در یک استارتاپ پیشگام هوش مصنوعی در سیلیکون ولی گرفته تا ساخت MVP برای یک سرمایه‌گذاری پشتیبانی‌شده توسط YC، و رهبری بخش‌های سازمانی ۳۰۰ نفره. اکنون در حال ساخت ابزارهایی هستم که دهه آینده توسعه را تعریف خواهند کرد.',
    quote: 'آینده نرم‌افزار جایگزینی توسعه‌دهندگان نیست.<br><span class="quote-emphasis">بلکه دادن فرماندهی به آن‌ها است.</span>',
    stats: [
      {
        number: '۲۲',
        label: 'سال مهندسی سیستم‌ها'
      },
      {
        number: '۳۰۰+',
        label: 'مهندسان رهبری‌شده'
      },
      {
        number: 'YC',
        label: 'سازنده MVP',
        primary: true
      }
    ]
  },

  showcase: {
    scrollText: 'برای کاوش اسکرول کنید'
  }
}

export default fa

export type LocaleData = typeof fa
