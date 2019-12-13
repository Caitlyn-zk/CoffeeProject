<template>
	<div>
		<div class="fl nps-repair-center i-item" v-for="(v,k) in list" :key="key" :class="activeClass ==k?'active':''">
			<div class="nps-hover-it">
				<div class="nps-centen-img">
					<img :src="v.idView" class="image"  />
				</div>
				<div class="font-14" style="color: #fff;">
					<span @click="IsActive(k)">{{v.title}}</span>
					<span @click="IsActive(k)">{{v.title1}}</span>
				</div>
			</div>
			<div class="nps-bottom-san"></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeClass: -1,// 0为默认选择第一个，-1为不选择
			 list: [
				{title: '全网搜索(100w+)', title1: '维护', idView: require('../../assets/login1.png')},
				{title: '优惠推荐(包邮10w+)'},
				{title: '优惠推荐(包邮10w+)'},
				{title: '优惠推荐(包邮10w+)'},
			]
		}
	},
	methods: {
		IsActive(k) {
			this.activeClass = k
		}
	}
}
</script>

<style>
.active {
	border-bottom: 1px solid #FE4520;
	color: #FE4520;
}
</style>
