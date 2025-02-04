import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Missing from '../views/Missing.vue'
import Info from '../views/Info.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'ProfileMain',
    component: Profile
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
    children: [ // nested routes
      // /profile/12/info
      {
        path: '/:id/info', // each child has its own component
        name: 'Info',
        component: Info
      }
    ]
  },
  {
    path: '*',
    component: Missing
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
