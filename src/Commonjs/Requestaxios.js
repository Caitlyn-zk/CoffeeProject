// 集中发送ajax的地方
// 所有ajax发送的地方
import { axiosRequest } from './axios'

// 发布咖啡机商品列表
let MachineLists = (params) => {
	axiosRequest('getCoffeeMachineLists', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}
// 添加个人用户信息
let addInfo = (params) => {
	axiosRequest('infor', 'post', params.data, {
		headers: { 'Content-Type': 'multipart/form-data' }
	}).then(function (res) {
		params.success(res)
		console.log(res)
		console.log('res: ', res)
	}).catch((error) => {
		console.log(error)
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
	addInfo,
	capsuleHome
}
