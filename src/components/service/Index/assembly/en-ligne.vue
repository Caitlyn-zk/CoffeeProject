<template>
  <div>
      <Tips></Tips>
      <div class="nps-en-ligne">
          <ul class="clearfix">
              <li class="nps-en-left">
                  <div class="nps-en-modu"></div>
                  <div class="nps-en-list">
                      <p class="iconfont icon-suo"></p>
                      <p class="margin-t-10 font-36">订购</p>
                      <p class="margin-tb-30 font-18">您可以通过在线、移动端或者电话全天候24小时订购最适合您需求的咖啡解决方案...</p>
                      <div class="nps-Enlist-content">
                          <ul class="clearfix">
                              <li>
                                  <div class="nps-Enlist-list">
                                      <p class="iconfont icon-suo"></p>
                                      <p class="margin-tb-5 font-14">线上</p>
                                  </div>
                              </li>
                              <li>
                                  <div class="nps-Enlist-list">
                                      <p class="iconfont icon-shouji"></p>
                                      <p class="margin-tb-5 font-14">手机订购</p>
                                  </div>
                              </li>
                              <li>
                                  <div class="nps-Enlist-list">
                                      <p class="iconfont icon-8"></p>
                                      <p class="margin-tb-5 font-14">精品店订购</p>
                                  </div>
                              </li>
                              <li style="margin-left:172px;">
                                  <div class="nps-Enlist-list">
                                      <p class="iconfont icon-002dianhua"></p>
                                      <p class="margin-tb-5 font-14">电话订购</p>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </li>
              <li class="nps-en-right">
                  <div class="nps-On-line">
                      <div class="en-righti-title">在线订购</div>
                      <div class="nps-right-btn">
                          <a class="nps-add-button">订购胶囊</a>
                      </div>
                  </div>
                  <div class="nps-phone">
                      <div class="en-righti-title">手机订购</div>
                      <h3 class="font-16 margin-b-15">口袋里的NESPRESSO精品店</h3>
                      <p>通过我们的移动应用联系我们，享受我们的客户服务，包括随时随地订购您最爱的咖啡胶囊。</p>
                      <p>我们提供免费配送（购物满350元或任意一台咖啡机或任意100粒胶囊），还有其它灵活的配送选项，满足您的需求。</p>
                      <h3 class="font-16 margin-b-15">移动应用方便吗？我们认为是方便的。</h3>
                      <p>通过Nespresso移动应用，您可以：</p>
                      <p></p>
                      <ul>
                          <li>轻松订购您的咖啡</li>
                          <li>查找附近的精品店</li>
                          <li>了解最新的Nespresso资讯</li>
                      </ul>
                  </div>
                  <div class="nps-shop-phone">
                      <div class="en-righti-title">在精品店内下订单</div>
                      <h3 class="font-16 margin-b-15">在精品店内下订单</h3>
                      <p>全球各地的Nespresso精品店热忱欢迎像您这样的咖啡爱好者体验我们的咖啡文化。</p>
                      <p>在距您最近的精品店体验Nespresso的世界。在这里， 邀请您和我们的咖啡专家们一起发现和品尝我们完整的咖啡系列。他们很乐意帮助您选择适合您个人口味的理想咖啡。</p>
                      <p>我们也欢迎您参与Nespresso咖啡咖啡品鉴课，将与您一起分享咖啡的秘密。</p>
                      <p>另外，不要忘记将使用过的咖啡胶囊送还至您所在地的Nespresso精品店。在您品鉴一杯我们咖啡专家制备的Nespresso时，我们将负责开展咖啡胶囊的循环利用。</p>
                  </div>
                  <div class="nps-shop-call">
                      <div class="en-righti-title">电话订购</div>
                      <h3 class="font-16 margin-b-15">指尖的NESPRESSO</h3>
                      <p>我们的咖啡专员全天候24小时在线，为您在咖啡选择时提供建议，以及确保您的订单完全按照您的需求送达。</p>
                      <p>欢迎拨打我们的免费电话 4001200600。我们将尽快为您配送（购买100颗及以上的咖啡胶囊，任意咖啡机或者购物满350元即可享受免费配送）</p>
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
