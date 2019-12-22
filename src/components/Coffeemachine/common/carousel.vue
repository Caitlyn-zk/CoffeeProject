<template>
	<div class="fl">
		<router-link to="/Machine"><a class="nps-details-fanhui"><i class="el-icon-arrow-left"></i>返回至所有机器</a></router-link>
		<el-carousel trigger="click" height="500px" direction="horizontal" :autoplay="false">
		<el-carousel-item v-for="item in imagesbox" :key="item.id">
		<img :src="item.idView" class="image"  />
		</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
export default {
	data () {
		return {
			imagesbox: [{id: 0, idView: require('../../../assets/cursor1.png')},
			{id: 1, idView: require('../../../assets/cursor2.png')},
			{id: 2, idView: require('../../../assets/cursor3.png')},
			{id: 3, idView: require('../../../assets/cursor4.png')}
			],
			cMachineImg: '',
			url: 'http://192.168.97.240:3000/'
		}
	},
	methods: {
		getbush () {
			this.cMachineImg = this.$router.history.current.query.cMachineImg
		}
	},
	mounted () {
		this.getbush()
	}
}
</script>

<style lang="less">
	@import '../css/machine.less';
</style>
