export default{
    namespaced:true,
    state : {
        pencarianPenipuan : '',
        kategori :'',
        provider : ''
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
        }
    },
    actions :{
        setProvider : ({commit}, payload) => {
            commit('setProvider', payload)
        }
    },
    getters:{
        pencarianPenipuan : state => state.pencarianPenipuan,
        kategori : state => state.kategori,
        provider : state => state.provider
                
    }
}
