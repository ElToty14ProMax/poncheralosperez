import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Importar estilos CSS - eliminar duplicados
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Crear y montar la aplicación
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')

// Importar JavaScript de Bootstrap después de montar la aplicación
import 'bootstrap/dist/js/bootstrap.bundle.min.js'