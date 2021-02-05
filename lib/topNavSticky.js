"use strict";

require("core-js/modules/web.timers.js");

var _util = require("./util.js");

var _view = require("./base/view.js");

var _controller = require("./base/controller.js");

// eslint-disable-next-line no-unused-expressions
!function () {
  // 监听滚轮时间，节流
  var view = (0, _view.View)("#topNavBar");
  var controller = (0, _controller.Controller1)({
    status: {
      scrollState: false,
      timer: null
    },
    init: function init(view) {
      this.status.scrollState = false;
    },
    bindEvents: function bindEvents() {
      var _this = this;

      window.addEventListener("scroll", function () {
        // 防抖
        if (_this.timer) {
          clearTimeout(_this.timer);
        }

        _this.timer = setTimeout(function () {
          _this.active();
        }, 100); // this.timer && clearTimeout(this.timer)
        // this.timer = setTimeout(this.active, 100)
      });
    },
    deactive: function deactive() {
      (0, _util.removeClass)(this.view, "sticky");
      this.scrollState = false;
    },
    active: function active() {
      var _this2 = this;

      // 节流
      if (this.scrollState) return;
      this.scrollState = true;
      (0, _util.addClass)(this.view, "sticky");
      setTimeout(function () {
        _this2.deactive();
      }, 3000);
    }
  }); // eslint-disable-next-line no-useless-call

  controller.init(view);
}.call();