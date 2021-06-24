import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LaporPenipuan from '../views/LaporPenipuan.vue'
import Welcome from '../views/Welcome.vue'
import CekPelaporan from '../views/CekPelaporan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Beranda',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/cekpelaporan/:type',
    name: 'CekPelaporan',
    component : CekPelaporan
    
  },
  {
    path: '/lapor/:type',
    name: 'LaporPenipuan',
    component : LaporPenipuan
  },
  {
    path: '/myreport/:type',
    name: 'LaporanSaya',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyReport.vue')
  },
  {
    path: '/checkphone/:nohp',
    name: 'CekPhone',
    component: () => import(/* webpackChunkName: "about" */ '../views/CheckPhone.vue')
  },  
  {
    path: '/checkrekening/:norekening',
    name: 'CekRekening',
    component: () => import(/* webpackChunkName: "about" */ '../views/CheckRekening.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profil.vue')
  },
  {
    path: '/pelaporan',
    name: 'Pelaporan',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pelaporan.vue')
  },
  {
    path: '/artikel',
    name: 'Artikel',
    component: () => import(/* webpackChunkName: "about" */ '../views/Artikel.vue')
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component : Welcome
  },
  {
    path : '*',
    name : 'Page Not Found',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
