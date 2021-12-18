<template>
    <div>
        <Sidebar/>
        <div class="cekPenipuan-page container">
            <div class="boxed b-r bc-image1">
                <div class="text-detail">
                    <h4 class="boxed-title">Laporkan Nomor {{kategori}} Penipuan</h4>
                    <h6 class="boxed-subtitle">Laporan kamu sangat berarti untuk mencegah terjadinya penipuan di masa mendatang oleh pelaku yang sama.</h6>
                </div>
            </div>
            <div class="m-t-10">
                <div class="boxed-fluid bx-shadow b-r">
                    <div class="b-r">
                        <div class="">
                            <h2 class="text-center m-b-20">Isi Formnya Ya</h2>
                            <div class="boxed-form">
                                <b-form @submit="onSubmit" @reset="onReset"> 
                                    <div class="boxed-form-title ">
                                        <h6>Beritahu Kami Siapa Dia</h6>
                                    </div>
                                    <div v-if="type=isTelepon">
                                        <b-form-group id="input-group-1" label="Nama Pemilik Nomor Telepon" label-for="input-1" class="m-b-10">
                                            <b-form-input
                                            id="input-1"
                                            v-model="namaTerduga"
                                            type="text"
                                            placeholder="Nama Pemilik Nomor Telepon Terduga Penipu"
                                            required
                                            ></b-form-input>
                                        </b-form-group>

                                        <b-form-group id="input-group-2" label="Nomor Telepon Terduga Penipu" label-for="input-2" class="m-b-10">
                                            <b-form-input
                                            id="input-2"
                                            v-model="nomorTerduga"
                                            type="number"
                                            placeholder="Nomor Telepon Terduga Penipu"
                                            required
                                            ></b-form-input>
                                        </b-form-group>
                                    </div> 
                                    <div v-else>
                                        <b-form-group id="input-group-1" label="Nama Pemilik Nomor Rekening" label-for="input-1" class="m-b-10">
                                            <b-form-input
                                            id="input-1"
                                            v-model="namaTerduga"
                                            type="text"
                                            placeholder="Nama Pemilik Nomor Rekening Terduga Penipu"
                                            required
                                            ></b-form-input>
                                        </b-form-group>

                                        <b-form-group id="input-group-4" label="Dia Menggunakan Bank Apa ?" label-for="input-4" class="m-b-10">
                                            <b-form-select v-model="bank" class="form-control">
                                                <template>
                                                    <b-form-select-option :value="null" disabled>-- Silahkan Pilih Nama Bank --</b-form-select-option>
                                                </template>
                                                <option v-for="bank in banks" :key="bank.code" :value="bank.code" >{{ bank.name }}</option>
                                            </b-form-select>
                                        </b-form-group>

                                        <b-form-group id="input-group-2" label="Nomor Rekening Terduga Penipu" label-for="input-2" class="m-b-10">
                                            <b-form-input
                                            id="input-2"
                                            v-model="nomorTerduga"
                                            type="number"
                                            placeholder="Nomor Rekening Terduga Penipu"
                                            required
                                            ></b-form-input>
                                        </b-form-group>
                                        
                                        <b-row>
                                            <b-col cols="12" lg="6" md="12" sm="12">
                                                <b-form-group id="input-group-4" label="Dia Menipu Pakai Akun Apa ?" label-for="input-4" class="m-b-10">
                                                    <b-form-select v-model="contact" class="form-control">
                                                        <template>
                                                            <b-form-select-option :value="null" disabled>-- Silahkan Pilih Akun --</b-form-select-option>
                                                        </template>
                                                        <option v-for="contact in contacts" :key="contact.code" :value="contact.code" >{{ contact.name }}</option>
                                                    </b-form-select>
                                                </b-form-group>                      
                                            </b-col>
                                            <b-col cols="12" lg="6" md="12" sm="12" class="">
                                                <b-form-group id="input-group-2" label="Apa Nama Akunnya ?" label-for="input-2" class="m-b-10">
                                                    <b-form-input
                                                    id="input-2"
                                                    v-model="contactName"
                                                    type="number"
                                                    placeholder="Kontak Terduga Penipu"
                                                    required
                                                    ></b-form-input>
                                                </b-form-group>
                                            </b-col>
                                        </b-row>
                                    </div>  

                                    <div class="boxed-form-title">
                                        <h6>Jelaskan Peristiwanya Kepada Kami</h6>
                                    </div>

                                    <b-form-group id="input-group-4" label="Dia Menipu Melalui Apa ?" label-for="input-4" class="m-b-10">
                                        <b-form-select v-model="platform" class="form-control">
                                            <template>
                                                <b-form-select-option :value="null" disabled>-- Silahkan Pilih Medianya --</b-form-select-option>
                                            </template>
                                            <option v-for="platform in platforms" :key="platform.code" :value="platform.code" >{{ platform.name }}</option>
                                        </b-form-select>
                                    </b-form-group>

                                    <b-form-group id="input-group-4" label="Ceritakan Kronologinya" label-for="input-4" class="m-b-10">                                    
                                        <b-form-textarea
                                        id="textarea"
                                        v-model="kronologi"
                                        placeholder="Ceritakan Kronologinya Secara Rinci Ya"
                                        rows="8"
                                        max-rows="12"
                                        ></b-form-textarea>
                                    </b-form-group>

                                    <b-form-group id="input-group-4" prepend="Rp" label="Berapa Kerugiannya ?" label-for="input-4" class="m-b-10">
                                        <b-input-group prepend="Rp" class="mb-2 mr-sm-2 mb-sm-0">
                                            <b-form-input
                                            id="input-2"
                                            v-model="totalKerugian"
                                            type="number"
                                            placeholder="Total Kerugian"
                                            required
                                            ></b-form-input>
                                        </b-input-group>
                                    </b-form-group>

                                    <div class="boxed-form-title">
                                        <h6>Berikan Bukti Kronologinya</h6>
                                    </div>

                                    <b-form-group id="input-group-5" style="display:none">
                                        <b-form-file
                                        v-model="lampiran"
                                        :state="Boolean(lampiran)"
                                        multiple
                                        class="form-control"
                                        @change="cekFile()"
                                        ref="myFiles"
                                        id="file"
                                        ></b-form-file>
                                    </b-form-group>
                                    <div class="fileInput" @click="openFile()">
                                        <h6>Pilih File</h6>
                                    </div>
                                    <br>
                                    <b-form-file
                                        v-model="file1"
                                        :state="Boolean(file1)"
                                        multiple
                                        placeholder="Pilih File atau Letakan File Disini"
                                        drop-placeholder="Letakan File Disini"
                                        class="fileInput"
                                        @change="cekFile()"
                                        no-traverse
                                    ></b-form-file>
                                    <div class="text-center m-t-20">
                                        <b-button type="submit" class="btn-cs btn-cs-blue m-t-5 m-r-10 ">Submit</b-button>
                                        <b-button type="reset" class="btn-cs btn-cs-red m-t-5 ">Reset</b-button>
                                    </div>
                                    
                                </b-form>
                                <!-- <b-card class="mt-3" header="Form Data Result">
                                    <pre class="m-0">{{ file1.name }}</pre>
                                </b-card>
                                <input type="number" class="form-control" ref="pencarian" v-model="pencarianPenipuan" :placeholder="textPlaceholder">
                                <span class="text-error">{{txterror}}</span>
                                <p>Contoh : <span class="highlight"> {{noContoh}} </span></p>
                                <input type="button" class="btn-cs btn-cs-blue m-t-5 " value="Cek Penipuan" @click="cariPenipuan()"> -->
                            </div>
                        </div>
                    </div>
                </div>            
                <div class="m-t-20 b-r boxed">
                    <h6 class="text-center text-spacing">Terimakasih Telah Melapor. Laporan Kamu Akan Kami Proses</h6>
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
        kategori:'',
        noContoh:'',
        textPlaceholder:'',
        namaTerduga:'',
        nomorTerduga:'',
        email:'',
        kronologi:'',
        platform:null,
        bank: null,
        contact:null,
        contactName:'',
        totalKerugian:null,
        lampiran:[],
        file1:[],
        checked: [],
        platforms : [
                        {
                            name:"Instagram",
                            code:"001"
                        },
                        {
                            name:"Line",
                            code:"002"
                        },
                        {
                            name:"Facebook",
                            code:"003"
                        },
                        {
                            name:"Twitter",
                            code:"004"
                        },
                        {
                            name:"WhatsApp",
                            code:"005"
                        },
                        {
                            name:"Website",
                            code:"006"
                        },
                        {
                            name:"Aplikasi Mobile",
                            code:"007"
                        }
                    ],
        contacts : [
                        {
                            name:"Instagram",
                            code:"001"
                        },
                        {
                            name:"Line",
                            code:"002"
                        },
                        {
                            name:"Facebook",
                            code:"003"
                        },
                        {
                            name:"Twitter",
                            code:"004"
                        },
                        {
                            name:"WhatsApp",
                            code:"005"
                        },
                        {
                            name:"Website",
                            code:"006"
                        },
                        {
                            name:"Lainnya",
                            code:"008"
                        }
                    ],
        banks : [ 
                    {
                        name: "BANK BRI",
                        code: "002"
                    },
                    {
                        name: "BANK EKSPOR INDONESIA",
                        code: "003"
                    },
                    {
                        name: "BANK MANDIRI",
                        code: "008"
                    },
                    {
                        name: "BANK BNI",
                        code: "009"
                    },
                    {
                        name: "BANK BNI SYARIAH",
                        code: "427"
                    },
                    {
                        name: "BANK DANAMON",
                        code: "011"
                    },
                    {
                        name: "PERMATA BANK",
                        code: "013"
                    },
                    {
                        name: "BANK BCA",
                        code: "014"
                    },
                    {
                        name: "BANK BII",
                        code: "016"
                    },
                    {
                        name: "BANK PANIN",
                        code: "019"
                    },
                    {
                        name: "BANK ARTA NIAGA KENCANA",
                        code: "020"
                    },
                    {
                        name: "BANK NIAGA",
                        code: "022"
                    },
                    {
                        name: "BANK BUANA IND",
                        code: "023"
                    },
                    {
                        name: "BANK LIPPO",
                        code: "026"
                    },
                    {
                        name: "BANK NISP",
                        code: "028"
                    },
                    {
                        name: "AMERICAN EXPRESS BANK LTD",
                        code: "030"
                    },
                    {
                        name: "CITIBANK N.A.",
                        code: "031"
                    },
                    {
                        name: "JP. MORGAN CHASE BANK, N.A.",
                        code: "032"
                    },
                    {
                        name: "BANK OF AMERICA, N.A",
                        code: "033"
                    },
                    {
                        name: "ING INDONESIA BANK",
                        code: "034"
                    },
                    {
                        name: "BANK MULTICOR TBK.",
                        code: "036"
                    },
                    {
                        name: "BANK ARTHA GRAHA",
                        code: "037"
                    },
                    {
                        name: "BANK CREDIT AGRICOLE INDOSUEZ",
                        code: "039"
                    },
                    {
                        name: "THE BANGKOK BANK COMP. LTD",
                        code: "040"
                    },
                    {
                        name: "THE HONGKONG & SHANGHAI B.C.",
                        code: "041"
                    },
                    {
                        name: "THE BANK OF TOKYO MITSUBISHI UFJ LTD",
                        code: "042"
                    },
                    {
                        name: "BANK SUMITOMO MITSUI INDONESIA",
                        code: "045"
                    },
                    {
                        name: "BANK DBS INDONESIA",
                        code: "046"
                    },
                    {
                        name: "BANK RESONA PERDANIA",
                        code: "047"
                    },
                    {
                        name: "BANK MIZUHO INDONESIA",
                        code: "048"
                    },
                    {
                        name: "STANDARD CHARTERED BANK",
                        code: "050"
                    },
                    {
                        name: "BANK ABN AMRO",
                        code: "052"
                    },
                    {
                        name: "BANK KEPPEL TATLEE BUANA",
                        code: "053"
                    },
                    {
                        name: "BANK CAPITAL INDONESIA, TBK.",
                        code: "054"
                    },
                    {
                        name: "BANK BNP PARIBAS INDONESIA",
                        code: "057"
                    },
                    {
                        name: "BANK UOB INDONESIA",
                        code: "058"
                    },
                    {
                        name: "KOREA EXCHANGE BANK DANAMON",
                        code: "059"
                    },
                    {
                        name: "RABOBANK INTERNASIONAL INDONESIA",
                        code: "060"
                    },
                    {
                        name: "ANZ PANIN BANK",
                        code: "061"
                    },
                    {
                        name: "DEUTSCHE BANK AG.",
                        code: "067"
                    },
                    {
                        name: "BANK WOORI INDONESIA",
                        code: "068"
                    },
                    {
                        name: "BANK OF CHINA LIMITED",
                        code: "069"
                    },
                    {
                        name: "BANK BUMI ARTA",
                        code: "076"
                    },
                    {
                        name: "BANK EKONOMI",
                        code: "087"
                    },
                    {
                        name: "BANK ANTARDAERAH",
                        code: "088"
                    },
                    {
                        name: "BANK HAGA",
                        code: "089"
                    },
                    {
                        name: "BANK IFI",
                        code: "093"
                    },
                    {
                        name: "BANK CENTURY, TBK.",
                        code: "095"
                    },
                    {
                        name: "BANK MAYAPADA",
                        code: "097"
                    },
                    {
                        name: "BANK JABAR",
                        code: "110"
                    },
                    {
                        name: "BANK DKI",
                        code: "111"
                    },
                    {
                        name: "BPD DIY",
                        code: "112"
                    },
                    {
                        name: "BANK JATENG",
                        code: "113"
                    },
                    {
                        name: "BANK JATIM",
                        code: "114"
                    },
                    {
                        name: "BPD JAMBI",
                        code: "115"
                    },
                    {
                        name: "BPD ACEH",
                        code: "116"
                    },
                    {
                        name: "BANK SUMUT",
                        code: "117"
                    },
                    {
                        name: "BANK NAGARI",
                        code: "118"
                    },
                    {
                        name: "BANK RIAU",
                        code: "119"
                    },
                    {
                        name: "BANK SUMSEL",
                        code: "120"
                    },
                    {
                        name: "BANK LAMPUNG",
                        code: "121"
                    },
                    {
                        name: "BPD KALSEL",
                        code: "122"
                    },
                    {
                        name: "BPD KALIMANTAN BARAT",
                        code: "123"
                    },
                    {
                        name: "BPD KALTIM",
                        code: "124"
                    },
                    {
                        name: "BPD KALTENG",
                        code: "125"
                    },
                    {
                        name: "BPD SULSEL",
                        code: "126"
                    },
                    {
                        name: "BANK SULUT",
                        code: "127"
                    },
                    {
                        name: "BPD NTB",
                        code: "128"
                    },
                    {
                        name: "BPD BALI",
                        code: "129"
                    },
                    {
                        name: "BANK NTT",
                        code: "130"
                    },
                    {
                        name: "BANK MALUKU",
                        code: "131"
                    },
                    {
                        name: "BPD PAPUA",
                        code: "132"
                    },
                    {
                        name: "BANK BENGKULU",
                        code: "133"
                    },
                    {
                        name: "BPD SULAWESI TENGAH",
                        code: "134"
                    },
                    {
                        name: "BANK SULTRA",
                        code: "135"
                    },
                    {
                        name: "BANK NUSANTARA PARAHYANGAN",
                        code: "145"
                    },
                    {
                        name: "BANK SWADESI",
                        code: "146"
                    },
                    {
                        name: "BANK MUAMALAT",
                        code: "147"
                    },
                    {
                        name: "BANK MESTIKA",
                        code: "151"
                    },
                    {
                        name: "BANK METRO EXPRESS",
                        code: "152"
                    },
                    {
                        name: "BANK SHINTA INDONESIA",
                        code: "153"
                    },
                    {
                        name: "BANK MASPION",
                        code: "157"
                    },
                    {
                        name: "BANK HAGAKITA",
                        code: "159"
                    },
                    {
                        name: "BANK GANESHA",
                        code: "161"
                    },
                    {
                        name: "BANK WINDU KENTJANA",
                        code: "162"
                    },
                    {
                        name: "HALIM INDONESIA BANK",
                        code: "164"
                    },
                    {
                        name: "BANK HARMONI INTERNATIONAL",
                        code: "166"
                    },
                    {
                        name: "BANK KESAWAN",
                        code: "167"
                    },
                    {
                        name: "BANK TABUNGAN NEGARA (PERSERO)",
                        code: "200"
                    },
                    {
                        name: "BANK HIMPUNAN SAUDARA 1906, TBK .",
                        code: "212"
                    },
                    {
                        name: "BANK TABUNGAN PENSIUNAN NASIONAL",
                        code: "213"
                    },
                    {
                        name: "BANK SWAGUNA",
                        code: "405"
                    },
                    {
                        name: "BANK JASA ARTA",
                        code: "422"
                    },
                    {
                        name: "BANK MEGA",
                        code: "426"
                    },
                    {
                        name: "BANK BUKOPIN",
                        code: "441"
                    },
                    {
                        name: "BANK SYARIAH MANDIRI",
                        code: "451"
                    },
                    {
                        name: "BANK BISNIS INTERNASIONAL",
                        code: "459"
                    },
                    {
                        name: "BANK SRI PARTHA",
                        code: "466"
                    },
                    {
                        name: "BANK JASA JAKARTA",
                        code: "472"
                    },
                    {
                        name: "BANK BINTANG MANUNGGAL",
                        code: "484"
                    },
                    {
                        name: "BANK BUMIPUTERA",
                        code: "485"
                    },
                    {
                        name: "BANK YUDHA BHAKTI",
                        code: "490"
                    },
                    {
                        name: "BANK MITRANIAGA",
                        code: "491"
                    },
                    {
                        name: "BANK AGRO NIAGA",
                        code: "494"
                    },
                    {
                        name: "BANK INDOMONEX",
                        code: "498"
                    },
                    {
                        name: "BANK ROYAL INDONESIA",
                        code: "501"
                    },
                    {
                        name: "BANK ALFINDO",
                        code: "503"
                    },
                    {
                        name: "BANK SYARIAH MEGA",
                        code: "506"
                    },
                    {
                        name: "BANK INA PERDANA",
                        code: "513"
                    },
                    {
                        name: "BANK HARFA",
                        code: "517"
                    },
                    {
                        name: "PRIMA MASTER BANK",
                        code: "520"
                    },
                    {
                        name: "BANK PERSYARIKATAN INDONESIA",
                        code: "521"
                    },
                    {
                        name: "BANK AKITA",
                        code: "525"
                    },
                    {
                        name: "LIMAN INTERNATIONAL BANK",
                        code: "526"
                    },
                    {
                        name: "ANGLOMAS INTERNASIONAL BANK",
                        code: "531"
                    },
                    {
                        name: "BANK DIPO INTERNATIONAL",
                        code: "523"
                    },
                    {
                        name: "BANK KESEJAHTERAAN EKONOMI",
                        code: "535"
                    },
                    {
                        name: "BANK UIB",
                        code: "536"
                    },
                    {
                        name: "BANK ARTOS IND",
                        code: "542"
                    },
                    {
                        name: "BANK PURBA DANARTA",
                        code: "547"
                    },
                    {
                        name: "BANK MULTI ARTA SENTOSA",
                        code: "548"
                    },
                    {
                        name: "BANK MAYORA",
                        code: "553"
                    },
                    {
                        name: "BANK INDEX SELINDO",
                        code: "555"
                    },
                    {
                        name: "BANK VICTORIA INTERNATIONAL",
                        code: "566"
                    },
                    {
                        name: "BANK EKSEKUTIF",
                        code: "558"
                    },
                    {
                        name: "CENTRATAMA NASIONAL BANK",
                        code: "559"
                    },
                    {
                        name: "BANK FAMA INTERNASIONAL",
                        code: "562"
                    },
                    {
                        name: "BANK SINAR HARAPAN BALI",
                        code: "564"
                    },
                    {
                        name: "BANK HARDA",
                        code: "567"
                    },
                    {
                        name: "BANK FINCONESIA",
                        code: "945"
                    },
                    {
                        name: "BANK MERINCORP",
                        code: "946"
                    },
                    {
                        name: "BANK MAYBANK INDOCORP",
                        code: "947"
                    },
                    {
                        name: "BANK OCBC – INDONESIA",
                        code: "948"
                    },
                    {
                        name: "BANK CHINA TRUST INDONESIA",
                        code: "949"
                    },
                    {
                        name: "BANK COMMONWEALTH",
                        code: "950"
                    },
                    {
                        name: "BANK BJB SYARIAH",
                        code: "425"
                    },
                    {
                        name: "BPR KS (KARYAJATNIKA SEDAYA)",
                        code: "688"
                    },
                    {
                        name: "INDOSAT DOMPETKU",
                        code: "789"
                    },
                    {
                        name: "TELKOMSEL TCASH / LINKAJA",
                        code: "911"
                    }
                ]
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
    computed :{
        isTelepon() {
            return this.$route.params.type === 'notelepon'
        }
    },
    methods : {
        go(){
            this.kategori = this.$route.params.type

            if (this.kategori=='notelepon') {
                this.kategori='Telepon'
                this.noContoh='085795851996'
                this.textPlaceholder='Pencarian No Telepon'
            }else{
                this.kategori='Rekening'
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
        },
        cekFile(){
            console.log(this.file1)
        },
        openFile(){
            document.getElementById('file').click()
        },
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.food = null
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
            this.show = true
            })
        },
        getValuePelaporan(){
            const cekStorage=JSON.parse(localStorage.getItem('fishcek'));
            const varNumber = cekStorage.laporan.nomorPenipuanLapor
            const params = varNumber.split('-')
            let type = params[0]
            switch (type) {
                case 'isTelepon':
                    
                    break;
                case 'isRekening':
                    
                    break;
            
                default:
                    break;
            }
        }
    },
    created(){
        this.go()
        this.getValuePelaporan()
        
    }

    
}
</script>