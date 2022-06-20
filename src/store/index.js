import Vue from 'vue'
import Vuex from 'vuex'
import AuthStore from './auth/index'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AuthStore
  }
})
