import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import Top from 'components/Common/top'
import Machine from 'components/coffeemachine/index' 

=======
import Top from './backTop'
>>>>>>> 12f185e6cdf83b8e5e01fb286a682ccfd7d25eff
Vue.use(Vuex)

export default new Vuex.Store({
	// vuex 中存储的数据
<<<<<<< HEAD
	modules: {
		Top,
		Machine
	},
=======
>>>>>>> 12f185e6cdf83b8e5e01fb286a682ccfd7d25eff
	// 只有通过mutations中的方法去改变state
	mutations: {

	},
	actions: {
	},
	getters: {

	},
	modules: {
      Top
	}
})
