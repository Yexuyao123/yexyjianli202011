"use strict";

require("core-js/modules/es.array.find.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = void 0;

var Model = function Model(options) {
  var resourceName = options.ClassName;
  return {
    init: function init() {
      // LC初始化
      AV.init({
        appId: "ueriV0pxGqmoDxvYknzHLY3x-gzGzoHsz",
        appKey: "Iqx5cPCf55cts7k0BhyB0O7g",
        serverURL: "https://ueriv0px.lc-cn-n1-shared.com"
      }); // console.log("初始化成功")
    },
    fetch: function fetch() {
      // 从数据库拉取最新留言
      var query = new AV.Query(resourceName); //获取 Message 表格
      // 设置筛选条件

      query.descending('createdAt'); // 按 createdAt 降序排列,新到旧

      var onePageNumber = 10;
      query.limit(onePageNumber); // 最多获取 10 条结果,最近10条

      return query.find();
    },
    save: function save(obj) {
      var MessageObject = AV.Object.extend(resourceName);
      var messageObject = new MessageObject();

      for (var key in obj) {
        messageObject.set(key, obj[key]); // console.log('保存' + key + '成功')
      }

      return messageObject.save();
    }
  };
};

exports.Model = Model;