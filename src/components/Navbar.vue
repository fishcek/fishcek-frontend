<template>
    <div>
        <header class="nav-bar">
            <router-link to="/home" ><img src="../assets/img/logo-full.png" class="nav-logo" ></router-link>
            <nav>
                <ul class="nav-links">
                    <li>
                        <button class="btn-txt" @click="menuDropdown()" > Cek Pelaporan</button>
                    </li>
                        <div id="nav-dropdown" class="nav-dropdown-content ">
                            <router-link to="/cekpelaporan/notelepon">Telepon</router-link>
                            <router-link to="/cekpelaporan/norekening">Rekening</router-link>
                        </div>
                    <li><router-link to="/rekan">ReKAn</router-link></li>
                    <li><router-link to="/artikel">Artikel</router-link></li>
                </ul>                
            </nav>
            <div class="nav-btn" v-if="guest==0">
                <router-link to="/register"><button class="btn-cs-regis">Register</button></router-link>
                <router-link to="/login"><button class="btn-cs-login btn-cs-blue">
                    <b-icon icon="person-fill" ></b-icon> Login
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
                    <b-nav-item-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
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
        </header>
        
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
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
        ...mapActions({
            setToken:'auth/setToken'
        }),
        logout(){
            this.setToken('')
        }


    }
}
</script>