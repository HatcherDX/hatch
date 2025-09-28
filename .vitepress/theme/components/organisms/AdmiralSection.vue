<template>
  <div class="admiral-section">
    <SectionTitle title="About the Admiral" />

    <div class="admiral-container">
      <div class="admiral-card">
        <!-- Left side with photo and rank badge -->
        <div class="admiral-visual">
          <div class="admiral-photo-wrapper">
            <div class="photo-border">
              <img src="/chriss.jpg" alt="Chriss Mejía" class="admiral-photo" />
            </div>
            <div class="admiral-rank-badge">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Right side with info -->
        <div class="admiral-content">
          <h3 class="admiral-name">Chriss Mejía</h3>
          <p class="admiral-title">Founder & Principal Systems Architect</p>

          <!-- Stats badges -->
          <div class="admiral-stats">
            <div class="stat-badge">
              <span class="stat-number">22</span>
              <span class="stat-label">Years Engineering Systems</span>
            </div>
            <div class="stat-badge">
              <span class="stat-number">300+</span>
              <span class="stat-label">Engineers Led</span>
            </div>
            <div class="stat-badge primary">
              <span class="stat-number">YC</span>
              <span class="stat-label">MVP Builder</span>
            </div>
          </div>

          <!-- Mission statement -->
          <p class="admiral-mission">
            My journey in engineering spans over two decades, from serving as VP at a pioneering Silicon Valley
            AI startup to building the MVP for a YC-backed venture, and leading 300-person enterprise divisions.
            Now building the tools that will define the next decade of development.
          </p>

          <!-- Quote -->
          <blockquote class="admiral-quote">
            <svg class="quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor" opacity="0.3"/>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" opacity="0.3"/>
            </svg>
            <p class="quote-text">
              The future of software isn't replacing developers.<br>
              <span class="quote-emphasis">It's giving them command.</span>
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../atoms/SectionTitle.vue'
</script>

<style scoped>
/* Admiral Section - Premium Biography */
.admiral-section {
  padding: 120px 2rem 100px !important;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(223, 169, 39, 0.02),
    transparent
  ) !important;
  position: relative !important;
  overflow: hidden !important;
}

/* Decorative background pattern */
.admiral-section::before {
  content: '' !important;
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 800px !important;
  height: 800px !important;
  background: radial-gradient(
    circle at center,
    rgba(223, 169, 39, 0.03) 0%,
    transparent 50%
  ) !important;
  pointer-events: none !important;
  z-index: 0 !important;
}

.admiral-container {
  max-width: 1100px !important;
  margin: 0 auto !important;
  position: relative !important;
  z-index: 1 !important;
}

/* Premium Card Design */
.admiral-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.02)
  ) !important;
  border: 1px solid rgba(223, 169, 39, 0.12) !important;
  border-radius: 32px !important;
  padding: 60px !important;
  display: grid !important;
  grid-template-columns: 280px 1fr !important;
  gap: 60px !important;
  align-items: start !important;
  backdrop-filter: blur(20px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
  box-shadow:
    0 24px 64px rgba(0, 0, 0, 0.04),
    0 8px 24px rgba(223, 169, 39, 0.06),
    inset 0 2px 2px rgba(255, 255, 255, 0.04) !important;
  position: relative !important;
  overflow: hidden !important;
}

/* Dark mode card */
.dark .admiral-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.01)
  ) !important;
  border-color: rgba(223, 169, 39, 0.08) !important;
  box-shadow:
    0 24px 64px rgba(0, 0, 0, 0.2),
    0 8px 24px rgba(223, 169, 39, 0.04),
    inset 0 2px 2px rgba(255, 255, 255, 0.02) !important;
}

