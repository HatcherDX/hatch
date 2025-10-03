<template>
  <div class="product-showcase-section" data-scroll-animation="true">
    <!-- Scroll Indicator -->
    <div class="showcase-scroll-indicator">
      <span class="scroll-text">{{ locale.showcase.scrollText }}</span>
      <svg class="scroll-arrow" viewBox="0 0 24 24">
        <path
          d="M12 5 L12 19 M6 13 L12 19 L18 13"
          stroke="currentColor"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="showcase-container">
      <div class="showcase-viewport" data-scroll-progress="0">
        <div class="showcase-item">
          <div class="showcase-image-wrapper">
            <!-- Both images absolutely positioned -->
            <img
              src="/GenUIDark.png"
              alt="Hatcher IDE Dark Mode"
              class="showcase-image showcase-dark"
              data-layer="dark"
            >
            <img
              src="/GenUILight.png"
              alt="Hatcher IDE Light Mode"
              class="showcase-image showcase-light"
              data-layer="light"
            >
            <!-- Luxury gradient overlay for transitions -->
            <div class="showcase-gradient-overlay" data-layer="gradient"></div>
            <!-- Glow effects layer -->
            <div class="showcase-glow" data-layer="glow"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useLocale } from '../../composables/useLocale'

const { locale } = useLocale()

/**
 * Advanced scroll-controlled animation system with luxury transitions.
 * Features:
 * - Inverted initial display (light shows dark, dark shows light)
 * - Smooth crossfade transition between themes
 * - Zoom effect at climax point
 * - Theme matching at peak scroll position
 */
