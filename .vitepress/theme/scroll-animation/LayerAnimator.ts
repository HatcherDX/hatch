/**
 * LayerAnimator Module - Handles individual layer animations
 *
 * @module LayerAnimator
 * @since 1.0.0
 */

import { AnimationPhysics } from './AnimationPhysics'

export interface LayerElements {
  viewport: HTMLElement
  overlay?: HTMLElement | null
  mask?: HTMLElement | null
  glow?: HTMLElement | null
  base?: HTMLElement | null
}

export class LayerAnimator {
  private elements: LayerElements
  private debug: boolean

  constructor(viewport: HTMLElement, debug: boolean = true) {
    this.debug = debug
    this.elements = {
      viewport,
      overlay: viewport.querySelector('[data-layer="overlay"]'),
      mask: viewport.querySelector('[data-layer="mask"]'),
      glow: viewport.querySelector('[data-layer="glow"]'),
      base: viewport.querySelector('.showcase-base'),
    }

    if (this.debug) {
      console.log('🎭 LayerAnimator initialized', {
        hasOverlay: !!this.elements.overlay,
        hasMask: !!this.elements.mask,
        hasGlow: !!this.elements.glow,
        hasBase: !!this.elements.base,
      })
    }
  }

  /**
   * Updates all layers with animation values
   */
  public updateLayers(
    progress: number,
    velocity: number,
    direction: 'up' | 'down' | 'idle'
  ): void {
    if (this.debug) {
      console.log('🖼️ Updating Layers', {
        progress: progress.toFixed(4),
        velocity: velocity.toFixed(3),
        direction,
      })
    }

    // Update viewport CSS variables
    this.elements.viewport.style.setProperty(
      '--scroll-progress',
      progress.toString()
    )
    this.elements.viewport.style.setProperty(
      '--scroll-velocity',
      Math.abs(velocity).toString()
    )
    this.elements.viewport.style.setProperty('--scroll-direction', direction)
    this.elements.viewport.setAttribute(
      'data-scroll-progress',
      Math.round(progress * 100).toString()
    )
    this.elements.viewport.setAttribute('data-scroll-direction', direction)

    // Update individual layers
    this.updateOverlayLayer(progress, velocity, direction)
    this.updateMaskLayer(progress, velocity, direction)
    this.updateGlowLayer(progress, velocity)
    this.updateBaseLayer(progress)
  }

  /**
   * Updates overlay layer with directional opacity
   */
  private updateOverlayLayer(
    progress: number,
    velocity: number,
    direction: 'up' | 'down' | 'idle'
  ): void {
    if (!this.elements.overlay) return

    const easedOpacity =
      direction === 'down'
        ? AnimationPhysics.easeInOutCubic(progress)
        : AnimationPhysics.easeInOutQuad(progress)

    this.elements.overlay.style.setProperty(
      '--overlay-opacity',
      easedOpacity.toString()
    )
    this.elements.overlay.style.opacity = easedOpacity.toString()
    this.elements.overlay.style.transform = `translateY(${velocity * 0.1}px)`

    if (this.debug) {
      console.log('🎨 Overlay Updated', {
        opacity: easedOpacity.toFixed(3),
        transform: `translateY(${(velocity * 0.1).toFixed(2)}px)`,
      })
    }
  }

  /**
   * Updates mask layer with directional reveal
   */
  private updateMaskLayer(
    progress: number,
    velocity: number,
    direction: 'up' | 'down' | 'idle'
  ): void {
    if (!this.elements.mask) return

    const velocityOffset = velocity * 0.001
    const clipPath =
      direction === 'down'
        ? `polygon(0 0, ${(progress + velocityOffset) * 150}% 0, ${(progress + velocityOffset) * 100}% 100%, 0 100%)`
        : `polygon(0 0, ${(progress - velocityOffset) * 150}% 0, ${(progress - velocityOffset) * 100}% 100%, 0 100%)`

    this.elements.mask.style.clipPath = clipPath

    if (this.debug) {
      console.log('🎭 Mask Updated', {
        clipPath,
        direction,
      })
    }
  }

  /**
   * Updates glow layer with velocity response
   */
  private updateGlowLayer(progress: number, velocity: number): void {
    if (!this.elements.glow) return

    const glowIntensity = Math.min(
      0.8,
      progress * 0.5 + Math.abs(velocity) * 0.0002
    )

    this.elements.glow.style.setProperty(
      '--glow-intensity',
      glowIntensity.toString()
    )
    this.elements.glow.style.opacity = glowIntensity.toString()
    this.elements.glow.style.setProperty('--glow-x', `${progress * 100}%`)
    this.elements.glow.style.setProperty(
      '--glow-velocity',
      `${Math.abs(velocity) * 0.5}px`
    )

    if (this.debug) {
      console.log('✨ Glow Updated', {
        intensity: glowIntensity.toFixed(3),
        position: `${(progress * 100).toFixed(1)}%`,
      })
    }
  }

  /**
   * Updates base layer with parallax effect
   */
  private updateBaseLayer(progress: number): void {
    if (!this.elements.base) return

    const scale = 1 + progress * -0.02
    const translateY = progress * -10

    this.elements.base.style.transform = `scale(${scale}) translateY(${translateY}px)`

    if (this.debug && Math.abs(progress) > 0.01) {
      console.log('🏔️ Base Layer Updated', {
        scale: scale.toFixed(3),
        translateY: translateY.toFixed(1),
      })
    }
  }

  /**
   * Checks if all required elements exist
   */
  public hasRequiredElements(): boolean {
    const hasElements = !!this.elements.viewport

    if (!hasElements && this.debug) {
      console.warn('⚠️ Missing required elements', this.elements)
    }

    return hasElements
  }
}
