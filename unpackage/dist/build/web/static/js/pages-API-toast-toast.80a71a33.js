(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-toast-toast"],{1274:function(t,n,a){"use strict";a.r(n);var i=a("67a2"),e=a("d71a");for(var u in e)["default"].indexOf(u)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(u);var o=a("828b"),s=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=s.exports},"14af":function(t,n,a){"use strict";a("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"toast"}},methods:{toast1Tap:function(){uni.showToast({title:"默认"})},toast2Tap:function(){uni.showToast({title:"duration 3000",duration:3e3})},toast3Tap:function(){uni.showToast({title:"loading",icon:"loading",duration:5e3})},toast4Tap:function(){uni.showToast({title:"logo",image:"../../../static/uni.png"})},hideToast:function(){uni.hideToast()}}};n.default=i},"2cb0":function(t,n,a){"use strict";a("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"page-head",props:{title:{type:String,default:""}}};n.default=i},6231:function(t,n,a){"use strict";a.r(n);var i=a("2cb0"),e=a.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(u);n["default"]=e.a},"67a2":function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return u})),a.d(n,"a",(function(){return i}));var i={pageHead:a("daaa").default},e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toast1Tap.apply(void 0,arguments)}}},[t._v("点击弹出默认toast")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toast2Tap.apply(void 0,arguments)}}},[t._v("点击弹出设置duration的toast")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toast3Tap.apply(void 0,arguments)}}},[t._v("点击弹出显示loading的toast")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toast4Tap.apply(void 0,arguments)}}},[t._v("点击弹出显示自定义图片的toast")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideToast.apply(void 0,arguments)}}},[t._v("点击隐藏toast")])],1)],1)],1)},u=[]},"9a27":function(t,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return e})),a.d(n,"a",(function(){}));var i=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"common-page-head"},[n("v-uni-view",{staticClass:"common-page-head-title"},[this._v(this._s(this.title))])],1)},e=[]},d71a:function(t,n,a){"use strict";a.r(n);var i=a("14af"),e=a.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(u);n["default"]=e.a},daaa:function(t,n,a){"use strict";a.r(n);var i=a("9a27"),e=a("6231");for(var u in e)["default"].indexOf(u)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(u);var o=a("828b"),s=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=s.exports}}]);