function initScrollAnimation(): void {
  const showcaseSection = document.querySelector(
    '[data-scroll-animation="true"]'
  ) as HTMLElement
  if (!showcaseSection) {
    console.log('ShowcaseSection: No showcase section found')
    return
  }

  const viewport = showcaseSection.querySelector(
    '.showcase-viewport'
  ) as HTMLElement
  if (!viewport) {
    console.log('ShowcaseSection: No viewport found')
    return
  }

  console.log('ShowcaseSection: Luxury animation initialized')

  // Get both images
  const darkImage = viewport.querySelector('[data-layer="dark"]') as HTMLImageElement
  const lightImage = viewport.querySelector('[data-layer="light"]') as HTMLImageElement
  const gradientOverlay = viewport.querySelector('[data-layer="gradient"]') as HTMLElement
  const glowLayer = viewport.querySelector('[data-layer="glow"]') as HTMLElement
  const imageWrapper = viewport.querySelector('.showcase-image-wrapper') as HTMLElement

  if (!darkImage || !lightImage) {
    console.error('ShowcaseSection: Images not found')
    return
  }

  // Calculate and set aspect ratio once images load
  const setAspectRatio = () => {
    if (lightImage.complete && lightImage.naturalHeight > 0) {
      const aspectRatio = (lightImage.naturalHeight / lightImage.naturalWidth) * 100
      if (imageWrapper) {
        imageWrapper.style.setProperty('--image-aspect-ratio', `${aspectRatio}%`)
      }
    }
  }

  lightImage.addEventListener('load', setAspectRatio)
  setAspectRatio() // Try immediately if already loaded

  // Animation state
  let animationProgress = 0
  let targetProgress = 0
  let isAnimating = false
  let zoomLevel = 1

  // Scroll tracking
  let lastScrollY = window.scrollY
  let scrollDirection: 'up' | 'down' | 'idle' = 'idle'

  // Animation phases - Direct control feel
  const IDLE_END = 0            // Animation starts immediately
  const CROSSFADE_START = 0      // Start color transition immediately
  const CROSSFADE_END = 0.3     // End color transition at 30%
  const ZOOM_START = 0.1        // Start zoom after 10%
  const ZOOM_PEAK = 1.0         // Peak zoom at 100%

  // Detect orientation and adjust zoom accordingly
  const isPortrait = window.matchMedia('(orientation: portrait)').matches
  const MAX_ZOOM = isPortrait ? 2.0 : 1.5  // 100% increase in portrait, 50% in landscape

  // Listen for orientation changes
  const orientationMediaQuery = window.matchMedia('(orientation: portrait)')
  let currentMaxZoom = MAX_ZOOM

  orientationMediaQuery.addEventListener('change', (e) => {
    currentMaxZoom = e.matches ? 2.0 : 1.5
    // Trigger animation update with current scroll position
    handleScroll()
  })

  /**
   * Updates animation directly linked to scroll position
   * Instant 1:1 connection - user feels in complete control
   */
  const updateAnimation = (): void => {
    // Direct update - no smoothing, no delay
    animationProgress = targetProgress

    // Get current theme
    const isDarkMode = document.documentElement.classList.contains('dark')

    // PHASE 1: IDLE (0-5%) - No changes
    if (animationProgress < IDLE_END) {
        zoomLevel = 1
        // Keep inverted display
        const lightOpacity = isDarkMode ? 1 : 0
        const darkOpacity = isDarkMode ? 0 : 1

        lightImage.style.opacity = lightOpacity.toString()
        lightImage.style.transform = 'scale(1) translateZ(0)'
        darkImage.style.opacity = darkOpacity.toString()
        darkImage.style.transform = 'scale(1) translateZ(0)'

        if (gradientOverlay) gradientOverlay.style.opacity = '0'
        if (glowLayer) glowLayer.style.setProperty('--glow-intensity', '0')

        // Skip rest of animation
        viewport.style.setProperty('--scroll-progress', animationProgress.toString())
        viewport.setAttribute('data-scroll-progress', Math.round(animationProgress * 100).toString())
        return
      }

    // PHASE 2: COLOR TRANSITION (5-15%)
    let lightOpacity: number
    let darkOpacity: number

    if (animationProgress >= CROSSFADE_START && animationProgress <= CROSSFADE_END) {
        // Direct linear crossfade - no easing
        const crossfadeProgress = (animationProgress - CROSSFADE_START) / (CROSSFADE_END - CROSSFADE_START)

        // Transition TO matching theme
        if (isDarkMode) {
          lightOpacity = 1 - crossfadeProgress  // Fade out light
          darkOpacity = crossfadeProgress        // Fade in dark
        } else {
          lightOpacity = crossfadeProgress       // Fade in light
          darkOpacity = 1 - crossfadeProgress    // Fade out dark
        }
        zoomLevel = 1  // No zoom during color transition
      } else if (animationProgress > CROSSFADE_END) {
        // After transition: matching display
        lightOpacity = isDarkMode ? 0 : 1
        darkOpacity = isDarkMode ? 1 : 0
      } else {
        // Before transition: inverted display
        lightOpacity = isDarkMode ? 1 : 0
        darkOpacity = isDarkMode ? 0 : 1
        zoomLevel = 1
      }

    // PHASE 3: IMMERSIVE ZOOM (15-100%)
    if (animationProgress >= ZOOM_START) {
        const zoomProgress = (animationProgress - ZOOM_START) / (1 - ZOOM_START)

        // Direct linear zoom - no easing, no curves
        // Use dynamic max zoom based on orientation
        zoomLevel = 1 + (currentMaxZoom - 1) * zoomProgress
      } else {
        zoomLevel = 1
      }

    // Ensure at least one image is always visible during transitions
    const totalOpacity = lightOpacity + darkOpacity
      if (totalOpacity < 0.95) {
        // Boost opacity to avoid blank states
        const boostFactor = 0.95 / totalOpacity
        lightOpacity *= boostFactor
        darkOpacity *= boostFactor
      }

    // Apply transformations with immersive parallax effect
    // Add slight perspective and 3D transform for depth
    const transformString = `perspective(1000px) scale(${zoomLevel}) translateZ(${(zoomLevel - 1) * 50}px)`

    // Apply opacity and transforms to images
    lightImage.style.opacity = lightOpacity.toString()
      lightImage.style.transform = transformString
      darkImage.style.opacity = darkOpacity.toString()
      darkImage.style.transform = transformString

    // Add gradient overlay for luxury effect during transition
    if (gradientOverlay) {
        let gradientOpacity = 0

        if (animationProgress >= CROSSFADE_START && animationProgress <= CROSSFADE_END) {
          // Strong gradient during color transition
          const crossfadeProgress = (animationProgress - CROSSFADE_START) / (CROSSFADE_END - CROSSFADE_START)
          gradientOpacity = 0.15 * Math.sin(crossfadeProgress * Math.PI)
        } else if (animationProgress >= ZOOM_START) {
          // Subtle gradient during zoom for depth
          const zoomProgress = (animationProgress - ZOOM_START) / (1 - ZOOM_START)
          gradientOpacity = 0.05 * zoomProgress
        }

        gradientOverlay.style.opacity = gradientOpacity.toString()
      }

    // Update glow effect - stronger during zoom phase
    if (glowLayer) {
        let glowIntensity = 0

        if (animationProgress >= ZOOM_START) {
          const zoomProgress = (animationProgress - ZOOM_START) / (1 - ZOOM_START)
          // Much subtler glow - max 0.15 opacity
          glowIntensity = Math.min(0.15, zoomProgress * 0.15)
        } else if (animationProgress >= CROSSFADE_START) {
          // Very subtle glow during transition
          glowIntensity = 0.05 * ((animationProgress - CROSSFADE_START) / (CROSSFADE_END - CROSSFADE_START))
        }

        glowLayer.style.setProperty('--glow-intensity', glowIntensity.toString())
        glowLayer.style.setProperty('--glow-scale', zoomLevel.toString())
      }

    // Update viewport data attributes
    viewport.style.setProperty('--scroll-progress', animationProgress.toString())
    viewport.style.setProperty('--zoom-level', zoomLevel.toString())
    viewport.setAttribute('data-scroll-progress', Math.round(animationProgress * 100).toString())

    // Update wrapper zoom level for dynamic padding
    if (imageWrapper) {
      imageWrapper.style.setProperty('--zoom-level', zoomLevel.toString())
    }
  }


  /**
   * Main scroll handler - directly maps scroll to animation
   */
  const handleScroll = (): void => {
    const currentScrollY = window.scrollY
    const viewportHeight = window.innerHeight

    // Get the image height for calculation (use either image, they're the same size)
    const imageHeight = lightImage.offsetHeight || viewportHeight * 0.5

    // Animation starts after scrolling 25% of image height
    // User sees less of the image before animation begins - starts a bit earlier
    const scrollTriggerPoint = imageHeight * 0.25
    const scrollAfterBuffer = Math.max(0, currentScrollY - scrollTriggerPoint)

    // Define the scroll range over which the animation happens
    // Check orientation: portrait = fast, landscape/tablet = slower (double the scroll distance)
    const isCurrentlyPortrait = window.matchMedia('(orientation: portrait)').matches
    const baseScrollRange = viewportHeight * 0.5
    // Double the scroll range for landscape/tablet to slow down the animation
    const animationScrollRange = isCurrentlyPortrait ? baseScrollRange : baseScrollRange * 2

    // Calculate progress (0 to 1) based on scroll position
    // Direct mapping after small buffer
    targetProgress = Math.min(1, scrollAfterBuffer / animationScrollRange)

    // Update scroll direction for effects
    const deltaY = currentScrollY - lastScrollY
    if (Math.abs(deltaY) > 0.5) {
      scrollDirection = deltaY > 0 ? 'down' : 'up'
    }

    lastScrollY = currentScrollY

    // Trigger animation update
    updateAnimation()
  }

  // No throttling at all - completely direct response
  // Every single scroll pixel triggers an update
  window.addEventListener('scroll', handleScroll, { passive: true })

  // Initial call to set initial state if page is already scrolled
  handleScroll()

  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll)
    orientationMediaQuery.removeEventListener('change', (e) => {
      currentMaxZoom = e.matches ? 2.0 : 1.5
      handleScroll()
    })
  }
}

