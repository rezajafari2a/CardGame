import { createRouter, createWebHistory } from 'vue-router'
import MainGame from '../views/MainGame.vue'

const routes = [
  {
    path: '/',
    name: 'MainGame',
    component: MainGame
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
