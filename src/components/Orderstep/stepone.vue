<template>
  <div class="content clearfix font-12">
    <!-- 左边部分 -->
    <div class="nps-orderstep-left fl margin-t-20">
      <div class="nps-orderstep-cont">
        <ul class="nps-orderstep-lists clearfix">
          <li class="padding-lr-20">
            <span>Original咖啡胶囊</span>
            <span>(100)</span>
          </li>
          <li class="text-center">单价</li>
          <li class="text-center">数量</li>
          <li class="text-center">总额</li>
        </ul>
        <ul class="nps-orderstep-lists nps-orderstep-lists-descript clearfix font-14">
          <li class="nps-stepone-list clearfix">
            <div class="nps-order-lists-img fl">
              <img src="./img/nps-orderstep1.jpg">
            </div>
            <div class="nps-orderstep-lists-kind font-14">
              <span>Original咖啡胶囊</span>
            </div>
          </li>
          <li class="text-center nps-stepone-list">RMB 401.00</li>
          <li class="text-center nps-stepone-list">1</li>
          <li class="text-center nps-stepone-list">RMB 401.00 <span class="font-20"><i class="el-icon-close"></i></span></li>
        </ul>
        <div class="nps-orderstep-return-box">
          <span><i class="el-icon-arrow-left"></i></span>
          <a>返回在线商店</a>
        </div>
        <ul class="nps-stepone-detail-lists">
          <li class="padding-20 nps-stepone-num">
            <p class="nps-stepone-mon"><span>总额：</span><span>咖啡胶囊(100)</span></p>
          </li>
          <li class="padding-20 clearfix nps-stepone-num">
            <div class="nps-stepone-detail-left fl">
              <span>小结</span>
            </div>
            <div class="nps-stepone-detail-right text-r fr">
              <span>RMB 401.00</span>
            </div>
          </li>
          <li class="padding-20 clearfix nps-stepone-num">
            <div class="nps-stepone-detail-left fl">
              <span>增值税（包含）</span>
            </div>
            <div class="nps-stepone-detail-right text-r fr">
              <span>RMB 461.13</span>
            </div>
          </li>
          <li class="padding-20 clearfix nps-stepone-num last">
            <div class="nps-stepone-detail-left fl">
              <span class="nps-orderstep-total font-16">总计</span>
            </div>
            <div class="nps-stepone-detail-right text-r fr">
              <span class="font-16">RMB 401.00</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="nps-step-btn-box clearfix">
        <a @click="changeS" class="nps-step-btn fr clearfix">继续支付
          <span class="fr font-16"><i class="el-icon-arrow-right"></i></span>
        </a>
      </div>
    </div>
    <!-- 右边部分 -->
    <div class="nps-orderstep-right fr">
      <div class="nps-orderstep-right-cont">
        <p class="nps-stepone-right-title font-16 padding-tb-20">Nespresso推荐</p>
        <ul class="nps-stepone-right-lists">
          <li class="padding-tb-20">
            <div class="nps-stepone-right-img">
              <img src="./img/nps-orderstep2.jpg">
            </div>
            <div class="nps-stepone-cup margin-tb-10">VIEW 卡布奇诺咖啡杯</div>
            <div class="nps-stepone-present">
              <p class="nps-stepone-present-main font-14">消费满350元即可尊享免运费</p>
              <p> 一组2个钢化玻璃材质的Cappuccino咖啡杯（约180ml）和2个18/10不锈钢材质的杯碟，带有明亮的刷面处理。</p>
              <div class="nps-stepone-addpresent margin-tb-10">
                <a class="nps-stepone-add font-14">添加礼品</a>
              </div>
            </div>
          </li>
          <li class="padding-tb-20">
            <div class="nps-stepone-right-img">
              <img src="./img/nps-orderstep3.jpg">
            </div>
            <div class="nps-stepone-cup margin-tb-10">节日精选限量版风味咖啡5条装</div>
            <div class="nps-stepone-present">
              <div class="nps-stepone-present-main font-14 clearfix">
                <div class="fl nps-stepone-right-num font-12">RMB 229.00</div>
                <div class="fr">
                  <Steponeadd></Steponeadd>
                </div>
              </div>
            </div>
          </li>
          <li class="padding-tb-20">
            <div class="nps-stepone-right-img">
              <img src="./img/nps-orderstep4.jpg">
            </div>
            <div class="nps-stepone-cup margin-tb-10">大师匠心之作系列 五条装</div>
            <div class="nps-stepone-present">
              <div class="nps-stepone-present-main font-14 clearfix">
                <div class="fl nps-stepone-right-num font-12">RMB 225.00</div>
                <div class="fr">
                  <Steponeadd></Steponeadd>
                </div>
              </div>
            </div>
          </li>
          <li class="padding-tb-20">
            <div class="nps-stepone-right-img">
              <img src="./img/nps-orderstep5.jpg">
            </div>
            <div class="nps-stepone-cup margin-tb-10">TOUCH随行杯</div>
            <div class="nps-stepone-present">
              <div class="nps-stepone-present-main font-14 clearfix">
                <div class="fl nps-stepone-right-num font-12">RMB 239.00</div>
                <div class="fr">
                  <Steponeadd></Steponeadd>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Steponeadd from '../Order/shopping-add'
export default {
  components: {
    Steponeadd
  },
  props: {
    changeStep: Function
  },
  methods: {
    changeS () {
      this.changeStep(2)
    }
  }
}
</script>

<style lang="less" scoped>
@import './css/orderstep.less';
</style>
