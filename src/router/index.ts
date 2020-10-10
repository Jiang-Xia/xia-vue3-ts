import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import home from '@/router/modules/home'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    redirect: '/home'
  }
  // {
  //   path: '/index',
  //   name: 'Index',
  //   component: '',
  //   props: true,
  //   meta: {
  //     title: '首页',
  //     role: 'normal'
  //   }
  // },
  home
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
