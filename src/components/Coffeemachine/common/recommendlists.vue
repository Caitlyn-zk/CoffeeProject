<template>
	<div>
		<div class="fl padding-lr-15 nps-recommend-img">
			<div class="">
				<img src="../../../assets/recommend.png" />
			</div>
			<div class="margin-b-7 font-size nps-recommend-font">
				红色奶沫机
			</div>
			<div class="margin-b-18 font-14 font-cl-b0">
				购买咖啡机与奶泡机套装产品，即可享受立减200元特惠
			</div>
			<div class="nps-recommend-liaojie">
				<a>了解更多</a>
			</div>
			<div class="font-cl-6f font-14 margin-b-18">CNY 800.00</div>
			<div class="padding-lr-15">
				<Spping></Spping>
			</div>
		</div>
	</div>
</template>

<script>
import Spping from '@/components/Coffeemachine/common/shopingbtn'
export default {
	components: {
		Spping
	}
}
</script>

<style lang="less">
	@import '../css/machine.less';
</style>
