<template>
	<div>
	<Title></Title>
	<div class="content">
		<div class="nps-details margin-t-10">
			<router-link to="/Machine"><a class="nps-details-fanhui"><i class="el-icon-arrow-left"></i>返回至所有机器</a></router-link>
			<div class="">
				<el-carousel height="500px" direction="horizontal" :autoplay="false">
				<el-carousel-item v-for="item in imagesbox" :key="item.id">
				<img :src="item.idView" class="image"  />
				</el-carousel-item>
				</el-carousel>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
import Title from '@/components/Coffeemachine/common/title'
export default {
	components: {
		Title
	},
	data () {
		return {
			imagesbox: [{id: 0, idView: require('../../assets/sping1.png')},
			{id: 1, idView: require('../../assets/sping2.png')},
			{id: 2, idView: require('../../assets/sping3.png')}]
		}
	}
}
</script>

<style lang="less">
	@import './css/machine.less';
</style>
