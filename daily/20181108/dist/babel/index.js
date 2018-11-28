"use strict";

require("@babel/polyfill");

var _Executor = _interopRequireDefault(require("./Executor"));

var _Utils = require("./Utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var executor = new _Executor.default('aloerina', 'Thank you');
(0, _Utils.microTask)(function () {
  return executor.execute();
});