<template>
  <div>
      <Tips></Tips>
      <div class="nps-en-ligne">
          <ul class="clearfix">
              <li class="nps-en-left delivery">
                  <div class="nps-en-modu"></div>
                  <div class="nps-en-list">
                      <p class="iconfont icon-huishou"></p>
                      <p class="margin-t-10 font-36">回收</p>
                      <p class="margin-tb-30 font-18">您可以通过在线、移动端或者电话全天候24小时订购最适合您需求的咖啡解决方案...</p>
                      <div class="nps-Enlist-content">
                          <ul class="clearfix">
                              <li style="margin-left: 169px;">
                                  <div class="nps-Enlist-list">
                                      <p class="iconfont icon-huishouzhan"></p>
                                      <p class="margin-tb-5 font-14">回收点</p>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </li>
              <li class="nps-en-right">
                      <div class="margin-b-35">
                          <div class="en-righti-title">回收点</div>
                          <h3 class="font-16 margin-b-20">回收点</h3>
                          <p class="margin-b-20">我们承诺向您提供优质咖啡，并承担责任共同致力于将我们对环境的影响降至最低，正因如此，我们竭力将循环利用变得简单。</p>
                      </div>
                      <div class="margin-b-35">
                          <div class="en-righti-title">我们如何实现咖啡胶囊的循环利用</div>
                          <p class="margin-b-20">如果您在日常享用咖啡的过程中，关注咖啡胶囊的循环利用，那么您的Nespresso咖啡胶囊将不只是美味，因为您还减少了对环境的影响。</p>
                          <p class="margin-b-20">将您的咖啡胶囊放在我们的Nespresso精品店。点击 <a class="recovery-link">此处</a>，查找离您最近的精品店。.</p>
                          <p class="margin-b-20">点击 <a class="recovery-link">此处</a>，了解更多我们的胶囊回收项目 .</p>
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
