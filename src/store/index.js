import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import article from './article'
Vue.use(Vuex)


export default new Vuex.Store({
  modules :{
    login,
    article
  }
})
