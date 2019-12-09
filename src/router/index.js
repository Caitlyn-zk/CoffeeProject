import Vue from 'vue'
import Router from 'vue-router'
import Topcarousel from 'components/Topcarousel/Topcarousel.vue'
import Machine from '@/components/Coffeemachine/index'
import ShoppingAdd from '@/components/Order/shopping-add.vue'
import Details from '@/components/Coffeemachine/machine-details.vue'
import Service from '../components/service/Index/Customer'
import Register from '@/components/Login/register.vue'
import Order from '@/components/Order/index.vue'
import Myorder from '@/components/Order/myorder'
import Myaddress from '@/components/Order/myaddress'
import Editaddress from '@/components/Order/myaddress/editAddress'
import Addaddress from '@/components/Order/myaddress/addAddress'
import Myinfo from '@/components/Order/myinfo'
import Mymachines from '@/components/Order/mymachines'
import Addmachines from '@/components/Order/mymachines/addmachines'
import info from '@/components/service/Index/Info'
import Contact from '@/components/service/Index/Contact'
import Datai from '@/components/CapsuleB/detailsB'
import Caphome from '@/components/CapsuleB/capsuleHome'
import Repair from '@/components/Coffeemachine/repair'
import Hellp from '@/components/Coffeemachine/hellp'
import Hellpdetails from '@/components/Coffeemachine/hellp-details'
Vue.use(Router)
export default new Router({
  routes: [
		{
			path: '/',
			component: Topcarousel
    },
	{
	path: '/Machine',
	name: 'Machine',
	component: Machine
	},
    {
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
          path: '/order/myaddress',
          name: 'Myaddress',
          component: Myaddress
        }, {
          path: '/order/editaddress',
          name: 'Editaddress',
          component: Editaddress
        }, {
          path: '/order/addAddress',
          name: 'Addaddress',
          component: Addaddress
        }, {
          path: '/order/myinfo',
          name: 'Myinfo',
          component: Myinfo
        }, {
          path: '/order/mymachines',
          name: 'Mymachines',
          component: Mymachines
        }, {
          path: '/order/addmachines',
          name: 'Addmachines',
          component: Addmachines
        }
      ]
    }, {
      path: '/Details',
      name: 'Details',
      component: Details
    }, {
      path: '/info',
      component: info
    }, {
      path: '/contact',
      component: Contact
    },
	{
	path: '/datai',
	name: 'Datai',
	component: Datai
	},
	{
	path: '/caphome',
	name: 'Caphome',
	component: Caphome
	},
	{
	path: '/Repair',
	name: 'Repair',
	component: Repair
	},
	{
	path: '/Hellp',
	name: 'Hellp',
	component: Hellp
	},
	{
	path: '/Hellpdetails',
	name: 'Hellpdetails',
	component: Hellpdetails
	}]
})
