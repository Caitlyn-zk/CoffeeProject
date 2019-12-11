<template>
	<div>
		<div class="content">
			<div class="cl-white padding-20 nps-commend">
				<div class="font-size-30 text-center">推荐产品</div>
				<div class="clearfix">
					<Recommendlists></Recommendlists>
					<div class="fr padding-lr-15 nps-recommend-img">
						<div class="">
							<img src="../../../assets/recommend.png" />
						</div>
						<div class="margin-b-7 font-size nps-recommend-font">
							备件
						</div>
						<div class="margin-b-18 font-14">
							您的机器需要零件么?
							拨打Nespresso热线电话 4001200600，让我们的咖啡专家通过你的备件选择来协助您。电话每周7天，每天24小时免费。
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Recommendlists from '@/components/Coffeemachine/common/recommendlists'
export default {
	components: {
		Recommendlists
	}
}
</script>

<style lang="less">
	@import '../css/machine.less';
</style>
