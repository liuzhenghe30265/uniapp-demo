(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-upload-file-upload-file"],{"2cb0":function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"page-head",props:{title:{type:String,default:""}}};t.default=n},"390c":function(e,t,a){"use strict";a.r(t);var n=a("7df3"),i=a("b78b");for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("a270");var u=a("828b"),c=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"789a2834",null,!1,n["a"],void 0);t["default"]=c.exports},"3c42":function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{title:"uploadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){console.log("chooseImage success, temp path is",t.tempFilePaths[0]);var a=t.tempFilePaths[0];uni.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:a,fileType:"image",name:"data",success:function(t){console.log("uploadImage success, res is:",t),uni.showToast({title:"上传成功",icon:"success",duration:1e3}),e.imageSrc=a},fail:function(e){console.log("uploadImage fail",e),uni.showModal({content:e.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})}}};t.default=n},6231:function(e,t,a){"use strict";a.r(t);var n=a("2cb0"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"7df3":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={pageHead:a("daaa").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:e.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[a("v-uni-view",{staticClass:"demo"},[e.imageSrc?[a("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"}})]:[a("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}},[e._v("+ 选择图片")])]],2)],1)],1)},o=[]},"8f8a":function(e,t,a){var n=a("db7a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("967d").default;i("368fcac7",n,!0,{sourceMap:!1,shadowMode:!1})},"9a27":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){}));var n=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"common-page-head"},[t("v-uni-view",{staticClass:"common-page-head-title"},[this._v(this._s(this.title))])],1)},i=[]},a270:function(e,t,a){"use strict";var n=a("8f8a"),i=a.n(n);i.a},b78b:function(e,t,a){"use strict";a.r(t);var n=a("3c42"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},daaa:function(e,t,a){"use strict";a.r(t);var n=a("9a27"),i=a("6231");for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);var u=a("828b"),c=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=c.exports},db7a:function(e,t,a){var n=a("c86c");t=n(!1),t.push([e.i,".image[data-v-789a2834]{width:100%}.demo[data-v-789a2834]{background:#fff;padding:%?50?%}",""]),e.exports=t}}]);