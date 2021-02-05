"use strict";

require("core-js/modules/web.timers.js");

var _util = require("./util.js");

var _view = require("./base/view.js");

var _controller = require("./base/controller.js");

// 作品博客下拉菜单
// eslint-disable-next-line no-unused-expressions
!function () {
  var view = (0, _view.View)(".menuTrigger", true); // trigger

  var controller = (0, _controller.Controller1)({
    bindEvents: function bindEvents() {
      for (var i = 0; i < this.view.length; i++) {
        this.view[i].addEventListener("mouseenter", this.active);
        this.view[i].addEventListener("mouseleave", this.deactive);
      }
    },
    active: function active(e) {
      var activeSon = this.getDom(e);
      (0, _util.removeClass)(activeSon.brother, "hide");
      (0, _util.addClass)(activeSon.brother, "show");
      (0, _util.removeClass)(activeSon.brother, "display-none");
      (0, _util.addClass)(activeSon.fly1, "display-none");
    },
    deactive: function deactive(e) {
      var activeSon = this.getDom(e);
      (0, _util.removeClass)(activeSon.brother, "show");
      (0, _util.addClass)(activeSon.brother, "hide");
      setTimeout(function () {
        (0, _util.addClass)(activeSon.brother, "display-none");
        (0, _util.removeClass)(activeSon.fly1, "display-none");
      }, 4000);
    },
    getDom: function getDom(e) {
      var li = e.currentTarget;
      var brother = li.getElementsByTagName("ul")[0];
      var fly1 = li.getElementsByClassName("fly1")[0];
      return {
        brother: brother,
        fly1: fly1
      };
    }
  }); // eslint-disable-next-line no-useless-call

  controller.init(view);
}.call();