<template>
  <div class="">
    <Navbar/>
    <div class="bc-image2">
      
      <section id="hero" class="hero">     
        <div class="d-flex">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 d-flex flex-column">
                <h1>Solusi Untuk Transaksi Online Kamu</h1>
                <h2>Berapapun Harga Ikan Hias Akan Terasa Murah Jika Adanya Kepercayaan</h2>
                <!-- <div class="">
                  <a href="#about" class="btn-cs btn-cs-blue">Ayo Mulai!!</a>
                </div> -->
              </div>
              <div class="col-lg-6 order-1 order-lg-2">
                <!--<img src="assets/img/hero-img.png" class="img-fluid animated" alt=""> Use it if you want an animated up and down to your vector-->
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cekPenipuan" class="cekPenipuan">
        <div class="container" data-aos="fade-up">
            <div class="cekPenipuan-input">
              <div class="cekPenipuan-title">
                Cek Penipuan Online
              </div>
                <div class="cekPenipuan-form">
                <h4 class="fs-16 m-t-10 m-b-20">Silahkan Pilih Kategori</h4>
                  <b-tabs 
                    pills 
                    content-class="m-t-13 "
                    align="left" v-model="tabIndex" >
                    <b-tab title="No Rekening" class="fs-10" @click="pencarianClear()">
                    </b-tab>
                    <b-tab title="No Telepon" @click="pencarianClear()">
                    </b-tab>
                    <input type="number" class="form-control m-t-10" ref="pencarian" @keyup="cekNomor()" :placeholder="textPlaceholder" v-model="pencarianPenipuan"/>
                      <p class="text-error m-t-5">{{txterror}}</p>
                    </b-tabs>
                <input type="button" class="btn-cs btn-cs-blue m-b-10" value="Cek Penipuan" @click="cariPenipuan()" > 
                
                </div>
            </div>
        </div>
      </section>

      <section id="rekapLaporan" class="rekapLaporan">
        <div class="container" data-aos="fade-up">
            <div class="rekapLaporan-page bc-white bx-shadow">
                <div class="boxed">
                  <div class="row m-l-10 m-r-10">
                        <div class="col-lg-4">
                            <router-link to="#">
                                <div class="recap-list bc-blue-dark">
                                    <h2>1234567</h2>
                                    <h6>Kasus Penipuan yang telah dilaporkan</h6>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-lg-4">
                            <router-link to="#">
                                <div class="recap-list bc-blue-dark">
                                    <h2>1234567</h2>
                                    <h6>Rekening bank yang telah terblacklist</h6>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-lg-4">
                            <router-link to="#">
                                <div class="recap-list bc-blue-dark">
                                    <h2>Rp. 1234567</h2>
                                    <h6>Total kerugian yang dilaporkan</h6>
                                </div>
                            </router-link>
                        </div>
                  </div>                  
                </div>
            </div>
        </div>
      </section>

      <section id="artikel" class="artikel">
        <div class="container" data-aos="fade-up">
            <div class="artikel-page bc-image3">
                <div class="boxed">
                  <h2 class="artikel-title">Artikel</h2>
                  <div class="coming-soon">
                    <h2>Coming Soon</h2>
                  </div>                  
                </div>
            </div>
        </div>
      </section>

      <section id="faq" class="faq">
        <div class="container" data-aos="fade-up">
            <div class="faq-page bc-blur">
                <div class="boxed">
                <h2 class="faq-title">FAQ</h2>
                <div class="row m-l-10 m-r-10">
                  <div class="col-lg-3">
                      <router-link to="/faq/rekan">
                        <div class="faq-list">
                          <b-icon icon="calculator" aria-hidden="true"></b-icon> 
                          <h6 class="m-t-10">ReKan</h6>
                        </div>
                      </router-link>
                  </div>
                  <div class="col-lg-3">
                      <router-link to="/faq/artikel">
                        <div class="faq-list">
                          <b-icon icon="card-text" aria-hidden="true"></b-icon> 
                          <h6 class="m-t-10">Artikel</h6>
                        </div>
                      </router-link>
                  </div>
                  <div class="col-lg-3">
                      <router-link to="/faq/cekPelaporan">
                        <div class="faq-list">
                          <b-icon icon="credit-card-fill" aria-hidden="true"></b-icon> 
                          <h6 class="m-t-10">Cek Pelaporan</h6>
                        </div>
                      </router-link>
                  </div>
                  <div class="col-lg-3">
                      <router-link to="/faq/sanggahan">
                        <div class="faq-list">
                          <b-icon icon="exclamation-octagon-fill" aria-hidden="true"></b-icon> 
                          <h6 class="m-t-10">Sanggahan</h6>
                        </div>
                      </router-link>
                  </div>
                </div>
                  <!-- <div class="accordion" role="tablist">
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <button class="faq-title" v-b-toggle.accordion-1>FAQ 1</button>
                      </b-card-header>
                      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <b-card-text>{{ text }}</b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <button class="faq-title" v-b-toggle.accordion-2>FAQ 2</button>
                      </b-card-header>
                      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <b-card-text>{{ text }}</b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <button class="faq-title" v-b-toggle.accordion-3>FAQ 3</button>
                      </b-card-header>
                      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <b-card-text>{{ text }}</b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div> -->

                </div>
            </div>
        </div>
      </section>
      
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  data:()=>({
    pencarianPenipuan:'',
    tabIndex:0,
    textPlaceholder:'Pencarian No Rekening',
    txterror:'',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe ex sequi temporibus blanditiis quis magni, eos corporis neque, maxime amet. Provident repellendus architecto hic repellat soluta sunt consectetur facilis quia quasi reprehenderit modi fuga unde suscipit quod, atque pariatur sequi necessitatibus totam distinctio libero vitae explicabo. Iure quam porro alias deserunt quidem nesciunt voluptate, cupiditate qui molestiae ipsum at tempora tenetur vero distinctio dolorum maiores voluptas inventore, hic non, corrupti consequatur praesentium optio est. Vitae, laudantium similique! Modi deleniti unde placeat, velit, illum esse, id dolore sit ipsam molestiae suscipit at facilis repellendus amet vero ea eos cumque omnis!'
  }),
  methods:{
    pencarianClear(){
      this.pencarianPenipuan=''
      if (this.tabIndex==1) {
          this.textPlaceholder='Pencarian No Rekening'
        }else{
          this.textPlaceholder='Pencarian No Telepon'
        }
    },
    cariPenipuan(){
      if (this.pencarianPenipuan!=0) {
        if (this.tabIndex==0) { //rekening
          this.$router.push('/checkrekening/'+this.pencarianPenipuan)
        }else{
          this.$router.push('/checkphone/'+this.pencarianPenipuan)
        }  
      }else{
        this.txterror='Kolom Pencarian Harus Diisi'
        this.$refs.pencarian.focus();
      }
    },
    cekNomor(){
      if (this.pencarianPenipuan<0) {
        this.txterror='Nomor Tidak Valid'
        this.pencarianPenipuan=''; 
      }else{
        this.txterror=''
      }
    }
  }
}
</script>