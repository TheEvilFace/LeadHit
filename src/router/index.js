import Vue from 'vue'
import VueRouter from 'vue-router'
import Analytics from '@/views/AnalyticsPage.vue'
import store from '@/store/index'
import AuthPage from "@/views/AuthPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'analytics',
    meta: {
      requiresAuth: true
    },
    component: Analytics
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log(!store.getters.token)
    if (!store.getters.token) {
      next({ name: 'auth' })
    } else {
      next() 
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router
