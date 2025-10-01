<template>
  <div class="systems-section">
    <SectionTitle
      :title="title"
      :subtitle="subtitle"
    />
    <div class="systems-grid">
      <a
        v-for="(system, index) in systems"
        :key="index"
        :href="system.link"
        class="system-card"
      >
        <div class="system-icon" v-html="system.icon"></div>
        <h3 class="system-title">{{ system.title }}</h3>
        <p class="system-description">{{ system.description }}</p>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../atoms/SectionTitle.vue'

interface SystemCard {
  title: string
  description: string
  icon: string
  link: string
}

interface SystemsSectionProps {
  title?: string
  subtitle?: string
  systems?: SystemCard[]
}

const props = withDefaults(defineProps<SystemsSectionProps>(), {
  title: 'The Command Deck Systems',
  subtitle: 'Four battle-tested systems that turn you from debugger to commander:',
  systems: () => [
    {
      title: 'Constitutional Playbooks',
      description: 'Write your battle plans once. Your coding standards and architecture patterns become immutable laws that every AI drone must follow. No deviation. No interpretation. Pure execution.',
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
      title: 'Time Graph Engine',
      description: 'Mission control for every operation. Track every drone\'s action, rewind failed missions, explore alternate timelines. Your command history preserved forever.',
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
      title: 'Universal Fabricator',
      description: 'Deploy any weapon from your arsenal. That battle-tested C++ module from 2003? The COBOL logic that runs your empire? All assets ready for deployment via WebAssembly.',
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
      title: 'Fortress-Grade Security',
      description: 'Your command center is impenetrable. Rust-forged walls. Zero cloud exposure. Every operation local. Your strategies, your code, your sovereignty. No breaches possible.',
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
})
</script>

<style scoped>
/* Apple-style Systems Section */
.systems-section {
  padding: 100px 2rem !important;
  background: transparent !important;
  position: relative !important;
}

/* Systems Grid - 2x2 Apple style */
.systems-grid {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 32px !important;
  margin-top: 0 !important;
}

/* Premium System Cards with Hover States */
.system-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.02)
  ) !important;
  border: 1px solid rgba(223, 169, 39, 0.1) !important;
  border-radius: 20px !important;
  padding: 48px !important;
  position: relative !important;
  overflow: hidden !important;
  display: block !important;
  text-decoration: none !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
  cursor: pointer !important;
  backdrop-filter: blur(10px) !important;
}

.dark .system-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.01)
  ) !important;
  border-color: rgba(223, 169, 39, 0.08) !important;
}

/* Hover effect with golden accent */
.system-card:hover {
  transform: translateY(-8px) scale(1.02) !important;
  border-color: rgba(223, 169, 39, 0.3) !important;
  box-shadow:
    0 20px 60px rgba(223, 169, 39, 0.15),
    0 10px 30px rgba(0, 0, 0, 0.1) !important;
}

/* Gradient overlay on hover */
.system-card::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background: radial-gradient(
    circle at top left,
    rgba(223, 169, 39, 0.1) 0%,
    transparent 50%
  ) !important;
  opacity: 0 !important;
  transition: opacity 0.4s ease !important;
  pointer-events: none !important;
}

.system-card:hover::before {
  opacity: 1 !important;
}

/* System Icons with Animation */
.system-icon {
  width: 64px !important;
  height: 64px !important;
  margin-bottom: 24px !important;
  position: relative !important;
  z-index: 2 !important;
}

.system-icon svg {
  width: 100% !important;
  height: 100% !important;
  color: #dfa927 !important;
  opacity: 0.8 !important;
  transition: all 0.3s ease !important;
}

.system-card:hover .system-icon svg {
  transform: scale(1.1) rotate(5deg) !important;
  opacity: 1 !important;
}

/* Dark mode icon adjustments */
.dark .system-icon svg {
  color: #dfa927 !important;
  opacity: 0.7 !important;
}

.dark .system-card:hover .system-icon svg {
  color: #fff !important;
  opacity: 1 !important;
}

/* Light mode icons */
:not(.dark) .system-icon svg {
  color: #c99623 !important;
  opacity: 0.7 !important;
}

:not(.dark) .system-card:hover .system-icon svg {
  color: #dfa927 !important;
  opacity: 1 !important;
}

/* Ensure icon inherits color on hover */
.system-card:hover .system-icon svg path,
.system-card:hover .system-icon svg circle,
.system-card:hover .system-icon svg rect,
.system-card:hover .system-icon svg polygon {
  stroke: currentColor;
  fill: none;
}

/* Override for filled elements */
.system-card .system-icon svg [fill='currentColor'] {
  fill: currentColor;
  stroke: none;
}

/* Typography with Apple's precision */
.system-title {
  font-size: 24px !important;
  font-weight: 600 !important;
  margin-bottom: 16px !important;
  color: #1d1d1f !important;
  letter-spacing: -0.018em !important;
  line-height: 1.2 !important;
}

.dark .system-title {
  color: #f5f5f7 !important;
}

.system-description {
  font-size: 15px !important;
  line-height: 1.47 !important;
  color: #424245 !important;
  letter-spacing: -0.014em !important;
  font-weight: 400 !important;
}

.dark .system-description {
  color: #a1a1a6 !important;
}

/* Staggered animations */
@keyframes systemFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.system-card {
  animation: systemFadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards !important;
}

.system-card:nth-child(1) {
  animation-delay: 0.05s !important;
}
.system-card:nth-child(2) {
  animation-delay: 0.15s !important;
}
.system-card:nth-child(3) {
  animation-delay: 0.25s !important;
}
.system-card:nth-child(4) {
  animation-delay: 0.35s !important;
}

/* Responsive systems */
@media (max-width: 968px) {
  .systems-grid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 768px) {
  .systems-grid {
    gap: 20px !important;
  }

  .system-card {
    padding: 32px !important;
  }
}

</style>