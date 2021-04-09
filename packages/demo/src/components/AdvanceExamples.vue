<template>
  <div>
    <c-stack :spacing="5" :mt="5" is-inline>
      <c-box
        width="25%"
        :p="5"
        rounded="lg"
        shadow="md"
        border-width="1px"
        v-for="(typeV, idx) in typeVariantsRow1"
        :key="typeV.title"
      >
        <c-text font-size="xl" :mb="2">{{ typeV.title }}</c-text>

        <c-button :variant-color="colors[idx]" size="md" @click="typeV.fn">
          Click Me!
        </c-button>
      </c-box>
    </c-stack>

    <c-stack :spacing="5" :mt="5" is-inline>
      <c-box
        width="25%"
        :p="5"
        rounded="lg"
        shadow="md"
        border-width="1px"
        v-for="(typeV, idx) in typeVariantsRow2"
        :key="typeV.title"
      >
        <c-text font-size="xl" :mb="2">{{ typeV.title }}</c-text>

        <c-button :variant-color="colors[idx]" size="md" @click="typeV.fn">
          Click Me!
        </c-button>
      </c-box>
    </c-stack>

    <c-stack :spacing="5" :mt="5" is-inline>
      <c-box
        width="25%"
        :p="5"
        rounded="lg"
        shadow="md"
        border-width="1px"
        v-for="(typeV, idx) in typeVariantsRow3"
        :key="typeV.title"
      >
        <c-text font-size="xl" :mb="2">{{ typeV.title }}</c-text>

        <c-button :variant-color="colors[idx]" size="md" @click="typeV.fn">
          Click Me!
        </c-button>
      </c-box>
    </c-stack>

    <c-stack :spacing="5" :mt="5" is-inline>
      <c-box
        width="25%"
        :p="5"
        rounded="lg"
        shadow="md"
        border-width="1px"
        v-for="(typeV, idx) in typeVariantsRow4"
        :key="typeV.title"
      >
        <c-text font-size="xl" :mb="2">{{ typeV.title }}</c-text>

        <c-button :variant-color="colors[idx]" size="md" @click="typeV.fn">
          Click Me!
        </c-button>
      </c-box>
    </c-stack>
  </div>
</template>

<script lang="js">
import { CBox, CButton, CText, CStack } from '@chakra-ui/vue'

export default {
  name: 'AdvanceExamples',
  components: {
    CBox,
    CButton,
    CText,
    CStack,
  },
  data () {
    return {
      colors: ['blue', 'green', 'orange', 'red'],

      typeVariantsRow1: [{
        title: 'Alert Without Title',
        fn: () => {
          this.emitOpen('', 'Hey, I am Opened, but I dont have title', '')
        }
      }, {
        title: 'Alert With HTML',
        fn: () => {
          this.openCustomHtml()
        }
      }, {
        title: 'Alert With Custom Close Text',
        fn: () => {
          this.emitOpen('Custom Close Text', 'Hey, I am Opened...', '', '', 'This text is customized')
        }
      }, {
        title: 'Alert With Custom Close Class',
        fn: () => {
          this.emitOpen('Custom Close Class', 'Hey, I am Opened...', '', '', '', 'button--red')
        }
      }],


      typeVariantsRow2: [{
        title: 'Alert With Custom Close Close Fn',
        fn: () => {
          this.openCustomFunction()
        }
      }, {
        title: 'Alert With Custom Class',
        fn: () => {
          this.emitOpen('Custom Class', 'Hey, I am Opened...', '', '', '', '', 'custom-class')
        }
      }, {
        title: 'Alert With Custom Icon',
        fn: () => {
          this.emitOpen('Custom Icon', 'Hey, I am Opened...', '', '', '', '', '', 'https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-1/128/face-sad-512.png')
        }
      }, {
        title: 'Alert With Confirm Button',
        fn: () => {
          this.openWithConfirm('Confirm Button', 'Hey, I have Confirm Button Now', false)
        }
      }],


      typeVariantsRow3: [{
        title: 'Alert With Confirm Button Custom Text',
        fn: () => {
          this.openWithConfirm('Confirm Button Custom Text', 'Hey, I am Opened...', false, 'Custom Text Confirm')
        }
      }, {
        title: 'Alert With Confirm Function',
        fn: () => {
          this.openWithConfirm('Confirm Function', 'Click Confirm to trigger function', true)
        }
      }, {
        title: 'Alert With Confirm Button Custom Class',
        fn: () => {
          this.openWithConfirm('Confirm Button Custom Class', 'Hey, I am Opened...', false, '', 'button--red')
        }
      }, {
        title: 'Alert With Disable Overlay Click',
        fn: () => {
          this.openDisabledOverlayClick()
        }
      }],


      typeVariantsRow4: [{
        title: 'Alert With All Button Hidden',
        fn: () => {
          this.openWithHiddenButton()
        }
      }, {
        title: 'Alert With Very Custom Style',
        fn: () => {
          this.openWithStyle()
        }
      }]
    }
  },
  methods: {
    emitOpen (...args) {
      this.$emit('open', ...args);
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

<style>
.button--red {
  line-height: 1.2;
  outline: none;
  font-weight: 700;
  border-radius: 0.25rem;
  height: 2.5rem;
  min-width: 2.5rem;
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #b285fa;
  color: #fff;
}

.custom-class {
  color: #b285fa;
}

.custom-simplert {
  color: #dd3b4b;
}

.custom-simplert .no-procced-btn {
  line-height: 1.2;
  outline: none;
  font-weight: 700;
  border-radius: 0.25rem;
  height: 2.5rem;
  min-width: 2.5rem;
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #dd3b4b;
  color: #fff;
}

.custom-simplert .procced-btn {
  line-height: 1.2;
  outline: none;
  font-weight: 700;
  border-radius: 0.25rem;
  height: 2.5rem;
  min-width: 2.5rem;
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #2e8251;
  color: #fff;
}
</style>
