import Vue from 'vue'
import Router from 'vue-router'
import Topcarousel from 'components/Topcarousel/topcarousel.vue'
import Offline from 'components/Topcarousel/offline/offline.vue'
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
import Orderstep from '@/components/Orderstep/step'
import info from '@/components/service/Index/Info'
import Contact from '@/components/service/Index/Contact'
import Datai from '@/components/CapsuleB/detailsB'
import Caphome from '@/components/CapsuleB/capsuleHome'
import Repair from '@/components/Coffeemachine/repair'
import Hellp from '@/components/Coffeemachine/hellp'
import Hellpdetails from '@/components/Coffeemachine/hellp-details'
import Formula from '@/components/CapsuleB/formula'
import Problem from '@/components/service/Index/problem'
import Active from '@/components/service/glossary'
import Hellpright from '@/components/Coffeemachine/common/hellpright'
import Hellpguide from '@/components/Coffeemachine/common/hellpguide'
import Caplists from '@/components/CapsuleB/capsuleLists'
import enligne from '@/components/service/Index/assembly/en-ligne'
import reparation from '@/components/service/Index/assembly/reparation'
import delivery from '@/components/service/Index/assembly/delivery'
import Best from '@/components/Coffeemachine/best-sellers'
import Seekfit from '@/components/CapsuleB/seekfit'
import Recovery from '@/components/service/Index/assembly/recovery'
import address from '@/components/service/Index/address'

import Favorite from '../components/Member/favoriteGift'
import Polite from '../components/Member/MembersPolite'
import Member from '../components/Member/merberHome'
import News from '@/components/Coffeemachine/new'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Topcarousel
    }, {
      path: '/offline',
      name: 'offline',
      component: Offline
    }, {
		path: '/Machine',
		name: 'Machine',
		component: Machine
	}, {
		path: '/service',
		component: Service
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
          path: '/',
          name: 'Myorder',
          component: Myorder
        }, {
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
      path: '/orderstep',
      name: 'Orderstep',
      component: Orderstep
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
    }, {
			path: '/datai',
			name: 'Datai',
			component: Datai
		}, {
			path: '/caphome',
			name: 'Caphome',
			component: Caphome
		}, {
			path: '/Repair',
			name: 'Repair',
			component: Repair
		}, {
			path: '/Hellp',
			name: 'Hellp',
			component: Hellp
		}, {
			path: '/Hellpdetails',
			component: Hellpdetails,
			children: [
				{
				path: '/',
				name: 'Hellpright',
				component: Hellpright
			}, {
				path: '/Hellpguide',
				name: 'Hellpguide',
				component: Hellpguide
			}]
		}, {
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
		}, {
			path: '/caplists',
			component: Caplists
		}, {
			path: '/glossary',
			component: Active
		}, {
			path: '/Best',
			name: 'Best',
			component: Best
		}, {
			path: '/seekfit',
			component: Seekfit
		}, {
			path: '/en-ligne',
			component: enligne
		}, {
			path: '/reparation',
			component: reparation
		}, {
			path: '/delivery',
			component: delivery
		}, {
			path: '/recovery',
			component: Recovery
		}, {
			path: '/address',
			component: address
		}, {
			path: '/member',
			component: Member
		}, {
			path: '/polite',
			component: Polite
		}, {
			path: '/favorite',
			component: Favorite
		}, {
			path: '/News',
			component: News
		}]
})
