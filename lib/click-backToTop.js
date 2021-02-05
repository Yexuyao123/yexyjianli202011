"use strict";

var _view = require("./base/view.js");

var _controller = require("./base/controller.js");

// 声明时间曲线
!function () {
  // 鼠标点击回到顶部
  var view = (0, _view.View)("#backToTop");
  var controller = (0, _controller.Controller1)({
    bindEvents: function bindEvents() {
      var _this = this;

      this.view.addEventListener("click", function (e) {
        e.preventDefault();

        _this.gotoTop();
      });
    },
    gotoTop: function gotoTop() {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }

      requestAnimationFrame(animate);
      var coords = {
        y: window.scrollY
      };
      new TWEEN.Tween(coords).to({
        y: 0
      }, 1000).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
        window.scrollTo(0, coords.y);
      }).start();
    }
  });
  controller.init(view);
}.call();