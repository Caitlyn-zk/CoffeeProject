<template>
	<div>
		<Full></Full>
		<div class="nps-hellp-title">
			<div class="content">
				<div class="text-center">
					<p class="nps-font-cl">咖啡机保养及维护</p>
					<p class="font-16 nps-font-p">Nespresso会员俱乐部提供详细的产品使用说明与入门指南，协助您使用咖啡机及奶泡机。请在以下产品中选择您的机型，即可查询相关信息。</p>
					<div class="nps-input">
						<input type="text" v-model="search" placeholder="输入机器名字或者序列号"/>
						<div class="nps-btn-right">
							<i class="el-icon-arrow-right"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="cl-black nps-hellp-jiqi">
			<div class="content margin-t-20">
				<div class="text-center font-32 margin-b-20">
					选择你的机器
				</div>
				<div class="clearfix">
					<div>
						<router-link to="/Hellpdetails">
							<div class="fl" v-for="(item,index) in items" :key="index">
								<div class="nps-hellp-lists">
									<img :src="item.img" class="image"  />
									<div class="text-center">{{item.msg}}</div>
								</div>
							</div>
						</router-link>
					</div>
				</div>
			</div>
			<Hellpbottom></Hellpbottom>
		</div>
		<div class="content cl-black">
			<Footer></Footer>
		</div>
	</div>
</template>

<script>
import Full from '@/components/Coffeemachine/common/full'
import Hellpbottom from '@/components/Coffeemachine/common/hellpbottom'
import Footer from '@/components/service/Footer'
export default {
	components: {
		Full,
		Hellpbottom,
		Footer
	},
	data () {
		return {
			// 存放输入的文字
			search: '',
			list: [
			{
			msg: 'Inissia',
			img: require('../../assets/hellp1.png')
			},
			{
			msg: 'Essenza Mini',
			img: require('../../assets/hellp5.png')
			},
			{
			msg: 'Pixie',
			img: require('../../assets/hellp6.png')
			},
			{
			msg: 'Pixie Clips',
			img: require('../../assets/hellp7.png')
			},
			{
			msg: 'Citiz',
			img: require('../../assets/hellp8.png')
			},
			{
			msg: 'U',
			img: require('../../assets/hellp9.png')
			},
			{
			msg: 'Expert',
			img: require('../../assets/hellp10.png')
			},
			{
			msg: 'Lattissima Touch',
			img: require('../../assets/hellp11.png')
			},
			{
			msg: 'Lattissima Pro',
			img: require('../../assets/hellp12.png')
			},
			{
			msg: 'Creatista',
			img: require('../../assets/hellp13.png')
			},
			{
			msg: 'Aeroccino3',
			img: require('../../assets/hellp14.png')
			},
			{
			msg: 'Aeroccino4',
			img: require('../../assets/hellp15.png')
			}
			]
		}
	},
	computed: {
		// 筛选所有的字段
		items: function () {
			var _search = this.search
			if (_search) {
				// 不区分大小写处理
				var reg = new RegExp(_search, 'ig')
				// es6 filter过滤匹配，有则返回当前，无则返回所有
				return this.list.filter(function (e) {
					// 匹配所有字段
					return Object.keys(e).some(function (key) {
						return e[key].match(reg)
					})
				})
		}
		return this.list
		}
	}
}
</script>

<style lang="less" scoped>
	@import './css/machine.less';
</style>
