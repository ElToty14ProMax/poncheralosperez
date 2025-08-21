<template>
  <div class="carousel-wrapper">
    <div class="carousel-container">
      <h2 class="carousel-title">Taller</h2>
      
      <swiper
        :slides-per-view="slidesPerView"
        :space-between="20"
        :pagination="{ clickable: true }"
        :navigation="true"
        :loop="true"
        :autoplay="{ delay: 2000, disableOnInteraction: false }"
        :grab-cursor="true"
        :modules="modules"
        :breakpoints="breakpoints"
        class="portfolio-swiper"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide 
          v-for="(image, index) in images" 
          :key="index"
          class="portfolio-slide"
        >
          <div class="image-container" @click="openModal(index)">
            <img 
              :src="image.src" 
              :alt="image.alt"
              class="portfolio-image"
            />
            <div class="image-overlay">
              <div class="image-info">
                <h3>{{ image.title }}</h3>
                <p>{{ image.category }}</p>
              </div>
            </div>
            <!-- Icono de zoom para indicar que es clickeable -->
            <div class="zoom-icon">
              <span class="zoom-text">🔍</span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Modal para visualizar imagen en grande -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <button class="modal-close" @click="closeModal">
          <span class="close-icon">✕</span>
        </button>
        
        <div class="modal-navigation">
          <button class="nav-button prev-button" @click="prevImage" :disabled="images.length <= 1">
            <span class="nav-arrow">‹</span>
          </button>
          
          <div class="modal-image-container">
            <img 
              :src="images[currentModalImage].src" 
              :alt="images[currentModalImage].alt"
              class="modal-image"
            />
            <div class="modal-info">
              <h3 v-if="images[currentModalImage].title">{{ images[currentModalImage].title }}</h3>
              <p v-if="images[currentModalImage].category">{{ images[currentModalImage].category }}</p>
              <span class="image-counter">{{ currentModalImage + 1 }} / {{ images.length }}</span>
            </div>
          </div>
          
          <button class="nav-button next-button" @click="nextImage" :disabled="images.length <= 1">
            <span class="nav-arrow">›</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Counter Info 
    <div class="carousel-info">
      <span class="slide-counter">{{ currentSlide + 1 }} / {{ totalSlides }}</span>
    </div>-->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Variables reactivas
const currentSlide = ref(0);
const totalSlides = ref(6);
const slidesPerView = ref(3);

// Variables para el modal
const isModalOpen = ref(false);
const currentModalImage = ref(0);

// Configuración de Swiper
const modules = [Navigation, Pagination, Autoplay];

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 15
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20
  }
};

