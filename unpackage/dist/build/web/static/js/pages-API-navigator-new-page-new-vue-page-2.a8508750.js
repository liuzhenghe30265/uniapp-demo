(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-vue-page-2"],{"08ce":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,"uni-page-body[data-v-2c5fd711]{display:flex;min-height:100%}.new-page__text[data-v-2c5fd711]{font-size:14px;color:#666}.root[data-v-2c5fd711]{display:flex;flex:1;flex-direction:column}.page-body[data-v-2c5fd711]{flex:1;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding-top:50px}.new-page__text-box[data-v-2c5fd711]{padding:20px}.new-page__color[data-v-2c5fd711]{display:flex;width:200px;height:100px;justify-content:center;align-items:center}.new-page__color-text[data-v-2c5fd711]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-2c5fd711]{margin-top:15px;width:300px}",""]),t.exports=e},"23c3":function(t,e,n){"use strict";n.r(e);var a=n("7c6b"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},3753:function(t,e,n){"use strict";n.r(e);var a=n("f719"),o=n("23c3");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("f7be");var c=n("828b"),d=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"2c5fd711",null,!1,a["a"],void 0);e["default"]=d.exports},"7c6b":function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("9b1b")),i=n("8f59"),c={data:function(){return{}},computed:(0,o.default)((0,o.default)({},(0,i.mapState)(["colorIndex","colorList"])),(0,i.mapGetters)(["currentColor"])),methods:(0,o.default)((0,o.default)({},(0,i.mapMutations)(["setColorIndex"])),{},{emitMsg:function(){uni.$emit("postMsg",{msg:"From: Vue Page"})}})};e.default=c},"8d0d":function(t,e,n){var a=n("08ce");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("967d").default;o("76c4c9b5",a,!0,{sourceMap:!1,shadowMode:!1})},f719:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"root"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:t.currentColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setColorIndex(t.colorIndex>1?0:t.colorIndex+1)}}},[n("v-uni-text",{staticClass:"new-page__color-text"},[t._v("点击改变颜色")])],1),n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[t._v("点击上方色块使用vuex在页面之间进行通讯")])],1),n("v-uni-view",{staticClass:"new-page__button"},[n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.emitMsg.apply(void 0,arguments)}}},[t._v("向上一页面传递数据")])],1)],1)],1)},o=[]},f7be:function(t,e,n){"use strict";var a=n("8d0d"),o=n.n(a);o.a}}]);