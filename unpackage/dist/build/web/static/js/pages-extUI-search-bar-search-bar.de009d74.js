(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-search-bar-search-bar"],{"005a":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return a}));var a={uniIcons:n("4845").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-searchbar"},[n("v-uni-view",{staticClass:"uni-searchbar__box",style:{borderRadius:e.radius+"px",backgroundColor:e.bgColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.searchClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-searchbar__box-icon-search"},[e._t("searchIcon",[n("uni-icons",{attrs:{color:"#999999",size:"18",type:"search"}})])],2),e.show||e.searchVal?n("v-uni-input",{staticClass:"uni-searchbar__box-search-input",attrs:{focus:e.showSync,placeholder:e.placeholder,maxlength:e.maxlength,"confirm-type":"search",type:"text"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.blur.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.emitFocus.apply(void 0,arguments)}},model:{value:e.searchVal,callback:function(t){e.searchVal=t},expression:"searchVal"}}):n("v-uni-text",{staticClass:"uni-searchbar__text-placeholder"},[e._v(e._s(e.placeholder))]),e.show&&("always"===e.clearButton||"auto"===e.clearButton&&""!==e.searchVal)?n("v-uni-view",{staticClass:"uni-searchbar__box-icon-clear",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[e._t("clearIcon",[n("uni-icons",{attrs:{color:"#c0c4cc",size:"15",type:"clear"}})])],2):e._e()],1),"always"===e.cancelButton||e.show&&"auto"===e.cancelButton?n("v-uni-text",{staticClass:"uni-searchbar__cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}},[e._v(e._s(e.cancelText))]):e._e()],1)},c=[]},"0205":function(e,t,n){"use strict";n.r(t);var a=n("57be"),i=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);t["default"]=i.a},1485:function(e,t,n){"use strict";n.r(t);var a=n("7023"),i=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);t["default"]=i.a},"21ac":function(e,t,n){var a=n("c86c");t=a(!1),t.push([e.i,".uni-section[data-v-bb38779a]{position:relative;\ndisplay:flex;\nmargin-top:10px;flex-direction:row;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section__head[data-v-bb38779a]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-bb38779a]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-bb38779a]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-bb38779a]{\ndisplay:flex;\nflex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-bb38779a]{font-size:14px;color:#333}.distraction[data-v-bb38779a]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-bb38779a]{font-size:12px;color:#999}",""]),e.exports=t},2881:function(e,t,n){var a=n("e085");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("967d").default;i("e440602c",a,!0,{sourceMap:!1,shadowMode:!1})},"32b4":function(e,t,n){var a=n("c86c");t=a(!1),t.push([e.i,".uni-searchbar[data-v-6457b319]{\ndisplay:flex;\nflex-direction:row;position:relative;padding:8px}.uni-searchbar__box[data-v-6457b319]{\ndisplay:flex;box-sizing:border-box;\noverflow:hidden;position:relative;flex:1;justify-content:center;flex-direction:row;align-items:center;height:36px;padding:5px 8px 5px 0;border-width:.5px;border-style:solid;border-color:#e5e5e5}.uni-searchbar__box-icon-search[data-v-6457b319]{\ndisplay:flex;\nflex-direction:row;padding:0 8px;justify-content:center;align-items:center;color:grey}.uni-searchbar__box-search-input[data-v-6457b319]{flex:1;font-size:14px;color:#333}.uni-searchbar__box-icon-clear[data-v-6457b319]{align-items:center;line-height:24px;padding-left:8px;\ncursor:pointer\n}.uni-searchbar__text-placeholder[data-v-6457b319]{font-size:14px;color:grey;margin-left:5px}.uni-searchbar__cancel[data-v-6457b319]{padding-left:10px;line-height:36px;font-size:14px;color:#333;\ncursor:pointer\n}",""]),e.exports=t},4845:function(e,t,n){"use strict";n.r(t);var a=n("b111"),i=n("f46e");for(var c in i)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(c);n("82d1");var o=n("828b"),l=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"0aeecfb8",null,!1,a["a"],void 0);t["default"]=l.exports},"560e":function(e,t,n){var a=n("c86c"),i=n("2ec5"),c=n("5765");t=a(!1);var o=i(c);t.push([e.i,"\n@font-face{font-family:uniicons;src:url("+o+') format("truetype")}\n.uni-icons[data-v-0aeecfb8]{font-family:uniicons;text-decoration:none;text-align:center}',""]),e.exports=t},"57be":function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick:function(){this.$emit("click")}}};t.default=a},"5a62":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return a}));var a={uniSection:n("92fd").default,uniSearchBar:n("a8fb").default,uniIcons:n("4845").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("uni-section",{attrs:{title:"基本用法",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-search-bar",{attrs:{focus:!0},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.blur.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.focus.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.input.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)},clear:function(t){arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),n("v-uni-view",{staticClass:"search-result"},[n("v-uni-text",{staticClass:"search-result-text"},[e._v("当前输入为："+e._s(e.searchValue))])],1)],1),n("uni-section",{attrs:{title:"自定义样式",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-search-bar",{attrs:{placeholder:"自定义placeholder","cancel-text":"cancel"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}}),n("uni-search-bar",{attrs:{placeholder:"自定义背景色",bgColor:"#EEEEEE"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}}),n("uni-search-bar",{attrs:{radius:"100",placeholder:"自定义圆角"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}})],1),n("uni-section",{attrs:{title:"自定义icon",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-search-bar",{attrs:{placeholder:"自定义searchIcon","cancel-text":"cancel"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}},[n("uni-icons",{attrs:{slot:"searchIcon",color:"#999999",size:"18",type:"home"},slot:"searchIcon"})],1),n("uni-search-bar",{attrs:{placeholder:"自定义clearIcon","cancel-text":"cancel"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}},[n("v-uni-view",{staticStyle:{color:"#999999"},attrs:{slot:"clearIcon"},slot:"clearIcon"},[e._v("X")])],1)],1),n("uni-section",{attrs:{title:"控制清除/取消按钮",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-search-bar",{attrs:{radius:"5",placeholder:"一直显示",clearButton:"always",cancelButton:"always"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}}),n("uni-search-bar",{attrs:{radius:"5",placeholder:"自动显示隐藏",clearButton:"auto",cancelButton:"none"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}}),n("uni-search-bar",{attrs:{radius:"100",placeholder:"一直不显示",clearButton:"none",cancelButton:"none"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}})],1)],1)},c=[]},"6c88":function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{searchValue:"123123"}},methods:{search:function(e){uni.showToast({title:"搜索："+e.value,icon:"none"})},input:function(e){console.log("----input:",e)},clear:function(e){uni.showToast({title:"clear事件，清除值为："+e.value,icon:"none"})},blur:function(e){uni.showToast({title:"blur事件，输入值为："+e.value,icon:"none"})},focus:function(e){uni.showToast({title:"focus事件，输出值为："+e.value,icon:"none"})},cancel:function(e){uni.showToast({title:"点击取消，输入值为："+e.value,icon:"none"})}},onBackPress:function(){}};t.default=a},7023:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("64aa");var a={name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:"请输入搜索内容"},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:"取消"},bgColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1}},data:function(){return{show:!1,showSync:!1,searchVal:""}},watch:{value:{immediate:!0,handler:function(e){this.searchVal=e,e&&(this.show=!0)}},modelValue:{immediate:!0,handler:function(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler:function(e){var t=this;e&&(this.show=!0,this.$nextTick((function(){t.showSync=!0})))}},searchVal:function(e,t){this.$emit("input",e),this.$emit("update:modelValue",e)}},methods:{searchClick:function(){var e=this;this.show||(this.show=!0,this.$nextTick((function(){e.showSync=!0})))},clear:function(){this.$emit("clear",{value:this.searchVal}),this.searchVal=""},cancel:function(){this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,uni.hideKeyboard()},confirm:function(){uni.hideKeyboard(),this.$emit("confirm",{value:this.searchVal})},blur:function(){uni.hideKeyboard(),this.$emit("blur",{value:this.searchVal})},emitFocus:function(e){this.$emit("focus",e.detail)}}};t.default=a},"70a2":function(e,t,n){var a=n("21ac");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("967d").default;i("4d9a33fc",a,!0,{sourceMap:!1,shadowMode:!1})},"7c15":function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("64aa");var i=a(n("ca3c")),c={name:"UniIcons",emits:["click"],props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:i.default}},methods:{_onClick:function(){this.$emit("click")}}};t.default=c},"7f1d":function(e,t,n){"use strict";n.r(t);var a=n("5a62"),i=n("901c");for(var c in i)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(c);n("a424");var o=n("828b"),l=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"41c46e18",null,!1,a["a"],void 0);t["default"]=l.exports},"82d1":function(e,t,n){"use strict";var a=n("e6299"),i=n.n(a);i.a},"901c":function(e,t,n){"use strict";n.r(t);var a=n("6c88"),i=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);t["default"]=i.a},"92fd":function(e,t,n){"use strict";n.r(t);var a=n("ac6d"),i=n("0205");for(var c in i)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(c);n("ddf7");var o=n("828b"),l=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"bb38779a",null,!1,a["a"],void 0);t["default"]=l.exports},a424:function(e,t,n){"use strict";var a=n("2881"),i=n.n(a);i.a},a8fb:function(e,t,n){"use strict";n.r(t);var a=n("005a"),i=n("1485");for(var c in i)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(c);n("c3d5");var o=n("828b"),l=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"6457b319",null,!1,a["a"],void 0);t["default"]=l.exports},ac6d:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[e.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:e.type})],1):e._e(),n("v-uni-view",{staticClass:"uni-section__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!e.subTitle}},[e._v(e._s(e.title))]),e.subTitle?n("v-uni-text",{staticClass:"uni-section__content-sub"},[e._v(e._s(e.subTitle))]):e._e()],1),e._t("default")],2)},i=[]},b111:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-text",{staticClass:"uni-icons",class:[e.customIcons,e.customIcons?e.type:""],style:{color:e.color,"font-size":e.size+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._onClick.apply(void 0,arguments)}}},[e._v(e._s(e.icons[e.type]))])},i=[]},c3d5:function(e,t,n){"use strict";var a=n("d8a4"),i=n.n(a);i.a},ca3c:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""}},d8a4:function(e,t,n){var a=n("32b4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("967d").default;i("95072bd6",a,!0,{sourceMap:!1,shadowMode:!1})},ddf7:function(e,t,n){"use strict";var a=n("70a2"),i=n.n(a);i.a},e085:function(e,t,n){var a=n("c86c");t=a(!1),t.push([e.i,'@charset "UTF-8";\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-41c46e18]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}body.?%PAGE?%[data-v-41c46e18]{background-color:#efeff4}uni-view[data-v-41c46e18]{font-size:14px;line-height:inherit}.example[data-v-41c46e18]{padding:0 15px 15px}.example-info[data-v-41c46e18]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-41c46e18]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-41c46e18]{padding:0 15px}.example-info[data-v-41c46e18]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-41c46e18]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-41c46e18]{flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-41c46e18]{font-size:18px;color:#fff}.word-btn[data-v-41c46e18]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-41c46e18]{background-color:#4ca2ff}.search-result[data-v-41c46e18]{margin-top:10px;margin-bottom:20px;text-align:center}.search-result-text[data-v-41c46e18]{text-align:center;font-size:14px}.example-body[data-v-41c46e18]{\ndisplay:block;\npadding:0}',""]),e.exports=t},e6299:function(e,t,n){var a=n("560e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("967d").default;i("2f41b70e",a,!0,{sourceMap:!1,shadowMode:!1})},f46e:function(e,t,n){"use strict";n.r(t);var a=n("7c15"),i=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);t["default"]=i.a}}]);