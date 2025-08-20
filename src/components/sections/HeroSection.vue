<template>
  <section id="hero" class="hero-section d-flex align-items-center justify-content-center text-white text-center">
    <!-- Background Image with Parallax -->
    <div class="hero-bg" ref="heroBg"></div>
    
    <!-- Animated Overlay -->
    <div class="hero-overlay"></div>
    
    <!-- Floating Particles -->
    <div class="particles">
      <div class="particle" v-for="n in 20" :key="n"></div>
    </div>
    
    <!-- Main Content -->
    <div class="container hero-content" ref="heroContent">
      <div class="hero-text-wrapper">

        <!-- Animated Title -->
        <h1 class="hero-title" ref="heroTitle">
          <span class="title-line">LONG LIFE</span>
          <span class="title-line">FOR YOUR</span>
          <span class="title-line highlight">TIRES</span>
        </h1>
        <!-- Subtitle with Typewriter Effect -->
        <p class="hero-subtitle" ref="heroSubtitle">
          {{ displayedText }}
          <span class="cursor" :class="{ blink: showCursor }">|</span>
        </p>
        <!-- Enhanced Hours Component -->
        <div class="hours-wrapper" ref="hoursWrapper">
          <PunchingBagHours />
        </div>
        <!-- CTA Button with Glow Effect -->
        <div class="cta-wrapper" ref="ctaWrapper">
          <router-link to="/prices" class="cta-button">
            <span class="button-text">Explorar Catálogo</span>
            <div class="button-glow"></div>
            <div class="button-shine"></div>
          </router-link>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator 
    <div class="scroll-indicator">
      <div class="scroll-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7 14L12 19L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <span class="scroll-text">Scroll Down</span>
    </div> -->
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import PunchingBagHours from "../PunchingBagHours.vue";

// Refs for DOM elements
const heroBg = ref(null);
const heroContent = ref(null);
const heroTitle = ref(null);
const heroSubtitle = ref(null);
const hoursWrapper = ref(null);
const ctaWrapper = ref(null);

// Typewriter effect
const fullText = "Servicio de calidad y confianza para tus neumáticos.";
const displayedText = ref("");
const showCursor = ref(true);
const typewriterSpeed = 80;

// Animation states
let scrollY = 0;
let ticking = false;

// Typewriter animation
const startTypewriter = () => {
  let i = 0;
  const typeInterval = setInterval(() => {
    if (i < fullText.length) {
      displayedText.value = fullText.slice(0, i + 1);
      i++;
    } else {
      clearInterval(typeInterval);
      // Stop cursor blinking after text is complete
      setTimeout(() => {
        showCursor.value = false;
      }, 2000);
    }
  }, typewriterSpeed);
};

// Parallax scroll effect
const updateParallax = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      if (heroBg.value) {
        const speed = Math.min(scrollY * 0.5, window.innerHeight * 0.5); // Limit movement
        heroBg.value.style.transform = `translateY(${speed}px)`;
      }
      
      if (heroContent.value) {
        const contentSpeed = Math.min(scrollY * 0.2, window.innerHeight * 0.3); // Gentler movement
        heroContent.value.style.transform = `translateY(-${contentSpeed}px)`;
      }
      
      ticking = false;
    });
    ticking = true;
  }
};

// Scroll event handler
const handleScroll = () => {
  scrollY = window.scrollY;
  updateParallax();
};

// Intersection Observer for animations
const observeElements = () => {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, options);
  
  // Observe elements for animation
  if (heroTitle.value) observer.observe(heroTitle.value);
  if (heroSubtitle.value) observer.observe(heroSubtitle.value);
  if (hoursWrapper.value) observer.observe(hoursWrapper.value);
  if (ctaWrapper.value) observer.observe(ctaWrapper.value);
};

