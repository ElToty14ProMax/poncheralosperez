<template>
  <section id="services" class="services-section py-5 bg-black text-white">
    <div class="container">
      <h2 class="text-center mb-5 text-warning">Nuestros Servicios</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100 bg-dark text-white border-warning">
            <div class="card-body text-center">
              <i class="fas fa-tire-pressure-gauge fa-3x mb-3 text-warning"></i>
              <h5 class="card-title text-warning">Reparación de Gomas</h5>
              <p class="card-text">Reparamos todo tipo de pinchazos y daños en neumáticos, asegurando una solución duradera y segura.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 bg-dark text-white border-warning">
            <div class="card-body text-center">
              <i class="fas fa-car-tire fa-3x mb-3 text-warning"></i>
              <h5 class="card-title text-warning">Montaje y Desmontaje</h5>
              <p class="card-text">Servicio profesional de montaje y desmontaje de neumáticos en todo tipo de rines.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 bg-dark text-white border-warning">
            <div class="card-body text-center">
              <i class="fas fa-balance-scale-left fa-3x mb-3 text-warning"></i>
              <h5 class="card-title text-warning">Balanceo de Ruedas</h5>
              <p class="card-text">Aseguramos un balanceo preciso para una conducción suave y segura, prolongando la vida útil de tus neumáticos.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 bg-dark text-white border-warning">
            <div class="card-body text-center">
              <i class="fas fa-truck fa-3x mb-3 text-warning"></i>
              <h5 class="card-title text-warning">Servicio para Vehículos Pesados</h5>
              <p class="card-text">Atendemos camiones, guaguas y otros vehículos de gran porte con soluciones robustas para sus neumáticos.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 bg-dark text-white border-warning">
            <div class="card-body text-center">
              <i class="fas fa-motorcycle fa-3x mb-3 text-warning"></i>
              <h5 class="card-title text-warning">Motos y Bicicletas</h5>
              <p class="card-text">Ofrecemos servicio especializado para neumáticos de motos y bicicletas, con la misma calidad y atención.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 bg-dark text-white border-warning">
            <div class="card-body text-center">
              <i class="fas fa-tools fa-3x mb-3 text-warning"></i>
              <h5 class="card-title text-warning">Mecánica Ligera</h5>
              <p class="card-text">Servicios básicos de mecánica relacionados con el tren de rodaje y suspensión, garantizando tu seguridad.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No specific script logic needed
</script>

<style scoped>
.services-section {
  background-color: #000 !important; /* Black background */
}

.text-warning {
  color: #ff8c00 !important; /* Orange text */
}

.card {
  border: 1px solid #ff8c00 !important; /* Orange border for cards */
}

.card-title {
  font-weight: bold;
}
</style>
