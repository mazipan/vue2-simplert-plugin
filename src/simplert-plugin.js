import SimplertComponent from './Simplert.vue'
import { SimplertEventBus } from './simplert-event-bus.js'

const Simplert = {
  install (Vue = {}) {

    let SimplertPlugin = {
      $vm: null,
      state: {},
      init(vm) {
        this.$vm = vm
      },
      open(obj) {
        if (!this.$vm) return
        obj.show = true
        this.$vm.$emit('open', obj);
      },
      close() {
        if (!this.$vm) return
        this.$vm.$emit('close');
      }
    }

    SimplertPlugin.init(SimplertEventBus)

    Vue.component('simplert', SimplertComponent)
    Vue.prototype.$Simplert = SimplertPlugin
  }
}

export default Simplert
