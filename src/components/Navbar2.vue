<template>
    <div>
        <b-navbar type="dark" class="bc-white bx-shadow" fixed="top">
          <div class="container">            
            
            <nav class="nav-menu me-auto">
                <router-link to="/home"><img src="../assets/img/logo-full.png" width="120"></router-link>
            </nav>

            
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