// Datos de las imágenes (Estas son rutas reales)
const images = ref([
  { 
    src: require('@/assets/carrucel2/taller1.jpg'), 
    alt: 'Portfolio Image 1',
    //title: 'Vista Interior 1',
    //category: 'Taller'
  },
  { 
    src: require('@/assets/carrucel2/taller2.jpg'), 
    alt: 'Portfolio Image 2',
    //title: 'Vista Interior 2',
    //category: 'Taller'
  },
  { 
    src: require('@/assets/carrucel2/taller4.jpg'), 
    alt: 'Punching Bag Image 1',
    //title: 'Trabajadores',
    //category: 'Taller'
  },
  { 
    src: require('@/assets/carrucel2/taller5.jpg'), 
    alt: 'Punching Bag Image 2',
    //title: 'Información',
    //category: 'Taller'
  },
  { 
    src: require('@/assets/carrucel2/taller6.jpg'), 
    alt: 'Punching Bag Image 3',
    //title: 'Cartel',
    //category: 'Taller'
  },{ 
    src: require('@/assets/carrucel2/carro6.jpg'), 
    alt: 'Punching Bag Image 3',
    //title: 'Arensey',
    //category: 'Propietario'
  },
  { 
    src: require('@/assets/carrucel2/carro1.jpg'), 
    alt: 'Punching Bag Image 3',
    //title: 'Cliente',
    //category: 'Taller'
  },
  { 
    src: require('@/assets/carrucel2/carro2.jpg'), 
    alt: 'Punching Bag Image 3',
    //title: 'Cliente',
    //category: 'Taller'
  },
  { 
    src: require('@/assets/carrucel2/carro3.jpg'), 
    alt: 'Punching Bag Image 3',
    //title: 'Cliente',
    //category: 'Taller'
  },
  { 
    src: require('@/assets/carrucel2/carro4.jpg'), 
    alt: 'Punching Bag Image 3',
    //title: 'Cliente',
    //category: 'Taller'
  },
  { 
    src: require('@/assets/carrucel2/carro5.jpg'), 
    alt: 'Punching Bag Image 3',
    //title: 'Cliente',
    //category: 'Taller'
  },
  { 
    src: require('@/assets/carrucel2/carro7.jpg'), 
    alt: 'Punching Bag Image 3',
    //title: 'Cartel',
    //category: 'Taller'
  },
  { 
    src: require('@/assets/carrucel2/carro8.jpg'), 
    alt: 'Punching Bag Image 3',
    //title: 'Cartel',
    //category: 'Taller'
  },
  { 
    src: require('@/assets/carrucel2/carro9.jpg'), 
    alt: 'Punching Bag Image 3',
    //title: 'Cartel',
    //category: 'Taller'
  }
]);

// Event handlers del carrusel
const onSwiper = (swiper) => {
  console.log('Swiper initialized:', swiper);
};

const onSlideChange = (swiper) => {
  currentSlide.value = swiper.realIndex;
};

// Funciones del modal
const openModal = (imageIndex) => {
  currentModalImage.value = imageIndex;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden'; // Prevenir scroll del fondo
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = 'auto'; // Restaurar scroll
};

const nextImage = () => {
  if (currentModalImage.value < images.value.length - 1) {
    currentModalImage.value++;
  } else {
    currentModalImage.value = 0; // Volver al inicio
  }
};

const prevImage = () => {
  if (currentModalImage.value > 0) {
    currentModalImage.value--;
  } else {
    currentModalImage.value = images.value.length - 1; // Ir al final
  }
};

// Manejo de teclas
const handleKeyPress = (event) => {
  if (!isModalOpen.value) return;
  
  switch (event.key) {
    case 'Escape':
      closeModal();
      break;
    case 'ArrowRight':
      nextImage();
      break;
    case 'ArrowLeft':
      prevImage();
      break;
  }
};

onMounted(() => {
  totalSlides.value = images.value.length;
  document.addEventListener('keydown', handleKeyPress);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyPress);
  document.body.style.overflow = 'auto'; // Asegurar que el scroll se restaure
});
</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
  padding: 60px 20px;
  position: relative;
}

.carousel-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 40px 20px;
  border: 1px solid rgba(255, 140, 0, 0.1);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 140, 0, 0.05);
}

.carousel-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff8c00;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.carousel-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #ff8c00, transparent);
  border-radius: 2px;
}

.portfolio-swiper {
  width: 100%;
  padding: 20px 0 60px 0;
}

.portfolio-slide {
  transition: all 0.1s ease;
}

.image-container {
  position: relative;
  width: 100%;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 140, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.image-container:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 16px 48px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 140, 0, 0.2),
    0 0 20px rgba(255, 140, 0, 0.1);
}

.portfolio-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.2s ease;
}

.image-container:hover .portfolio-image {
  transform: scale(1.05);
}

