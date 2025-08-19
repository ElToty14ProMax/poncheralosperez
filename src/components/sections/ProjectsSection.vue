<template>
    <section id="projects" class="projects-section">
      <h2>Mis Proyectos</h2>
      <div class="projects-container">
        <CardComponent 
          v-for="project in projects" 
          :key="project.id" 
          :project="project" 
        />
      </div>
    </section>
  </template>
  
  <script setup>
  import CardComponent from '@/components/ProjectCard.vue'

  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión Estudiantil',
      description: 'Plataforma completa para administrar estudiantes, cursos y matrículas con panel de control interactivo y reportes en tiempo real.',
      technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      demoLink: '#',
      codeLink: '#',
      watermark: 'VUE'
    },
    {
      id: 2,
      title: 'Tienda E-commerce',
      description: 'Solución completa de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración de productos.',
      technologies: ['React', 'Node.js', 'MySQL', 'JavaScript', 'Python'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      demoLink: '#',
      codeLink: '#',
      watermark: 'REACT'
    },
    {
      id: 3,
      title: 'The Weather – App del Tiempo',
      description: 'Consulta el clima actual y el pronóstico de tu ciudad con una interfaz limpia y responsive. Incluye búsqueda por ubicación y detalles como temperatura, humedad y viento.',
      technologies: ['Vue.js', 'Pinia', 'Bootstrap', 'OpenWeatherMap API'],
      image: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=800&q=80',
      demoLink: 'https://theweatherbyfrankgattorno.netlify.app/',
      codeLink: 'https://github.com/ElToty14ProMax/theWeather',
      watermark: 'WEATHER'
    }
  ]
  </script>
  
  <style scoped>
  .projects-section {
    padding: 80px 20px;
    background: linear-gradient(135deg, #1a2a6c, #2a4365, #4a5568);
    color: white;
    text-align: center;
  }
  
  .projects-section h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    background: linear-gradient(45deg, #4ade80, #3b82f6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  .projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    max-width: 900px; /* Reduced width */
    margin: 0 auto;
  }
  </style>
  