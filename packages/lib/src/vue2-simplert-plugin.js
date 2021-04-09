import SimplertComponent from './Simplert.vue'
import { SimplertEventBus } from './event-bus.js'

export const Simplert = {
  install (Vue = {}, options = {}) {

    const SimplertPlugin = {
      $vm: null,
      state: {},
      data: {
        options: {}
      },
      init(vm, opts) {
        this.$vm = vm
        this.options = opts
      },
      open(obj) {
        if (!this.$vm) return
        obj.show = true
        this.$vm.$emit('open', Object.assign({}, this.options, obj))
      },
      close() {
        if (!this.$vm) return
        this.$vm.$emit('close')
      }
    }

    SimplertPlugin.init(SimplertEventBus, options)

    Vue.component('simplert', SimplertComponent)
    Vue.prototype.$Simplert = SimplertPlugin
  }
}
