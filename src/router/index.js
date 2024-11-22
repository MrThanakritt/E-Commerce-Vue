import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/user/HomeView.vue'
import SerachView from '@/views/user/SearchView.vue'
import ProfileView from '@/views/user/ProfileView.vue'
import CheckoutView from '@/views/user/CheckoutView.vue'
import SuccessView from '@/views/user/SuccessView.vue'
import Cartview from '@/views/user/Cartview.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/search',
      name: 'search',
      component: SerachView,
    }, 
    {
      path: '/card',
      name: 'card',
      component: Cartview,
    }, 
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView,
    }, 
    {
      path: '/success',
      name: 'success',
      component: SuccessView,
    }, 
  ],
})

export default router
