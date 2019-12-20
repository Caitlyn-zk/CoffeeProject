// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import '../theme/index.css'
import axios from 'axios'
// 引入store 文件
import store from './store'
Vue.use(ElementUi)
// 定义一个全局事件
Vue.prototype.information = new Vue()
Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 挂载store
  store,
  components: { App },
  template: '<App/>'
})
