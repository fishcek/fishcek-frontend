export default{
    namespaced:true,
    state : {
        pencarianPenipuan : '',
        kategori :'',
        provider : '',
        nomorPenipuanLapor:''
    },
    mutations:{
        setPencarian : (state, payload) => {
            state.pencarianPenipuan = payload
        },
        setKategori : (state, payload) => {
            state.kategori = payload
        },
        setProvider : (state, payload) => {
            console.log(payload)
            state.provider = 'Nama Provider';          
        },
        setNumberPhone:(state, payload)=>{
            state.nomorPenipuanLapor=payload
            console.log(state.nomorPenipuanLapor)
        }
    },
    actions :{
        setProvider : ({commit}, payload) => {
            commit('setProvider', payload)
        },
        setNumberPhone : ({commit}, payload) => {
            commit('setNumberPhone', payload)
        }
    },
    getters:{
        pencarianPenipuan : state => state.pencarianPenipuan,
        kategori : state => state.kategori,
        provider : state => state.provider,
        nomorPenipuanLapor : state => state.nomorPenipuanLapor
                
    }
}
