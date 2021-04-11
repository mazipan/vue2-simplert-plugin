<template>
  <div class="home">
    <section class="container hero">
      <HeaderComponent />
    </section>

    <section class="container">
      <Install />
    </section>

    <section class="container">
      <c-heading as="h3" color="orange.500" class="pacifico" id="basic-examples">Basic Examples</c-heading>
      <BasicType @open="open" />
    </section>

    <section class="container">
      <c-heading as="h3" color="orange.500" class="pacifico" id="more-examples">More Examples</c-heading>
      <AdvanceExamples @open="open" />
    </section>

    <FooterComponent />
  </div>
</template>

<script lang="js">
import {  CHeading } from '@chakra-ui/vue'
import HeaderComponent from '../components/Header'
import FooterComponent from '../components/Footer'
import Install from '../components/Install'
import BasicType from '../components/BasicType'
import AdvanceExamples from '../components/AdvanceExamples'

export default {
  name: 'Home',
  components: {
    HeaderComponent,
    FooterComponent,
    Install,
    BasicType,
    AdvanceExamples,
    CHeading,
  },
  data () {
    return {
    }
  },
  methods: {
    open(title, message, type, color, customCloseBtnText, customCloseBtnClass, customClass, customIconUrl) {
      const obj = {
        title: title,
        message: message,
        type: type
      }

      if (customCloseBtnText) {
        obj.customCloseBtnText = customCloseBtnText
      }

      if (customCloseBtnClass) {
        obj.customCloseBtnClass = customCloseBtnClass
      }

      if (customClass) {
        obj.customClass = customClass
      }

      if (customIconUrl) {
        obj.customIconUrl = customIconUrl
      }

      this.$Simplert.open(obj)
    },

    openCustomHtml() {
      const obj = {
        title: 'Custom HTML',
        message: '<span style="color:red;">I am HTML</span>',
        type: 'info'
      }

      this.$Simplert.open(obj)
    },

    onOpen() {
      alert('Hey, I am called when alert is opened')
    },

    onClose() {
      alert('Hey, I am Close Function')
    },

    onConfirm() {
      alert('Hey, You Confirmed')
    },

    openCustomFunction() {
      const obj = {
        title: 'Custom Function',
        message: 'Click close to trigger custom function',
        type: 'info',
        onClose: this.onClose
      }

      this.$Simplert.open(obj)
    },

    openWithOnOpen() {
      const obj = {
        title: 'On Open Function',
        message: 'There should be an alert before you see this',
        type: 'info',
        onOpen: this.onOpen
      }

      this.$Simplert.open(obj)
    },

    openWithConfirm(title, message, isCustomFunction, customConfirmBtnText, customConfirmBtnClass) {
      const obj = {
        title: title,
        message: message,
        type: 'info',
        useConfirmBtn: true,
      }

      if (isCustomFunction) {
        obj.onConfirm = this.onConfirm
      }

      if (customConfirmBtnText) {
        obj.customConfirmBtnText = customConfirmBtnText
      }

      if (customConfirmBtnClass) {
        obj.customConfirmBtnClass = customConfirmBtnClass
      }

      this.$Simplert.open(obj)
    },

    openDisabledOverlayClick() {
      const obj = {
        title: 'Disable Overlay Click',
        message: 'Now You can not close me by clicking overlay',
        type: 'info',
        disableOverlayClick: true
      }

      this.$Simplert.open(obj)
    },

    openWithHiddenButton() {
      const obj = {
        title: 'Hey, I am Title',
        message: 'I am Message',
        type: 'info',
        hideAllButton: true
      }

      this.$Simplert.open(obj)
    },

    openWithXbtn() {
      const obj = {
        title: 'Hey, I am Title',
        message: 'I am Message',
        type: 'info',
        showXclose: true
      }

      this.$Simplert.open(obj)
    },

    openWithStyle() {
      const obj = {
        title: 'Confirmation',
        message: 'Do you want to procced ?',
        customClass: 'custom-simplert',
        customIconUrl: '',
        customCloseBtnText: 'No, Just Close',
        customCloseBtnClass: 'no-procced-btn',
        onClose: this.onClose,
        useConfirmBtn: true,
        customConfirmBtnText: 'Yes, Procced Me',
        customConfirmBtnClass: 'procced-btn',
        onConfirm: this.onConfirm
      }

      this.$Simplert.open(obj)
    },

    callAnotherSimplert() {
      const confirm = () => {
        const obj = {
          title: 'Hey, I am Triggered',
          message: 'You have success open new simplert'
        }
        setTimeout(()=> {
          this.$Simplert.open(obj)
        }, 500)
      }
      const obj = {
        title: 'Open Another Simplert',
        message: 'Click confirm to show another simplert',
        useConfirmBtn: true,
        onConfirm: confirm
      }

      this.$Simplert.open(obj)
    }
  }
}
</script>

<style lang="scss">
pre:not(:last-of-type) {
  margin-bottom: 2rem;
}

.container {
  margin-top: 2em;

  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 760px) {
    padding-left: 14rem;
    padding-right: 14rem;
  }
}
</style>
