<template>
  <footer class="landing-footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div
          v-for="(column, index) in columns"
          :key="index"
          class="footer-column"
        >
          <h4>{{ column.title }}</h4>
          <ul>
            <li v-for="(link, linkIndex) in column.links" :key="linkIndex">
              <a :href="link.href">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-brand">
          <img :src="logoDark" :alt="logoAlt" class="footer-logo dark-only" />
          <img :src="logoLight" :alt="logoAlt" class="footer-logo light-only" />
          <p class="footer-tagline">{{ tagline }}</p>
        </div>
        <div class="footer-legal">
          <p v-html="legalText"></p>
          <p v-html="attributionText"></p>
          <p>{{ copyrightText.replace('{year}', currentYear.toString()) }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface FooterLink {
  text: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface FooterSectionProps {
  columns?: FooterColumn[]
  tagline?: string
  legalText?: string
  attributionText?: string
  copyrightText?: string
  logoDark?: string
  logoLight?: string
  logoAlt?: string
}

const props = withDefaults(defineProps<FooterSectionProps>(), {
  tagline: 'The Constitutional IDE',
  legalText: 'Released under the <a href="https://github.com/HatcherDX/dx-engine/blob/main/LICENSE">MIT License</a>.',
  attributionText: 'Built with&nbsp;<svg class="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>&nbsp;by <a href="https://github.com/chrissmejia">Chriss Mejía</a> and the <a href="/community">Hatcher community</a>.',
  copyrightText: '© {year} Hatcher DX. All rights reserved.',
  logoDark: '/logo-inline-dark.svg',
  logoLight: '/logo-inline-light.svg',
  logoAlt: 'Hatcher',
  columns: () => [
    {
      title: 'Product',
      links: [
        { text: 'Getting Started', href: '/getting-started' },
        { text: 'Code HAT', href: '/features-code-hat' },
        { text: 'Gen HAT', href: '/features-gen-hat' },
        { text: 'Visual HAT', href: '/features-visual-hat' },
        { text: 'Time Graph HAT', href: '/features-time-graph-hat' }
      ]
    },
    {
      title: 'Concepts',
      links: [
        { text: 'Philosophy', href: '/philosophy' },
        { text: 'Playbooks', href: '/playbooks-system' },
        { text: 'Autopilots', href: '/autopilots-system' },
        { text: 'Time Graph', href: '/pillars-time-graph' },
        { text: 'Universal Fabricator', href: '/pillars-universal-fabricator' }
      ]
    },
    {
      title: 'Community',
      links: [
        { text: 'GitHub', href: 'https://github.com/HatcherDX/dx-engine' },
        { text: 'Discord', href: 'https://discord.gg/cZ7PZvnMk4' },
        { text: 'Twitter/X', href: 'https://twitter.com/HatcherDX' },
        { text: 'Contributing', href: '/contributing' },
        { text: 'Community Guidelines', href: '/community' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { text: 'Architecture', href: '/architecture' },
        { text: 'Roadmap', href: '/roadmap' },
        { text: 'Releases', href: 'https://github.com/HatcherDX/dx-engine/releases' },
        { text: 'Report Issues', href: 'https://github.com/HatcherDX/dx-engine/issues' },
        { text: 'Open Core Pact', href: '/pact-pricing' }
      ]
    }
  ]
})

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
/* Premium Footer Section */
.landing-footer {
  margin-top: 120px !important;
  padding: 80px 2rem 40px !important;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(223, 169, 39, 0.02),
    rgba(0, 0, 0, 0.03)
  ) !important;
  border-top: 1px solid rgba(223, 169, 39, 0.08) !important;
  position: relative !important;
  overflow: hidden !important;
}

/* Dark mode footer background */
.dark .landing-footer {
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(223, 169, 39, 0.01),
    rgba(0, 0, 0, 0.2)
  ) !important;
  border-top-color: rgba(223, 169, 39, 0.06) !important;
}

/* Decorative gradient line at top */
.landing-footer::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  height: 1px !important;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(223, 169, 39, 0.3),
    transparent
  ) !important;
  pointer-events: none !important;
}

.footer-container {
  max-width: 1200px !important;
  margin: 0 auto !important;
  position: relative !important;
}

/* Grid Layout */
.footer-grid {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 3rem !important;
  margin-bottom: 60px !important;
}

/* Footer Columns */
.footer-column {
  display: flex !important;
  flex-direction: column !important;
  gap: 1rem !important;
}

.footer-column h4 {
  font-size: 0.875rem !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  color: var(--vp-c-text-1) !important;
  margin: 0 0 0.5rem 0 !important;
  opacity: 0.9 !important;
}

.footer-column ul {
  list-style: none !important;
  padding: 0 !important;
  margin: 0 !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 0.75rem !important;
}

.footer-column li {
  margin: 0 !important;
  padding: 0 !important;
}

.footer-column a {
  color: var(--vp-c-text-2) !important;
  text-decoration: none !important;
  font-size: 0.9rem !important;
  font-weight: 500 !important;
  transition: color 0.25s !important;
  display: inline-block !important;
  position: relative !important;
}

.footer-column a:hover {
  color: var(--vp-c-brand-1) !important;
  text-decoration: none !important;
}

.dark .footer-column a:hover {
  color: var(--vp-c-brand-2) !important;
}

