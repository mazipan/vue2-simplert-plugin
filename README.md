# ⚠️🔌 vue2-simplert-plugin

> Vue2-Simplert as Vue.js Plugins

[![License](https://img.shields.io/github/license/mazipan/vue2-simplert-plugin.svg?maxAge=3600)](https://github.com/mazipan/vue2-simplert-plugin) [![version](https://img.shields.io/npm/v/vue2-simplert-plugin.svg)](https://www.npmjs.com/package/vue2-simplert-plugin) [![downloads](https://img.shields.io/npm/dt/vue2-simplert-plugin.svg)](https://www.npmjs.com/package/vue2-simplert-plugin)



## Why we need ?

When we using [vue2-simplert](https://github.com/mazipan/vue2-simplert), we will need to `import` the library in every place we need. This is very bored because we do same task in many place. In [vue2-simplert](https://github.com/mazipan/vue2-simplert) we need to access method inside using `$refs` which is not recommended. For solving those problems I reborn [vue2-simplert](https://github.com/mazipan/vue2-simplert) as Vue.js Plugins and using EventBus for open/close.

## Demo

[https://mazipan.github.io/vue2-simplert-plugin/](https://mazipan.github.io/vue2-simplert-plugin/)

## Install

#### Yarn

```bash
yarn add vue2-simplert-plugin
```

#### NPM

```bash
npm i vue2-simplert-plugin --save
```

## How to use

#### Import in your root project

Usually `main.js` or `index.js`

```javascript
import Simplert from 'vue2-simplert-plugin'
require('vue2-simplert-plugin/dist/vue2-simplert-plugin.css')

Vue.use(Simplert)
```
> from v0.4.0 you need to add `vue2-simplert-plugin.css`

Or, with customize default config which still can be overrided.
```javascript
import Simplert from 'vue2-simplert-plugin'
Vue.use(Simplert, {
  title: 'test', //string -- title alert
  message: 'message', //string -- message alert
  type: 'success', //string -- type : info (default), success, warning, error
  customClass: '', //string -- custom class in simplert div
  customIconUrl: '', //string -- custom url custom image icon
  customCloseBtnText: '', //string -- close button text
  customCloseBtnClass: '', //string -- custom class for close button
  onClose: this.onClose, //function -- when close triggered
  useConfirmBtn: false, //boolean -- using confirm button
  customConfirmBtnText: '', //string -- confirm button text
  customConfirmBtnClass: '', //string -- custom class for confirm button
  onConfirm: this.onConfirm, //function -- when confirm button triggered
  disableOverlayClick: false, //boolean -- set to true if you want disable overlay click function
  hideAllButton: false, //boolean -- set to true if you want hide all button
  onOpen: null, //function -- when simplert open will fire this method if available
  showXclose: true //boolean -- show x close button
})
```
for more [Methods and Props](https://mazipan.gitbooks.io/vue2-simplert/method-and-props.html)

#### Add template in your root Vue

Usually `App.vue`

```html
<simplert></simplert>
```

#### Open/Close Popup

For open popup :
```javascript
this.$Simplert.open(obj)
```
Object that pass is same with [vue2-simplert](https://github.com/mazipan/vue2-simplert), please read [wiki](https://github.com/mazipan/vue2-simplert/wiki/Methods-And-Props).

For close popup :
```javascript
this.$Simplert.close()
```

## Migration from [vue2-simplert](https://github.com/mazipan/vue2-simplert)

If you already use [vue2-simplert](https://github.com/mazipan/vue2-simplert) in your project, please follow this below guide :
+ Make sure you add dependency `npm i vue2-simplert-plugin --save`
+ Import and use this plugin in your main app, ex : `main.js`
```javascript
import Simplert from 'vue2-simplert-plugin'
require('vue2-simplert-plugin/dist/vue2-simplert-plugin.css')

Vue.use(Simplert)
```
+ Remove all import [vue2-simplert](https://github.com/mazipan/vue2-simplert) in your components and/or pages, because as Plugin you dont need to import in all components
```javascript
import Simplert from 'vue2-simplert'
```
+ Remove all adding component [vue2-simplert](https://github.com/mazipan/vue2-simplert) in your components and/or pages, because you dont need set components again
```javascript
components: {Simplert}
```
+ Remove all template html snippet in each components
```html
<simplert :useRadius="true"
          :useIcon="true"
          ref="simplert">
</simplert>
```
+ Add new html snippet in root application, ex : `App.vue`
```html
<simplert>
</simplert>
```
+ Change all call method open with new plugin method, you dont need to change all configuration
```javascript
// change this call
this.$refs.simplert.openSimplert(obj)
// to this way
this.$Simplert.open(obj)
```
+ And **DONE** :+1: !!!

## Documentation Vue2-Simplert

- [Download](https://mazipan.gitbooks.io/vue2-simplert/download.html)
- [Usage Guide](https://mazipan.gitbooks.io/vue2-simplert/usage.html)
- [Methods And Props](https://mazipan.gitbooks.io/vue2-simplert/method-and-props.html)
- [Example Code](https://mazipan.gitbooks.io/vue2-simplert/example.html)
- [Articles](https://mazipan.gitbooks.io/vue2-simplert/articles.html)
- [FAQ](https://mazipan.gitbooks.io/vue2-simplert/faq.html)

## Credit

+ Icon from [SweetAlert](https://github.com/t4t5/sweetalert)

## Contributing

If you'd like to contribute, head to the [contributing guidelines](CONTRIBUTING.md). Inside you'll find directions for opening issues, coding standards, and notes on development.

![vue2-simplert](https://mazipan.github.io/vue2-simplert/images/vue2-simplert-logo.png)

Copyright © 2017 Built with ❤️ by Irfan Maulana
