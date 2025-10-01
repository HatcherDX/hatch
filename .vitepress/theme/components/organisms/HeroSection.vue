<template>
  <section class="hero-section">
    <div class="hero-container">
      <!-- Logo -->
      <div class="hero-logo">
        <img
          v-if="isDark"
          src="/logo-small-inline-dark.svg"
          :alt="logoAlt"
          class="hero-logo-image"
        />
        <img
          v-else
          src="/logo-small-inline-light.svg"
          :alt="logoAlt"
          class="hero-logo-image"
        />
      </div>

      <!-- Title with golden gradient -->
      <h1 class="hero-title">
        <span class="hero-title-text">{{ title }}</span>
      </h1>

      <!-- Tagline -->
      <p class="hero-tagline">
        {{ tagline }}
      </p>

      <!-- CTA Button -->
      <div class="hero-actions">
        <a :href="ctaLink" class="hero-cta">
          <svg class="hero-cta-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <!-- Military chevrons (sergeant stripes) -->
            <!-- Top chevron -->
            <path d="M6 8 L12 4 L18 8" stroke="currentColor" stroke-width="1.5" fill="none" />
            <!-- Middle chevron -->
            <path d="M6 13 L12 9 L18 13" stroke="currentColor" stroke-width="1.5" fill="none" />
            <!-- Bottom chevron -->
            <path d="M6 18 L12 14 L18 18" stroke="currentColor" stroke-width="1.5" fill="none" />
          </svg>
          <span>{{ ctaText }}</span>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'

interface HeroSectionProps {
  title?: string
  tagline?: string
  ctaText?: string
  ctaLink?: string
  logoAlt?: string
}

const props = withDefaults(defineProps<HeroSectionProps>(), {
  title: 'Constitutional IDE',
  tagline: 'Command a fleet of AI drones that code while you sleep. Deploy autopilots that follow your playbooks with military precision. The IDE where you are the Commander, not the debugger.',
  ctaText: 'Join the Fleet',
  ctaLink: '/philosophy',
  logoAlt: 'Hatcher DX Engine'
})

const { isDark } = useData()
</script>

<style scoped>
/* Mobile-first: Default mobile styles */
.hero-section {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 240px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
}

/* Removed tablet media query - using mobile styles for all screen sizes */

.hero-container {
  max-width: 700px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding: 0 20px 60px;
}

/* Remove bottom padding for mobile portrait only */
@media (orientation: portrait) and (max-width: 640px) {
  .hero-container {
    padding: 0 20px 0px;
  }
}

/* Logo Styling - Mobile first (smaller) */
.hero-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
}

.hero-logo-image {
  width: auto;
  height: 36px !important;
  margin-bottom: 2px;
  max-width: 90vw;
  object-fit: contain;
}

/* Larger screens */
@media (min-width: 768px) {
  .hero-logo-image {
    height: 50px !important;
  }
}

/* Title with Golden Gradient - Mobile first (smaller) */
.hero-title {
  font-size: 1.4rem !important;
  font-weight: 600;
  line-height: 1.1;
  margin: 0 auto 1.5rem;
  font-family: 'Cinzel', serif;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* Small tablets and large phones in landscape */
@media (min-width: 640px) {
  .hero-title {
    font-size: 1.6rem !important; /* Slightly larger for small tablets */
    letter-spacing: 0.07em;
  }
}

/* Larger tablets and desktop */
@media (min-width: 1024px) {
  .hero-title {
    font-size: clamp(2rem, 3vw, 2.5rem) !important;
    letter-spacing: 0.08em;
    margin-bottom: 2rem;
  }
}

.hero-title-text {
  background: linear-gradient(
    135deg,
    #f4d03f 0%,
    #dfa927 25%,
    #c99623 50%,
    #dfa927 75%,
    #f4d03f 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

/* Tagline - Mobile first (smaller) */
.hero-tagline {
  font-size: 0.7rem;
  line-height: 1.6;
  max-width: 750px !important;
  margin: 0 auto 2rem;
  color: var(--vp-c-text-2);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  font-family: 'Cinzel', serif;
}

/* Small tablets and landscape phones */
@media (min-width: 640px) {
  .hero-tagline {
    font-size: 0.75rem;
    max-width: 600px !important; /* Narrower to prevent cramping */
    line-height: 1.65;
  }
}

/* Larger screens */
@media (min-width: 1024px) {
  .hero-tagline {
    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
    line-height: 1.7;
    margin-bottom: 1rem;
    max-width: 750px !important;
  }
}

/* CTA Button */
.hero-actions {
  margin-top: 1rem;
}

/* Mobile first - smaller button */
.hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  padding: 10px 24px; /* Smaller padding for mobile */
  font-size: 12px; /* Smaller font for mobile */
  font-weight: 500;
  color: #ffffff;
  background: #c99623;
  border: none;
  border-radius: 10px; /* Slightly smaller radius */
  text-decoration: none;
  transition: all 0.25s ease;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text',
    'Segoe UI', 'Segoe UI Variable Display', Roboto, Oxygen, Ubuntu, Cantarell,
    'Helvetica Neue', Arial, sans-serif;
  box-shadow: 0 2px 12px rgba(201, 150, 35, 0.25);
  position: relative;
  overflow: hidden;
}

/* Tablets */
@media (min-width: 640px) {
  .hero-cta {
    padding: 12px 32px;
    font-size: 14px;
    gap: 0.4rem;
    letter-spacing: 0.15em;
    border-radius: 12px;
  }
}

/* Larger screens */
@media (min-width: 768px) {
  .hero-cta {
    padding: 16px 48px;
    font-size: 18px;
    gap: 0.5rem;
    letter-spacing: 0.2em;
  }
}

/* Removed glossy overlay for minimalist look */

.hero-cta span {
  display: inline-flex;
  align-items: center;
  line-height: 1;
}

.hero-cta-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 18px; /* Smaller icon for mobile */
  height: 18px;
  margin-top: 1px; /* Slight adjustment for visual alignment */
}

@media (min-width: 640px) {
  .hero-cta-icon {
    width: 20px;
    height: 20px;
    margin-top: 2px;
  }
}

@media (min-width: 768px) {
  .hero-cta-icon {
    width: 24px;
    height: 24px;
  }
}

.hero-cta:hover {
  background: linear-gradient(
    135deg,
    #dfa927 0%,
    #f4d03f 25%,
    #dfa927 50%,
    #c99623 75%,
    #dfa927 100%
  );
  background-size: 200% 200%;
  animation: goldWave 3s ease infinite;
  transform: translateY(-2px);
  box-shadow:
    0 8px 25px rgba(223, 169, 39, 0.4),
    0 4px 12px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  color: #ffffff; /* Keep white text */
}

/* Premium gold wave animation */
@keyframes goldWave {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Add shine effect on hover */
.hero-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.hero-cta:hover::before {
  opacity: 1;
  animation: shine 1.5s ease-in-out infinite;
}

@keyframes shine {
  0% { left: -100%; }
  50%, 100% { left: 100%; }
}

.hero-cta:active {
  transform: translateY(0);
}

/* Dark mode keeps same button style */
.dark .hero-cta {
  color: #000000;
}

/* Dark mode adjustments */
.dark .hero-section {
  background: radial-gradient(
    ellipse at center top,
    rgba(223, 169, 39, 0.05) 0%,
    transparent 50%
  );
}

/* Light mode adjustments */
:not(.dark) .hero-section {
  background: radial-gradient(
    ellipse at center top,
    rgba(223, 169, 39, 0.03) 0%,
    transparent 50%
  );
}
</style>