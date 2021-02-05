"use strict";

require("core-js/modules/es.array.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInputValue = getInputValue;
exports.getElement = getElement;
exports.addLabel = addLabel;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.changeClass = changeClass;
exports.getTagName = getTagName;
exports.show = show;
exports.hide = hide;
exports.eleMap = void 0;

// 获取标签通过id
function getElement(id) {
  return document.querySelector("#".concat(id));
} // 生成一个element


function addLabel(laber) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var element = document.createElement(laber);

  for (var key in attributes) {
    element[key] = attributes[key];
  }

  return element;
}

function addClass(ele, className) {
  ele.classList.add(className);
} // 添加类别


function removeClass(ele, className) {
  ele.classList.remove(className);
} // 移除类别


function changeClass(ele, classList) {
  ele.className = classList;
} // 更改类别


function getTagName(ele) {
  return ele.tagName;
} // 获取标签名如DIV/A/SPAN等，这个API返回的一定是大写，可使用.toLowerCase()转为小写，但是toLowerCase对于文本节点出来的undefined会报错


function show(el) {
  var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "block";
  // display默认block，之后的参数也必须带默认值
  el.style.display = display;
}

function hide(el) {
  el.style.display = "none";
}

function getInputValue(query) {
  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var el = typeof query === 'string' ? container.querySelector(query) : query;
  return el ? el.value : '';
}

var getEls = ["portfolio1", "portfolio2", "portfolio3", "portfolioBar", "picturejobs1", "picturejobs2", "picturejobs3", "zuopinji", "wrapper", "topNavBar", "body", "backToTop", "userCard", "skill", "zuopinzhanshi", "messages", "postMessageForm"];
var eleMap = {};
exports.eleMap = eleMap;
getEls.forEach(function (id) {
  eleMap[id] = getElement(id);
});