// Handle scroll indicator visibility
const initShowcaseScrollIndicator = () => {
  const showcaseIndicator = document.querySelector('.showcase-scroll-indicator') as HTMLElement
  if (showcaseIndicator) {
    const handleShowcaseScroll = () => {
      const scrollProgress = window.scrollY

      // Hide indicator once user starts scrolling
      if (scrollProgress > 50) {
        showcaseIndicator.classList.add('hide')
      } else {
        showcaseIndicator.classList.remove('hide')
      }
    }

    window.addEventListener('scroll', handleShowcaseScroll, { passive: true })

    // Initial check
    handleShowcaseScroll()

    return () => {
      window.removeEventListener('scroll', handleShowcaseScroll)
    }
  }
}

let cleanupScrollAnimation: (() => void) | undefined
let cleanupScrollIndicator: (() => void) | undefined
let themeObserver: MutationObserver | undefined

/**
 * Sets the initial inverted display based on current theme
 */
function setInitialDisplay() {
  const darkImage = document.querySelector('.showcase-image.showcase-dark') as HTMLElement
  const lightImage = document.querySelector('.showcase-image.showcase-light') as HTMLElement

  if (darkImage && lightImage) {
    const isDarkMode = document.documentElement.classList.contains('dark')

    // INVERTED INITIAL DISPLAY:
    // Light mode -> show dark image initially
    // Dark mode -> show light image initially
    if (isDarkMode) {
      // Dark mode: show light image
      lightImage.style.opacity = '1'
      lightImage.style.display = 'block'
      lightImage.style.transform = 'scale(1) translateZ(0)'
      darkImage.style.opacity = '0'
      darkImage.style.display = 'block'
      darkImage.style.transform = 'scale(1) translateZ(0)'
    } else {
      // Light mode: show dark image
      darkImage.style.opacity = '1'
      darkImage.style.display = 'block'
      darkImage.style.transform = 'scale(1) translateZ(0)'
      lightImage.style.opacity = '0'
      lightImage.style.display = 'block'
      lightImage.style.transform = 'scale(1) translateZ(0)'
    }

    console.log('Initial display set - isDarkMode:', isDarkMode)
  }
}

