# 2018/11/28

@babel/polyfillと`useBuiltIns`オプションの挙動を検証する。

### 準備
3つのbabel.config.jsを用意。

* `babel.config.plain.js` ... useBuiltIns = false
* `babel.config.entry.js` ... useBuiltIns = entry
* `babel.config.usage.js` ... useBuiltIns = usage

### 結果 babelのみ実行

1ファイルをbabeっただけだとplainとentryは同じ結果を吐き出した。usageはたしかに利用するpolyfillだけをimportしてた。

usageでちょっとおもしろい結果が出た。
```js
const abstract = [new Array(), new Object()];
console.log(abstract[1].findIndex);
```
この場合はarrayのfindIndexがimportされたけど、

```js
const a = {
  findIndex: () => {}
}
console.log(a.findIndex);
```
この場合はimportされなかった。

どっちもArray.prototype.findIndexを実行してないけど、実行される可能性のある上はちゃんとfindIndexが入ってた。ちなみにArray関連のpolyfillが全部入ったわけではなくて、ちゃんとfindIndexを狙い撃ちしてた。

### 結果 webpack/babel-loaderで実行

usageにすると、必要なpolyfillとそのpolyfillが内部的にrequireしているものを`__webpack_require__`に展開する。entryにするとpolyfillを(利用しているかどうかにかかわらず)全部展開する。

usage.js = 579 bytes
entry.js = 6.94KiB (≒7106bytes)

上記2つは程度の差はあれ、どちらもcore-jsをひとつひとつソース内でrequireするように加工し、その上でwebpackで依存関係を解決したものって感じ。対してplainは、polyfillを/node_modules/webpack/buildin/global.jsという外部ファイルに束ねて、それをソースに一度だけrequireしたという構図。なのでwebpackをかけるとそれぞれのファイルごとでの容量が表示される。

```
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {index} [built]
[./src/index.js] 489 bytes {index} [built]
```
こんな感じ。

bundleされたものはこんな感じ。

```
/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/extra.js":
/*!**********************!*\
  !*** ./src/extra.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import '@babel/polyfill';\nvar func = function func() {\n  console.log('\\n------verify 4-------');\n  console.log(new WeakMap());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (func);\n\n//# sourceURL=webpack:///./src/extra.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extra */ \"./src/extra.js\");\n\n\nconsole.log('\\n------verify 1-------');\nconsole.log(Promise.finally);\n\"\"; // // console.log('\\n------verify 2-------');\n// // const array = ['aaa', 'bbb', 'ccc'];\n// // console.log(array.find(each => each.includes('a')));\n// console.log('\\n------verify 3-------');\n// const abstract = [null, { findIndex: () => 'dummy func' }, [], 1];\n// console.log(abstract[0]);\n// console.log(abstract[1].findIndex);\n\nObject(_extra__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconsole.log('hige?');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
```

