<template>
	<div>
	<div style="background: #fff;">
	<Title></Title>
	<div class="content">
		<div class="nps-details margin-t-10 clearfix">
			<Activitytwo></Activitytwo>
			<Detailsright></Detailsright>
		</div>
		<div class="nps-details-explain clearfix">
			<div class="fl nps-best-width">
				<Activity></Activity>
				<Activity1></Activity1>
				<Best1></Best1>
				<Best2></Best2>
				<Best3></Best3>
				<Activity2></Activity2>
			</div>
			<div class="cl-1b fr">
				<Bestright></Bestright>
				<Bestright></Bestright>
			</div>
			<div class="fr">
				<Besthover></Besthover>
			</div>
		</div>
		<Activity3></Activity3>
	</div>
	</div>
	<div class="content cl-black">
		<Footer></Footer>
	</div>
	</div>
</template>

<script>
import Title from '@/components/Coffeemachine/common/title'
import Activity from '@/components/Coffeemachine/common/activity'
import Activity1 from '@/components/Coffeemachine/common/activity1'
import Activity2 from '@/components/Coffeemachine/common/activity2'
import Activity3 from '@/components/Coffeemachine/common/activity3'
import Activitytwo from '@/components/Coffeemachine/common/activitytwo'
import Activityone from '@/components/Coffeemachine/common/activityone'
import Carousel from '@/components/Coffeemachine/common/carousel'
import Detailsright from '@/components/Coffeemachine/common/detailsright'
import Spping from '@/components/Order/shopping-add'
import Bestright from '@/components/Coffeemachine/common/best-rightlists'
import Best1 from '@/components/Coffeemachine/common/best1'
import Best2 from '@/components/Coffeemachine/common/best2'
import Best3 from '@/components/Coffeemachine/common/best3'
import Besthover from '@/components/Coffeemachine/common/besthover'
import Footer from '@/components/service/Footer'
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
		Activityone,
		Activitytwo,
		Bestright,
		Best1,
		Best2,
		Best3,
		Besthover,
		Footer
	}
}
</script>

<style lang="less" scoped>
	@import './css/machine.less';
</style>
