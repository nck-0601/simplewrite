import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
//引入vue-router
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
