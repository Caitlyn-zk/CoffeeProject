// 集中发送ajax的地方
// 所有ajax发送的地方
// import Vue from 'vue'
// import { axiosRequest, get, post } from './axios'
import { axiosRequest } from './axios'
// 发布咖啡机商品列表
let MachineLists = (params) => {
	axiosRequest('getCoffeeMachineLists', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}

// 咖啡胶囊主页
let capsuleHome = (params) => {
	axiosRequest('getCoffgCapLists', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}
export {
	MachineLists,
	capsuleHome
}
