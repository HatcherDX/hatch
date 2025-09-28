/**
 * AnimationPhysics Module - Handles spring physics and easing
 *
 * @module AnimationPhysics
 * @since 1.0.0
 */

export interface PhysicsConfig {
  springStiffness: number
  springDamping: number
  velocityMultiplier: number
  minVelocity: number
  maxProgressSpeed: number
}

export class AnimationPhysics {
  private animationProgress: number = 0
  private targetProgress: number = 0
  private config: PhysicsConfig
  private debug: boolean

  constructor(config?: Partial<PhysicsConfig>, debug: boolean = true) {
    this.config = {
      springStiffness: config?.springStiffness ?? 0.08,
      springDamping: config?.springDamping ?? 0.92,
      velocityMultiplier: config?.velocityMultiplier ?? 0.0005,
      minVelocity: config?.minVelocity ?? 0.001,
      maxProgressSpeed: config?.maxProgressSpeed ?? 0.02,
    }
    this.debug = debug

    if (this.debug) {
      console.log('⚙️ AnimationPhysics initialized', this.config)
    }
  }

  /**
   * Updates animation progress with spring physics
   */
  public updateProgress(velocity: number): number {
    // Apply spring physics for smooth transitions
    const springForce =
      (this.targetProgress - this.animationProgress) *
      this.config.springStiffness
    const dampedVelocity = velocity * this.config.springDamping

    // Update progress with momentum
    const progressDelta =
      springForce + dampedVelocity * this.config.velocityMultiplier
    const clampedDelta = Math.max(
      -this.config.maxProgressSpeed,
      Math.min(this.config.maxProgressSpeed, progressDelta)
    )

    this.animationProgress += clampedDelta
    this.animationProgress = Math.max(0, Math.min(1, this.animationProgress))

    if (this.debug && Math.abs(clampedDelta) > 0.0001) {
      console.log('🎨 Physics Update', {
        progress: this.animationProgress.toFixed(4),
        target: this.targetProgress.toFixed(4),
        delta: clampedDelta.toFixed(5),
        velocity: velocity.toFixed(3),
      })
    }

    return this.animationProgress
  }

  /**
   * Sets target progress based on element position
   * Progress should be directly tied to scroll position, not direction
   */
  public setTargetFromViewport(
    elementRect: DOMRect,
    viewportHeight: number,
    scrollDirection: 'up' | 'down' | 'idle'
  ): number {
    const elementTop = elementRect.top
    const elementHeight = elementRect.height
    const elementBottom = elementTop + elementHeight

    // Calculate progress based on how much the element has scrolled through the viewport
    // Progress = 0 when element enters bottom of viewport
    // Progress = 1 when element exits top of viewport

    const scrollRange = viewportHeight + elementHeight
    const scrolled = viewportHeight - elementTop

    // Direct scroll-linked progress (like Motion.dev scroll function)
    this.targetProgress = Math.max(0, Math.min(1, scrolled / scrollRange))

    if (this.debug) {
      console.log('🎯 Scroll-Linked Progress', {
        progress: this.targetProgress.toFixed(4),
        elementTop: elementTop.toFixed(0),
        elementBottom: elementBottom.toFixed(0),
        viewportHeight,
        scrolled: scrolled.toFixed(0),
        scrollRange: scrollRange.toFixed(0),
        direction: scrollDirection,
      })
    }

    return this.targetProgress
  }

  /**
   * Easing functions for smooth transitions
   */
  public static easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  public static easeInOutQuad(t: number): number {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
  }

  /**
   * Checks if animation should continue
   */
  public shouldContinue(velocity: number): boolean {
    return (
      Math.abs(velocity) > this.config.minVelocity ||
      Math.abs(this.targetProgress - this.animationProgress) > 0.001
    )
  }

  public getProgress(): number {
    return this.animationProgress
  }

  public getTarget(): number {
    return this.targetProgress
  }
}
