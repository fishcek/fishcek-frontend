<template>
    <div>
        <Sidebar/>
        <div class="myReport container p-t-80">
            <div class="m-t-10 boxed">
                <h4 class="boxed-title"> <b-icon icon="journal-bookmark-fill" class="m-r-10 txt-blue" ></b-icon>Laporan {{type}} Saya</h4>
                <h6 class="boxed-subtitle"> Kamu bisa mengatur laporan {{type}} kamu di sini</h6>
            </div>
            <div class="m-t-10">
                <div class="boxed-fluid">
                    <div class="boxed">
                        <div class="container">
                            <div class="border-bottom p-b-10">
                                <h6>Laporan Penipuan</h6>
                                <div class="dropdown-button">
                                    <b-button class="btn-cs-sm btn-cs-blue m-l-10" to="/pelaporan">Tambah Laporan</b-button>
                                </div>
                            </div>
                            <div class="table-report m-t-10">
                                <table class="table table-cs table-hover table-borderless">
                                    <thead class="table-head">
                                    <tr>
                                        <th>{{type}}</th>
                                        <th>Tanggal</th>
                                        <th>Status</th>
                                        <th>Laporan</th>
                                        <th>Aksi</th>
                                    </tr>
                                    </thead>
                                    <tbody class="table-body">
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <Footer/>
    </div>
    
</template>
<script>
import Sidebar from '../components/Sidebar.vue'
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
        Sidebar,
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