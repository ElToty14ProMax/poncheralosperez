<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
    <CarouselComponent2 />
    <ServicesSection />
    <PricesSection />
    <StatsSection />
    <CarouselComponent />
  </div>
</template>

<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import PricesSection from '@/components/sections/PricesSection.vue'
import StatsSection from "../components/sections/StatsSection.vue";
import CarouselComponent from "../components/CarouselComponent.vue";
import CarouselComponent2 from "../components/CarouselComponent2.vue";

</script>

<style scoped>
.home-view {
  width: 100%;
}
</style>