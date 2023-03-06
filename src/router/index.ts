import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/course',
      name:'course',
      component: () =>import('../views/courseView.vue')
    },
    {
      path:'/shop',
      name:'shop',
      component: () =>import('../views/shopView.vue')
    },
    {
      path:'/home',
      name:'home',
      component: () =>import('../views/homeView.vue')
    },
    {
      path:'/aboutus',
      name:'aboutus',
      component: () =>import('../views/aboutusView.vue')
    },
    {
      path:'/works',
      name:'works',
      component: () =>import('../views/worksView.vue')
    }
  ]
})

export default router
