<template>
  <Transition name="permalink" appear>
    <div
      v-if="mounted"
      class="permalink-container"
      @click="copyToClipboard"
      @mouseenter="handleHover(true)"
      @mouseleave="handleHover(false)"
    >
      <div class="permalink-wrapper">
        <!-- Icon -->
        <span class="permalink-icon">
          <!-- Egg: Foundation/Introduction icon -->
          <svg v-if="iconType === 'egg'" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C15.5 22 19 18.5 19 14C19 8 15.5 2 12 2C8.5 2 5 8 5 14C5 18.5 8.5 22 12 22Z" fill="currentColor" opacity="0.9"/>
          </svg>

          <!-- Autopilots: Chevron military icon -->
          <svg v-else-if="iconType === 'chevron'" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 8 L12 4 L18 8" stroke="currentColor" stroke-width="1.5" fill="none" />
            <path d="M6 13 L12 9 L18 13" stroke="currentColor" stroke-width="1.5" fill="none" />
            <path d="M6 18 L12 14 L18 18" stroke="currentColor" stroke-width="1.5" fill="none" />
          </svg>

          <!-- HATs: Stacked layers icon -->
          <svg v-else-if="iconType === 'hats'" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="14" width="16" height="5" rx="1" stroke="currentColor" stroke-width="1.5"/>
            <rect x="6" y="9" width="12" height="5" rx="1" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
            <rect x="8" y="4" width="8" height="5" rx="1" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
          </svg>

          <!-- Playbooks: Document icon -->
          <svg v-else-if="iconType === 'playbooks'" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="3" width="14" height="18" rx="1" stroke="currentColor" stroke-width="1.5"/>
            <path d="M5 7H19" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 11H16" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            <path d="M8 14H16" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            <path d="M8 17H13" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
          </svg>

          <!-- Actions: Validation checkmark icon -->
          <svg v-else-if="iconType === 'actions'" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <!-- Code HAT icon -->
          <svg v-else-if="iconType === 'code'" width="16" height="16" viewBox="0 0 40 40" fill="none">
            <polyline points="26,30 36,20 26,10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="14,10 4,20 14,30" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <!-- Gen HAT: Terminal icon -->
          <svg v-else-if="iconType === 'gen'" width="16" height="16" viewBox="0 0 40 40" fill="none">
            <polyline points="10,28 18,20 10,12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="22" x2="30" y1="28" y2="28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>

          <!-- Visual HAT: Eye icon -->
          <svg v-else-if="iconType === 'visual'" width="16" height="16" viewBox="0 0 40 40" fill="none">
            <path d="M4 20s5-12 16-12 16 12 16 12-5 12-16 12-16-12-16-12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="2"/>
          </svg>

          <!-- Time Graph icon -->
          <svg v-else-if="iconType === 'time-graph'" width="16" height="16" viewBox="0 0 40 40" fill="none">
            <path d="M23 26 L17 22" stroke="currentColor" stroke-width="1.5"/>
            <path d="M18 18 L24 14" stroke="currentColor" stroke-width="1"/>
            <circle cx="26" cy="28" r="6" stroke="currentColor" fill="none" stroke-width="1.5"/>
            <circle cx="14" cy="20" r="4.5" stroke="currentColor" fill="none" stroke-width="1.3"/>
            <circle cx="25" cy="12" r="3" stroke="currentColor" fill="none" stroke-width="1"/>
          </svg>

          <!-- Default: Ultra-minimalist link icon -->
          <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="7" cy="12" r="2" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="17" cy="12" r="2" stroke="currentColor" stroke-width="1.5"/>
            <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </span>

        <!-- Domain/Path -->
        <span class="permalink-text">
          {{ displayText }}
        </span>

        <!-- Copy/Share indicator - share when idle, copy on hover -->
        <span class="copy-indicator-wrapper">
          <Transition name="copy-indicator" mode="out-in">
            <span v-if="copied" key="success" class="copy-success">
              ✓
            </span>
            <span v-else-if="hovering" key="copy" class="copy-hint">
              <!-- Copy icon on hover -->
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/>
                <path d="M16 8V6C16 4.89543 15.1046 4 14 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H8" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </span>
            <span v-else key="share" class="share-hint">
              <!-- Share icon when not hovering -->
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="16 6 12 2 8 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="12" x2="12" y1="2" y2="15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </span>
          </Transition>
        </span>
      </div>

      <!-- Hover effect overlay -->
      <div class="permalink-glow" :class="{ active: hovering || copied }"></div>

      <!-- Shimmer effect -->
      <div class="permalink-shimmer" :class="{ active: hovering }"></div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vitepress'

