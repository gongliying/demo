

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from "axios"
Vue.prototype.$axios = axios
import Mock from './mock'

Vue.config.productionTip = false

/* eslint-disable no-new */
 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
