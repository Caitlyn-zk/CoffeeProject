<template>
<!-- 购物车组件 -->
	<div class="nps-shoppingCart-mainbar">
		<el-button class="el-icon-shopping-bag-1" @click="addCartlisthaha()">
			您的购物车({{this.$store.state.addCartList.munlist}})
		</el-button>
		<el-drawer
			title="购物袋"
			:visible.sync="drawer"
			:direction="direction"
			>
			<div class="nps-Catr-tips">
				<div class="nps-Catr-tips-bar">
					购物
					<a class="nps-Cart-monys">满340元</a>
					可享受
					<strong>包邮。</strong>
				</div>
			</div>
			<div class="nps-Cart-shopping-main" v-if="this.shippingCartList.length > 0">
				<ul :key="item.index" v-for="item of shippingCartList" class="nps-Cart-goods-main padding-b-20">
					<div>
						<div class="nps-Cart-goods-title">{{item.name}}</div>
						<li class="nps-goods-lists clearfix">
							<div class="nps-goods-imgs fl margin-r-20">
								<img :src="api+item.img">
							</div>
							<div class="padding-tb-20 fl">
								<p class="font-12 line-28">单价： {{item.price}} ￥</p>
								<p class="font-12 line-28 nps-text-color">数量： {{item.quantity}}</p>
							</div>
							<div class="fr nps-cart-delete" >
								<span @click="Delete()" class="el-icon-close"></span>
							</div>
						</li>
					</div>
				</ul>
				<div class="nps-Cart-Total">
					<div class="clearfix">
						<span class="fl nps-Cart-Total-text">总计</span>
						<span class="fr nps-Cart-Total-mony">CNY {{allTotalPrice}}</span>
					</div>
					<div class="nps-tart-total-tips">不含配送费用和活动促销折扣</div>
				</div>
				<div class="demo-drawer__footer">
					<router-link to = "/orderstep" class="nps-Cart-btun" type="" @click="centerDialogVisible = false">前往购物车</router-link>
				</div>
			</div>
			<!-- 没有商品 -->
			<div class="nps-Cart-shopping-main" v-else>
				<span class="font-16">您的购物车是空的</span>
				<div class="demo-drawer__footer">
					<el-button class="nps-Cart-btun" type="" @click="centerDialogVisible = false">开始购物</el-button>
				</div>
			</div>
		</el-drawer>
	</div>
</template>
<script>
import { getCart } from 'commonjs/Requestaxios.js'
// 图片
import shopgoods from './img/kk-Cartgoods01.jpg'
import {createNamespacedHelpers} from 'vuex'
const {mapState: addCartListState, mapMutations: addCartListMutations} = createNamespacedHelpers('addCartList')
let api = 'http://192.168.97.240:3000/'
export default {
	components: {
		shopgoods
	},
	computed: {
		...addCartListState(['shippingCartList', 'allTotalPrice'])
	},
	// watch: {
	// 	'this.$store.state.addCartList.changeCartList' () {
	// 		this.goodslist = this.$store.state.addCartList.changeCartList
	// 		console.log(this.goodslist)
	// 	}
	// },
	data () {
		return {
			drawer: false,
			direction: 'rtl',
			Listgoods: true,
			goodslist: [],
			goodslists: [],
			munlist: '',
			imglist: '',
			api
		}
	},
	mounted () {
		let infor = JSON.parse(window.localStorage.getItem('infor'))
		if (infor) {
			let userId = infor.id
			getCart({
				data: {
					userId: userId
				},
				success: (res) => {
				// 定义变量计算总价
					console.log(res)
					let allTotalPrice = 0
					let cartInfo = res.data
					// 创建数组存订单信息
					let orderArr = []
					// 循环数组更改其中的对象键值对
					for (let item of cartInfo) {
						if (item.cMachineImg) {
							item.img = item.cMachineImg
							delete item.cMachineImg
						}
						if (item.title) {
							item.name = item.title
							delete item.title
						}
						if (item.machinePrice) {
							item.price = item.machinePrice
							delete item.machinePrice
						}
						if (item.capsulePrice) {
							item.price = item.capsulePrice
							delete item.capsulePrice
						}
						allTotalPrice += item.totalPrice
						// 将订单需要的信息存入数组
						orderArr.push({npscommodity: item.commodity, commodity: item.npscommodity, quantity: item.quantity})
						// 更改对象的图片格式
						item.img = JSON.parse(item.img)[0]
					}
					this.changeCartList(cartInfo)
					this.computedPrice(allTotalPrice)

					// this.$store.commit('changeCartList', cartInfo)
				},
				error: (err) => {
				console.log(err)
				}
			})
		}
	},
	methods: {
		...addCartListMutations(['changeCartList', 'computedPrice']),
		Delete: function () {
			// console.log('哈哈哈')
			this.goodslist.splice(this.id, 1)
		},
		// 打开购物车
		addCartlisthaha () {
			console.log(this.shippingCartList)
			this.drawer = true
			// console.log(this.$router.history.current.query)
			this.goodslists = this.$store.state.addCartList.machineList
			// 存入vuex中
			// this.$store.commit('changeCartlists', this.goodslists)
		}
	}
}
</script>

<style lang="less">
@import './css/index.less';
</style>
