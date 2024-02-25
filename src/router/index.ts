import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowTable from '../views/ShowTable.vue'
const router  = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/loginsPage.vue') // Update this line
    },
    {
      path: '/show_table',
      name : 'show_table',
      component : ShowTable

    }
  ]
})

export default router
