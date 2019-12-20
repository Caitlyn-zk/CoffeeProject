import Vue from 'vue'
import Vuex from 'vuex'
import Register from './register'
Vue.use(Vuex)

export default new Vuex.Store({
	// vuex 中存储的数据
	modules: {
    Register: Register
	},
	// 只有通过mutations中的方法去改变state
	mutations: {

	},
	actions: {
	},
	getters: {

	}
})
