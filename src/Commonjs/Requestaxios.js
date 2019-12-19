// 集中发送ajax的地方
// 所有ajax发送的地方
import { axiosRequest } from './axios'
// 获取咖啡机首页列表
let MachineLists = (params) => {
	axiosRequest('getCoffeeMachineLists', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}
// 获取咖啡机颜色进行筛选
let MachineColor = (params) => {
	axiosRequest('getCoffeeMachineByColor', 'post', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error(error)
	})
}
export {
	MachineLists,
	MachineColor
}