onMounted(() => {
  // Start animations
  setTimeout(() => {
    if (heroTitle.value) heroTitle.value.classList.add('animate-in');
  }, 500);
  
  setTimeout(() => {
    startTypewriter();
  }, 1500);
  
  setTimeout(() => {
    if (hoursWrapper.value) hoursWrapper.value.classList.add('animate-in');
  }, 3000);
  
  setTimeout(() => {
    if (ctaWrapper.value) ctaWrapper.value.classList.add('animate-in');
  }, 3500);
  
  // Add scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Setup intersection observer
  observeElements();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600;700&display=swap');

.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px; /* Space for fixed navbar */
}

/* Background with Parallax */
.hero-bg {
  position: absolute;
  top: -20%;
  left: 0;
  width: 100%;
  height: 120%;
  background: url('@/assets/canva-portfolio.jpg') no-repeat center center/cover;
  will-change: transform;
  z-index: 1;
}

/* Enhanced Overlay */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(255, 140, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: 2;
}

/* Floating Particles */
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 140, 0, 0.6);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.particle:nth-child(odd) {
  animation-delay: -2s;
}

.particle:nth-child(1) { top: 10%; left: 10%; animation-duration: 8s; }
.particle:nth-child(2) { top: 20%; left: 80%; animation-duration: 6s; }
.particle:nth-child(3) { top: 60%; left: 20%; animation-duration: 10s; }
.particle:nth-child(4) { top: 80%; left: 90%; animation-duration: 7s; }
.particle:nth-child(5) { top: 30%; left: 60%; animation-duration: 9s; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

/* Main Content */
.hero-content {
  position: relative;
  z-index: 3;
  will-change: transform;
  pointer-events: auto; /* Ensure content is clickable */
}

.hero-text-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

/* Enhanced Title */
.hero-title {
  font-family: 'Orbitron', monospace;
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-title.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.title-line {
  display: block;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.8),
    0 0 20px rgba(255, 140, 0, 0.3);
  animation: titleGlow 3s ease-in-out infinite alternate;
}

.title-line.highlight {
  color: #ff8c00;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.8),
    0 0 30px rgba(255, 140, 0, 0.6),
    0 0 50px rgba(255, 140, 0, 0.4);
}

@keyframes titleGlow {
  0% { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 140, 0, 0.3); }
  100% { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 140, 0, 0.5); }
}

/* Enhanced Subtitle with Typewriter */
.hero-subtitle {
  font-family: 'Exo 2', sans-serif;
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
  min-height: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

.cursor {
  color: #ff8c00;
  font-weight: bold;
}

.cursor.blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Hours Wrapper */
.hours-wrapper {
  margin-bottom: 0.75rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

.hours-wrapper.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Enhanced CTA Button */
.cta-wrapper {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
}

.cta-wrapper.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.cta-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 18px 40px;
  background: linear-gradient(135deg, #ff8c00 0%, #e07b00 100%);
  color: #1a1a1a;
  text-decoration: none;
  font-family: 'Exo 2', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 50px;
  border: 2px solid transparent;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 
    0 8px 30px rgba(255, 140, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 
    0 12px 40px rgba(255, 140, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  color: #1a1a1a;
  text-decoration: none;
}

.button-text {
  position: relative;
  z-index: 2;
}

.button-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cta-button:hover .button-glow {
  opacity: 1;
}

.button-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.cta-button:hover .button-shine {
  left: 100%;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  z-index: 2; /* Lower z-index than content */
  animation: bounce 2s infinite;
  pointer-events: none; /* Don't block clicks */
}

.scroll-arrow {
  margin-bottom: 8px;
}

.scroll-text {
  font-family: 'Exo 2', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-10px); }
  60% { transform: translateX(-50%) translateY(-5px); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding-top: 70px;
  }
  
  .hero-title {
    font-size: clamp(2rem, 6vw, 3.5rem);
    letter-spacing: 2px;
    margin-bottom: 1.5rem;
  }
  
  .hero-subtitle {
    font-size: clamp(1rem, 4vw, 1.2rem);
    margin-bottom: 2rem;
  }
  
  .cta-button {
    padding: 16px 32px;
    font-size: 1rem;
  }
  
  .scroll-indicator {
    bottom: 30px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding-top: 60px;
  }
  
  .hero-title {
    letter-spacing: 1px;
  }
  
  .cta-button {
    padding: 14px 28px;
    font-size: 0.9rem;
  }
  
  .particles {
    display: none; /* Hide particles on small screens for performance */
  }
  
  .scroll-indicator {
    bottom: 20px;
  }
}
</style>