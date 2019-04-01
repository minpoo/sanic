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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/about.vue')
    },
    {
      path: '/serve',
      name: 'serve',
      component: () => import(/* webpackChunkName: "serve" */ './views/serve.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import(/* webpackChunkName: "news" */ './views/news.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import(/* webpackChunkName: "add" */ './views/add.vue')
    },
    {
      path: '/study',
      name: 'study',
      component: () => import(/* webpackChunkName: "study" */ './views/study.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/contact.vue')
    },
    {
      path: '/serch',
      name: 'serch',
      component: () => import(/* webpackChunkName: "serch" */ './views/serch.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "serch" */ './views/admin.vue')
    },
    {
      path: '/backstage',
      name: 'backstage',
      component: () => import(/* webpackChunkName: "serch" */ './views/backstage.vue')
    },
    {
      path: '/list/hydt',
      name: 'hydt',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/hydt.vue')
    },
    {
      path: '/blank',
      name: 'blank',
      component: () => import(/* webpackChunkName: "serch" */ './views/blank.vue')
    },
    {
      path: '/list/hrshow',
      name: 'hrshow',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/hrshow.vue')
    },
    {
      path: '/list/organization',
      name: 'organization',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/organization.vue')
    },
    {
      path: '/list/certification',
      name: 'certification',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/certification.vue')
    },
    {
      path: '/list/culture',
      name: 'culture',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/culture.vue')
    },
    {
      path: '/list/area-detail-1',
      name: 'area-detail-1',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/area-detail-1.vue')
    },
    {
      path: '/list/n3b',
      name: 'n3b',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/n3b.vue')
    },
    {
      path: '/list/customer',
      name: 'customer',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/customer.vue')
    },
    {
      path: '/list/area-detail-2',
      name: 'area-detail-2',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/area-detail-2.vue')
    },
    {
      path: '/list/area-detail-3',
      name: 'area-detail-3',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/area-detail-3.vue')
    },
    {
      path: '/list/area-detail-4',
      name: 'area-detail-4',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/area-detail-4.vue')
    },
    {
      path: '/list/area-detail-5',
      name: 'area-detail-5',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/area-detail-5.vue')
    },
    {
      path: '/list/area-detail-6',
      name: 'area-detail-6',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/area-detail-6.vue')
    },
    {
      path: '/list/area-detail-7',
      name: 'area-detail-7',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/area-detail-7.vue')
    },
    {
      path: '/list/area-detail-8',
      name: 'area-detail-8',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/area-detail-8.vue')
    },
    {
      path: '/list/area-detail-9',
      name: 'area-detail-9',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/area-detail-9.vue')
    },
    {
      path: '/list/area-detail-10',
      name: 'area-detail-10',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/area-detail-10.vue')
    },
    {
      path: '/list/contactC1',
      name: 'contactC1',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/contactC1.vue')
    },
    {
      path: '/list/studyC1',
      name: 'studyC1',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/studyC1.vue')
    },
    {
      path: '/list/studyC2',
      name: 'studyC2',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/studyC2.vue')
    },
    {
      path: '/list/addC1',
      name: 'addC1',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/addC1.vue')
    },
    {
      path: '/list/addC2',
      name: 'addC2',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/addC2.vue')
    },
    {
      path: '/list/addC3',
      name: 'addC3',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/addC3.vue')
    },
    {
      path: '/list/addC4',
      name: 'addC4',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/addC4.vue')
    },
    {
      path: '/list/zpC1',
      name: 'zpC1',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/zpC1.vue')
    },
    {
      path: '/list/zpC2',
      name: 'zpC2',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/zpC2.vue')
    },
    {
      path: '/list/zpC3',
      name: 'zpC3',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/zpC3.vue')
    },
    {
      path: '/list/zpC4',
      name: 'zpC4',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/zpC4.vue')
    },
    {
      path: '/list/zpC5',
      name: 'zpC5',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/zpC5.vue')
    },
    {
      path: '/list/zpC6',
      name: 'zpC6',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/zpC6.vue')
    },
    {
      path: '/list/zpC7',
      name: 'zpC7',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/zpC7.vue')
    },
    {
      path: '/list/zpC8',
      name: 'zpC8',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/zpC8.vue')
    },
    {
      path: '/list/zpC9',
      name: 'zpC9',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/zpC9.vue')
    },
    {
      path: '/list/zpA1',
      name: 'zpA1',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/zpA1.vue')
    },
    {
      path: '/list/zpA2',
      name: 'zpA2',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/zpA2.vue')
    },
    {
      path: '/list/zpA3',
      name: 'zpA3',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/zpA3.vue')
    },
    {
      path: '/list/zpA4',
      name: 'zpA4',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/zpA4.vue')
    },
    {
      path: '/list/sxA1',
      name: 'sxA1',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/sxA1.vue')
    },
    {
      path: '/list/sxA2',
      name: 'sxA2',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/sxA2.vue')
    },
    {
      path: '/list/sxA3',
      name: 'sxA3',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/sxA3.vue')
    },
    {
      path: '/list/sxA4',
      name: 'sxA4',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/sxA4.vue')
    },
    {
      path: '/list/sxS1',
      name: 'sxS1',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/sxS1.vue')
    },
    {
      path: '/list/sxS2',
      name: 'sxS2',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/sxS2.vue')
    },
    {
      path: '/list/sxS3',
      name: 'sxS3',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/sxS3.vue')
    },
    {
      path: '/list/sxS4',
      name: 'sxS4',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/sxS4.vue')
    },
    {
      path: '/list/sxS5',
      name: 'sxS5',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/sxS5.vue')
    },
    {
      path: '/list/sxS6',
      name: 'sxS6',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/sxS6.vue')
    },
    {
      path: '/list/sxS7',
      name: 'sxS7',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/sxS7.vue')
    },
    {
      path: '/list/blankSerch',
      name: 'blankSerch',
      component: () => import(/* webpackChunkName: "serch" */ './views/list/blankSerch.vue')
    },
    
  ]
})
