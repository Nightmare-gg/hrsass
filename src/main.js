import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import request from './utils/request'
import * as directive from './directive'

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

// 构造函数的原型对象上挂载的方法和属性，都可以被构造函数对应的实例所访问
// 只要vue实例都可以访问$request
// 组件的的vue实例是 this
Vue.prototype.$request = request
// 自定义全局指令
// Vue.directive('imgerr', imgerr)
// 批量注册指令
// 方法一：for in
// for (const key in directive) {
//   Vue.directive(key, directive[key])
// }
// 方法二 object.keys() + forEach
Object.keys(directive).forEach((item) => {
  Vue.directive(item, directive[item])
})

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
