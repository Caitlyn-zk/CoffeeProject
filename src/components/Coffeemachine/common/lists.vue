<template>
	<router-link to="/Details">
	<div class="nps-title-sping clearfix" :key="Lists" v-for="Lists in machineLists">
		<div class="fl nps-title-sping-img">
			<img :src="Lists.idView" class="image"  />
		</div>
		<div class="fl nps-sping-jiao">
			<div class="nps-sping-font">{{Lists.title}}</div>
			<div class="nps-sping-font1 overflow">体积小，流线造型，色彩多样。Inissia能够确保机器高使用效率以及</div>
			<div class="nps-sping-color clearfix">
				<div class="fl nps-color">可选颜色</div>
				<div class="fl nps-color-yuan cl-green"></div>
				<div class="fl nps-color-yuan cl-grey"></div>
			</div>
		</div>
		<div class="fl nps-sping-two">
			<div class="nps-btn-lijian fr">立减100元</div>
			<div class="text-r nps-sping-jiage">CNY 766.00</div>
			<div class="text-r font-12 cl-65">售价</div>
			<div class="text-r font-12 cl-65 text-del">CNY 866.00</div>
		</div>
		<div class="fl margin-t-25 nps-margin">
			<a class="nps-btn-xijie">查看细节&amp;购买</a>
		</div>
	</div>
	</router-link>
</template>

<script>
export default {
	data () {
		return {
			machineLists: [{
				idView: require('../../../assets/sping.png'),
				title: 'dfhiuhg'
			}]
		}
	}
}
</script>

<style lang="less">
	@import '../css/machine.less';
</style>
