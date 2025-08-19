<template>
    <div class="stats-section">
      <div class="stats-grid">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="stat-card"
          :style="{ '--delay': `${index * 0.1}s` }"
        >
          <div class="stat-icon">{{ stat.icon }}</div>
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    stats: {
      type: Array,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .stats-section {
    width: 100%;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
  }
  
  .stat-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 2rem 1rem;
    text-align: center;
    transition: transform 0.3s ease;
    animation: slideInUp 0.6s ease forwards;
    animation-delay: var(--delay);
    opacity: 0;
    transform: translateY(30px);
  }
  
  .stat-card:hover {
    transform: translateY(-5px);
  }
  
  .stat-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: #FFD700;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    font-weight: 500;
  }
  
  @keyframes slideInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Responsive */
  @media (max-width: 480px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    
    .stat-card {
      padding: 1.5rem 1rem;
    }
  }
  </style>
  