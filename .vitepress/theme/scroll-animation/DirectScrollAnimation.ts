/**
 * DirectScrollAnimation - Simple scroll-linked animation
 * Directly ties animation to scroll position without physics
 *
 * @module DirectScrollAnimation
 * @since 1.0.0
 */

export class DirectScrollAnimation {
  private showcaseSection: HTMLElement | null = null
  private viewport: HTMLElement | null = null
  private overlayLayer: HTMLElement | null = null
  private currentProgress: number = 0
  private isInitialized: boolean = false
  private debug: boolean = true
  private lastLoggedProgress: number = -1

  constructor(debug: boolean = true) {
    this.debug = debug
    if (this.debug) {
      console.log('🎯 DirectScrollAnimation constructor called')
    }
  }

  /**
   * Initialize DOM elements
   */
  public init(): boolean {
    console.log('🚀 DirectScrollAnimation.init() started')
    console.log('📍 Document ready state:', document.readyState)
    console.log('📍 Current URL:', window.location.href)

    // Find showcase section
    this.showcaseSection = document.querySelector(
      '[data-scroll-animation="true"]'
    )
    if (!this.showcaseSection) {
      console.error('❌ No element with [data-scroll-animation="true"] found')
      console.log('📋 Available elements:', {
        allDivs: document.querySelectorAll('div').length,
        showcase: document.querySelector('.product-showcase-section'),
        viewport: document.querySelector('.showcase-viewport'),
      })
      return false
    }

    console.log('✅ Found showcase section:', this.showcaseSection)

    // Find viewport
    this.viewport = this.showcaseSection.querySelector('.showcase-viewport')
    if (!this.viewport) {
      console.error('❌ No .showcase-viewport found inside showcase section')
      return false
    }

    console.log('✅ Found viewport:', this.viewport)

    // Find overlay layer - look inside .showcase-image-wrapper
    const imageWrapper = this.viewport.querySelector('.showcase-image-wrapper')
    if (imageWrapper) {
      console.log('✅ Found image wrapper:', imageWrapper)
      this.overlayLayer = imageWrapper.querySelector('[data-layer="overlay"]')

      if (!this.overlayLayer) {
        // Try to find by class name
        this.overlayLayer = imageWrapper.querySelector('.showcase-overlay')
        console.log(
          '🔍 Trying .showcase-overlay selector:',
          !!this.overlayLayer
        )
      }
    }

    if (!this.overlayLayer) {
      console.error('❌ No overlay layer found')
      console.log('📋 Available in viewport:', {
        children: this.viewport.children.length,
        imageWrapper: !!imageWrapper,
        overlayByDataAttr:
          this.viewport.querySelectorAll('[data-layer]').length,
        overlayByClass:
          this.viewport.querySelectorAll('.showcase-overlay').length,
      })
    }

    console.log('✅ DirectScrollAnimation initialized', {
      showcaseSection: !!this.showcaseSection,
      viewport: !!this.viewport,
      overlayLayer: !!this.overlayLayer,
      overlayElement: this.overlayLayer,
    })

    // Attach scroll listener
    this.attachScrollListener()
    this.isInitialized = true

    // Initial update
    this.handleScroll()

    return true
  }

  /**
   * Calculate scroll progress (0-1) based on element position
   */
  private calculateProgress(): number {
    if (!this.showcaseSection) return 0

    const rect = this.showcaseSection.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const elementHeight = rect.height
    const elementTop = rect.top
    const elementBottom = elementTop + elementHeight

    // Progress calculation that starts after first screen
    // 0 = element is one screen below viewport
    // 1 = element completes animation

    // Start animation when element enters from below (after hero section)
    const startThreshold = windowHeight * 1.0
    // Complete when element has scrolled to upper portion
    const endThreshold = -elementHeight * 0.2

    let progress = 0

    if (elementTop < startThreshold) {
      // Element has started entering the trigger zone
      const distanceInZone = startThreshold - elementTop
      // Much larger zone for extended animation
      const totalZoneHeight = startThreshold - endThreshold
      progress = Math.max(0, Math.min(1, distanceInZone / totalZoneHeight))
    }

    // Apply easing curve for smoother transition
    progress = this.easeInOutCubic(progress)

    // Only log when progress changes significantly
    if (this.debug && Math.abs(progress - this.lastLoggedProgress) > 0.05) {
      console.log('📊 Progress Calculation', {
        progress: progress.toFixed(3),
        elementTop: elementTop.toFixed(0),
        elementBottom: elementBottom.toFixed(0),
        windowHeight,
        elementHeight: elementHeight.toFixed(0),
        startThreshold: startThreshold.toFixed(0),
        endThreshold: endThreshold.toFixed(0),
      })
      this.lastLoggedProgress = progress
    }

    return progress
  }

