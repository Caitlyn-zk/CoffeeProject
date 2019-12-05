import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Common/top'
import Machine from '@/components/Coffeemachine/index'

Vue.use(Router)

export default new Router({
  routes: [
	{
		path: '/',
		name: 'Top',
		component: Top
    }, {
		path: '/Machine',
		name: 'Machine',
		component: Machine
    }
  ]
})
