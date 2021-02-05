"use strict";

require("core-js/modules/web.timers.js");

var _util = require("./util.js");

var _view = require("./base/view.js");

var _controller = require("./base/controller.js");

// eslint-disable-next-line no-unused-expressions
!function () {
  var view = (0, _view.View)("#wrapper");
  var controller = (0, _controller.Controller1)({
    init: function init(view) {
      this.active();
      this.time();
    },
    bindEvents: function bindEvents() {
      // 用户关闭页面之前和刷新页面时触发
      window.onbeforeunload = function () {
        document.documentElement.scrollTop = 0; // ie下

        document.html.scrollTop = 0; // 非ie
      };
    },
    active: function active() {
      this.view.appendChild((0, _util.addLabel)("div", {
        className: "circular-1 animation-1"
      }));
      this.view.appendChild((0, _util.addLabel)("div", {
        className: "circular-1 animation-2"
      }));
    },
    time: function time() {
      var view = this.view;
      setTimeout(function () {
        (0, _util.addClass)(view, "display-none");
        (0, _util.removeClass)(_util.eleMap.body, "hidden");
      }, 3000);
    }
  }); // eslint-disable-next-line no-useless-call

  controller.init.call(controller, view);
}.call();