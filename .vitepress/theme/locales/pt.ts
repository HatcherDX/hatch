/**
 * Portuguese locale data for Hatcher
 *
 * This file contains all translatable content for the Portuguese version of the site.
 * Based on the English (en.ts) locale structure.
 * Language: Brazilian Portuguese
 */

import type { LocaleData } from './en'

export const pt: LocaleData = {
  hero: {
    title: 'IDE Constitucional',
    tagline: 'Comande uma frota de drones IA que codificam enquanto você dorme. Implante autopilotos que seguem seus playbooks com precisão militar. A IDE onde você é o Comandante, não o depurador.',
    ctaText: 'Junte-se à Frota',
    ctaLink: '/pt/philosophy',
    logoAlt: 'Hatcher DX Engine'
  },

  features: [
    {
      title: 'Implante Drones IA Autônomos',
      description: 'Lance frotas de agentes IA que executam seus playbooks. Eles codificam, testam e refatoram enquanto você dorme. Acorde com missões concluídas.',
      link: '/pt/autopilots',
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
      title: 'Comando e Controle Constitucional',
      description: 'Seus padrões de código se tornam leis inquebráveis. Cada drone segue sua constituição com precisão militar. Sem IA rebelde.',
      link: '/pt/constitutional-engineering',
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
      title: 'Planejamento Visual de Missões',
      description: 'Aponte e clique para definir objetivos. A frota IA entende comandos visuais, não prompts vagos. Zero falhas de comunicação.',
      link: '/pt/visual-to-code',
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
      title: 'Sua Fortaleza, Suas Regras',
      description: '100% execução local. Segurança potencializada por Rust. Seu código nunca sai do seu centro de comando. Soberania operacional total.',
      link: '/pt/architecture',
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
    title: 'Os Sistemas do Centro de Comando',
    subtitle: 'Quatro sistemas testados em batalha que transformam você de depurador em comandante:',
    systems: [
      {
        title: 'Playbooks Constitucionais',
        description: 'Escreva seus planos de batalha uma vez. Seus padrões de código e padrões de arquitetura se tornam leis imutáveis que cada drone IA deve seguir. Sem desvio. Sem interpretação. Execução pura.',
        link: '/pt/playbooks-system',
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
        title: 'Motor Time Graph',
        description: 'Controle de missão para cada operação. Rastreie a ação de cada drone, retroceda missões falhadas, explore linhas do tempo alternativas. Seu histórico de comandos preservado para sempre.',
        link: '/pt/pillars-time-graph',
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
        title: 'Fabricador Universal',
        description: 'Implante qualquer arma do seu arsenal. Aquele módulo C++ testado em batalha de 2003? A lógica COBOL que comanda seu império? Todos os recursos prontos para implantação via WebAssembly.',
        link: '/pt/pillars-universal-fabricator',
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
        title: 'Segurança Nível Fortaleza',
        description: 'Seu centro de comando é impenetrável. Muros forjados em Rust. Zero exposição à nuvem. Cada operação local. Suas estratégias, seu código, sua soberania. Sem brechas possíveis.',
        link: '/pt/philosophy',
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
    title: 'Os HATs Principais',
    subtitle: 'Um desenvolvedor "usa diferentes chapéus" ao longo do dia. Hatcher oferece um HAT dedicado, ou espaço de trabalho, para cada tarefa:',
    hats: [
      {
        title: 'O Code HAT',
        description: 'Um editor de código de classe mundial, alimentado pelo Monaco, para quando você está no fluxo de criação pura.',
        link: '/pt/features-code-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="26,30 36,20 26,10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="14,10 4,20 14,30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        title: 'O Gen HAT',
        description: 'A interface de engenharia de prompts. Sua linha direta de comunicação com a frota IA.',
        link: '/pt/features-gen-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="10,28 18,20 10,12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="22" x2="30" y1="28" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>`
      },
      {
        title: 'O Visual HAT',
        description: 'Um espaço de trabalho para projetar e interagir com componentes UI, conectando design e código.',
        link: '/pt/features-visual-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20s5-12 16-12 16 12 16 12-5 12-16 12-16-12-16-12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        title: 'O Time Graph HAT',
        description: 'A ferramenta de auditoria definitiva. Um gráfico quântico do histórico do seu projeto para visualizar cada mudança.',
        link: '/pt/features-time-graph-hat',
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
    title: 'Em Números',
    metrics: [
      {
        number: '100%',
        label: 'Cobertura de Testes',
        description: 'Automatizado por IA, verificado por você. Lance com confiança.'
      },
      {
        number: '0%',
        label: 'Dependência de Nuvem',
        description: 'Sua propriedade intelectual continua sua. Nenhum dado sai da sua máquina.'
      },
      {
        number: '∞',
        label: 'Suporte de Linguagens',
        description: 'De COBOL a Rust via WebAssembly. Use o que funciona.',
        isInfinity: true
      }
    ]
  },

  admiral: {
    title: 'Sobre o Almirante',
    name: 'Chriss Mejía',
    jobTitle: 'Fundador e Arquiteto Principal de Sistemas',
    photoUrl: '/chriss.jpg',
    photoAlt: 'Chriss Mejía',
    mission: 'Minha jornada na engenharia abrange mais de duas décadas, desde servir como VP em uma startup pioneira de IA no Vale do Silício até construir o MVP para um empreendimento apoiado pela YC, e liderar divisões empresariais de 300 pessoas. Agora construindo as ferramentas que definirão a próxima década de desenvolvimento.',
    quote: 'O futuro do software não é substituir desenvolvedores.<br><span class="quote-emphasis">É dar a eles o comando.</span>',
    stats: [
      {
        number: '22',
        label: 'Anos em Engenharia de Sistemas'
      },
      {
        number: '300+',
        label: 'Engenheiros Liderados'
      },
      {
        number: 'YC',
        label: 'Construtor de MVP',
        primary: true
      }
    ]
  },

  cta: {
    title: 'Pronto para Assumir o Comando?',
    headline: 'Seja um dos primeiros comandantes a moldar o futuro do desenvolvimento controlado por IA.',
    subheadline: 'A frota está se reunindo. Comandantes pioneiros obtêm acesso prioritário vitalício.',
    buttons: [
      {
        label: 'Junte-se ao Discord',
        description: 'Conecte-se com a comunidade de comandantes',
        link: 'https://discord.gg/cZ7PZvnMk4',
        primary: true,
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.1 19.6 7.9 18.9L3 20L4.3 16.1C3.2 14.8 2.5 13.1 2.5 11.5C2.8 6.8 7.1 3 12 3C16.97 3 21 7.582 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        label: 'Leia a Filosofia',
        description: 'Entenda nossa visão de controle de IA',
        link: '/pt/philosophy',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5C12 5.67157 12.6716 5 13.5 5H20.5C21.3284 5 22 5.67157 22 6.5V19.5C22 20.3284 21.3284 21 20.5 21H13.5C12.6716 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 6.5C12 5.67157 11.3284 5 10.5 5H3.5C2.67157 5 2 5.67157 2 6.5V19.5C2 20.3284 2.67157 21 3.5 21H10.5C11.3284 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 5V21" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        label: 'Estrela no GitHub',
        description: 'Apoie a missão de código aberto',
        link: 'https://github.com/HatcherDX/dx-engine',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      }
    ]
  },

  footer: {
    tagline: 'A IDE Constitucional',
    legalText: 'Lançado sob a <a href="https://github.com/HatcherDX/dx-engine/blob/main/LICENSE">Licença MIT</a>.',
    attributionText: 'Construído com&nbsp;<svg class="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>&nbsp;por <a href="https://github.com/chrissmejia">Chriss Mejía</a> e a <a href="/pt/community">comunidade Hatcher</a>.',
    copyrightText: '© {year} Hatcher DX. Todos os direitos reservados.',
    logoDark: '/logo-inline-dark.svg',
    logoLight: '/logo-inline-light.svg',
    logoAlt: 'Hatcher',
    columns: [
      {
        title: 'Produto',
        links: [
          { text: 'Começar', href: '/pt/getting-started' },
          { text: 'Code HAT', href: '/pt/features-code-hat' },
          { text: 'Gen HAT', href: '/pt/features-gen-hat' },
          { text: 'Visual HAT', href: '/pt/features-visual-hat' },
          { text: 'Time Graph HAT', href: '/pt/features-time-graph-hat' }
        ]
      },
      {
        title: 'Conceitos',
        links: [
          { text: 'Filosofia', href: '/pt/philosophy' },
          { text: 'Playbooks', href: '/pt/playbooks-system' },
          { text: 'Autopilots', href: '/pt/autopilots-system' },
          { text: 'Time Graph', href: '/pt/pillars-time-graph' },
          { text: 'Fabricador Universal', href: '/pt/pillars-universal-fabricator' }
        ]
      },
      {
        title: 'Comunidade',
        links: [
          { text: 'GitHub', href: 'https://github.com/HatcherDX/dx-engine' },
          { text: 'Discord', href: 'https://discord.gg/cZ7PZvnMk4' },
          { text: 'Twitter/X', href: 'https://twitter.com/HatcherDX' },
          { text: 'Contribuir', href: '/pt/contributing' },
          { text: 'Diretrizes da Comunidade', href: '/pt/community' }
        ]
      },
      {
        title: 'Recursos',
        links: [
          { text: 'Arquitetura', href: '/pt/architecture' },
          { text: 'Roteiro', href: '/pt/roadmap' },
          { text: 'Lançamentos', href: 'https://github.com/HatcherDX/dx-engine/releases' },
          { text: 'Relatar Problemas', href: 'https://github.com/HatcherDX/dx-engine/issues' },
          { text: 'Pacto Open Core', href: '/pt/pact-pricing' }
        ]
      }
    ]
  },

  showcase: {
    scrollText: 'Role para explorar'
  }
}
