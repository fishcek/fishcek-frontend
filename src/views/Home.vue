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
      </section><!-- End Hero -->

      <section id="cekPenipuan" class="cekPenipuan">
        <div class="container" data-aos="fade-up">
            <h2 class="fs-35 m-b-20">Cek Penipuan</h2>
            <div class="cekPenipuan-input bc-transparent p-10">
                <h4 class="text-center fs-16 m-t-10 m-b-20">Silahkan Pilih Kategori</h4>
                <div class="container cekPenipuan-form text-center">
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
    txterror:''
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