<template>
	<div>
		<Full></Full>
		<div class="nps-hellp-title">
			<div class="content">
				<div class="text-center">
					<p class="nps-font-cl">咖啡机保养及维护</p>
					<p class="font-16 nps-font-p">Nespresso会员俱乐部提供详细的产品使用说明与入门指南，协助您使用咖啡机及奶泡机。请在以下产品中选择您的机型，即可查询相关信息。</p>
					<p>搜索未写</p>
				</div>
			</div>
		</div>
		<div class="cl-black nps-hellp-jiqi">
			<div class="content margin-t-20">
				<div class="text-center font-32 margin-b-20">
					选择你的机器
				</div>
				<div class="clearfix">
					<Hellplists></Hellplists>
					<Hellplists></Hellplists>
					<Hellplists></Hellplists>
					<Hellplists></Hellplists>
					<Hellplists></Hellplists>
					<Hellplists></Hellplists>
					<Hellplists></Hellplists>
					<Hellplists></Hellplists>
				</div>
			</div>
			<Hellpbottom></Hellpbottom>
		</div>
	</div>
</template>

<script>
import Hellplists from '@/components/Coffeemachine/common/hellplists'
import Full from '@/components/Coffeemachine/common/full'
import Hellpbottom from '@/components/Coffeemachine/common/hellpbottom'
 export default {
	components: {
		Full,
		Hellplists,
		Hellpbottom
	}
  }
</script>

<style lang="less">
	@import './css/machine.less';
</style>
