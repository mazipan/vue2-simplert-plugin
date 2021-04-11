# ⚠️ vue2-simplert-plugin

> Vue 2 Simple Alert Plugin (SweetAlert Inspired)

[![License](https://img.shields.io/github/license/mazipan/vue2-simplert-plugin.svg?maxAge=3600)](https://github.com/mazipan/vue2-simplert-plugin) ![minified](https://badgen.net/bundlephobia/minzip/vue2-simplert-plugin) [![version](https://img.shields.io/npm/v/vue2-simplert-plugin.svg)](https://www.npmjs.com/package/vue2-simplert-plugin) [![downloads](https://img.shields.io/npm/dt/vue2-simplert-plugin.svg)](https://www.npmjs.com/package/vue2-simplert-plugin) [![Build and Deploy](https://github.com/mazipan/vue2-simplert-plugin/actions/workflows/build_deploy.yml/badge.svg)](https://github.com/mazipan/vue2-simplert-plugin/actions/workflows/build_deploy.yml)

## Why we need ?

When we using [vue2-simplert](https://github.com/mazipan/vue2-simplert), we will need to `import` the library in every place we need. This is very bored because we do same task in many place. In [vue2-simplert](https://github.com/mazipan/vue2-simplert) we need to access method inside using `$refs` which is not recommended. For solving those problems I reborn [vue2-simplert](https://github.com/mazipan/vue2-simplert) as Vue.js Plugins and using EventBus for open/close.

## Demo

- [Full Demo](https://mazipan.github.io/vue2-simplert-plugin/)

- [Codesandbox Test](https://codesandbox.io/s/vue-simplert-plugin-demo-elkoc)

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
import { Simplert } from 'vue2-simplert-plugin';
import 'vue2-simplert-plugin/dist/vue2-simplert-plugin.min.css';

Vue.use(Simplert);
```

Or, with customize default config which still can be overrided.

```javascript
import { Simplert } from 'vue2-simplert-plugin';
import 'vue2-simplert-plugin/dist/vue2-simplert-plugin.min.css';

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
  showXclose: true, //boolean -- show x close button
});
```

for more [Methods and Props](https://mazipan.gitbooks.io/vue2-simplert/method-and-props.html)

#### Add template in your root Vue

Usually `App.vue`

```html
<simplert />
```

#### Open/Close Popup

For open popup :

```javascript
this.$Simplert.open(obj);
```

Object that pass is same with [vue2-simplert](https://github.com/mazipan/vue2-simplert), please read [wiki](https://github.com/mazipan/vue2-simplert/wiki/Methods-And-Props).

For close popup :

```javascript
this.$Simplert.close();
```

## Migration from [vue2-simplert](https://github.com/mazipan/vue2-simplert)

If you already use [vue2-simplert](https://github.com/mazipan/vue2-simplert) in your project, please follow this below guide :

- Make sure you add dependency `npm i vue2-simplert-plugin --save`
- Import and use this plugin in your main app, ex : `main.js`

```javascript
import { Simplert } from 'vue2-simplert-plugin';
import 'vue2-simplert-plugin/dist/vue2-simplert-plugin.min.css';

Vue.use(Simplert);
```

- Remove all import [vue2-simplert](https://github.com/mazipan/vue2-simplert) in your components and/or pages, because as Plugin you dont need to import in all components

```javascript
import Simplert from 'vue2-simplert';
```

- Remove all adding component [vue2-simplert](https://github.com/mazipan/vue2-simplert) in your components and/or pages, because you dont need set components again

```javascript
components: {
  Simplert;
}
```

- Remove all template html snippet in each components

```html
<simplert :useRadius="true" :useIcon="true" ref="simplert"> </simplert>
```

- Add new html snippet in root application, ex : `App.vue`

```html
<simplert> </simplert>
```

- Change all call method open with new plugin method, you dont need to change all configuration

```javascript
// change this call
this.$refs.simplert.openSimplert(obj);
// to this way
this.$Simplert.open(obj);
```

- And **DONE** :+1: !!!

## Available Props

You can add props in `simplert` component, example :

```html
<simplert :useRadius="true" :useIcon="true" ref="simplert"> </simplert>
```

| Attribute  | Value Type | Default Value | Description                                                                                 |
| ---------- | ---------- | ------------- | ------------------------------------------------------------------------------------------- |
| :useRadius | Boolean    | true          | Setting useRadius to true will make Simplert's message box and buttons have rounded corners |
| :useIcon   | Boolean    | true          | true : will use SweatAlert icon based on `type`, false : not use icon                       |
| ref        | String     | -             | child reference, [read here]                                                                |

## Object Arguments

| Property              | Type - Default   | Description                                     |
| --------------------- | ---------------- | ----------------------------------------------- |
| title                 | string - empty   | Title of alert                                  |
| message               | string - empty   | Message of alert                                |
| type                  | string - 'info'  | Type of icon will used                          |
| customClass           | string - empty   | Adding extra class in parent simplert           |
| customIconUrl         | string - empty   | Using custom icon instead of default            |
| customCloseBtnText    | string - empty   | Using custom text in button close               |
| customCloseBtnClass   | string - empty   | Change default class in button close            |
| onClose               | func - undefined | Function will fired when close button clicked   |
| useConfirmBtn         | boolean - false  | Using two button with close and confirm         |
| customConfirmBtnText  | string - empty   | Using custom text in button confirm             |
| customConfirmBtnClass | string - empty   | Change default class in button confirm          |
| onConfirm             | func - undefined | Function will fired when confirm button clicked |
| disableOverlayClick   | string - empty   | Prevent click overlay will close alert          |
| hideAllButton         | boolean - false  | Hide both button close and confirm              |
| onOpen                | func - undefined | Function will fired when open alert             |
| showXclose            | boolean - false  | Show X close button in right corner of alert    |

```javascript
{
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
}
```

## FAQ

### Why my `onConfirm` fired immediately

**A** : It happen when you have this below arguments:

```js
let Warning = {
  message: 'Do you really want to leave? you have unsaved changes!',
  useConfirmBtn: true,
  customCloseBtnText: 'Yes',
  customConfirmBtnText: 'No',
  onClose: this.Leave(),
  onConfirm: this.StayWhereYouAre(),
};
```

The function `this.StayWhereYouAre()` will be fired immediately, even you are not clicked it yet.
It because you put function to be executed.
The solution is to change the way you pass function, just pass as an ordinary variable:

```js
let Warning = {
  message: 'Do you really want to leave? you have unsaved changes!',
  useConfirmBtn: true,
  customCloseBtnText: 'Yes',
  customConfirmBtnText: 'No',
  onClose: this.Leave,
  onConfirm: this.StayWhereYouAre,
};
```

## Credits

- The icons from [SweetAlert](https://github.com/t4t5/sweetalert)
- [Chakra UI](https://vue.chakra-ui.com/) for building the demo page
- [vue-code-highlight](https://github.com/elisiondesign/vue-code-highlight) for beautiful syntax highlighter
- Other awesome projects you can found on the `package.json`

## Contributing

If you'd like to contribute, head to the [contributing guidelines](CONTRIBUTING.md). Inside you'll find directions for opening issues, coding standards, and notes on development.

![vue2-simplert](https://mazipan.github.io/vue2-simplert/images/vue2-simplert-logo.png)

Copyright © 2017-present, built with ❤️ by Irfan Maulana
