let state = {
    // 购物车
    shippingCartList: [],
    // 咖啡胶囊列表
    CapList: [],
    // 咖啡机
    Cartlistcoffeelist: [],
    // 咖啡机商品
    Cartgoodslists: [],
    // 咖啡机添加导购车的数据
    machineList: [],
    // 存放数量的
    munlist: 0,
    shippingCarthaha: [],
    // 商品总价
    allTotalPrice: ''
}
let mutations = {
	// 存储购物车列表
	changeCartList (state, data) {
        state.shippingCartList = data
        console.log(state.shippingCartList)
    },
    computedPrice (state, data) {
        state.allTotalPrice = data
    },
	// 咖啡机
	changeCartcoffee (state, data) {
		console.log('咖啡机')
		state.Cartlistcoffeelist = data
    },
    // 购物车咖啡机详情获取的商品
	changeCartlists (state, data) {
        state.Cartgoodslists.push(data)
    },
    // 咖啡机添加导购车的数据
    changemachineList (state, data) {
        state.munlist = data.userMun
        state.machineList.push(data)
    },
    // 数量
    munlists (state, data) {
        state.munlist += data
    },
    // 添加咖啡胶囊列表
    addCapList (state, data) {
        state.CapList = data
    }
}

export default {
    namespaced: true,
	state: state,
	mutations
}
