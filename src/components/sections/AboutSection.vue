<template>
  <section id="about" class="about-section py-5 bg-dark text-white">
    <div class="container">
      <h2 class="text-center mb-5 text-warning">Sobre Nosotros</h2>
      <div class="row align-items-center">
        <div class="col-md-6">
          <img src="@/assets/profile.jpg" class="img-fluid rounded shadow" alt="Ponchera Los Pérez">
        </div>
        <div class="col-md-6 mt-4 mt-md-0">
          <p class="lead">En <strong>Ponchera Los Pérez</strong>, somos tu aliado confiable para el cuidado y mantenimiento de neumáticos en Santa Clara, Villa Clara, Cuba.</p>
          <p>Con más de 20 años de experiencia, nos especializamos en la reparación y el trabajo con todo tipo de gomas, llantas y rines para vehículos ligeros y pesados. Nuestro equipo de especialistas altamente calificados garantiza un servicio de primera, utilizando técnicas avanzadas y herramientas de precisión para asegurar la seguridad y el rendimiento óptimo de tus neumáticos.</p>
          <p>Estamos ubicados en el <strong>Reparto Manuelita, Santa Clara, Villa Clara, Cuba</strong>. ¡Gracias por elegirnos y confiar en nuestros servicios!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No specific script logic needed
</script>

<style scoped>
.about-section {
  background-color: #333 !important; /* Dark background */
}

.text-warning {
  color: #ff8c00 !important; /* Orange text */
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.shadow {
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
</style>
