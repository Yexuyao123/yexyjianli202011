"use strict";

var _view = require("./base/view.js");

var _controller = require("./base/controller.js");

!function () {
  // 鼠标点击跳转 模拟动画
  var view = (0, _view.View)("li>.ba", true);
  var controller = (0, _controller.Controller1)({
    bindEvents: function bindEvents() {
      for (var i = 0; i < this.view.length; i++) {
        this.view[i].addEventListener("click", this.methods.gotoTarget);
      }
    },
    methods: {
      gotoTarget: function gotoTarget(e) {
        e.preventDefault();
        var href = e.currentTarget.getAttribute("href");
        var target = document.querySelector(href);
        if (!target) return;
        var elePosition = target.getBoundingClientRect();
        window.scrollTo(0, elePosition.top + window.scrollY - 100);
      }
    }
  });
  controller.init(view);
}.call();