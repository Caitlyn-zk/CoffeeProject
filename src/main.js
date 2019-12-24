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

// const user = {
//   isLogin () {
//     return false
//   }
// }
// 路由拦截(路由守卫)
router.beforeEach((to, from, next) => {
  // 判断当前用户是否需要登录权限
  // if (to.matched.some(record => record.meta.requrireLogin)) {
  //   if (window.localStorage.isLogin === '1') {
  //     next()
  //   } else if (to.path !== '/') {
  //     next({path: '/login'})
  //     Vue.prototype.$message.warning('请先登录！')
  //   }
  // }
  if (to.path === '/order' || to.path === '/orderstep') {
    if (window.localStorage.infor != null) {
      next()
    } else {
      // Vue.prototype.$message.warning('您还未登录！')
      next('/register')
    }
  } else {
    next()
  }
})

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
