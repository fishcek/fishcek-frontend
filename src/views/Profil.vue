<template>
  <div>
    <Sidebar/>
    <div class="bc-image2">
        <div class="userProfil container m-t-70">
                <h3 class="m-b-20 p-t-10">Profil</h3>
            <div class="row">
                <div class="col-lg-3">
                    <div class="userProfil-left">
                        <img src="../assets/img/logo-1080p-square.jpg" class="rounded mx-auto userProfil-photo">
                        <b-form-file v-model="fotoProfil" id="selectedFile" class="mt-3" ref="inputFile" style="display: none;"></b-form-file>
                        <p class="text-center">{{fotoProfil ? fotoProfil.name : ''}}</p>
                        <input type="button" value="Ubah Foto" class="btn-cs mx-auto d-block m-t-10 btn-cs-long-md btn-cs-blue" onclick="document.getElementById('selectedFile').click();" />
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="userProfil-right">
                        <div class="form-group">
                            <label for="input-live">Nama</label>
                            <b-form-input id="input-live" type="text" v-model="user.name" trim></b-form-input>
                        </div>

                        <div class="form-group">
                            <label for="input-live">Tanggal Lahir</label>
                            <b-form-input id="input-live" type="text" v-model="user.name" trim></b-form-input>
                        </div>

                        <div class="form-group">
                            <label for="input-live">Jenis Kelamin</label>
                            <b-form-input id="input-live" type="text" v-model="user.name" trim></b-form-input>
                        </div>

                        <div class="form-group">
                            <label for="input-live">Nomor HP</label>
                            <b-form-input id="input-live" type="number" v-model="user.name" trim></b-form-input>
                        </div>

                        <div v-if="emailStatus">
                            <b-form-group
                                label="Email"
                                label-for="nested-street"
                                label-cols-sm="3"
                                label-align-sm="right"
                                type="number"
                                aria-describedby="input-live-feedback"
                            >
                                <b-form-input v-model="user.email" type="email"></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="m-t-10" v-else>
                            <label>Email</label>
                            <b-input-group class="m-t-7">
                                <b-form-input v-model="user.email" type="email"></b-form-input>
                                <b-input-group-append>
                                    <button class="btn-cs btn-cs-red m-l-8" @click="emailVerifikasi()">Verifikasi</button>
                                </b-input-group-append>
                            </b-input-group>
                                <span class="text-danger fs-12">Verfikasi Email Sekarang</span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    
            <!-- <div class="row">
                <div class="col-lg-3 col-md-12">
                    <div class="profil-left">
                        <img src="../assets/img/logo-1080p-square.jpg" class="rounded mx-auto profil-photo">
                    </div>
                </div>
                <div class="col-lg-9 col-md-12">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <b-form-group
                            label="Nama"
                            label-for="nested-street"
                            label-cols-sm="3"
                            label-align-sm="right"
                        >
                            <b-form-input v-model="user.name" type="text"></b-form-input>
                        </b-form-group>


                    </div>
                    <div class="text-center m-t-20">
                        <span class="btn-cs btn-cs-blue" @click="edit()">Edit</span>
                        <span class="btn-cs btn-cs-red m-r-10 m-l-10" @click="batal()">Cancel</span>
                        <span class="btn-cs btn-cs-green" @click="simpan()">Simpan</span>
                    </div>
                </div>
            </div> -->
        
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer.vue'
import {mapGetters} from 'vuex'
export default {
  data:()=>({
      namePage:'Profil',
      fotoProfil:null,
      emailStatus:false
  }),
  name: 'Profil',
  components: {
    Sidebar,
    Footer
  },
  computed:{
    ...mapGetters({
      user:'auth/user',
      guest:'auth/guest'
    })
  },
  methods:{
      inputFile(){
          this.$ref.inputFile.click()
      },
      simpan(){
          alert('Proses Simpan')
      },
      batal(){
          alert('Proses Batal')
      },
      edit(){
          alert('Proses Edit')
      },
      emailVerifikasi(){
          alert('Verifikasi Email')
      }
  }
}
</script>