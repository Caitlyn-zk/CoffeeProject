import Vue from 'vue'
import Router from 'vue-router'
import Topcarousel from 'components/Topcarousel/Topcarousel.vue'
Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/',
			component: Topcarousel
    }
  ]
})
