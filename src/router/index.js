import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Common/top'
import Service from '../components/service/Index/Customer'
import Machine from '@/components/Coffeemachine/index'
import ShoppingAdd from '@/components/Order/shopping-add.vue'
import Register from '@/components/Login/register.vue'
import Order from '@/components/Order/index.vue'
import Myorder from '@/components/Order/myorder'
import Myaddress from '@/components/Order/myaddress'
import Editaddress from '@/components/Order/myaddress/editAddress'

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
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/shopping-add',
      name: 'ShoppingAdd',
      component: ShoppingAdd
    }, {
      path: '/order',
      name: 'Order',
      component: Order,
      children: [
        {
          path: '/order/myorder',
          name: 'Myorder',
          component: Myorder
        }, {
          path: '/order/address',
          name: 'Myaddress',
          component: Myaddress
        }, {
          path: '/order/editaddress',
          name: 'Editaddress',
          component: Editaddress
        }
      ]
    }
  ]
})
