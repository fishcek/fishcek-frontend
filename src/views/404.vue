<template>
    <div>
        <div class="container-fuild">
            <div class="limiter">
            <div class="pageError">
                <h1 class="logo mr-auto p-t-40"><a href="index.html"><img src="../assets/img/logo.png" alt="" class="img-fluid"></a></h1>
                <br>
                <div class="text-center">
                <h2>Page Not Found</h2>
                <h6><router-link to='/'>Back To Home</router-link></h6>
                </div>
                <div class="wave2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L80,266.7C160,245,320,203,480,197.3C640,192,800,224,960,213.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
                <h3 class="text-center">404</h3>
                <div class="wave1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1e88e5" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,133.3C672,139,768,117,864,90.7C960,64,1056,32,1152,37.3C1248,43,1344,85,1392,106.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>

                <footer id="footer-error-page">  
                    <div class="container footer-bottom clearfix">
                        <div class="copyright">
                        <strong><span>Copyright</span></strong> &copy; 2021 <router-link :to="'/'">Fishcek</router-link>
                        </div>
                        <div class="credits">
                        <div class="icon"><b-icon icon="code-slash" style="font-weight"></b-icon> With <b-icon icon="heart-fill" variant="danger"></b-icon> in Bandung, Indonesia</div>
                        </div>
                    </div>
                </footer>               
            
            </div>
            </div>
        </div>
    </div>
</template>