interface PermalinkConfig {
  shortDomain?: string
  icon?: string
  basePath?: string
}

const props = withDefaults(defineProps<PermalinkConfig>(), {
  icon: '🔗',
  basePath: 'hatch.rs'
})

const route = useRoute()
const copied = ref(false)
const hovering = ref(false)
const mounted = ref(false)

// Compute the display text and full URL
const displayText = computed(() => {
  if (props.shortDomain) {
    // For short domains, show the full domain
    return props.shortDomain
  }

  // For regular paths, show basePath + current path
  const currentPath = route.path.replace(/\.html$/, '').replace(/\/index$/, '') || ''
  return `${props.basePath}${currentPath}`
})

const fullUrl = computed(() => {
  if (props.shortDomain) {
    return `https://${props.shortDomain}`
  }

  const currentPath = route.path.replace(/\.html$/, '').replace(/\/index$/, '') || ''
  return `https://${props.basePath}${currentPath}`
})

// Determine which icon type to show based on the current route
const iconType = computed(() => {
  const path = route.path.toLowerCase()

  // Map routes to icon types
  // Only introduction page uses the egg icon
  if (path.includes('/introduction') || path === '/') return 'egg'
  if (path.includes('/autopilots')) return 'chevron'  // Chevron is for all autopilots pages
  if (path.includes('/playbooks')) return 'playbooks'  // Playbooks document icon
  if (path.includes('/actions')) return 'actions'  // Actions gavel/check icon
  if (path.includes('/core-hats')) return 'hats'  // HATs combined icon
  if (path.includes('/philosophy') || path.includes('/pillars')) return 'link'  // Philosophy and pillars use default
  if (path.includes('/code-hat') || path.includes('/features-code')) return 'code'
  if (path.includes('/gen-hat') || path.includes('/features-gen')) return 'gen'
  if (path.includes('/visual-hat') || path.includes('/features-visual')) return 'visual'
  if (path.includes('/time-graph-hat') || path.includes('/features-time-graph')) return 'time-graph'

  // Default to link icon
  return 'link'
})

// Copy to clipboard with haptic-like feedback
async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(fullUrl.value)
    copied.value = true

    // Reset after animation
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

function handleHover(state: boolean) {
  hovering.value = state
}

onMounted(() => {
  // Trigger entrance animation
  setTimeout(() => {
    mounted.value = true
  }, 100)
})
</script>

<style scoped>
.permalink-container {
  --permalink-bg: rgba(255, 255, 255, 0.01);
  --permalink-border: rgba(255, 215, 0, 0.15);
  --permalink-text: rgba(255, 255, 255, 0.6);
  --permalink-hover-text: rgba(255, 255, 255, 0.95);
  --permalink-glow: rgba(255, 215, 0, 0.08);
  --permalink-success: #10b981;
  --permalink-gold: #FFD700;
  --permalink-gold-dark: #FFA500;
  --permalink-gold-subtle: rgba(255, 215, 0, 0.3);

  position: relative;
  display: inline-flex;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  margin-left: -4px; /* Small negative margin to align with content */
  cursor: pointer;
  user-select: none;
  isolation: isolate;
  border-radius: 100px;
  overflow: hidden; /* Contain all effects within the button */
}

.dark .permalink-container {
  --permalink-bg: rgba(0, 0, 0, 0.3);
  --permalink-border: rgba(255, 215, 0, 0.2);
  --permalink-text: rgba(255, 255, 255, 0.7);
  --permalink-hover-text: rgba(255, 255, 255, 1);
  --permalink-glow: rgba(255, 215, 0, 0.1);
  --permalink-gold: #FFD700;
  --permalink-gold-dark: #FFB700;
  --permalink-gold-subtle: rgba(255, 215, 0, 0.4);
}

