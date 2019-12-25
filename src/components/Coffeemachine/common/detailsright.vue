<template>
	<div>
		<div class="fl nps-top">
			<img src="https://www.nespresso.com/ecom/medias/sys_master/public/12078342537246/20181224-200x100-CN.png" alt="赠免费试用装">
		</div>
		<div class="fl nps-xiangqing">
			<div class="nps-mai-title">{{getlistcoffee.name}}</div>
			<div class="nps-mai-title1">Inissia C40 {{getlistcoffee.value}}</div>
			<div class="font-12">颜色</div>
			<div class="clearfix margin-t-10">
				<div class="margin-lr-5 cl-green fl nps-rop"></div>
				<div class="margin-lr-5 cl-black fl nps-rop"></div>
			</div>
			<div class="nps-btn-lijian margin-t-25">立减100元</div>
			<div class="text-l nps-sping-jiage">CNY {{getlistcoffee.price}}</div>
			<div class="text-l font-12 margin-t-5 cl-65">售价</div>
			<div class="text-l font-12 text-del cl-65">CNY {{getlistcoffee.discountPrice}}</div>
			<div class="nps-goumai">
				<div style="width: 255px;">
					<Spping></Spping>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Spping from '@/components/Coffeemachine/common/shopingbtn'
export default {
	components: {
		Spping
	},
	data () {
		return {
			getlistcoffee: {}
		}
	},
	methods: {
		grthub () {
			// this.name = this.$router.history.current.query.name
			// this.manual = this.$router.history.current.query.manual
			// this.value = this.$router.history.current.query.value
			// this.price = this.$router.history.current.query.price
			// this.discountPrice = this.$router.history.current.query.discountPrice
			// 拿到数据
			this.getlistcoffee = this.$router.history.current.query
			console.log(this.getlistcoffee)
			// 存入vuex中
			this.$store.commit('changeCartlists', this.getlistcoffee)
		}
	},
	mounted () {
		this.grthub()
	}
}
</script>

<style lang="less">
	@import '../css/machine.less';
</style>
