(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-home"],{"65a5":function(t,e,o){"use strict";o.r(e);var n=o("ef0e"),s=o.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(c);e["default"]=s.a},6789:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return s})),o.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"home_container"},[o("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logout.apply(void 0,arguments)}}},[t._v("注销")]),o("v-uni-view",{staticClass:"hc_inner"},[o("v-uni-view",{staticClass:"hi_tabs"},[o("v-uni-view",{staticClass:"span",class:{active:0===t.currentTab},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.swichMenu(0)}}},[t._v("花瓣")]),o("v-uni-view",{staticClass:"span",class:{active:1===t.currentTab},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.swichMenu(1)}}},[t._v("灯杆")])],1),o("v-uni-swiper",{staticClass:"swiper-box-list",attrs:{current:t.currentTab},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[o("v-uni-swiper-item",{staticClass:"swiper-topic-list"},[o("v-uni-view",{staticClass:"swiper-item swiper_inner"},[o("v-uni-view",{staticClass:"current_color"},[o("v-uni-view",{staticClass:"cc_txt"},[t._v(t._s(t.currentColorTypeB))]),o("v-uni-view",{staticClass:"color_sign",class:t.currentColorB,style:"background-color: "+t.currentColorB})],1),o("v-uni-view",{staticClass:"color_list"},[o("v-uni-view",{staticClass:"cc_txt"},[t._v("常规")]),o("v-uni-view",{staticClass:"color_item"},t._l(t.colorDataB,(function(e,n){return o("v-uni-view",{key:n,staticClass:"span color_sign",class:e.color,style:"background-color: "+e.color,on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.handleChooseColorB(e)}}})})),1)],1),o("v-uni-view",{staticClass:"color_list"},[o("v-uni-view",{staticClass:"cc_txt"},[t._v("呼吸")]),o("v-uni-view",{staticClass:"color_item"},t._l(t.colorDataBreathB,(function(e,n){return o("v-uni-view",{key:n,staticClass:"span color_sign",class:e.color,style:"background-color: "+e.color,on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.handleChooseColorBreathB(e)}}})})),1)],1)],1)],1),o("v-uni-swiper-item",{staticClass:"swiper-topic-list"},[o("v-uni-view",{staticClass:"swiper-item swiper_inner"},[o("v-uni-view",{staticClass:"current_color"},[o("v-uni-view",{staticClass:"cc_inner"},[o("v-uni-view",{staticClass:"cc_txt"},[t._v(t._s(t.currentColorType))]),o("v-uni-view",{staticClass:"color_sign",class:t.currentColor,style:"background-color: "+t.currentColor})],1),o("v-uni-view",{staticClass:"cc_inner"},[o("v-uni-view",{staticClass:"cc_txt"},[t._v("开关")]),o("v-uni-view",{staticClass:"ci_icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeColor({value:8})}}})],1)],1),o("v-uni-view",{staticClass:"color_list"},[o("v-uni-view",{staticClass:"cc_txt"},[t._v("常规")]),o("v-uni-view",{staticClass:"color_item"},t._l(t.colorData,(function(e,n){return o("v-uni-view",{key:n,staticClass:"span color_sign",class:e.color,style:"background-color: "+e.color,on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.handleChooseColor(e)}}})})),1)],1),o("v-uni-view",{staticClass:"color_list"},[o("v-uni-view",{staticClass:"cc_txt"},[t._v("呼吸")]),o("v-uni-view",{staticClass:"color_item"},t._l(t.colorDataBreath,(function(e,n){return o("v-uni-view",{key:n,staticClass:"span color_sign",class:e.color,style:"background-color: "+e.color,on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.handleChooseColorBreath(e)}}})})),1)],1)],1)],1)],1)],1)],1)},s=[]},"7fc6":function(t,e,o){"use strict";o.r(e);var n=o("6789"),s=o("65a5");for(var c in s)["default"].indexOf(c)<0&&function(t){o.d(e,t,(function(){return s[t]}))}(c);var i=o("828b"),a=Object(i["a"])(s["default"],n["b"],n["c"],!1,null,"18ce8169",null,!1,n["a"],void 0);e["default"]=a.exports},c5bf:function(t,e,o){"use strict";o("6a54");var n=o("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(o("9b1b"));o("c223"),o("d4b5");var c={mqttPath:"wss://xxx",ws:null,token:"",dockSetTimeOut:null,droneSetTimeOut:null,sn:"",init:function(t,e){this.getToken(t),e&&(this.sn=e)},server:function(t){var e=this,o=this;this.ws&&this.ws.close();var n=uni.connectSocket({url:"".concat(o.mqttPath,"/messaging/").concat(t),complete:function(){}});this.ws=n,n.onOpen((function(t){console.log(t),o.wsOpen(t)})),n.onClose((function(t){o.wsClose(t)})),n.onMessage((function(t){o.wsMessage(t);try{var n=JSON.parse(t.data);n.message&&uni.showToast({title:n.message,icon:"none"})}catch(t){e.getToken(),console.log(t)}})),n.onError((function(t){o.wsError(t)}))},wsOpen:function(t){console.log(t),c.subDockInfo(this.sn),this.subDeviceInfo({productId:"*",id:this.sn})},wsError:function(t){console.log(t);var e=this;setTimeout((function(){e.server(e.token)}),1e4)},wsClose:function(t){console.log(t);var e=this;setTimeout((function(){e.server(e.token)}),1e4)},wsMessage:function(t){t=JSON.parse(t.data)},subDroneInfo:function(t){this.unSubMqtt("drone-info"),this.subMqtt({topic:"/device/*/".concat(t,"/**"),id:"drone-info"})},subDockInfo:function(t){this.unSubMqtt("request-id"),this.subMqtt({topic:"/device/*/".concat(t,"/**"),id:"request-id"})},subDeviceInfo:function(t){this.unSubMqtt("device-info"),this.subMqtt({topic:"/device/".concat(t.productId,"/").concat(t.id,"/**"),id:"device-info",parameter:(0,s.default)({},t.param)})},subMqtt:function(t){var e=(0,s.default)({type:"sub",topic:"",parameter:{},id:"request-id"},t);this.ws.send({data:JSON.stringify(e)})},unSubMqtt:function(t){this.ws.send({data:JSON.stringify({type:"unsub",id:t||"request-id"})})},getToken:function(t){this.token=t,this.server(this.token)}},i=c;e.default=i},ef0e:function(t,e,o){"use strict";o("6a54");var n=o("3639").default,s=o("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("c223"),o("d4b5");var c=s(o("9b1b")),i=o("8f59"),a=s(o("c5bf")),r=n(o("0218")),l={data:function(){return{colors:{hex:"#194d33",hex8:"#194D33A8",hsl:{h:150,s:.5,l:.2,a:1},hsv:{h:150,s:.66,v:.3,a:1},rgba:{r:25,g:77,b:51,a:1},a:1},dockInfo:{sn:"DKS1MINISSS323290015",deviceName:"DKS1MINISSS323290015"},switch:!1,colorData:[{color:"red",value:1},{color:"green",value:2},{color:"blue",value:3},{color:"white",value:4},{color:"aqua",value:5},{color:"yellow",value:6},{color:"purple",value:7}],colorDataBreath:[{color:"red",value:9},{color:"green",value:10},{color:"blue",value:11},{color:"white",value:12},{color:"chroma",value:13},{color:"yellow",value:14},{color:"purple",value:15}],currentColor:"aqua",currentColorType:"当前",colorDataB:[{color:"yellow",value:1},{color:"blue",value:2},{color:"aqua",value:3},{color:"red",value:4}],colorDataBreathB:[{color:"white",value:5},{color:"yellow",value:6},{color:"blue",value:7},{color:"aqua",value:8},{color:"red",value:9}],currentColorB:"aqua",currentColorTypeB:"当前",currentTab:0,tabCurrent:"tabNum1",switchStatus:!1}},computed:(0,c.default)({},(0,i.mapState)(["userInfo"])),onLoad:function(){var t=this;r.getUserInfo().then((function(e){0===e.flag&&e.data&&(t.updateUserInfo(e.data),r.getToken().then((function(e){if(0===e.flag){var o=JSON.parse(e.data);o.result&&a.default.init(o.result,t.dockInfo.sn)}})).catch((function(t){console.log(t)})))})).catch((function(t){console.log(t)}))},methods:(0,c.default)((0,c.default)({},(0,i.mapMutations)(["updateUserInfo"])),{},{updateValue:function(t){console.log("value",t)},changeColorB:function(t){this.sendMessage(this.dockInfo.sn,{oneStepControl:{type:"controlNestLed",data:{value:"".concat(t.value)}}})},handleChooseColorBreathB:function(t){this.currentColorTypeB="呼吸",this.currentColorB=t.color,this.changeColorB(t)},handleChooseColorB:function(t){this.currentColorTypeB="常规",this.currentColorB=t.color,this.changeColorB(t)},changeColor:function(t){var e=this;this.sendMessage(this.dockInfo.sn,{oneStepControl:{type:"controlNestLedDownSwitch",data:{value:"0"}}}),setTimeout((function(){e.sendMessage(e.dockInfo.sn,{oneStepControl:{type:"controlNestLedPole",data:{value:"".concat(t.value)}}})}),200)},handleChooseColorBreath:function(t){this.currentColorType="呼吸",this.currentColor=t.color,this.changeColor(t)},handleChooseColor:function(t){this.currentColorType="常规",this.currentColor=t.color,this.changeColor(t)},touchend:function(){},longpress:function(){var t=this;this.switchStatus=!this.switchStatus,this.switchStatus?(this.sendMessage(this.dockInfo.sn,{oneStepControl:{type:"controlSkylight",data:{value:"1"}}}),setTimeout((function(){t.sendMessage(t.dockInfo.sn,{oneStepControl:{type:"controlUD",data:{value:"1"}}})}),200)):(this.sendMessage(this.dockInfo.sn,{oneStepControl:{type:"controlUD",data:{value:"0"}}}),setTimeout((function(){t.sendMessage(t.dockInfo.sn,{oneStepControl:{type:"controlSkylight",data:{value:"0"}}})}),200))},changing:function(t){console.log(t)},swichMenu:function(t){this.currentTab=t,this.tabCurrent="tabNum"+t},swiperChange:function(t){var e=t.detail.current;this.swichMenu(e)},send:function(){},sendMessage:function(t,e,o){e.user="".concat(this.userInfo.realName," ").concat(this.userInfo.username);var n={type:"sub",topic:"/device-message-sender/S-LH-Dock/".concat(t),parameter:{messageType:o?"READ_PROPERTY":"WRITE_PROPERTY",properties:e,headers:{async:!0}},id:Date.now()};return a.default.ws.send({data:JSON.stringify(n)})},logout:function(){uni.removeStorageSync("token"),uni.reLaunch({url:"/pages/login/login"})}})};e.default=l}}]);