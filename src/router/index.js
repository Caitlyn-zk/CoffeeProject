import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Common/top'
<<<<<<< HEAD
import Service from '../components/service/Index/Customer'
=======
<<<<<<< HEAD
import Machine from '@/components/Coffeemachine/index'
=======
import Order from '@/components/Order/shopping-add.vue'
import Register from '@/components/Login/register.vue'
>>>>>>> 12f185e6cdf83b8e5e01fb286a682ccfd7d25eff
>>>>>>> 12063630ece08340d76da5c6eaccef9ce7a83e95

Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 12063630ece08340d76da5c6eaccef9ce7a83e95
	{
		path: '/',
		name: 'Top',
		component: Top
    }, {
<<<<<<< HEAD
		path: '/service',
		component: Service
	}
=======
		path: '/Machine',
		name: 'Machine',
		component: Machine
=======
		{
			path: '/',
			name: 'Top',
			component: Top
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
>>>>>>> 12f185e6cdf83b8e5e01fb286a682ccfd7d25eff
    }
>>>>>>> 12063630ece08340d76da5c6eaccef9ce7a83e95
  ]
})
