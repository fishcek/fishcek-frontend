<template>
  <div class="home">
    <div class="container-fuild">
        <div class="limiter">
          <div class="container-login-register">
            <div class="wrap-login-register">              
              <div class="login-register-pic">
                <img src="../assets/img/logo.png" class="login-img" alt="IMG">
              </div>
      
              <div class="login-register-form">
                <span class="login-register-form-title">
                  Lupa Password <span class="login-register-form-title-detail"><router-link to="/home">Fishcek</router-link></span>
                </span>
                <form @submit.prevent="prosesForgetPassword()" ref="form">
                  <div class="wrap-input-form" data-validate = "Valid email is required: ex@abc.xyz">
                    <div class="form-group">
                      <input type="email" class="form-control" name="emailTerdaftar" placeholder="Email Terdaftar" v-model="emailTerdaftar">
                    </div>
                  </div>
                  <div class="wrap-input-form" data-validate = "Valid email is required: ex@abc.xyz">
                    <div class="form-group">
                      <input type="number" min="0" class="form-control" name="otp" placeholder="Kode OTP" v-model="kodeOtp">
                    </div>
                    <p class="fs-10 text-center">Periksa kotak masuk atau spam pada email untuk mendapatkan kode OTP</p>
                  </div>

                  <div class="wrap-input-form" data-validate = "Valid email is required: ex@abc.xyz">
                    <div class="form-group">
                      <input type="password" class="form-control" name="passwordBaru" placeholder="Password Baru" v-model="passwordBaru">
                    </div>
                  </div>

                  <div class="container-login-register-btn">
                    <input type="submit" class="btn-cs-form btn-cs-blue-outline m-t-15" value="Reset">
                  </div>
                </form> 
                  
                  <div class="text-center fs-12 m-t-10">
                    Belum Punya Akun ? <router-link :to="'/register'">Daftar Disini</router-link>
                      <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <footer id="footer-login-register">  
      <div class="container footer-bottom clearfix">
        <div class="copyright">
          <strong><span>Copyright</span></strong> &copy; 2021 <router-link :to="'/'">Fishcek</router-link>
        </div>
        <div class="credits">
          <div class="icon"><b-icon icon="code-slash" style="font-weight"></b-icon> With <b-icon icon="heart-fill" variant="danger"></b-icon> in Bandung, Indonesia</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'Home',
  data: () => ({
    email : '',
    password : '',
    forget:'0',
    emailTerdaftar : '',
    kodeOtp : '',
    passwordBaru : '',
  }),
  computed:{
    ...mapGetters({
      token : 'auth/token'
    })
  },
  methods : {
    cekForm(){

    },
    clearForm(){
      this.email = '',
      this.password = ''
    },
    ...mapActions({
      setToken : 'auth/setToken',
      setGuest : 'auth/setGuest'
    }),
    prosesForgetPassword(){
      this.$router.push('/login')
    }
    // login(){
    //   let dataLogin = new FormData()
    //   dataLogin.append('email', this.email)
    //   dataLogin.append('password', this.password)

    //   let config = {
    //       method : "post",
    //       url : "https://fishcek.herokuapp.com/api/v1/login",
    //       data : dataLogin
    //     }

    //     this.axios(config)
    //     .then((response) => {
    //       console.log(response.data.data.token)
    //       this.setToken(response.data.data)
    //       this.clearForm()
    //       this.$router.push('/home')
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })        
    // }
  }
}
</script>