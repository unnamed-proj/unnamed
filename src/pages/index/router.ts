import { createRouter, createWebHistory } from 'vue-router'
import IndexView from "../../views/IndexView.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../../views/AboutView.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../../views/NotFound.vue') },
  ]
})

export default router
