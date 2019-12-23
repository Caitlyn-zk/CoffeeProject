// 订单信息
let state = {
  orderInfo: '',
  order: '',
  userId: '',
  allTotalPrice: ''
}
 // 改变数据的方法
let mutations = {
  // 添加订单信息
  addOrderInfo (state, data) {
    state.orderInfo = data
  },
  // 添加订单
  addOrder (state, data) {
    state.order = data
  },
  // 添加用户id
  addUserId (state, data) {
    state.userId = data
  },
  // 添加总价
  addAlltotal (state, data) {
    console.log(data)
    state.allTotalPrice = data
    console.log(state.allTotalPrice)
  }
}

let actions = {
}

let getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
