<template>
  <div class="cta-section">
    <SectionTitle
      :title="title"
    />

    <div class="cta-container">
      <p class="cta-headline">{{ headline }}</p>
      <p class="cta-subheadline">{{ subheadline }}</p>
      <div class="cta-actions">
        <a
          v-for="(button, index) in buttons"
          :key="index"
          :href="button.link"
          :class="['cta-button', { primary: button.primary }]"
        >
          <div class="cta-icon" v-html="button.icon"></div>
          <span class="cta-button-label">{{ button.label }}</span>
          <span class="cta-button-description">{{ button.description }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../atoms/SectionTitle.vue'

interface CTAButton {
  label: string
  description: string
  link: string
  icon: string
  primary?: boolean
}

interface CTASectionProps {
  title?: string
  headline?: string
  subheadline?: string
  buttons?: CTAButton[]
}

const props = withDefaults(defineProps<CTASectionProps>(), {
  title: 'Ready to Take Command?',
  headline: 'Be among the first commanders to shape the future of AI-controlled development.',
  subheadline: 'The fleet is assembling. Early commanders get lifetime priority access.',
  buttons: () => [
    {
      label: 'Join Discord',
      description: 'Connect with the community of commanders',
      link: 'https://discord.gg/cZ7PZvnMk4',
      primary: true,
      icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.1 19.6 7.9 18.9L3 20L4.3 16.1C3.2 14.8 2.5 13.1 2.5 11.5C2.8 6.8 7.1 3 12 3C16.97 3 21 7.582 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
    },
    {
      label: 'Read Philosophy',
      description: 'Understand our vision for AI control',
      link: '/philosophy',
      icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.5C12 5.67157 12.6716 5 13.5 5H20.5C21.3284 5 22 5.67157 22 6.5V19.5C22 20.3284 21.3284 21 20.5 21H13.5C12.6716 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
              <path d="M12 6.5C12 5.67157 11.3284 5 10.5 5H3.5C2.67157 5 2 5.67157 2 6.5V19.5C2 20.3284 2.67157 21 3.5 21H10.5C11.3284 21 12 20.3284 12 19.5V6.5Z" stroke="currentColor" stroke-width="1.5"/>
              <path d="M12 5V21" stroke="currentColor" stroke-width="1.5"/>
            </svg>`
    },
    {
      label: 'Star on GitHub',
      description: 'Support the open-source mission',
      link: 'https://github.com/HatcherDX/dx-engine',
      icon: `<svg class="cta-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
    }
  ]
})
</script>

<style scoped>
/* CTA Section - Premium Call to Action */
.cta-section {
  padding: 120px 2rem 100px !important;
  text-align: center !important;
  position: relative !important;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(223, 169, 39, 0.02)
  ) !important;
}

.cta-container {
  max-width: 800px !important;
  margin: 0 auto !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 2rem !important;
}

/* Section icon styling */
.section-icon {
  color: #dfa927 !important;
  margin-right: 0.5rem !important;
  vertical-align: middle !important;
  display: inline-block !important;
}

/* Headline styling - elegant and light */
.cta-headline {
  font-size: 1.875rem !important;
  color: var(--vp-c-text-1) !important;
  line-height: 1.5 !important;
  max-width: 700px !important;
  margin: -0.5rem auto 1.5rem !important;
  font-weight: 200 !important;
  letter-spacing: -0.02em !important;
  opacity: 0.9 !important;
}

/* Subheadline styling - secondary emphasis */
.cta-subheadline {
  font-size: 1.025rem !important;
  color: #c9962f !important;  /* Refined gold instead of yellow */
  line-height: 1.6 !important;
  max-width: 600px !important;
  margin: 0 auto 2rem !important;
  font-weight: 500 !important;
  letter-spacing: 0.01em !important;
  position: relative !important;
  padding-bottom: 1rem !important;
}

/* Add decorative line under subheadline */
.cta-subheadline::after {
  content: '' !important;
  position: absolute !important;
  bottom: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 80px !important;
  height: 2px !important;
  background: linear-gradient(
    90deg,
    transparent,
    #c9962f,
    transparent
  ) !important;
  opacity: 0.5 !important;
}

.dark .cta-subheadline {
  color: #d4a847 !important;  /* Warm luxurious gold */
}

