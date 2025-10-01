/**
 * Korean locale data for Hatcher
 * Hatcher를 위한 한국어 로케일 데이터
 *
 * This file contains all translatable content for the Korean version of the site.
 * 이 파일은 사이트의 한국어 버전을 위한 모든 번역 가능한 콘텐츠를 포함합니다.
 */

const ko = {
  hero: {
    title: '헌법적 IDE',
    tagline: '당신이 잠자는 동안 코딩하는 AI 드론 함대를 지휘하세요. 군사적 정밀함으로 당신의 플레이북을 따르는 자동 조종 장치를 배포하세요. 당신이 디버거가 아닌 사령관이 되는 IDE입니다.',
    ctaText: '함대에 합류하기',
    ctaLink: '/ko/philosophy',
    logoAlt: 'Hatcher DX Engine'
  },

  features: [
    {
      title: '자율 AI 드론 배포',
      description: '당신의 플레이북을 실행하는 AI 에이전트 함대를 출시하세요. 그들은 당신이 잠자는 동안 코딩하고, 테스트하고, 리팩토링합니다. 완료된 임무와 함께 깨어나세요.',
      link: '/ko/autopilots',
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
      title: '헌법적 지휘 통제',
      description: '당신의 코딩 표준이 깨지지 않는 법칙이 됩니다. 모든 드론은 군사적 정밀함으로 당신의 헌법을 따릅니다. 무단 AI는 없습니다.',
      link: '/ko/constitutional-engineering',
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
      title: '시각적 임무 계획',
      description: '클릭으로 목표를 정의하세요. AI 함대는 모호한 프롬프트가 아닌 시각적 명령을 이해합니다. 잘못된 의사소통은 없습니다.',
      link: '/ko/visual-to-code',
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
      title: '당신의 요새, 당신의 규칙',
      description: '100% 로컬 실행. Rust 기반 보안. 당신의 코드는 절대 당신의 지휘 센터를 떠나지 않습니다. 완전한 운영 주권.',
      link: '/ko/architecture',
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
    title: '지휘를 맡을 준비가 되셨나요?',
    headline: 'AI 제어 개발의 미래를 형성할 첫 번째 사령관들 중 한 명이 되세요.',
    subheadline: '함대가 집결하고 있습니다. 초기 사령관은 평생 우선 접근 권한을 받습니다.',
    buttons: [
      {
        label: 'Discord 합류',
        description: '사령관 커뮤니티와 연결하세요',
        link: 'https://discord.gg/cZ7PZvnMk4',
        primary: true,
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.1 19.6 7.9 18.9L3 20L4.3 16.1C3.2 14.8 2.5 13.1 2.5 11.5C2.8 6.8 7.1 3 12 3C16.97 3 21 7.582 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        label: '철학 읽기',
        description: 'AI 제어에 대한 우리의 비전을 이해하세요',
        link: '/ko/philosophy',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5C12 5.67157 12.6716 5 13.5 5H20.5C21.3284 5 22 5.67157 22 6.5V19.5C22 20.3284 21.3284 21 20.5 21H13.5C12.6716 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 6.5C12 5.67157 11.3284 5 10.5 5H3.5C2.67157 5 2 5.67157 2 6.5V19.5C2 20.3284 2.67157 21 3.5 21H10.5C11.3284 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 5V21" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        label: 'GitHub에 별표 주기',
        description: '오픈소스 미션을 지원하세요',
        link: 'https://github.com/HatcherDX/dx-engine',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      }
    ]
  },

  footer: {
    tagline: '헌법적 IDE',
    legalText: '<a href="https://github.com/HatcherDX/dx-engine/blob/main/LICENSE">MIT 라이선스</a>에 따라 배포됩니다.',
    attributionText: '<svg class="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>로 <a href="https://github.com/chrissmejia">Chriss Mejía</a>와 <a href="/ko/community">Hatcher 커뮤니티</a>가 제작했습니다.',
    copyrightText: '© {year} Hatcher DX. 모든 권리 보유.',
    logoDark: '/logo-inline-dark.svg',
    logoLight: '/logo-inline-light.svg',
    logoAlt: 'Hatcher',
    columns: [
      {
        title: '제품',
        links: [
          { text: '시작하기', href: '/ko/getting-started' },
          { text: 'Code HAT', href: '/ko/features-code-hat' },
          { text: 'Gen HAT', href: '/ko/features-gen-hat' },
          { text: 'Visual HAT', href: '/ko/features-visual-hat' },
          { text: 'Time Graph HAT', href: '/ko/features-time-graph-hat' }
        ]
      },
      {
        title: '개념',
        links: [
          { text: '철학', href: '/ko/philosophy' },
          { text: 'Playbooks', href: '/ko/playbooks-system' },
          { text: 'Autopilots', href: '/ko/autopilots-system' },
          { text: 'Time Graph', href: '/ko/pillars-time-graph' },
          { text: 'Universal Fabricator', href: '/ko/pillars-universal-fabricator' }
        ]
      },
      {
        title: '커뮤니티',
        links: [
          { text: 'GitHub', href: 'https://github.com/HatcherDX/dx-engine' },
          { text: 'Discord', href: 'https://discord.gg/cZ7PZvnMk4' },
          { text: 'Twitter/X', href: 'https://twitter.com/HatcherDX' },
          { text: '기여하기', href: '/ko/contributing' },
          { text: '커뮤니티 가이드라인', href: '/ko/community' }
        ]
      },
      {
        title: '리소스',
        links: [
          { text: '아키텍처', href: '/ko/architecture' },
          { text: '로드맵', href: '/ko/roadmap' },
          { text: '릴리스', href: 'https://github.com/HatcherDX/dx-engine/releases' },
          { text: '이슈 보고', href: 'https://github.com/HatcherDX/dx-engine/issues' },
          { text: 'Open Core Pact', href: '/ko/pact-pricing' }
        ]
      }
    ]
  },

  systems: {
    title: 'Command Deck 시스템',
    subtitle: '당신을 디버거에서 사령관으로 바꾸는 네 가지 검증된 시스템:',
    systems: [
      {
        title: 'Constitutional Playbooks',
        description: '전투 계획을 한 번만 작성하세요. 당신의 코딩 표준과 아키텍처 패턴이 모든 AI 드론이 따라야 하는 불변의 법칙이 됩니다. 일탈도, 해석도 없습니다. 순수한 실행만 있을 뿐입니다.',
        link: '/ko/playbooks-system',
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
        description: '모든 작업의 미션 컨트롤. 모든 드론의 행동을 추적하고, 실패한 임무를 되돌리고, 대체 타임라인을 탐색하세요. 당신의 명령 히스토리가 영원히 보존됩니다.',
        link: '/ko/pillars-time-graph',
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
        description: '당신의 무기고에서 모든 무기를 배포하세요. 2003년의 그 검증된 C++ 모듈? 당신의 제국을 운영하는 COBOL 로직? 모든 자산이 WebAssembly를 통해 배포 준비가 되어 있습니다.',
        link: '/ko/pillars-universal-fabricator',
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
        title: '요새급 보안',
        description: '당신의 지휘 센터는 난공불락입니다. Rust로 만들어진 벽. 클라우드 노출 제로. 모든 작업이 로컬입니다. 당신의 전략, 당신의 코드, 당신의 주권. 침해는 불가능합니다.',
        link: '/ko/philosophy',
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
    title: '핵심 HAT들',
    subtitle: '개발자는 하루 종일 "다양한 역할(모자)을 쓰고" 일합니다. Hatcher는 모든 작업을 위한 전용 HAT 또는 작업 공간을 제공합니다:',
    hats: [
      {
        title: 'Code HAT',
        description: '순수한 창조의 흐름 속에 있을 때를 위한 Monaco 기반의 세계적 수준의 코드 에디터입니다.',
        link: '/ko/features-code-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="26,30 36,20 26,10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="14,10 4,20 14,30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        title: 'Gen HAT',
        description: '프롬프트 엔지니어링 인터페이스. AI 함대와의 직접적인 통신 라인입니다.',
        link: '/ko/features-gen-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="10,28 18,20 10,12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="22" x2="30" y1="28" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>`
      },
      {
        title: 'Visual HAT',
        description: 'UI 컴포넌트를 설계하고 상호 작용하며 디자인과 코드를 연결하는 작업 공간입니다.',
        link: '/ko/features-visual-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20s5-12 16-12 16 12 16 12-5 12-16 12-16-12-16-12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        title: 'Time Graph HAT',
        description: '궁극의 감사 도구. 모든 변경 사항을 시각화하는 프로젝트 히스토리의 양자 그래프입니다.',
        link: '/ko/features-time-graph-hat',
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
    title: '숫자로 보는 성과',
    metrics: [
      {
        number: '100%',
        label: '테스트 커버리지',
        description: 'AI가 자동화하고, 당신이 검증합니다. 자신감 있게 배포하세요.'
      },
      {
        number: '0%',
        label: '클라우드 의존성',
        description: '당신의 IP는 당신 것입니다. 어떤 데이터도 당신의 기기를 떠나지 않습니다.'
      },
      {
        number: '∞',
        label: '언어 지원',
        description: 'WebAssembly를 통해 COBOL에서 Rust까지. 효과적인 것을 사용하세요.',
        isInfinity: true
      }
    ]
  },

  admiral: {
    title: '제독 소개',
    name: 'Chriss Mejía',
    jobTitle: '창립자 겸 수석 시스템 아키텍트',
    photoUrl: '/chriss.jpg',
    photoAlt: 'Chriss Mejía',
    mission: '엔지니어링 분야에서의 제 여정은 20년 이상에 걸쳐 있으며, 실리콘 밸리의 선구적인 AI 스타트업에서 부사장으로 근무한 것부터 YC 지원 벤처를 위한 MVP를 구축하고 300명 규모의 엔터프라이즈 부서를 이끄는 것까지 포함됩니다. 지금은 향후 10년의 개발을 정의할 도구를 구축하고 있습니다.',
    quote: '소프트웨어의 미래는 개발자를 대체하는 것이 아닙니다.<br><span class="quote-emphasis">그들에게 지휘권을 부여하는 것입니다.</span>',
    stats: [
      {
        number: '22',
        label: '시스템 엔지니어링 경력'
      },
      {
        number: '300+',
        label: '이끈 엔지니어'
      },
      {
        number: 'YC',
        label: 'MVP 빌더',
        primary: true
      }
    ]
  },

  showcase: {
    scrollText: '스크롤하여 탐색하기'
  }
}

export default ko
export type LocaleData = typeof ko
