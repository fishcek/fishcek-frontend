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
                        <li class="heading">Pengumpulan Informasi Pengguna</li>
                        <ol type="A">
                            <li><strong>Profil pengguna</strong>,
                                Saat Anda mendaftarkan diri anda/ akun anda Pada Website dan atau aplikasi <a href="https://www.fishcek.com" target="blank">Fishcek.com</a>, pihak kami dapat mengumpulkan informasi yang telah Anda berikan pada database kami. Kami mengumpulkan data berupa Nama, Alamat, Nomer Handphone, dan Email Anda. Setiap Anda memberikan informasi itu adalah informasi yang benar, tidak menyesatkan
                            </li>
                            <li><strong>Informasi yang anda berikan</strong>,
                                Informasi yang anda berikan adalah yang valid, dan bahwa informasi adalah yang benar terjadi, bukan potensial terjadi. Informasi yang palsu/ menyesatkan/ menjatuhkan orang lain dapat terkait hukum. Dan <a href="https://www.fishcek.com" target="blank">Fishcek.com</a> tidak bertanggungjawab jika terjadi hal-hal seperti itu dikemudian hari.
                            </li>
                            <li><strong>Informasi yang dikumpulkan secara Otomatis</strong>,
                                Informasi yang anda berikan adalah yang valid, dan bahwa informasi adalah yang benar terjadi, bukan potensial terjadi. Informasi yang palsu/ menyesatkan/ menjatuhkan orang lain dapat terkait hukum. Dan <a href="https://www.fishcek.com" target="blank">Fishcek.com</a> tidak bertanggungjawab jika terjadi hal-hal seperti itu dikemudian hari.
                            </li>
                        </ol><br>
                        <li class="heading">Penggunaan Informasi</li>
                        <ol type="A">
                            <li><strong>Menyediakan dan Meningkatkan Layanan</strong>,
                                Website dan atau aplikasi <a href="https://www.fishcek.com" target="blank">Fishcek.com</a> akan menggunakan informasi untuk keperluan Layanan, seperti :
                                <ol type="a">
                                    <li>Layanan Cek Nomor Rekening. Nomor telepon, review, dan fitur lainnya, agar masyarakat yang akan mlakukan jual beli bertransaksi dengan aman, silahkan gunakan layanan <router-link to="/rekan">ReKan</router-link>.</li>
                                    <li>Menampilkan hasil laporan masyarakat terhadap nomor rekening dan/atau nomor telepon yang telah dilaporkan.</li>
                                </ol>
                            </li>
                            <li><strong>Kepentingan Riset</strong>,
                                Website dan atau Aplikasi <a href="https://www.fishcek.com" target="blank">Fishcek.com</a> dapat menggunakan informasi untuk melihat trend penipuan yang terjadi, serta melakukan analisa untuk memberikan tindak lanjut, misalnya sosialisasi pencegahan penipuan dengan modus terbaru dan lainnya.
                            </li>
                        </ol><br>
                        <li class="heading">Penyimpanan dan Tranfer</li>
                        <p>
                            Penyimpanan informasi menggunakan sistem layannan penyimpanan elektronik, Server berada di pihak ke 3 yang mana letaknya masih di Indonesia. Kami menegaskan bahwa Data/informasi yang kami miliki bukan untuk sebagai alat bukti dalam hukum / untuk alat bukti saat persidangan, namun kami akan tetap mengikuti peraturan perundang-undangan yang berlaku. Kami akan selalu melakukan koordinasi dengan Advokat/ bagian Hukum Kami. Kami akan melakukan transfer data/informasi kepada Vendor yang kami percayai untuk medukung bisnis dan layanan kami.
                        </p>
                        <li class="heading">Informasi Keamanan</li>
                        <p>
                            <a href="https://www.fishcek.com" target="blank">Fishcek.com</a> akan selalu berupaya menjaga keamanan informasi yang telah diberikan, kami akan menerapkan penjagaan yang ketat terhadap database kami untuk mencegah penyalahgunaan informasi, kehilangan, dan akses yang tidak valid terhadap data yang kami simpan.<br>
                            Namun telah kita ketahui, dalam Platform internet tidak ada yang 100% aman, maka dari itu kami tidak dapat menjamin keamanan informasi yang telah diberikan. Bantu kami memantau jika terjadi adanya penyalahgunaan informasi.
                        </p>
                        <li class="heading">Mengakses dan Memperbaharui Data Anda</li>
                        <p>
                            Jika anda ingin memperbaharui Data pribadi anda baik itu atas dasar inisatif anda, ataupun tuntutan hukum yang membenarkan, anda dapat melakukan perubahan data pribadi.
                        </p>
                        <li class="heading">Perubahan dan Amandemen</li>
                        <p>
                            <a href="https://www.fishcek.com" target="blank">Fishcek.com</a> memiliki wewenang dan hak untuk mengubah seluruh ketentuan dalam kebijakan tanpa adanya pemberitahuan apapun. Jika anda menggunakan Website <a href="https://www.fishcek.com" target="blank">Fishcek.com</a>, anda turut ikut patuh dalam perubahan seluruh ketentuan dalam Kebijakan Layanan ini. Silahkan selalu mengecek <router-link to="/policy/privacy">Kebijakan Privasi</router-link>.
                        </p>
                        <li class="heading">Penerimaan Kebijakan</li>
                        <p>
                            Dengan anda menggunakan website <a href="https://www.fishcek.com" target="blank">Fishcek.com</a> dan/atau aplikasinya, Anda tela menyetujui dan tunduk/patuh terhadap kebijakan Privasi ini. Jika anda tidak setuju berati anda tidak mempunyai wewenang dalam mengakses website <a href="https://www.fishcek.com" target="blank">Fishcek.com</a>. Kebijakan Privasi ini akan terus update secara berkala tanpa pemberitahuan, disarankan Agar Pengguna selalu melihat perubahan <router-link to="/policy/privacy">Kebijakan Privasi</router-link> ini. 
                        </p>
                        <li class="heading">Hubungi Kami</li>
                        <p>
                            Jika Anda sebagai Pengguna, memiliki beberapa pertanyaan tambahan terkait <router-link to="/policy/privacy">Kebijakan Privasi</router-link> ini, silahkan menuliskan Email kepada info.fishcek@gmail.com. 
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
      title:'Kebijakan Privacy',
      dateUpdate:'23 Agustus 2021'
  })
}
</script>