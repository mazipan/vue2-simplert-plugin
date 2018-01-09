import Vue from 'vue'
import App from './App.vue'

/* global process */
if (process.env.NODE_ENV !== 'production') {
  Vue.config.devtools = true
}

import Simplert from './simplert-plugin.js'
Vue.use(Simplert, {})

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
