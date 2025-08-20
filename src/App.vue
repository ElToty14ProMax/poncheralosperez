<template>
  <div id="app">
    <NavBar />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

function updateNavbarOffset() {
  const nav = document.querySelector('.navbar.fixed-top') || document.querySelector('.navbar')
  const height = nav ? nav.offsetHeight : 100
  document.documentElement.style.setProperty('--navbar-offset', `${height}px`)
}

onMounted(() => {
  updateNavbarOffset()
  window.addEventListener('resize', updateNavbarOffset)
  // Actualiza también al hacer scroll (navbar encoge/crece)
  let ticking = false
  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      updateNavbarOffset()
      ticking = false
    })
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  // Guardar para remover
  window.__appOnScrollHandler = onScroll
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateNavbarOffset)
  if (window.__appOnScrollHandler) {
    window.removeEventListener('scroll', window.__appOnScrollHandler)
    window.__appOnScrollHandler = null
  }
})
</script>

<style>
#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  line-height: 1.6;
  color: #333;
}

html {
  scroll-behavior: smooth;
}

/* Compensar navbar fija al navegar por anclas usando altura real del navbar */
:root {
  --navbar-offset-extra: 1px; /* extra para sombras/bordes y animación */
}

section {
  scroll-margin-top: calc(var(--navbar-offset, 1px) + var(--navbar-offset-extra, 1px));
}
</style>