<template>
  <section id="about" class="about-section py-5 bg-dark text-white">
    <div class="container">
      <h2 class="text-center mb-5 text-warning">Sobre Nosotros</h2>
      <div class="row align-items-center">
        <div class="col-md-6 text-center mb-4 mb-md-0">
          <img src="@/assets/carrucel2/reparacion21.jpg" class="img-fluid rounded shadow" alt="Ponchera Los Pérez">
        </div>
        <div class="col-md-6">
          <p>
    En la Ponchera Los Pérez, nos enorgullecemos de ser tus aliados de confianza para el cuidado integral de tus neumáticos en Cuba. Somos mucho más que un servicio técnico; somos tu garante de seguridad y tranquilidad en cada kilómetro que recorres.
</p>
<p>
  Con años de experiencia, nos especializamos en ofrecer soluciones completas para todo tipo de neumáticos, llantas y rines de vehículos ligeros. Nuestro equipo está formado por especialistas altamente capacitados que combinan el conocimiento tradicional con las técnicas más avanzadas del sector. Utilizamos herramientas de última generación y tecnología de precisión para realizar desde reparaciones urgentes hasta mantenimientos preventivos, garantizando siempre el máximo rendimiento, la durabilidad de tus neumáticos y, lo más importante, tu seguridad vial. Confía en nosotros para mantener tu vehículo en las mejores condiciones.
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

  max-height: 200%;
  height: 500px;
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
