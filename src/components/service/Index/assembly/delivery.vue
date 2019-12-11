<template>
  <div>
      <Tips></Tips>
      <div class="nps-en-ligne">
          <ul class="clearfix">
              <li class="nps-en-left delivery">
                  <div class="nps-en-modu"></div>
                  <div class="nps-en-list">
                      <p class="iconfont icon-yunshupeisong"></p>
                      <p class="margin-t-10 font-36">配送</p>
                      <p class="margin-tb-30 font-18">您可以通过在线、移动端或者电话全天候24小时订购最适合您需求的咖啡解决方案...</p>
                      <div class="nps-Enlist-content">
                          <ul class="clearfix">
                              <li style="margin-left:80px;">
                                  <div class="nps-Enlist-list">
                                      <p class="iconfont icon-yunshupeisong"></p>
                                      <p class="margin-tb-5 font-14">标准配送</p>
                                  </div>
                              </li>
                              <li>
                                  <div class="nps-Enlist-list">
                                      <p class="iconfont icon-wuliupeisong-"></p>
                                      <p class="margin-tb-5 font-14">2个工作日快速到货</p>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </li>
              <li class="nps-en-right">
                      <div class="margin-b-35">
                          <div class="en-righti-title">标准配送</div>
                          <h3 class="font-16 margin-b-15">享用一杯NESPRESSO</h3>
                          <p class="margin-b-15">您是否希望在最方便您的时间接收咖啡胶囊或者其他的Nespresso产品呢？当然没问题。您可以全天候24小时下订单。我们将尽快安排配送（购买100颗及以上的咖啡胶囊，任意咖啡机或者购物满340元即可享受免费配送），确保您可以尽快享用。</p>
                      </div>
                      <div class="margin-b-35">
                          <div class="en-righti-title">两个工作日快速到货</div>
                          <h3 class="font-16 margin-b-15">全天候享用您的NESPRESSO</h3>
                          <p class="margin-b-15">京/上海地区订单， 您可在两个工作日内收到所购买产品。</p>
                      </div>
              </li>
          </ul>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../Footer'
import Tips from '../../Tips'
export default {
    components: {
        Footer,
        Tips
    }
}
</script>
<style lang="less">
@import '../../css/Customer.less';
@import '../../font/iconfont.less';
</style>
