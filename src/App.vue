<template>
  <div id="app" class="app">
    <div class="grid__row content centered">
      <h2>Example</h2>

      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Information Alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue" @click="open('Information!', 'Hey, I am Opened...', 'info')">
            Click Me!
          </button>
        </div>

        <div class="grid__col-3 example__title">Success Alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--green" @click="open('Success!', 'Hey, I am Opened...', 'success')">
            Click Me!
          </button>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Error Alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--red" @click="open('Error!', 'Hey, I am Opened...', 'error')">
            Click Me!
          </button>
        </div>

        <div class="grid__col-3 example__title">Warning Alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--orange" @click="open('Warning!', 'Hey, I am Opened...', 'warning')">
            Click Me!
          </button>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Alert Without Title</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue" @click="open('', 'Hey, I am Opened, but I dont have title', '')">
            Click Me!
          </button>
        </div>

        <div class="grid__col-3 example__title">Alert With HTML</div>
        <div class="grid__col-3">
          <button class="button button--radius button--orange" @click="openCustomHtml">
            Click Me!
          </button>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Alert With Custom Close Text</div>
        <div class="grid__col-3">
          <button class="button button--radius button--green" @click="open('Custom Close Text', 'Hey, I am Opened...', '', '', 'Custom Close Text')">
            Click Me!
          </button>
        </div>

        <div class="grid__col-3 example__title">Alert With Custom Close Class</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue" @click="open('Custom Close Class', 'Hey, I am Opened...', '', '', '', 'button button--radius button--red')">
            Click Me!
          </button>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Alert With Custom Close Function</div>
        <div class="grid__col-3">
          <button class="button button--radius button--red" @click="openCustomFunction">
            Click Me!
          </button>
        </div>

        <div class="grid__col-3 example__title">Alert With Custom Class</div>
        <div class="grid__col-3">
          <button class="button button--radius button--red" @click="open('Custom Class', 'Hey, I am Opened...', '', '', '', '', 'custom-class')">
            Click Me!
          </button>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Alert With Custom Icon</div>
        <div class="grid__col-3">
          <button class="button button--radius button--green" @click="open('Custom Icon', 'Hey, I am Opened...', '', '', '', '', '', 'https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-1/128/face-sad-512.png')">
            Click Me!
          </button>
        </div>

        <div class="grid__col-3 example__title">Alert With Confirm Button</div>
        <div class="grid__col-3">
          <button class="button button--radius button--red" @click="openWithConfirm('Confirm Button', 'Hey, I have Confirm Button Now', false)">
            Click Me!
          </button>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Alert With Confirm Button Custom Text</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue" @click="openWithConfirm('Confirm Button Custom Text', 'Hey, I am Opened...', false, 'Custom Text Confirm')">
            Click Me!
          </button>
        </div>

        <div class="grid__col-3 example__title">Alert With Confirm Function</div>
        <div class="grid__col-3">
          <button class="button button--radius button--orange" @click="openWithConfirm('Confirm Function', 'Click Confirm to trigger function', true)">
            Click Me!
          </button>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Alert With Confirm Button Custom Class</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue" @click="openWithConfirm('Confirm Button Custom Class', 'Hey, I am Opened...', false, '', 'button button--radius button--red')">
            Click Me!
          </button>
        </div>

        <div class="grid__col-3 example__title">Alert With Disable Overlay Click</div>
        <div class="grid__col-3">
          <button class="button button--radius button--green" @click="openDisabledOverlayClick">
            Click Me!
          </button>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Alert With All Button Hidden</div>
        <div class="grid__col-3">
          <button class="button button--radius button--orange" @click="openWithHiddenButton">
            Click Me!
          </button>
        </div>

        <div class="grid__col-3 example__title">Alert With Very Custom Style</div>
        <div class="grid__col-3">
          <button class="button button--radius button--green" @click="openWithStyle">
            Click Me!
          </button>
        </div>

      </div>

      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Alert with OnOpen Function</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue" @click="openWithOnOpen">
            Click Me!
          </button>
        </div>

        <div class="grid__col-3 example__title">Alert with X close button</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue" @click="openWithXbtn">
            Click Me!
          </button>
        </div>
      </div>

    </div>

    <simplert></simplert>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  },
  methods: {
    open(title, message, type, color, customCloseBtnText, customCloseBtnClass, customClass, customIconUrl) {
      let obj = {
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
      let obj = {
        title: 'Custom HTML',
        message: '<span style="color:red;">I am HTML</span>',
        type: 'info'
      }

      this.$Simplert.open(obj)
    },

    onOpen() {
      alert("Hey, I am called when alert is opened")
    },

    onClose() {
      alert('Hey, I am Close Function')
    },

    onConfirm() {
      alert('Hey, You Confirmed')
    },

    openCustomFunction() {
      let obj = {
        title: 'Custom Function',
        message: 'Click close to trigger custom function',
        type: 'info',
        onClose: this.onClose
      }

      this.$Simplert.open(obj)
    },

    openWithOnOpen() {
      let obj = {
        title: 'On Open Function',
        message: 'There should be an alert before you see this',
        type: 'info',
        onOpen: this.onOpen
      }

      this.$Simplert.open(obj)
    },

    openWithConfirm(title, message, isCustomFunction, customConfirmBtnText, customConfirmBtnClass) {
      let obj = {
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
      let obj = {
        title: 'Disable Overlay Click',
        message: 'Now You can not close me by clicking overlay',
        type: 'info',
        disableOverlayClick: true
      }

      this.$Simplert.open(obj)
    },

    openWithHiddenButton() {
      let obj = {
        title: 'Hey, I am Title',
        message: 'I am Message',
        type: 'info',
        hideAllButton: true
      }

      this.$Simplert.open(obj)
    },

    openWithXbtn() {
      let obj = {
        title: 'Hey, I am Title',
        message: 'I am Message',
        type: 'info',
        showXclose: true
      }

      this.$Simplert.open(obj)
    },

    openWithStyle() {
      let obj = {
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
    }
  }
}
</script>

<style lang="css" src="./demo.css"></style>