  /**
   * Easing function for smoother animation
   */
  private easeInOutCubic(t: number): number {
    // Smooth easing curve
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  /**
   * Update animation based on scroll
   */
  private handleScroll = (): void => {
    if (!this.isInitialized) return

    const progress = this.calculateProgress()
    this.currentProgress = progress

    // Check if we're in light mode
    const isLightMode = !document.documentElement.classList.contains('dark')

    // Calculate animation phase - extend expansion phase
    const phase =
      progress < 0.2
        ? 'color'
        : progress < 0.8
          ? 'expand'
          : progress < 0.95
            ? 'immerse'
            : 'complete'

    // Calculate phase-specific progress
    let colorProgress = 0
    let expansionProgress = 0
    let immersionProgress = 0

    if (phase === 'color') {
      colorProgress = progress / 0.2 // 0 to 1 for first 20%
    } else {
      colorProgress = 1 // Color transition complete

      if (phase === 'expand') {
        expansionProgress = (progress - 0.2) / 0.6 // 0 to 1 for 20-80% (60% of scroll)
      } else {
        expansionProgress = 1 // Expansion complete

        if (phase === 'immerse' || phase === 'complete') {
          immersionProgress = (progress - 0.8) / 0.15 // 0 to 1 for 80-95%
        }
      }
    }

    // Invert color progress for light mode (start with dark, scroll to light)
    const effectiveColorProgress = isLightMode
      ? 1 - colorProgress
      : colorProgress

    // Update CSS variables
    if (this.viewport) {
      this.viewport.style.setProperty('--scroll-progress', progress.toString())
      this.viewport.style.setProperty(
        '--color-progress',
        effectiveColorProgress.toString()
      )
      this.viewport.style.setProperty(
        '--expansion-progress',
        expansionProgress.toString()
      )
      this.viewport.style.setProperty(
        '--immersion-progress',
        immersionProgress.toString()
      )

      this.viewport.setAttribute('data-scroll-phase', phase)
      this.viewport.setAttribute(
        'data-scroll-progress',
        Math.round(progress * 100).toString()
      )

      // Apply expansion and immersion transforms
      if (expansionProgress > 0 || immersionProgress > 0) {
        // Scaling animation restored
        const baseScale = 1 + expansionProgress * 0.15 // Scale up to 1.15x
        const translateY = expansionProgress * -15 // Upward movement

        // For immersion phase, add additional scaling
        const immersionScale =
          immersionProgress > 0 ? 1 + immersionProgress * 0.1 : 1
        const finalScale = baseScale * immersionScale

        this.viewport.style.transform = `
          translateY(${translateY}px)
          scale(${finalScale})
        `

        // No shadow - removed to prevent visual artifacts
      } else {
        this.viewport.style.transform = ''
      }
    }

    // Update overlay opacity with color progress
    if (this.overlayLayer) {
      this.overlayLayer.style.opacity = effectiveColorProgress.toString()
      this.overlayLayer.style.setProperty(
        '--overlay-opacity',
        effectiveColorProgress.toString()
      )
      this.overlayLayer.style.display = 'block'

      // Log phase changes
      if (this.debug) {
        const lastPhase = this.viewport?.getAttribute('data-last-phase')
        if (phase !== lastPhase) {
          console.log('🎬 Animation Phase Change', {
            phase,
            progress: progress.toFixed(3),
            colorProgress: colorProgress.toFixed(3),
            expansionProgress: expansionProgress.toFixed(3),
            immersionProgress: immersionProgress.toFixed(3),
            isLightMode,
          })
          this.viewport?.setAttribute('data-last-phase', phase)
        }
      }
    }

    // Update all layers with color progress
    this.updateAllLayers(effectiveColorProgress)
  }

  /**
   * Update all animation layers
   */
  private updateAllLayers(progress: number): void {
    // Layer animations removed for cleaner effect
    // Only overlay opacity animation is used now
  }

  /**
   * Attach scroll event listener
   */
  private attachScrollListener(): void {
    // Store the scroll handler for proper cleanup
    this.boundScrollHandler = this.createScrollHandler()
    window.addEventListener('scroll', this.boundScrollHandler, {
      passive: true,
    })
    console.log('👂 Scroll listener attached')
  }

  private boundScrollHandler?: () => void

  private createScrollHandler(): () => void {
    // Use requestAnimationFrame for smooth updates
    let ticking = false
    return () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
  }

  /**
   * Destroy and cleanup
   */
  public destroy(): void {
    if (this.boundScrollHandler) {
      window.removeEventListener('scroll', this.boundScrollHandler)
    }
    this.isInitialized = false
    console.log('💀 DirectScrollAnimation destroyed')
  }
}

/**
 * Factory function for easy initialization
 */
export function initDirectScrollAnimation(): DirectScrollAnimation | null {
  console.log('🏭 initDirectScrollAnimation factory called')
  const animation = new DirectScrollAnimation(true)
  const success = animation.init()

  if (!success) {
    console.error('❌ Failed to initialize DirectScrollAnimation')
    return null
  }

  return animation
}
