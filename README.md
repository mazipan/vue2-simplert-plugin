# vue2-simplert-plugin

[![License](https://img.shields.io/github/license/mazipan/vue2-simplert-plugin.svg?maxAge=3600)](https://github.com/mazipan/vue2-simplert-plugin) [![version](https://img.shields.io/npm/v/vue2-simplert-plugin.svg)](https://www.npmjs.com/package/vue2-simplert-plugin) [![downloads](https://img.shields.io/npm/dt/vue2-simplert-plugin.svg)](https://www.npmjs.com/package/vue2-simplert-plugin) [![Travis](https://img.shields.io/travis/mazipan/vue2-simplert-plugin.svg)](https://travis-ci.org/mazipan/vue2-simplert-plugin)
[![codecov](https://codecov.io/gh/mazipan/vue2-simplert-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/mazipan/vue2-simplert-plugin)

:warning:  Vue2-Simplert as Vue.js Plugins

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
Vue.use(Simplert)
```

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

## Credit

+ Icon from [SweetAlert](https://github.com/t4t5/sweetalert)

## Contributing

If you'd like to contribute, head to the [contributing guidelines](/CONTRIBUTING.md). Inside you'll find directions for opening issues, coding standards, and notes on development.

**Hope will usefull for you all.**

Contact Me :

[![Email](https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600)](mailto:mazipanneh@gmail.com) [![Facebook](https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600)](https://facebook.com/mazipanneh) [![Twitter](https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600)](https://twitter.com/Maz_Ipan)
