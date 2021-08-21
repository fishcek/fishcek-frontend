<template>
  <div class="home">
    <Navbar/>
    <div class="bc-image2">
        <section id="termPrivacy" class="termPrivacy container">
            <div class="boxed" data-aos="fade-up">
                <h3>{{title}}</h3>
                <div class="termPrivacy-list">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium tincidunt felis. Nullam vestibulum iaculis varius. Cras sollicitudin vel erat quis tincidunt. Fusce ipsum nibh, mollis non neque at, rutrum cursus mi. Nulla ut interdum ex, sit amet sagittis lorem. Morbi eu ipsum neque. Quisque consectetur odio neque, et facilisis turpis varius non. Donec ipsum tortor, aliquam a tellus quis, ultricies congue sem. Ut rhoncus vestibulum orci, et condimentum tellus hendrerit eget. Duis hendrerit erat ac arcu molestie aliquam. Donec convallis sem id elit cursus, sit amet tincidunt nunc commodo. Praesent vel augue ac ante tempor finibus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium tincidunt felis. Nullam vestibulum iaculis varius. Cras sollicitudin vel erat quis tincidunt. Fusce ipsum nibh, mollis non neque at, rutrum cursus mi. Nulla ut interdum ex, sit amet sagittis lorem. Morbi eu ipsum neque. Quisque consectetur odio neque, et facilisis turpis varius non. Donec ipsum tortor, aliquam a tellus quis, ultricies congue sem. Ut rhoncus vestibulum orci, et condimentum tellus hendrerit eget. Duis hendrerit erat ac arcu molestie aliquam. Donec convallis sem id elit cursus, sit amet tincidunt nunc commodo. Praesent vel augue ac ante tempor finibus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium tincidunt felis. Nullam vestibulum iaculis varius. Cras sollicitudin vel erat quis tincidunt. Fusce ipsum nibh, mollis non neque at, rutrum cursus mi. Nulla ut interdum ex, sit amet sagittis lorem. Morbi eu ipsum neque. Quisque consectetur odio neque, et facilisis turpis varius non. Donec ipsum tortor, aliquam a tellus quis, ultricies congue sem. Ut rhoncus vestibulum orci, et condimentum tellus hendrerit eget. Duis hendrerit erat ac arcu molestie aliquam. Donec convallis sem id elit cursus, sit amet tincidunt nunc commodo. Praesent vel augue ac ante tempor finibus.
                    </p>                    
                </div>
                <div class="termPrivacy-list">
                    <ol type="A">
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
      title:'Syarat & Ketentuan'
  })
}
</script>