.permalink-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1rem 0.5rem 0.9rem;
  background: var(--permalink-bg);
  border: 1px solid var(--permalink-border);
  border-radius: 100px;
  font-size: 0.82rem;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--permalink-text);
  backdrop-filter: blur(12px) saturate(1.8);
  -webkit-backdrop-filter: blur(12px) saturate(1.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.permalink-container:hover .permalink-wrapper {
  color: var(--permalink-hover-text);
  border-color: var(--permalink-gold-subtle);
  background: linear-gradient(
    135deg,
    rgba(255, 215, 0, 0.03),
    rgba(255, 215, 0, 0.06)
  );
  transform: translateY(-1px) scale(1.02);
  box-shadow:
    0 4px 12px rgba(255, 215, 0, 0.08),
    0 2px 4px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.permalink-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  width: 1.2rem;
  height: 1.2rem;
  margin-right: -0.1rem;
  filter: grayscale(0.2) brightness(0.9);
  transition: all 0.3s ease;
}

.permalink-container:hover .permalink-icon {
  filter: grayscale(0) brightness(1.1);
  transform: scale(1.1) rotate(5deg);
}

.permalink-text {
  font-weight: 500;
  white-space: nowrap;
}

.copy-indicator-wrapper {
  display: inline-flex;
  align-items: center;
  width: 16px;
  height: 16px;
  margin-left: 0.3rem;
  position: relative;
}

.share-hint,
.copy-hint,
.copy-success {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.copy-success {
  color: var(--permalink-gold);
  font-weight: 700;
  font-size: 0.85rem;
  filter: drop-shadow(0 1px 2px rgba(255, 215, 0, 0.3));
  animation: success-bounce 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes success-bounce {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

.share-hint {
  opacity: 0.35;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.copy-hint {
  opacity: 0.7;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.permalink-container:hover .copy-hint {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.05);
}

.share-hint svg,
.copy-hint svg {
  display: block;
  width: 12px;
  height: 12px;
}

/* Glow effect - now inside the button */
.permalink-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 215, 0, 0.15),
    rgba(255, 215, 0, 0.05) 40%,
    transparent 70%
  );
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.permalink-glow.active {
  opacity: 0.5;
  animation: glow-pulse 3s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.7;
  }
}

/* Shimmer effect - contained within button */
.permalink-shimmer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.permalink-shimmer.active {
  opacity: 1;
}

.permalink-shimmer.active::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    105deg,
    transparent 30%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 70%
  );
  animation: shimmer 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200%);
  }
}

/* Copy success ripple */
.permalink-container:active .permalink-wrapper {
  transform: scale(0.98);
}

/* Transitions */
.permalink-enter-active {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.permalink-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.9);
}

.copy-indicator-enter-active,
.copy-indicator-leave-active {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.copy-indicator-enter-from {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
}

.copy-indicator-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
}

/* Desktop alignment with VPDoc padding */
@media (min-width: 960px) {
  .permalink-container {
    margin-left: 0; /* Align with VPDoc 32px padding */
  }
}

/* Large screens (wider than 1280px) */
@media (min-width: 1280px) {
  .permalink-container {
    margin: 40px auto 20px !important;
  }
}

/* Mobile and Tablet responsiveness */
@media (max-width: 959px) {
  .permalink-container {
    display: flex;
    justify-content: center;
    margin-top: 0.8rem !important;
    margin-bottom: 0.8rem !important;
    margin-left: 0;
    margin-right: 0;
  }

  .permalink-wrapper {
    font-size: 0.75rem;
    padding: 0.35rem 0.7rem;
  }

  .permalink-icon {
    font-size: 0.8rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .permalink-wrapper,
  .permalink-glow,
  .copy-indicator-enter-active,
  .copy-indicator-leave-active,
  .permalink-enter-active {
    transition: none;
  }
}

/* Print styles */
@media print {
  .permalink-container {
    display: none;
  }
}
</style>

<style>
/* Global style to remove VPDoc padding-top at all breakpoints */
.VPDoc {
  padding-top: 0 !important;
}

/* Override all media query padding-top rules */
@media (min-width: 768px) {
  .VPDoc {
    padding-top: 0 !important;
  }
}

@media (min-width: 960px) {
  .VPDoc {
    padding-top: 0 !important;
  }
}

/* Also target with data attributes if needed */
.VPDoc[data-v-27fcc3b2] {
  padding-top: 0 !important;
}

@media (min-width: 768px) {
  .VPDoc[data-v-27fcc3b2] {
    padding-top: 0 !important;
  }
}

@media (min-width: 960px) {
  .VPDoc[data-v-27fcc3b2] {
    padding-top: 0 !important;
  }
}

/* Remove padding-top from container */
.VPDoc:not(.VPHome .VPDoc) .container {
  padding-top: 0 !important;
}

/* Ensure container padding-top is removed at all breakpoints */
@media (min-width: 768px) {
  .VPDoc:not(.VPHome .VPDoc) .container {
    padding-top: 0 !important;
  }
}

@media (min-width: 960px) {
  .VPDoc:not(.VPHome .VPDoc) .container {
    padding-top: 0 !important;
  }
}

/* Mobile and Tablet specific overrides for permalink */
@media (max-width: 959px) {
  .VPDoc {
    padding-top: 0.8rem !important;
  }

  .VPDoc .container {
    padding-top: 0 !important;
  }

  .permalink-container {
    display: flex !important;
    justify-content: center !important;
    margin-top: 0.8rem !important;
    margin-bottom: 0.8rem !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
</style>