<template>
  <footer class="landing-footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-column">
          <h4>Product</h4>
          <ul>
            <li><a href="/getting-started">Getting Started</a></li>
            <li><a href="/features-code-hat">Code HAT</a></li>
            <li><a href="/features-gen-hat">Gen HAT</a></li>
            <li><a href="/features-visual-hat">Visual HAT</a></li>
            <li><a href="/features-time-graph-hat">Time Graph HAT</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Concepts</h4>
          <ul>
            <li><a href="/philosophy">Philosophy</a></li>
            <li><a href="/playbooks-system">Playbooks</a></li>
            <li><a href="/autopilots-system">Autopilots</a></li>
            <li><a href="/pillars-time-graph">Time Graph</a></li>
            <li><a href="/pillars-universal-fabricator">Universal Fabricator</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Community</h4>
          <ul>
            <li><a href="https://github.com/HatcherDX/dx-engine">GitHub</a></li>
            <li><a href="https://discord.gg/cZ7PZvnMk4">Discord</a></li>
            <li><a href="https://twitter.com/HatcherDX">Twitter/X</a></li>
            <li><a href="/contributing">Contributing</a></li>
            <li><a href="/community">Community Guidelines</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="/architecture">Architecture</a></li>
            <li><a href="/roadmap">Roadmap</a></li>
            <li><a href="https://github.com/HatcherDX/dx-engine/releases">Releases</a></li>
            <li><a href="https://github.com/HatcherDX/dx-engine/issues">Report Issues</a></li>
            <li><a href="/pact-pricing">Open Core Pact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-brand">
          <img src="/logo-inline-dark.svg" alt="Hatcher" class="footer-logo dark-only" />
          <img src="/logo-inline-light.svg" alt="Hatcher" class="footer-logo light-only" />
          <p class="footer-tagline">The Constitutional IDE</p>
        </div>
        <div class="footer-legal">
          <p>Released under the <a href="https://github.com/HatcherDX/dx-engine/blob/main/LICENSE">MIT License</a>.</p>
          <p>Built with <svg class="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg> by <a href="https://github.com/chrissmejia">Chriss Mejía</a> and the <a href="/community">Hatcher community</a>.</p>
          <p>© {{ currentYear }} Hatcher DX. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
/* Premium Footer Section */
.landing-footer {
  margin-top: 120px !important;
  padding: 80px 2rem 40px !important;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(223, 169, 39, 0.02),
    rgba(0, 0, 0, 0.03)
  ) !important;
  border-top: 1px solid rgba(223, 169, 39, 0.08) !important;
  position: relative !important;
  overflow: hidden !important;
}

/* Dark mode footer background */
.dark .landing-footer {
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(223, 169, 39, 0.01),
    rgba(0, 0, 0, 0.2)
  ) !important;
  border-top-color: rgba(223, 169, 39, 0.06) !important;
}

/* Decorative gradient line at top */
.landing-footer::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  height: 1px !important;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(223, 169, 39, 0.3),
    transparent
  ) !important;
  pointer-events: none !important;
}

.footer-container {
  max-width: 1200px !important;
  margin: 0 auto !important;
  position: relative !important;
}

/* Grid Layout */
.footer-grid {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 3rem !important;
  margin-bottom: 60px !important;
}

/* Footer Columns */
.footer-column {
  display: flex !important;
  flex-direction: column !important;
  gap: 1rem !important;
}

.footer-column h4 {
  font-size: 0.875rem !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  color: var(--vp-c-text-1) !important;
  margin: 0 0 0.5rem 0 !important;
  opacity: 0.9 !important;
}

.footer-column ul {
  list-style: none !important;
  padding: 0 !important;
  margin: 0 !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 0.75rem !important;
}

.footer-column li {
  margin: 0 !important;
  padding: 0 !important;
}

