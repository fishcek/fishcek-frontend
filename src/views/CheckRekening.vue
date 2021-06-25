<template>
    <div>
        <Navbar/>
        <div class="hasilPenipuan container p-t-80">
            <div class="m-t-10 b-r boxed">
                <h4 class="boxed-title"> <b-icon icon="credit-card2-back" class="m-r-10 txt-blue" ></b-icon>{{norekening}}</h4>
            </div>
            <div class="m-t-10">
                <div class="boxed-fluid b-r">
                    <div class="boxed bc-image1 b-r-t">
                        <b-row class="p-10">
                            <b-col cols="12" lg="5" md="12" sm="12" class="left text-center p-l-40">
                                <b-icon icon="person-circle" class="profil text-white" ></b-icon>
                            </b-col>
                            <b-col cols="12" lg="7" md="12" sm="12">
                                <div class="text-detail text-white txt-shadow">
                                    <h3>{{norekening}} <b-icon icon="check-circle-fill"></b-icon></h3> 
                                    <h5>Pernah / Belum Pernah Dilaporkan</h5>
                                    <div class="m-t-10">
                                        <input type="button" value="Laporkan" class="btn-cs btn-cs-red m-r-5">
                                        <input type="button" value="Tulis Review" class="btn-cs btn-cs-yellow">
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="boxed b-r-b">
                        <h3 class="boxed-title">Informasi</h3>
                        <b-row class="m-t-10" >
                            <b-col cols="12" lg="5" md="12" sm="12">
                                <div class="boxed-detail">                                        
                                    <h5 class="txt-blue">Pemilik</h5>
                                    <h6>{{pemilik}}</h6>
                                </div>
                                <div class="boxed-detail">                                        
                                    <h5 class="txt-blue">Negara</h5>
                                    <h6>{{negara}}</h6>
                                </div>
                                <div class="boxed-detail">                                        
                                    <h5 class="txt-blue">Nomor Rekening</h5>
                                    <h6>{{norekening}}</h6>
                                </div>
                                <div class="boxed-detail">                                        
                                    <h5 class="txt-blue">Nama Bank</h5>
                                    <h6>{{bank}}</h6>
                                </div>                        
                            </b-col>
                            <b-col cols="12" lg="7" md="12" sm="12" class="">
                                <div class="boxed-detail-large bc-shadow">                                        
                                    <h4 class="txt-blue">Status</h4>
                                    <h5>{{statusKredibel}}</h5>
                                </div>
                                <div class="boxed-detail-large bc-shadow">                                        
                                    <h4 class="txt-blue">Laporan</h4>
                                    <h5>{{laporanKredibel}} kali dilaporkan</h5>
                                </div>
                                <div class="boxed-detail-large bc-shadow">                                        
                                    <h4 class="txt-blue">Rating</h4>
                                    <b-form-rating id="rating-inline" class="rating" variant="warning" v-model="ratingKredibel" inline no-border readonly ></b-form-rating>                                    
                                    <label for="rating-inline"><h5>{{ratingKredibel}}/5</h5></label>                                    
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                </div>
                
            </div>
            <div class="container m-t-10 p-20 b-r bc-white bc-shadow">
                <h3 class="boxed-title p-b-20">Laporan</h3>   
                <div class="boxed-scroll-y">
                    <div class="boxed-detail border-bottom m-b-20" v-for="report of reports" :key="report">                                        
                        <h6>{{report.timeReport}}</h6>
                        <h6 class="txt-gray">{{report.textReport}}</h6>
                        <h6 class="txt-red fs-14"><b-icon icon="exclamation-octagon-fill" class="m-r-5"></b-icon>Ajukan Pembelaan Laporan</h6>
                    </div>                    
                </div>             
            </div>
            <div class="container m-t-10 p-20 b-r bc-white bc-shadow">
                <h3 class="boxed-title p-b-20">Bisnis</h3> 
                <div class="card-group p-b-20">  
                    <div class="card b-r">
                        <img class="card-img-top b-r-t" src="../assets/img/dummy.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Koding Kita</h5>
                            <p class="card-text">Koding Kita adalah Perusahaan yang bergerak dalam jasa pembuatan aplikasi berbasis mobile/web dan juga memberikan informasi dan hiburan</p>
                            <input type="button" class="btn-cs btn-cs-blue" value="Go somewhere" to="">
                        </div>
                    </div>  
                </div>          
            </div>
            
            <div class="container m-t-10 p-20 b-r bc-white bc-shadow">
                <h3 class="boxed-title p-b-20">Review</h3>   
                <div class="boxed-scroll-y">
                    <div class="boxed-detail border-bottom p-b-5 m-b-20" v-for="review of reviews" :key="review">                        
                        <b-form-rating class="rating m-b-5" variant="warning" v-model="review.star" inline no-border readonly ></b-form-rating> 
                        <div class="detail-top">
                            <img src="../assets/img/dumuser.png" width="50">
                            <h5 class="fs-15 p-t-4">{{review.username}}</h5>                                     
                            <h5 class="fs-12">{{review.timeReview}}</h5>
                        </div>
                        <small class="text-muted">{{review.textReview}}</small>
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
        norekening:'',
        statusKredibel:'Verified',
        ratingKredibel:'4.9',
        laporanKredibel:'0',
        pemilik:'Rafi Fauzi',
        negara:'Indonesia',
        bank:'BNI',
        reports: [
            { timeReport:'Senin, 14 Juni 2021', textReport:'Seorang pengguna melaporkan nomor telepon ini.'},
            { timeReport:'Selasa, 15 Juni 2021', textReport:'Seorang pengguna melaporkan nomor telepon ini.'},
            { timeReport:'Rabu, 16 Juni 2021', textReport:'Seorang pengguna melaporkan nomor telepon ini.'},
            { timeReport:'Kamis, 17 Juni 2021', textReport:'Seorang pengguna melaporkan nomor telepon ini.'},
            { timeReport:'Jumat, 18 Juni 2021', textReport:'Seorang pengguna melaporkan nomor telepon ini.'},
            { timeReport:'Sabtu, 19 Juni 2021', textReport:'Seorang pengguna melaporkan nomor telepon ini.'},
            { timeReport:'Minggu, 20 Juni 2021', textReport:'Seorang pengguna melaporkan nomor telepon ini.'},
            { timeReport:'Senin, 21 Juni 2021', textReport:'Seorang pengguna melaporkan nomor telepon ini.'}
        ],
        reviews: [
            { username:'noName', timeReview:'Senin, 14 Juni 2021', textReview:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum scelerisque turpis at pulvinar. Nulla luctus ornare lacus, et vestibulum tortor rutrum nec. Nulla eu elit libero. Aenean commodo accumsan est quis luctus.', star:'4'},
            { username:'noName', timeReview:'Selasa, 15 Juni 2021', textReview:'Seorang pengguna melaporkan nomor telepon ini.', star:'5'},
            { username:'noName', timeReview:'Rabu, 16 Juni 2021', textReview:'Seorang pengguna melaporkan nomor telepon ini.', star:'3'},
            { username:'noName', timeReview:'Kamis, 17 Juni 2021', textReview:'Seorang pengguna melaporkan nomor telepon ini.', star:'3'},
            { username:'noName', timeReview:'Jumat, 18 Juni 2021', textReview:'Seorang pengguna melaporkan nomor telepon ini.', star:'1'},
            { username:'noName', timeReview:'Sabtu, 19 Juni 2021', textReview:'Seorang pengguna melaporkan nomor telepon ini.', star:'4'},
            { username:'noName', timeReview:'Minggu, 20 Juni 2021', textReview:'Seorang pengguna melaporkan nomor telepon ini.', star:'2'},
            { username:'noName', timeReview:'Senin, 21 Juni 2021', textReview:'Seorang pengguna melaporkan nomor telepon ini.', star:'1'}
        ]
    }),
    components : {
        Navbar,
        Footer
    },
    methods : {
        go(){
            this.norekening = this.$route.params.norekening
        }
    },
    created(){
        this.go()
    }
}
</script>