/* Elegant underline animation - using ::before to avoid conflict with VitePress external link icon */
.footer-column a::before {
  content: '' !important;
  position: absolute !important;
  bottom: -2px !important;
  left: 0 !important;
  width: 0 !important;
  height: 1px !important;
  background: var(--vp-c-brand-1) !important;
  transition: width 0.3s ease !important;
}

.footer-column a:hover::before {
  width: 100% !important;
}

/* Suppress VitePress external link icon in footer */
.footer-column a[href*='://']::after,
.footer-column a[target='_blank']::after {
  display: none !important;
}

/* Footer Bottom Section */
.footer-bottom {
  padding-top: 40px !important;
  border-top: 1px solid rgba(223, 169, 39, 0.06) !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  gap: 3rem !important;
}

/* Brand Section */
.footer-brand {
  display: flex !important;
  align-items: center !important;
  gap: 0.75rem !important;
}

.footer-logo {
  height: 40px !important;
  width: auto !important;
  opacity: 0.85 !important;
  transition: all 0.3s ease !important;
}

.footer-logo:hover {
  opacity: 1 !important;
  transform: translateY(-1px) !important;
}

/* Show/hide logos based on theme */
.dark-only {
  display: none !important;
}

.dark .dark-only {
  display: block !important;
}

.light-only {
  display: block !important;
}

.dark .light-only {
  display: none !important;
}

.footer-tagline {
  font-family: 'Cinzel', 'Georgia', serif !important;
  font-size: 0.9rem !important;
  color: var(--vp-c-text-3) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.12em !important;
  margin: 0 !important;
  font-weight: 400 !important;
  opacity: 0.7 !important;
  line-height: 1 !important;
}

/* Legal Section */
.footer-legal {
  text-align: right !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 0.4rem !important;
  align-items: flex-end !important;
}

.footer-legal p {
  margin: 0 !important;
  font-size: 0.875rem !important;
  color: var(--vp-c-text-3) !important;
  opacity: 0.7 !important;
  line-height: 1.6 !important;
  word-wrap: break-word !important;
  display: inline-block !important;
  max-width: 100% !important;
}

.footer-legal a {
  color: var(--vp-c-brand-1) !important;
  text-decoration: none !important;
  font-weight: 500 !important;
  transition: color 0.25s !important;
  display: inline-block !important;
  position: relative !important;
}

.footer-legal a:hover {
  color: var(--vp-c-brand-2) !important;
  text-decoration: none !important;
}

/* Elegant underline animation for legal links - using ::before */
.footer-legal a::before {
  content: '' !important;
  position: absolute !important;
  bottom: -2px !important;
  left: 0 !important;
  width: 0 !important;
  height: 1px !important;
  background: var(--vp-c-brand-1) !important;
  transition: width 0.3s ease !important;
}

.footer-legal a:hover::before {
  width: 100% !important;
}

/* Suppress VitePress external link icon in legal section */
.footer-legal a[href*='://']::after,
.footer-legal a[target='_blank']::after {
  display: none !important;
}

/* Heart icon styling - elegant gold */
.heart-icon {
  display: inline-block !important;
  vertical-align: middle !important;
  color: #c9962f !important;  /* Refined gold color */
  opacity: 0.7 !important;
  transition: all 0.3s ease !important;
  margin: 0 4px !important;
  width: 14px !important;
  height: 14px !important;
  flex-shrink: 0 !important;
  /* Prevent orphaning by treating as word */
  word-break: keep-all !important;
}

/* Subtle hover effect on the entire line */
.footer-legal p:hover .heart-icon {
  opacity: 1 !important;
  transform: scale(1.1) !important;
}

/* Dark mode heart color */
.dark .heart-icon {
  color: #d4a847 !important;  /* Warm gold for dark mode */
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 2.5rem !important;
  }
}

/* Tablets - Keep 2 columns */
@media (max-width: 768px) and (min-width: 641px) {
  .landing-footer {
    padding: 60px 1.5rem 30px !important;
  }

  .footer-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 2rem !important;
    margin-bottom: 40px !important;
  }

  .footer-bottom {
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    gap: 2rem !important;
  }

  .footer-brand {
    flex-direction: row !important;
    align-items: center !important;
  }

  .footer-tagline {
    font-size: 0.75rem !important;
  }

  .footer-legal {
    text-align: center !important;
  }

  .footer-column h4 {
    font-size: 0.85rem !important;
  }

  .footer-column a {
    font-size: 0.85rem !important;
  }
}

@media (max-width: 640px) {
  .landing-footer {
    margin-top: 80px !important;
    padding: 50px 1rem 25px !important;
  }

  /* Single column layout for mobile */
  .footer-grid {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
    margin-bottom: 40px !important;
    padding: 0 40px !important;
  }

  .footer-bottom {
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    gap: 2rem !important;
  }

  /* Stack logo and tagline vertically on mobile */
  .footer-brand {
    flex-direction: column !important;
    align-items: center !important;
    gap: 0.5rem !important;
    text-align: center !important;
  }

  .footer-logo {
    height: 36px !important;
    margin-bottom: 4px !important;
  }

  .footer-tagline {
    font-size: 0.75rem !important;
    letter-spacing: 0.1em !important;
    opacity: 0.8 !important;
  }

  .footer-legal {
    text-align: center !important;
  }

  .footer-legal p {
    font-size: 0.8rem !important;
  }

  .footer-column h4 {
    font-size: 0.8rem !important;
  }

  .footer-column a {
    font-size: 0.85rem !important;
  }
}
</style>