import Vue from 'vue'
import Router from 'vue-router'
import Topcarousel from 'components/Topcarousel/Topcarousel.vue'
import Machine from '@/components/Coffeemachine/index'
import ShoppingAdd from '@/components/Order/shopping-add.vue'
import Details from '@/components/Coffeemachine/machine-details.vue'
import Service from '../components/service/Index/Customer'
import Register from '@/components/Login/register.vue'
import Order from '@/components/Order'
import Myorder from '@/components/Order/myorder'
import Myaddress from '@/components/Order/myaddress'
import Editaddress from '@/components/Order/myaddress/editAddress'
import Addaddress from '@/components/Order/myaddress/addAddress'
import Myinfo from '@/components/Order/myinfo'
import Mymachines from '@/components/Order/mymachines'
import Addmachines from '@/components/Order/mymachines/addmachines'
import Editmachines from '@/components/Order/mymachines/editmachines'
import Alerts from '@/components/Order/alerts'
import Fondness from '@/components/Order/fondness'
import info from '@/components/service/Index/Info'
import Contact from '@/components/service/Index/Contact'
import Datai from '@/components/CapsuleB/detailsB'
import Caphome from '@/components/CapsuleB/capsuleHome'
import Repair from '@/components/Coffeemachine/repair'
import Hellp from '@/components/Coffeemachine/hellp'
import Hellpdetails from '@/components/Coffeemachine/hellp-details'
import Formula from '@/components/CapsuleB/formula'
import Problem from '@/components/service/Index/problem'
import Hellpright from '@/components/Coffeemachine/common/hellpright'
import Hellpguide from '@/components/Coffeemachine/common/hellpguide'
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
        }, {
          path: '/order/editmachines',
          name: 'Editmachines',
          component: Editmachines
        }, {
          path: '/order/alerts',
          name: 'Alerts',
          component: Alerts
        }, {
          path: '/order/fondness',
          name: 'Fondness',
          component: Fondness
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
	component: Hellpdetails,
	children: [
		{
		path: '/',
		name: 'Hellpright',
		component: Hellpright
		},
		{
		path: '/Hellpguide',
		name: 'Hellpguide',
		component: Hellpguide
		}
	]
    },
	{
	path: '/formula',
	name: 'Formula',
	component: Formula
	},
	{
  path: '/formula',
  name: 'Formula',
  component: Formula
    }, {
      path: '/datai',
      component: Datai
    }, {
      path: '/caphome',
      component: Caphome
    }, {
      path: '/problem',
      component: Problem
    }]
})
