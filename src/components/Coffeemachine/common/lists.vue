<template>
	<div>
	<div class="nps-title-sping clearfix" :key="index" v-for="(Lists,index) in machineLists" @click="gtepush(Lists)">
		<div class="fl nps-title-sping-img">
			<img :src="url + JSON.parse(Lists.cMachineImg)[0]" alt="列表图片" />
		</div>
		<div class="fl nps-sping-jiao">
			<div class="nps-sping-font">{{Lists.name}}</div>
			<div class="nps-sping-font1 overflow">{{Lists.manual}}</div>
			<div class="nps-sping-color clearfix">
				<div class="fl nps-color">可选颜色</div>
				<div class="fl nps-color-yuan" :class="sstt[index]"></div>
			</div>
		</div>
		<div class="fl nps-sping-two">
			<div class="nps-btn-lijian fr"><span>立减</span><span>100</span><span>元</span></div>
			<div class="text-r nps-sping-jiage"><span>CNY</span><span class="margin-l-5">{{Lists.price}}</span></div>
			<div class="text-r font-12 cl-65">售价</div>
			<div class="text-r font-12 cl-65 text-del"><span>CNY</span><span class="margin-l-5">{{Lists.discountPrice}}</span></div>
		</div>
		<div class="fl margin-t-25 nps-margin">
			<a class="nps-btn-xijie">查看细节&amp;购买</a>
		</div>
	</div>
	</div>
</template>

<script>
import { MachineLists } from 'commonjs/Requestaxios'
export default {
	data () {
		return {
			machineLists: {},
			url: 'http://192.168.97.240:3000/',
			sstt: ['cl-black', 'cl-grey', 'cl-green', 'cl-grey', 'cl-black', 'cl-grey', 'cl-green', 'cl-grey']
		}
	},
	methods: {
		datalists () {
			MachineLists({
				data: {
					id: this.machineLists.id
				},
				error: () => {
					this.$message({
						message: '错了错了'
					})
				},
				success: (res) => {
					console.log(res)
					if (res.status === 200) {
							// 存入vuex中
							this.$store.commit('changeCartcoffee', res.data)
							console.log(res.data)
							this.machineLists = res.data
					} else {
							this.$message({
								message: res.message,
								type: 'error',
								showClose: true,
								duration: 3000
						})
					}
				},
				error: (err) => {
					console.log(err)
				}
			})
		},
		gtepush (id) {
			this.$router.push({
				path: '/details',
				query: {
					id: id.id,
					name: id.name,
					cMachineImg: id.cMachineImg,
					price: id.price,
					discountPrice: id.discountPrice,
					value: id.value,
					manual: id.manual
				}
			})
		}
	},
	mounted () {
		this.datalists()
	}
}
</script>
<style lang="less">
	@import '../css/machine.less';
</style>