onMounted(() => {
  // Set initial display immediately (always show image without animation)
  setInitialDisplay()

  // Watch for theme changes
  themeObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        // Theme has changed
        const currentScroll = window.scrollY

        // Only update display if we're at the beginning (no significant scroll)
        if (currentScroll < 50) {
          // Reset to initial inverted display
          setInitialDisplay()
        } else {
          // We're mid-animation, just trigger update to recalculate with new theme
          window.dispatchEvent(new Event('scroll'))
        }
      }
    })
  })

  // Start observing theme changes on html element
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })

  // Initialize scroll animation
  cleanupScrollAnimation = initScrollAnimation()

  // Initialize scroll indicator
  cleanupScrollIndicator = initShowcaseScrollIndicator()
})

onUnmounted(() => {
  if (cleanupScrollAnimation) cleanupScrollAnimation()
  if (cleanupScrollIndicator) cleanupScrollIndicator()
  if (themeObserver) themeObserver.disconnect()
})
</script>

<style scoped>
/* Main showcase section - Mobile first approach */
.product-showcase-section {
  position: relative;
  padding: 0rem; /* No padding at all */
  min-height: calc(100vh - 450px); /* Default mobile height */
  padding-bottom: 19rem; /* Default mobile padding */
  margin-bottom: 2rem; /* Simple margin instead of huge padding */
}

/* Landscape mobile and small tablets */
@media (min-width: 641px) {
  .product-showcase-section {
    min-height: calc(100vh - 340px);
    padding-bottom: 3rem;
  }
}

/* Tablets and larger */
@media (min-width: 768px) {
  .product-showcase-section {
    padding-bottom: 16rem; /* More space at the bottom for larger screens */
  }
}

/* Portrait orientation adjustments - override for portrait mode */
@media (orientation: portrait) {
  .product-showcase-section {
    min-height: calc(100vh - 450px);
    padding-bottom: 19rem !important; /* Original mobile portrait values */
  }

  /* Tablets in portrait */
  @media (min-width: 641px) {
    .product-showcase-section {
      min-height: calc(100vh - 340px);
      padding-bottom: 12rem !important;
    }
  }

  /* Larger tablets in portrait */
  @media (min-width: 768px) {
    .product-showcase-section {
      padding-bottom: 28rem !important; /* Much more space for tablets in portrait */
    }
  }
}

