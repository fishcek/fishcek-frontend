<template>
    <div>
        <Navbar/>
        <div class="cekPenipuan-page container">
            <div class="boxed b-r bc-image1">
                <h4 class="boxed-title txt-white">Laporkan Nomor Rekening Atau Nomor Telepon Penipuan</h4>
                <h6 class="boxed-subtitle txt-white">Laporan kamu sangat berarti untuk mencegah terjadinya penipuan di masa mendatang oleh pelaku yang sama.</h6>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="m-t-10 p-30 b-r boxed-hover">
                        <div class="text-center">
                            <h5 class="title txt-blue m-b-20">Nomor Telepon</h5>
                            <h6 class="subtitle m-b-20">Laporkan nomor telepon pelaku tindakan penipuan.</h6>
                            <b-button class="btn-cs-card btn-cs-blue-outline" to="/lapor/notelepon">Laporkan</b-button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="m-t-10 p-30 b-r boxed-hover">
                        <div class="text-center">
                            <h5 class="title txt-blue m-b-20">Nomor Rekening</h5>
                            <h6 class="subtitle m-b-20">Laporkan nomor rekening pelaku tindakan penipuan.</h6>
                            <b-button class="btn-cs-card btn-cs-blue-outline" to="/lapor/norekening">Laporkan</b-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-t-10 boxed b-r bc-shadow">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <h4 class="boxed-title fs-18"><strong>Lapor Penipuan Online</strong></h4>
                        <h6 class="boxed-subtitle fs-16">Pernah tertipu ketika berbelanja online? Laporkan saja di Fishcek agar tidak ada lagi korban yang tertipu oleh penjual yang sama. Dengan melaporkan penipuan di Fishcek, anda turut membantu online shopper lainnya terhindar dari penipuan online.</h6>                       
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <h4 class="boxed-title fs-18"><strong>Laporkan Rekening Penipu</strong></h4>
                        <h6 class="boxed-subtitle fs-16">Anda dapat melaporkan nomor rekening bank milik seseorang yang pernah disalahgunakan oleh pemiliknya seperti penipuan baik online maupun offline dll, untuk selanjutnya kami lakukan blacklist pada sistem Fishcek.</h6>                       
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <h4 class="boxed-title fs-18"><strong>Melaporkan Rekening Penipu</strong></h4>
                        <h6 class="boxed-subtitle fs-16">Untuk dapat melaporkan seseorang terkait penipuan online, anda hanya perlu untuk mengisi form yang ada pada halaman ini. Kemudian setelah laporan penipuan dikirim dan dilakukan peninjauan laporan oleh tim kami, maka akan dilakukan pemblacklistan nomor rekening bank terduga penipu.</h6>                       
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <h4 class="boxed-title fs-18"><strong>Lapor Penipuan Transaksi Online</strong></h4>
                        <h6 class="boxed-subtitle fs-16">Jika anda telah menjadi korban penipuan ketika bertransaksi secara online, anda dapat melaporkan kejadian tersebut pada kredibel agar tidak ada lagi korban selanjutnya oleh penjual yang sama.</h6>                       
                    </div>
                </div>               
            </div>
            <div class="m-t-10 boxed b-r bc-shadow">
                <h6 class="text-center text-spacing">Terimakasih Telah Melapor. Laporan Kamu Akan Kami Proses</h6>                
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
        noContoh:''
        
    }),
    components : {
        Navbar,
        Footer
    }
}
</script>