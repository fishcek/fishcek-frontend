<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="bc-white bx-shadow" fixed="top">
          <div class="container">
            <b-navbar-brand href="#">
              <img @click="goHome()" src="../assets/img/logo-full.png" class="nav-img" >
            </b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
              
              <nav class="nav-menu me-auto">
                <b-navbar-nav>
                  
                  <b-nav-item href="#" class="text-dark"><router-link to="/home">Beranda</router-link></b-nav-item>
                  <b-nav-item-dropdown text="Cek Penipuan" variant="primary" no-caret>
                    <b-dropdown-item to="/cekpelaporan/notelepon">Telepon</b-dropdown-item>
                    <b-dropdown-item to="/cekpelaporan/norekening">Rekening</b-dropdown-item>
                  </b-nav-item-dropdown>                  

                  <b-nav-item href="#" class="text-dark"><router-link to="/rekan">RekAn</router-link></b-nav-item>
                  <b-nav-item href="#" class="text-dark"><router-link to="/artikel">Artikel</router-link></b-nav-item>
                  <b-nav-item>
                    <template #default="{ expanded }">
                      <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                      <b-icon v-else icon="chevron-bar-down"></b-icon>
                    </template>
                  </b-nav-item>
                </b-navbar-nav>
              </nav>              
            </b-collapse>
              <div v-if="guest==0" class="nav-right">
                <router-link to="/login"><button class="btn-cs btn-cs-blue m-r-10">Login</button></router-link>
                 <router-link to="/register"><button class="btn-cs btn-cs-blue">Register</button></router-link>
              </div>
              <div v-else class="nav-right">
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
                      <b-dropdown-item to="/pelaporan">Buat Laporan</b-dropdown-item>
                      <!-- <b-dropdown-item to="/transaksi">Transaksi</b-dropdown-item> -->
                      <b-dropdown-item @click="logout">Logout</b-dropdown-item>
                  </b-nav-item-dropdown>
                </div>
              </div>
              
            <b-navbar-toggle target="nav-collapse" class="text-dark">
              <template #default="{ expanded }">
              <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
              <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>

            </b-navbar-toggle>
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
      let config = {
          method : 'post',
          url : "https://fishcek.herokuapp.com/api/v1/logout",
          headers : {
              'Authorization':'Bearer '+this.token,
          },
        }
      this.axios(config)
      .then((response)=>{
        console.log(response)
        this.setToken('')
      })
      .catch((response) => {
        console.log(response)
      })
    },
    ...mapActions({
      setToken:'auth/setToken' 
    }),
    onOver() {
      this.$refs.dropdown.visible = true;
    },
    onLeave() {
      this.$refs.dropdown.visible = false;
    },
    goHome(){
      this.$router.push('/');
    }
  },
  
}
</script>
