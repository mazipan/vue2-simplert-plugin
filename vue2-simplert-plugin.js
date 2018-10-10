/*! Vue2-Simplert v.0.5.0 */
exports.Simplert=function(t){var s={};function e(i){if(s[i])return s[i].exports;var n=s[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=s,e.d=function(t,s,i){e.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,s){if(1&s&&(t=e(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var n in t)e.d(i,n,function(s){return t[s]}.bind(null,n));return i},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},e.p="/dist",e(e.s=4)}([function(t,s,e){},function(t,s){t.exports=require("Vue")},function(t,s,e){"use strict";var i=e(0);e.n(i).a},,function(t,s,e){"use strict";e.r(s);const i={DEFAULT_TYPE:"info",DEFAULT_BTN_CLOSE_TEXT:"Close",DEFAULT_BTN_CONFIRM_TEXT:"Confirm",INVALID_TYPE:"INVALID_TYPE"};var n={name:"simplertConfig",config:{show:!1,showSimplert:!1,title:"",message:"",type:i.DEFAULT_TYPE,customClass:"",customIconUrl:"",onOpen:null,customCloseBtnText:i.DEFAULT_BTN_CLOSE_TEXT,customCloseBtnClass:"",onClose:null,useConfirmBtn:!1,customConfirmBtnText:i.DEFAULT_BTN_CONFIRM_TEXT,customConfirmBtnClass:"",onConfirm:null,disableOverlayClick:!1,hideAllButton:!1,showXclose:!1},defaultCons:i},o={name:"Simplert",props:{useRadius:{type:Boolean,default:!0},useIcon:{type:Boolean,default:!0},enableLog:{type:Boolean,default:!1}},data:function(){return{eventBus:null,showSimplert:!1,title:"",message:"",type:n.defaultCons.DEFAULT_TYPE,customClass:"",customIconUrl:"",onOpen:null,customCloseBtnText:n.defaultCons.DEFAULT_BTN_CLOSE_TEXT,customCloseBtnClass:"",onClose:null,useConfirmBtn:!1,customConfirmBtnText:n.defaultCons.DEFAULT_BTN_CONFIRM_TEXT,customConfirmBtnClass:"",onConfirm:null,disableOverlayClick:!1,hideAllButton:!1,showXclose:!1}},computed:{classSimplert:function(){var t=this.customClass;return this.showSimplert&&(t=this.customClass+" simplert--shown"),t},classContent:function(){var t="";return this.useRadius&&(t="simplert__content--radius"),t},classBtnClose:function(){var t="simplert__close";return this.useRadius&&(t="simplert__close simplert__close--radius"),this.customCloseBtnClass&&(t=this.customCloseBtnClass),t},classBtnConfirm:function(){var t="simplert__confirm";return this.useRadius&&(t="simplert__confirm simplert__confirm--radius"),this.customConfirmBtnClass&&(t=this.customConfirmBtnClass),t}},methods:{justCloseSimplert:function(){this.showSimplert=!1},closeOverlay:function(t){t.target.className.indexOf("simplert--shown")>0&&!this.disableOverlayClick&&this.justCloseSimplert()},whenConfirm:function(t){t.preventDefault(),this.justCloseSimplert(),null!==this.onConfirm&&this.onConfirm()},closeSimplert:function(t){t.preventDefault(),this.justCloseSimplert(),null!==this.onClose&&this.onClose()},openSimplert:function(t){void 0!==t&&(this.showSimplert=!0,this.title=t.title,void 0!==t.message?this.message=t.message:this.message="",void 0!==t.type?this.type=t.type:this.type=n.config.type,void 0!==t.customClass?this.customClass=t.customClass:this.customClass="",void 0!==t.customIconUrl&&""!==t.customIconUrl?(this.customIconUrl=t.customIconUrl,this.type=n.defaultCons.INVALID_TYPE):this.customIconUrl="",void 0!==t.customCloseBtnText&&""!==t.customCloseBtnText?this.customCloseBtnText=t.customCloseBtnText:this.customCloseBtnText=n.defaultCons.DEFAULT_BTN_CLOSE_TEXT,void 0!==t.customCloseBtnClass?this.customCloseBtnClass=t.customCloseBtnClass:this.customCloseBtnClass="",void 0!==t.onClose&&null!==t.onClose?this.onClose=t.onClose:this.onClose=null,void 0!==t.useConfirmBtn?this.useConfirmBtn=t.useConfirmBtn:this.useConfirmBtn=!1,void 0!==t.customConfirmBtnText&&""!==t.customConfirmBtnText?this.customConfirmBtnText=t.customConfirmBtnText:this.customConfirmBtnText=n.defaultCons.DEFAULT_BTN_CONFIRM_TEXT,void 0!==t.customConfirmBtnClass?this.customConfirmBtnClass=t.customConfirmBtnClass:this.customConfirmBtnClass="",void 0!==t.onConfirm&&null!==t.onConfirm?this.onConfirm=t.onConfirm:this.onConfirm=null,void 0!==t.disableOverlayClick?this.disableOverlayClick=t.disableOverlayClick:this.disableOverlayClick=!1,void 0!==t.hideAllButton?this.hideAllButton=t.hideAllButton:this.hideAllButton=!1,void 0!==t.showXclose?this.showXclose=t.showXclose:this.showXclose=!1,void 0!==t.onOpen?this.onOpen=t.onOpen:this.onOpen=null,null!==this.onOpen&&this.onOpen()),this.enableLog&&console.log(this)}}},l=e(1),r=new(e.n(l).a),c={name:"Simplert",mixins:[o],created:function(){r.$on("open",this.openSimplert),r.$on("close",this.justCloseSimplert)}};e(2);var u=function(t,s,e,i,n,o,l,r){var c,u="function"==typeof t?t.options:t;if(s&&(u.render=s,u.staticRenderFns=e,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),l?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},u._ssrRegister=c):n&&(c=r?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(u.functional){u._injectStyles=c;var a=u.render;u.render=function(t,s){return c.call(s),a(t,s)}}else{var m=u.beforeCreate;u.beforeCreate=m?[].concat(m,c):[c]}return{exports:t,options:u}}(c,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"simplert",class:t.classSimplert,attrs:{role:"modal"},on:{click:t.closeOverlay}},[e("div",{staticClass:"simplert__content",class:t.classContent},[e("div",{staticClass:"simplert__header"},[t.showXclose?e("div",{staticClass:"simplert__x",on:{click:t.justCloseSimplert}},[t._v("╳")]):t._e(),t._v(" "),t.useIcon?e("div",["info"===t.type?e("div",{staticClass:"simplert__icon simplert__icon--info"},[e("div",{staticClass:"simplert__line simplert__line--info"}),t._v(" "),e("div",{staticClass:"simplert__line simplert__line--info-2"})]):t._e(),t._v(" "),"success"===t.type?e("div",{staticClass:"simplert__icon simplert__icon--success"},[e("div",{staticClass:"simplert__line simplert__line--success"}),t._v(" "),e("div",{staticClass:"simplert__line simplert__line--success-2"})]):t._e(),t._v(" "),"warning"===t.type?e("div",{staticClass:"simplert__icon simplert__icon--warning"},[e("div",{staticClass:"simplert__line simplert__line--warning"}),t._v(" "),e("div",{staticClass:"simplert__line simplert__line--warning-2"})]):t._e(),t._v(" "),"error"===t.type?e("div",{staticClass:"simplert__icon simplert__icon--error"},[e("div",{staticClass:"simplert__line simplert__line--error"}),t._v(" "),e("div",{staticClass:"simplert__line simplert__line--error-2"})]):t._e(),t._v(" "),""!==t.customIconUrl?e("div",{staticClass:"simplert__icon"},[e("img",{attrs:{src:t.customIconUrl}})]):t._e()]):t._e(),t._v(" "),e("b",{staticClass:"simplert__title"},[t._v(t._s(t.title))])]),t._v(" "),e("div",{staticClass:"simplert__body"},[e("div",{domProps:{innerHTML:t._s(t.message)}})]),t._v(" "),e("div",{staticClass:"simplert__footer"},[t.useConfirmBtn&&!t.hideAllButton?e("button",{class:t.classBtnConfirm,on:{click:t.whenConfirm}},[t._v("\n        "+t._s(t.customConfirmBtnText)+"\n      ")]):t._e(),t._v(" "),t.hideAllButton?t._e():e("button",{class:t.classBtnClose,on:{click:t.closeSimplert}},[t._v("\n        "+t._s(t.customCloseBtnText)+"\n      ")])])])])},[],!1,null,null,null);u.options.__file="Simplert.vue";var a=u.exports,m={install:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e={$vm:null,state:{},data:{options:{}},init:function(t,s){this.$vm=t,this.options=s},open:function(t){this.$vm&&(t.show=!0,this.$vm.$emit("open",Object.assign({},this.options,t)))},close:function(){this.$vm&&this.$vm.$emit("close")}};e.init(r,s),t.component("simplert",a),t.prototype.$Simplert=e}};s.default=m}]);