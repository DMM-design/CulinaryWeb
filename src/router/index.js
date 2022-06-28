import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeInformationView from '@/views/RecipeInformationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:titlerecipe/:id',
      name: 'recipeMoreInformation',
      component: RecipeInformationView
    }
  ]
})

export default router
