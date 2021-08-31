<template>
  <div class="home">
    <Navbar/>
    <div class="bc-image2">
        <section id="termPrivacy" class="termPrivacy container">
            <div class="boxed" data-aos="fade-up">
                <div class="head">
                    <h3>{{title}}</h3>
                    <span class="txt-muted-light">Perubahan Terakhir : {{dateUpdate}}</span>
                </div>
                
                <div class="termPrivacy-list">
                    <ol type="1">
                        <li class="heading">Pelaporan</li>
                            <p>
                                Rekening yang dilaporkan adalah rekening terkait dugaan penipuan terkait Dunia Ikan Hias.
                                Para Penghobi ikan hias atau Masyarakat umum bisa membuat laporan pada situs Fishcek.com dengan terlebih dahulu mengisi form yang disediakan pada fitur menu Buat Laporan. Pelapor diminta untuk mendaftar akun dan memberikan identitas pribadi pelapor yang valid agar jika diperlukan dapat dihubungi. Pelapor wajib memberikan kronologi dengan lengkap dan melampirkan foto/scan bukti transfer, screen capture percakapan dsb.. Laporan kemudian akan diverifikasi oleh admin Fishcek.com sekaligus memberikan notifikasi kepada pelapor terkait perubahan status laporannya. Berikan laporan yang benar, karena laporan tersebut menjadi Tanggung Jawab Pelapor.
                            </p>
                        <li class="heading">Sanggahan atau Normalisasi Rekening</li>
                            <p>                                
                                Jika anda sebagai Terlapor, anda BERHAK mengajukan sanggahan atas laporan, dan anda dapat mengajukan permohonan untuk dikeluarkan dalam database daftar laporan, Dan untuk diMasukan kedalam Daftar Normalisasi. Pemilik rekening dapat melaporkan melalui Whatsapp Fishcek.com (Chat saja, tidak menerima telepon) dengan melampirkan bukti-bukti penyanggahan. 
                            </p>
                        <li class="heading">Ruang Pertemuan Klarifikasi</li>
                            <p>    
                                Dalam hal tertentu, pengelola fishcek.com dapat mempertemukan antara pelapor dan pemilik rekening secara online/ Grup Whatsapp jika terjadi perselisihan/perbedaan pendapat. Baik pelapor dan pemilik rekening akan dikirimkan undangan berisi tautan/link melalui WA untuk memasuki ruang percakapan grup/fasilitas online yang diawasi oleh <strong>Ahli Hukum</strong> (jika tersedia akan dikenakan tarif) yang bekerja sama dengan <a href="https://www.fishcek.com" target="blank">Fishcek.com</a>.
                                Jka Pelapor dan pemilik rekening tidak terjadi kesepahaman. Fishcek.com akan mengubah status laporan dari <strong>"verified"</strong> menjadi <strong>"dispute"</strong>.

                            </p>
                        <li class="heading">Informasi yang dikumpulkan</li>
                            <p>
                                Pada Website dan atau aplikasi Fishcek.com, anda dapat membuat dan mengecek nomor rekening dan atau nomor telepon seseorang. Jika anda sebagai pelapor, Anda dapat membuat laporan penipuan dengan mengisi form yang sudah disiapkan. Identitas yang anda Masukan adalah Identitas Asli Anda, Identitas Terlapor (Gunakan Nama Inisial), Kronologi, dan sertakan lampiran bukti tindakan terduga penipuan.
                            </p>
                            <p>
                                Laporan akan diverifikasi oleh mesin kami agar kami dapat memastikan bahwa Anda bukanlah robot.
                                Kemudian sebelum laporan  ditayangkan pada website kami, kami akan melakukan penelaahan lebih lanjut terkait laporan yang telah Anda buat. Kami akan berkoordinasi dengan ahli hukum kami, sehingga data yang dilaporkan oleh Pelapor dapat kami publikasikan.
                                Jika Anda adalah terlapor, dan Anda ingin menyanggah laporan, Kami dapat membantu anda untuk menghapus status terlapor Anda pada website kami. Silahkan Hubungi Kami 

                            </p>
                        <li class="heading">Informasi User</li>
                            <p>
                                Silahkan Baca <router-link to="/policy/privacy">Kebijakan Privasi</router-link>
                            </p> 
                        <li class="heading">Perlindungan User</li>
                            <p>
                                Hati-hati terhadap tiruan yang mengatasnamakan Website <a href="https://www.fishcek.com" target="blank">Fishcek.com</a> Dilarang keras menggunakan Nama ataupun Logo <a href="https://www.fishcek.com" target="blank">Fishcek.com</a>.
                                <span>Hak Kekayaan Intelektual <sup><b-icon icon="exclamation-octagon-fill"></b-icon></sup></span>

                            </p>
                        <li class="heading">Daftarkan Rekening</li>
                            <p>                               
                                Fitur ini dapat digunakan oleh para pelaku usaha di bidang ikan hias, baik itu reseller atau bahkan konsumen. Untuk mencegah banyaknya kasus penipuan.
                                Catatan: Jika rekening yang di cek tidak ada, bukan  berati sebuah jaminan bahwa rekening tersebut pasti aman dan tidak terkait dugaan tindak pidana. Pemberian Bintang hanya bentuk pengakuan bahwa identitas pemilik rekening terlah terverifikasi.
                            </p>
                        <li class="heading">Perubahan dan Amandemen</li>
                            <p>
                                Hak kebijakan dan ketentuan layanan dapat berubah setiap saat tanpa pemberitahuan apapun. Silahkan selalu cek pembaharuan kami secara berkala.
                            </p>  
                        <li class="heading">Penerimaan Kebijakan</li>
                            <p>
                                Dengan menggunakan Website dan atau aplikasi Fishcek.com berati anda tunduk dan patuh terhadap kebijakan dan ketentuan layanan kami. Silahkan selalu cek pembaharuan kebijakan dan ketentuan layanan kami.
                            </p>   
                        <li class="heading">Hubungi Kami</li>
                            <p>
                                Bilamana Anda memiliki pertanyaan lain terkait <router-link to="/policy/term">Layanan/Ketentuan</router-link>, Anda dapat menguhubungi kami di <router-link to="/policy/term">Hubungi Kami</router-link>.
                            </p>  
                    </ol>                           
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
      title:'Syarat & Ketentuan',
      dateUpdate:'23 Agustus 2021'
  })
}
</script>