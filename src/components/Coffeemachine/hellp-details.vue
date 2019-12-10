<template>
	<div class="cl-black">
		<Full></Full>
		<div class="content">
			<div class="nps-black-details">
				<div class="nps-hepdetails-banner">
					<p class="font-18">咖啡机保养及维护</p>
					<p class="font-30">ESSENZA MINI</p>
					<router-link to="/Hellp">
						<a>
								<i class="el-icon-right nps-hellp-cl"></i>
								<span class="nps-hover">选择其他机器</span>
						</a>
					</router-link>
				</div>
				<div class="clearfix cl-font-white">
					<div class="fl nps-hepdetails-flet">
						<div class="nps-details-img">
							<img src="../../assets/details2.png" />
						</div>
						<div class="text-center nps-margin-bottom">Essenza Mini Nespresso C30 白色</div>
						<div class="nps-text-img"></div>
						<div class="nps-details-shouce">
							<p class="margin-b-15">用户手册</p>
							<div class="margin-b-5">
								<span><i class="el-icon-right nps-hellp-cl"></i></span>
								<a>
									<span>Essenza Mini C系列</span>
									<p class="padding-l-20">
										<span>2.03 MB</span>
										<span class="nps-hellp-cl">简体中文/英文</span>
									</p>
								</a>
							</div>
							<div class="margin-b-5">
								<span><i class="el-icon-right nps-hellp-cl"></i></span>
								<a>
									<span>Essenza Mini D系列</span>
									<p class="padding-l-20">
										<span>2.03 MB</span>
										<span class="nps-hellp-cl">简体中文/英文</span>
									</p>
								</a>
							</div>
						</div>
					</div>
					<div class="fl nps-details-right">
						<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
							<!-- 介绍指南和视频 -->
							<el-tab-pane label="介绍指南和视频" name="first">
								<router-view></router-view>
							</el-tab-pane>
							<!-- 故障排除 -->
							<el-tab-pane label="故障排除" name="second">
								<div class="clearfix padding-20 nps-position">
									<div class="fl nps-width">
										<div class="clearfix">
											<div class="fl nps-back-deta"></div>
											<div class="fl nps-width-derails">
												<div class="margin-b-5">指示灯不亮</div>
												<div>
													<ul>
														<li class="nps-li">- 检查供电，插头，电压和保险丝。 问题未解决，请致电Nespresso会员俱乐部。</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="nps-hen"></div>
									</div>
									<div class="fl nps-width">
										<div class="clearfix">
											<div class="fl nps-back-deta"></div>
											<div class="fl nps-width-derails">
												<div class="margin-b-5">指示灯不亮</div>
												<div>
													<ul>
														<li class="nps-li">- 检查供电，插头，电压和保险丝。 问题未解决，请致电Nespresso会员俱乐部。</li>
														<li class="nps-li">- 检查供电，插头，电压和保险丝。 问题未解决，请致电Nespresso会员俱乐部。</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="nps-hen"></div>
									</div>
								</div>
							</el-tab-pane>
							<!-- 概述 -->
							<el-tab-pane label="概述" name="third">
								<div class="padding-20">
									<div class="text-center nps-beijian">备件</div>
									<div class="text-center font-16">规格说明</div>
									<div class="clearfix padding-tb-20 nps-position">
										<div class="fl nps-width">
											<div class="clearfix">
												<div class="fl nps-back-deta"></div>
												<div class="fl nps-width-derails">
													<div class="margin-b-5">指示灯不亮</div>
													<div>
														<ul>
															<li class="nps-li">- 检查供电，插头，电压和保险丝。 问题未解决，请致电Nespresso会员俱乐部。</li>
														</ul>
													</div>
												</div>
											</div>
											<div class="nps-hen"></div>
										</div>
										<div class="fl nps-width">
											<div class="clearfix">
												<div class="fl nps-back-deta"></div>
												<div class="fl nps-width-derails">
													<div class="margin-b-5">指示灯不亮</div>
													<div>
														<ul>
															<li class="nps-li">- 检查供电，插头，电压和保险丝。 问题未解决，请致电Nespresso会员俱乐部。</li>
															<li class="nps-li">- 检查供电，插头，电压和保险丝。 问题未解决，请致电Nespresso会员俱乐部。</li>
														</ul>
													</div>
												</div>
											</div>
											<div class="nps-hen"></div>
										</div>
									</div>
								</div>
							</el-tab-pane>
						</el-tabs>
					</div>
				</div>
			</div>
		</div>
		<Hellpbottom></Hellpbottom>
	</div>
</template>

<script>
import Full from '@/components/Coffeemachine/common/full'
import Hellpbottom from '@/components/Coffeemachine/common/hellpbottom'
 export default {
	components: {
		Full,
		Hellpbottom
	},
	data () {
		return {
			activeName: 'first'
		}
	},
	methods: {
		handleClick (tab, event) {
			console.log(tab, event)
		}
	}
  }
</script>

<style lang="less">
@import './css/machine.less';
</style>
