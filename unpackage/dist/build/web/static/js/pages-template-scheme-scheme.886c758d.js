(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-scheme-scheme"],{"0ae8":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var i={pageHead:e("daaa").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:"通过scheme打开三方app示例"}}),e("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openBrowser("https://uniapp.dcloud.io/h5")}}},[t._v("使用浏览器打开指定URL")]),e("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openMarket()}}},[t._v("使用应用商店打开指定App")]),e("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openMarket("com.tencent.android.qqdownloader")}}},[t._v("强制使用应用宝打开指定App")]),e("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openTaobao("taobao://s.taobao.com/search?q=uni-app")}}},[t._v("打开淘宝搜索页面")]),e("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openMap()}}},[t._v("打开地图并指定地点")]),e("v-uni-view",{staticClass:"uni-divider"},[e("v-uni-view",{staticClass:"uni-divider__content"},[t._v("打开QQ")]),e("v-uni-view",{staticClass:"uni-divider__line"})],1),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-form",{on:{submit:function(n){arguments[0]=n=t.$handleEvent(n),t.openQQ.apply(void 0,arguments)}}},[e("v-uni-view",[e("v-uni-view",{staticClass:"uni-title"},[t._v("请输入聊天对象QQ号：")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-input",{staticClass:"uni-input",attrs:{name:"qqNum",type:"number"}})],1)],1)],1),e("v-uni-view",[e("v-uni-view",{staticClass:"uni-title"},[t._v("请选择QQ号类型：")]),e("v-uni-radio-group",{staticClass:"uni-flex",attrs:{name:"qqNumType"}},[e("v-uni-label",[e("v-uni-radio",{attrs:{value:"wpa",checked:""}}),t._v("普通QQ号")],1),e("v-uni-label",[e("v-uni-radio",{attrs:{value:"crm"}}),t._v("营销QQ号(无需加好友直接聊天)")],1)],1)],1),e("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[e("v-uni-button",{staticClass:"button",attrs:{formType:"submit"}},[t._v("打开qq并到指定聊天界面")])],1)],1)],1)],1)},u=[]},"2b5c1":function(t,n,e){var i=e("c86c");n=i(!1),n.push([t.i,".button[data-v-7d97f558]{margin:%?30?%;color:#007aff}",""]),t.exports=n},"2cb0":function(t,n,e){"use strict";e("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"page-head",props:{title:{type:String,default:""}}};n.default=i},"456d":function(t,n,e){"use strict";e.r(n);var i=e("0ae8"),a=e("7b00");for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("ccec");var o=e("828b"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"7d97f558",null,!1,i["a"],void 0);n["default"]=s.exports},6231:function(t,n,e){"use strict";e.r(n);var i=e("2cb0"),a=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=a.a},"7b00":function(t,n,e){"use strict";e.r(n);var i=e("7f5f6"),a=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=a.a},"7f5f6":function(t,n,e){"use strict";e("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{}},methods:{openBrowser:function(t){plus.runtime.openURL(t)},openMarket:function(t){var n;n="Android"==plus.os.name?"market://details?id=io.dcloud.hellouniapp":"itms-apps://itunes.apple.com/cn/app/hello-uni-app/id1417078253","undefined"==typeof t?plus.runtime.openURL(n,(function(t){console.log(t)})):"Android"==plus.os.name?plus.runtime.openURL(n,(function(t){plus.nativeUI.alert("本机没有安装应用宝")}),t):plus.nativeUI.alert("仅Android手机才支持应用宝")},openTaobao:function(t){plus.runtime.openURL(t,(function(t){uni.showModal({content:"本机未检测到淘宝客户端，是否打开浏览器访问淘宝？",success:function(t){t.confirm&&plus.runtime.openURL("https://s.taobao.com/search?q=uni-app")}})}))},openMap:function(){var t="";if("Android"==plus.os.name){var n=plus.runtime.isApplicationExist({pname:"com.baidu.BaiduMap",action:"baidumap://"}),e=plus.runtime.isApplicationExist({pname:"com.autonavi.minimap",action:"androidamap://"}),i="baidumap://map/marker?location=39.968789,116.347247&title=DCloud&src=Hello%20uni-app",a="androidamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0";e&&n?plus.nativeUI.actionSheet({title:"选择地图应用",cancel:"取消",buttons:[{title:"百度地图"},{title:"高德地图"}]},(function(t){switch(t.index){case 1:plus.runtime.openURL(i);break;case 2:plus.runtime.openURL(a);break}})):e?plus.runtime.openURL(a):n?plus.runtime.openURL(i):(t="geo:39.96310,116.340698?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82",plus.runtime.openURL(t))}else plus.nativeUI.actionSheet({title:"选择地图应用",cancel:"取消",buttons:[{title:"Apple地图"},{title:"百度地图"},{title:"高德地图"}]},(function(n){switch(console.log("e.index: "+n.index),n.index){case 1:t="http://maps.apple.com/?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82&ll=39.96310,116.340698&spn=0.008766,0.019441";break;case 2:t="baidumap://map/marker?location=39.968789,116.347247&title=DCloud&src=Hello%20uni-app";break;case 3:t="iosamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0";break;default:break}""!=t&&plus.runtime.openURL(t,(function(t){plus.nativeUI.alert("本机未安装指定的地图应用")}))}))},openQQ:function(t){plus.runtime.openURL("mqqwpa://im/chat?chat_type="+t.detail.value.qqNumType+"&uin="+t.detail.value.qqNum,(function(t){plus.nativeUI.alert("本机没有安装QQ，无法启动")}))}}};n.default=i},"9a27":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"common-page-head"},[n("v-uni-view",{staticClass:"common-page-head-title"},[this._v(this._s(this.title))])],1)},a=[]},bd1d:function(t,n,e){var i=e("2b5c1");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("967d").default;a("9b13820a",i,!0,{sourceMap:!1,shadowMode:!1})},ccec:function(t,n,e){"use strict";var i=e("bd1d"),a=e.n(i);a.a},daaa:function(t,n,e){"use strict";e.r(n);var i=e("9a27"),a=e("6231");for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(u);var o=e("828b"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=s.exports}}]);