<template>
  <section id="myself" class="myself-section">
    <div class="myself-container">
      <div class="myself-content">
        <!-- Profile Section -->
        <div class="profile-section">
          <div class="profile-image-wrapper">
            <img
              src="@/assets/profile.jpg"
              alt="Frank Eduardo Gattorno Rodríguez"
              class="profile-img"
            />
          </div>

          <div class="intro-content">
            <div class="greeting">
              <span class="greeting-icon">👋</span>
              <span>¡Hola! Soy</span>
            </div>

            <h1 class="myself-name">Ing. Frank Eduardo Gattorno Rodríguez</h1>

            <div class="role-section">
              <p class="role-title">Desarrollador Full-Stack</p>
              <p class="role-description">
                Creando soluciones web completas con tecnologías modernas.
                Especializado en desarrollo tanto Front-End como Back-End.
              </p>
            </div>

            <div class="myself-actions">
              <button class="btn btn-secondary" @click="downloadCV">
                <i class="fas fa-download"></i>
                Descargar CV
              </button>
            </div>
          </div>
        </div>

        <!-- Stats usando componente separado -->
        <StatsSection :stats="stats" />
      </div>
    </div>
  </section>
</template>

<script setup>
import StatsSection from "./StatsSection.vue"

const stats = [
  { number: "15+", label: "Proyectos", icon: "🚀" },
  { number: "8+", label: "Tecnologías", icon: "💻" },
  { number: "3+", label: "Años Exp.", icon: "⭐" },
  { number: "100%", label: "Dedicación", icon: "❤️" }
]

function downloadCV() {
  window.open(
    'https://drive.google.com/file/d/1IhX6uTravr5-7awPdSJJLEY53vzJ3aG_/view?usp=drive_link',
    '_blank'
  )
}
</script>

<style scoped>
.myself-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  padding: 2rem 0;
}

.myself-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

.myself-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

/* Profile Section */
.profile-section {
  text-align: center;
  color: white;
}

.profile-image-wrapper {
  margin-bottom: 2rem;
  display: inline-block;
}

.profile-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: popIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.intro-content {
  max-width: 600px;
  margin: 0 auto;
}

.greeting {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.greeting-icon {
  font-size: 1.5rem;
  animation: wave 2s ease-in-out infinite;
}

.myself-name {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.role-section {
  margin-bottom: 2.5rem;
}

.role-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffd700;
}

.role-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0;
}

/* Botones */
.myself-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-primary {
  background: #ffd700;
  color: #333;
}

.btn-primary:hover {
  background: #ffa500;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* Animaciones */
@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-20deg);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .myself-container {
    padding: 0 1rem;
  }

  .profile-img {
    width: 150px;
    height: 150px;
  }

  .myself-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 250px;
  }
}
</style>
