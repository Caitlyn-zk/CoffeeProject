// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import '../theme/index.css'
import axios from 'axios'
// 引入store 文件
import { axiosRequest, get, post } from 'commonjs/axios'

Vue.use(ElementUi)
// 定义一个全局事件
Vue.config.productionTip = false
Vue.prototype.$request = axiosRequest
Vue.prototype.$get = get
Vue.prototype.$post = post

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 挂载store
  store,
  axios,
  components: { App },
  template: '<App/>'
})
