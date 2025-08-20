<template>
    <div class="hours-container">
      <div class="hours-card">
        <!-- Clock Icon -->
        <div class="clock-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        
        <!-- Horizontal Hours Info -->
        <span class="hours-text">Horario: {{ openTime }} - {{ closeTime }}</span>
        
        <!-- Status Badge -->
        <div class="status-badge" :class="statusClass">
          <div class="status-dot" :class="{ pulse: isOpen }"></div>
          <span class="status-text">{{ status }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  
  const openHour = 8;   // 8 AM
  const closeHour = 16;  // 4 PM
  const openTime = ref('8:00 AM');
  const closeTime = ref('4:00 PM');
  const isOpen = ref(false);
  const status = ref('Cerrado');
  const currentTime = ref(new Date());
  
  let timeInterval = null;
  
  // Computed properties
  const statusClass = computed(() => ({
    'status-open': isOpen.value,
    'status-closed': !isOpen.value
  }));
  
  const checkStatus = () => {
    const now = new Date();
    currentTime.value = now;
    const currentHour = now.getHours();
    
    // Check if it's weekend (Saturday = 6, Sunday = 0)
    const isWeekend = now.getDay() === 0 || now.getDay() === 6;
    
    if (isWeekend) {
      isOpen.value = false;
      status.value = 'Cerrado - Fin de semana';
    } else if (currentHour >= openHour && currentHour < closeHour) {
      isOpen.value = true;
      status.value = 'Abierto';
    } else {
      isOpen.value = false;
      status.value = 'Cerrado';
    }
  };
  
  onMounted(() => {
    checkStatus();
    // Update every 30 seconds
    timeInterval = setInterval(checkStatus, 30 * 1000);
  });
  
  onUnmounted(() => {
    if (timeInterval) {
      clearInterval(timeInterval);
    }
  });
  </script>
  
  <style scoped>
  /* Import Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;700&display=swap');
  
  .hours-container {
    display: flex;
    justify-content: center;
    margin: 8px 0;
  }
  
  .hours-card {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 14px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 25px;
    border: 1px solid rgba(255, 140, 0, 0.2);
    box-shadow: 
      0 4px 16px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .hours-card:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 8px 24px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      0 0 20px rgba(255, 140, 0, 0.1);
    border-color: rgba(255, 140, 0, 0.3);
  }
  
  .clock-icon {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(255, 140, 0, 0.2) 0%, rgba(255, 140, 0, 0.1) 100%);
    border-radius: 50%;
    color: #ff8c00;
    border: 1px solid rgba(255, 140, 0, 0.3);
  }
  
  .hours-text {
    font-family: 'Exo 2', sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    white-space: nowrap;
  }
  
  .status-badge {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 3px 10px;
    border-radius: 15px;
    font-family: 'Exo 2', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
  }
  
  .status-badge.status-open {
    background: rgba(255, 140, 0, 0.2);
    color: #ff8c00;
    border: 1px solid rgba(255, 140, 0, 0.4);
  }
  
  .status-badge.status-closed {
    background: rgba(255, 140, 0, 0.15);
    color: rgba(255, 140, 0, 0.932);
    border: 1px solid rgba(255, 140, 0, 0.3);
  }
  
  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
    transition: all 0.3s ease;
  }
  
  .status-dot.pulse {
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .hours-card {
      padding: 7px 12px;
      gap: 8px;
    }
    .clock-icon {
      width: 26px;
      height: 26px;
    }
    .hours-text {
      font-size: 0.9rem;
    }
    .status-badge {
      font-size: 0.75rem;
      padding: 2px 8px;
    }
  }
  
  @media (max-width: 480px) {
    .hours-card {
      padding: 6px 10px;
      gap: 6px;
    }
    .clock-icon {
      width: 24px;
      height: 24px;
    }
    .hours-text {
      font-size: 0.85rem;
    }
    .status-badge {
      font-size: 0.7rem;
      padding: 2px 6px;
    }
  }
  
  /* Animation for entrance */
  .hours-card {
    animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    opacity: 0;
    transform: translateY(20px);
  }
  
  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>