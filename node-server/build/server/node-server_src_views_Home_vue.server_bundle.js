/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "node-server_src_views_Home_vue";
exports.ids = ["node-server_src_views_Home_vue"];
exports.modules = {

/***/ "./node-server/src/store/index.js":
/*!****************************************!*\
  !*** ./node-server/src/store/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! pinia */ \"pinia\"),\n  defineStore = _require.defineStore;\nvar useHomeStore = defineStore('home', {\n  state: function state() {\n    return {\n      count: 0\n    };\n  },\n  actions: {\n    increment: function increment() {\n      this.count++;\n    },\n    decrement: function decrement() {\n      this.count--;\n    }\n  }\n});\nmodule.exports = {\n  useHomeStore: useHomeStore\n};\n\n//# sourceURL=webpack://ssr-render/./node-server/src/store/index.js?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./node-server/src/views/Home.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./node-server/src/views/Home.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ \"./node-server/src/store/index.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_store_index__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ \"pinia\");\n/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pinia__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  __name: 'Home',\n  setup: function setup(__props, _ref) {\n    var __expose = _ref.expose;\n    __expose();\n    var homeStore = (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.useHomeStore)();\n    var _storeToRefs = (0,pinia__WEBPACK_IMPORTED_MODULE_2__.storeToRefs)(homeStore),\n      count = _storeToRefs.count;\n    var addCounter = function addCounter() {\n      count.value += 1;\n    };\n    var __returned__ = {\n      homeStore: homeStore,\n      count: count,\n      addCounter: addCounter,\n      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,\n      get useHomeStore() {\n        return _store_index__WEBPACK_IMPORTED_MODULE_1__.useHomeStore;\n      },\n      get storeToRefs() {\n        return pinia__WEBPACK_IMPORTED_MODULE_2__.storeToRefs;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://ssr-render/./node-server/src/views/Home.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B5%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./node-server/src/views/Home.vue?vue&type=template&id=7cd8ec4c":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./node-server/src/views/Home.vue?vue&type=template&id=7cd8ec4c ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ssrRender: () => (/* binding */ ssrRender)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue/server-renderer */ \"vue/server-renderer\");\n/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {\n  _push(\"<div\".concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderAttrs)((0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({\n    \"class\": \"app\",\n    style: {\n      \"border\": \"1px solid yellow\"\n    }\n  }, _attrs)), \"><h2>Home page</h2><div>\").concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrInterpolate)($setup.count), \"</div><button>+1</button></div>\"));\n}\n\n//# sourceURL=webpack://ssr-render/./node-server/src/views/Home.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B5%5D.use%5B0%5D");

/***/ }),

/***/ "./node-server/src/views/Home.vue":
/*!****************************************!*\
  !*** ./node-server/src/views/Home.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Home_vue_vue_type_template_id_7cd8ec4c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=7cd8ec4c */ \"./node-server/src/views/Home.vue?vue&type=template&id=7cd8ec4c\");\n/* harmony import */ var _Home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&setup=true&lang=js */ \"./node-server/src/views/Home.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_Home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['ssrRender',_Home_vue_vue_type_template_id_7cd8ec4c__WEBPACK_IMPORTED_MODULE_0__.ssrRender],['__file',\"node-server/src/views/Home.vue\"]])\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ssr-render/./node-server/src/views/Home.vue?");

/***/ }),

/***/ "./node-server/src/views/Home.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************!*\
  !*** ./node-server/src/views/Home.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./Home.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./node-server/src/views/Home.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://ssr-render/./node-server/src/views/Home.vue?");

/***/ }),

/***/ "./node-server/src/views/Home.vue?vue&type=template&id=7cd8ec4c":
/*!**********************************************************************!*\
  !*** ./node-server/src/views/Home.vue?vue&type=template&id=7cd8ec4c ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ssrRender: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Home_vue_vue_type_template_id_7cd8ec4c__WEBPACK_IMPORTED_MODULE_0__.ssrRender)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Home_vue_vue_type_template_id_7cd8ec4c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./Home.vue?vue&type=template&id=7cd8ec4c */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./node-server/src/views/Home.vue?vue&type=template&id=7cd8ec4c\");\n\n\n//# sourceURL=webpack://ssr-render/./node-server/src/views/Home.vue?");

/***/ })

};
;