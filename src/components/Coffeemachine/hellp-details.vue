<template>
	<div class="cl-black">
		<Full></Full>
		<div class="content">
			<div class="nps-black-details"></div>
		</div>
		<Hellpbottom></Hellpbottom>
	</div>
</template>

<script>
import Full from '@/components/Coffeemachine/common/full'
import Hellpbottom from '@/components/Coffeemachine/common/hellpbottom'
 export default {
	components: {
		Full,
		Hellpbottom
	}
  }
</script>

<style lang="less">
@import './css/machine.less';
</style>
