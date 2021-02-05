"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controller1 = exports.Controller = void 0;

var Controller = function Controller(options) {
  var initFromOptions = options.init;
  var controllerObj = {
    model: null,
    view: null,
    init: function init(model, view) {
      this.model = model;
      this.view = view;
      model.init();
      initFromOptions.call(this, model, view);
      this.bindEvents.call(this);
    }
  };

  for (var key in options) {
    if (key === "init") {} else {
      controllerObj[key] = options[key];
    }
  }

  return controllerObj;
};

exports.Controller = Controller;

var Controller1 = function Controller1(options) {
  var controllerObj = {
    view: null,
    init: function init(view) {
      this.view = view;

      if (options.init) {
        options.init.call(this, view);
      }

      if (options.bindEvents) {
        this.bindEvents.call(this);
      }
    }
  };

  for (var key in options) {
    if (key === "init") {} else {
      controllerObj[key] = options[key];
    }
  }

  return controllerObj;
};

exports.Controller1 = Controller1;