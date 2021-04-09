import Vue from 'vue'
import { Simplert } from "vue2-simplert-plugin";
import "vue2-simplert-plugin/dist/vue2-simplert-plugin.min.css";

import App from './App.vue'
import router from './router'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'

Vue.use(Chakra)
Vue.use(Simplert)

Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount()
