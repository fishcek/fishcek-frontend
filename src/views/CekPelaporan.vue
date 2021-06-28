<template>
    <div>
        <navbar/>
        <div class="cekPenipuan-page container p-t-80">
            <div class="m-t-10">
                <div class="boxed-fluid">
                    <div class="boxed bc-image1 text-center">
                        <div class="container">
                            <h2>Cek {{type}} Penipu Online</h2>
                            <div class="boxed-input bc-blur">
                                <input type="number" class="form-control" ref="pencarian" v-model="pencarianPenipuan" :placeholder="textPlaceholder">
                                <span class="text-error">{{txterror}}</span>
                                <p>Contoh : <span class="highlight"> {{noContoh}} </span></p>
                                <input type="button" class="btn-cs btn-cs-blue m-t-5 " value="Cek Penipuan" @click="cariPenipuan()">
                            </div>
                        </div>
                    </div>
                    <div class="reportRecap">
                        <!-- <div class="reportRecap-detail bc-blue">
                            <h2>99999+</h2>
                            <h6>Kasus penipuan melalui nomor telepon yang telah dilaporkan pengguna</h6>
                        </div>
                        <div class="reportRecap-detail bc-blue">
                            <h2>99999+</h2>
                            <h6>Nomor telepon telah terblacklist pada sistem Fishcek</h6>
                        </div>
                        <div class="reportRecap-detail bc-blue">
                            <h2>Rp99999</h2>
                            <h6>Total kerugian yang dilaporkan sejak 1 Januari 2018</h6>
                        </div> -->
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