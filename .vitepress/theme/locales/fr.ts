/**
 * French locale data for Hatcher
 *
 * This file contains all translatable content for the French version of the site.
 * Based on the English (en.ts) locale structure.
 */

import type { LocaleData } from './en'

export const fr: LocaleData = {
  hero: {
    title: 'IDE Constitutionnel',
    tagline: 'Commandez une flotte de drones IA qui codent pendant que vous dormez. Déployez des autopilots qui suivent vos playbooks avec précision militaire. L\'IDE où vous êtes le Commandant, pas le débogueur.',
    ctaText: 'Rejoindre la Flotte',
    ctaLink: '/philosophy',
    logoAlt: 'Hatcher DX Engine'
  },

  features: [
    {
      title: 'Déployez des Drones IA Autonomes',
      description: 'Lancez des flottes d\'agents IA qui exécutent vos playbooks. Ils codent, testent et refactorisent pendant que vous dormez. Réveillez-vous avec des missions accomplies.',
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
      title: 'Commande et Contrôle Constitutionnels',
      description: 'Vos standards de codage deviennent des lois inviolables. Chaque drone suit votre constitution avec précision militaire. Pas d\'IA rebelle.',
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
      title: 'Planification Visuelle de Missions',
      description: 'Pointez et cliquez pour définir les objectifs. La flotte IA comprend les commandes visuelles, pas les instructions vagues. Zéro malentendu.',
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
      title: 'Votre Forteresse, Vos Règles',
      description: 'Exécution 100% locale. Sécurité propulsée par Rust. Votre code ne quitte jamais votre centre de commandement. Souveraineté opérationnelle totale.',
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
    title: 'Les Systèmes du Poste de Commandement',
    subtitle: 'Quatre systèmes éprouvés au combat qui vous transforment de débogueur en commandant:',
    systems: [
      {
        title: 'Playbooks Constitutionnels',
        description: 'Écrivez vos plans de bataille une fois. Vos standards de codage et patterns d\'architecture deviennent des lois immuables que chaque drone IA doit suivre. Aucune déviation. Aucune interprétation. Exécution pure.',
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
        title: 'Moteur Time Graph',
        description: 'Contrôle de mission pour chaque opération. Suivez l\'action de chaque drone, rembobinez les missions échouées, explorez des chronologies alternatives. Votre historique de commandes préservé pour toujours.',
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
        title: 'Fabricateur Universel',
        description: 'Déployez n\'importe quelle arme de votre arsenal. Ce module C++ éprouvé de 2003? La logique COBOL qui fait tourner votre empire? Tous les actifs prêts au déploiement via WebAssembly.',
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
        title: 'Sécurité de Niveau Forteresse',
        description: 'Votre centre de commandement est impénétrable. Murs forgés en Rust. Zéro exposition cloud. Chaque opération locale. Vos stratégies, votre code, votre souveraineté. Aucune brèche possible.',
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
    title: 'Les HATs Principaux',
    subtitle: 'Un développeur "porte différents chapeaux" tout au long de la journée. Hatcher vous donne un HAT dédié, ou espace de travail, pour chaque tâche:',
    hats: [
      {
        title: 'Le Code HAT',
        description: 'Un éditeur de code de classe mondiale, propulsé par Monaco, pour quand vous êtes dans le flux de création pure.',
        link: '/features-code-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="26,30 36,20 26,10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="14,10 4,20 14,30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        title: 'Le Gen HAT',
        description: 'L\'interface d\'ingénierie de prompts. Votre ligne directe de communication avec la flotte IA.',
        link: '/features-gen-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="10,28 18,20 10,12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="22" x2="30" y1="28" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>`
      },
      {
        title: 'Le Visual HAT',
        description: 'Un espace de travail pour concevoir et interagir avec les composants UI, reliant design et code.',
        link: '/features-visual-hat',
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20s5-12 16-12 16 12 16 12-5 12-16 12-16-12-16-12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        title: 'Le Time Graph HAT',
        description: 'L\'outil d\'audit ultime. Un graphe quantique de l\'historique de votre projet pour visualiser chaque changement.',
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
    title: 'En Chiffres',
    metrics: [
      {
        number: '100%',
        label: 'Couverture de Tests',
        description: 'Automatisée par l\'IA, vérifiée par vous. Déployez en toute confiance.'
      },
      {
        number: '0%',
        label: 'Dépendance Cloud',
        description: 'Votre IP reste la vôtre. Aucune donnée ne quitte votre machine.'
      },
      {
        number: '∞',
        label: 'Support de Langages',
        description: 'De COBOL à Rust via WebAssembly. Utilisez ce qui fonctionne.',
        isInfinity: true
      }
    ]
  },

  admiral: {
    title: 'À Propos de l\'Amiral',
    name: 'Chriss Mejía',
    jobTitle: 'Fondateur et Architecte de Systèmes Principal',
    photoUrl: '/chriss.jpg',
    photoAlt: 'Chriss Mejía',
    mission: 'Mon parcours en ingénierie s\'étend sur plus de deux décennies, du poste de VP dans une startup IA pionnière de la Silicon Valley à la construction du MVP pour une entreprise soutenue par YC, en passant par la direction de divisions d\'entreprise de 300 personnes. Je construis maintenant les outils qui définiront la prochaine décennie de développement.',
    quote: 'L\'avenir du logiciel ne consiste pas à remplacer les développeurs.<br><span class="quote-emphasis">C\'est de leur donner le commandement.</span>',
    stats: [
      {
        number: '22',
        label: 'Années en Ingénierie Système'
      },
      {
        number: '300+',
        label: 'Ingénieurs Dirigés'
      },
      {
        number: 'YC',
        label: 'Constructeur MVP',
        primary: true
      }
    ]
  },

  cta: {
    title: 'Prêt à Prendre le Commandement?',
    headline: 'Soyez parmi les premiers commandants à façonner l\'avenir du développement contrôlé par IA.',
    subheadline: 'La flotte se rassemble. Les premiers commandants obtiennent un accès prioritaire à vie.',
    buttons: [
      {
        label: 'Rejoindre Discord',
        description: 'Connectez-vous avec la communauté des commandants',
        link: 'https://discord.gg/cZ7PZvnMk4',
        primary: true,
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.1 19.6 7.9 18.9L3 20L4.3 16.1C3.2 14.8 2.5 13.1 2.5 11.5C2.8 6.8 7.1 3 12 3C16.97 3 21 7.582 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        label: 'Lire la Philosophie',
        description: 'Comprenez notre vision du contrôle de l\'IA',
        link: '/philosophy',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5C12 5.67157 12.6716 5 13.5 5H20.5C21.3284 5 22 5.67157 22 6.5V19.5C22 20.3284 21.3284 21 20.5 21H13.5C12.6716 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 6.5C12 5.67157 11.3284 5 10.5 5H3.5C2.67157 5 2 5.67157 2 6.5V19.5C2 20.3284 2.67157 21 3.5 21H10.5C11.3284 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 5V21" stroke="currentColor" stroke-width="1.5"/>
              </svg>`
      },
      {
        label: 'Étoile sur GitHub',
        description: 'Soutenez la mission open-source',
        link: 'https://github.com/HatcherDX/dx-engine',
        icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      }
    ]
  },

  footer: {
    tagline: 'L\'IDE Constitutionnel',
    legalText: 'Publié sous la <a href="https://github.com/HatcherDX/dx-engine/blob/main/LICENSE">Licence MIT</a>.',
    attributionText: 'Construit avec <svg class="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> par <a href="https://github.com/chrissmejia">Chriss Mejía</a> et la <a href="/community">communauté Hatcher</a>.',
    copyrightText: '© {year} Hatcher DX. Tous droits réservés.',
    logoDark: '/logo-inline-dark.svg',
    logoLight: '/logo-inline-light.svg',
    logoAlt: 'Hatcher',
    columns: [
      {
        title: 'Produit',
        links: [
          { text: 'Commencer', href: '/getting-started' },
          { text: 'Code HAT', href: '/features-code-hat' },
          { text: 'Gen HAT', href: '/features-gen-hat' },
          { text: 'Visual HAT', href: '/features-visual-hat' },
          { text: 'Time Graph HAT', href: '/features-time-graph-hat' }
        ]
      },
      {
        title: 'Concepts',
        links: [
          { text: 'Philosophie', href: '/philosophy' },
          { text: 'Playbooks', href: '/playbooks-system' },
          { text: 'Autopilots', href: '/autopilots' },
          { text: 'Time Graph', href: '/pillars-time-graph' },
          { text: 'Fabricateur Universel', href: '/pillars-universal-fabricator' }
        ]
      },
      {
        title: 'Communauté',
        links: [
          { text: 'GitHub', href: 'https://github.com/HatcherDX/dx-engine' },
          { text: 'Discord', href: 'https://discord.gg/cZ7PZvnMk4' },
          { text: 'Twitter/X', href: 'https://twitter.com/HatcherDX' },
          { text: 'Contribuer', href: '/contributing' },
          { text: 'Directives Communautaires', href: '/community' }
        ]
      },
      {
        title: 'Ressources',
        links: [
          { text: 'Architecture', href: '/architecture' },
          { text: 'Feuille de Route', href: '/roadmap' },
          { text: 'Versions', href: 'https://github.com/HatcherDX/dx-engine/releases' },
          { text: 'Signaler des Problèmes', href: 'https://github.com/HatcherDX/dx-engine/issues' },
          { text: 'Pacte Open Core', href: '/pact-pricing' }
        ]
      }
    ]
  },

  showcase: {
    scrollText: 'Faites défiler pour explorer'
  }
}
