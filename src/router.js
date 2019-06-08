import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import Route3 from './views/Route3.vue'
import Route4 from './views/Route4.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/route3',
      name: 'route3',
      component: Route3
    },
    {
      path: '/route4',
      name: 'route4',
      component: Route4
    }
  ]
})
