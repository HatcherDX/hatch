<template>
  <div class="features-section">
    <div class="features-container">
      <div class="features-grid">
        <a
          v-for="(feature, index) in features"
          :key="index"
          :href="feature.link"
          class="feature-card"
        >
          <div class="feature-icon" v-html="feature.icon"></div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-details">{{ feature.description }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FeatureCard {
  title: string
  description: string
  icon: string
  link: string
}

interface FeaturesSectionProps {
  features?: FeatureCard[]
}

const props = withDefaults(defineProps<FeaturesSectionProps>(), {
  features: () => [
    {
      title: 'Deploy Autonomous AI Drones',
      description: 'Launch fleets of AI agents that execute your playbooks. They code, test, and refactor while you sleep. Wake up to completed missions.',
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
      title: 'Constitutional Command & Control',
      description: 'Your coding standards become unbreakable laws. Every drone follows your constitution with military precision. No rogue AI.',
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
      title: 'Visual Mission Planning',
      description: 'Point and click to define objectives. The AI fleet understands visual commands, not vague prompts. Zero miscommunication.',
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
      title: 'Your Fortress, Your Rules',
      description: '100% local execution. Rust-powered security. Your code never leaves your command center. Total operational sovereignty.',
      link: '/architecture',
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 8L8 20V40H18V30H30V40H40V20L24 8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              <rect x="14" y="24" width="6" height="6" stroke="currentColor" stroke-width="1.5"/>
              <rect x="28" y="24" width="6" height="6" stroke="currentColor" stroke-width="1.5"/>
              <path d="M24 8V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="24" cy="20" r="2" fill="currentColor"/>
            </svg>`
    }
  ]
})
</script>

<style scoped>
/* Features Section Styling */
.features-section {
  padding: 100px 0 60px !important;  /* Default padding */
  background: transparent !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
}

/* Adjust padding for mobile portrait only */
@media (orientation: portrait) and (max-width: 640px) {
  .features-section {
    padding: 140px 0 60px !important;  /* More space on mobile portrait to avoid icon overlap */
  }
}

/* Adjust padding for mobile landscape only */
@media (orientation: landscape) and (max-width: 896px) and (max-height: 500px) {
  .features-section {
    padding: 160px 0 60px !important;  /* More space on mobile landscape */
  }
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Features Grid */
.features-grid {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 24px !important;
  margin-top: 40px !important;
  max-width: 1200px !important;
  margin-left: auto !important;
  margin-right: auto !important;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 640px) {
  .features-grid {
    gap: 16px !important;
  }
}

/* Feature Cards */
.feature-card {
  display: block !important;
  background: rgba(255, 255, 255, 0.5) !important;
  border: 1px solid rgba(0, 0, 0, 0.05) !important;
  border-radius: 16px !important;
  padding: 32px !important;
  text-align: center !important;
  text-decoration: none !important;
  color: inherit !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  cursor: pointer !important;
}

.dark .feature-card {
  background: rgba(255, 255, 255, 0.02) !important;
  border-color: rgba(255, 255, 255, 0.05) !important;
}

.feature-card:hover {
  transform: translateY(-4px) !important;
  box-shadow: 0 12px 40px rgba(223, 169, 39, 0.12) !important;
  border-color: rgba(223, 169, 39, 0.2) !important;
}

@media (max-width: 768px) {
  .feature-card {
    padding: 24px !important;
  }
}

@media (max-width: 640px) {
  .feature-card {
    margin-bottom: 1rem !important;
  }
}

/* Feature Icon */
.feature-icon {
  width: 48px !important;
  height: 48px !important;
  margin: 0 auto 20px !important;
  color: #dfa927 !important;
  opacity: 0.9 !important;
}

/* Feature Title */
.feature-title {
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  margin-bottom: 12px !important;
  color: var(--vp-c-text-1) !important;
}

/* Feature Details */
.feature-details {
  font-size: 0.95rem !important;
  line-height: 1.6 !important;
  color: var(--vp-c-text-2) !important;
}

</style>