.footer-column a {
  color: var(--vp-c-text-2) !important;
  text-decoration: none !important;
  font-size: 0.9rem !important;
  transition: all 0.3s ease !important;
  display: inline-block !important;
  position: relative !important;
  opacity: 0.8 !important;
}

.footer-column a:hover {
  color: #dfa927 !important;
  opacity: 1 !important;
  transform: translateX(2px) !important;
}

/* Add subtle underline on hover */
.footer-column a::after {
  content: '' !important;
  position: absolute !important;
  bottom: -2px !important;
  left: 0 !important;
  width: 0 !important;
  height: 1px !important;
  background: #dfa927 !important;
  transition: width 0.3s ease !important;
}

.footer-column a:hover::after {
  width: 100% !important;
}

/* Footer Bottom Section */
.footer-bottom {
  padding-top: 40px !important;
  border-top: 1px solid rgba(223, 169, 39, 0.06) !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  gap: 3rem !important;
}

/* Brand Section */
.footer-brand {
  display: flex !important;
  align-items: center !important;
  gap: 0.75rem !important;
}

.footer-logo {
  height: 40px !important;
  width: auto !important;
  opacity: 0.85 !important;
  transition: all 0.3s ease !important;
}

.footer-logo:hover {
  opacity: 1 !important;
  transform: translateY(-1px) !important;
}

/* Show/hide logos based on theme */
.dark-only {
  display: none !important;
}

.dark .dark-only {
  display: block !important;
}

.light-only {
  display: block !important;
}

.dark .light-only {
  display: none !important;
}

.footer-tagline {
  font-family: 'Cinzel', 'Georgia', serif !important;
  font-size: 0.9rem !important;
  color: var(--vp-c-text-3) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.12em !important;
  margin: 0 !important;
  font-weight: 400 !important;
  opacity: 0.7 !important;
  line-height: 1 !important;
}

/* Legal Section */
.footer-legal {
  text-align: right !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 0.4rem !important;
}

.footer-legal p {
  margin: 0 !important;
  font-size: 0.875rem !important;
  color: var(--vp-c-text-3) !important;
  opacity: 0.7 !important;
}

.footer-legal a {
  color: #dfa927 !important;
  text-decoration: none !important;
  transition: all 0.3s ease !important;
  opacity: 0.8 !important;
}

.footer-legal a:hover {
  opacity: 1 !important;
  text-decoration: underline !important;
}

/* Heart icon styling - elegant gold */
.heart-icon {
  display: inline-block !important;
  vertical-align: middle !important;
  color: #c9962f !important;  /* Refined gold color */
  opacity: 0.7 !important;
  transition: all 0.3s ease !important;
  margin: 0 2px !important;
}

/* Subtle hover effect on the entire line */
.footer-legal p:hover .heart-icon {
  opacity: 1 !important;
  transform: scale(1.1) !important;
}

/* Dark mode heart color */
.dark .heart-icon {
  color: #d4a847 !important;  /* Warm gold for dark mode */
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 2.5rem !important;
  }
}

@media (max-width: 768px) {
  .landing-footer {
    padding: 60px 1.5rem 30px !important;
  }

  .footer-grid {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
    margin-bottom: 40px !important;
  }

  .footer-bottom {
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    gap: 2rem !important;
  }

  .footer-brand {
    flex-direction: row !important;
    align-items: center !important;
  }

  .footer-tagline {
    font-size: 0.7rem !important;
  }

  .footer-legal {
    text-align: center !important;
  }

  .footer-column h4 {
    font-size: 0.8rem !important;
  }

  .footer-column a {
    font-size: 0.85rem !important;
  }
}

@media (max-width: 640px) {
  .landing-footer {
    margin-top: 80px !important;
    padding: 50px 1rem 25px !important;
  }

  .footer-logo {
    height: 36px !important;
  }

  .footer-tagline {
    font-size: 0.8rem !important;
  }

  .footer-legal p {
    font-size: 0.8rem !important;
  }
}
</style>