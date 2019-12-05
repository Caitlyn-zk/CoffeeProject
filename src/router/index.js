import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Common/top'
import Service from '../components/service/Index/Customer'

Vue.use(Router)

export default new Router({
  routes: [
	{
		path: '/',
		name: 'Top',
		component: Top
    }, {
		path: '/service',
		component: Service
	}
  ]
})
