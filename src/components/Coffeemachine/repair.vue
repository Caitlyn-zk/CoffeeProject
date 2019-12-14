<template>
	<div>
		<Full></Full>
		<div class="nps-repair-bac">
			<div class="content">
				<div class="nps-repair-font">
					<div class="nps-repair-img-title clearfix">
						<div class="nps-repair-login fl">
						<img src="../../assets/biao.png">
						</div>
						<div class="fl nps-font-wing">欢迎来到 NESPRESSO</div>
					</div>
					<div class="nps-font-man">您刚刚购买了一台Nespresso咖啡机</div>
					<div>拥有一台Nespresso咖啡机，您可以尽情享受浓醇咖啡带来的生活愉悦，爱不释手。</div>
				</div>
			</div>
		</div>
			<!-- 咖啡机维修tab切换图 -->
		<div>
			<div class="nps-repair-tab">
				<div class="content clearfix list">
					<div class="fl clearfix">
						<div class="fl nps-repair-center" v-for="(v,k) in list" :key="k" :class="activeClass ==k?'i-item':''">
							<div class="nps-hover-it" @click="IsActive(k)">
								<div class="nps-centen-img">
									<img :src="v.idView" class="image"  />
								</div>
								<div class="font-14">
									<span>{{v.title}}</span>
									<div>
										<span>{{v.title1}}</span>
									</div>
								</div>
							</div>
							<div class="nps-bottom-san"></div>
						</div>
					</div>
				</div>
			</div>
			<!-- teb切换内容 -->
			<ul class="nps-tab">
				<li class="nps-repair-backk" v-for="(v,k) in list" :key="k" :class="activeClass ==k?'on':''">
					<div class="content">
						<div class="nps-repair-font fr cl-font-white">
								<div class="nps-font-man1">{{v.title3}}</div>
							<div>拥有一台Nespresso咖啡机，您可以尽情享受浓醇咖啡带来的生活愉悦，爱不释手。</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="nps-repair-back">
			<div class="content">
				<div class="nps-repair-font">
					<p class="margin-b-25 font-32 margin-t-25">您还没有Nespresso账户?</p>
					<p class="font-14 margin-b-20">享受Nespresso高质量咖啡，持续创新和可持续发展。</p>
					<p class="font-14 margin-b-20">你也可以获取我们的新闻、事件和独家提供的一次性购满100颗胶囊免运费的服务</p>
					<p class="font-14 margin-b-20"><i class="el-icon-arrow-left"></i>
					<span>p</span>
					<i class="el-icon-arrow-right"></i>加入Nespresso俱乐部，享受您的个性化服务。</p>
					<a>
						<span class="font-14 nps-repair-btn">现在注册</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Full from '@/components/Coffeemachine/common/full'
export default {
	components: {
		Full
	},
	data () {
		return {
		// 0为默认选择第一个，-1为不选择
			activeClass: 0,
			list: [
				{title: '加入',
				title1: 'NESPERSSO 会员俱乐部',
				idView: require('../../assets/lopo2.png.png'),
				title2: '第一页',
				title3: '我如何加入Nespresso会员俱乐部?'
				},
				{title: '如何注册',
				title1: '我是咖啡机',
				idView: require('../../assets/lopo2.png.png'),
				title2: '第二页',
				title3: '我为什么需要注册/如何注册我的咖啡机?'
				},
				{title: '第一次',
				title1: '使用咖啡机',
				idView: require('../../assets/lopo2.png.png'),
				title2: '第三页',
				title3: '第一次使用您的Nespresso咖啡机'
				},
				{title: '维护', title1: '建议', idView: require('../../assets/lopo2.png.png'), title2: '第四页'},
				{title: '维护', title1: '建议', idView: require('../../assets/lopo2.png.png'), title2: '第五页'}
			]
		}
	},
	methods: {
		IsActive (k) {
			this.activeClass = k
		}
	}
}
</script>

<style lang="less">
	@import './css/machine.less';
</style>
