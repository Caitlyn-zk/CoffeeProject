import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Common/top'
import Service from '../components/service/Index/Customer'
import Machine from '@/components/Coffeemachine/index'
import Order from '@/components/Order/shopping-add.vue'
import Register from '@/components/Login/register.vue'

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
	}, {

		path: '/Machine',
		name: 'Machine',
		component: Machine
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
