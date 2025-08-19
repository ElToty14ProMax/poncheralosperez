<template>
  <section id="about" class="about-section py-5 bg-dark text-white">
    <div class="container">
      <h2 class="text-center mb-5 text-warning">Sobre Nosotros</h2>
      <div class="row align-items-center">
        <div class="col-md-6 text-center mb-4 mb-md-0">
          <img src="@/assets/profile.jpg" class="img-fluid rounded shadow" alt="Ponchera Los Pérez">
        </div>
        <div class="col-md-6">
          <p>
            En la Ponchera Los Pérez, somos tu aliado confiable para el cuidado y mantenimiento de neumáticos en Cuba.
          </p>
          <p>
            Con años de experiencia, nos especializamos en la reparación y el trabajo con todo tipo de gomas, llantas y rines para vehículos ligeros y pesados. Nuestro equipo de especialistas altamente calificados garantiza un servicio de primera, utilizando técnicas avanzadas y herramientas de precisión para asegurar la seguridad y el rendimiento óptimo de tus neumáticos.
          </p>
          <p>
            Estamos ubicados en el <em>Reparto Manuelita, Santa Clara, Villa Clara, Cuba</em>.  
            <span class="text-warning">¡Gracias por elegirnos y confiar en nuestros servicios!</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script necesario
</script>

<style scoped>
.about-section {
  background-color: #333 !important; /* Fondo oscuro elegante */
}

.text-warning {
  color: #ff8c00 !important; /* Naranja cálido */
}

.img-fluid {
  max-width: 97%;
  height: auto;
  border-radius: 12px;
}

.shadow {
  box-shadow: 0 .8rem 1.5rem rgba(0,0,0,.3)!important;
}

/* Estilo de los párrafos */
.about-section p {
  text-align: justify;       /* Justificado */
  font-size: 1.05rem;         /* Un poco más grande */
  line-height: 1.8;          /* Más espacio entre líneas */
  margin-bottom: 1.0rem;     /* Espaciado bonito entre párrafos */
}
</style>
