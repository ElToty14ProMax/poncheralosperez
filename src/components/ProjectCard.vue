<template>
    <div 
      class="project-card"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{ 'card-hover': hover }"
      :style="cardStyle"
    >
      <div class="watermark">{{ project.watermark }}</div>
      <div class="card-image">
        <img :src="project.image" :alt="project.title">
      </div>
      <div class="card-content">
        <h3>{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        
        <div class="tech-stack">
          <span 
            v-for="(tech, index) in project.technologies" 
            :key="index" 
            class="tech-tag"
            :style="{ backgroundColor: techColors[index % techColors.length] }"
          >
            {{ tech }}
          </span>
        </div>
        
        <div class="card-links">
          <a :href="project.demoLink" target="_blank" class="demo-btn">
            <i class="fas fa-external-link-alt"></i> Demo
          </a>
          <a :href="project.codeLink" target="_blank" class="code-btn">
            <i class="fab fa-github"></i> Código
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'

  defineProps({
    project: {
      type: Object,
      required: true
    }
  })

  const hover = ref(false)
  const techColors = [
    'rgba(56, 178, 172, 0.15)', 
    'rgba(66, 153, 225, 0.15)', 
    'rgba(159, 122, 234, 0.15)',
    'rgba(236, 72, 153, 0.15)',
    'rgba(237, 137, 54, 0.15)'
  ]

  const rotateX = computed(() => Math.random() * 4 + 1)
  const rotateY = computed(() => Math.random() * 4 + 1)

  const cardStyle = computed(() => {
    if (hover.value) {
      return {
        transform: `perspective(1000px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg) translateY(-15px) scale(1.03)`
      }
    }
    return { transform: 'perspective(1000px) rotateX(0) rotateY(0)' }
  })
  </script>
  
  <style scoped>
  .project-card {
    width: 100%;
    max-width: 360px;
    background: rgba(30, 41, 59, 0.85);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(74, 85, 104, 0.5);
    transform: perspective(1000px) rotateX(0) rotateY(0);
    transform-style: preserve-3d;
    will-change: transform;
    margin: 15px;
  }
  
  .project-card.card-hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(59, 130, 246, 0.5);
    z-index: 10;
  }
  
  .project-card::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899);
    z-index: -1;
    border-radius: 18px;
    opacity: 0;
    transition: opacity 0.4s;
  }
  
  .project-card.card-hover::before {
    opacity: 1;
  }
  
  .card-image {
    height: 200px;
    overflow: hidden;
    position: relative;
  }
  
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  
  .project-card.card-hover .card-image img {
    transform: scale(1.1);
  }
  
  .card-content {
    padding: 25px;
  }
  
  .card-content h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #e2e8f0;
    position: relative;
    display: inline-block;
  }
  
  .card-content h3::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    border-radius: 2px;
    transition: width 0.3s;
  }
  
  .project-card.card-hover .card-content h3::after {
    width: 100px;
  }
  
  .project-description {
    color: #a0aec0;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 20px;
    height: 80px;
    overflow: hidden;
  }
  
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 25px;
  }
  
  .tech-tag {
    color: white;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.3s;
  }
  
  .tech-tag:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .card-links {
    display: flex;
    gap: 15px;
    border-top: 1px solid rgba(74, 85, 104, 0.5);
    padding-top: 20px;
  }
  
  .demo-btn, .code-btn {
    flex: 1;
    padding: 12px 0;
    text-align: center;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  
  .demo-btn {
    background: linear-gradient(45deg, #3b82f6, #2563eb);
    color: white;
    box-shadow: 0 4px 6px rgba(37, 99, 235, 0.3);
  }
  
  .demo-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(37, 99, 235, 0.4);
  }
  
  .code-btn {
    background: rgba(45, 55, 72, 0.7);
    color: #a0aec0;
    border: 1px solid rgba(74, 85, 104, 0.7);
  }
  
  .code-btn:hover {
    background: rgba(56, 178, 172, 0.2);
    color: #38b2ac;
    transform: translateY(-3px);
  }
  
  .watermark {
    position: absolute;
    bottom: 15px;
    right: 15px;
    opacity: 0.05;
    font-size: 5rem;
    font-weight: 800;
    z-index: 0;
    pointer-events: none;
    transform: rotate(-15deg);
  }
  </style>