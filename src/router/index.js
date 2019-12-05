import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Common/top'
import Order from '@/components/Order/shopping-add.vue'
import Register from '@/components/Login/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
