import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import Conversion from '@/views/CurrencyConversion.vue'
import {useUserStore} from '@/store/user.js'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }, 
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/calc',
    name: 'Calc',
    component: Conversion
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  const userStore=useUserStore();
  if (!userStore.username && to.name !== 'Login') {
    return { name: 'Login' }
  }
})
export default router
