<template>
	<div>
		<router-link to="/Hellpdetails">
		<div class="fl" v-for="(item,index) in list">
			<div class="nps-hellp-lists">
				<img src="../../../assets/hellp1.png" />
				<div class="text-center">{{item.name}}</div>
			</div>
		</div>
		</router-link>
	</div>
</template>

<script>
export default {
	data () {
		return {
			list:[
			  {name:'inssll'},
				{name: 'indddf'},
				{name: 'bbcccc'}
			]
		}
	}
}
</script>

<style lang="less">
	@import '../css/machine.less';
</style>
