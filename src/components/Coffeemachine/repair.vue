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
							<div v-html="v.title2"></div>
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
					<router-link to="/register">
						<span class="font-14 nps-repair-btn">现在注册</span>
					</router-link>
				</div>
			</div>
		</div>
		<div class="content cl-black">
			<Footer></Footer>
		</div>
	</div>
</template>

<script>
import Full from '@/components/Coffeemachine/common/full'
import Footer from '@/components/service/Footer'
export default {
	components: {
		Full,
		Footer
	},
	data () {
		return {
		// 0为默认选择第一个，-1为不选择
			activeClass: 0,
			list: [
				{title: '加入',
				title1: 'NESPERSSO 会员俱乐部',
				idView: require('../../assets/lopo2.png.png'),
				title2: "<p style='margin-bottom:20px'>加入 Nespresso 会员俱乐部，了解更多关于Nespresso产品系列.</p><p style='margin-bottom:20px'>The Nespresso 会员俱乐部每周七天24小时服务。拨打热线电话 4001 200600 或者加入我们 在线 提升您的咖啡体验。购买超过100颗胶囊，享受免运费服务。</p><p style='margin-bottom:20px'>如果您有任何关于Nespresso或者您的会员信息的疑问，请<a style='color:#986f38'>点击这里</a> 联系我们</p>",
				title3: '我如何加入Nespresso会员俱乐部?'
				},
				{
				title: '如何注册',
				title1: '我是咖啡机',
				idView: require('../../assets/lopo1.png'),
				title2: "<p style='margin-bottom:20px'>作为俱乐部会员，您将终身受益于我们的电话服务支持和机器故障排除服务。当您第一次注册的时候，请提供您的新机的序列号，以帮助我们为您提供个性化的客户帮助。您可以在机器的滴水托盘或机器背面找到这19位数的代码。</p><p style='margin-bottom:20px'>如何注册:</p><P class='nps-cll'><i class='el-icon-success cl'></i>拨打免费热线电话: 4001 200600</p><P class='nps-cll'><i class='el-icon-success cl'></i>访问 Nespresso 精品店</p><P class='nps-cll'><i class='el-icon-success cl'></i>在线注册</p>",
				title3: '我为什么需要注册/如何注册我的咖啡机?'
				},
				{
				title: '第一次',
				title1: '使用咖啡机',
				idView: require('../../assets/lopo1.png'),
				title2: "<p class='nps-p'>第一次使用贴士</p><P class='nps-cll'><i class='el-icon-success cl'></i>冲洗供水系统</p><P class='nps-cll'><i class='el-icon-success cl'></i>允许相当于水箱一半容量的水流穿过</p><P class='nps-cll'><i class='el-icon-success cl'></i>给水箱加满水，然后打开机器</p><P class='nps-cll'><i class='el-icon-success cl'></i>在咖啡机出水口下方放置容器</p><P class='nps-cll'><i class='el-icon-success cl'></i>利用剩余的一半水冲洗热水/蒸汽附件，已经写在您机器的操作说明中</p>",
				title3: '第一次使用您的Nespresso咖啡机'
				},
				{
				title: '维护',
				title1: '建议',
				idView: require('../../assets/lopo2.png.png'),
				title2: "<p class='margin-b-20'>Nespresso 系统邀您畅享美妙的咖啡时光，杯杯爱不释手。为帮助您保持高品质的咖啡体验，请注意下面的维护建议：</p><p class='margin-b-20'>制作咖啡之前，请用水流冲洗一遍(机器内没有胶囊的情况下)，避免流通系统里有咖啡粉残留。为保持意式特浓咖啡的温度和品质，请经常为机器除垢。会员俱乐部可以提供专为Nespresso系统和部件而设计的清洗设备。</p><p class='margin-b-20'>因为水质是冲调高品质意式特浓咖啡的关键，所以我们建议您每天都要给水箱重新加水。请经常清空您使用的胶囊容器和滴水盘，并定期用手清洗所有可拆卸部件。具体请参阅您的用户手册的维修建议。</p><p class='margin-b-20'><a class='cl'>查看咖啡机维护附件</a></p>",
				title3: '咖啡机维护建议'
				},
				{
				title: 'NESPRESSO',
				title1: '支持',
				idView: require('../../assets/lopo2.png.png'),
				title2: "<p class='margin-b-20'>你的机器需要立即帮助吗？我们的技术专家可以通过电话给您立即诊断。如果您的机器需要修复，我们提供了一个支持服务程序，包括</p><P class='nps-cll'><i class='el-icon-success cl'></i>在您选择的地址接收您的机器</p><P class='nps-cll'><i class='el-icon-success cl'></i>在机器维修期间内，获得备用机器。</p><P class='nps-cll'><i class='el-icon-success cl'></i>将您的机器返还到您的地址</p><P class='nps-cll'><i class='el-icon-success cl'></i>6个月机器保修期</p><p class='margin-b-20'><a class='cl'>观看机器保养视频</a></p>",
				title3: 'Nespresso 支持和维护'
				}
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
