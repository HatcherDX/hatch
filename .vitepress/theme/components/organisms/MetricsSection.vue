<template>
  <div class="metrics-section">
    <div class="metrics-container">
      <SectionTitle :title="title" />
      <div class="metrics-grid">
        <div
          v-for="(metric, index) in metrics"
          :key="index"
          class="metric-item"
        >
          <div class="metric-number" :class="{ 'metric-infinity': metric.isInfinity }">{{ metric.number }}</div>
          <div class="metric-label">{{ metric.label }}</div>
          <div class="metric-description">{{ metric.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../atoms/SectionTitle.vue'

interface MetricItem {
  number: string
  label: string
  description: string
  isInfinity?: boolean
}

interface MetricsSectionProps {
  title?: string
  metrics?: MetricItem[]
}

const props = withDefaults(defineProps<MetricsSectionProps>(), {
  title: 'By the Numbers',
  metrics: () => [
    {
      number: '100%',
      label: 'Test Coverage',
      description: 'Automated by AI, verified by you. Ship with confidence.'
    },
    {
      number: '0%',
      label: 'Cloud Dependency',
      description: 'Your IP stays yours. No data leaves your machine.'
    },
    {
      number: '∞',
      label: 'Language Support',
      description: 'COBOL to Rust via WebAssembly. Use what works.',
      isInfinity: true
    }
  ]
})
</script>

<style scoped>
/* By the Numbers Section - Premium Metrics */
.metrics-section {
  padding: 100px 2rem !important;
  margin-top: 80px !important;
  margin-bottom: 80px !important;
  background: transparent !important;
  position: relative !important;
}

/* Dark mode metrics background */
.dark .metrics-section {
  background: transparent !important;
}

/* Ensure content stays centered and contained */
.metrics-container {
  max-width: 1200px !important;
  margin: 0 auto !important;
  padding: 0 2rem !important;
  position: relative;
  z-index: 1;
}

.metrics-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 32px !important;
  max-width: 1000px !important;
  margin: 0 auto !important;
  padding-top: 30px !important;
}

/* Premium metric cards with golden accents */
.metric-item {
  text-align: center !important;
  padding: 48px 32px !important;
  position: relative !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.02)
  ) !important;
  border: 1px solid rgba(223, 169, 39, 0.1) !important;
  border-radius: 20px !important;
  overflow: hidden !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
  backdrop-filter: blur(10px) !important;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.05),
    0 2px 10px rgba(223, 169, 39, 0.05) !important;
}

/* Dark mode card styling */
.dark .metric-item {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.01)
  ) !important;
  border-color: rgba(223, 169, 39, 0.08) !important;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.2),
    0 2px 10px rgba(223, 169, 39, 0.05) !important;
}

/* Hover effect with golden glow */
.metric-item:hover {
  transform: translateY(-8px) scale(1.02) !important;
  border-color: rgba(223, 169, 39, 0.3) !important;
  box-shadow:
    0 20px 60px rgba(223, 169, 39, 0.15),
    0 10px 30px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(223, 169, 39, 0.2) !important;
}

/* Gradient overlay on hover */
.metric-item::before {
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
  z-index: 1 !important;
}

.metric-item:hover::before {
  opacity: 1 !important;
}

/* Premium metric numbers with consistent sizing */
.metric-number {
  font-size: 4.5rem !important;
  font-weight: 200 !important;  /* Ultra-light for premium elegance */
  letter-spacing: -0.02em !important;
  margin-bottom: 1rem !important;
  background: linear-gradient(
    135deg,
    #f4d03f 0%,
    #dfa927 50%,
    #c99623 100%
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  text-fill-color: transparent !important;
  line-height: 1 !important;
  position: relative !important;
  z-index: 2 !important;
  transition: all 0.3s ease !important;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif !important;
  min-height: 5rem !important;  /* Ensure consistent height */
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.metric-item:hover .metric-number {
  transform: scale(1.05) !important;
  filter: drop-shadow(0 0 20px rgba(223, 169, 39, 0.4)) !important;
}

/* Special styling for infinity symbol */
.metric-infinity {
  font-size: 5rem !important;  /* Slightly larger to match visual weight */
  font-weight: 100 !important;  /* Ultra-light for the infinity */
  letter-spacing: 0 !important;
}

/* Metric labels */
.metric-label {
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  margin-bottom: 0.75rem !important;
  color: var(--vp-c-text-1) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  position: relative !important;
  z-index: 2 !important;
}

/* Metric descriptions */
.metric-description {
  font-size: 0.9rem !important;
  line-height: 1.5 !important;
  color: var(--vp-c-text-2) !important;
  max-width: 250px !important;
  margin: 0 auto !important;
  position: relative !important;
  z-index: 2 !important;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
}

/* Responsive metrics */
@media (max-width: 968px) {
  .metrics-grid {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }

  .metric-item {
    padding: 40px 30px !important;
    max-width: 500px !important;
    margin: 0 auto !important;
    width: 100% !important;
  }

  .metric-number {
    font-size: 3.5rem !important;
    min-height: 4rem !important;
  }

  .metric-infinity {
    font-size: 4rem !important;
  }

  .metric-label {
    font-size: 1rem !important;
  }

  .metric-description {
    font-size: 0.9rem !important;
    max-width: 280px !important;
  }
}

@media (max-width: 640px) {
  .metrics-container {
    padding: 0 1rem !important;
  }

  .metrics-grid {
    gap: 16px !important;
    padding-top: 20px !important;
  }

  .metric-item {
    padding: 28px 20px !important;
    border-radius: 16px !important;
  }

  .metric-number {
    font-size: 3rem !important;
    min-height: 3.5rem !important;
    margin-bottom: 0.75rem !important;
  }

  .metric-infinity {
    font-size: 3.5rem !important;
  }

  .metric-label {
    font-size: 0.95rem !important;
    margin-bottom: 0.5rem !important;
    letter-spacing: 0.04em !important;
  }

  .metric-description {
    font-size: 0.875rem !important;
    max-width: 100% !important;
    line-height: 1.4 !important;
    padding: 0 8px !important;
  }

  .metrics-section {
    padding: 60px 0 !important;
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }

  /* Reduce hover effect on mobile */
  .metric-item:hover {
    transform: translateY(-4px) scale(1.01) !important;
  }
}
</style>