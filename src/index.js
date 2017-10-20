import SimplertComponent from './Simplert.vue'
import configDefaultConfig from './simplert-default-config'

const Simplert = {
  install (Vue, options = {}) {
    const inBrowser = typeof window !== 'undefined'       
    function assign(target, source) { // eslint-disable-line no-unused-vars
      for (var index = 1, key, src; index < arguments.length; ++index) {
        src = arguments[index];
        for (key in src) {
          if (Object.prototype.hasOwnProperty.call(src, key)) {
            target[key] = src[key];
          }
        }
      }
      return target
    }

    let SimplertPlugin = {
      $vm: null,
      state: {},
      init(vm) {
        this.$vm = vm
      },
      open(obj) {
        if (!this.$vm) return
        obj.show = true
        this.$vm.CONFIG.options = assign(this.$vm.CONFIG.options, obj)
      },
      close() {
        if (!this.$vm) return
        this.$vm.CONFIG.options.show = false
      }
    }

    const simplertOptions = assign(configDefaultConfig.config, options)
    const SimplertEventBus = new Vue({
      data: {
        CONFIG: {
          options: simplertOptions
        }
      }
    })

    if (inBrowser) {
      window.SimplertEventBus = SimplertEventBus
      SimplertPlugin.init(SimplertEventBus)
    }    

    Vue.component('simplert', SimplertComponent)
    Vue.prototype.$Simplert = SimplertPlugin
  }
}

export default Simplert