/* Photo Section */
.admiral-visual {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.admiral-photo-wrapper {
  position: relative !important;
  width: 240px !important;
  height: 240px !important;
}

.photo-border {
  width: 100% !important;
  height: 100% !important;
  border-radius: 50% !important;
  background: linear-gradient(
    135deg,
    #f4d03f 0%,
    #dfa927 50%,
    #c99623 100%
  ) !important;
  padding: 3px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  position: relative !important;
  z-index: 2 !important;
}

.admiral-photo {
  width: 100% !important;
  height: 100% !important;
  border-radius: 50% !important;
  object-fit: cover !important;
  border: 3px solid white !important;
}

.dark .admiral-photo {
  border-color: #1d1d1f !important;
}

/* Rank Badge */
.admiral-rank-badge {
  position: absolute !important;
  bottom: 10px !important;
  right: 10px !important;
  width: 56px !important;
  height: 56px !important;
  background: linear-gradient(
    135deg,
    #f4d03f 0%,
    #dfa927 50%,
    #c99623 100%
  ) !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-shadow:
    0 4px 12px rgba(223, 169, 39, 0.4),
    0 2px 4px rgba(0, 0, 0, 0.2) !important;
  z-index: 3 !important;
  border: 3px solid white !important;
}

.dark .admiral-rank-badge {
  border-color: #1d1d1f !important;
}

.admiral-rank-badge svg {
  width: 28px !important;
  height: 28px !important;
  color: white !important;
}

/* Content Section */
.admiral-content {
  display: flex !important;
  flex-direction: column !important;
  gap: 1.5rem !important;
}

.admiral-name {
  font-size: 2.5rem !important;
  font-weight: 200 !important;
  letter-spacing: -0.02em !important;
  background: linear-gradient(
    135deg,
    #f4d03f 0%,
    #dfa927 50%,
    #c99623 100%
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  line-height: 1.2 !important;
  margin: 0 !important;
}

.admiral-title {
  font-size: 1.125rem !important;
  color: var(--vp-c-text-2) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  font-weight: 300 !important;  /* Light weight for elegance */
  margin: -1rem 0 0 0 !important;  /* Reduced margin to bring closer to name */
}

/* Stats Badges */
.admiral-stats {
  display: flex !important;
  gap: 0.75rem !important;  /* Reduced gap to give more space to badges */
  flex-wrap: nowrap !important;  /* Prevent wrapping */
  margin: 0.5rem 0 !important;
  width: 100% !important;  /* Ensure full width */
}

.stat-badge {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.02)
  ) !important;
  border: 1px solid rgba(223, 169, 39, 0.1) !important;
  border-radius: 12px !important;
  padding: 16px 12px !important;  /* Reduced horizontal padding */
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.5rem !important;
  transition: all 0.3s ease !important;
  flex: 1 1 0 !important;  /* Equal width with shrink/grow */
  min-width: 0 !important;  /* Allow shrinking below content */
  min-height: 80px !important;  /* Consistent height */
}

.stat-badge.primary {
  background: linear-gradient(
    135deg,
    rgba(223, 169, 39, 0.1),
    rgba(223, 169, 39, 0.05)
  ) !important;
  border-color: rgba(223, 169, 39, 0.2) !important;
}

.stat-badge:hover {
  transform: translateY(-2px) !important;
  border-color: rgba(223, 169, 39, 0.3) !important;
  box-shadow: 0 8px 24px rgba(223, 169, 39, 0.1) !important;
}

.stat-number {
  font-size: 1.5rem !important;
  font-weight: 300 !important;  /* Light weight for elegant stats */
  color: #dfa927 !important;
  line-height: 1 !important;
}

.stat-label {
  font-size: 0.6rem !important;  /* Small text for 2 lines */
  text-transform: uppercase !important;
  letter-spacing: 0.015em !important;  /* Very tight spacing */
  color: var(--vp-c-text-2) !important;
  opacity: 0.8 !important;
  line-height: 1.15 !important;  /* Tighter line height */
  text-align: center !important;
  white-space: normal !important;  /* Allow wrapping */
  word-break: break-word !important;  /* Force break if needed */
}

/* Mission Statement */
.admiral-mission {
  font-size: 1rem !important;
  line-height: 1.7 !important;
  color: var(--vp-c-text-1) !important;
  opacity: 0.9 !important;
}

/* Quote Section */
.admiral-quote {
  position: relative !important;
  margin: 1.5rem 0 0 0 !important;
  padding: 1.5rem !important;
  background: linear-gradient(
    135deg,
    rgba(223, 169, 39, 0.05),
    rgba(223, 169, 39, 0.02)
  ) !important;
  border-left: 3px solid rgba(223, 169, 39, 0.3) !important;
  border-radius: 8px !important;
}

.quote-icon {
  position: absolute !important;
  top: 12px !important;
  left: 12px !important;
  color: #dfa927 !important;
  opacity: 0.3 !important;
}

.quote-text {
  font-family: 'Cinzel', 'Georgia', serif !important;
  font-size: 0.85rem !important;
  line-height: 1.6 !important;
  color: var(--vp-c-text-1) !important;
  font-weight: 500 !important;
  letter-spacing: 0.03em !important;
  text-transform: uppercase !important;
  margin: 0 !important;
  padding-left: 2rem !important;
}

.quote-emphasis {
  color: #dfa927 !important;
  font-weight: 600 !important;
  display: block !important;
  margin-top: 0.5rem !important;
}

/* Responsive Design */
@media (max-width: 968px) {
  .admiral-card {
    grid-template-columns: 1fr !important;
    padding: 40px !important;
    gap: 40px !important;
  }

  .admiral-photo-wrapper {
    width: 200px !important;
    height: 200px !important;
    margin: 0 auto !important;
  }

  .admiral-name {
    font-size: 2rem !important;
    text-align: center !important;
  }

  .admiral-title {
    text-align: center !important;
  }

  .admiral-stats {
    justify-content: center !important;
  }
}

@media (max-width: 640px) {
  .admiral-section {
    padding: 80px 1rem 60px !important;
  }

  .admiral-card {
    padding: 32px 24px !important;
    border-radius: 20px !important;
  }

  .admiral-photo-wrapper {
    width: 160px !important;
    height: 160px !important;
  }

  .admiral-name {
    font-size: 1.75rem !important;
  }

  .stat-badge {
    padding: 10px 16px !important;
  }

  .stat-number {
    font-size: 1.25rem !important;
  }
}
</style>