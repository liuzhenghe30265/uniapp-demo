(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-file-picker/uni-file-picker"],{

/***/ 1657:
/*!*********************************************************************************!*\
  !*** D:/WorkSpace/o/uniapp-demo/components/uni-file-picker/uni-file-picker.vue ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_file_picker_vue_vue_type_template_id_072e1f6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-file-picker.vue?vue&type=template&id=072e1f6c&scoped=true& */ 1658);
/* harmony import */ var _uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-file-picker.vue?vue&type=script&lang=js& */ 1660);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uni_file_picker_vue_vue_type_style_index_0_id_072e1f6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uni-file-picker.vue?vue&type=style&index=0&id=072e1f6c&scoped=true&lang=css& */ 1664);
/* harmony import */ var _Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 35);

var renderjs





/* normalize component */

var component = Object(_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_file_picker_vue_vue_type_template_id_072e1f6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_file_picker_vue_vue_type_template_id_072e1f6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "072e1f6c",
  null,
  false,
  _uni_file_picker_vue_vue_type_template_id_072e1f6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/uni-file-picker/uni-file-picker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1658:
/*!****************************************************************************************************************************!*\
  !*** D:/WorkSpace/o/uniapp-demo/components/uni-file-picker/uni-file-picker.vue?vue&type=template&id=072e1f6c&scoped=true& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_template_id_072e1f6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-file-picker.vue?vue&type=template&id=072e1f6c&scoped=true& */ 1659);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_template_id_072e1f6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_template_id_072e1f6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_template_id_072e1f6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_template_id_072e1f6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1659:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WorkSpace/o/uniapp-demo/components/uni-file-picker/uni-file-picker.vue?vue&type=template&id=072e1f6c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.title ? _vm.filesList.length : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1660:
/*!**********************************************************************************************************!*\
  !*** D:/WorkSpace/o/uniapp-demo/components/uni-file-picker/uni-file-picker.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-file-picker.vue?vue&type=script&lang=js& */ 1661);
