<template>
  <div id="app">
    <NavBar />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
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

/* Compensar navbar fija al navegar por anclas */
section {
  scroll-margin-top: 80px;
}
</style>