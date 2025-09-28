<template>
  <div class="section-title-wrapper">
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>

<style scoped>
.section-title-wrapper {
  text-align: center !important;
  margin-bottom: 60px !important;
}

.section-title {
  font-family: 'Cinzel', 'Georgia', serif !important;
  font-size: clamp(1.5rem, 3vw, 2.5rem) !important;  /* Using clamp like in original */
  font-weight: 600 !important;  /* Match original weight */
  margin-bottom: 0.5rem !important;  /* Reduced spacing */
  letter-spacing: 0.08em !important;  /* Match original spacing */
  text-transform: uppercase !important;
  position: relative !important;
  padding-bottom: 0 !important;  /* Removed padding */
  max-width: 800px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  line-height: 1.1 !important;  /* Tighter line height */

  /* Golden gradient text effect */
  background: linear-gradient(
    135deg,
    #f4d03f 0%,
    #dfa927 25%,
    #c99623 50%,
    #dfa927 75%,
    #f4d03f 100%
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  text-fill-color: transparent !important;

  /* Initial state for hover effect */
  filter: drop-shadow(0 0 0px transparent) !important;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* Luxurious hover glow effect - balanced intensity */
.section-title:hover {
  /* Refined golden glow with good presence */
  filter: drop-shadow(0 0 20px rgba(244, 208, 63, 0.45))
          drop-shadow(0 0 40px rgba(223, 169, 39, 0.25))
          drop-shadow(0 0 60px rgba(201, 150, 35, 0.15)) !important;
  /* Subtle lift for elegance */
  transform: translateY(-1.5px) scale(1.01) !important;
}

/* Ambient glow effect with moderate intensity */
.section-title::before {
  content: '' !important;
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 110% !important;
  height: 140% !important;
  background: radial-gradient(
    ellipse at center,
    rgba(244, 208, 63, 0.15) 0%,
    rgba(223, 169, 39, 0.08) 35%,
    transparent 65%
  ) !important;
  opacity: 0 !important;
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
  pointer-events: none !important;
  z-index: -1 !important;
}

.section-title:hover::before {
  opacity: 1 !important;
}

.section-subtitle {
  font-size: 1.125rem !important;  /* Slightly smaller */
  line-height: 1.6 !important;  /* Tighter line height */
  color: var(--vp-c-text-2) !important;
  max-width: 800px !important;
  margin: 0 auto !important;
  font-weight: 400 !important;
  letter-spacing: -0.005em !important;  /* Less negative spacing */
  padding: 0 2rem !important;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .section-title-wrapper {
    margin-bottom: 40px !important;
  }

  .section-title {
    font-size: clamp(1.3rem, 4vw, 1.8rem) !important;  /* Responsive clamp for mobile */
    letter-spacing: 0.06em !important;
  }

  .section-subtitle {
    font-size: 1rem !important;  /* Slightly smaller on mobile */
    line-height: 1.6 !important;
    padding: 0 1rem !important;
  }
}

/* Larger screens */
@media (min-width: 1440px) {
  .section-title {
    max-width: 900px !important;
  }

  .section-subtitle {
    max-width: 900px !important;
  }
}
</style>