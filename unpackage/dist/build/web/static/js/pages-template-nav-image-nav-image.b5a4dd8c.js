(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-image-nav-image"],{"0d55":function(e,t,i){"use strict";i.r(t);var n=i("440a"),l=i("172c");for(var a in l)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return l[e]}))}(a);var o=i("828b"),c=Object(o["a"])(l["default"],n["b"],n["c"],!1,null,"01c8c309",null,!1,n["a"],void 0);t["default"]=c.exports},"172c":function(e,t,i){"use strict";i.r(t);var n=i("272c"),l=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=l.a},"272c":function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(i("4845")),a={data:function(){return{title:"nav-image"}},components:{uniIcons:l.default}};t.default=a},"2cb0":function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"page-head",props:{title:{type:String,default:""}}};t.default=n},"440a":function(e,t,i){"use strict";i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={pageHead:i("daaa").default,uniIcons:i("4845").default},l=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",[t("page-head",{attrs:{title:this.title}}),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"uni-title"},[t("uni-icons",{attrs:{size:"16",type:"info"}}),this._v("说明 :")],1),t("v-uni-view",{staticClass:"uni-helllo-text"},[t("v-uni-view",[this._v("在App端可在pages.json里通过 style -> titleImage 配置，支付宝小程序只支持https地址的图片，暂不支持动态改变；常用于App首页顶部导航显示产品Logo。")]),t("v-uni-view",[this._v("在支付宝小程序里请使用真机调试查看效果。")])],1)],1)],1)},a=[]},4845:function(e,t,i){"use strict";i.r(t);var n=i("b111"),l=i("f46e");for(var a in l)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return l[e]}))}(a);i("82d1");var o=i("828b"),c=Object(o["a"])(l["default"],n["b"],n["c"],!1,null,"0aeecfb8",null,!1,n["a"],void 0);t["default"]=c.exports},"560e":function(e,t,i){var n=i("c86c"),l=i("2ec5"),a=i("5765");t=n(!1);var o=l(a);t.push([e.i,"\n@font-face{font-family:uniicons;src:url("+o+') format("truetype")}\n.uni-icons[data-v-0aeecfb8]{font-family:uniicons;text-decoration:none;text-align:center}',""]),e.exports=t},6231:function(e,t,i){"use strict";i.r(t);var n=i("2cb0"),l=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=l.a},"7c15":function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("64aa");var l=n(i("ca3c")),a={name:"UniIcons",emits:["click"],props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:l.default}},methods:{_onClick:function(){this.$emit("click")}}};t.default=a},"82d1":function(e,t,i){"use strict";var n=i("e6299"),l=i.n(n);l.a},"9a27":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return l})),i.d(t,"a",(function(){}));var n=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"common-page-head"},[t("v-uni-view",{staticClass:"common-page-head-title"},[this._v(this._s(this.title))])],1)},l=[]},b111:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return l})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-text",{staticClass:"uni-icons",class:[e.customIcons,e.customIcons?e.type:""],style:{color:e.color,"font-size":e.size+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._onClick.apply(void 0,arguments)}}},[e._v(e._s(e.icons[e.type]))])},l=[]},ca3c:function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""}},daaa:function(e,t,i){"use strict";i.r(t);var n=i("9a27"),l=i("6231");for(var a in l)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return l[e]}))}(a);var o=i("828b"),c=Object(o["a"])(l["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=c.exports},e6299:function(e,t,i){var n=i("560e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var l=i("967d").default;l("2f41b70e",n,!0,{sourceMap:!1,shadowMode:!1})},f46e:function(e,t,i){"use strict";i.r(t);var n=i("7c15"),l=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=l.a}}]);