import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import demo1 from './components/demo1.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutvue',
      name: 'aboutasd',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:  /* webpackChunkName: "about" */ About,
      children: [{
        path: '/child',
        name: 'child',
        component: demo1
      }]

    }
  ]
})