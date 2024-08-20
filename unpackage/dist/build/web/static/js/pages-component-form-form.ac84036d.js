(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-form-form"],{"2c5b":function(e,t,r){"use strict";var n=r("ecc3"),i=r.n(n);i.a},"2cb0":function(e,t,r){"use strict";r("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"page-head",props:{title:{type:String,default:""}}};t.default=n},5926:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}));var n={pageHead:r("daaa").default},i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",[r("page-head",{attrs:{title:"form"}}),r("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[r("v-uni-form",{on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.formSubmit.apply(void 0,arguments)},reset:function(t){arguments[0]=t=e.$handleEvent(t),e.formReset.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-view",{staticClass:"title"},[e._v("姓名")]),r("v-uni-input",{staticClass:"uni-input",attrs:{name:"nickname",placeholder:"请输入姓名"}})],1),r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-view",{staticClass:"title"},[e._v("性别")]),r("v-uni-radio-group",{attrs:{name:"gender"}},[r("v-uni-label",[r("v-uni-radio",{attrs:{value:"男"}}),r("v-uni-text",[e._v("男")])],1),r("v-uni-label",[r("v-uni-radio",{attrs:{value:"女"}}),r("v-uni-text",[e._v("女")])],1)],1)],1),r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-view",{staticClass:"title"},[e._v("爱好")]),r("v-uni-checkbox-group",{attrs:{name:"loves"}},[r("v-uni-label",[r("v-uni-checkbox",{attrs:{value:"读书"}}),r("v-uni-text",[e._v("读书")])],1),r("v-uni-label",[r("v-uni-checkbox",{attrs:{value:"写字"}}),r("v-uni-text",[e._v("写字")])],1)],1)],1),r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-view",{staticClass:"title"},[e._v("年龄")]),r("v-uni-slider",{attrs:{value:"20",name:"age","show-value":!0}})],1),r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-view",{staticClass:"title"},[e._v("保留选项")]),r("v-uni-view",[r("v-uni-switch",{attrs:{name:"switch"}})],1)],1),r("v-uni-view",{staticClass:"uni-btn-v"},[r("v-uni-button",{attrs:{"form-type":"submit"}},[e._v("Submit")]),r("v-uni-button",{attrs:{type:"default","form-type":"reset"}},[e._v("Reset")])],1)],1)],1)],1)},a=[]},6056:function(e,t,r){"use strict";r("6a54");var n=r("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("d4b5");var i=n(r("ca23")),a={data:function(){return{}},methods:{formSubmit:function(e){console.log("form发生了submit事件，携带数据为："+JSON.stringify(e.detail.value));var t=e.detail.value,r=i.default.check(t,[{name:"nickname",checkType:"string",checkRule:"1,3",errorMsg:"姓名应为1-3个字符"},{name:"gender",checkType:"in",checkRule:"男,女",errorMsg:"请选择性别"},{name:"loves",checkType:"notnull",checkRule:"",errorMsg:"请选择爱好"}]);r?uni.showToast({title:"验证通过!",icon:"none"}):uni.showToast({title:i.default.error,icon:"none"})},formReset:function(e){console.log("清空数据")}}};t.default=a},6231:function(e,t,r){"use strict";r.r(t);var n=r("2cb0"),i=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},"9a27":function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){}));var n=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"common-page-head"},[t("v-uni-view",{staticClass:"common-page-head-title"},[this._v(this._s(this.title))])],1)},i=[]},c484:function(e,t,r){"use strict";r.r(t);var n=r("6056"),i=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},ca23:function(e,t,r){"use strict";r("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("23f4"),r("7d2f"),r("5c47"),r("9c4e"),r("ab80"),r("0506"),r("64aa"),r("5ef2");var n={error:"",check:function(e,t){for(var r=0;r<t.length;r++){if(!t[r].checkType)return!0;if(!t[r].name)return!0;if(!t[r].errorMsg)return!0;if(!e[t[r].name])return this.error=t[r].errorMsg,!1;switch(t[r].checkType){case"string":var n=new RegExp("^.{"+t[r].checkRule+"}$");if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"int":n=new RegExp("^(-[1-9]|[1-9])[0-9]{"+t[r].checkRule+"}$");if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"between":if(!this.isNumber(e[t[r].name]))return this.error=t[r].errorMsg,!1;var i=t[r].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[t[r].name]>i[1]||e[t[r].name]<i[0])return this.error=t[r].errorMsg,!1;break;case"betweenD":n=/^-?[1-9][0-9]?$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;i=t[r].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[t[r].name]>i[1]||e[t[r].name]<i[0])return this.error=t[r].errorMsg,!1;break;case"betweenF":n=/^-?[0-9][0-9]?.+[0-9]+$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;i=t[r].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[t[r].name]>i[1]||e[t[r].name]<i[0])return this.error=t[r].errorMsg,!1;break;case"same":if(e[t[r].name]!=t[r].checkRule)return this.error=t[r].errorMsg,!1;break;case"notsame":if(e[t[r].name]==t[r].checkRule)return this.error=t[r].errorMsg,!1;break;case"email":n=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"phoneno":n=/^1[0-9]{10,10}$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"zipcode":n=/^[0-9]{6}$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"reg":n=new RegExp(t[r].checkRule);if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"in":if(-1==t[r].checkRule.indexOf(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"notnull":if(null==e[t[r].name]||e[t[r].name].length<1)return this.error=t[r].errorMsg,!1;break}}return!0},isNumber:function(e){return/^-?[1-9][0-9]?.?[0-9]*$/.test(e)}};t.default=n},d558:function(e,t,r){"use strict";r.r(t);var n=r("5926"),i=r("c484");for(var a in i)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("2c5b");var u=r("828b"),s=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"84c03d1a",null,!1,n["a"],void 0);t["default"]=s.exports},daaa:function(e,t,r){"use strict";r.r(t);var n=r("9a27"),i=r("6231");for(var a in i)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(a);var u=r("828b"),s=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=s.exports},e94d:function(e,t,r){var n=r("c86c");t=n(!1),t.push([e.i,".uni-form-item .title[data-v-84c03d1a]{padding:%?20?% 0}",""]),e.exports=t},ecc3:function(e,t,r){var n=r("e94d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("967d").default;i("334d75be",n,!0,{sourceMap:!1,shadowMode:!1})}}]);