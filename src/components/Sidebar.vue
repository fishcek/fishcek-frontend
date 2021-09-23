<template>
    <div>
        <b-navbar type="dark" class="bc-white bx-shadow" fixed="top">
          <div class="container">
            <button class="btn-cs btn-cs-blue-outline" v-b-toggle.sidebar-no-header>
              <b-icon icon="chevron-double-right" class="fs-15" style="font-weight: 600;"></b-icon>
            </button>
            <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
              <template #default="{ hide }">
                <div class="sidebar-header">
                  <div class="sidebar-header-left">
                    <b-navbar-brand href="#" >
                      <img @click="goHome()" src="../assets/img/logo-full.png" class="nav-img" >
                    </b-navbar-brand>
                  </div>
                  <div class="sidebar-header-right">
                    <b-icon icon="chevron-double-left" class="btn-cs-icon btn-cs-txt-blue" aria-hidden="true" @click="hide" style="cursor:pointer;"></b-icon>
                  </div>
                </div>
                <div class="p-3">
                  <nav class="mb-3">
                    <b-nav vertical>
                      <div class="nav-vertical">
                        <span class="text-muted fs-12">Layanan</span>
                        <hr class="dashed">
                        <b-nav-item v-b-toggle.collapse-a id="bcollapse-a" @click="onFocus('a')">Laporkan Penipuan</b-nav-item>                     
                        <b-collapse id="collapse-a" class="collapse-menu" >
                          <b-nav-item to="/lapor/notelepon" @click="hide">Nomor Telepon</b-nav-item>
                          <b-nav-item to="/lapor/norekening" @click="hide">Nomor Rekening</b-nav-item>
                        </b-collapse>
                        <b-nav-item v-b-toggle.collapse-b id="bcollapse-b" @click="onFocus('b')">Laporan Saya</b-nav-item>                     
                        <b-collapse id="collapse-b" class="collapse-menu">
                          <b-nav-item to="/myreport/notelepon" @click="hide, onFocus('c')">Nomor Telepon</b-nav-item>
                          <b-nav-item to="/myreport/norekening" @click="hide, onFocus('c')">Nomor Rekening</b-nav-item>
                        </b-collapse>
                        <br>
                        <span class="text-muted fs-12">Member</span>
                        <hr class="dashed">
                        <b-nav-item to="/profil" @click="hide, onFocus('c')">Profil</b-nav-item>
                        <b-nav-item to="artikel/myartikel" @click="hide">Artikel Saya</b-nav-item>
                        <b-nav-item to="artikel/inputartikel" @click="hide">Buat Artikel</b-nav-item>
                      </div>
                    </b-nav>
                  </nav>
                </div>
              </template>
            </b-sidebar>

            
              <nav class="nav-menu me-auto">
                <b-navbar-nav>                  
                  <!-- put your list menu here -->
                </b-navbar-nav>
              </nav>

              <div v-if="guest==0" class="nav-right">
                <router-link to="/login"><button class="btn-cs btn-cs-blue m-r-10">Login</button></router-link>
                 <router-link to="/register"><button class="btn-cs btn-cs-blue">Register</button></router-link>
              </div>
              <div v-else>
                <div class="notif-dropdown">
                  <b-nav-item-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
                      <template #button-content>
                        <b-icon icon="app-indicator" class="notif-icon" style="font-weight"></b-icon>
                      </template>
                      <b-dropdown-item to="">Notification</b-dropdown-item>
                  </b-nav-item-dropdown>
                </div>
                <div class="profil-dropdown">
                  <b-nav-item-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
                      <template #button-content>
                        <img src="../assets/img/dumuser.png" rounded="circle" alt="Image 2">
                      </template>
                      <b-dropdown-item to="/profil">Profil</b-dropdown-item>
                      <b-dropdown-item to="/pelaporan">Buat Pelaporan</b-dropdown-item>
                      <b-dropdown-item><router-link to="artikel/myartikel"> My Artikel </router-link></b-dropdown-item>
                      <!-- <b-dropdown-item to="/transaksi">Transaksi</b-dropdown-item> -->
                      <b-dropdown-item @click="logout">Logout</b-dropdown-item>
                  </b-nav-item-dropdown>
                </div>
              </div>            
          </div>
        </b-navbar>
    </div>
    
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed:{
    ...mapGetters({
      token:'auth/token',
      guest:'auth/guest'
    })
  },
  methods:{
    logout(){
      // let config = {
      //     method : 'post',
      //     url : "https://fishcek.herokuapp.com/api/v1/logout",
      //     headers : {
      //         'Authorization':'Bearer '+this.token,
      //     },
      //   }
      // this.axios(config)
      // .then((response)=>{
      //   console.log(response)
      //   this.setToken('')
      // })
      // .catch((response) => {
      //   console.log(response)
      // })
    },
    ...mapActions({
      setToken:'auth/setToken' 
    }),
    goHome(){
      this.$router.push('/home');
    },
    onFocus(nav){
      if(nav=='a'){
        document.getElementById('bcollapse-a').classList.add("bg-focus");
        document.getElementById('bcollapse-b').classList.remove("bg-focus");
      }else if(nav=='b'){
        document.getElementById('bcollapse-b').classList.add("bg-focus");
        document.getElementById('bcollapse-a').classList.remove("bg-focus");
      }else{
        document.getElementById('bcollapse-a').classList.remove("bg-focus");
        document.getElementById('bcollapse-b').classList.remove("bg-focus");
      }
    }
  }
  
}
</script>
