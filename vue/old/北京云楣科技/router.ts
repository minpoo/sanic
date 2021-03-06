import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import axios from "axios";



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/page1',
      name: 'page1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/page1.vue')
    },
    {
      path: '/page2',
      name: 'page2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/page2.vue')
    },
    {
      path: '/page3',
      name: 'page3',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/page3.vue')
    },
		{
		  path: '/page4',
		  name: 'page4',
		  // route level code-splitting
		  // this generates a separate chunk (about.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "about" */ './views/page4.vue')
		},
		{
		  path: '/page5',
		  name: 'page5',
		  // route level code-splitting
		  // this generates a separate chunk (about.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "about" */ './views/page5.vue')
		},
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/register.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/login.vue')
    },
		{
		  path: '/c',
		  name: 'c',
		  // route level code-splitting
		  // this generates a separate chunk (about.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "about" */ './views/c/c.vue')
		},
		{
		  path: '/c2',
		  name: 'c2',
		  // route level code-splitting
		  // this generates a separate chunk (about.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "about" */ './views/c/c2.vue')
		},
		{
		  path: '/c3',
		  name: 'c3',
		  // route level code-splitting
		  // this generates a separate chunk (about.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "about" */ './views/c/c3.vue')
		},
		{
		  path: '/c4',
		  name: 'c4',
		  // route level code-splitting
		  // this generates a separate chunk (about.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "about" */ './views/c/c4.vue')
		},
		{
		  path: '/c5',
		  name: 'c5',
		  // route level code-splitting
		  // this generates a separate chunk (about.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "about" */ './views/c/c5.vue')
		},
		{
		  path: '/c6',
		  name: 'c6',
		  // route level code-splitting
		  // this generates a separate chunk (about.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "about" */ './views/c/c6.vue')
		},
		{
		  path: '/c7',
		  name: 'c7',
		  // route level code-splitting
		  // this generates a separate chunk (about.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "about" */ './views/c/c7.vue')
		},
		{
		  path: '/c8',
		  name: 'c8',
		  // route level code-splitting
		  // this generates a separate chunk (about.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "about" */ './views/c/c8.vue')
		},
		{
		  path: '/c9',
		  name: 'c9',
		  // route level code-splitting
		  // this generates a separate chunk (about.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "about" */ './views/c/c9.vue')
		},
		{
		  path: '/c10',
		  name: 'c10',
		  // route level code-splitting
		  // this generates a separate chunk (about.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "about" */ './views/c/c10.vue')
		},
  ]
})
