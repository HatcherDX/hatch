<template>
  <div class="hats-section">
    <SectionTitle
      title="The Core HATs"
      subtitle="A developer &quot;wears different hats&quot; throughout the day. Hatcher gives you a dedicated HAT, or workspace, for every job:"
    />
    <div class="hats-grid">
      <a href="/features-code-hat" class="hat-card">
        <div class="hat-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Code icon from IDE -->
            <polyline points="26,30 36,20 26,10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="14,10 4,20 14,30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3 class="hat-title">The Code HAT</h3>
        <p class="hat-description">A world-class code editor, powered by Monaco, for when you are in the flow of pure creation.</p>
      </a>
      <a href="/features-gen-hat" class="hat-card">
        <div class="hat-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Terminal icon from IDE -->
            <polyline points="10,28 18,20 10,12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="22" x2="30" y1="28" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <h3 class="hat-title">The Gen HAT</h3>
        <p class="hat-description">The prompt engineering interface. Your direct line of communication to the AI fleet.</p>
      </a>
      <a href="/features-visual-hat" class="hat-card">
        <div class="hat-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Eye icon from IDE -->
            <path d="M4 20s5-12 16-12 16 12 16 12-5 12-16 12-16-12-16-12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
        <h3 class="hat-title">The Visual HAT</h3>
        <p class="hat-description">A workspace for designing and interacting with UI components, bridging design and code.</p>
      </a>
      <a href="/features-time-graph-hat" class="hat-card">
        <div class="hat-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Timeline icon from IDE -->
            <!-- Connecting lines -->
            <path d="M23 26 L17 22" stroke="currentColor" stroke-width="1.5"/>
            <path d="M18 18 L24 14" stroke="currentColor" stroke-width="1"/>
            <!-- Bottom circle (largest) -->
            <circle cx="26" cy="28" r="6" stroke="currentColor" fill="none" stroke-width="1.5"/>
            <!-- Middle circle -->
            <circle cx="14" cy="20" r="4.5" stroke="currentColor" fill="none" stroke-width="1.3"/>
            <!-- Top circle (smallest) -->
            <circle cx="25" cy="12" r="3" stroke="currentColor" fill="none" stroke-width="1"/>
          </svg>
        </div>
        <h3 class="hat-title">The Time Graph HAT</h3>
        <p class="hat-description">The ultimate audit tool. A quantum graph of your project's history to visualize every change.</p>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../atoms/SectionTitle.vue'
</script>

<style scoped>
/* HATs Section - Apple-refined */
.hats-section {
  margin-top: 60px !important;
  margin-bottom: 0 !important;
  padding: 0 2rem !important;
  position: relative !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
}

.hats-grid {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 0 !important;  /* No gap to make borders connect */
  position: relative !important;
  padding-top: 30px !important;
  max-width: 1200px !important;
  margin: 0 auto !important;
  width: 100% !important;
}

/* Premium HAT cards with invisible dividers */
a.hat-card {
  position: relative !important;
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  padding: 48px 32px !important;
  text-align: center !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  text-decoration: none !important;
  color: inherit !important;
  display: block !important;
  overflow: visible !important;
}

/* Subtle dividers using pseudo-elements for premium feel */
a.hat-card:not(:nth-child(4n))::after {
  content: '' !important;
  position: absolute !important;
  top: 20% !important;
  right: 0 !important;
  width: 1px !important;
  height: 60% !important;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 0, 0, 0.02) 20%,
    rgba(0, 0, 0, 0.02) 80%,
    transparent
  ) !important;
}

.dark a.hat-card:not(:nth-child(4n))::after {
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 255, 255, 0.02) 20%,
    rgba(255, 255, 255, 0.02) 80%,
    transparent
  ) !important;
}

/* HAT card hover states with premium glow */
a.hat-card:hover {
  background: radial-gradient(
    ellipse at center,
    rgba(223, 169, 39, 0.015) 0%,
    transparent 70%
  ) !important;
  z-index: 2 !important;
  transform: translateY(-2px) !important;
}

/* Premium top accent on hover */
a.hat-card::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 20% !important;
  right: 20% !important;
  height: 1px !important;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(223, 169, 39, 0.3),
    transparent
  ) !important;
  opacity: 0 !important;
  transition: opacity 0.3s ease !important;
}

a.hat-card:hover::before {
  opacity: 1 !important;
}

/* HAT Icons with distinct colors */
.hat-icon {
  width: 56px !important;
  height: 56px !important;
  margin: 0 auto 20px !important;
  position: relative !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.hat-icon svg {
  width: 100% !important;
  height: 100% !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  color: #6e6e73 !important;  /* Darker brown/gray - more subtle */
  opacity: 0.8 !important;
}

/* Hover effect reveals the refined golden premium color */
a.hat-card:hover .hat-icon svg {
  transform: translateY(-2px) scale(1.1) !important;
  color: #c9962f !important;  /* Rich, refined gold - less yellow */
  opacity: 1 !important;
  filter: drop-shadow(0 4px 12px rgba(201, 150, 47, 0.25)) !important;
}

/* Dark mode icon colors */
.dark .hat-icon svg {
  color: #86868b !important;  /* Subtle gray for dark mode */
  opacity: 0.7 !important;
}

.dark a.hat-card:hover .hat-icon svg {
  color: #d4a847 !important;  /* Warm, luxurious gold - less saturated yellow */
  opacity: 1 !important;
  filter: drop-shadow(0 4px 12px rgba(212, 168, 71, 0.35)) !important;
}

/* HAT Titles */
.hat-title {
  font-size: 17px !important;
  font-weight: 600 !important;
  margin-bottom: 8px !important;
  color: #1d1d1f !important;
  letter-spacing: -0.018em !important;
  line-height: 1.2 !important;
}

.dark .hat-title {
  color: #f5f5f7 !important;
}

/* HAT Descriptions */
.hat-description {
  font-size: 14px !important;
  line-height: 1.43 !important;
  color: #6e6e73 !important;
  letter-spacing: -0.011em !important;
}

.dark .hat-description {
  color: #a1a1a6 !important;
}

/* Responsive HATs */
@media (max-width: 968px) {
  .hats-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  /* Adjust divider for 2-column layout */
  a.hat-card:nth-child(4n)::after {
    display: block !important;
  }

  a.hat-card:nth-child(2n)::after {
    display: none !important;
  }
}

@media (max-width: 640px) {
  .hats-grid {
    grid-template-columns: 1fr !important;
  }

  /* No dividers for single column */
  a.hat-card::after {
    display: none !important;
  }
}

@media (max-width: 768px) {
  .hats-grid {
    gap: 0 !important;
  }

  a.hat-card {
    padding: 32px 20px !important;
  }
}
</style>