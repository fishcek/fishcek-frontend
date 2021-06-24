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
                  Masuk ke <span class="login-register-form-title-detail">Fishcek</span>
                </span>
                <form @submit.prevent="login()" ref="form">
                  <div class="wrap-input-form" data-validate = "Valid email is required: ex@abc.xyz">
                    <div class="form-group">
                      <input type="email" class="form-control" name="email" placeholder="Email" v-model="email">
                    </div>
                  </div>
                  
                  <div class="wrap-input-form" data-validate = "Valid email is required: ex@abc.xyz">
                    <div class="form-group">
                      <input type="password" class="form-control" name="pass" placeholder="Password" v-model="password">
                    </div>
                  </div>
                  
                  <div class="text-right">
                    <span class="fs-12 text-black"><a href="#" class="text-dark"> Lupa Password ?</a> </span>
                  </div>

                  <div class="container-login-register-btn">
                    <input type="submit" class="btn-cs-form btn-cs-blue-outline m-t-15" value="Login">
                  </div>
                </form> 
                  <div class="text-center p-t-12">
                    <span class="fs-14">atau</span>
                  </div>

                  <div class="container-login-register-btn">
                    <button class="btn-cs-form btn-cs-facebook-outline m-t-15" onclick="window.open('https://facebook.com/', 'Facebook' , 'height=500,width=500');">
                      Login dengan Facebook
                    </button>
                  </div>

                  <div class="container-login-register-btn">
                    <button class="btn-cs-form btn-cs-google-outline m-t-15" onclick="window.open('https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=532352704633-6pkces9iboppp465idnovkcqtlsa8j7t.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.figma.com%2Ffinish_google_sso&response_type=code&scope=profile%20email&access_type=online&prompt=select_account&state=Onr%2BNlXfOwgG9mfd%2Fx6FZVF94asqIoXZmuu8Tm%2F9d1Yg&flowName=GeneralOAuthFlow', 'Google' , 'height=500,width=500');">
                      Login dengan Google
                    </button>
                  </div>
                  
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
    password : ''
  }),
  computed:{
    ...mapGetters({
      token : 'auth/token'
    })
  },
  methods : {
    clearForm(){
      this.email = '',
      this.password = ''
    },
    ...mapActions({
      setToken : 'auth/setToken',
      setGuest : 'auth/setGuest'
    }),
    login(){
      let dataLogin = new FormData()
      dataLogin.append('email', this.email)
      dataLogin.append('password', this.password)

      let config = {
          method : "post",
          url : "https://fishcek.herokuapp.com/api/v1/login",
          data : dataLogin
        }

        this.axios(config)
        .then((response) => {
          console.log(response.data.data.token)
          this.setToken(response.data.data)
          this.clearForm()
          this.$router.push('/home')
        })
        .catch((error) => {
          console.log(error)
        })        
    }
  }
}
</script>