<template>
    <div>
        <b-navbar type="dark" class="bc-white bx-shadow" fixed="top">
          <div class="container">
            <button class="btn-cs btn-cs-blue-outline mobileToggle" v-b-toggle.sidebar-no-header>
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
                  <div class="sidebar-header-right f-s-14">
                    <b-icon icon="chevron-double-left" class="btn-cs-icon btn-cs-txt-blue" aria-hidden="true" @click="hide" style="cursor:pointer;"></b-icon>
                  </div>
                </div>
                <div class="p-3">
                  <nav class="mb-3">
                    <b-nav vertical>
                      <div class="nav-vertical">
                        <span class="text-muted fs-12">Layanan</span>
                        <hr class="dashed">
                        <b-nav-item v-b-toggle.collapse-a id="bcollapse-a">Cek Pelaporan</b-nav-item>                     
                        <b-collapse id="collapse-a" class="collapse-menu" >
                          <b-nav-item to="/cekpelaporan/notelepon" @click="hide">Telepon</b-nav-item>
                          <b-nav-item to="/cekpelaporan/norekening" @click="hide">Rekening</b-nav-item>
                        </b-collapse>
                        <b-nav-item v-b-toggle.collapse-b id="bcollapse-b">Laporan Saya</b-nav-item>                     
                        <b-collapse id="collapse-b" class="collapse-menu">
                          <b-nav-item to="/myreport/notelepon" @click="hide">Nomor Telepon</b-nav-item>
                          <b-nav-item to="/myreport/norekening" @click="hide">Nomor Rekening</b-nav-item>
                        </b-collapse>
                        <br>
                        <span class="text-muted fs-12">Member</span>
                        <hr class="dashed">
                        <b-nav-item to="/profil" @click="hide">Profil</b-nav-item>
                        <b-nav-item to="/myartikel" @click="hide">Artikel Saya</b-nav-item>
                      </div>
                    </b-nav>
                  </nav>
                </div>
              </template>
            </b-sidebar>
            
            <nav class="nav-menu me-auto">
                <b-navbar-nav>                 
                    <b-navbar-brand  to="/home" ><img src="../assets/img/logo-full.png" width="100" class="nav-img"></b-navbar-brand>
                    <div class="menuDesktop">
                      <b-nav-item><router-link to="/rekan">ReKAn</router-link></b-nav-item>
                      <b-nav-item><router-link to="/artikel">Artikel</router-link></b-nav-item>
                      <b-nav-item-dropdown text="Cek Pelaporan" right no-caret>
                          <b-dropdown-item><router-link to="/cekpelaporan/notelepon">Telepon</router-link></b-dropdown-item>
                          <b-dropdown-item><router-link to="/cekpelaporan/norekening">Rekening</router-link></b-dropdown-item>
                      </b-nav-item-dropdown>
                    </div>
                </b-navbar-nav>
            </nav>

            <div class="navDesktop">
                <div class="nav-btn" v-if="guest==0">
                    <router-link to="/register"><button class="btn-cs-regis">Daftar</button></router-link>
                    <router-link to="/login"><button class="btn-cs-login btn-cs-blue">
                        Masuk
                    </button></router-link>
                </div>
                <div class="nav-btn" v-else>                
                    <div class="notif-dropdown">
                        <b-nav-item-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
                            <template #button-content>
                                <b-icon icon="app-indicator" class="notif-icon" style="font-weight"></b-icon>
                            </template>
                            <b-dropdown-item to="">Notifikasi</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </div>
                    <div class="profil-dropdown">
                        <b-nav-item-dropdown variant="link" toggle-class="text-decoration-none" no-caret left>
                            <template #button-content>
                                <img src="../assets/img/dumuser.png" rounded="circle" alt="Image 2">
                                <!-- <span class="username">Username</span> -->
                            </template>
                            <b-dropdown-item><router-link to="/profil"> Profil </router-link></b-dropdown-item>
                            <b-dropdown-item><router-link to="/pelaporan"> Buat Laporan </router-link></b-dropdown-item>
                            <!-- <b-dropdown-item to="/transaksi">Transaksi</b-dropdown-item> -->
                            <b-dropdown-item @click="logout">Logout</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </div>
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
    menuDropdown(){
            document.getElementById("nav-dropdown").classList.toggle("show")
    },
    logout(){
      var token = '';
      this.setToken(token)
      this.$router.push('/login')
    },
    ...mapActions({
      setToken:'auth/setToken' 
    }),
    goHome(){
      this.$router.push('/home');
    }
  },
  
}
</script>
