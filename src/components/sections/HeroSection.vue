<template>
  <section id="hero" class="hero-section d-flex align-items-center justify-content-center text-white text-center py-5">
    <div class="container">
      <h1 class="display-3 font-weight-bold mb-3">Ponchera Los Pérez</h1>
      <p class="lead mb-4">Expertos en neumáticos para todo tipo de vehículos.</p>
      <router-link to="/#services" class="btn btn-warning btn-lg">Servicios</router-link>
    </div>
  </section>
</template>

<script setup>
// No specific script logic needed
</script>

<style scoped>
.hero-section {
  background: url('@/assets/canva-portfolio.jpg') no-repeat center center/cover;
  height: 100vh; /* Full viewport height */
  position: relative;
  color: white;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6); /* Dark overlay */
}

.container {
  position: relative;
  z-index: 1;
}

.display-3 {
  font-size: 3.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.lead {
  font-size: 1.5rem;
}

.btn-warning {
  background-color: #ff8c00;
  border-color: #ff8c00;
  color: #333;
  font-weight: bold;
}

.btn-warning:hover {
  background-color: #e07b00;
  border-color: #e07b00;
}
</style>
