"use strict";

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/web.dom-collections.for-each.js");

var _util = require("./util.js");

var _view = require("./base/view.js");

var _model = require("./base/model.js");

var _controller = require("./base/controller.js");

!function () {
  var model = (0, _model.Model)({
    ClassName: "Message"
  });
  var view = (0, _view.View)("#messages");
  var controller = (0, _controller.Controller)({
    component: {
      list: null,
      form: null
    },
    status: {
      loadingData: false
    },
    init: function init(model, view) {
      this.component.list = view.querySelector('ol.messageList');
      this.component.form = view.querySelector('form');
      this.status.loadingData = false;
      this.dataInit();
    },
    dataInit: function dataInit() {
      this.status.loadingData = false;
      this.clearForm();
      this.renderList();
    },
    renderList: function renderList() {
      var _this = this;

      var list = this.component.list;
      this.model.fetch.call().then(function (data) {
        // getMessageObject 是包含满足条件的 message 对象的数组
        while (list.childElementCount) {
          list.removeChild(list.firstElementChild);
        }

        data.forEach(function (item) {
          var _item$attributes = item.attributes,
              visitorName = _item$attributes.visitorName,
              visitorMessage = _item$attributes.visitorMessage;

          _this.renderListItem(visitorName, visitorMessage, item.createdAt.toLocaleString());
        });
      });
    },
    bindEvents: function bindEvents() {
      var _this2 = this;

      this.component.form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (_this2.status.loadingData) return;
        _this2.status.loadingData = true;

        _this2.saveMessage();
      });
    },
    saveMessage: function saveMessage() {
      var _this3 = this;

      var visitorName = (0, _util.getInputValue)("input[name=name]", this.component.form);
      var visitorMessage = (0, _util.getInputValue)("input[name=content]", this.component.form);
      this.model.save.call(undefined, {
        visitorName: visitorName,
        visitorMessage: visitorMessage
      }).then(function () {
        _this3.dataInit();
      }, function () {
        alert("提交失败,请重试");
      });
    },
    renderListItem: function renderListItem(messageName, messageContent, messageTime) {
      var li = (0, _util.addLabel)("li", {
        classList: "messageStyle"
      });
      var obj = {
        messageName: messageName,
        messageContent: messageContent,
        messageTime: messageTime
      };
      Object.keys(obj).forEach(function (classList) {
        var textContent = obj[classList];
        li.appendChild((0, _util.addLabel)('div', {
          classList: classList,
          textContent: textContent
        }));
      });
      this.component.list.appendChild(li);
    },
    clearForm: function clearForm() {
      var _this4 = this;

      ['name', 'content'].forEach(function (name) {
        _this4.component.form.querySelector("input[name=".concat(name, "]")).value = "";
      });
    }
  });
  controller.init(model, view);
}.call();