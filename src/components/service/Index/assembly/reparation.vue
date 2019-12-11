<template>
  <div>
      <Tips></Tips>
      <div class="nps-en-ligne">
          <ul class="clearfix">
              <li class="nps-en-left active">
                  <div class="nps-en-modu"></div>
                  <div class="nps-en-list">
                      <p class="iconfont icon-fuwu"></p>
                      <p class="margin-t-10 font-36">客户服务</p>
                      <p class="margin-tb-30 font-18">您可以通过在线、移动端或者电话全天候24小时订购最适合您需求的咖啡解决方案...</p>
                      <div class="nps-Enlist-content">
                          <ul class="clearfix">
                              <li>
                                  <div class="nps-Enlist-list">
                                      <p class="iconfont icon-weibiaoti-"></p>
                                      <p class="margin-tb-5 font-14">咖啡机技术支持</p>
                                  </div>
                              </li>
                              <li>
                                  <div class="nps-Enlist-list">
                                      <p class="iconfont icon-fuwu"></p>
                                      <p class="margin-tb-5 font-14">24/7客户服务</p>
                                  </div>
                              </li>
                              <li>
                                  <div class="nps-Enlist-list">
                                      <p class="iconfont icon-xizhuang"></p>
                                      <p class="margin-tb-5 font-14">维修服务/租赁</p>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </li>
              <li class="nps-en-right">
                      <div class="margin-b-35">
                          <div class="en-righti-title">咖啡机技术支持</div>
                          <h3 class="font-16 margin-b-15">实现咖啡机的最大化利用</h3>
                          <p class="margin-b-15">您是否想要一些建议，让您的咖啡机始终流畅运转呢？我们乐意帮助。我们为您提供咖啡机清洁、除垢和预设，甚至解决潜在问题的建议。</p>
                          <p class="margin-b-15">我们提供免费配送（购物满350元或任意一台咖啡机或任意100粒胶囊），还有其它灵活的配送选项，满足您的需求。</p>
                      </div>
                      <div class="margin-b-35">
                          <div class="en-righti-title">电话订购</div>
                          <h3 class="font-16 margin-b-15">指尖的NESPRESSO</h3>
                          <p class="margin-b-15">您当然希望您的Nespresso咖啡机从未出现任何问题，我们十分理解。但是，如果确实出现意外情况，我们将会为您排忧解难。</p>
                          <div>技术诊断</div>
                          <p class="margin-b-15">欢迎拨打我们的免费电话 我们将通过直接的电话协助帮助您立即进行咖啡机诊断，然后为您提供最佳的解决方案。您可以通过拨打我们的客服电话4001200600，联系我们的咖啡专员，或者要求回电。我们每周七天，全天为您提供服务。</p>
                      </div>
                      <div class="margin-b-35">
                          <div class="en-righti-title">维修服务/租赁</div>
                          <h3 class="font-16 margin-b-15">您的咖啡机出现故障？我们为您解决</h3>
                          <p class="margin-b-15">我们的支持服务包括在您家中提走咖啡机，然后在您的咖啡机维修期间，为您提供备用咖啡机。如果您的咖啡机在保修期内，将免除一切费用。</p>
                          <p class="margin-b-15">* 如果依然处于制造商保修期内且在维修国内购买，则提供维护服务。如果不在保修期内，则会提供优惠。具体条款可致电4001200600详询。</p>
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
