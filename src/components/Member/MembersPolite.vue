<template>
  <div class="polite content">
      <div class="polite-title-box content">
        <div class="polite-title-content">
            <ul class="polite-title-text-lists">
            <li class="new-meber">nespresso新会员?</li>
            <li class="welcome-members">会员迎新礼</li>
            <li class="border">
                <img src="./meberImg/lyk-polite-border.png"/>
            </li>
            <li class="">我们为您准备了会员迎新礼，快来挑选适合您的探索系列咖啡胶囊与赠礼。</li>
            </ul>
        </div>
      </div>
      <!-- tab切换盒子 -->
      <div class="content coffee-capsule">
          <div class="coffee-capsule-content">
              <ul class="coffee-capsule-lists">
                  <li class="coffee-capsule-title">探索系列咖啡胶囊套装（150颗装）</li>
                  <li class="coffee-capsule-detail">
                    新会员完成在线注册，并于前三笔订单中购买任一 Nespresso 探索系列咖啡胶囊套装（150颗装或100颗装），即可享
                    <span>配件赠礼一份</span>:
                  </li>
                  <li class="coffee-capsule-detail">
                    购买150颗装可从两项赠礼中，任选一项：(1) Discovery Box 胶囊展示盒（RMB 400）  或 (2) VIEW Espresso & Lungo 咖啡杯盘组 (RMB 480)；购买100颗装可获赠 VIEW卡布奇诺杯组（RMB260)
                  </li>
                  <li class="coffee-capsule-detail last">
                    *每位会员限享有一次免费迎新配件赠礼
                  </li>
              </ul>
              <!-- 切换的盒子 -->
              <div class="capsule-tab-box">
                <ul class="capsule-tabLists">
                  <li class="capsule-tabList one" @click="changeTab(1)" :class="{active:isActive == 1}">
                      <div class="">
                          <img src="./meberImg/lyk-capsule-tab.png"/>
                          <span class="capsule-tab-introduce">致爱精选礼盒</span>
                          <span class="capsule-tab-icon one"></span>
                      </div>
                  </li>
                  <li class="capsule-tabList two" @click="changeTab(2)"  :class="{active:isActive == 2}">
                      <div class="">
                          <img src="./meberImg/lyk-capsule-tab.png"/>
                          <span class="capsule-tab-introduce">环球臻享礼盒</span>
                          <span class="capsule-tab-icon two"></span>
                      </div>
                  </li>
                  <li class="capsule-tabList three" @click="changeTab(3)"  :class="{active:isActive == 3}">
                      <div class="">
                          <img src="./meberImg/lyk-capsule-tab.png"/>
                          <span class="capsule-tab-introduce">浓醇一刻礼盒</span>
                          <span class="capsule-tab-icon three"></span>
                      </div>
                  </li>
                </ul>
              </div>
              <component :is="isShow"></component>
          </div>
          <!-- 立即注册 -->
          <div class="capsule-registration-content">
              <div class="capsule-register-box">
                  <span class="capsule-register-btn"><a>立即注册会员！</a></span>
                  <div class="capsule-register-tip">*配件赠礼仅限于 Nespresso 新会员/ 赠礼实物不含照片中之咖啡胶囊</div>
              </div>
              <div class="capsule-register-box two">
                  <div class="capsule-register-title">轻松三步骤，享有迎新好礼</div>
                  <ul class="capsule-register-step-box">
                      <li class="capsule-register-step">
                          <div class="capsule-register-step-number">1</div>
                          <div class="capsule-register-step-tip">注册</div>
                      </li>
                      <li class="capsule-register-step">
                          <div class="capsule-register-step-number">2</div>
                          <div class="capsule-register-step-tip">挑选您喜爱的胶囊套装</div>
                      </li>
                      <li class="capsule-register-step">
                          <div class="capsule-register-step-number">3</div>
                          <div class="capsule-register-step-tip">选择配件赠礼</div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="content">
        <lastFooter></lastFooter>
      </div>
  </div>
</template>

<script>
import beloved from './politeSon/beloved'
import alcohol from './politeSon/alcohol'
import enjoyment from './politeSon/enbjoyment'
import lastFooter from '../service/Footer'
export default {
    data () {
        return {
            isShow: beloved,
            isActive: 1
        }
    },
    components: {
        beloved,
        alcohol,
        enjoyment,
        lastFooter
    },
    methods: {
        changeTab (value) {
            if (value === 1) {
                this.isShow = beloved
                this.isActive = value
            } else if (value === 2) {
                this.isActive = value
                this.isShow = enjoyment
            } else {
                this.isActive = value
                this.isShow = alcohol
            }
        }
    },
    computed: {
    }
}
</script>

<style lang="less" scoped>
@import './merberStyle/polite.less';
</style>
