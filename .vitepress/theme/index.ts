// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Layout from './Layout.vue'
import HeroSection from './components/organisms/HeroSection.vue'
import ShowcaseSection from './components/organisms/ShowcaseSection.vue'
import FeaturesSection from './components/organisms/FeaturesSection.vue'
import SystemsSection from './components/organisms/SystemsSection.vue'
import HatsSection from './components/organisms/HatsSection.vue'
import MetricsSection from './components/organisms/MetricsSection.vue'
import CTASection from './components/organisms/CTASection.vue'
import AdmiralSection from './components/organisms/AdmiralSection.vue'
import FooterSection from './components/organisms/FooterSection.vue'
import PhilosophyCTA from './components/organisms/PhilosophyCTA.vue'
import PageCTA from './components/organisms/PageCTA.vue'
import DocIcon from './components/atoms/DocIcon.vue'
import PermaLink from './components/atoms/PermaLink.vue'
import './localization-fixes.css'
import './style.css'
import './custom.css'
import './landing.css'
import './docs-content.css'
import './mobile-menu-fix.css'
import './navbar-separators.css'
import './mobile-content-fix.css'
import './local-nav-mobile.css'
import './desktop-nav-fix.css'



export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('HeroSection', HeroSection)
    app.component('ShowcaseSection', ShowcaseSection)
    app.component('FeaturesSection', FeaturesSection)
    app.component('SystemsSection', SystemsSection)
    app.component('HatsSection', HatsSection)
    app.component('MetricsSection', MetricsSection)
    app.component('CTASection', CTASection)
    app.component('AdmiralSection', AdmiralSection)
    app.component('FooterSection', FooterSection)
    app.component('PhilosophyCTA', PhilosophyCTA)
    app.component('PageCTA', PageCTA)
    app.component('DocIcon', DocIcon)
    app.component('PermaLink', PermaLink)
  },
} satisfies Theme
