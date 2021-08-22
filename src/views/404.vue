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
                <h3 class="text-center">404</h3>
                <div class="wave3">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1976d2" fill-opacity="1" d="M0,256L34.3,234.7C68.6,213,137,171,206,128C274.3,85,343,43,411,74.7C480,107,549,213,617,229.3C685.7,245,754,171,823,165.3C891.4,160,960,224,1029,224C1097.1,224,1166,160,1234,128C1302.9,96,1371,96,1406,96L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg> -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1976d2" fill-opacity="1" d="M0,0L60,26.7C120,53,240,107,360,112C480,117,600,75,720,74.7C840,75,960,117,1080,122.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
                <div class="wave2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,0L60,26.7C120,53,240,107,360,112C480,117,600,75,720,74.7C840,75,960,117,1080,122.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L80,266.7C160,245,320,203,480,197.3C640,192,800,224,960,213.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> -->
                </div>
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