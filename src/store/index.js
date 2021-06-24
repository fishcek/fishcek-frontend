import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import laporan from './laporan'
import VuexPersist from 'vuex-persist'
Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'fishcek',
  storage : localStorage
})

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  modules: {
    auth,
    laporan
  }
})
