<template>
  <div class="register">
    <div class="container-fuild">
        <div class="limiter">
          <div class="container-login-register">
            <div class="wrap-login-register">

              
              <div class="login-register-pic">
                <img src="../assets/img/logo.png" class="register-img" alt="IMG">
              </div>
      
              <div class="login-register-form">
                <span class="login-register-form-title">
                  Daftar Akun <span class="login-register-form-title-detail">Fishcek</span>
                </span>
                <form @submit.prevent="register()" ref="form"> 
                  <div class="wrap-input-form" data-validate = "Valid email is required: ex@abc.xyz">
                    <div class="form-group">
                      <input type="text" class="form-control" name="nama" placeholder="Nama Lengkap" v-model="name">
                    </div>
                  </div>

                  <div class="wrap-input-form" data-validate = "Valid email is required: ex@abc.xyz">
                    <div class="form-group">
                      <input type="number" class="form-control" name="phone" placeholder="Nomor Telepon" v-model="phone">
                    </div>
                  </div>

                  <div class="wrap-input-form" data-validate = "Valid email is required: ex@abc.xyz">
                    <div class="form-group">
                      <input type="email" class="form-control" name="email" placeholder="Email" v-model="email">
                    </div>
                  </div>
                  
                  <div class="wrap-input-form">
                    <div class="form-group">
                      <input type="password" class="form-control" name="pass" placeholder="Password" v-model="password">
                      <!-- <input type="checkbox" style="width:12px;"><span class="p-l-5 " style="font-size:12px; margin-top:10px;">Show Password</span> -->
                    </div>
                  </div>

                  <div class="wrap-input-form">
                    <div class="form-group">
                      <input type="password" class="form-control" name="pass_confirm" placeholder="Masukan Kembali Password Anda" v-model="password_confirmation">
                    </div>
                  </div>
                  
                  <div class="wrap-input-form">
                    <div class="form-group">
                      <input type="checkbox" name="name" class="form-checkbox" id="name" v-model="term" />
                      <span class="txt3 p-l-5">Saya Menyetujui <router-link to="/policy/term">Syarat dan Ketentuan</router-link> serta <router-link to="/policy/privacy">Kebijakan Privasi</router-link></span>
                    </div>
                  </div>

                  <div class="container-login-register-btn">
                    <input type="submit" class="btn-cs-form btn-cs-blue-outline m-t-15" value="Daftar">
                  </div>
                </form>
                <div class="text-center p-t-12">
                  <span class="txt4">atau</span>
                </div>

                <div class="container-login-register-btn">
                    <button class="btn-cs-form btn-cs-facebook-outline m-t-15" onclick="window.open('https://facebook.com/', 'Facebook' , 'height=500,width=500');">
                      Daftar dengan Facebook
                    </button>
                  </div>

                  <div class="container-login-register-btn">
                    <button class="btn-cs-form btn-cs-google-outline m-t-15" onclick="window.open('https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=532352704633-6pkces9iboppp465idnovkcqtlsa8j7t.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.figma.com%2Ffinish_google_sso&response_type=code&scope=profile%20email&access_type=online&prompt=select_account&state=Onr%2BNlXfOwgG9mfd%2Fx6FZVF94asqIoXZmuu8Tm%2F9d1Yg&flowName=GeneralOAuthFlow', 'Google' , 'height=500,width=500');">
                      Daftar dengan Google
                    </button>
                  </div>
                  <div class="text-center fs-12 m-t-10">
                    Sudah Punya Akun ? <router-link :to="'/login'">Masuk Disini</router-link>
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
export default {
  data: () => ({
    name : '',
    phone : '',
    email : '',
    password : '',
    password_confirmation : '',
    term : ''
  }),
  methods : {
    clearForm(){
      this.name = '',
      this.phone = '',
      this.email = '',
      this.password = '',
      this.password_confirmation = '',
      this.term = ''
    },
    register(){
      if (!this.term) {
        alert('Silahkan Centang Syarat dan Ketentuan')
      }else{ 
        const cek = this.name+' - '+this.phone+' - '+this.email+' - '+this.password+' - '+this.password_confirmation
        console.log(cek)       
        let dataRegis = new FormData()
        dataRegis.append('name', this.name)
        dataRegis.append('phone', this.phone)
        dataRegis.append('email', this.email)
        dataRegis.append('password', this.password)
        dataRegis.append('password_confirmation', this.password_confirmation)

        let config = {
          method : "post",
          url : "https://fishcek.herokuapp.com/api/v1/register",
          data : dataRegis
        }

        this.axios(config)
        .then((response) => {
          console.log(response)
          this.clearForm()
          this.$router.push('/login');
        })
        .catch((error) => {
          console.log(error)
        })

      }
    }
  }
}
</script>
