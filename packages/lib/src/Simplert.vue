<template>
  <div
    class="simplert"
    role="modal"
    :class="classSimplert"
    @click="closeOverlay"
  >
    <div class="simplert__content" :class="classContent">
      <div class="simplert__header">
        <div class="simplert__x" v-if="showXclose" @click="justCloseSimplert">
          &#9587;
        </div>
        <div v-if="useIcon">
          <div
            class="simplert__icon simplert__icon--info"
            v-if="type === 'info'"
          >
            <div class="simplert__line simplert__line--info" />
            <div class="simplert__line simplert__line--info-2" />
          </div>
          <div
            class="simplert__icon simplert__icon--success"
            v-if="type === 'success'"
          >
            <div class="simplert__line simplert__line--success" />
            <div class="simplert__line simplert__line--success-2" />
          </div>
          <div
            class="simplert__icon simplert__icon--warning"
            v-if="type === 'warning'"
          >
            <div class="simplert__line simplert__line--warning" />
            <div class="simplert__line simplert__line--warning-2" />
          </div>
          <div
            class="simplert__icon simplert__icon--error"
            v-if="type === 'error'"
          >
            <div class="simplert__line simplert__line--error" />
            <div class="simplert__line simplert__line--error-2" />
          </div>
          <div class="simplert__icon" v-if="customIconUrl !== ''">
            <img :src="customIconUrl" />
          </div>
        </div>
        <b class="simplert__title">{{ title }}</b>
      </div>
      <div class="simplert__body">
        <div v-html="message" />
      </div>
      <div class="simplert__footer">
        <button
          :class="classBtnConfirm"
          v-if="useConfirmBtn && !hideAllButton"
          @click="whenConfirm"
        >
          {{ customConfirmBtnText }}
        </button>
        <button
          :class="classBtnClose"
          v-if="!hideAllButton"
          @click="closeSimplert"
        >
          {{ customCloseBtnText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { CONSTANT } from './constants'
import { SimplertEventBus } from "./event-bus.js";

export default {
  name: "Simplert",

  props: {
    useRadius: {
      type: Boolean,
      default: true
    },
    useIcon: {
      type: Boolean,
      default: true
    },
    enableLog: {
      type: Boolean,
      default: false
    }
  },

  data: function () {
    return {
      eventBus: null,
      // hide/show alert
      showSimplert: false,
      // basic setup
      title: '',
      message: '',
      type: CONSTANT.DEFAULT_TYPE, // info (default), success, warning, error
      customClass: '',
      customIconUrl: '',
      // open event
      onOpen: null,
      // close button
      customCloseBtnText: CONSTANT.DEFAULT_BTN_CLOSE_TEXT,
      customCloseBtnClass: '',
      onClose: null,
      // confirm button
      useConfirmBtn: false,
      customConfirmBtnText: CONSTANT.DEFAULT_BTN_CONFIRM_TEXT,
      customConfirmBtnClass: '',
      onConfirm: null,
      // disabled overlay
      disableOverlayClick: false,
      hideAllButton: false,
      // x close
      showXclose: false,
    }
  },

  computed: {
    classSimplert: function () {
      let clasz = this.customClass
      if (this.showSimplert) {
        clasz = this.customClass + ' simplert--shown'
      }
      return clasz
    },

    classContent: function () {
      let clasz = ''
      if (this.useRadius) {
        clasz = 'simplert__content--radius'
      }
      return clasz
    },

    classBtnClose: function () {
      let clasz = 'simplert__close'
      if (this.useRadius) {
        clasz = 'simplert__close simplert__close--radius'
      }
      if (this.customCloseBtnClass) {
        clasz = this.customCloseBtnClass
      }
      return clasz
    },

    classBtnConfirm: function () {
      let clasz = 'simplert__confirm'
      if (this.useRadius) {
        clasz = 'simplert__confirm simplert__confirm--radius'
      }
      if (this.customConfirmBtnClass) {
        clasz = this.customConfirmBtnClass
      }
      return clasz
    }
  },

  methods: {
    justCloseSimplert: function () {
      this.showSimplert = false
    },

    closeOverlay: function (e) {
      const _self = this
      if (e.target.className.indexOf('simplert--shown') > 0 && !_self.disableOverlayClick) {
        this.justCloseSimplert()
      }
    },

    whenConfirm: function (e) {
      const _self = this
      e.preventDefault()

      this.justCloseSimplert()

      if (_self.onConfirm !== null) {
        _self.onConfirm()
      }
    },

    closeSimplert: function (e) {
      const _self = this
      e.preventDefault()

      this.justCloseSimplert()

      if (_self.onClose !== null) {
        _self.onClose()
      }
    },

    openSimplert: function (obj) {
      const _self = this
      if (typeof obj !== 'undefined') {
        _self.showSimplert = true
        _self.title = obj.title

        if (typeof obj.message !== 'undefined') {
          _self.message = obj.message
        } else {
          _self.message = ''
        }
        if (typeof obj.type !== 'undefined') {
          _self.type = obj.type
        } else {
          _self.type = CONSTANT.DEFAULT_TYPE
        }

        if (typeof obj.customClass !== 'undefined') {
          _self.customClass = obj.customClass
        } else {
          _self.customClass = ''
        }

        if (typeof obj.customIconUrl !== 'undefined' && obj.customIconUrl !== '') {
          _self.customIconUrl = obj.customIconUrl
          _self.type = CONSTANT.INVALID_TYPE
        } else {
          _self.customIconUrl = ''
        }

        // close button setup
        if (typeof obj.customCloseBtnText !== 'undefined' && obj.customCloseBtnText !== '') {
          _self.customCloseBtnText = obj.customCloseBtnText
        } else {
          _self.customCloseBtnText = CONSTANT.DEFAULT_BTN_CLOSE_TEXT
        }

        if (typeof obj.customCloseBtnClass !== 'undefined') {
          _self.customCloseBtnClass = obj.customCloseBtnClass
        } else {
          _self.customCloseBtnClass = ''
        }

        if (typeof obj.onClose !== 'undefined' && obj.onClose !== null) {
          _self.onClose = obj.onClose
        } else {
          _self.onClose = null
        }

        // confirm button setup
        if (typeof obj.useConfirmBtn !== 'undefined') {
          _self.useConfirmBtn = obj.useConfirmBtn
        } else {
          _self.useConfirmBtn = false
        }

        if (typeof obj.customConfirmBtnText !== 'undefined' && obj.customConfirmBtnText !== '') {
          _self.customConfirmBtnText = obj.customConfirmBtnText
        } else {
          _self.customConfirmBtnText = CONSTANT.DEFAULT_BTN_CONFIRM_TEXT
        }

        if (typeof obj.customConfirmBtnClass !== 'undefined') {
          _self.customConfirmBtnClass = obj.customConfirmBtnClass
        } else {
          _self.customConfirmBtnClass = ''
        }

        if (typeof obj.onConfirm !== 'undefined' && obj.onConfirm !== null) {
          _self.onConfirm = obj.onConfirm
        } else {
          _self.onConfirm = null
        }

        if (typeof obj.disableOverlayClick !== 'undefined') {
          _self.disableOverlayClick = obj.disableOverlayClick
        } else {
          _self.disableOverlayClick = false
        }

        if (typeof obj.hideAllButton !== 'undefined') {
          _self.hideAllButton = obj.hideAllButton
        } else {
          _self.hideAllButton = false
        }

        if (typeof obj.showXclose !== 'undefined') {
          _self.showXclose = obj.showXclose
        } else {
          _self.showXclose = false
        }

        if (typeof obj.onOpen !== 'undefined') {
          _self.onOpen = obj.onOpen
        } else {
          _self.onOpen = null
        }

        if (_self.onOpen !== null) {
          _self.onOpen()
        }
      }
      if (this.enableLog) {
        console.log(_self)
      }
    }
  },
  created() {
    // listen eventBus
    SimplertEventBus.$on("open", this.openSimplert);
    SimplertEventBus.$on("close", this.justCloseSimplert);
  },
};
</script>

<style>
.simplert {
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.15;
}

.simplert *, .simplert *:before, .simplert *:after {
  box-sizing: inherit;
}

.simplert {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: none;
  overflow: auto;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.4);
}

.simplert--shown {
  display: flex;
  align-items: center;
}

.simplert--shown .simplert__content {
  animation-name: zoomIn;
  animation-duration: .3s;
  animation-fill-mode: both;
}

.simplert__x{
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  color: #b3aaaa;
  font-weight: bold;
  font-size: 11px;
}

.simplert__header {
  padding: 2em 0;
}

.simplert__title {
  font-size: 1.875rem;
  line-height: 1.25;
  font-weight: 700;
  display: block;
}

.simplert__content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media only screen and (min-width: 768px) {
  .simplert__content {
    width: 30%;
  }
}

.simplert__content--radius {
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  border-radius: 0.5rem;
}

.simplert__body {
  padding-bottom: 1rem;
}

.simplert__icon {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 10px auto;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.simplert__icon--info {
  border: 4px solid #1A72FF;
}

.simplert__icon--success {
  border: 4px solid #58C184;
}

.simplert__icon--warning {
  border: 4px solid #FD821B;
}

.simplert__icon--error {
  border: 4px solid #DD3B4B;
}

.simplert__icon img {
  width: 80px;
  height: 80px;
}

.simplert__line {
  position: absolute;
  z-index: 2;
  display: block;
  height: 5px;
  border-radius: 2px;
}

.simplert__line--info {
  position: absolute;
  top: 19px;
  left: 50%;
  width: 7px;
  height: 7px;
  margin-left: -3px;
  border-radius: 50%;
  background-color: #1A72FF;
}

.simplert__line--info-2 {
  position: absolute;
  bottom: 15px;
  left: 50%;
  width: 5px;
  height: 29px;
  margin-left: -2px;
  border-radius: 2px;
  background-color: #1A72FF;
}

.simplert__line--success {
  top: 44px;
  left: 6px;
  width: 25px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: #58C184;
}

.simplert__line--success-2 {
  top: 38px;
  right: 6px;
  width: 47px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background-color: #58C184;
}

.simplert__line--warning {
  position: absolute;
  top: 10px;
  left: 50%;
  width: 5px;
  height: 35px;
  margin-left: -2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  background-color: #FD821B;
}

.simplert__line--warning-2 {
  position: absolute;
  bottom: 10px;
  left: 50%;
  width: 7px;
  height: 7px;
  margin-left: -3px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background-color: #FD821B;
}

.simplert__line--error {
  top: 35px;
  left: 13px;
  width: 47px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: #DD3B4B;
}

.simplert__line--error-2 {
  top: 35px;
  right: 13px;
  width: 47px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background-color: #DD3B4B;
}

.simplert__footer {
  padding: 1em 0;
}

.simplert__close, .simplert__confirm {
  display: inline-block;
  line-height: 1.2;
  outline: none;
  font-weight: 700;
  margin: 0 .5em;
  border-radius: 0.25rem;
  height: 2.5rem;
  min-width: 2.5rem;
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #1a72ff;
  color: #fff;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.simplert__close:focus, .simplert__confirm:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgb(66 153 225 / 60%);
}

.simplert__close--radius, .simplert__confirm--radius {
  -webkit-border-radius: 0.3em;
  -moz-border-radius: 0.3em;
  border-radius: 0.3em;
}

@keyframes zoomIn {
  from {
    transform: scale3d(0.3, 0.3, 0.3);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>