/* CTA Actions Grid */
.cta-actions {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 2rem !important;
  margin-top: 3rem !important;
  width: 100% !important;
  max-width: 900px !important;
}

/* CTA Button Cards - Premium Glass Design */
.cta-button {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.01)
  ) !important;
  border: 1px solid rgba(223, 169, 39, 0.08) !important;
  border-radius: 24px !important;
  padding: 40px 32px !important;
  text-decoration: none !important;
  color: inherit !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 1rem !important;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) !important;
  backdrop-filter: blur(20px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
  position: relative !important;
  overflow: hidden !important;
  min-height: 220px !important;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.03),
    0 1px 2px rgba(0, 0, 0, 0.02),
    inset 0 1px 1px rgba(255, 255, 255, 0.03) !important;
}

/* Dark mode button styling with enhanced contrast */
.dark .cta-button {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.008)
  ) !important;
  border-color: rgba(223, 169, 39, 0.06) !important;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0 1px 1px rgba(255, 255, 255, 0.02) !important;
}

/* Primary button (Join Discord) special styling - more subtle */
.cta-button.primary {
  background: linear-gradient(
    135deg,
    rgba(201, 150, 47, 0.04),  /* Very subtle gold tint */
    rgba(201, 150, 47, 0.02)
  ) !important;
  border: 1px solid rgba(201, 150, 47, 0.1) !important;  /* Lighter border */
  position: relative !important;
}

/* Animated gradient border for primary */
.cta-button.primary::after {
  content: '' !important;
  position: absolute !important;
  top: -1px !important;
  left: -1px !important;
  right: -1px !important;
  bottom: -1px !important;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(223, 169, 39, 0.3),
    transparent
  ) !important;
  border-radius: 24px !important;
  opacity: 0 !important;
  transition: opacity 0.5s ease !important;
  pointer-events: none !important;
  z-index: 1 !important;
}

.cta-button.primary:hover::after {
  opacity: 1 !important;
}

.dark .cta-button.primary {
  background: linear-gradient(
    135deg,
    rgba(212, 168, 71, 0.03),  /* Even more subtle in dark mode */
    rgba(212, 168, 71, 0.01)
  ) !important;
  border-color: rgba(212, 168, 71, 0.08) !important;
}

/* Button hover effect with smooth elevation */
.cta-button:hover {
  transform: translateY(-6px) scale(1.01) !important;
  border-color: rgba(223, 169, 39, 0.2) !important;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.02)
  ) !important;
  box-shadow:
    0 24px 48px rgba(223, 169, 39, 0.12),
    0 12px 24px rgba(0, 0, 0, 0.08),
    0 6px 12px rgba(0, 0, 0, 0.04),
    inset 0 1px 2px rgba(255, 255, 255, 0.06) !important;
}

/* Refined hover effect for primary button - more subtle and luxurious */
.cta-button.primary:hover {
  transform: translateY(-2px) !important;  /* Much subtler lift */
  background: linear-gradient(
    135deg,
    rgba(201, 150, 47, 0.06),  /* Using refined gold */
    rgba(201, 150, 47, 0.03)
  ) !important;
  border: 1px solid rgba(201, 150, 47, 0.15) !important;  /* Subtle border */
  box-shadow:
    0 8px 20px rgba(201, 150, 47, 0.08),  /* Single, soft shadow */
    0 2px 6px rgba(0, 0, 0, 0.04) !important;
  position: relative !important;
}

/* Gold shimmer animation for primary button */
@keyframes goldShimmer {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Removed animated shine - too distracting and cheap looking */
.cta-button.primary:hover::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.03) 0%,
    transparent 50%
  ) !important;
  opacity: 1 !important;  /* Static subtle highlight */
  pointer-events: none !important;
  z-index: 3 !important;
  border-radius: 24px !important;
}

/* Removed metalShine animation - not needed for elegant design */

.dark .cta-button:hover {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.01)
  ) !important;
  border-color: rgba(223, 169, 39, 0.18) !important;
}

/* Dark mode primary button hover - refined */
.dark .cta-button.primary:hover {
  background: linear-gradient(
    135deg,
    rgba(212, 168, 71, 0.05),  /* Warm gold, very subtle */
    rgba(212, 168, 71, 0.02)
  ) !important;
  border: 1px solid rgba(212, 168, 71, 0.12) !important;
  box-shadow:
    0 8px 20px rgba(212, 168, 71, 0.1),
    0 2px 6px rgba(0, 0, 0, 0.08) !important;
}

