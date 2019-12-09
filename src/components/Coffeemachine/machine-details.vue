<template>
	<div>
	<Title></Title>
	<div class="content">
		<div class="nps-details margin-t-10 clearfix">
			<div class="fl">
				<router-link to="/Machine"><a class="nps-details-fanhui"><i class="el-icon-arrow-left"></i>返回至所有机器</a></router-link>
				<div class="">
					<el-carousel height="500px" direction="horizontal" :autoplay="false">
					<el-carousel-item v-for="item in imagesbox" :key="item.id">
					<img :src="item.idView" class="image"  />
					</el-carousel-item>
					</el-carousel>
				</div>
			</div>
			<div class="fl nps-top">
				<img src="https://www.nespresso.com/ecom/medias/sys_master/public/12078342537246/20181224-200x100-CN.png" alt="赠免费试用装">
			</div>
			<div class="fl nps-xiangqing">
				<div class="nps-mai-title">Inissia</div>
				<div class="nps-mai-title1">Inissia C40 红色</div>
				<div class="font-12">颜色</div>
				<div class="clearfix">
					<div class="nps-yuan cl-white fl" title="white">
						<div class="nps-yuanyuan dis"></div>
					</div>
					<div class="nps-yuan cl-grey fl" title="grey">
						<div class="nps-yuanyuan dis"></div>
					</div>
				</div>
				<div class="nps-btn-lijian margin-t-25">立减100元</div>
				<div class="text-l nps-sping-jiage">CNY 766.00</div>
				<div class="text-l font-12 margin-t-5 cl-65">售价</div>
				<div class="text-l font-12 text-del cl-65">CNY 866.00</div>
				<div class="nps-goumai">
					<a class="nps-btn-xijie nps-pa">
						<i class="el-icon-goods nps-i"></i>
						<span>添加至购物车</span>
						<i class="el-icon-plus nps-i1"></i>
					</a>
				</div>
			</div>
		</div>
		<div class="nps-details-explain">
			<Activity></Activity>
			<Activity1></Activity1>
		</div>
		<div class="nps-tuijian">
			<div class="cl-font-white">Nespresso为您推荐</div>
			<div class="clearfix">
				<div class="fl">
					<div class="nps-li-img1">
						<img src="../../assets/tui1.png">
						<div class="nps-li-color cl-font-white">Pure系列大杯咖啡碟组合</div>
					</div>
				</div>
				<div class="fl">
					<div class="nps-li-img1">
						<img src="../../assets/tui2.png">
						<div class="nps-li-color cl-font-white">TOUCH Wall</div>
					</div>
				</div>
			</div>
		</div>
		<div class="nps-live">
			<div class="nps-cl-font">你可能会喜欢</div>
			<div class="clearfix">
				<div class="fl">
					<div class="nps-img-live">
						<div class="nps-img-live-img">
							<div class="nps-live-div">
								<img src="../../assets/live1.png">
							</div>
							<div class="nps-live-jiage">黑色奶沫机</div>
							<div class="nps-live-jiage1">
								<span>CNY 800.00</span>
								<div class="fr lojdgf"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="fl">
					<div class="nps-img-live">
						<div class="nps-img-live-img">
							<div class="nps-live-div">
								<img src="../../assets/live2.png">
							</div>
							<div class="nps-live-jiage">TOUCH马克杯</div>
							<div class="nps-live-jiage1">
								<span>CNY 280.00</span>
								<div class="fr lojdgf"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="fl">
					<div class="nps-img-live">
						<div class="nps-img-live-img">
							<div class="nps-live-div">
								<img src="../../assets/live3.png">
							</div>
							<div class="nps-live-jiage">黄砂糖</div>
							<div class="nps-live-jiage1">
								<span>CNY 50.00</span>
								<div class="fr lojdgf"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
import Title from '@/components/Coffeemachine/common/title'
import Activity from '@/components/Coffeemachine/common/activity'
import Activity1 from '@/components/Coffeemachine/common/activity1'
export default {
	components: {
		Title,
		Activity,
		Activity1
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
