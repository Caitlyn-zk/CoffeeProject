<template>
	<div style="background: #fff;">
	<Title></Title>
	<div class="content">
		<div class="nps-details margin-t-10 clearfix">
			<Carousel></Carousel>
			<Detailsright></Detailsright>
		</div>
		<div class="nps-details-explain">
			<Activity></Activity>
			<Activity1></Activity1>
			<Activityone></Activityone>
			<Activity2></Activity2>
		</div>
		<Activity3></Activity3>
	</div>
	</div>
</template>

<script>
import Title from '@/components/Coffeemachine/common/title'
import Activity from '@/components/Coffeemachine/common/activity'
import Activity1 from '@/components/Coffeemachine/common/activity1'
import Activity2 from '@/components/Coffeemachine/common/activity2'
import Activity3 from '@/components/Coffeemachine/common/activity3'
import Activityone from '@/components/Coffeemachine/common/activityone'
import Carousel from '@/components/Coffeemachine/common/carousel'
import Detailsright from '@/components/Coffeemachine/common/detailsright'
import Spping from '@/components/Order/shopping-add'
export default {
	components: {
		Title,
		Activity,
		Activity1,
		Spping,
		Carousel,
		Detailsright,
		Activity2,
		Activity3,
		Activityone
	}
}
</script>

<style lang="less">
	@import './css/machine.less';
</style>