/* harmony import */ var _Program_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1661:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WorkSpace/o/uniapp-demo/components/uni-file-picker/uni-file-picker.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 37));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 39));
var _chooseAndUploadFile = __webpack_require__(/*! ./choose-and-upload-file.js */ 1662);
var _utils = __webpack_require__(/*! ./utils.js */ 1663);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var uploadImage = function uploadImage() {
  __webpack_require__.e(/*! require.ensure | components/uni-file-picker/upload-image */ "components/uni-file-picker/upload-image").then((function () {
    return resolve(__webpack_require__(/*! ./upload-image.vue */ 1759));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var uploadFile = function uploadFile() {
  __webpack_require__.e(/*! require.ensure | components/uni-file-picker/upload-file */ "components/uni-file-picker/upload-file").then((function () {
    return resolve(__webpack_require__(/*! ./upload-file.vue */ 1766));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var fileInput = null;
/**
 * FilePicker 文件选择上传
 * @description 文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间
 * @tutorial https://ext.dcloud.net.cn/plugin?id=4079
 * @property {Object|Array}	value	组件数据，通常用来回显 ,类型由return-type属性决定
 * @property {Boolean}	disabled = [true|false]	组件禁用
 * 	@value true 	禁用
 * 	@value false 	取消禁用
 * @property {Boolean}	readonly = [true|false]	组件只读，不可选择，不显示进度，不显示删除按钮
 * 	@value true 	只读
 * 	@value false 	取消只读
 * @property {String}	return-type = [array|object]	限制 value 格式，当为 object 时 ，组件只能单选，且会覆盖
 * 	@value array	规定 value 属性的类型为数组
 * 	@value object	规定 value 属性的类型为对象
 * @property {Boolean}	disable-preview = [true|false]	禁用图片预览，仅 mode:grid 时生效
 * 	@value true 	禁用图片预览
 * 	@value false 	取消禁用图片预览
 * @property {Boolean}	del-icon = [true|false]	是否显示删除按钮
 * 	@value true 	显示删除按钮
 * 	@value false 	不显示删除按钮
 * @property {Boolean}	auto-upload = [true|false]	是否自动上传，值为true则只触发@select,可自行上传
 * 	@value true 	自动上传
 * 	@value false 	取消自动上传
 * @property {Number|String}	limit	最大选择个数 ，h5 会自动忽略多选的部分
 * @property {String}	title	组件标题，右侧显示上传计数
 * @property {String}	mode = [list|grid]	选择文件后的文件列表样式
 * 	@value list 	列表显示
 * 	@value grid 	宫格显示
 * @property {String}	file-mediatype = [image|video|all]	选择文件类型
 * 	@value image	只选择图片
 * 	@value video	只选择视频
 * 	@value all		选择所有文件
 * @property {Array}	file-extname	选择文件后缀，根据 file-mediatype 属性而不同
 * @property {Object}	list-style	mode:list 时的样式
 * @property {Object}	image-styles	选择文件后缀，根据 file-mediatype 属性而不同
 * @event {Function} select 	选择文件后触发
 * @event {Function} progress 文件上传时触发
 * @event {Function} success 	上传成功触发
 * @event {Function} fail 		上传失败触发
 * @event {Function} delete 	文件从列表移除时触发
 */
var _default2 = {
  name: 'uniFilePicker',
  components: {
    uploadImage: uploadImage,
    uploadFile: uploadFile
  },
  emits: ['select', 'success', 'fail', 'progress', 'delete', 'update:modelValue', 'input'],
  props: {
    value: {
      type: [Array, Object],
      default: function _default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disablePreview: {
      type: Boolean,
      default: false
    },
    delIcon: {
      type: Boolean,
      default: true
    },
    // 自动上传
    autoUpload: {
      type: Boolean,
      default: true
    },
    // 最大选择个数 ，h5只能限制单选或是多选
    limit: {
      type: [Number, String],
      default: 9
    },
    // 列表样式 grid | list | list-card
    mode: {
      type: String,
      default: 'grid'
    },
    // 选择文件类型  image/video/all
    fileMediatype: {
      type: String,
      default: 'image'
    },
    // 文件类型筛选
    fileExtname: {
      type: [Array, String],
      default: function _default() {
        return [];
      }
    },
    title: {
      type: String,
      default: ''
    },
    listStyles: {
      type: Object,
      default: function _default() {
        return {
          // 是否显示边框
          border: true,
          // 是否显示分隔线
          dividline: true,
          // 线条样式
          borderStyle: {}
        };
      }
    },
    imageStyles: {
      type: Object,
      default: function _default() {
        return {
          width: 'auto',
          height: 'auto'
        };
      }
    },
    readonly: {
      type: Boolean,
      default: false
    },
    returnType: {
      type: String,
      default: 'array'
    },
    sizeType: {
      type: Array,
      default: function _default() {
        return ['original', 'compressed'];
      }
    }
  },
  data: function data() {
    return {
      files: [],
      localValue: []
    };
  },
  watch: {
    value: {
      handler: function handler(newVal, oldVal) {
        this.setValue(newVal, oldVal);
      },
      immediate: true
    }
  },
  computed: {
    filesList: function filesList() {
      var files = [];
      this.files.forEach(function (v) {
        files.push(v);
      });
      return files;
    },
    showType: function showType() {
      if (this.fileMediatype === 'image') {
        return this.mode;
      }
      return 'list';
    },
    limitLength: function limitLength() {
      if (this.returnType === 'object') {
        return 1;
      }
      if (!this.limit) {
        return 1;
      }
      if (this.limit >= 9) {
        return 9;
      }
      return this.limit;
    }
  },
  created: function created() {
    // TODO 兼容不开通服务空间的情况
    if (!(uniCloud.config && uniCloud.config.provider)) {
      this.noSpace = true;
      uniCloud.chooseAndUploadFile = _chooseAndUploadFile.chooseAndUploadFile;
    }
    this.tempData = {};
    this.form = this.getForm('uniForms');
    this.formItem = this.getForm('uniFormsItem');
    if (this.form && this.formItem) {
      if (this.formItem.name) {
        this.rename = this.formItem.name;
        this.form.inputChildrens.push(this);
      }
    }
  },
  methods: {
    setValue: function setValue(newVal, oldVal) {
      var _this = this;
      var newData = function newData(v) {
        var files = _this.files.find(function (i) {
          return i.url === v.url;
        });
        var reg = /cloud:\/\/([\w.]+\/?)\S*/;
        v.path = v.url;
        if (reg.test(v.url)) {
          _this.getTempFileURL(v, v.url);
        }
        return v;
      };
      // let data = null
      if (this.returnType === 'object') {
        newData(newData);
      } else {
        newVal.forEach(function (v) {
          newData(v);
        });
      }
      this.localValue = newVal;
      this.formItem && this.formItem.setValue(this.localValue);
      this.files = [].concat(newVal || []);
    },
    /**
     * 继续上传
     */
    upload: function upload() {
      var files = [];
      this.files.forEach(function (v, index) {
        if (v.status === 'ready' || v.status === 'error') {
          files.push(Object.assign({}, v));
        }
      });
      this.uploadFiles(files);
    },
    /**
     * 选择文件
     */
    choose: function choose() {
      if (this.disabled) return;
      if (this.files.length >= Number(this.limitLength) && this.showType !== 'grid' && this.returnType === 'array') {
        uni.showToast({
          title: "\u60A8\u6700\u591A\u9009\u62E9 ".concat(this.limitLength, " \u4E2A\u6587\u4EF6"),
          icon: 'none'
        });
        return;
      }
      this.chooseFiles();
    },
    /**
     * 选择文件并上传
     */
    chooseFiles: function chooseFiles() {
      var _this2 = this;
      var _extname = (0, _utils.get_extname)(this.fileExtname);
      // 获取后缀
      uniCloud.chooseAndUploadFile({
        type: this.fileMediatype,
        compressed: false,
        sizeType: this.sizeType,
        // TODO 如果为空，video 有问题
        extension: _extname.length > 0 ? _extname : undefined,
        count: this.limitLength - this.files.length,
        //默认9
        onChooseFile: this.chooseFileCallback,
        onUploadProgress: function onUploadProgress(progressEvent) {
          _this2.setProgress(progressEvent, progressEvent.index);
        }
      }).then(function (result) {
        _this2.setSuccessAndError(result.tempFiles);
      }).catch(function (err) {
        console.log('选择失败', err);
      });
    },
    /**
     * 选择文件回调
     * @param {Object} res
     */
    chooseFileCallback: function chooseFileCallback(res) {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _extname, is_one, _get_files_and_is_max, filePaths, files, currentData, i, filedata;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _extname = (0, _utils.get_extname)(_this3.fileExtname);
                is_one = Number(_this3.limitLength) === 1 && _this3.disablePreview && !_this3.disabled || _this3.returnType === 'object'; // 如果这有一个文件 ，需要清空本地缓存数据
                if (is_one) {
                  _this3.files = [];
                }
                _get_files_and_is_max = (0, _utils.get_files_and_is_max)(res, _extname), filePaths = _get_files_and_is_max.filePaths, files = _get_files_and_is_max.files;
                if (!(_extname && _extname.length > 0)) {
                  filePaths = res.tempFilePaths;
                  files = res.tempFiles;
                }
                currentData = [];
                i = 0;
              case 7:
                if (!(i < files.length)) {
                  _context.next = 21;
                  break;
                }
                if (!(_this3.limitLength - _this3.files.length <= 0)) {
                  _context.next = 10;
                  break;
                }
                return _context.abrupt("break", 21);
              case 10:
                files[i].uuid = Date.now();
                _context.next = 13;
                return (0, _utils.get_file_data)(files[i], _this3.fileMediatype);
              case 13:
                filedata = _context.sent;
                filedata.progress = 100;
                filedata.status = 'ready';
                _this3.files.push(filedata);
                currentData.push(_objectSpread(_objectSpread({}, filedata), {}, {
                  file: files[i]
                }));
              case 18:
                i++;
                _context.next = 7;
                break;
              case 21:
                _this3.$emit('select', {
                  tempFiles: currentData,
                  tempFilePaths: filePaths
                });
                res.tempFiles = files;
                // 停止自动上传
                if (!_this3.autoUpload || _this3.noSpace) {
                  res.tempFiles = [];
                }
              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    /**
     * 批传
     * @param {Object} e
     */
    uploadFiles: function uploadFiles(files) {
      var _this4 = this;
      files = [].concat(files);
      _chooseAndUploadFile.uploadCloudFiles.call(this, files, 5, function (res) {
        _this4.setProgress(res, res.index, true);
      }).then(function (result) {
        _this4.setSuccessAndError(result);
      }).catch(function (err) {
        console.log('err', err);
      });
    },
    /**
     * 成功或失败
     */
    setSuccessAndError: function setSuccessAndError(res, fn) {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var successData, errorData, tempFilePath, errorTempFilePath, _loop, i, _ret;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                successData = [];
                errorData = [];
                tempFilePath = [];
                errorTempFilePath = [];
                _loop = function _loop(i) {
                  // const index  = item.index
                  var item = res[i];
                  var index = item.uuid ? _this5.files.findIndex(function (p) {
                    return p.uuid === item.uuid;
                  }) : item.index;
                  if (index === -1 || !_this5.files) return "break";
                  if (item.errMsg === 'request:fail') {
                    _this5.files[index].url = item.path;
                    _this5.files[index].status = 'error';
                    _this5.files[index].errMsg = item.errMsg;
                    // this.files[index].progress = -1
                    errorData.push(_this5.files[index]);
                    errorTempFilePath.push(_this5.files[index].url);
                  } else {
                    _this5.files[index].errMsg = '';
                    _this5.files[index].url = item.url;
                    _this5.files[index].status = 'success';
                    _this5.files[index].progress += 1;
                    successData.push(_this5.files[index]);
                    tempFilePath.push(_this5.files[index].url);
                  }
                };
                i = 0;
              case 6:
                if (!(i < res.length)) {
                  _context2.next = 13;
                  break;
                }
                _ret = _loop(i);
                if (!(_ret === "break")) {
                  _context2.next = 10;
                  break;
                }
                return _context2.abrupt("break", 13);
              case 10:
                i++;
                _context2.next = 6;
                break;
              case 13:
                if (successData.length > 0) {
                  _this5.setEmit();
                  // 状态改变返回
                  _this5.$emit('success', {
                    tempFiles: _this5.backObject(successData),
                    tempFilePaths: tempFilePath
                  });
                }
                if (errorData.length > 0) {
                  _this5.$emit('fail', {
                    tempFiles: _this5.backObject(errorData),
                    tempFilePaths: errorTempFilePath
                  });
                }
              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    /**
     * 获取进度
     * @param {Object} progressEvent
     * @param {Object} index
     * @param {Object} type
     */
    setProgress: function setProgress(progressEvent, index, type) {
      var fileLenth = this.files.length;
      var percentNum = index / fileLenth * 100;
      var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
      var idx = index;
      if (!type) {
        idx = this.files.findIndex(function (p) {
          return p.uuid === progressEvent.tempFile.uuid;
        });
      }
      if (idx === -1 || !this.files[idx]) return;
      // fix by mehaotian 100 就会消失，-1 是为了让进度条消失
      this.files[idx].progress = percentCompleted - 1;
      // 上传中
      this.$emit('progress', {
        index: idx,
        progress: parseInt(percentCompleted),
        tempFile: this.files[idx]
      });
    },
    /**
     * 删除文件
     * @param {Object} index
     */
    delFile: function delFile(index) {
      var _this6 = this;
      this.$emit('delete', {
        tempFile: this.files[index],
        tempFilePath: this.files[index].url
      });
      this.files.splice(index, 1);
      this.$nextTick(function () {
        _this6.setEmit();
      });
    },
    /**
     * 获取文件名和后缀
     * @param {Object} name
     */
    getFileExt: function getFileExt(name) {
      var last_len = name.lastIndexOf('.');
      var len = name.length;
      return {
        name: name.substring(0, last_len),
        ext: name.substring(last_len + 1, len)
      };
    },
    /**
     * 处理返回事件
     */
    setEmit: function setEmit() {
      var data = [];
      if (this.returnType === 'object') {
        data = this.backObject(this.files)[0];
        this.localValue = {};
        Object.assign(this.localValue, data);
      } else {
        data = this.backObject(this.files);
        if (!this.localValue) {
          this.localValue = [];
        }
        this.localValue = (0, _toConsumableArray2.default)(data);
      }
      this.$emit('input', this.localValue);
    },
    /**
     * 处理返回参数
     * @param {Object} files
     */
    backObject: function backObject(files) {
      var newFilesData = [];
      files.forEach(function (v) {
        newFilesData.push({
          extname: v.extname,
          fileType: v.fileType,
          image: v.image,
          name: v.name,
          path: v.path,
          size: v.size,
          url: v.url
        });
      });
      return newFilesData;
    },
    getTempFileURL: function getTempFileURL(file, fileList) {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var urls, index;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                fileList = {
                  fileList: [].concat(fileList)
                };
                _context3.next = 3;
                return uniCloud.getTempFileURL(fileList);
              case 3:
                urls = _context3.sent;
                file.url = urls.fileList[0].tempFileURL || '';
                file.path = file.url;
                index = _this7.files.findIndex(function (v) {
                  return v.path === file.path;
                });
                if (index !== -1) {
                  _this7.$set(_this7.files, index, file);
                }
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    /**
     * 获取父元素实例
     */
    getForm: function getForm() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'uniForms';
      var parent = this.$parent;
      var parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent) return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 1324)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 1664:
/*!******************************************************************************************************************************************!*\
  !*** D:/WorkSpace/o/uniapp-demo/components/uni-file-picker/uni-file-picker.vue?vue&type=style&index=0&id=072e1f6c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_style_index_0_id_072e1f6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Program/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-file-picker.vue?vue&type=style&index=0&id=072e1f6c&scoped=true&lang=css& */ 1665);
/* harmony import */ var _Program_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_style_index_0_id_072e1f6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_style_index_0_id_072e1f6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_style_index_0_id_072e1f6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_style_index_0_id_072e1f6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_style_index_0_id_072e1f6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1665:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WorkSpace/o/uniapp-demo/components/uni-file-picker/uni-file-picker.vue?vue&type=style&index=0&id=072e1f6c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/uni-file-picker/uni-file-picker.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-file-picker/uni-file-picker-create-component',
    {
        'components/uni-file-picker/uni-file-picker-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1657))
        })
    },
    [['components/uni-file-picker/uni-file-picker-create-component']]
]);
