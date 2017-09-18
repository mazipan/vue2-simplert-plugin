'use strict'

import Simplert from './Simplert.vue'

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

module.exports.install = function (Vue, options = {}) { // eslint-disable-line no-undef
  const inBrowser = typeof window !== 'undefined'

  const SIMPLERT_CONST = {
    DEFAULT_TYPE: 'info',
    DEFAULT_BTN_CLOSE_TEXT: 'Close',
    DEFAULT_BTN_CONFIRM_TEXT: 'Confirm',
    INVALID_TYPE: 'INVALID_TYPE'
  }

  const DEFAULT_OPTION = {
    show: false,
    showSimplert: false,
    title: '',
    message: '',
    type: SIMPLERT_CONST.DEFAULT_TYPE, // info (default), success, warning, error
    customClass: '',
    customIconUrl: '',
    onOpen: null,
    customCloseBtnText: SIMPLERT_CONST.DEFAULT_BTN_CLOSE_TEXT,
    customCloseBtnClass: '',
    onClose: null,
    useConfirmBtn: false,
    customConfirmBtnText: SIMPLERT_CONST.DEFAULT_BTN_CONFIRM_TEXT,
    customConfirmBtnClass: '',
    onConfirm: null,
    disableOverlayClick: false,
    hideAllButton: false,
    showXclose: false
  }

  let Simplert = {
    $vm: null,
    state: {},
    init(vm) {
      this.$vm = vm
    },
    openSimplert() {
      if (!this.$vm) return
      this.$vm.CONFIG.options.show = true
    },
    closeSimplert() {
      if (!this.$vm) return
      this.$vm.CONFIG.options.show = false
    }
  }

  const simplertOptions = assign(DEFAULT_OPTION, options)

  const SimplertEventBus = new Vue({
    data: {
      CONFIG: {
        options: simplertOptions
      }
    }
  })

  if (inBrowser) {
    window.VueProgressBarEventBus = SimplertEventBus
    Simplert.init(SimplertEventBus)
  }

  Vue.component('Simplert', Simplert)
  Vue.prototype.$Simplert = Simplert
}