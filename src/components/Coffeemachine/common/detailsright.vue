<template>
	<div>
		<div class="fl nps-top">
			<img src="https://www.nespresso.com/ecom/medias/sys_master/public/12078342537246/20181224-200x100-CN.png" alt="赠免费试用装">
		</div>
		<div class="fl nps-xiangqing">
			<div class="nps-mai-title">Inissia</div>
			<div class="nps-mai-title1">Inissia C40 红色</div>
			<div class="font-12">颜色</div>
			<div class="clearfix">
				<div class="nps-yuan cl-white fl" title="white">
					<div class="nps-yuanyuan dis"></div>
				</div>
				<div class="nps-yuan cl-grey fl" title="grey">
					<div class="nps-yuanyuan dis"></div>
				</div>
			</div>
			<div class="nps-btn-lijian margin-t-25">立减100元</div>
			<div class="text-l nps-sping-jiage">CNY 766.00</div>
			<div class="text-l font-12 margin-t-5 cl-65">售价</div>
			<div class="text-l font-12 text-del cl-65">CNY 866.00</div>
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
	}
}
</script>

<style lang="less">
	@import '../css/machine.less';
</style>
