/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  /* --main-bk-color: hsl(147, 31%, 43%); */\\r\\n  --blue: rgb(97, 175, 239);\\r\\n  --edit-icon-color: var(--main-text-color);\\r\\n  --edit-icon-color-eraser: rgb(200, 100, 100);\\r\\n  --green: rgb(152, 195, 121);\\r\\n  --main-bk-color: rgb(40, 44, 52);\\r\\n  --main-bk-color2: rgb(50, 54, 62);\\r\\n  --main-text-color: rgb(171, 178, 191);\\r\\n  --red: rgb(224, 108, 117);\\r\\n  --delete-icon-color: var(--main-text-color);\\r\\n  --delete-icon-color2: var(--main-bk-color);\\r\\n}\\r\\n\\r\\n* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  color: var(--main-text-color);\\r\\n  background-color: var(--main-bk-color);\\r\\n  /* font-family: 'Concert One', cursive; */\\r\\n  /* font-family: 'Noto Sans TC', sans-serif;  --400 and 700-- */\\r\\n  font-family: \\\"Noto Sans TC\\\", sans-serif;\\r\\n  position: relative;\\r\\n\\r\\n  min-width: 320px;\\r\\n}\\r\\n\\r\\nform input {\\r\\n  font-family: \\\"Noto Sans TC\\\", sans-serif;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  /* margin: 0 30px; */\\r\\n  font-family: \\\"Concert One\\\", cursive;\\r\\n  display: flex;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n\\r\\n  background-color: var(--main-bk-color2);\\r\\n  color: var(--green);\\r\\n  box-shadow: 0 0px 2px rgb(10, 10, 10);\\r\\n  text-shadow: 0 0 3px black;\\r\\n\\r\\n  height: 46px;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\nhr {\\r\\n  border: 1px solid var(--main-text-color);\\r\\n}\\r\\n\\r\\nmain {\\r\\n  position: relative;\\r\\n  padding: 0 3px;\\r\\n  z-index: 0;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  width: 180px;\\r\\n\\r\\n  padding: 3px;\\r\\n  /* padding-right: 1em; */\\r\\n  position: absolute;\\r\\n  z-index: 1;\\r\\n  top: 47px;\\r\\n\\r\\n  background-color: var(--main-text-color);\\r\\n  color: var(--main-bk-color);\\r\\n\\r\\n  /* transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1); */\\r\\n  transition: all 0.3s ease;\\r\\n}\\r\\n\\r\\nnav > div,\\r\\nnav > div > div {\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\nnav hr {\\r\\n  border: 1px solid var(--main-bk-color2);\\r\\n}\\r\\n\\r\\n#add-project-form {\\r\\n  /* padding: 3px; */\\r\\n  /* background-color: blue; */\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n#add-project-form input {\\r\\n  background-color: var(--main-bk-color);\\r\\n  border-top: none;\\r\\n  border-left: none;\\r\\n  border-right: none;\\r\\n  border-bottom: 1px solid var(--main-text-color);\\r\\n  border-radius: 5px;\\r\\n  padding: 3px 5px;\\r\\n  margin: 3px;\\r\\n\\r\\n  width: 100%;\\r\\n  color: var(--blue);\\r\\n}\\r\\n\\r\\n#add-project,\\r\\n.task-set {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#add-project:hover,\\r\\n.task-set:hover {\\r\\n  color: var(--green);\\r\\n  background-color: var(--main-bk-color2);\\r\\n}\\r\\n\\r\\n#form-cancel-btn {\\r\\n  position: absolute;\\r\\n  top: -0px;\\r\\n\\r\\n  right: 0px;\\r\\n  padding-right: 10px;\\r\\n  padding-left: 5px;\\r\\n\\r\\n  text-shadow: 0 0 2px black;\\r\\n\\r\\n  cursor: pointer;\\r\\n  font-size: x-large;\\r\\n\\r\\n  background-color: var(--main-bk-color2);\\r\\n  border: none;\\r\\n  color: var(--main-text-color);\\r\\n}\\r\\n\\r\\n#form-row-urgent,\\r\\n#form-row-important {\\r\\n  /* make sure this appears below .form-row in css */\\r\\n  flex-direction: row;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#form-row-urgent input,\\r\\n#form-row-important input {\\r\\n  position: relative;\\r\\n  top: 1px;\\r\\n}\\r\\n\\r\\n#form-row-urgent input {\\r\\n  margin-left: 35px;\\r\\n}\\r\\n\\r\\n#form-row-important input {\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n#form-row-submit {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: center;\\r\\n  padding: 3px 8px;\\r\\n  margin: 15px 0 10px 0;\\r\\n}\\r\\n\\r\\n#hamburger {\\r\\n  position: relative;\\r\\n\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  padding: 0 10px;\\r\\n\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#icon {\\r\\n  justify-content: center;\\r\\n  align-self: center;\\r\\n  font-family: \\\"Concert One\\\", cursive;\\r\\n  font-size: x-large;\\r\\n  background-color: var(--main-text-color);\\r\\n  color: var(--green);\\r\\n  /* text-shadow: -5px -5px 8px black, -5px 5px 8px black, 5px -5px 8px black,\\r\\n  5px 5px 6px black; */\\r\\n  text-shadow: 0 0 5px black, 0 0 5px black;\\r\\n  /* padding: 0 50px; */\\r\\n  width: 30px;\\r\\n  display: flex;\\r\\n  border-radius: 50%;\\r\\n  margin-left: 10px;\\r\\n  margin-right: 20px;\\r\\n  height: 1.2em;\\r\\n\\r\\n  /* This turns off the icon -- Not sure if I want in on mobile layout - it takes up too much room */\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#main-header-container {\\r\\n  display: flex;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n#manage-task {\\r\\n  box-shadow: 0 0 10px black;\\r\\n  padding: 5px;\\r\\n\\r\\n  position: absolute;\\r\\n  top: 4em;\\r\\n  left: 0;\\r\\n  width: 300px;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  right: 0;\\r\\n\\r\\n  background-color: var(--main-bk-color2);\\r\\n  color: var(--main-text-color);\\r\\n}\\r\\n\\r\\n#manage-task input {\\r\\n  background-color: var(--main-bk-color);\\r\\n  /* color: var(--main-text-color); */\\r\\n  color: var(--blue);\\r\\n  border-top: none;\\r\\n  border-left: none;\\r\\n  border-right: none;\\r\\n  border-bottom: 1px solid var(--main-text-color);\\r\\n  border-radius: 5px;\\r\\n  padding: 3px 5px;\\r\\n}\\r\\n\\r\\n#manage-task input[type=\\\"submit\\\"] {\\r\\n  /* color: var(--main-bk-color); */\\r\\n  color: black;\\r\\n\\r\\n  background-color: var(--green);\\r\\n  /* background: linear-gradient(0deg, var(--green), var(--blue), var(--green)); */\\r\\n  width: 60px;\\r\\n  border: none;\\r\\n  box-shadow: 0 0 8px black;\\r\\n}\\r\\n\\r\\n#manage-task input[type=\\\"submit\\\"]:active {\\r\\n  box-shadow: none;\\r\\n}\\r\\n\\r\\n#manage-task label {\\r\\n  padding-left: 3px;\\r\\n}\\r\\n\\r\\n#project-title-container {\\r\\n  display: flex;\\r\\n  align-items: flex-end;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n#project-title-container p {\\r\\n  margin-right: 60px;\\r\\n}\\r\\n\\r\\n#projects {\\r\\n  font-weight: bold;\\r\\n  padding-left: 3px;\\r\\n}\\r\\n\\r\\n#projects div {\\r\\n  font-weight: normal;\\r\\n}\\r\\n\\r\\n.add-task {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: stretch;\\r\\n  align-items: center;\\r\\n\\r\\n  /* This margin is meant for the header - might need to separate the two later */\\r\\n  padding: 0 10px;\\r\\n\\r\\n  cursor: pointer;\\r\\n  text-shadow: 0 0 3px black;\\r\\n  color: var(--blue);\\r\\n}\\r\\n\\r\\n.add-task-icon {\\r\\n  margin-right: 10px;\\r\\n  font-size: xx-large;\\r\\n}\\r\\n\\r\\n.delete-icon {\\r\\n  display: flex;\\r\\n  padding: 5px 2px 5px 3px;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.delete1 {\\r\\n  width: 18px;\\r\\n  height: 2px;\\r\\n  background-color: var(--delete-icon-color);\\r\\n  display: inline-block;\\r\\n  position: relative;\\r\\n  top: -2px;\\r\\n}\\r\\n\\r\\n.delete1::before {\\r\\n  content: \\\"\\\";\\r\\n  display: block;\\r\\n  position: relative;\\r\\n  top: -3px;\\r\\n  left: 7px;\\r\\n  width: 4px;\\r\\n  height: 2px;\\r\\n\\r\\n  background-color: var(--delete-icon-color);\\r\\n}\\r\\n\\r\\n.delete1::after {\\r\\n  content: \\\"\\\";\\r\\n  display: block;\\r\\n  position: relative;\\r\\n  left: 1px;\\r\\n  top: 1px;\\r\\n\\r\\n  width: 16px;\\r\\n  height: 14px;\\r\\n\\r\\n  border-bottom-left-radius: 2px;\\r\\n  border-bottom-right-radius: 2px;\\r\\n\\r\\n  background-color: var(--delete-icon-color);\\r\\n}\\r\\n\\r\\n.delete2 {\\r\\n  width: 1px;\\r\\n  height: 10px;\\r\\n\\r\\n  display: inline-block;\\r\\n  position: relative;\\r\\n\\r\\n  left: -9px;\\r\\n  top: 3px;\\r\\n\\r\\n  background-color: var(--delete-icon-color2);\\r\\n}\\r\\n\\r\\n.delete2::before {\\r\\n  content: \\\"\\\";\\r\\n  display: block;\\r\\n  background-color: var(--delete-icon-color2);\\r\\n  position: relative;\\r\\n  top: 0px;\\r\\n  left: -4px;\\r\\n\\r\\n  width: 1px;\\r\\n  height: 10px;\\r\\n}\\r\\n\\r\\n.delete2::after {\\r\\n  content: \\\"\\\";\\r\\n  display: block;\\r\\n  position: relative;\\r\\n  left: 4px;\\r\\n  top: -100%;\\r\\n\\r\\n  width: 1px;\\r\\n  height: 10px;\\r\\n  background-color: var(--delete-icon-color2);\\r\\n}\\r\\n\\r\\n.edit-icon {\\r\\n  display: flex;\\r\\n  padding: 6px 4px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.edit-inner {\\r\\n  top: 1px;\\r\\n  width: 8px;\\r\\n  height: 6px;\\r\\n  background-color: var(--edit-icon-color);\\r\\n  display: inline-block;\\r\\n  position: relative;\\r\\n\\r\\n  transform: rotate(-60deg);\\r\\n}\\r\\n\\r\\n.edit-inner::before {\\r\\n  content: \\\"\\\";\\r\\n  display: block;\\r\\n  position: relative;\\r\\n  left: -5px;\\r\\n\\r\\n  width: 0;\\r\\n  height: 0;\\r\\n\\r\\n  /*   this makes a triangle */\\r\\n  border-top: 3px solid transparent;\\r\\n  border-bottom: 3px solid transparent;\\r\\n  border-right: 4px solid var(--edit-icon-color);\\r\\n}\\r\\n\\r\\n.edit-inner::after {\\r\\n  content: \\\"\\\";\\r\\n  display: block;\\r\\n  position: relative;\\r\\n  left: 9px;\\r\\n  top: -100%;\\r\\n\\r\\n  width: 4px;\\r\\n  height: 6px;\\r\\n  background-color: var(--edit-icon-color-eraser);\\r\\n}\\r\\n\\r\\n.form-row {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.form-row h2 {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  color: var(--green);\\r\\n}\\r\\n\\r\\n.hamburger-line {\\r\\n  position: relative;\\r\\n  width: 20px;\\r\\n  height: 4px;\\r\\n  background-color: var(--main-text-color);\\r\\n  margin: 2px 0;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.hidden-no-empty-space {\\r\\n  display: none;\\r\\n  transition: all 0.5s ease;\\r\\n  color: blue;\\r\\n}\\r\\n\\r\\n.nav-is-left {\\r\\n  transform: translate(-100%, 0);\\r\\n}\\r\\n\\r\\n.form-is-hidden {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.nav-item-padding {\\r\\n  padding: 2px 10px;\\r\\n}\\r\\n\\r\\n.task-first-row-main {\\r\\n  /* display: flex; */\\r\\n  /* justify-content: space-between; */\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr auto;\\r\\n}\\r\\n\\r\\n.task-description-main {\\r\\n  /* background-color: blue; */\\r\\n  margin: 0px 3px 0 30px;\\r\\n  padding: 0 3px;\\r\\n  line-height: 1.2em;\\r\\n}\\r\\n.task-title-main {\\r\\n  width: auto;\\r\\n}\\r\\n\\r\\n.task-first-section {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.task-first-section > *,\\r\\n.task-last-section > * {\\r\\n  margin: 3px;\\r\\n}\\r\\n\\r\\n.task-last-section {\\r\\n  /* display: grid; */\\r\\n  /* grid-template-columns: 10px 10px 10px 10px 70px 20px 20px; */\\r\\n  /* align-items: center; */\\r\\n  /* justify-items: center; */\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.task-last-section .priority {\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.task-last-section .day-of-week {\\r\\n  width: 20px;\\r\\n  display: flex;\\r\\n  /* justify-self: center; */\\r\\n  justify-content: center;\\r\\n  /* justify-items: center; */\\r\\n  /* align-self: center; */\\r\\n  /* align-items: center; */\\r\\n  /* align-content: center; */\\r\\n}\\r\\n\\r\\n/* @media only screen and (min-width: 320px) { */\\r\\n/* for desktop layout changes */\\r\\n/* body { */\\r\\n/* } */\\r\\n/* } */\\r\\n\\r\\n@media only screen and (min-width: 520px) {\\r\\n  #manage-task {\\r\\n    width: 500px;\\r\\n  }\\r\\n}\\r\\n@media only screen and (min-width: 700px) {\\r\\n  h1 {\\r\\n    margin-left: 10px;\\r\\n  }\\r\\n\\r\\n  nav {\\r\\n    position: relative;\\r\\n    top: 0;\\r\\n  }\\r\\n\\r\\n  #hamburger {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  #nav-main-container {\\r\\n    display: grid;\\r\\n    grid-template-columns: auto 1fr;\\r\\n  }\\r\\n\\r\\n  .nav-is-left {\\r\\n    transform: none;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\n\r\n\r\n// a module pattern called once, but we can call the inner stuff multiple times elsewhere\r\n// perhaps split this into a separate .js file\r\nlet dom = (function () {\r\n  let theElements = {\r\n    hamburger: document.getElementById(\"hamburger\"),\r\n    nav: document.getElementById(\"navigation\"),\r\n    form1: document.getElementById(\"manage-task\"),\r\n    firstFormRow: document.getElementById(\"first-form-row\"),\r\n    cancelBtn: document.getElementById(\"form-cancel-btn\"),\r\n    addProjBtn: document.getElementById(\"add-project\"),\r\n    addProjInput: document.getElementById(\"add-project-input\"),\r\n    form2: document.getElementById(\"add-project-form\"),\r\n    tasks: document.querySelectorAll(\".task-first-section\"),\r\n  };\r\n\r\n  function createSections() {\r\n    // This setup goes against the guideline of doing it in this order\r\n    // create1 create2 create3\r\n    // append3 under 2, append2 under 1, append1 under body\r\n    // but if this works, I believe the code clarity will be worth it.\r\n    createAndAdd(\"header\", document.body, \"header2\");\r\n    createAndAdd(\r\n      \"div\",\r\n      document.body,\r\n      \"navMainContainer\",\r\n      \"id\",\r\n      \"nav-main-container\",\r\n      \"class\",\r\n      \"class-dur\"\r\n    );\r\n    // theElements.navMainContainer.setAttribute(\"id\", \"nav-main-container\");\r\n\r\n    createAndAdd(\"div\", theElements.header2, \"lol1\");\r\n    createAndAdd(\"div\", theElements.header2, \"lol2\");\r\n\r\n    console.log(theElements.header2);\r\n  }\r\n  createSections();\r\n\r\n  function createAndAdd(\r\n    elementType,\r\n    appendUnder,\r\n    thisName2,\r\n    ...optAttributeArray\r\n  ) {\r\n    theElements[thisName2] = document.createElement(elementType);\r\n    appendUnder.appendChild(theElements[thisName2]);\r\n\r\n    // ...optAttributeArray should look like this:\r\n    // [optAttributeType, optAttributeValue,\r\n    // optAttributeType2, optAttributeValue2,]\r\n    if (!(optAttributeArray == undefined)) {\r\n      console.log(\"optAttributeArray exists. \");\r\n      if ((optAttributeArray.length + 1) % 2) {\r\n        console.log(\"optAttributeArray is even. good.\");\r\n\r\n        for (let i = 0; i < optAttributeArray.length; i += 2) {\r\n          console.log(\"durr\");\r\n          theElements[thisName2].setAttribute(\r\n            optAttributeArray[i],\r\n            optAttributeArray[i + 1]\r\n          );\r\n        }\r\n      } else {\r\n        console.log(\r\n          \"Error, optAttributeArray is odd, you want an even number of arguments here.\"\r\n        );\r\n      }\r\n    }\r\n\r\n    // if ((optAttributeArray.length + 1) % 2) && (!(optAttributeArray == undefined)){\r\n    //   //then array is even number, we always want even like 'id', 'blah', 'class', 'blah2'\r\n    //   console.log(\"optAttributeArray is even. good.\");\r\n    // }\r\n    // if (!(optAttributeType == undefined)) {\r\n    //   theElements[thisName2].setAttribute(optAttributeType, optAttributeValue);\r\n    // } else {\r\n    //   console.log(\"optAttributeType = undefined\");\r\n    // }\r\n  }\r\n\r\n  // const header2 = document.createElement(\"header\");\r\n  // document.body.appendChild(header2);\r\n\r\n  // const theElements.navMainContainer = document.createElement(\"div\");\r\n  // const theElements.nav = document.createElement('nav');\r\n  // theElements.navMainContainer.appendChild(theElements.nav);\r\n  // document.body.appendChild(navMainContainer);\r\n  function addNewTask(title, description, dueDate, priority) {\r\n    console.log(\"adding new dom task now\");\r\n  }\r\n\r\n  function setUpInitialDom() {\r\n    console.log(\"setting up initial dom now\");\r\n    // set up initial few tasks for testing\r\n    // then later get stuff from localHost that you saved from last time you loaded it\r\n    _addTaskBtnsEListeners();\r\n    _addCancelBtnEListeners();\r\n    _addToggleNaveEListener();\r\n    _addAddProjectBtnEListener();\r\n    _addHideAddProjectFormEListeners();\r\n    _addSubmitBtnEListener();\r\n    _addShowDescriptionEListener();\r\n  }\r\n\r\n  // Section for functions that add Event Listeners\r\n\r\n  function _addAddProjectBtnEListener() {\r\n    // Add-Project 'Button'\r\n    theElements.addProjBtn.addEventListener(\"click\", showAddProjectInput);\r\n  }\r\n\r\n  function _addCancelBtnEListeners() {\r\n    //Cancel button for manage-task form\r\n    theElements.cancelBtn.addEventListener(\"click\", _cancelTaskForm);\r\n  }\r\n\r\n  function _addHideAddProjectFormEListeners() {\r\n    theElements.form2.addEventListener(\"submit\", hideAddProjectForm);\r\n    theElements.addProjInput.addEventListener(\"focusout\", hideAddProjectForm);\r\n  }\r\n\r\n  function _addShowDescriptionEListener() {\r\n    // Show description when clicking on task\r\n    theElements.tasks.forEach((thisTask) => {\r\n      thisTask.addEventListener(\"click\", _showTaskDescription);\r\n    });\r\n  }\r\n\r\n  function _addTaskBtnsEListeners() {\r\n    // Add-Task Buttons\r\n    document.querySelectorAll(\".add-task\").forEach((addTaskBtn) => {\r\n      addTaskBtn.addEventListener(\"click\", _showTaskForm);\r\n    });\r\n  }\r\n  // const form = document.querySelector(\"form\");\r\n\r\n  function _addToggleNaveEListener() {\r\n    // Move menu in and out on mobile version\r\n    // const hamburger = document.getElementById(\"hamburger\");\r\n    theElements.hamburger.addEventListener(\"click\", toggleNav);\r\n  }\r\n\r\n  function _showTaskForm() {\r\n    console.log(\"add task btn clicked\");\r\n    theElements.form1.classList.remove(\"form-is-hidden\");\r\n    theElements.firstFormRow.focus();\r\n  }\r\n\r\n  function _showTaskDescription(e) {\r\n    const descriptionSection = e.target.parentElement.parentElement.parentElement.querySelector(\r\n      \".task-description-section\"\r\n    );\r\n\r\n    if (descriptionSection.classList.contains(\"hidden-no-empty-space\")) {\r\n      descriptionSection.classList.remove(\"hidden-no-empty-space\");\r\n    } else {\r\n      descriptionSection.classList.add(\"hidden-no-empty-space\");\r\n    }\r\n  }\r\n\r\n  function _cancelTaskForm() {\r\n    theElements.firstFormRow.removeAttribute(\"required\");\r\n    theElements.form1.classList.add(\"form-is-hidden\");\r\n  }\r\n\r\n  function _addSubmitBtnEListener() {\r\n    // submit button clicked\r\n    theElements.form1.addEventListener(\"submit\", hideTaskForm);\r\n  }\r\n\r\n  // Functions called from event listeners:\r\n\r\n  function showAddProjectInput() {\r\n    console.log(\"showAddProjectInput ran\");\r\n    theElements.form2.classList.remove(\"hidden\");\r\n    theElements.addProjInput.focus();\r\n  }\r\n\r\n  function hideAddProjectForm() {\r\n    theElements.form2.classList.add(\"hidden\");\r\n    console.log(\"done with form2\");\r\n  }\r\n\r\n  function hideTaskForm() {\r\n    theElements.form1.classList.add(\"form-is-hidden\");\r\n  }\r\n\r\n  function toggleNav() {\r\n    // const nav = document.getElementById(\"navigation\");\r\n    console.log(\"toggling nav\");\r\n\r\n    if (theElements.nav.classList.contains(\"nav-is-left\")) {\r\n      theElements.nav.classList.remove(\"nav-is-left\");\r\n    } else {\r\n      theElements.nav.classList.add(\"nav-is-left\");\r\n    }\r\n  }\r\n  // End of functions called from event listeners\r\n\r\n  return {\r\n    addNewTask: addNewTask,\r\n    setUpInitialDom: setUpInitialDom,\r\n    toggleNav: toggleNav,\r\n  };\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\r\n\r\n\r\n\r\n\r\n_dom_js__WEBPACK_IMPORTED_MODULE_1__.dom.addNewTask();\r\n_dom_js__WEBPACK_IMPORTED_MODULE_1__.dom.setUpInitialDom();\r\n//to do:\r\n// A factory function to create new tasks\r\n\r\n// An object to hold each task's - title, description, dueDate, priority\r\n//  project?\r\n// An object to hold all the projects (there is a default one too)\r\n\r\n// An object to keep all the DOM stuff together\r\n// A separate place to keep all the task manipulation stuff together.\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;