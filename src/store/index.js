import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	// 只有通过mutations中的方法去改变state
	state: {
		total: 0
	},
	mutations: {
		changeBuyCartIndex (state, btnNum) {
			console.log(btnNum)
			console.log(state)
          if (btnNum === 0) {
            state.total += 1
          } else {
            state.total -= 1
		}
		console.log(state.total)
		},
		changeBuyCartTwoIndex (state, btnNum) {
            if (btnNum === 0) {
            state.total += 1
          } else {
            state.total -= 1
          }
        },
         changeBuyCartThreeIndex (state, btnNum) {
            if (btnNum === 0) {
            state.total += 1
          } else {
            state.total -= 1
          }
        }
	},
	actions: {
	},
	getters: {

	},
	// vuex 祖册模块名称
	modules: {
	}
})
