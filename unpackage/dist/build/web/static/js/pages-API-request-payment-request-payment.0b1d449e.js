(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-request-payment-request-payment"],{"03c8":function(e,t,n){var a=n("2047");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("967d").default;i("2cf1bee2",a,!0,{sourceMap:!1,shadowMode:!1})},"12ef":function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("2634")),r=a(n("9b1b")),o=a(n("2fdc"));n("bf0f"),n("7a76"),n("c9b5"),n("64aa");var u={data:function(){return{title:"request-payment",loading:!1,price:1,providerList:[]}},onLoad:function(){},methods:{loginMpWeixin:function(){return new Promise((function(e,t){uni.login({provider:"weixin",success:function(n){uni.request({url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center",method:"POST",data:{action:"loginByWeixin",params:{code:n.code,platform:"mp-weixin"}},success:function(n){0===n.data.code?(uni.setStorageSync("openid",n.data.openid),e(n.data.openid)):t(new Error("获取openid失败：",n.result.msg))},fail:function(e){t(new Error("获取openid失败："+e))}})},fail:function(e){t(e)}})}))},weixinPay:function(){var e=this;return(0,o.default)((0,i.default)().mark((function t(){var n,a;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=uni.getStorageSync("openid"),console.log("发起支付"),e.loading=!0,n){t.next=17;break}return t.prev=4,t.next=7,e.loginMpWeixin();case 7:n=t.sent,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](4),console.error(t.t0);case 13:if(n){t.next=17;break}return uni.showModal({content:"获取openid失败",showCancel:!1}),e.loading=!1,t.abrupt("return");case 17:return e.openid=n,t.next=20,e.getOrderInfo("wxpay");case 20:if(a=t.sent,a){t.next=24;break}return uni.showModal({content:"获取支付信息失败",showCancel:!1}),t.abrupt("return");case 24:uni.requestPayment((0,r.default)((0,r.default)({},a),{},{success:function(e){uni.showToast({title:"感谢您的赞助!"})},fail:function(e){uni.showModal({content:"支付失败,原因为: "+e.errMsg,showCancel:!1})},complete:function(){e.loading=!1}}));case 25:case"end":return t.stop()}}),t,null,[[4,10]])})))()},requestPayment:function(e,t){var n=this;return(0,o.default)((0,i.default)().mark((function a(){var r,o;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.providerList[t].loading=!0,r=e.id,a.next=4,n.getOrderInfo(r);case 4:if(o=a.sent,o){a.next=8;break}return uni.showModal({content:"获取支付信息失败",showCancel:!1}),a.abrupt("return");case 8:console.log("--------orderInfo--------"),console.log(o),uni.requestPayment({provider:r,orderInfo:o,success:function(e){console.log("success",e),uni.showToast({title:"感谢您的赞助!"})},fail:function(e){console.log("fail",e),uni.showModal({content:"支付失败,原因为: "+e.errMsg,showCancel:!1})},complete:function(){n.providerList[t].loading=!1}});case 11:case"end":return a.stop()}}),a)})))()},getOrderInfo:function(e){var t=this;return new Promise((function(n,a){t.price||a(new Error("请输入金额")),uni.request({method:"POST",url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/pay",data:{provider:e,openid:t.openid,totalFee:100*Number(t.price)},success:function(e){0===e.data.code?n(e.data.orderInfo):a(new Error("获取支付信息失败"+e.data.msg))},fail:function(e){a(new Error("请求支付接口失败"+e))}})}))},priceChange:function(e){console.log(e.detail.value),this.price=e.detail.value}}};t.default=u},2047:function(e,t,n){var a=n("c86c");t=a(!1),t.push([e.i,".rmbLogo[data-v-2501e4ac]{font-size:%?40?%}uni-button[data-v-2501e4ac]{background-color:#007aff;color:#fff}.uni-h1.uni-center[data-v-2501e4ac]{display:flex;flex-direction:row;justify-content:center;align-items:flex-end}.price[data-v-2501e4ac]{border-bottom:1px solid #eee;width:%?200?%;height:%?80?%;padding-bottom:%?4?%}.ipaPayBtn[data-v-2501e4ac]{margin-top:%?30?%}",""]),e.exports=t},"24a1":function(e,t,n){"use strict";n.r(t);var a=n("90f4"),i=n("7fcb");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("e421");var o=n("828b"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"2501e4ac",null,!1,a["a"],void 0);t["default"]=u.exports},"2cb0":function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"page-head",props:{title:{type:String,default:""}}};t.default=a},6231:function(e,t,n){"use strict";n.r(t);var a=n("2cb0"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"7fcb":function(e,t,n){"use strict";n.r(t);var a=n("12ef"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"90f4":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={pageHead:n("daaa").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticStyle:{background:"#FFF",padding:"50rpx 0"}},[n("v-uni-view",{staticClass:"uni-hello-text uni-center"},[n("v-uni-text",[e._v("支付金额")])],1),n("v-uni-view",{staticClass:"uni-h1 uni-center uni-common-mt"},[n("v-uni-text",{staticClass:"rmbLogo"},[e._v("￥")]),n("v-uni-input",{staticClass:"price",attrs:{type:"digit",value:e.price,maxlength:"4"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.priceChange.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"})],1)],1)},r=[]},"9a27":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"common-page-head"},[t("v-uni-view",{staticClass:"common-page-head-title"},[this._v(this._s(this.title))])],1)},i=[]},daaa:function(e,t,n){"use strict";n.r(t);var a=n("9a27"),i=n("6231");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var o=n("828b"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=u.exports},e421:function(e,t,n){"use strict";var a=n("03c8"),i=n.n(a);i.a}}]);