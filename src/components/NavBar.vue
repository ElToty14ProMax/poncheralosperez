<template>
  <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'scrolled': isScrolled }">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <div class="brand-container">
          <img src="@/assets/logo.png" alt="Ponchera Los Pérez Logo" class="brand-logo">
          <span class="brand-text">Ponchera Los Pérez</span>
        </div>
      </router-link>
      
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/#about">
              <span class="nav-text">Nosotros</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#services">
              <span class="nav-text">Servicios</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#prices">
              <span class="nav-text">Precios</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#footer">
              <span class="nav-text">Contacto</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Check initial state
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&display=swap');

.navbar {
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 140, 0, 0.1);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
}

.navbar.scrolled {
  background: rgba(26, 26, 26, 0.98);
  padding: 10px 0;
  box-shadow: 
    0 2px 30px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 140, 0, 0.15);
  border-bottom-color: rgba(255, 140, 0, 0.2);
}

.brand-container {
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.brand-logo {
  width: 35px;
  height: 28px;
  object-fit: contain;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(255, 140, 0, 0.3));
}

.navbar.scrolled .brand-logo {
  width: 32px;
  height: 25px;
}

.brand-text {
  font-family: 'Exo 2', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #ff8c00;
  text-decoration: none;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(255, 140, 0, 0.2);
  transition: all 0.3s ease;
}

.navbar.scrolled .brand-text {
  font-size: 1.3rem;
}

.brand-container:hover .brand-text {
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 140, 0, 0.5);
}

.brand-container:hover .brand-logo {
  transform: scale(1.05);
  filter: drop-shadow(0 4px 8px rgba(255, 140, 0, 0.4));
}

/* Navigation Links */
.navbar-nav {
  gap: 8px;
}

.nav-link {
  position: relative;
  padding: 12px 20px !important;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.nav-text {
  font-family: 'Exo 2', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.5px;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 140, 0, 0.1), rgba(255, 140, 0, 0.2));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
}

.nav-link:hover::before {
  transform: scaleX(1);
}

.nav-link:hover .nav-text {
  color: #ff8c00;
  text-shadow: 0 0 8px rgba(255, 140, 0, 0.3);
}

/* Active state */
.nav-link.router-link-active .nav-text {
  color: #ff8c00;
  font-weight: 600;
}

.nav-link.router-link-active::before {
  transform: scaleX(1);
  background: linear-gradient(135deg, rgba(255, 140, 0, 0.2), rgba(255, 140, 0, 0.3));
}

/* Navbar Toggler */
.navbar-toggler {
  border: 1px solid rgba(255, 140, 0, 0.3);
  border-radius: 8px;
  padding: 8px 12px;
  transition: all 0.3s ease;
}

.navbar-toggler:hover {
  border-color: rgba(255, 140, 0, 0.5);
  background: rgba(255, 140, 0, 0.1);
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 2px rgba(255, 140, 0, 0.3);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 140, 0, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='m4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

/* Responsive Design */
@media (max-width: 991px) {
  .navbar-collapse {
    background: rgba(26, 26, 26, 0.98);
    border-radius: 12px;
    margin-top: 15px;
    padding: 20px;
    border: 1px solid rgba(255, 140, 0, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  
  .navbar-nav {
    gap: 4px;
  }
  
  .nav-link {
    padding: 12px 16px !important;
    margin: 2px 0;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 12px 0;
  }
  
  .navbar.scrolled {
    padding: 8px 0;
  }
  
  .brand-text {
    font-size: 1.2rem;
  }
  
  .navbar.scrolled .brand-text {
    font-size: 1.1rem;
  }
  
  .brand-logo {
    width: 30px;
    height: 24px;
  }
  
  .navbar.scrolled .brand-logo {
    width: 28px;
    height: 22px;
  }
}

@media (max-width: 480px) {
  .brand-text {
    font-size: 1.1rem;
  }
  
  .navbar.scrolled .brand-text {
    font-size: 1rem;
  }
  
  .container-fluid {
    padding: 0 15px;
  }
}

/* Animation for navbar entrance */
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.navbar {
  animation: slideDown 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
</style>