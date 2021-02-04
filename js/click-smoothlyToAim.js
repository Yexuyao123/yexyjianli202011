import { View } from "./base/view.js"
import { Controller1 } from "./base/controller.js"

!(function () {
  // 鼠标点击跳转 模拟动画
  const view = View("li>.ba",true)
  const controller = Controller1({
    bindEvents: function () {
      for (let i = 0; i < this.view.length; i++) {
        this.view[i].addEventListener("click", this.methods.gotoTarget)
      }
    },
    methods: {
      gotoTarget: function (e) {
        e.preventDefault()
        const href = e.currentTarget.getAttribute("href")
        const target = document.querySelector(href)
        if (!target) return
        const elePosition = target.getBoundingClientRect()
        window.scrollTo(0, elePosition.top + window.scrollY - 100)
      }
    }
  })
  controller.init(view)
}.call())
