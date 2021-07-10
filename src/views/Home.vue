<template>
  <div class="home">
    <Navbar/>
    <div class="bc-image2">
      
      <section id="hero" class="">     
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
            <h2 class="cekPenipuan-title">Cek Penipuan</h2>
            <div class="cekPenipuan-input bc-blur">
                <h4 class="text-center fs-16 m-t-10 m-b-20">Silahkan Pilih Kategori</h4>
                <div class="container text-center">
                  <b-tabs 
                    pills 
                    content-class="m-t-13 "
                    active-nav-item-class="btn-cs btn-cs-blue"
                    align="center" v-model="tabIndex" >
                    <b-tab title="No Rekening" class="fs-10" @click="pencarianClear()">
                    </b-tab>
                    <b-tab title="No Telepon" @click="pencarianClear()">
                    </b-tab>
                    <input type="number" class="form-control m-t-10" ref="pencarian" :placeholder="textPlaceholder" v-model="pencarianPenipuan"/>
                      <p class="text-error">{{txterror}}</p>
                    </b-tabs>
                <input type="button" class="btn-cs btn-cs-blue m-t-5 m-b-10" value="Cek Penipuan" @click="cariPenipuan()" > 
                
                </div>
            </div>
        </div>
      </section>
    </div>
      <section id="artikel" class="artikel">
        <div class="container" data-aos="fade-up">
            <h2 class="artikel-title">Artikel</h2>
            <div class="artikel-page bc-blur">
                <div class="boxed">
                  <h2 class="artikel-title">Artikel</h2>
                </div>
            </div>
        </div>
      </section>
      <section id="faq" class="faq">
        <div class="container" data-aos="fade-up">
            <h2 class="faq-title">FAQ</h2>
            <div class="faq-page bc-blur">
                <div class="boxed">

                  <div class="accordion" role="tablist">
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
                  </div>

                </div>
            </div>
        </div>
      </section>
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
      
      // console.log(this.tabIndex)
      // console.log(this.pencarianPenipuan)
    }
  }
}
</script>