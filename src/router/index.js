import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/prices',
    name: 'prices',
    component: () => import('@/views/PricesView.vue')
  },
  {
    path: '/home',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return new Promise((resolve) => {
        // Espera 2 frames para que se estabilice la altura del navbar animado
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const el = document.querySelector(to.hash)
            if (el) {
              const styles = getComputedStyle(document.documentElement)
              const base = parseInt(styles.getPropertyValue('--navbar-offset')) || 100
              const extra = parseInt(styles.getPropertyValue('--navbar-offset-extra')) || 12
              const yOffset = base + extra
              const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset
              window.scrollTo({ top: y, behavior: 'smooth' })
            }
            resolve()
          })
        })
      })
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router