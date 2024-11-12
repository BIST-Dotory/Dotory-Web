import { createWebHistory, createRouter } from 'vue-router'

import MainView from '../components/MainView.vue'
import HomeView from '../components/HomeView.vue'
import AboutView from '../components/AboutView.vue'

const routes = [
  { path: '/', component: MainView,
    children: [
      { path: '/home', component: HomeView },
      { path: '/about', component: AboutView },
    ]
   },
   { path: '/login', component: HomeView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router