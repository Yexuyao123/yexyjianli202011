"use strict";

var _view = require("./base/view.js");

var _controller = require("./base/controller.js");

// eslint-disable-next-line no-unused-expressions
!function () {
  // 作品展示轮播Swiper
  var view = (0, _view.View)("#mySwiper");
  var controller = (0, _controller.Controller1)({
    init: function init(view) {
      this.swiperInit();
    },
    swiperInit: function swiperInit() {
      // eslint-disable-next-line no-new
      new Swiper(this.view.querySelector(".swiper-container"), {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  }); // eslint-disable-next-line no-useless-call

  controller.init(view);
}.call();