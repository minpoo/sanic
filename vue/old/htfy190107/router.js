import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/page.1.vue',
      name: 'page.1.vue',
      component: () => import( /* webpackChunkName: "about" */ './views/page.1.vue')
    },
    {
      path: '/page.2.vue',
      name: 'page.2.vue',
      component: () => import( /* webpackChunkName: "about" */ './views/page.2.vue')
    },
    {
      path: '/page.3.vue',
      name: 'page.3.vue',
      component: () => import( /* webpackChunkName: "about" */ './views/page.3.vue')
    },
    {
      path: '/page.4.vue',
      name: 'page.4.vue',
      component: () => import( /* webpackChunkName: "about" */ './views/page.4.vue')
    },
    {
      path: '/page.5.vue',
      name: 'page.5.vue',
      component: () => import( /* webpackChunkName: "about" */ './views/page.5.vue')
    },
  ]
})