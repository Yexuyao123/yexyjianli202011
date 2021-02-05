"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = void 0;

var View = function View(selection) {
  var getMultiple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return getMultiple ? document.querySelectorAll(selection) : document.querySelector(selection);
};

exports.View = View;