<template>
    <div class="bc-image2">
        <Navbar/>
        <div class="cekPenipuan-page container">
            <div class="boxed-fluid text-center">
                <div class="container">
                    <h2 class="p-b-10">Cek {{type}} Penipu Online</h2>
                    <input type="number" class="form-control m-t-10" ref="pencarian" v-model="pencarianPenipuan" :placeholder="textPlaceholder">
                    <span class="text-error">{{txterror}}</span>
                    <p>Contoh : <span class="highlight"> {{noContoh}} </span></p>
                    <input type="button" class="btn-cs btn-cs-blue" value="Cek Penipuan" @click="cariPenipuan()">
                </div>
                <div class="reportRecap m-t-50">
                    <h2 class="reportRecap-title">Hasil Penipuan</h2>
                    <div class="row m-l-10 m-r-10">
                        <div class="col-lg-4">
                            <router-link to="#">
                                <div class="reportRecap-list bc-blue-dark">
                                    <h2>99999+</h2>
                                    <h6>Penipuan melalui nomor telepon yang telah dilaporkan pengguna</h6>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-lg-4">
                            <router-link to="#">
                                <div class="reportRecap-list bc-blue-dark">
                                    <h2>99999+</h2>
                                    <h6>Nomor telepon telah terblacklist pada sistem Fishcek</h6>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-lg-4">
                            <router-link to="#">
                                <div class="reportRecap-list bc-blue-dark">
                                    <h2>99999+</h2>
                                    <h6>Total kerugian yang dilaporkan sejak 1 Januari 2018</h6>
                                </div>
                            </router-link>
                        </div>
                    </div> 
                </div>
            </div>  
        </div>
        <Footer/>
    </div>
    
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
    data:()=>({
        type:'',
        pencarianPenipuan:'',
        noContoh:'',
        textPlaceholder:'',
        txterror:''
    }),
    components : {
        Navbar,
        Footer
    },
    watch :{
        $route(to){
            this.type=to.params.type
            this.go()
        }
    },
    methods : {
        go(){
            this.type = this.$route.params.type

            if (this.type=='notelepon') {
                this.type='Telepon'
                this.noContoh='085795851996'
                this.textPlaceholder='Pencarian No Telepon'
            }else{
                this.type='Rekening'
                this.noContoh='0238272088'
                this.textPlaceholder='Pencarian No Rekening'
            }
        },
        cariPenipuan(){
            if (this.pencarianPenipuan!=0) {
                if (this.type=='notelepon') { //rekening
                this.$router.push('/checkphone/'+this.pencarianPenipuan)
                }else{
                this.$router.push('/checkrekening/'+this.pencarianPenipuan)
                }  
            }else{
                this.txterror='Kolom Pencarian Harus Diisi'
                this.$refs.pencarian.focus();
            }
            
            console.log(this.tabIndex)
            console.log(this.pencarianPenipuan)
        }
    },
    created(){
        this.go()
    }
}
</script>