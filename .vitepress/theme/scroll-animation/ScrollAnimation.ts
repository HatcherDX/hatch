/**
 * ScrollAnimation Module - Main orchestrator for scroll animations
 *
 * @module ScrollAnimation
 * @since 1.0.0
 */

import { ScrollTracker } from './ScrollTracker'
import { AnimationPhysics } from './AnimationPhysics'
import { LayerAnimator } from './LayerAnimator'

export interface ScrollAnimationOptions {
  debug?: boolean
  physics?: {
    springStiffness?: number
    springDamping?: number
    velocityMultiplier?: number
  }
}

export class ScrollAnimation {
  private scrollTracker: ScrollTracker
  private physics: AnimationPhysics
  private layerAnimator: LayerAnimator | null = null
  private showcaseSection: HTMLElement | null = null
  private viewport: HTMLElement | null = null
  private isAnimating: boolean = false
  private scrollTimer: ReturnType<typeof setTimeout> | null = null
  private debug: boolean
  private frameCount: number = 0
  private startTime: number = 0

  constructor(options: ScrollAnimationOptions = {}) {
    this.debug = options.debug ?? true
    this.scrollTracker = new ScrollTracker(this.debug)
    this.physics = new AnimationPhysics(options.physics, this.debug)

    if (this.debug) {
      console.log('🚀 ScrollAnimation initialized', {
        debug: this.debug,
        physics: options.physics,
      })
    }

    this.startTime = performance.now()
  }

  /**
   * Initializes the animation system with DOM elements
   */
  public init(): boolean {
    this.showcaseSection = document.querySelector(
      '[data-scroll-animation="true"]'
    )

    if (!this.showcaseSection) {
      if (this.debug) {
        console.error(
          '❌ Showcase section not found with [data-scroll-animation="true"]'
        )
      }
      return false
    }

    this.viewport = this.showcaseSection.querySelector('.showcase-viewport')

    if (!this.viewport) {
      if (this.debug) {
        console.error('❌ Viewport not found with .showcase-viewport')
      }
      return false
    }

    this.layerAnimator = new LayerAnimator(this.viewport, this.debug)

    if (!this.layerAnimator.hasRequiredElements()) {
      if (this.debug) {
        console.error('❌ Required layer elements missing')
      }
      return false
    }

    if (this.debug) {
      console.log('✅ ScrollAnimation DOM elements found', {
        showcaseSection: this.showcaseSection,
        viewport: this.viewport,
      })
    }

    this.attachEventListeners()
    this.handleScroll() // Initial update

    return true
  }

  /**
   * Main animation update loop
   */
  private updateAnimation(): void {
    if (this.isAnimating) return
    this.isAnimating = true
    this.frameCount++

    requestAnimationFrame(() => {
      const scrollState = this.scrollTracker.getState()

      // Update physics
      const progress = this.physics.updateProgress(scrollState.velocity)

      // Decay velocity
      const newVelocity = this.scrollTracker.decayVelocity()

      // Update layers
      if (this.layerAnimator) {
        this.layerAnimator.updateLayers(
          progress,
          newVelocity,
          scrollState.direction
        )
      }

      if (this.debug && this.frameCount % 30 === 0) {
        const elapsed = ((performance.now() - this.startTime) / 1000).toFixed(1)
        console.log('📈 Animation Stats', {
          frames: this.frameCount,
          elapsed: `${elapsed}s`,
          fps: (this.frameCount / parseFloat(elapsed)).toFixed(1),
          progress: progress.toFixed(4),
        })
      }

      this.isAnimating = false

      // Continue animation if needed
      if (this.physics.shouldContinue(newVelocity)) {
        this.updateAnimation()
      }
    })
  }

  /**
   * Handles scroll events
   */
  private handleScroll = (): void => {
    if (!this.showcaseSection || !this.viewport) return

    // Update scroll tracking
    const scrollState = this.scrollTracker.update()

    // Calculate target progress based on element position
    const rect = this.showcaseSection.getBoundingClientRect()
    const viewportHeight = window.innerHeight

    this.physics.setTargetFromViewport(
      rect,
      viewportHeight,
      scrollState.direction
    )

    // Trigger animation update
    this.updateAnimation()

    // Detect scroll end for idle state
    if (this.scrollTimer !== null) {
      clearTimeout(this.scrollTimer)
    }

    this.scrollTimer = setTimeout(() => {
      this.scrollTracker.setIdle()
      this.updateAnimation()
    }, 150)
  }

  /**
   * Attaches event listeners
   */
  private attachEventListeners(): void {
    window.addEventListener('scroll', this.handleScroll, { passive: true })

    if (this.debug) {
      console.log('👂 Event listeners attached')
    }
  }

  /**
   * Cleanup method
   */
  public destroy(): void {
    window.removeEventListener('scroll', this.handleScroll)

    if (this.scrollTimer) {
      clearTimeout(this.scrollTimer)
    }

    if (this.debug) {
      console.log('💀 ScrollAnimation destroyed')
    }
  }
}

/**
 * Factory function for easy initialization
 */
export function initScrollAnimation(
  options?: ScrollAnimationOptions
): ScrollAnimation | null {
  const animation = new ScrollAnimation(options)
  const success = animation.init()

  if (!success) {
    console.error('Failed to initialize scroll animation')
    return null
  }

  return animation
}
