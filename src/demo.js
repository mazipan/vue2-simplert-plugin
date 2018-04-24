import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import App from './App.vue'
import Simplert from './simplert-plugin.js'

/* global process */
if (process.env.NODE_ENV !== 'production') {
  Vue.config.devtools = true
}

Vue.use(Simplert, {})
Vue.use(VueHighlightJS)

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
