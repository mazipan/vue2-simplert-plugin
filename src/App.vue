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

      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Call another alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue" @click="callAnotherSimplert">
            Click Me!
          </button>
        </div>
      </div>

    </div>

    <simplert></simplert>
  </div>
</template>

<script src="./app.js"></script>
<style lang="css" src="./demo.css"></style>
