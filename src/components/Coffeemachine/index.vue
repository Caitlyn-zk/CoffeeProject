<template>
	<div>
		<Title></Title>
		<!--首页咖啡机列表-->
		<div class="content clearfix">
			<div class="fl nps-banner-left">
				<div class="nps-tuijian-img">
					<img src="../../assets/img-left.png"/>
				</div>
				<div class="nps-coffee-be">
					<div class="nps-centent">
						<img src="../../assets/coffee-img.png" />
					</div>
					<div class="nps-name">
						<span>Chiaro 绮亚罗咖啡</span>
					</div>
					<div class="nps-name-goumai clearfix">
						<div class="fl">CNY 3.80</div>
						<div class="fr">
							<Spping></Spping>
						</div>
					</div>
				</div>
				<div class="nps-coffee-be">
					<div class="nps-centent">
						<img src="../../assets/coffee-img.png" />
					</div>
					<div class="nps-name">
						<span>Chiaro 绮亚罗咖啡</span>
					</div>
					<div class="nps-name-goumai clearfix">
						<div class="fl">CNY 3.80</div>
						<div class="fr">
							<Spping></Spping>
						</div>
					</div>
				</div>
			</div>
			<div class="fl nps-banner-right">
				<!--nps-public 添加点击改变样式-->
				<div class="nps-title nps-public">
					<div class="nps-title-til clearfix">
						<div class="fl">
							<!--咖啡机筛选数量-->
							<span>14</span>
							<span>咖啡机</span>
						</div>
						<el-popover
							placement="bottom"
							width="931"
							model="visible">
							<div class="nps-vis">
								<div class="nps-title-screen-color">颜色</div>
								<div class="clearfix">
									<div class="nps-yuan cl-white fl" title="white">
										<div class="nps-yuanyuan dis"></div>
									</div>
									<div class="nps-yuan cl-grey fl" title="grey">
										<div class="nps-yuanyuan dis"></div>
									</div>
									<div class="nps-yuan cl-red fl" title="red">
										<div class="nps-yuanyuan dis"></div>
									</div>
									<div class="nps-yuan cl-green fl" title="green">
										<div class="nps-yuanyuan dis"></div>
									</div>
									<div class="nps-yuan cl-brown fl" title="brown">
										<div class="nps-yuanyuan dis"></div>
									</div>
									<div class="nps-yuan cl-black fl" title="black">
										<div class="nps-yuanyuan dis"></div>
									</div>
									<div class="nps-yuan cl-silver fl" title="silver">
										<div class="nps-yuanyuan dis"></div>
									</div>
								</div>
							</div>
							<el-button slot="reference">筛选</el-button>
						</el-popover>
					</div>
					<!--咖啡机商品列表-->
					<lists></lists>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Title from '@/components/Coffeemachine/common/title'
import lists from '@/components/Coffeemachine/common/lists'
import Spping from '@/components/Order/shopping-add'
export default {
  components: {
		lists,
		Title,
		Spping
  },
  methods: {
		open () {
		this.$alert('<div class="nps-font1">全场机器,最高可减400元。</div><div class="nps-font2">● 全场机器，最高可减400元。</div><div class="nps-font2">● 活动时间：2019年11月1日至2019年12月31日。</div><div class="nps-font2">● 每笔订单中，该活动最多可享受一次优惠。活动期间，每位顾客最多可享受3次优惠。</div><div class="nps-font2">● 符合活动机制，结账时折扣自动生效。</div><div class="nps-font2">● 如发生退款，赠品需一并退还。</div>', {
		dangerouslyUseHTMLString: true
	})
	},
	bnt () {
		console.log(111)
	}
  }
}
</script>

<style lang="less">
	@import './css/machine.less';
</style>
