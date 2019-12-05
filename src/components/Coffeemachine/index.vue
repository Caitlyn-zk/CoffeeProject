<template>
	<router-link to="">
		<div class="content nps-banner">
			<div class="nps-span">
				<a class="font-12 color-h">
					<el-button type="text" @click="open">活动条款</el-button>
				</a>
			</div>
		</div>
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
					</div>
				</div>
			</div>
			<div class="fl nps-banner-right">
				<!--nps-public 添加点击改变样式-->
				<div class="nps-title nps-public">
					<div class="nps-title-til clearfix">
						<div class="fl">14 咖啡机</div>
						<div class="fr nps-title-btn">筛选</div>
					</div>
					<div class="nps-title-screen">
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
				    <div class="nps-title-sping clearfix">
						<div class="fl nps-title-sping-img">
							<img src="../../assets/sping.png" />
						</div>
						<div class="fl nps-sping-jiao">
							<div class="nps-sping-font">Inissia</div>
							<div class="nps-sping-font1 overflow">体积小，流线造型，色彩多样。Inissia能够确保机器高使用效率以及</div>
						    <div class="nps-sping-color clearfix">
								<div class="fl nps-color">可选颜色</div>
								<div class="fl nps-color-yuan cl-green"></div>
								<div class="fl nps-color-yuan cl-grey"></div>
							</div>
						</div>
					</div>
				</div>
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

<style>

</style>
