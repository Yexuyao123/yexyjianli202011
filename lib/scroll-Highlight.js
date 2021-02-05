"use strict";

require("core-js/modules/web.timers.js");

var _util = require("./util.js");

var _view = require("./base/view.js");

var _controller = require("./base/controller.js");

// eslint-disable-next-line no-unused-expressions
!function () {
  // 滚动划入+对应高亮
  var view = (0, _view.View)(".ba", true);
  var controller = (0, _controller.Controller1)({
    status: {
      hightLight: null
    },
    init: function init(view) {
      this.hightLight = "";
    },
    bindEvents: function bindEvents() {
      var _this = this;

      window.addEventListener("scroll", function () {
        _this.highLightEvent();

        _this.slideUpEvent();

        _this.flyActive(_this.hightLight);
      });
    },
    slideUpActive: function slideUpActive(current) {
      (0, _util.addClass)(_util.eleMap[current], "slideUp");
      setTimeout((0, _util.removeClass)(_util.eleMap[current], "margin-top100"), 5000);
    },
    flyActive: function flyActive(current) {
      for (var i = 0; i < this.view.length; i++) {
        if (this.view[i].nextElementSibling) {
          (0, _util.removeClass)(this.view[i].nextElementSibling, "fly-active");
        }

        if (this.view[i].getAttribute("href") === current) {
          var hightLightEle = this.view[i].nextElementSibling;
          (0, _util.addClass)(hightLightEle, "fly-active");
        }
      }
    },
    highLightEvent: function highLightEvent() {
      if (window.scrollY > 100 && window.scrollY < 400) {
        this.hightLight = "#userCard";
      } else if (window.scrollY > 400 && window.scrollY < 1100) {
        this.hightLight = "#skill";
      } else if (window.scrollY > 1100 && window.scrollY < 1500) {
        this.hightLight = "#zuopinji";
      } else if (window.scrollY > 1500) {
        this.hightLight = "#zuopinzhanshi";
      }
    },
    slideUpEvent: function slideUpEvent() {
      if (window.scrollY > 400 && window.scrollY < 1100) {
        this.slideUpActive("skill");
      } else if (window.scrollY > 1100 && window.scrollY < 1500) {
        this.slideUpActive("zuopinji");
      } else if (window.scrollY > 1500 && window.scrollY < 2350) {
        this.slideUpActive("zuopinzhanshi");
      } else if (window.scrollY > 2350) {
        this.slideUpActive("messages");
      }
    }
  }); // eslint-disable-next-line no-useless-call

  controller.init.call(controller, view);
}.call();