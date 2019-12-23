import Vue from 'vue'
import Vuex from 'vuex'
import Register from './register'
import tocart from './tocart'
import Order from './order'
const userInfo = 'infor'
// const isLogin = 'isLogin'
import Login from './login'
Vue.use(Vuex)

export default new Vuex.Store({
	// vuex 中存储的数据
	modules: {
    Register: Register,
    Order: Order
    Login: Login
	},
	// 只有通过mutations中的方法去改变state
	state: {
    total: 0,
    info: ''
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
    getStorage: function (state) {
      if (!state.infor) {
        state.infor = JSON.parse(localStorage.getItem(userInfo))
        // state.isLogin = localStorage.getItem(isLogin)
      }
    }
	},
	// vuex 祖册模块名称
	module: {
    tocart
	}
})
