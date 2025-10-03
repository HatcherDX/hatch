<template>
  <div class="hero-logo-container">
    <!-- Logo principal (redondo) para pantallas pequeñas -->
    <img
      src="/logo-hero-dark.svg"
      alt="Hatcher DX Engine"
      class="hero-logo-main dark-only"
    />
    <img
      src="/logo-hero-light.svg"
      alt="Hatcher DX Engine"
      class="hero-logo-main light-only"
    />

    <!-- Logo inline para pantallas grandes -->
    <img
      src="/logo-inline-dark.svg"
      alt="Hatcher DX Engine"
      class="hero-logo-inline dark-only"
    />
    <img
      src="/logo-inline-light.svg"
      alt="Hatcher DX Engine"
      class="hero-logo-inline light-only"
    />
  </div>
</template>

<script setup lang="ts">
// No longer need reactive data since we're using CSS for theme switching
</script>

<style scoped>
.hero-logo-container {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}

/* Logo principal (redondo) para pantallas pequeñas - centrado */
.hero-logo-main {
  width: 300px;
  max-width: 80vw;
  height: auto;
  margin: 0 auto;
  display: block;
}

/* Logo inline para pantallas grandes - ocupando todo el espacio disponible */
.hero-logo-inline {
  width: 100%;
  max-width: 180px;
  height: auto;
  margin: 0;
  display: none;
}

/* Theme-based visibility */
.light-only {
  display: block;
}

.dark-only {
  display: none;
}

:global(.dark) .light-only {
  display: none;
}

:global(.dark) .dark-only {
  display: block;
}

/* En pantallas grandes, mostrar inline y ocultar main */
@media (min-width: 960px) {
  .hero-logo-container {
    justify-content: flex-start;
  }

  .hero-logo-main {
    display: none;
  }

  .hero-logo-inline {
    display: block;
    max-width: 160px;
  }

  /* Mantener el tema correcto en pantallas grandes */
  .hero-logo-inline.light-only {
    display: block;
  }

  .hero-logo-inline.dark-only {
    display: none;
  }

  :global(.dark) .hero-logo-inline.light-only {
    display: none;
  }

  :global(.dark) .hero-logo-inline.dark-only {
    display: block;
  }
}

@media (max-width: 480px) {
  .hero-logo-main {
    width: 200px;
  }
}
</style>
