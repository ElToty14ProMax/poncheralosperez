<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PricesSection />
  </div>
</template>

<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import PricesSection from '@/components/sections/PricesSection.vue'
</script>

<style scoped>
.home-view {
  width: 100%;
}
</style>