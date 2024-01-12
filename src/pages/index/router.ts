import { createRouter, createWebHistory } from 'vue-router'
import IndexView from "../../views/IndexView.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: '//',
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
    {
      path: '/support',
      name: 'support',
      component: () => import('../../views/SupportView.vue')
    },
    {
      path: '/',
      name: 'auth',
      children: [
        {
          path: '/portal',
          name: 'portal',
          component: () => import('../../views/auth/PortalView.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../../views/auth/RegisterView.vue')
        },
        {
          path: '/join/:id',
          name: 'first-register',
          component: () => import('../../views/auth/RegisterFirstView.vue')
        },
      ],
      beforeEnter: (to,from,next) => {
        const TO = to;
        const FROM = from;
        TO;
        FROM;

        if (localStorage.getItem("token")){
          const queryString = window.location.search;
          const params = new URLSearchParams(queryString);
          if (params.get('redirect_uri')) {
            location.replace(`${params.get('redirect_uri')}`);
          }else router.replace("/");
        }


        next();
      }
    },
    {
      path: '/reset',
      name: 'resetpassword',
      component: () => import('../../views/auth/ResetPasswordView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../../views/auth/LogoutView.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../../views/NotFound.vue') },
  ]
})

export default router
