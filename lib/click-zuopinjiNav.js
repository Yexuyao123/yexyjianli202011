"use strict";

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.for-each.js");

var _util = require("./util.js");

var _view = require("./base/view.js");

var _controller = require("./base/controller.js");

// eslint-disable-next-line no-unused-expressions
!function () {
  var view = (0, _view.View)("#zuopinji");
  var controller = (0, _controller.Controller1)({
    component: {
      bar: null,
      tabs: null,
      jobs: null
    },
    init: function init(view) {
      this.component.bar = view.querySelector("#portfolioBar");
      this.component.tabs = view.querySelector("nav>ol");
      this.component.jobs = view.querySelector(".jobs");
    },
    bindEvents: function bindEvents() {
      /* Array.from 将类数组转化为数组 */
      var tabsChildren = Array.from(this.component.tabs.children);
      var jobsChildren = Array.from(this.component.jobs.children);

      if (tabsChildren.length !== jobsChildren.length) {
        throw Error("长度不一致");
      }

      var that = this;

      function addTabEvent(tab, index) {
        // console.log(that) // 指向外部this
        tab.addEventListener("click", function () {
          (0, _util.changeClass)(that.component.bar, "state-".concat(index + 1)); // "state-" + (index + 1) 反引号 `` 内支持运算，用${}包裹 // ['state',index+1].join('-')

          jobsChildren.forEach(function (el, j) {
            return index !== j && (0, _util.hide)(el);
          });
          (0, _util.show)(jobsChildren[index]);
        });
      }

      tabsChildren.forEach(addTabEvent); // tabsChildren.forEach(name.bind(this))
    }
  }); // eslint-disable-next-line no-useless-call

  controller.init(view);
}.call(); // 作品集导航栏点击监听，调整CSS的display样式