/* Shimmer effect on hover for non-primary buttons */
.cta-button:not(.primary)::before {
  content: '' !important;
  position: absolute !important;
  top: -50% !important;
  left: -50% !important;
  width: 200% !important;
  height: 200% !important;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(223, 169, 39, 0.08) 0%,
    transparent 40%
  ) !important;
  opacity: 0 !important;
  transition: opacity 0.6s ease !important;
  pointer-events: none !important;
  transform: rotate(0deg) !important;
  z-index: 0 !important;
}

.cta-button:not(.primary):hover::before {
  opacity: 1 !important;
  animation: shimmer 3s ease-in-out infinite !important;
}

@keyframes shimmer {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* CTA Icon with refined animation */
.cta-icon {
  width: 48px !important;
  height: 48px !important;
  color: #6e6e73 !important;  /* Slightly darker for better contrast */
  opacity: 0.85 !important;  /* Increased opacity for legibility */
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) !important;
  position: relative !important;
  z-index: 2 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.cta-icon svg {
  width: 100% !important;
  height: 100% !important;
}

/* Icon hover with rotation and color reveal */
.cta-button:hover .cta-icon {
  transform: scale(1.15) rotate(5deg) !important;
  color: #c9962f !important;  /* Rich gold */
  opacity: 1 !important;
  filter: drop-shadow(0 6px 20px rgba(223, 169, 39, 0.4)) !important;
}

/* Primary button has golden icon by default */
.cta-button.primary .cta-icon {
  color: #c9962f !important;  /* Refined gold color */
  opacity: 1 !important;  /* Full opacity for primary */
}

.cta-button.primary:hover .cta-icon {
  color: #d4a847 !important;  /* Luxurious gold */
  transform: scale(1.2) rotate(-5deg) !important;
  filter: drop-shadow(0 8px 24px rgba(223, 169, 39, 0.5)) !important;
}

.dark .cta-icon {
  color: #86868b !important;  /* Slightly brighter in dark mode */
  opacity: 0.9 !important;
}

.dark .cta-button:hover .cta-icon {
  color: #d4a847 !important;  /* Warm gold */
}

/* Button Labels with refined typography */
.cta-button-label {
  font-size: 1.125rem !important;
  font-weight: 600 !important;
  margin-top: 0.5rem !important;
  color: var(--vp-c-text-1) !important;
  position: relative !important;
  z-index: 2 !important;
  letter-spacing: -0.01em !important;
  transition: all 0.3s ease !important;
}

.cta-button:hover .cta-button-label {
  transform: translateY(-2px) !important;
}

.cta-button-description {
  font-size: 0.875rem !important;
  color: var(--vp-c-text-2) !important;
  line-height: 1.5 !important;
  position: relative !important;
  z-index: 2 !important;
  margin-top: 0.5rem !important;
  opacity: 0.9 !important;  /* Better readability */
  transition: all 0.3s ease !important;
  text-align: center !important;
  max-width: 200px !important;
}

.cta-button:hover .cta-button-description {
  opacity: 1 !important;
}

/* Responsive Design */
@media (max-width: 968px) {
  .cta-actions {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
    max-width: 400px !important;
    margin: 2rem auto 0 !important;
  }

  .cta-button {
    padding: 24px 20px !important;
    min-height: auto !important;
  }
}

@media (max-width: 640px) {
  .cta-section {
    padding: 80px 1.5rem 60px !important;
  }

  /* Adjust headline for mobile */
  .cta-headline {
    font-size: 1.5rem !important;
    line-height: 1.4 !important;
    margin: -0.5rem auto 1rem !important;
    padding: 0 0.5rem !important;
  }

  /* Adjust subheadline for mobile */
  .cta-subheadline {
    font-size: 0.95rem !important;
    line-height: 1.5 !important;
    margin: 0 auto 1.5rem !important;
    padding: 0 0.5rem 1rem !important;
  }

  .cta-button {
    padding: 20px 16px !important;
    min-height: 180px !important;
  }

  .cta-icon {
    width: 36px !important;
    height: 36px !important;
  }

  .cta-button-label {
    font-size: 0.95rem !important;
  }

  .cta-button-description {
    font-size: 0.8rem !important;
    max-width: 100% !important;
    padding: 0 0.5rem !important;
  }
}
</style>