<template>
    <div class="carousel-wrapper">
      <div class="carousel-container">
        <h2 class="carousel-title">Galería</h2>
        
        <swiper
          :slides-per-view="slidesPerView"
          :space-between="20"
          :pagination="{ clickable: true }"
          :navigation="true"
          :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
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
            <div class="image-container">
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
            </div>
          </swiper-slide>
        </swiper>
      </div>
  
      <!-- Counter Info 
      <div class="carousel-info">
        <span class="slide-counter">{{ currentSlide + 1 }} / {{ totalSlides }}</span>
      </div>-->
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
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
  
  // Datos de las imágenes (reemplaza con tus rutas reales)
  const images = ref([
    { 
      src: require('@/assets/1.jpg'), 
      alt: 'Portfolio Image 1',
      title: 'Trabajador',
      category: 'Interior'
    },
    { 
      src: require('@/assets/2.jpg'), 
      alt: 'Portfolio Image 2',
      title: 'Interior 1',
      category: 'Interior'
    },
    { 
      src: require('@/assets/3.jpg'), 
      alt: 'Portfolio Image 3',
      title: 'Interior 2',
      category: 'Interior'
    },
    { 
      src: require('@/assets/4.jpg'), 
      alt: 'Punching Bag Image 1',
      title: 'Balanceadora',
      category: 'Interior'
    },
    { 
      src: require('@/assets/5.jpg'), 
      alt: 'Punching Bag Image 2',
      title: 'Dueño',
      category: 'Modelo'
    },
    { 
      src: require('@/assets/6.jpg'), 
      alt: 'Punching Bag Image 3',
      title: 'Cartel',
      category: 'Exterior'
    }
  ]);
  
  // Event handlers
  const onSwiper = (swiper) => {
    console.log('Swiper initialized:', swiper);
  };
  
  const onSlideChange = (swiper) => {
    currentSlide.value = swiper.realIndex;
  };
  
  onMounted(() => {
    totalSlides.value = images.value.length;
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
    transition: all 0.3s ease;
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
    transition: all 0.4s ease;
  }
  
  .image-container:hover .portfolio-image {
    transform: scale(1.05);
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
    
    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
      display: none !important;
    }
  }
  
  /* Slide transitions for center focus effect */
  :deep(.swiper-slide) {
    transition: all 0.3s ease;
    opacity: 0.7;
  }
  
  :deep(.swiper-slide-active) {
    opacity: 1;
    transform: scale(1.02);
  }
  </style>