import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LaporPenipuan from '../views/LaporPenipuan.vue'
import Welcome from '../views/Welcome.vue'
import Artikel from '../views/Artikel.vue'
import MyArtikel from '../views/MyArtikel.vue'
import Pelaporan from '../views/Pelaporan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Beranda',
    component: Home
  },
  {
    path: '/login',
    name: 'Masuk',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/login/lupaPassword',
    name: 'Lupa Password',
    component: () => import(/* webpackChunkName: "about" */ '../views/lupaPassword.vue')
  },
  {
    path: '/register',
    name: 'Daftar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/policy/term',
    name: 'Syarat dan Ketentuan',
    component: () => import(/* webpackChunkName: "about" */ '../views/Term.vue')
  },
  {
    path: '/policy/privacy',
    name: 'Kebijakan Privasi',
    component: () => import(/* webpackChunkName: "about" */ '../views/Privacy.vue')
  },
  {
    path: '/policy/contact',
    name: 'Hubungi Kami',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/cekpelaporan/:type',
    name: 'Cek Pelaporan',
    component: () => import(/* webpackChunkName: "about" */ '../views/CekPelaporan.vue')
  },
  {
    path: '/lapor/:type',
    name: 'Lapor Penipuan',
    component : LaporPenipuan,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/myreport/:type',
    name: 'Laporan Saya',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyReport.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/checkphone/:nohp',
    name: 'CekPhone',
    component: () => import(/* webpackChunkName: "about" */ '../views/CheckPhone.vue')
  },  
  {
    path: '/checkrekening/:norekening',
    name: 'Cek Rekening',
    component: () => import(/* webpackChunkName: "about" */ '../views/CheckRekening.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profil.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/pelaporan',
    name: 'Pelaporan',
    component:Pelaporan,
    meta:{
      requiresAuth:true
    }
  },
  // {
  //   path:'/pelaporan',
  //   component:Pelaporan,
  //   meta:{
  //     requiresAuth:true
  //   },
  //   children:[
  //     {
  //       path:':id',
  //       component:Laporkan,
  //       props:true
  //     }
  //   ]

  // },
  {
    path: '/artikel',
    name: 'Artikel',
    component: Artikel
  },  
  {
    path: 'artikel/myartikel',
    name: 'MyArtikel',
    component: MyArtikel,
    meta:{
      requiresAuth:true
    }
  },
  // {
  //   path:'/artikel',
  //   component:Artikel,
  //   children:[
  //     {
  //       path:':id',
  //       component:MyArtikel,
  //       props:true
  //     }
  //   ]

  // },
  {
    path: 'artikel/inputartikel',
    name: 'InputArtikel',
    component: () => import(/* webpackChunkName: "about" */ '../views/InputArtikel.vue'),
    meta:{
      requiresAuth:true
    }
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

router.beforeEach((to, from, next) => {
  const cekStorage=JSON.parse(localStorage.getItem('fishcek'));
  if(to.matched.some(record=> record.meta.requiresAuth)) {
        
        if (cekStorage.auth.token=='') {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
          next()
        }
    }else {
        next()
    }
    let namePage=''
    if (to.name=='Home'||to.name=='Beranda') {
      namePage=`Situs Pelaporan Penipuan Dunia Perikanan | ${process.env.VUE_APP_TITLE}`
    }else if(to.name=='Page Not Found'){
      namePage=`${to.name}`
    }
    else{
      namePage=`${process.env.VUE_APP_TITLE} | ${to.name}`
    }
    document.title=namePage
    next()
  })

export default router
