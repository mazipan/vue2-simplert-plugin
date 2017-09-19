# vue2-simplert-plugin
:warning:  Vue2-Simplert as Vue.js Plugins

## Why we need ?
When we using [vue2-simplert](https://github.com/mazipan/vue2-simplert), we will need to `import` the library in every place we need. This is very bored because we do same task in many place. In [vue2-simplert](https://github.com/mazipan/vue2-simplert) we need to access method inside using `$refs` which is not recommended. For solving those problems I reborn [vue2-simplert](https://github.com/mazipan/vue2-simplert) as Vue.js Plugins and using EventBus for open/close.

## Demo
[https://mazipan.github.io/vue2-simplert-plugin/](https://mazipan.github.io/vue2-simplert-plugin/)

## Install

#### Yarn

```bash
yan add vue2-simplert-plugin
```

#### NPM

```bash
npm i vue2-simplert-plugin --save
```

## How to use

#### Import in your root project

Usually `main.js` or `index.js`

```javascript
import Simplert from vue2-simplert-plugin
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
