import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DetailArtikel from '../views/DetailArtikel.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail_artikel',
    name: 'DetailArtikel',
    component: DetailArtikel
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
