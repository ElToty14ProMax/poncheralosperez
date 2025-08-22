<template>
  <footer id="footer" class="bg-dark text-white pt-5 pb-4">
    <div class="container text-center text-md-left">
      <div class="row text-center text-md-left">
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Ponchera Los Pérez</h5>
          <p>Tu mejor opción para el cuidado de tus neumáticos. Años de experiencia y especialistas calificados.</p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-3 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Servicios</h5>
          <p>
            <a href="#services" class="text-white" style="text-decoration: none;">Reparación de Neumáticos</a>
          </p>
          <p>
            <a href="#services" class="text-white" style="text-decoration: none;">Desmonte y Monte</a>
          </p>
          <p>
            <a href="#services" class="text-white" style="text-decoration: none;">Balanceo</a>
          </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Enlaces Útiles</h5>
          <p>
            <a href="#about" class="text-white" style="text-decoration: none;">Nosotros</a>
          </p>
          <p>
            <a href="#prices" class="text-white" style="text-decoration: none;">Precios</a>
          </p>
          
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Contacto</h5>
          <p>
            <i class="fas fa-home mr-3"></i> Reparto Manuelita. <br>Santa Clara, Villa Clara, Cuba. 
          </p>
          <p>
            <i class="fas fa-envelope mr-3"></i> arenceyperez@gmail.com
          </p>
          <p>
            <i class="fas fa-phone mr-3"></i> +53 53241835
          </p>
          <p>
            <i class="fas fa-phone mr-3"></i> +53 53667054
          </p>
        </div>
      </div>


      <div class="row text-center text-md-left d-flex justify-content-center mb-4">
        
        <div class="col-6 col-md-4 col-lg-2 mt-3">
          <img src="@/assets/logos/michelin.png" alt="Michelin" class="img-fluid footer-brand-logo">
        </div>
        <div class="col-6 col-md-4 col-lg-2 mt-3">
          <img src="@/assets/logos/truper.png" alt="Truper" class="img-fluid footer-brand-logo">
        </div>
        <div class="col-6 col-md-4 col-lg-2 mt-3">
          <img src="@/assets/logos/rematiptop.png" alt="Rema Tip Top" class="img-fluid footer-brand-logo">
        </div>
        <div class="col-6 col-md-4 col-lg-2 mt-3">
          <img src="@/assets/logos/milwaukee.png" alt="Milwaukee" class="img-fluid footer-brand-logo">
        </div>
        <div class="col-6 col-md-4 col-lg-2 mt-3">
          <img src="@/assets/logos/mpc-air-compressor.png" alt="MPC Air Compressor" class="img-fluid footer-brand-logo">
        </div>
        <div class="col-6 col-md-4 col-lg-2 mt-3">
          <img src="@/assets/logos/equip-tech.png" alt="Equip Tech" class="img-fluid footer-brand-logo">
        </div>
        <div class="col-6 col-md-4 col-lg-2 mt-3">
          <img src="@/assets/logos/porter-cable.png" alt="Porter Cable" class="img-fluid footer-brand-logo">
        </div>
        <div class="col-6 col-md-4 col-lg-2 mt-3">
          <img src="@/assets/logos/divep.png" alt="DIVEP" class="img-fluid footer-brand-logo">
        </div>
      </div>

      <hr class="mb-4">

      <div class="row align-items-center">
        <div class="col-md-7 col-lg-8">
          <p>Derechos de Autor ©2025 Todos los derechos reservados por:
            <a href="#" style="text-decoration: none;"><strong class="text-warning">Ponchera Los Pérez</strong></a></p>
        </div>
        <div class="col-md-5 col-lg-4">
          <div class="text-center text-md-right">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item">
                <a href="https://www.facebook.com/arencey.perez" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fab fa-facebook"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fab fa-x-twitter"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.instagram.com/arenceyperez/" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fab fa-instagram"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.google.com/maps/place/Ponchera+los+P%C3%A9rez/@22.4171126,-80.0074266,94m/data=!3m1!1e3!4m15!1m8!3m7!1s0x88cd49070f7a4cb5:0x798cf7529110a41a!2sCuba!3b1!8m2!3d21.521757!4d-77.781167!16zL20vMGQwNHo2!3m5!1s0x88d52f21d901f6b1:0xae04faa456452461!8m2!3d22.4170641!4d-80.0070539!16s%2Fg%2F11rx28b5nc?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fas fa-map-marker-alt"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No specific script logic needed for Footer
</script>

<style scoped>
footer {
  background-color: #333 !important; /* Dark background */
}

.text-warning {
  color: #ff8c00 !important; /* Orange text */
}

.footer-brand-logo {
  max-height: 80px; /* Adjust as needed */
  width: auto;
  transition: all 0.3s ease;
}

.footer-brand-logo:hover {
  filter: grayscale(0%) brightness(100%);
  opacity: 1;
}
</style>
