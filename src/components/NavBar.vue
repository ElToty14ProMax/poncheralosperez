<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.png" alt="Ponchera Los Pérez Logo" width="30" height="24" class="d-inline-block align-text-top">
        Ponchera Los Pérez
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/#about">Nosotros</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#services">Servicios</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#prices">Precios</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#footer">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No specific script logic needed for this simple Navbar
</script>

<style scoped>
.navbar {
  background-color: #333 !important; /* Dark background */
}

.navbar-brand, .nav-link {
  color: #ff8c00 !important; /* Orange text */
}

.nav-link:hover {
  color: #fff !important; /* White on hover */
}
</style>
