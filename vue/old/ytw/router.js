import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/about.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( /* webpackChunkName: "about" */ './views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import( /* webpackChunkName: "about" */ './views/register.vue')
    },
    {
      path: '/paidNews',
      name: 'paidNews',
      component: () => import( /* webpackChunkName: "about" */ './views/paidNews.vue')
    },
    {
      path: '/vip',
      name: 'vip',
      component: () => import( /* webpackChunkName: "about" */ './views/vip.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import( /* webpackChunkName: "about" */ './views/contact.vue')
    },
    {
      path: '/a1',
      name: 'a1',
      component: () => import( /* webpackChunkName: "about" */ './views/c/a1.vue')
    },
    {
      path: '/a2',
      name: 'a2',
      component: () => import( /* webpackChunkName: "about" */ './views/c/a2.vue')
    },
    {
      path: '/a3',
      name: 'a3',
      component: () => import( /* webpackChunkName: "about" */ './views/c/a3.vue')
    },
    {
      path: '/a4',
      name: 'a4',
      component: () => import( /* webpackChunkName: "about" */ './views/c/a4.vue')
    },
    {
      path: '/a5',
      name: 'a5',
      component: () => import( /* webpackChunkName: "about" */ './views/c/a5.vue')
    },
    {
      path: '/a6',
      name: 'a6',
      component: () => import( /* webpackChunkName: "about" */ './views/c/a6.vue')
    },
    {
      path: '/a7',
      name: 'a7',
      component: () => import( /* webpackChunkName: "about" */ './views/c/a7.vue')
    },
    {
      path: '/a8',
      name: 'a8',
      component: () => import( /* webpackChunkName: "about" */ './views/c/a8.vue')
    },
    {
      path: '/a9',
      name: 'a9',
      component: () => import( /* webpackChunkName: "about" */ './views/c/a9.vue')
    },
    {
      path: '/a10',
      name: 'a10',
      component: () => import( /* webpackChunkName: "about" */ './views/c/a10.vue')
    },
    {
      path: '/lg',
      name: 'lg',
      component: () => import( /* webpackChunkName: "about" */ './views/lg.vue')
    },
   
  ]
})