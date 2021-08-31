<template>
  <div>
    <Navbar/>
    <div class="bc-image2">
        <section id="contactUs" class="contactUs container-fuild">
            <h2>{{title}}</h2>
            <span></span>
            <div class="boxed container" data-aos="fade-up">
                <!-- admin -->
                <h6>Hubungi Admin</h6>
                <div class="row">
                    <div class="col-lg-3">
                        <router-link to="#">
                            <div class="contactUs-list b-t-5 border-blue">
                                <b-icon icon="person-lines-fill" class="icon"></b-icon>
                                <h5>{{contact[0].phone}}</h5>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-lg-3">
                        <router-link to="#">
                            <div class="contactUs-list b-t-5 border-blue">
                                <b-icon icon="person-lines-fill"></b-icon>
                                <h5>{{contact[1].phone}}</h5>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-lg-3">
                        <router-link to="#">
                            <div class="contactUs-list b-t-5 border-blue">
                                <b-icon icon="person-lines-fill"></b-icon>
                                <h5>{{contact[2].phone}}</h5>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-lg-3">
                        <router-link to="#">
                            <div class="contactUs-list b-t-5 border-red">
                                <b-icon icon="chat-square-dots-fill"></b-icon>
                                <h5>{{contact[3].email}}</h5>
                            </div>
                        </router-link>
                    </div>
                </div>

                <h6 class="m-t-40">Sosial Media Kami</h6>
                <div class="row">
                    <div class="col-lg-3">
                        <router-link to="#">
                            <div class="contactUs-list bc-youtube">
                                <b-icon icon="youtube" class="txt-white fs-50"></b-icon>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-lg-3">
                        <a href="https://www.facebook.com/fishcek.fishcek.9" target="blank">
                            <div class="contactUs-list bc-facebook">
                                <b-icon icon="facebook" class="txt-white fs-50"></b-icon>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3">
                        <a href="https://www.instagram.com/fishcek_/" target="blank">
                            <div class="contactUs-list bc-instagram">
                                <b-icon icon="instagram" class="txt-white fs-50"></b-icon>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3">
                        <router-link to="#">
                            <div class="contactUs-list bc-twitter">
                                <b-icon icon="twitter" class=" txt-white fs-50">
                                </b-icon>
                            </div>
                        </router-link>
                    </div>
                </div>                
            </div>
        </section>    
          
    <Footer/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar2.vue'
import Footer from '../components/Footer2.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  data:()=>({
      title:'Hubungi Kami',
      contact:[
          { phone: '+62 XXXX-XXXX-XXXX', admin: 'Fred'},
          { phone: '+62 XXXX-XXXX-XXXX', admin: 'Fred'},
          { phone: '+62 XXXX-XXXX-XXXX', admin: 'Fred'},
          { email: 'info.fishcek@gmail.com', admin: 'Fred'},
        ]
  })
}
</script>