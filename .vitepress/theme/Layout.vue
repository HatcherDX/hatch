<template>
  <Layout>
    <template #doc-before>
      <!-- Show PermaLink only on documentation pages (not home page) -->
      <PermaLink v-if="!isHome && mounted" :shortDomain="shortDomain" />
    </template>

    <!-- Pass through home hero slots for landing page -->
    <template #home-hero-before>
      <HeroSection v-bind="locale.hero" />
    </template>
    <template #home-hero-after>
      <ShowcaseSection />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import PermaLink from './components/atoms/PermaLink.vue'
import HeroSection from './components/organisms/HeroSection.vue'
import ShowcaseSection from './components/organisms/ShowcaseSection.vue'
import { useLocale } from './composables/useLocale'

const { Layout } = DefaultTheme
const route = useRoute()
const { page } = useData()
const mounted = ref(false)
const { locale } = useLocale()

// Check if we're on the home page
const isHome = computed(() => {
  return page.value.frontmatter?.layout === 'home' || route.path === '/'
})

// Define short domains for specific sections
const shortDomain = computed(() => {
  const shortDomains: Record<string, string> = {
    '/autopilots': 'autopilots.rs',
    '/core-hats': 'hats.rs',
    '/features-time-graph-hat': 'timegraph.rs',
    '/playbooks-system': 'playbooks.rs',
    '/actions-system': 'actions.rs',
    '/community-vision': 'hatchers.rs',
    // Future domains can be added here as they become available:
    // '/manifesto': 'manifesto.rs',
    // '/philosophy': 'philosophy.rs',
  }

  // Check for exact matches for short domains
  const path = route.path
  for (const [key, domain] of Object.entries(shortDomains)) {
    // Use exact match or match with trailing slash/index to avoid false positives
    if (path === key || path === `${key}/` || path === `${key}/index` || path.startsWith(`${key}/index.`)) {
      return domain
    }
    // Check for language-specific paths (e.g., /es/autopilots)
    const locale = path.split('/')[1]
    if (locale && locale.length === 2 && path === `/${locale}${key}`) {
      return `${domain}/${locale}`
    }
  }

  return undefined
})

onMounted(() => {
  mounted.value = true
})
</script>