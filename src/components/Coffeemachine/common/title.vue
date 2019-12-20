<template>
	<router-link to="/best">
	<div class="content nps-banner">
		<div class="nps-span">
			<a class="font-12 color-h">
				<el-button type="text" @click="open">活动条款</el-button>
			</a>
		</div>
	</div>
	</router-link>
</template>

<script>
export default {
	methods: {
		open () {
		this.$alert('<div class="nps-font1">全场机器,最高可减400元。</div><div class="nps-font2">● 全场机器，最高可减400元。</div><div class="nps-font2">● 活动时间：2019年11月1日至2019年12月31日。</div><div class="nps-font2">● 每笔订单中，该活动最多可享受一次优惠。活动期间，每位顾客最多可享受3次优惠。</div><div class="nps-font2">● 符合活动机制，结账时折扣自动生效。</div><div class="nps-font2">● 如发生退款，赠品需一并退还。</div>', {
		dangerouslyUseHTMLString: true
		})
		}
	}
}
</script>

<style lang="less">
	@import '../css/machine.less';
</style>
