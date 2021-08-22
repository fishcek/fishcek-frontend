<template>
    <div>
        <div class="footer footer-bc">
            <div class="footer-top">      
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-contact">
                            <h2>Fishcek</h2>
                            <p>
                                <strong>Phone 1 :</strong><a href="https://api.whatsapp.com/send/?phone=62895326393065">{{contact[0].phone}}</a><br>
                                <strong>Phone 2 :</strong><a href="https://api.whatsapp.com/send/?phone=62895326393065">{{contact[1].phone}}</a><br>
                                <strong>Phone 3 :</strong><a href="https://api.whatsapp.com/send/?phone=62895326393065">{{contact[2].phone}}</a><br>
                                <strong>Email :</strong> <a href="mailto:info.fishcek@gmail.com">{{contact[3].email}}</a><br>  
                            </p>                         
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-links m-b-10">
                            <h5>Layanan Kami</h5>
                            <a href="#">Cek Penipuan</a>
                            <router-link to="/artikel">Artikel</router-link>
                            <router-link to="/rekan">ReKan</router-link>
                            <router-link to="/FAQ">FAQ</router-link>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-links m-b-10">
                            <h5>Fishcek</h5>
                            <a href="#">Tentang Fishcek</a>
                            <a href="#">Hak Kekayaan Intelektual</a>
                            <router-link to="/policy/term">Syarat dan Ketentuan</router-link>
                            <router-link to="/policy/privacy">Kebijakan Privacy</router-link>  
                            <router-link to="/policy/contact">Hubungi Kami</router-link>                            
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-links m-b-10">
                            <h5>Sosial Media</h5>
                            <p>Memberikan berita dan informasi terkini di dunia perikanan</p>                            
                            <div class="social-links mt-3">
                            <a href="#" class="btn-cs-outline-circle bc-youtube"> <b-icon icon="youtube" style="font-weight"></b-icon> </a>
                            <a href="https://www.facebook.com/fishcek.fishcek.9" target="blank" class="btn-cs-outline-circle bc-facebook"> <b-icon icon="facebook" style="font-weight"></b-icon> </a>
                            <a href="https://www.instagram.com/fishcek_/" target="blank" class="btn-cs-outline-circle bc-instagram"> <b-icon icon="instagram" style="font-weight"></b-icon> </a>
                            <a href="#" class="btn-cs-outline-circle bc-twitter"> <b-icon icon="twitter" style="font-weight"></b-icon> </a>
                            </div>
                        </div>
                    </div>
                </div>          
                
            </div>
            <div class="footer-bottom">
                <div class="container clearfix">
                    <div class="copyright">
                        <strong><span>Copyright</span></strong> &copy; 2021 <router-link :to="'/'">Fishcek</router-link>
                    </div>
                    <div class="credits">
                        <div class="icon"><b-icon icon="code-slash" style="font-weight"></b-icon> With <b-icon icon="heart-fill" variant="danger"></b-icon> in Love Indonesia</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:()=>({
        contact:[
          { phone: '+62 895 3263 93065', admin: 'Fred'},
          { phone: '+62 5589 55488 55', admin: 'Fred'},
          { phone: '+62 5589 55488 55', admin: 'Fred'},
          { email: 'info.fishcek@gmail.com', admin: 'Fred'},
        ]
    })
}
</script>