/* Container for the images */
.showcase-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  flex-shrink: 0; /* Prevent shrinking in flex container */
  margin-top: 3rem; /* Space from top using margin instead */
}

.showcase-viewport {
  position: relative;
  width: 100%;
}

.showcase-item {
  position: relative;
  width: 100%;
}

/* Image wrapper needs to be relative for absolute children */
.showcase-image-wrapper {
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden; /* Clip the scaled content */
  /* Fixed aspect ratio - no dynamic padding needed */
  aspect-ratio: 16 / 9;
}

/* Base styles for both images */
.showcase-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform, opacity;
  transform-origin: center center;
  /* No transitions - direct control */
  transition: none;
}


/* Dark image layer */
.showcase-image.showcase-dark {
  z-index: 1;
}

/* Light image layer */
.showcase-image.showcase-light {
  z-index: 2;
}

/* Gradient overlay for luxury transitions */
.showcase-gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: radial-gradient(ellipse at center,
    rgba(147, 51, 234, 0.1) 0%,
    rgba(79, 70, 229, 0.05) 50%,
    transparent 100%);
  opacity: 0;
  z-index: 3;
  pointer-events: none;
  /* No transitions - direct control */
  transition: none;
}

/* Glow effect layer */
.showcase-glow {
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  border-radius: 16px;
  /* Very subtle white glow instead of purple */
  background: radial-gradient(circle at var(--glow-x, 50%) 50%,
    rgba(255, 255, 255, calc(var(--glow-intensity, 0) * 0.2)),
    transparent 50%);
  opacity: var(--glow-intensity, 0);
  z-index: 4;
  pointer-events: none;
  mix-blend-mode: soft-light;
  transform: scale(var(--glow-scale, 1));
  /* No transitions - direct control */
  transition: none;
}

/* Initial state handled by JavaScript for inverted display */

/* Scroll Indicator - Mobile first */
.showcase-scroll-indicator {
  position: absolute;
  top: 10%; /* Position from top instead of bottom */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem; /* Smaller gap on mobile */
  opacity: 1;
  /* No transitions - direct control */
  transition: none;
  animation: bounce 2s infinite;
  width: auto;
  text-align: center;
  z-index: 10; /* Ensure it's above other content */
}

/* Small screens around 500px */
@media (min-width: 480px) and (max-width: 639px) {
  .showcase-scroll-indicator {
    top: 40px;
  }
}

@media (min-width: 640px) {
  .showcase-scroll-indicator {
    gap: 0.5rem; /* Normal gap for tablets and up */
  }
}

/* Larger screens */
@media (min-width: 768px) {
  .showcase-scroll-indicator {
    top: -2%;
  }
}

/* iPad Pro portrait */
@media (min-width: 1024px) and (orientation: portrait) {
  .showcase-scroll-indicator {
    top: -4%;
  }
}

.showcase-scroll-indicator.hide {
  opacity: 0;
  pointer-events: none;
}

.scroll-text {
  font-family: 'Cinzel', 'Georgia', serif;
  font-size: 0.8rem; /* Mobile size */
  color: #dfa927;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 400;
  opacity: 0.9;
  display: block;
  white-space: nowrap;
  text-shadow: 0 2px 8px rgba(223, 169, 39, 0.25);
}

@media (min-width: 640px) {
  .scroll-text {
    font-size: 0.9rem; /* Slightly larger for tablets */
    font-weight: 450;
    letter-spacing: 0.06em;
  }
}

@media (min-width: 960px) {
  .scroll-text {
    font-size: 1rem; /* Full size for desktop */
    font-weight: 500;
    letter-spacing: 0.08em;
  }
}

.scroll-arrow {
  color: #dfa927;
  width: 10px; /* Smaller for mobile */
  height: 10px;
  opacity: 0.9;
  filter: drop-shadow(0 2px 8px rgba(223, 169, 39, 0.5));
}

@media (min-width: 640px) {
  .scroll-arrow {
    width: 14px; /* Medium for tablets */
    height: 14px;
    opacity: 0.85;
  }
}

@media (min-width: 960px) {
  .scroll-arrow {
    width: 22px; /* Normal for desktop */
    height: 22px;
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}
</style>