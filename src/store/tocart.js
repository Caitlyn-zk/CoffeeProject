// 购物车信息
let state = {
  addCartId: 1,
  cartorderLists: [{'addCartId': 1}]
}
 // 改变数据的方法
let mutations = {
  // 从组件把值给传过来
  getorderCart (state, info) {
    state.cartorderLists = info
  }
}

let actions = {
}

let getters = {
  // totalPrice (state) {
  //   let totalPrice = 0
  //   for (let prop of state.cartorderLists) {
  //     totalPrice += prop.quantity * prop.price
  //   }
  //   return totalPrice
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
