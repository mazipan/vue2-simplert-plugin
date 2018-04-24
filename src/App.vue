<template>
  <div id="app" class="app">


    <header role="header" class="site__header header">
      <div class="header__wrapper">
        <div class="header__brand">
          <a href="https://mazipan.github.io/demo/">
            <img src="https://mazipan.github.io/images/irfan-maulana.jpg" alt="Irfan Maulana" title="Irfan Maulana">
          </a>
          <div class="header__title">Irfan Maulana | Demo</div>
        </div>

        <a href="https://github.com/mazipan/vue2-simplert-plugin"
            target="_blank" style="margin-right: 2em;">
          <SocialGithubIcon w="30px" h="30px"/>
        </a>

      </div>
    </header>

    <div class="grid__row centered" style="margin-bottom:1em;">
      <h1 class="centered">
        {{ title }}
        <small> {{ subtitle }} </small>
      </h1>

      <img src="https://mazipan.github.io/vue2-simplert/images/vue2-simplert-logo.png" alt="Vue2-Simplert" title="Vue2-Simplert">
    </div>

    <div class="grid__row content centered">
      <h2>Basic Examples</h2>

      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Information Alert</div>
          <button class="button button--radius button--blue"
                  @click="open('Information!', 'Hey, I am Opened...', 'info')">
                Click Me!
          </button>
        </div>

        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'info'
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-6">
        <div class="example__title">Success Alert</div>
          <button class="button button--radius button--green"
                  @click="open('Success!', 'Hey, I am Opened...', 'success')">
                Click Me!
          </button>
        </div>

        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'success'
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>


      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Error Alert</div>
          <button class="button button--radius button--red"
                  @click="open('Error!', 'Hey, I am Opened...', 'error')">
                Click Me!
          </button>
        </div>

        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'error'
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>


      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Warning Alert</div>
          <button class="button button--radius button--orange"
                  @click="open('Warning!', 'Hey, I am Opened...', 'warning')">
                Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'warning'
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>

      <h2>More Advance Examples</h2>

      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Alert Without Title</div>
          <button class="button button--radius button--blue"
                  @click="open('', 'Hey, I am Opened, but I dont have title', '')">
                Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let obj = {
              message: 'Alert Message',
              type: 'info'
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Alert With HTML</div>
          <button class="button button--radius button--orange"
                  @click="openCustomHtml">
                Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let obj = {
              title: 'Alert Title',
              message: '&lt;span style="color:red;">I am HTML&lt;/span>',
              type: 'info'
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>


      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Alert With Custom Close Text</div>
          <button class="button button--radius button--green"
                  @click="open('Custom Close Text', 'Hey, I am Opened...', '', '', 'Custom Close Text')">
                Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'info',
              customCloseBtnText: 'I am Close Button'
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Alert With Custom Close Class</div>
          <button class="button button--radius button--blue"
                  @click="open('Custom Close Class', 'Hey, I am Opened...', '', '', '', 'button button--radius button--red')">
                Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'info',
              customCloseBtnClass: 'btn-warning'
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Alert With Custom Close Function</div>
          <button class="button button--radius button--red"
                  @click="openCustomFunction">
                Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let closeFn = function() {
              alert("I am Closed")
            }
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'info',
              onClose: closeFn
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Alert With Custom Class</div>
          <button class="button button--radius button--red"
                  @click="open('Custom Class', 'Hey, I am Opened...', '', '', '', '', 'custom-class')">
                Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'info',
              customClass: 'popup-custom-class'
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Alert With Custom Icon</div>
          <button class="button button--radius button--green"
                  @click="open('Custom Icon', 'Hey, I am Opened...', '', '', '', '', '', 'https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-1/128/face-sad-512.png')">
                Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'info',
              customIconUrl: 'https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-1/128/face-sad-512.png'
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Alert With Confirm Button</div>
          <button class="button button--radius button--red"
                  @click="openWithConfirm('Confirm Button', 'Hey, I have Confirm Button Now', false)">
                Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'info',
              useConfirmBtn: true
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Alert With Confirm Button Custom Text</div>
          <button class="button button--radius button--blue"
                  @click="openWithConfirm('Confirm Button Custom Text', 'Hey, I am Opened...', false, 'Custom Text Confirm')">
                Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'info',
              useConfirmBtn: true,
              customConfirmBtnText: 'OK'
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Alert With Confirm Function</div>
          <button class="button button--radius button--orange"
                  @click="openWithConfirm('Confirm Function', 'Click Confirm to trigger function', true)">
                Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let confirmFn = function() {
              alert("I am Confirmed")
            }
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'info',
              useConfirmBtn: true,
              onConfirm: confirmFn
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Alert With Confirm Button Custom Class</div>
          <button class="button button--radius button--blue"
                  @click="openWithConfirm('Confirm Button Custom Class', 'Hey, I am Opened...', false, '', 'button button--radius button--red')">
                Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'info',
              useConfirmBtn: true,
              customConfirmBtnClass: 'btn-warning'
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Alert With Disable Overlay Click</div>
          <button class="button button--radius button--green"
                  @click="openDisabledOverlayClick">
                Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'info',
              disableOverlayClick: true
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>

       <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Alert With All Button Hidden</div>
          <button class="button button--radius button--orange"
                  @click="openWithHiddenButton">
                Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'info',
              hideAllButton: true
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Alert With Very Custom Style</div>
          <button class="button button--radius button--green"
                  @click="openWithStyle">
                Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
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
            </code>
          </pre>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Alert with OnOpen Function</div>
          <button class="button button--radius button--blue"
                  @click="openWithOnOpen">
            Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let openFn = function() {
              alert("I am Confirmed")
            }
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'info',
              onOpen: openFn
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-6">
          <div class="example__title">Alert with X close button</div>
          <button class="button button--radius button--blue"
                  @click="openWithXbtn">
            Click Me!
          </button>
        </div>
        <div class="grid__col-6">
          <pre v-highlightjs>
            <code class="javascript">
            let obj = {
              title: 'Alert Title',
              message: 'Alert Message',
              type: 'info',
              showXclose: true
            }
            this.$Simplert.open(obj)
            </code>
          </pre>
        </div>
      </div>

    </div>

    <div class="grid__row content centered">
      <h2>Contribute</h2>
      <p>Feel free to fork <i class="fa fa-code-fork"></i> on <a href="https://github.com/mazipan/vue2-simplert-plugin" target="_blank">GitHub <i class="fa fa-github"></i></a> if you have any features <i class="fa fa-cart-plus"></i> or bugs <i class="fa fa-bug"></i>!</p>
    </div>
    <div class="grid__row content centered">
      <h2>Contact Developer</h2>
      <p>
        <a href="https://github.com/mazipan">
          <SocialGithubIcon w="30px" h="30px"/>
        </a>
        <a href="mailto:mazipanneh@gmail.com">
          <IosEmailIcon w="30px" h="30px" />
        </a>
        <a href="https://facebook.com/mazipanneh">
          <SocialFacebookIcon w="30px" h="30px"/>
        </a>
        <a href="https://twitter.com/Maz_Ipan">
          <SocialTwitterIcon w="30px" h="30px"/>
        </a>
        <a href="https://id.linkedin.com/in/irfanmaulanamazipan">
          <SocialLinkedinIcon w="30px" h="30px"/>
        </a>
      </p>
    </div>
    <div class="grid__row content centered">
      <p>Copyright © 2017 <a href="https://mazipanneh.com/blog/">Irfan Maulana</a>, All Rights Reserved.</p>
    </div>

    <simplert/>
  </div>
</template>

<script src="./app.js"></script>

<style lang="scss">

// import ionicons global scss
@import "~vue-ionicons/ionicons.scss";

body {
    background-color: #f2f4f6;
}

pre{
  border: 0;
  text-align: left;
  margin: 0;
  padding: 0;
}
code{
  margin: 0;
  padding: 0;
}

.btn-top
{
    font-weight: 500;

    text-transform: uppercase;
}

.example__title
{
    font-size: 1.6rem;

    color: #a6b6b9;
}

.content__row
{
    margin: 20px 0 !important;
}

.content
{
    margin: 20px 0;
}

.custom-class
{
    .simplert__content
    {
        color: #fff !important;
        background-color: purple !important;
    }
}

.users
{
    margin: 0;
    padding: 0;

    list-style: none;

    text-align: center;
}

.users li
{
    display: inline-block;

    padding-right: 5px;
    padding-left: 5px;
}

.users li a
{
    display: block;

    padding: 20px;

    transition: all .3s ease;
}

.users li a:hover
{
    background-color: darken(#f2f4f6, 10%);
}

.users li a img
{
    max-width: 100%;
    height: 40px;
}

.add-button
{
    font-size: 3rem;
}

@media (max-width: 768px)
{
    .header__title img
    {
        width: 80%;
    }
    .fixed-top
    {
        position: inherit;
    }
    .grid__col-3
    {
        padding: .5em 1em;

        text-align: center;
    }
}

.custom-simplert
{
    color: #666;
}
.procced-btn
{
    outline: none;
    border: none;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    display: block !important;
    width: 100% !important;
    margin: 5px !important;
    padding: 15px 20px !important;
    background-color: #f7931e !important;
    color: #fff;
    border-radius: .25em;
}
.no-procced-btn
{
    outline: none;
    border: none;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    display: block !important;

    width: 100% !important;
    margin: 5px !important;
    padding: 15px 20px !important;

    color: #0096d9 !important;
    border: 1px solid #0096d9 !important;
    background-color: white !important;
    border-radius: .25em;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

small{
  display: block;
  color: #ddd;
  font-size: 16px;
}

.grid__row { *zoom: 1; margin: 0 auto; max-width: 92.308em; }
.grid__row:before, .grid__row:after { display: table; content: ' '; }
.grid__row:after { clear: both; }
.centered { text-align: center; }

.ion{
  &:hover{
    color: #4F8EF7;
  }
}
</style>

