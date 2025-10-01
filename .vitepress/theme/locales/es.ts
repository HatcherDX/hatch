/**
 * Spanish locale data for Hatcher
 *
 * This file contains all translatable content for the Spanish version of the site.
 * Based on the English (en.ts) locale structure.
 */

import type { LocaleData } from './en'

export const es: LocaleData = {
  hero: {
    title: 'IDE Constitucional',
    tagline: 'Comanda una flota de drones IA que codifican mientras duermes. Despliega autopilotos que siguen tus playbooks con precisión militar. El IDE donde eres el Comandante, no el depurador.',
    ctaText: 'Únete a la Flota',
    ctaLink: '/philosophy',
    logoAlt: 'Hatcher DX Engine'
  },

  features: [
    {
      title: 'Despliega Drones IA Autónomos',
      description: 'Lanza flotas de agentes IA que ejecutan tus playbooks. Codifican, prueban y refactorizan mientras duermes. Despierta con misiones completadas.',
      link: '/autopilots',
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
      title: 'Comando y Control Constitucional',
      description: 'Tus estándares de código se convierten en leyes inquebrantables. Cada drone sigue tu constitución con precisión militar. Sin IA rebelde.',
      link: '/constitutional-engineering',
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
      title: 'Planificación Visual de Misiones',
      description: 'Apunta y haz clic para definir objetivos. La flota IA entiende comandos visuales, no indicaciones vagas. Cero malentendidos.',
      link: '/visual-to-code',
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
      title: 'Tu Fortaleza, Tus Reglas',
      description: '100% ejecución local. Seguridad potenciada por Rust. Tu código nunca sale de tu centro de comando. Soberanía operacional total.',
      link: '/architecture',
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
    title: 'Los Sistemas del Centro de Comando',
    subtitle: 'Cuatro sistemas probados en batalla que te convierten de depurador a comandante:',
    systems: [
      {
        title: 'Playbooks Constitucionales',
        description: 'Escribe tus planes de batalla una vez. Tus estándares de código y patrones arquitectónicos se convierten en leyes inmutables que cada drone IA debe seguir. Sin desviación. Sin interpretación. Ejecución pura.',
        link: '/playbooks-system',
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
        description: 'Control de misión para cada operación. Rastrea la acción de cada drone, rebobina misiones fallidas, explora líneas de tiempo alternativas. Tu historial de comandos preservado para siempre.',
        link: '/pillars-time-graph',
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
        description: 'Despliega cualquier arma de tu arsenal. ¿Ese módulo C++ probado en batalla de 2003? ¿La lógica COBOL que ejecuta tu imperio? Todos los activos listos para despliegue vía WebAssembly.',
        link: '/pillars-universal-fabricator',
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
        title: 'Seguridad Grado Fortaleza',
        description: 'Tu centro de comando es impenetrable. Muros forjados en Rust. Cero exposición en la nube. Cada operación local. Tus estrategias, tu código, tu soberanía. Sin brechas posibles.',
        link: '/philosophy',
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
    title: 'Los HATs Principales',
    subtitle: 'Un desarrollador "usa diferentes sombreros" durante el día. Hatcher te da un HAT dedicado, o espacio de trabajo, para cada tarea:',
    hats: [
      {
        title: 'El Code HAT',
        description: 'Un editor de código de clase mundial, impulsado por Monaco, para cuando estás en el flujo de creación pura.',
        link: '/features-code-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="26,30 36,20 26,10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="14,10 4,20 14,30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        title: 'El Gen HAT',
        description: 'La interfaz de ingeniería de prompts. Tu línea directa de comunicación con la flota IA.',
        link: '/features-gen-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="10,28 18,20 10,12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="22" x2="30" y1="28" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>`
      },
      {
        title: 'El Visual HAT',
        description: 'Un espacio de trabajo para diseñar e interactuar con componentes UI, uniendo diseño y código.',
        link: '/features-visual-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20s5-12 16-12 16 12 16 12-5 12-16 12-16-12-16-12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        title: 'El Time Graph HAT',
        description: 'La herramienta de auditoría definitiva. Un gráfico cuántico del historial de tu proyecto para visualizar cada cambio.',
        link: '/features-time-graph-hat',
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
    title: 'En Números',
    metrics: [
      {
        number: '100%',
        label: 'Cobertura de Pruebas',
        description: 'Automatizado por IA, verificado por ti. Despliega con confianza.'
      },
      {
        number: '0%',
        label: 'Dependencia de la Nube',
        description: 'Tu IP se queda contigo. Ningún dato sale de tu máquina.'
      },
      {
        number: '∞',
        label: 'Soporte de Lenguajes',
        description: 'De COBOL a Rust vía WebAssembly. Usa lo que funcione.',
        isInfinity: true
      }
    ]
  },

  admiral: {
    title: 'Sobre el Almirante',
    name: 'Chriss Mejía',
    jobTitle: 'Fundador y Arquitecto Principal de Sistemas',
    photoUrl: '/chriss.jpg',
    photoAlt: 'Chriss Mejía',
    mission: 'Mi trayectoria en ingeniería abarca más de dos décadas, desde servir como VP en una startup pionera de IA en Silicon Valley hasta construir el MVP para un emprendimiento respaldado por YC, y liderar divisiones empresariales de 300 personas. Ahora construyendo las herramientas que definirán la próxima década de desarrollo.',
    quote: 'El futuro del software no es reemplazar desarrolladores.<br><span class="quote-emphasis">Es darles el mando.</span>',
    stats: [
      {
        number: '22',
        label: 'Años en Ingeniería de Sistemas'
      },
      {
        number: '300+',
        label: 'Ingenieros Liderados'
      },
      {
        number: 'YC',
        label: 'Constructor de MVP',
        primary: true
      }
    ]
  },

  cta: {
    title: '¿Listo para Tomar el Mando?',
    headline: 'Sé uno de los primeros comandantes en dar forma al futuro del desarrollo controlado por IA.',
    subheadline: 'La flota se está reuniendo. Los comandantes tempranos obtienen acceso prioritario de por vida.',
    buttons: [
      {
        label: 'Únete a Discord',
        description: 'Conéctate con la comunidad de comandantes',
        link: 'https://discord.gg/cZ7PZvnMk4',
        primary: true,
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.1 19.6 7.9 18.9L3 20L4.3 16.1C3.2 14.8 2.5 13.1 2.5 11.5C2.8 6.8 7.1 3 12 3C16.97 3 21 7.582 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        label: 'Lee la Filosofía',
        description: 'Comprende nuestra visión del control de IA',
        link: '/philosophy',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5C12 5.67157 12.6716 5 13.5 5H20.5C21.3284 5 22 5.67157 22 6.5V19.5C22 20.3284 21.3284 21 20.5 21H13.5C12.6716 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 6.5C12 5.67157 11.3284 5 10.5 5H3.5C2.67157 5 2 5.67157 2 6.5V19.5C2 20.3284 2.67157 21 3.5 21H10.5C11.3284 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 5V21" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        label: 'Estrella en GitHub',
        description: 'Apoya la misión de código abierto',
        link: 'https://github.com/HatcherDX/dx-engine',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      }
    ]
  },

  footer: {
    tagline: 'El IDE Constitucional',
    legalText: 'Lanzado bajo la <a href="https://github.com/HatcherDX/dx-engine/blob/main/LICENSE">Licencia MIT</a>.',
    attributionText: 'Construido con&nbsp;<svg class="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>&nbsp;por <a href="https://github.com/chrissmejia">Chriss Mejía</a> y la <a href="/community">comunidad de Hatcher</a>.',
    copyrightText: '© {year} Hatcher DX. Todos los derechos reservados.',
    logoDark: '/logo-inline-dark.svg',
    logoLight: '/logo-inline-light.svg',
    logoAlt: 'Hatcher',
    columns: [
      {
        title: 'Producto',
        links: [
          { text: 'Comenzar', href: '/getting-started' },
          { text: 'Code HAT', href: '/features-code-hat' },
          { text: 'Gen HAT', href: '/features-gen-hat' },
          { text: 'Visual HAT', href: '/features-visual-hat' },
          { text: 'Time Graph HAT', href: '/features-time-graph-hat' }
        ]
      },
      {
        title: 'Conceptos',
        links: [
          { text: 'Filosofía', href: '/philosophy' },
          { text: 'Playbooks', href: '/playbooks-system' },
          { text: 'Autopilots', href: '/autopilots' },
          { text: 'Time Graph', href: '/pillars-time-graph' },
          { text: 'Fabricador Universal', href: '/pillars-universal-fabricator' }
        ]
      },
      {
        title: 'Comunidad',
        links: [
          { text: 'GitHub', href: 'https://github.com/HatcherDX/dx-engine' },
          { text: 'Discord', href: 'https://discord.gg/cZ7PZvnMk4' },
          { text: 'Twitter/X', href: 'https://twitter.com/HatcherDX' },
          { text: 'Contribuir', href: '/contributing' },
          { text: 'Directrices de la Comunidad', href: '/community' }
        ]
      },
      {
        title: 'Recursos',
        links: [
          { text: 'Arquitectura', href: '/architecture' },
          { text: 'Hoja de Ruta', href: '/roadmap' },
          { text: 'Lanzamientos', href: 'https://github.com/HatcherDX/dx-engine/releases' },
          { text: 'Reportar Problemas', href: 'https://github.com/HatcherDX/dx-engine/issues' },
          { text: 'Pacto Open Core', href: '/pact-pricing' }
        ]
      }
    ]
  },

  showcase: {
    scrollText: 'Desplázate para explorar'
  }
}
