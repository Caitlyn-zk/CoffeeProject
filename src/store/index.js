import Vue from 'vue'
import Vuex from 'vuex'
import Register from './register'
import tocart from './tocart'
import Order from './order'
import Login from './login'
import addCartList from './addCartList'

const userInfo = 'infor'

Vue.use(Vuex)

export default new Vuex.Store({
	// vuex 中存储的数据
	modules: {
    Register: Register,
    Order: Order,
    Login: Login,
    addCartList: addCartList
	},
	// 只有通过mutations中的方法去改变state
	state: {
    total: 0,
    info: '',
    showNumIndex: 0
	},
	mutations: {
    changeShowIndexNum (state, value) {
      if (value === 1) {
        state.showNumIndex = 1
      } else if (value === 2) {
        state.showNumIndex = 2
      }
    },
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
    // strict: debug,  //开启严格模式
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
