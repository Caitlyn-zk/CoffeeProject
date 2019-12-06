<template>
<!-- 购物车组件 -->
	<div class="nps-shoppingCart-mainbar">
		<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
			点我打开
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
			<div class="nps-Cart-shopping-main" v-if="Listgoods=== true">
				<ul class="nps-Cart-goods-main">
					<div class="nps-Cart-goods-title">咖啡胶囊(数量)</div>
					<li class="nps-goods-lists">
						<div class="nps-goods-imgs">
							<img src="./img/kk-Cartgoods01.jpg">
						</div>
					</li>
				</ul>
				<div class="nps-Cart-Total">
					<div class="clearfix">
						<span class="fl nps-Cart-Total-text">总计</span>
						<span class="fr nps-Cart-Total-mony">CNY 123486</span>
					</div>
					<div class="nps-tart-total-tips">不含配送费用和活动促销折扣</div>
				</div>
				<div class="demo-drawer__footer">
					<el-button class="nps-Cart-btun" type="" @click="centerDialogVisible = false">前往购物车</el-button>
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
export default {
	data () {
      return {
        drawer: false,
				direction: 'rtl',
				Listgoods: true
      }
    }
}
</script>

<style lang="less">
@import './css/index.less';
</style>
