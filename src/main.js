// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import '../theme/index.css'
import { axiosRequest, get, post } from 'commonjs/axios'

Vue.use(ElementUi)
Vue.config.productionTip = false
Vue.prototype.$request = axiosRequest
Vue.prototype.$get = get
Vue.prototype.$post = post
console.log(axiosRequest)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
