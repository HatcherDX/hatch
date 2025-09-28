/**
 * ScrollTracker Module - Tracks scroll position, direction and velocity
 *
 * @module ScrollTracker
 * @since 1.0.0
 */

export interface ScrollState {
  position: number
  direction: 'up' | 'down' | 'idle'
  velocity: number
  deltaY: number
  timestamp: number
}

export class ScrollTracker {
  private lastScrollY: number = 0
  private velocityHistory: number[] = []
  private readonly VELOCITY_SAMPLES = 5
  private readonly MIN_VELOCITY = 0.001
  private scrollDirection: 'up' | 'down' | 'idle' = 'idle'
  private scrollVelocity: number = 0
  private debug: boolean

  constructor(debug: boolean = true) {
    this.debug = debug
    this.lastScrollY = window.scrollY

    if (this.debug) {
      console.log('🎯 ScrollTracker initialized', {
        initialScrollY: this.lastScrollY,
        velocitySamples: this.VELOCITY_SAMPLES,
      })
    }
  }

  /**
   * Updates scroll tracking with current position
   */
  public update(): ScrollState {
    const currentScrollY = window.scrollY
    const deltaY = currentScrollY - this.lastScrollY
    const timestamp = performance.now()

    // Update scroll direction
    if (Math.abs(deltaY) > 0.5) {
      this.scrollDirection = deltaY > 0 ? 'down' : 'up'
    } else if (Math.abs(this.scrollVelocity) < this.MIN_VELOCITY) {
      this.scrollDirection = 'idle'
    }

    // Track velocity with smoothing
    this.velocityHistory.push(deltaY)
    if (this.velocityHistory.length > this.VELOCITY_SAMPLES) {
      this.velocityHistory.shift()
    }
    this.scrollVelocity = this.getAverageVelocity()

    if (this.debug && Math.abs(deltaY) > 0) {
      console.log('📊 Scroll Update', {
        position: currentScrollY,
        direction: this.scrollDirection,
        velocity: this.scrollVelocity.toFixed(3),
        deltaY: deltaY.toFixed(2),
      })
    }

    this.lastScrollY = currentScrollY

    return {
      position: currentScrollY,
      direction: this.scrollDirection,
      velocity: this.scrollVelocity,
      deltaY,
      timestamp,
    }
  }

  /**
   * Decays velocity over time
   */
  public decayVelocity(factor: number = 0.95): number {
    this.scrollVelocity *= factor
    if (Math.abs(this.scrollVelocity) < this.MIN_VELOCITY) {
      this.scrollVelocity = 0
    }
    return this.scrollVelocity
  }

  /**
   * Sets scroll state to idle
   */
  public setIdle(): void {
    this.scrollDirection = 'idle'
    this.scrollVelocity *= 0.5

    if (this.debug) {
      console.log('💤 Scroll set to idle', {
        velocity: this.scrollVelocity.toFixed(3),
      })
    }
  }

  /**
   * Calculates average velocity from recent samples
   */
  private getAverageVelocity(): number {
    if (this.velocityHistory.length === 0) return 0
    const sum = this.velocityHistory.reduce((a, b) => a + b, 0)
    return sum / this.velocityHistory.length
  }

  public getState(): ScrollState {
    return {
      position: this.lastScrollY,
      direction: this.scrollDirection,
      velocity: this.scrollVelocity,
      deltaY: 0,
      timestamp: performance.now(),
    }
  }
}
