(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-details-details"],{"0866":function(e,t,i){"use strict";i.r(t);var n=i("0d16"),a=i.n(n);for(var l in n)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(l);t["default"]=a.a},"0d16":function(e,t,i){"use strict";i("6a54");var n=i("3639").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("93ea"),l=n(i("0218")),o={data:function(){return{source:"",richText:"",details:{}}},onLoad:function(e){var t=this,i=e.id;uni.showLoading({title:"加载中..."}),"projects"===e.source?(this.source="projects",l.getProjectDetails(i).then((function(e){e.data&&200==e.statusCode&&(t.details=e.data,t.richText=e.data.content,uni.setNavigationBarTitle({title:e.data.name}),uni.hideLoading())})).catch((function(e){console.log(e)}))):l.getArticleDetails(i).then((function(e){e.data&&200==e.statusCode&&(t.details=e.data,t.richText=e.data.content,uni.setNavigationBarTitle({title:e.data.title}),uni.hideLoading())})).catch((function(e){console.log(e)}))},methods:{handleUrlClick:function(e){window.location.href=e.url},genDate:function(e){return(0,a.dateFormat)(e,"yyyy-MM-dd")}}};t.default=o},"46e0":function(e,t,i){"use strict";i.r(t);var n=i("9b6e"),a=i("0866");for(var l in a)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(l);i("83ea");var o=i("828b"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"061edbcd",null,!1,n["a"],void 0);t["default"]=s.exports},4845:function(e,t,i){"use strict";i.r(t);var n=i("b111"),a=i("f46e");for(var l in a)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(l);i("82d1");var o=i("828b"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"0aeecfb8",null,!1,n["a"],void 0);t["default"]=s.exports},"560e":function(e,t,i){var n=i("c86c"),a=i("2ec5"),l=i("5765");t=n(!1);var o=a(l);t.push([e.i,"\n@font-face{font-family:uniicons;src:url("+o+') format("truetype")}\n.uni-icons[data-v-0aeecfb8]{font-family:uniicons;text-decoration:none;text-align:center}',""]),e.exports=t},5685:function(e,t,i){var n=i("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.details[data-v-061edbcd]{padding:%?40?%}.details .title[data-v-061edbcd]{text-align:center;font-size:%?38?%;font-weight:700}.details .info[data-v-061edbcd]{border-bottom:1px solid #f5f5f5;padding:%?20?% 0;font-size:%?24?%;text-align:center;color:#6f6f6f}.details .info .item[data-v-061edbcd]{display:inline-block;margin:0 %?10?%}',""]),e.exports=t},"7c15":function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("64aa");var a=n(i("ca3c")),l={name:"UniIcons",emits:["click"],props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:a.default}},methods:{_onClick:function(){this.$emit("click")}}};t.default=l},"82d1":function(e,t,i){"use strict";var n=i("e6299"),a=i.n(n);a.a},"83ea":function(e,t,i){"use strict";var n=i("d436"),a=i.n(n);a.a},"93ea":function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.dateFormat=function(e,t){var i=null;if("number"===typeof e)i=new Date(e);else if("string"===typeof e){if(e=e.replace(/-/g,"/"),e.indexOf("T")>-1){var n=e.indexOf(".");e=e.substr(0,n),e=e.replace("T"," "),e=new Date(e).getTime()}isNaN(Number(e))||(e=Number(e)),i=new Date(e)}else{if(!(e instanceof Date))return!1;i=e}var a={"M+":i.getMonth()+1,"d+":i.getDate(),"h+":i.getHours()%24===0?"00":i.getHours()%24,"H+":i.getHours(),"m+":i.getMinutes(),"s+":i.getSeconds(),"q+":Math.floor((i.getMonth()+3)/3),S:i.getMilliseconds()};t||(t="yyyy-MM-dd hh:mm:ss");/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(i.getFullYear()+"").substr(4-RegExp.$1.length)));/(E+)/.test(t)&&(t=t.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+{0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"}[i.getDay()+""]));for(var l in a)new RegExp("("+l+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?a[l]:("00"+a[l]).substr((""+a[l]).length)));return t},i("5c47"),i("a1c1"),i("5ef2"),i("64aa"),i("0506"),i("23f4"),i("7d2f"),i("9c4e"),i("ab80")},"9b6e":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return l})),i.d(t,"a",(function(){return n}));var n={uniIcons:i("4845").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"details"},["projects"===e.source?i("v-uni-view",[i("v-uni-view",{staticClass:"title"},[e._v(e._s(e.details.name))]),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"item"},[e._v(e._s(e.genDate(e.details.date)))]),e.details.url?i("v-uni-view",{staticClass:"item"},[i("uni-icons",{attrs:{type:"paperplane",color:"#000",size:"12"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleUrlClick(e.details)}}})],1):e._e()],1),i("v-uni-rich-text",{staticClass:"markdown-body",attrs:{nodes:e.richText}})],1):i("v-uni-view",[i("v-uni-view",{staticClass:"title"},[e._v(e._s(e.details.title))]),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"item"},[e._v(e._s(e.details.author))]),i("v-uni-view",{staticClass:"item"},[e._v(e._s(e.details.categories))]),i("v-uni-view",{staticClass:"item"},[e._v(e._s(e.genDate(e.details.date)))])],1),i("v-uni-rich-text",{staticClass:"markdown-body",attrs:{nodes:e.richText}})],1)],1)},l=[]},b111:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-text",{staticClass:"uni-icons",class:[e.customIcons,e.customIcons?e.type:""],style:{color:e.color,"font-size":e.size+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._onClick.apply(void 0,arguments)}}},[e._v(e._s(e.icons[e.type]))])},a=[]},ca3c:function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""}},d436:function(e,t,i){var n=i("5685");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("967d").default;a("1c5ec9e3",n,!0,{sourceMap:!1,shadowMode:!1})},e6299:function(e,t,i){var n=i("560e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("967d").default;a("2f41b70e",n,!0,{sourceMap:!1,shadowMode:!1})},f46e:function(e,t,i){"use strict";i.r(t);var n=i("7c15"),a=i.n(n);for(var l in n)["default"].indexOf(l)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(l);t["default"]=a.a}}]);