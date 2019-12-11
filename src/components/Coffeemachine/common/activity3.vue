<template>
	<div>
		<div class="nps-tuijian">
			<div class="cl-font-white">Nespresso为您推荐</div>
			<div class="clearfix">
				<div class="fl">
					<div class="nps-li-img1">
						<img src="../../../assets/tui1.png">
						<div class="nps-li-color cl-font-white">Pure系列大杯咖啡碟组合</div>
					</div>
				</div>
				<div class="fl">
					<div class="nps-li-img1">
						<img src="../../../assets/tui2.png">
						<div class="nps-li-color cl-font-white">TOUCH Wall</div>
					</div>
				</div>
			</div>
		</div>
		<div class="nps-live">
			<div class="nps-cl-font">你可能会喜欢</div>
			<div class="clearfix">
				<div class="fl">
					<div class="nps-img-live">
						<div class="nps-img-live-img">
							<div class="nps-live-div">
								<img src="../../../assets/live1.png">
							</div>
							<div class="nps-live-jiage">黑色奶沫机</div>
							<div class="nps-live-jiage1">
								<span>CNY 800.00</span>
								<div class="fr">
									<Spping></Spping>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="fl">
					<div class="nps-img-live">
						<div class="nps-img-live-img">
							<div class="nps-live-div">
								<img src="../../../assets/live2.png">
							</div>
							<div class="nps-live-jiage">TOUCH马克杯</div>
							<div class="nps-live-jiage1">
								<span>CNY 280.00</span>
								<div class="fr">
									<Spping></Spping>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="fl">
					<div class="nps-img-live">
						<div class="nps-img-live-img">
							<div class="nps-live-div">
								<img src="../../../assets/live3.png">
							</div>
							<div class="nps-live-jiage">黄砂糖</div>
							<div class="nps-live-jiage1">
								<span>CNY 50.00</span>
								<div class="fr">
									<Spping></Spping>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Spping from '@/components/Order/shopping-add'
export default {
	components: {
		Spping
	}
}
</script>

<style lang="less">
	@import '../css/machine.less';
</style>
