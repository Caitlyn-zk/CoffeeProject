// 注册的信息
let state = {
  registerInfo: {
    surname: '',
    name: '',
    email: '',
    password: '',
    distributeclass: '0',
    title: 1,
    location: '中国',
    address: '重庆涪陵xx',
    city: '重庆',
    postCode: '408000',
    phone: '18323929404',
    language: '0',
    shippingNotes: '配送备注',
    deliveryAddress: '0',
    subscription: '0'
  }
}
 // 改变数据的方法
let mutations = {
  addRegisterinfo (state, data) {
    Object.assign(state.registerInfo, data)
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
