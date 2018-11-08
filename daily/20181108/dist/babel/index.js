"use strict";

require("@babel/polyfill");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Executor =
/*#__PURE__*/
function () {
  function Executor(myName) {
    _classCallCheck(this, Executor);

    this._name = myName || '';

    for (var _len = arguments.length, messages = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      messages[_key - 1] = arguments[_key];
    }

    this._messages = ['Hello', 'Good morning', 'See you'].concat(messages);
  }

  _createClass(Executor, [{
    key: "execute",
    value: function execute() {
      var message = this.messages.find(function (each) {
        return each.includes('Hello');
      });
      console.log("".concat(message, ", ").concat(this.name, " !!"));
    }
  }, {
    key: "messages",
    get: function get() {
      return this._messages;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  return Executor;
}();

function microTask(f) {
  return Promise.resolve().then(f);
}

var executor = new Executor('aloerina', 'Thank you');
microTask(function () {
  return executor.execute();
});