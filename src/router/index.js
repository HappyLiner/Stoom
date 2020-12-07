import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/library',
    name: 'Library',
    component: () => import('../views/Library.vue')
  },
  {
    path: '/prof',
    name: 'Prof',
    component: () => import('../views/Prof.vue')
  },
  {
    path: '/prof/settings',
    name: 'profSettings',
    component: () => import('../views/profSettings.vue')
  },
  {
    path: '/prof/addGame',
    name: 'addGame',
    component: () => import('../views/addGame.vue')
  },
  {
    path: '/addProm',
    name: 'addProm',
    component: () => import('../views/addProm.vue')
  },
  {
    path: '/techSup',
    name: 'techSup',
    component: () => import('../views/TechSup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/Home/$GAMENAME',
    name: 'gamePage',
    component: () => import('../views/gamePage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
