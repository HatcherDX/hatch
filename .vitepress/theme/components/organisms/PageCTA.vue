<template>
  <section class="page-cta-section">
    <div class="cta-container">
      <div class="cta-content">
        <h2 class="cta-title">{{ title }}</h2>
        <p class="cta-subtitle" v-if="subtitle">
          {{ subtitle }}
        </p>
        <div class="cta-buttons">
          <a
            :href="buttonLink"
            :class="['cta-button', buttonStyle]"
          >
            <span class="button-text">{{ buttonText }}</span>
            <span class="button-arrow" v-if="showArrow">→</span>
          </a>
        </div>
        <p class="cta-footer" v-if="footer">
          {{ footer }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  buttonText: string
  buttonLink: string
  buttonStyle?: 'primary' | 'secondary'
  footer?: string
  showArrow?: boolean
}

// Define props with defaults
const props = withDefaults(defineProps<Props>(), {
  buttonStyle: 'secondary',
  showArrow: true
})
</script>

<style scoped>
/* Page CTA Section */
.page-cta-section {
  padding: 60px 0rem !important;
  margin: 0 auto !important;
  position: relative !important;
  overflow: hidden !important;
  background: transparent !important;
}

/* Dark mode background */
.dark .page-cta-section {
  background: transparent !important;
}

.cta-container {
  width: 100% !important;
  margin: 0 auto !important;
  position: relative !important;
  z-index: 1 !important;
}

.cta-content {
  text-align: center !important;
  padding: 40px 40px !important;
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border-radius: 12px !important;
  border: none !important;
  box-shadow: none !important;
  transition: all 0.3s ease !important;
}

/* Dark mode card */
.dark .cta-content {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

/* Hover effect on entire card */
.cta-content:hover {
  transform: translateY(-2px) !important;
  background: rgba(223, 169, 39, 0.02) !important;
}

.dark .cta-content:hover {
  background: rgba(223, 169, 39, 0.01) !important;
}

/* Title with golden gradient */
.cta-title {
  font-family: 'Cinzel', 'Georgia', serif !important;
  font-size: 1.6rem !important;
  font-weight: 600 !important;
  background: linear-gradient(
    135deg,
    #dfa927 0%,
    #c99623 50%,
    #dfa927 100%
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  margin: 0 0 0.75rem 0 !important;
  padding: 0 !important;
  line-height: 1.3 !important;
  position: relative !important;
  display: inline-block !important;
  width: 100% !important;
  border: none !important;
  border-top: none !important;
}

/* Title glow on hover */
.cta-content:hover .cta-title {
  filter: drop-shadow(0 0 8px rgba(223, 169, 39, 0.3)) !important;
}

/* Subtitle */
.cta-subtitle {
  font-size: 0.95rem !important;
  color: var(--vp-c-text-2) !important;
  margin: 0 0 1.5rem 0 !important;
  line-height: 1.5 !important;
  max-width: 500px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  opacity: 0.8 !important;
}

/* Button container */
.cta-buttons {
  display: flex !important;
  justify-content: center !important;
  gap: 1rem !important;
  margin-bottom: 1.25rem !important;
}

/* Base button design */
.cta-button {
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.4rem !important;
  padding: 0.75rem 1.75rem !important;
  font-size: 0.85rem !important;
  font-weight: 600 !important;
  text-decoration: none !important;
  border-radius: 8px !important;
  transition: all 0.25s ease !important;
  position: relative !important;
  overflow: hidden !important;
  text-transform: uppercase !important;
  letter-spacing: 0.03em !important;
}

/* PRIMARY STYLE - Reserved for main CTAs like "JOIN THE FLEET" */
.cta-button.primary {
  background: linear-gradient(
    135deg,
    #dfa927 0%,
    #c99623 50%,
    #dfa927 100%
  ) !important;
  color: #1a1a1a !important;
  box-shadow:
    0 4px 12px rgba(223, 169, 39, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
}

/* Hover state for primary */
.cta-button.primary:hover {
  transform: translateY(-1px) !important;
  background: linear-gradient(
    135deg,
    #f4d03f 0%,
    #dfa927 50%,
    #f4d03f 100%
  ) !important;
  box-shadow:
    0 6px 20px rgba(223, 169, 39, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
}

/* SECONDARY STYLE - For navigation between pages */
.cta-button.secondary {
  background: transparent !important;
  color: #dfa927 !important;
  border: none !important;
  box-shadow: none !important;
}

/* Hover state for secondary */
.cta-button.secondary:hover {
  transform: translateY(-1px) !important;
  background: rgba(223, 169, 39, 0.08) !important;
  color: #f4d03f !important;
  box-shadow: 0 4px 12px rgba(223, 169, 39, 0.15) !important;
}

/* Dark mode adjustments for secondary button */
.dark .cta-button.secondary {
  color: #dfa927 !important;
}

.dark .cta-button.secondary:hover {
  background: rgba(223, 169, 39, 0.05) !important;
  color: #f4d03f !important;
}

/* Button arrow animation */
.button-arrow {
  display: inline-block !important;
  transition: transform 0.25s ease !important;
  font-size: 0.9rem !important;
}

.cta-button:hover .button-arrow {
  transform: translateX(2px) !important;
}

/* Footer text */
.cta-footer {
  font-size: 0.8rem !important;
  color: var(--vp-c-text-3) !important;
  margin: 0 !important;
  opacity: 0.65 !important;
  font-style: italic !important;
}

/* Tablet specific styles */
@media (min-width: 641px) and (max-width: 1024px) {
  .cta-buttons {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .cta-button {
    display: inline-flex !important;
    width: auto !important;
    margin: 0 auto !important;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .page-cta-section {
    padding: 60px 1.5rem !important;
  }

  .cta-content {
    padding: 45px 30px !important;
  }

  .cta-title {
    font-size: clamp(1.4rem, 4vw, 2rem) !important;
  }

  .cta-subtitle {
    font-size: 1rem !important;
    margin-bottom: 1.5rem !important;
  }

  .cta-button {
    padding: 0.85rem 1.75rem !important;
    font-size: 0.9rem !important;
  }
}

@media (max-width: 640px) {
  .page-cta-section {
    padding: 50px 1rem !important;
  }

  .cta-content {
    padding: 35px 25px !important;
    border-radius: 16px !important;
  }

  .cta-buttons {
    flex-direction: column !important;
    align-items: stretch !important;
  }

  .cta-button {
    width: 100% !important;
    justify-content: center !important;
  }
}
</style>