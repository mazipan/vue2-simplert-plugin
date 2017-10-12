# vue2-simplert-plugin

[![License](https://img.shields.io/github/license/mazipan/vue2-simplert-plugin.svg?maxAge=3600)](https://github.com/mazipan/vue2-simplert-plugin) 
[![Github Issue](https://img.shields.io/github/issues/mazipan/vue2-simplert-plugin.svg?maxAge=3600)](https://github.com/mazipan/vue2-simplert-plugin/issues) 
[![GitHub Fork](https://img.shields.io/github/forks/mazipan/vue2-simplert-plugin.svg?maxAge=3600)](https://github.com/mazipan/vue2-simplert-plugin/network/members) 
[![GitHub Star](https://img.shields.io/github/stars/mazipan/vue2-simplert-plugin.svg?maxAge=3600)](https://github.com/mazipan/vue2-simplert-plugin/stargazers) 

[![version](https://img.shields.io/npm/v/vue2-simplert-plugin.svg)](https://www.npmjs.com/package/vue2-simplert-plugin)
[![downloads monthly](https://img.shields.io/npm/dm/vue2-simplert-plugin.svg)](https://www.npmjs.com/package/vue2-simplert-plugin) 
[![downloads](https://img.shields.io/npm/dt/vue2-simplert-plugin.svg)](https://www.npmjs.com/package/vue2-simplert-plugin) 

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

**Hope will usefull for you all.**

Contact Me :

[![Email](https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600)](mailto:mazipanneh@gmail.com) 
[![Website](https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600)](https://mazipanneh.com/blog/)
[![Facebook](https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600)](https://facebook.com/mazipanneh) 

[![Twitter](https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600)](https://twitter.com/Maz_Ipan) 
[![Linkedin](https://img.shields.io/badge/irfanmaulanamazipan-Linkedin-0077b5.svg?maxAge=3600)](https://id.linkedin.com/in/irfanmaulanamazipan) 
[![Slideshare](https://img.shields.io/badge/IrfanMaulana21-Slideshare-0077b5.svg?maxAge=3600)](https://www.slideshare.net/IrfanMaulana21) 
