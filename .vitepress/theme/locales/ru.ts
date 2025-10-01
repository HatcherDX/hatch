/**
 * Russian locale data for Hatcher
 * Русские языковые данные для Hatcher
 *
 * This file contains all translatable content for the Russian version of the site.
 * Этот файл содержит весь переводимый контент для русской версии сайта.
 */

const ru = {
  hero: {
    title: 'Конституционная IDE',
    tagline: 'Управляйте флотом AI-дронов, которые пишут код, пока вы спите. Развертывайте автопилоты, следующие вашим инструкциям с военной точностью. IDE, где вы — командир, а не отладчик.',
    ctaText: 'Присоединиться к флоту',
    ctaLink: '/ru/philosophy',
    logoAlt: 'Hatcher DX Engine'
  },

  features: [
    {
      title: 'Развертывание автономных AI-дронов',
      description: 'Запускайте флоты AI-агентов, выполняющих ваши инструкции. Они пишут код, тестируют и рефакторят, пока вы спите. Просыпайтесь с завершенными миссиями.',
      link: '/ru/autopilots',
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
      title: 'Конституционное командование и управление',
      description: 'Ваши стандарты кодирования становятся нерушимыми законами. Каждый дрон следует вашей конституции с военной точностью. Никакого AI-самоуправления.',
      link: '/ru/constitutional-engineering',
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
      title: 'Визуальное планирование миссий',
      description: 'Указывайте и кликайте для определения задач. AI-флот понимает визуальные команды, а не расплывчатые запросы. Никаких недоразумений.',
      link: '/ru/visual-to-code',
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
      title: 'Ваша крепость, ваши правила',
      description: '100% локальное выполнение. Безопасность на основе Rust. Ваш код никогда не покидает ваш командный центр. Полная операционная независимость.',
      link: '/ru/architecture',
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
    title: 'Готовы взять командование?',
    headline: 'Станьте одним из первых командиров, которые формируют будущее разработки под управлением AI.',
    subheadline: 'Флот собирается. Первые командиры получают пожизненный приоритетный доступ.',
    buttons: [
      {
        label: 'Присоединиться к Discord',
        description: 'Связаться с сообществом командиров',
        link: 'https://discord.gg/cZ7PZvnMk4',
        primary: true,
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.1 19.6 7.9 18.9L3 20L4.3 16.1C3.2 14.8 2.5 13.1 2.5 11.5C2.8 6.8 7.1 3 12 3C16.97 3 21 7.582 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        label: 'Читать философию',
        description: 'Понять нашу концепцию управления AI',
        link: '/ru/philosophy',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5C12 5.67157 12.6716 5 13.5 5H20.5C21.3284 5 22 5.67157 22 6.5V19.5C22 20.3284 21.3284 21 20.5 21H13.5C12.6716 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 6.5C12 5.67157 11.3284 5 10.5 5H3.5C2.67157 5 2 5.67157 2 6.5V19.5C2 20.3284 2.67157 21 3.5 21H10.5C11.3284 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 5V21" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        label: 'Поставить звезду на GitHub',
        description: 'Поддержать миссию с открытым исходным кодом',
        link: 'https://github.com/HatcherDX/dx-engine',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      }
    ]
  },

  footer: {
    tagline: 'Конституционная IDE',
    legalText: 'Выпущено под <a href="https://github.com/HatcherDX/dx-engine/blob/main/LICENSE">лицензией MIT</a>.',
    attributionText: 'Создано с <svg class="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> <a href="https://github.com/chrissmejia">Chriss Mejía</a> и <a href="/ru/community">сообществом Hatcher</a>.',
    copyrightText: '© {year} Hatcher DX. Все права защищены.',
    logoDark: '/logo-inline-dark.svg',
    logoLight: '/logo-inline-light.svg',
    logoAlt: 'Hatcher',
    columns: [
      {
        title: 'Продукт',
        links: [
          { text: 'Начало работы', href: '/ru/getting-started' },
          { text: 'Code HAT', href: '/ru/features-code-hat' },
          { text: 'Gen HAT', href: '/ru/features-gen-hat' },
          { text: 'Visual HAT', href: '/ru/features-visual-hat' },
          { text: 'Time Graph HAT', href: '/ru/features-time-graph-hat' }
        ]
      },
      {
        title: 'Концепции',
        links: [
          { text: 'Философия', href: '/ru/philosophy' },
          { text: 'Playbooks', href: '/ru/playbooks-system' },
          { text: 'Autopilots', href: '/ru/autopilots-system' },
          { text: 'Time Graph', href: '/ru/pillars-time-graph' },
          { text: 'Universal Fabricator', href: '/ru/pillars-universal-fabricator' }
        ]
      },
      {
        title: 'Сообщество',
        links: [
          { text: 'GitHub', href: 'https://github.com/HatcherDX/dx-engine' },
          { text: 'Discord', href: 'https://discord.gg/cZ7PZvnMk4' },
          { text: 'Twitter/X', href: 'https://twitter.com/HatcherDX' },
          { text: 'Внесение вклада', href: '/ru/contributing' },
          { text: 'Правила сообщества', href: '/ru/community' }
        ]
      },
      {
        title: 'Ресурсы',
        links: [
          { text: 'Архитектура', href: '/ru/architecture' },
          { text: 'Дорожная карта', href: '/ru/roadmap' },
          { text: 'Релизы', href: 'https://github.com/HatcherDX/dx-engine/releases' },
          { text: 'Сообщить о проблеме', href: 'https://github.com/HatcherDX/dx-engine/issues' },
          { text: 'Open Core Pact', href: '/ru/pact-pricing' }
        ]
      }
    ]
  },

  systems: {
    title: 'Системы командного пункта',
    subtitle: 'Четыре проверенных в боях системы, которые превращают вас из отладчика в командира:',
    systems: [
      {
        title: 'Конституционные Playbooks',
        description: 'Напишите свои боевые планы один раз. Ваши стандарты кодирования и архитектурные шаблоны становятся нерушимыми законами, которым должен следовать каждый AI-дрон. Никаких отклонений. Никакой интерпретации. Только исполнение.',
        link: '/ru/playbooks-system',
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
        title: 'Движок Time Graph',
        description: 'Центр управления миссиями для каждой операции. Отслеживайте действия каждого дрона, перематывайте неудавшиеся миссии, исследуйте альтернативные временные линии. История ваших команд сохраняется навсегда.',
        link: '/ru/pillars-time-graph',
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
        description: 'Разверните любое оружие из своего арсенала. Тот проверенный в боях модуль C++ из 2003 года? Логика COBOL, управляющая вашей империей? Все активы готовы к развертыванию через WebAssembly.',
        link: '/ru/pillars-universal-fabricator',
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
        title: 'Безопасность уровня крепости',
        description: 'Ваш командный центр неприступен. Стены, выкованные на Rust. Нулевое облачное воздействие. Каждая операция локальна. Ваши стратегии, ваш код, ваш суверенитет. Взлом невозможен.',
        link: '/ru/philosophy',
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
    title: 'Основные HATs',
    subtitle: 'Разработчик «носит разные шляпы» в течение дня. Hatcher предоставляет вам специальный HAT, или рабочее пространство, для каждой задачи:',
    hats: [
      {
        title: 'Code HAT',
        description: 'Редактор кода мирового класса на базе Monaco для тех моментов, когда вы находитесь в потоке чистого творчества.',
        link: '/ru/features-code-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="26,30 36,20 26,10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="14,10 4,20 14,30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        title: 'Gen HAT',
        description: 'Интерфейс для prompt-инжиниринга. Ваша прямая линия связи с AI-флотом.',
        link: '/ru/features-gen-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="10,28 18,20 10,12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="22" x2="30" y1="28" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>`
      },
      {
        title: 'Visual HAT',
        description: 'Рабочее пространство для проектирования и взаимодействия с UI-компонентами, соединяющее дизайн и код.',
        link: '/ru/features-visual-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20s5-12 16-12 16 12 16 12-5 12-16 12-16-12-16-12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        title: 'Time Graph HAT',
        description: 'Превосходный инструмент аудита. Квантовый граф истории вашего проекта для визуализации каждого изменения.',
        link: '/ru/features-time-graph-hat',
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
    title: 'В цифрах',
    metrics: [
      {
        number: '100%',
        label: 'Покрытие тестами',
        description: 'Автоматизировано AI, проверено вами. Отгружайте с уверенностью.'
      },
      {
        number: '0%',
        label: 'Зависимость от облака',
        description: 'Ваша интеллектуальная собственность остается вашей. Данные не покидают вашу машину.'
      },
      {
        number: '∞',
        label: 'Поддержка языков',
        description: 'От COBOL до Rust через WebAssembly. Используйте то, что работает.',
        isInfinity: true
      }
    ]
  },

  admiral: {
    title: 'Об адмирале',
    name: 'Chriss Mejía',
    jobTitle: 'Основатель и главный системный архитектор',
    photoUrl: '/chriss.jpg',
    photoAlt: 'Chriss Mejía',
    mission: 'Мой инженерный путь охватывает более двух десятилетий: от должности вице-президента в пионерском AI-стартапе Силиконовой долины до создания MVP для венчура, поддержанного YC, и руководства корпоративными подразделениями из 300 человек. Сейчас создаю инструменты, которые определят следующее десятилетие разработки.',
    quote: 'Будущее программного обеспечения — это не замена разработчиков.<br><span class="quote-emphasis">Это предоставление им командования.</span>',
    stats: [
      {
        number: '22',
        label: 'Лет разработки систем'
      },
      {
        number: '300+',
        label: 'Инженеров под руководством'
      },
      {
        number: 'YC',
        label: 'Создатель MVP',
        primary: true
      }
    ]
  },

  showcase: {
    scrollText: 'Прокрутите для изучения'
  }
}

export default ru
export type LocaleData = typeof ru