.zoom-icon {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.zoom-text {
  font-size: 18px;
  color: white;
}

.close-icon {
  font-size: 24px;
  color: white;
  font-weight: bold;
}

.nav-arrow {
  font-size: 32px;
  color: white;
  font-weight: bold;
  line-height: 1;
}

.image-container:hover .zoom-icon {
  opacity: 1;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 30px 20px 20px;
  transform: translateY(100%);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-container:hover .image-overlay {
  transform: translateY(0);
}

.image-info h3 {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 5px 0;
}

.image-info p {
  color: #ff8c00;
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.9;
}

/* Estilos del Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

.modal-container {
  position: relative;
  width: 95%;
  height: 95%;
  max-width: 1200px;
  max-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(255, 140, 0, 0.2);
  border-color: #ff8c00;
  transform: scale(1.1);
}

.modal-navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 20px;
}

.nav-button {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.nav-button:hover:not(:disabled) {
  background: rgba(255, 140, 0, 0.2);
  border-color: #ff8c00;
  transform: scale(1.1);
}

.nav-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.modal-image-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: calc(100% - 160px);
  height: 100%;
}

.modal-image {
  max-width: 100%;
  max-height: 85%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 140, 0, 0.1);
  animation: zoomIn 0.3s ease;
}

.modal-info {
  margin-top: 20px;
  text-align: center;
  color: white;
}

.modal-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 5px 0;
  color: #ff8c00;
}

.modal-info p {
  font-size: 1rem;
  margin: 0 0 10px 0;
  color: rgba(255, 255, 255, 0.8);
}

.image-counter {
  font-size: 0.9rem;
  color: rgba(255, 140, 0, 0.8);
  font-weight: 500;
}

/* Animaciones */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes zoomIn {
  from { 
    opacity: 0;
    transform: scale(0.8);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}

/* Swiper Navigation Arrows Styling */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #ff8c00 !important;
  background: rgba(255, 140, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 140, 0, 0.2);
  border-radius: 50%;
  width: 50px !important;
  height: 50px !important;
  margin-top: -25px !important;
  transition: all 0.3s ease;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(255, 140, 0, 0.2);
  border-color: rgba(255, 140, 0, 0.4);
  transform: scale(1.1);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 20px !important;
  font-weight: bold;
}

/* Swiper Pagination Dots Styling */
:deep(.swiper-pagination) {
  bottom: 20px !important;
}

:deep(.swiper-pagination-bullet) {
  width: 12px !important;
  height: 12px !important;
  background: rgba(255, 140, 0, 0.3) !important;
  border: 1px solid rgba(255, 140, 0, 0.5) !important;
  border-radius: 50% !important;
  opacity: 1 !important;
  transition: all 0.3s ease !important;
  margin: 0 4px !important;
}

:deep(.swiper-pagination-bullet-active) {
  background: #ff8c00 !important;
  transform: scale(1.2);
  box-shadow: 0 0 10px rgba(255, 140, 0, 0.5);
}

/* Slide Counter */
.carousel-info {
  text-align: center;
  margin-top: 20px;
}

.slide-counter {
  color: rgba(255, 140, 0, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .carousel-container {
    padding: 30px 15px;
  }
  
  .carousel-title {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  .image-container {
    height: 240px;
  }
  
  .modal-navigation {
    flex-direction: column;
    gap: 10px;
  }
  
  .modal-image-container {
    max-width: 100%;
    order: 2;
  }
  
  .nav-button {
    width: 50px;
    height: 50px;
  }
  
  .prev-button {
    order: 1;
  }
  
  .next-button {
    order: 3;
  }
  
  .modal-close {
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
  }
  
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    width: 40px !important;
    height: 40px !important;
    margin-top: -20px !important;
  }
}

@media (max-width: 480px) {
  .carousel-wrapper {
    padding: 10px 10px;
  }
  
  .carousel-title {
    font-size: 1.8rem;
  }
  
  .image-container {
    height: 200px;
  }
  
  .modal-navigation {
    gap: 5px;
  }
  
  .nav-button {
    width: 40px;
    height: 40px;
  }
  
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    display: none !important;
  }
}

/* Slide transitions for center focus effect */
:deep(.swiper-slide) {
  transition: all 0.1s ease;
  opacity: 0.7;
}

:deep(.swiper-slide-active) {
  opacity: 1;
  transform: scale(1.02);
}
</style>