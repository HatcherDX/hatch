/**
 * German locale data for Hatcher
 *
 * This file contains all translatable content for the German version of the site.
 * Based on the English (en.ts) locale structure.
 */

import type { LocaleData } from './en'

export const de: LocaleData = {
  hero: {
    title: 'Konstitutionelle IDE',
    tagline: 'Befehligen Sie eine Flotte von KI-Drohnen, die codieren, während Sie schlafen. Setzen Sie Autopilots ein, die Ihren Playbooks mit militärischer Präzision folgen. Die IDE, in der Sie der Kommandant sind, nicht der Debugger.',
    ctaText: 'Treten Sie der Flotte Bei',
    ctaLink: '/de/philosophy',
    logoAlt: 'Hatcher DX Engine'
  },

  features: [
    {
      title: 'Setzen Sie Autonome KI-Drohnen Ein',
      description: 'Starten Sie Flotten von KI-Agenten, die Ihre Playbooks ausführen. Sie codieren, testen und refaktorisieren, während Sie schlafen. Wachen Sie mit abgeschlossenen Missionen auf.',
      link: '/de/autopilots',
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
      title: 'Konstitutionelles Kommando und Kontrolle',
      description: 'Ihre Code-Standards werden zu unzerbrechlichen Gesetzen. Jede Drohne folgt Ihrer Verfassung mit militärischer Präzision. Keine abtrünnige KI.',
      link: '/de/constitutional-engineering',
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
      title: 'Visuelle Missionsplanung',
      description: 'Zeigen und klicken Sie, um Ziele zu definieren. Die KI-Flotte versteht visuelle Befehle, keine vagen Prompts. Null Missverständnisse.',
      link: '/de/visual-to-code',
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
      title: 'Ihre Festung, Ihre Regeln',
      description: '100% lokale Ausführung. Rust-gestützte Sicherheit. Ihr Code verlässt niemals Ihr Command Center. Totale operative Souveränität.',
      link: '/de/architecture',
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
    title: 'Die Command Center Systeme',
    subtitle: 'Vier kampferprobte Systeme, die Sie vom Debugger zum Kommandanten machen:',
    systems: [
      {
        title: 'Constitutional Playbooks',
        description: 'Schreiben Sie Ihre Schlachtpläne einmal. Ihre Code-Standards und architektonischen Muster werden zu unveränderlichen Gesetzen, denen jede KI-Drohne folgen muss. Keine Abweichung. Keine Interpretation. Pure Ausführung.',
        link: '/de/playbooks-system',
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
        description: 'Missionskontrolle für jede Operation. Verfolgen Sie die Aktion jeder Drohne, spulen Sie gescheiterte Missionen zurück, erkunden Sie alternative Timelines. Ihre Befehlshistorie für immer bewahrt.',
        link: '/de/pillars-time-graph',
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
        description: 'Deployen Sie jede Waffe aus Ihrem Arsenal. Das kampferprobte C++-Modul von 2003? Die COBOL-Logik, die Ihr Imperium antreibt? Alle Assets einsatzbereit via WebAssembly.',
        link: '/de/pillars-universal-fabricator',
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
        title: 'Festungs-Grad Sicherheit',
        description: 'Ihr Command Center ist undurchdringlich. Wände aus Rust geschmiedet. Null Cloud-Exposition. Jede Operation lokal. Ihre Strategien, Ihr Code, Ihre Souveränität. Keine Sicherheitslücken möglich.',
        link: '/de/philosophy',
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
    title: 'Die Kern-HATs',
    subtitle: 'Ein Entwickler "trägt verschiedene Hüte" im Laufe des Tages. Hatcher gibt Ihnen einen dedizierten HAT, oder Workspace, für jede Aufgabe:',
    hats: [
      {
        title: 'Der Code HAT',
        description: 'Ein Weltklasse-Code-Editor, angetrieben von Monaco, für wenn Sie im Flow purer Kreation sind.',
        link: '/de/features-code-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="26,30 36,20 26,10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="14,10 4,20 14,30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        title: 'Der Gen HAT',
        description: 'Die Prompt-Engineering-Schnittstelle. Ihre direkte Verbindung zur KI-Flotte.',
        link: '/de/features-gen-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="10,28 18,20 10,12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="22" x2="30" y1="28" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>`
      },
      {
        title: 'Der Visual HAT',
        description: 'Ein Workspace zum Designen und Interagieren mit UI-Komponenten, verbindet Design und Code.',
        link: '/de/features-visual-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20s5-12 16-12 16 12 16 12-5 12-16 12-16-12-16-12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        title: 'Der Time Graph HAT',
        description: 'Das ultimative Audit-Tool. Ein Quanten-Graph der Projekthistorie zur Visualisierung jeder Änderung.',
        link: '/de/features-time-graph-hat',
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
    title: 'In Zahlen',
    metrics: [
      {
        number: '100%',
        label: 'Testabdeckung',
        description: 'Von KI automatisiert, von Ihnen verifiziert. Deployen Sie mit Vertrauen.'
      },
      {
        number: '0%',
        label: 'Cloud-Abhängigkeit',
        description: 'Ihr IP bleibt bei Ihnen. Keine Daten verlassen Ihre Maschine.'
      },
      {
        number: '∞',
        label: 'Sprach-Unterstützung',
        description: 'Von COBOL bis Rust via WebAssembly. Nutzen Sie, was funktioniert.',
        isInfinity: true
      }
    ]
  },

  admiral: {
    title: 'Über den Admiral',
    name: 'Chriss Mejía',
    jobTitle: 'Gründer und Leitender Systemarchitekt',
    photoUrl: '/chriss.jpg',
    photoAlt: 'Chriss Mejía',
    mission: 'Meine Engineering-Reise erstreckt sich über zwei Jahrzehnte, vom VP in einem KI-Pionier-Startup im Silicon Valley über den Bau des MVP für ein YC-gestütztes Venture bis zur Leitung von 300-köpfigen Enterprise-Divisionen. Jetzt baue ich die Tools, die das nächste Jahrzehnt der Entwicklung definieren werden.',
    quote: 'Die Zukunft der Software geht nicht darum, Entwickler zu ersetzen.<br><span class="quote-emphasis">Es geht darum, ihnen das Kommando zu geben.</span>',
    stats: [
      {
        number: '22',
        label: 'Jahre in System-Engineering'
      },
      {
        number: '300+',
        label: 'Geführte Ingenieure'
      },
      {
        number: 'YC',
        label: 'MVP-Erbauer',
        primary: true
      }
    ]
  },

  cta: {
    title: 'Bereit, das Kommando zu Übernehmen?',
    headline: 'Seien Sie einer der ersten Kommandanten, die die Zukunft der KI-gesteuerten Entwicklung gestalten.',
    subheadline: 'Die Flotte sammelt sich. Frühe Kommandanten erhalten lebenslangen Priority Access.',
    buttons: [
      {
        label: 'Discord Beitreten',
        description: 'Verbinden Sie sich mit der Kommandanten-Community',
        link: 'https://discord.gg/cZ7PZvnMk4',
        primary: true,
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.1 19.6 7.9 18.9L3 20L4.3 16.1C3.2 14.8 2.5 13.1 2.5 11.5C2.8 6.8 7.1 3 12 3C16.97 3 21 7.582 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        label: 'Philosophie Lesen',
        description: 'Verstehen Sie unsere Vision von KI-Kontrolle',
        link: '/de/philosophy',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5C12 5.67157 12.6716 5 13.5 5H20.5C21.3284 5 22 5.67157 22 6.5V19.5C22 20.3284 21.3284 21 20.5 21H13.5C12.6716 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 6.5C12 5.67157 11.3284 5 10.5 5H3.5C2.67157 5 2 5.67157 2 6.5V19.5C2 20.3284 2.67157 21 3.5 21H10.5C11.3284 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 5V21" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        label: 'GitHub Stern Geben',
        description: 'Unterstützen Sie die Open-Source-Mission',
        link: 'https://github.com/HatcherDX/dx-engine',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      }
    ]
  },

  footer: {
    tagline: 'Die Konstitutionelle IDE',
    legalText: 'Veröffentlicht unter der <a href="https://github.com/HatcherDX/dx-engine/blob/main/LICENSE">MIT-Lizenz</a>.',
    attributionText: 'Mit&nbsp;<svg class="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>&nbsp;gebaut von <a href="https://github.com/chrissmejia">Chriss Mejía</a> und der <a href="/de/community">Hatcher Community</a>.',
    copyrightText: '© {year} Hatcher DX. Alle Rechte vorbehalten.',
    logoDark: '/logo-inline-dark.svg',
    logoLight: '/logo-inline-light.svg',
    logoAlt: 'Hatcher',
    columns: [
      {
        title: 'Produkt',
        links: [
          { text: 'Erste Schritte', href: '/de/getting-started' },
          { text: 'Code HAT', href: '/de/features-code-hat' },
          { text: 'Gen HAT', href: '/de/features-gen-hat' },
          { text: 'Visual HAT', href: '/de/features-visual-hat' },
          { text: 'Time Graph HAT', href: '/de/features-time-graph-hat' }
        ]
      },
      {
        title: 'Konzepte',
        links: [
          { text: 'Philosophie', href: '/de/philosophy' },
          { text: 'Playbooks', href: '/de/playbooks-system' },
          { text: 'Autopilots', href: '/de/autopilots' },
          { text: 'Time Graph', href: '/de/pillars-time-graph' },
          { text: 'Universal Fabricator', href: '/de/pillars-universal-fabricator' }
        ]
      },
      {
        title: 'Community',
        links: [
          { text: 'GitHub', href: 'https://github.com/HatcherDX/dx-engine' },
          { text: 'Discord', href: 'https://discord.gg/cZ7PZvnMk4' },
          { text: 'Twitter/X', href: 'https://twitter.com/HatcherDX' },
          { text: 'Beitragen', href: '/de/contributing' },
          { text: 'Community-Richtlinien', href: '/de/community' }
        ]
      },
      {
        title: 'Ressourcen',
        links: [
          { text: 'Architektur', href: '/de/architecture' },
          { text: 'Roadmap', href: '/de/roadmap' },
          { text: 'Releases', href: 'https://github.com/HatcherDX/dx-engine/releases' },
          { text: 'Probleme Melden', href: 'https://github.com/HatcherDX/dx-engine/issues' },
          { text: 'Open Core Pakt', href: '/de/pact-pricing' }
        ]
      }
    ]
  },

  showcase: {
    scrollText: 'Scrollen Sie zum Erkunden'
  }
}
