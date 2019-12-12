<template>
	<div>
		<div class="nps-best-right">
			<div class="nps-best-img">
				<img src="../../../assets/best2.png" />
			</div>
			<div class="text">
				<el-progress :show-text="false" :stroke-width="20" :percentage="5"></el-progress>
				<div class="nps-text-font">大师匠心系列 5条装</div>
				<div class="nps-text-font">CNY 220.00</div>
				<div>
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
	}
}
</script>

<style lang="less">
	@import '../css/machine.less';
</style>
