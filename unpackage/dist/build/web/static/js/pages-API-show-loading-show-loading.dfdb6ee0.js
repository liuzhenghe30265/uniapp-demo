(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-show-loading-show-loading"],{"0c82":function(t,n,i){"use strict";i.r(n);var e=i("1682"),a=i.n(e);for(var u in e)["default"].indexOf(u)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(u);n["default"]=a.a},1682:function(t,n,i){"use strict";i("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{title:"loading"}},methods:{showLoading:function(){uni.showLoading({title:"loading"})},hideLoading:function(){uni.hideLoading()}}};n.default=e},"2cb0":function(t,n,i){"use strict";i("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"page-head",props:{title:{type:String,default:""}}};n.default=e},"54c2":function(t,n,i){"use strict";i.r(n);var e=i("b69f"),a=i("0c82");for(var u in a)["default"].indexOf(u)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(u);var o=i("828b"),d=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"81c27a44",null,!1,e["a"],void 0);n["default"]=d.exports},6231:function(t,n,i){"use strict";i.r(n);var e=i("2cb0"),a=i.n(e);for(var u in e)["default"].indexOf(u)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(u);n["default"]=a.a},"9a27":function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){}));var e=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"common-page-head"},[n("v-uni-view",{staticClass:"common-page-head-title"},[this._v(this._s(this.title))])],1)},a=[]},b69f:function(t,n,i){"use strict";i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){return e}));var e={pageHead:i("daaa").default},a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{staticClass:"btn-load",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showLoading.apply(void 0,arguments)}}},[t._v("显示 loading 提示框")]),i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideLoading.apply(void 0,arguments)}}},[t._v("隐藏 loading 提示框")])],1)],1)],1)},u=[]},daaa:function(t,n,i){"use strict";i.r(n);var e=i("9a27"),a=i("6231");for(var u in a)["default"].indexOf(u)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(u);var o=i("828b"),d=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);n["default"]=d.exports}}]);