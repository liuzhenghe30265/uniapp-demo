(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-fab-fab"],{"11b9":function(t,i,n){"use strict";n.r(i);var o=n("6a76"),e=n("57a9");for(var a in e)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(a);n("6174");var c=n("828b"),r=Object(c["a"])(e["default"],o["b"],o["c"],!1,null,"cc229960",null,!1,o["a"],void 0);i["default"]=r.exports},"46d3":function(t,i,n){var o=n("db03");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var e=n("967d").default;e("5de797e4",o,!0,{sourceMap:!1,shadowMode:!1})},"57a9":function(t,i,n){"use strict";n.r(i);var o=n("9e08"),e=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return o[t]}))}(a);i["default"]=e.a},6174:function(t,i,n){"use strict";var o=n("9b34"),e=n.n(o);e.a},6818:function(t,i,n){"use strict";n.d(i,"b",(function(){return o})),n.d(i,"c",(function(){return e})),n.d(i,"a",(function(){}));var o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"uni-cursor-point"},[t.popMenu&&(t.leftBottom||t.rightBottom||t.leftTop||t.rightTop)&&t.content.length>0?n("v-uni-view",{staticClass:"uni-fab",class:{"uni-fab--leftBottom":t.leftBottom,"uni-fab--rightBottom":t.rightBottom,"uni-fab--leftTop":t.leftTop,"uni-fab--rightTop":t.rightTop}},[n("v-uni-view",{staticClass:"uni-fab__content",class:{"uni-fab__content--left":"left"===t.horizontal,"uni-fab__content--right":"right"===t.horizontal,"uni-fab__content--flexDirection":"vertical"===t.direction,"uni-fab__content--flexDirectionStart":t.flexDirectionStart,"uni-fab__content--flexDirectionEnd":t.flexDirectionEnd,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{width:t.boxWidth,height:t.boxHeight,backgroundColor:t.styles.backgroundColor},attrs:{elevation:"5"}},[t.flexDirectionStart||t.horizontalLeft?n("v-uni-view",{staticClass:"uni-fab__item uni-fab__item--first"}):t._e(),t._l(t.content,(function(i,o){return n("v-uni-view",{key:o,staticClass:"uni-fab__item",class:{"uni-fab__item--active":t.isShow},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._onItemClick(o,i)}}},[n("v-uni-image",{staticClass:"uni-fab__item-image",attrs:{src:i.active?i.selectedIconPath:i.iconPath,mode:"widthFix"}}),n("v-uni-text",{staticClass:"uni-fab__item-text",style:{color:i.active?t.styles.selectedColor:t.styles.color}},[t._v(t._s(i.text))])],1)})),t.flexDirectionEnd||t.horizontalRight?n("v-uni-view",{staticClass:"uni-fab__item uni-fab__item--first"}):t._e()],2)],1):t._e(),n("v-uni-view",{staticClass:"uni-fab__circle uni-fab__plus",class:{"uni-fab__circle--leftBottom":t.leftBottom,"uni-fab__circle--rightBottom":t.rightBottom,"uni-fab__circle--leftTop":t.leftTop,"uni-fab__circle--rightTop":t.rightTop,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{"background-color":t.styles.buttonColor},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._onClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"fab-circle-v",class:{"uni-fab__plus--active":t.isShow&&t.content.length>0}}),n("v-uni-view",{staticClass:"fab-circle-h",class:{"uni-fab__plus--active":t.isShow&&t.content.length>0}})],1)],1)},e=[]},"6a76":function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return o}));var o={uniFab:n("8856").default},e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"uni-fab-box"},[n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"word-btn",attrs:{"hover-class":"word-btn--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchBtn(0)}}},[n("v-uni-text",{staticClass:"word-btn-white"},[t._v("切换菜单("+t._s(t.directionStr)+"显示)")])],1),n("v-uni-view",{staticClass:"word-btn",attrs:{"hover-class":"word-btn--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchBtn("left","bottom")}}},[n("v-uni-text",{staticClass:"word-btn-white"},[t._v("左下角显示")])],1),n("v-uni-view",{staticClass:"word-btn",attrs:{"hover-class":"word-btn--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchBtn("right","bottom")}}},[n("v-uni-text",{staticClass:"word-btn-white"},[t._v("右下角显示")])],1),n("v-uni-view",{staticClass:"word-btn",attrs:{"hover-class":"word-btn--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchBtn("left","top")}}},[n("v-uni-text",{staticClass:"word-btn-white"},[t._v("左上角显示")])],1),n("v-uni-view",{staticClass:"word-btn",attrs:{"hover-class":"word-btn--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchBtn("right","top")}}},[n("v-uni-text",{staticClass:"word-btn-white"},[t._v("右上角显示")])],1)],1),n("uni-fab",{ref:"fab",attrs:{pattern:t.pattern,content:t.content,horizontal:t.horizontal,vertical:t.vertical,direction:t.direction},on:{trigger:function(i){arguments[0]=i=t.$handleEvent(i),t.trigger.apply(void 0,arguments)},fabClick:function(i){arguments[0]=i=t.$handleEvent(i),t.fabClick.apply(void 0,arguments)}}})],1)},a=[]},"86db":function(t,i,n){var o=n("c86c");i=o(!1),i.push([t.i,'@charset "UTF-8";\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-cc229960]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}body.?%PAGE?%[data-v-cc229960]{background-color:#efeff4}uni-view[data-v-cc229960]{font-size:14px;line-height:inherit}.example[data-v-cc229960]{padding:0 15px 15px}.example-info[data-v-cc229960]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-cc229960]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-cc229960]{padding:0 15px}.example-info[data-v-cc229960]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-cc229960]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-cc229960]{flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-cc229960]{font-size:18px;color:#fff}.word-btn[data-v-cc229960]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-cc229960]{background-color:#4ca2ff}\n.uni-fab-box[data-v-cc229960]{\ndisplay:flex;\nflex-direction:row;justify-content:center;position:absolute;top:0;bottom:0;left:0;right:0}.uni-padding-wrap[data-v-cc229960]{\ndisplay:flex;\nflex-direction:column;justify-content:center;align-items:center}.word-btn[data-v-cc229960]{width:250px}',""]),t.exports=i},8856:function(t,i,n){"use strict";n.r(i);var o=n("6818"),e=n("adec");for(var a in e)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(a);n("fb06");var c=n("828b"),r=Object(c["a"])(e["default"],o["b"],o["c"],!1,null,"3a7c6164",null,!1,o["a"],void 0);i["default"]=r.exports},"991b":function(t,i,n){"use strict";n("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={name:"UniFab",emits:["fabClick","trigger"],props:{pattern:{type:Object,default:function(){return{}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0}},data:function(){return{fabShow:!1,isShow:!1,isAndroidNvue:!1,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#007AFF"}}},computed:{contentWidth:function(t){return 55*(this.content.length+1)+10+"px"},contentWidthMin:function(){return"55px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")}},watch:{pattern:function(t,i){this.styles=Object.assign({},this.styles,t)}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{_onClick:function(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open:function(){this.isShow=!0},close:function(){this.isShow=!1},_onItemClick:function(t,i){this.$emit("trigger",{index:t,item:i})},getPosition:function(t,i,n){return 0===t?this.horizontal===i&&this.vertical===n:1===t?this.direction===i&&this.vertical===n:2===t?this.direction===i&&this.horizontal===n:this.isShow&&this.direction===i?this.contentWidth:this.contentWidthMin}}};i.default=o},"9b34":function(t,i,n){var o=n("86db");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var e=n("967d").default;e("1ecf0625",o,!0,{sourceMap:!1,shadowMode:!1})},"9e08":function(t,i,n){"use strict";n("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("c223");var o={components:{},data:function(){return{title:"uni-fab",directionStr:"垂直",horizontal:"left",vertical:"bottom",direction:"horizontal",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF"},content:[{iconPath:"/static/component.png",selectedIconPath:"/static/componentHL.png",text:"组件",active:!1},{iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png",text:"API",active:!1},{iconPath:"/static/template.png",selectedIconPath:"/static/templateHL.png",text:"模版",active:!1}]}},onBackPress:function(){return!!this.$refs.fab.isShow&&(this.$refs.fab.close(),!0)},methods:{trigger:function(t){console.log(t),this.content[t.index].active=!t.item.active,uni.showModal({title:"提示",content:"您".concat(this.content[t.index].active?"选中了":"取消了").concat(t.item.text),success:function(t){t.confirm?console.log("用户点击确定"):t.cancel&&console.log("用户点击取消")}})},fabClick:function(){uni.showToast({title:"点击了悬浮按钮",icon:"none"})},switchBtn:function(t,i){0===t?(this.direction="horizontal"===this.direction?"vertical":"horizontal",this.directionStr="horizontal"===this.direction?"垂直":"水平"):(this.horizontal=t,this.vertical=i),this.$forceUpdate()}}};i.default=o},adec:function(t,i,n){"use strict";n.r(i);var o=n("991b"),e=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return o[t]}))}(a);i["default"]=e.a},db03:function(t,i,n){var o=n("c86c");i=o(!1),i.push([t.i,".uni-fab[data-v-3a7c6164]{position:fixed;\ndisplay:flex;\njustify-content:center;align-items:center;z-index:10}.uni-cursor-point[data-v-3a7c6164]{\ncursor:pointer\n}.uni-fab--active[data-v-3a7c6164]{opacity:1}.uni-fab--leftBottom[data-v-3a7c6164]{left:5px;bottom:20px;\nleft:calc(5px + var(--window-left));bottom:calc(20px + var(--window-bottom));\npadding:10px}.uni-fab--leftTop[data-v-3a7c6164]{left:5px;top:30px;\nleft:calc(5px + var(--window-left));top:calc(30px + var(--window-top));\npadding:10px}.uni-fab--rightBottom[data-v-3a7c6164]{right:5px;bottom:20px;\nright:calc(5px + var(--window-right));bottom:calc(20px + var(--window-bottom));\npadding:10px}.uni-fab--rightTop[data-v-3a7c6164]{right:5px;top:30px;\nright:calc(5px + var(--window-right));top:calc(30px + var(--window-top));\npadding:10px}.uni-fab__circle[data-v-3a7c6164]{position:fixed;\ndisplay:flex;\njustify-content:center;align-items:center;width:55px;height:55px;background-color:#3c3e49;border-radius:55px;z-index:11}.uni-fab__circle--leftBottom[data-v-3a7c6164]{left:15px;bottom:30px;\nleft:calc(15px + var(--window-left));bottom:calc(30px + var(--window-bottom))\n}.uni-fab__circle--leftTop[data-v-3a7c6164]{left:15px;top:40px;\nleft:calc(15px + var(--window-left));top:calc(40px + var(--window-top))\n}.uni-fab__circle--rightBottom[data-v-3a7c6164]{right:15px;bottom:30px;\nright:calc(15px + var(--window-right));bottom:calc(30px + var(--window-bottom))\n}.uni-fab__circle--rightTop[data-v-3a7c6164]{right:15px;top:40px;\nright:calc(15px + var(--window-right));top:calc(40px + var(--window-top))\n}.uni-fab__circle--left[data-v-3a7c6164]{left:0}.uni-fab__circle--right[data-v-3a7c6164]{right:0}.uni-fab__circle--top[data-v-3a7c6164]{top:0}.uni-fab__circle--bottom[data-v-3a7c6164]{bottom:0}.uni-fab__plus[data-v-3a7c6164]{font-weight:700}.fab-circle-v[data-v-3a7c6164]{position:absolute;width:3px;height:31px;left:26px;top:12px;background-color:#fff;-webkit-transform:rotate(0deg);transform:rotate(0deg);transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.fab-circle-h[data-v-3a7c6164]{position:absolute;width:31px;height:3px;left:12px;top:26px;background-color:#fff;-webkit-transform:rotate(0deg);transform:rotate(0deg);transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.uni-fab__plus--active[data-v-3a7c6164]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.uni-fab__content[data-v-3a7c6164]{\nbox-sizing:border-box;display:flex;\nflex-direction:row;border-radius:55px;overflow:hidden;transition-property:width,height;transition-duration:.2s;width:55px;border-color:#ddd;border-width:%?1?%;border-style:solid}.uni-fab__content--other-platform[data-v-3a7c6164]{border-width:0;box-shadow:0 0 5px 2px rgba(0,0,0,.2)}.uni-fab__content--left[data-v-3a7c6164]{justify-content:flex-start}.uni-fab__content--right[data-v-3a7c6164]{justify-content:flex-end}.uni-fab__content--flexDirection[data-v-3a7c6164]{flex-direction:column;justify-content:flex-end}.uni-fab__content--flexDirectionStart[data-v-3a7c6164]{flex-direction:column;justify-content:flex-start}.uni-fab__content--flexDirectionEnd[data-v-3a7c6164]{flex-direction:column;justify-content:flex-end}.uni-fab__item[data-v-3a7c6164]{\ndisplay:flex;\nflex-direction:column;justify-content:center;align-items:center;width:55px;height:55px;opacity:0;transition:opacity .2s}.uni-fab__item--active[data-v-3a7c6164]{opacity:1}.uni-fab__item-image[data-v-3a7c6164]{width:25px;height:25px;margin-bottom:3px}.uni-fab__item-text[data-v-3a7c6164]{color:#fff;font-size:12px}.uni-fab__item--first[data-v-3a7c6164]{width:55px}",""]),t.exports=i},fb06:function(t,i,n){"use strict";var o=n("46d3"),e=n.n(o);e.a}}]);