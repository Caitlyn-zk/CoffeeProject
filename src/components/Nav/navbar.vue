<template>
  <div class="nps-navbar">
    <ul class="nps-navbar-content content">
      <!-- 特惠活动 -->
      <li class="nps-navbar-list nps-navbar-specialOffers active">
        <!-- 左侧白边突出，加1px左边框 -->
        <div class="nps-navbar-left-border"></div>
        <div class="nps-navbar-img nps-navbar-img-specialOffers">
          <!-- 导航上边，少了白边，使用定位弥补 -->
          <div class="nps-navbar-filler"></div>
        </div>
        <h3>特惠活动</h3>
        <div class="nps-navbar-secondaryMenu nps-navbar-secondaryMenu-specialOffers clearfix">
          <li class="specialOffers-list">
            <p>购买任意的咖啡胶囊即可获赠一套大杯品饮杯购买任意的咖啡胶囊即可获赠一套大杯品饮杯</p>
            <div class="specialOffers-img">
              <img src="./img/gzt-nav-1.png" alt="">
            </div>
          </li>
          <li class="specialOffers-list">
            <p>购买任意的咖啡胶囊即可获赠一套大杯品饮杯</p>
            <div class="specialOffers-img">
              <img src="./img/gzt-nav-1.png" alt="">
            </div>
          </li>
          <li class="specialOffers-list">
            <p>购买任意的咖啡胶囊即可获赠一套大杯品饮杯</p>
            <div class="specialOffers-img">
              <img src="./img/gzt-nav-1.png" alt="">
            </div>
          </li>
          <li class="specialOffers-list">
            <div class="specialOffers-img">
              <img class="specialOffers-img-4" src="./img/gzt-nav-4.jpg" alt="">
            </div>
          </li>
        </div>
      </li>
      <!-- 咖啡胶囊 -->
      <li class="nps-navbar-list nps-navbar-coffeeCapsule">
        <div class="nps-navbar-img nps-navbar-img-coffeeCapsule">
          <!-- 导航上边，少了白边，使用定位弥补 -->
          <div class="nps-navbar-filler"></div>
        </div>
        <h3>咖啡胶囊</h3>
        <div class="nps-navbar-secondaryMenu nps-navbar-secondaryMenu-coffeeCapsule">
          <li class="coffeeCapsule-list">
            <p>购买任意的咖啡胶囊即可获赠一套大杯品饮杯购买任意的咖啡胶囊即可获赠一套大杯品饮杯</p>
            <div class="coffeeCapsule-img">
              <img src="./img/gzt-nav-1.png" alt="">
            </div>
          </li>
          <li class="coffeeCapsule-list">
            <div class="coffeeCapsule-list-box">
              <img src="./img/gzt-nav-22.png" alt="">
              <span class="coffeeCapsule-list-box-text">探索优选咖啡胶囊</span>
            </div>
            <div class="coffeeCapsule-list-box">
              <img src="./img/gzt-nav-22.png" alt="">
              <span class="coffeeCapsule-list-box-text">探索优选咖啡胶囊</span>
            </div>
          </li>
          <li class="coffeeCapsule-list">
            <div class="coffeeCapsule-list-box">
              <img src="./img/gzt-nav-22.png" alt="">
              <span class="coffeeCapsule-list-box-text">探索优选咖啡胶囊</span>
            </div>
            <div class="coffeeCapsule-list-box">
              <img src="./img/gzt-nav-22.png" alt="">
              <span class="coffeeCapsule-list-box-text">探索优选咖啡胶囊</span>
            </div>
          </li>
          <li class="coffeeCapsule-list">
            <div class="coffeeCapsule-img">
              <img class="coffeeCapsule-img-4" src="./img/gzt-nav-4.jpg" alt="">
            </div>
          </li>
        </div>
      </li>
      <!-- 咖啡机 -->
      <li class="nps-navbar-list nps-navbar-coffeeMachine">
        <div class="nps-navbar-img nps-navbar-img-coffeeMachine">
          <!-- 导航上边，少了白边，使用定位弥补 -->
          <div class="nps-navbar-filler"></div>
        </div>
        <h3>咖啡机</h3>
        <div class="nps-navbar-secondaryMenu nps-navbar-secondaryMenu-coffeeMachine">
          <li class="coffeeMachine-list">
            <p>购买任意的咖啡胶囊即可获赠一套大杯品饮杯购买任意的咖啡胶囊即可获赠一套大杯品饮杯</p>
            <div class="coffeeMachine-img">
              <img src="./img/gzt-nav-1.png" alt="">
            </div>
          </li>
          <li class="coffeeMachine-list">
            <div class="coffeeMachine-list-box">
              <img src="./img/gzt-nav-22.png" alt="">
              <span class="coffeeMachine-list-box-text">探索优选咖啡胶囊</span>
            </div>
            <div class="coffeeMachine-list-box">
              <img src="./img/gzt-nav-22.png" alt="">
              <span class="coffeeMachine-list-box-text">探索优选咖啡胶囊</span>
            </div>
          </li>
          <li class="coffeeMachine-list">
            <div class="coffeeMachine-list-box">
              <img src="./img/gzt-nav-22.png" alt="">
              <span class="coffeeMachine-list-box-text">探索优选咖啡胶囊</span>
            </div>
            <div class="coffeeMachine-list-box">
              <img src="./img/gzt-nav-22.png" alt="">
              <span class="coffeeMachine-list-box-text">探索优选咖啡胶囊</span>
            </div>
          </li>
          <li class="coffeeMachine-list">
            <div class="coffeeMachine-img">
              <img class="coffeeMachine-img-4" src="./img/gzt-nav-4.jpg" alt="">
            </div>
          </li>
        </div>
      </li>
      <!-- 会员 -->
      <li class="nps-navbar-list nps-navbar-vipMember">
        <router-link to="/member">
          <div class="nps-navbar-img nps-navbar-img-vipMember">
            <!-- 导航上边，少了白边，使用定位弥补 -->
            <div class="nps-navbar-filler"></div>
          </div>
          <h3 class="vipMember-title">会员有礼</h3>
          <div class="nps-navbar-secondaryMenu nps-navbar-secondaryMenu-vipMember">
            <li class="vipMember-list">
              <p>购买任意的咖啡胶囊即可获赠一套大杯品饮杯购买任意的咖啡胶囊即可获赠一套大杯品饮杯</p>
              <div class="vipMember-img">
                <img src="./img/gzt-nav-1.png" alt="">
              </div>
            </li>
            <li class="vipMember-list">
              <router-link to="/polite">
                <p class="vipMember-list-title">会员礼遇</p>
                <div class="vipMember-img">
                  <img src="./img/gzt-nav-1.png" alt="">
                </div>
              </router-link>
            </li>
            <li class="vipMember-list">
              <router-link to="/favorite">
                <p class="vipMember-list-title">专属礼物</p>
                <div class="vipMember-img">
                  <img src="./img/gzt-nav-1.png" alt="">
                </div>
              </router-link>
            </li>
            <li class="vipMember-list">
              <div class="vipMember-img">
                <img class="vipMember-img-4" src="./img/gzt-nav-4.jpg" alt="">
              </div>
            </li>
          </div>
        </router-link>
      </li>
      <!-- 顾客服务 -->
      <li class="nps-navbar-list nps-navbar-customerService">
        <div class="nps-navbar-img nps-navbar-img-customerService">
          <!-- 导航上边，少了白边，使用定位弥补 -->
          <div class="nps-navbar-filler"></div>
        </div>
        <h3>顾客服务</h3>
        <div class="nps-navbar-secondaryMenu nps-navbar-secondaryMenu-customerService">
          <li class="customerService-list">
            <div class="customerService-list-box">
              <img src="./img/gzt-nav-22.png" alt="">
              <span class="customerService-list-box-text">探索优选咖啡胶囊</span>
            </div>
            <div class="customerService-list-box">
              <img src="./img/gzt-nav-22.png" alt="">
              <span class="customerService-list-box-text">探索优选咖啡胶囊</span>
            </div>
          </li>
          <li class="customerService-list">
            <div class="customerService-list-box">
              <img src="./img/gzt-nav-22.png" alt="">
              <span class="customerService-list-box-text">探索优选咖啡胶囊</span>
            </div>
            <div class="customerService-list-box">
              <img src="./img/gzt-nav-22.png" alt="">
              <span class="customerService-list-box-text">探索优选咖啡胶囊</span>
            </div>
          </li>
          <li class="customerService-list">
            <p>购买任意的咖啡胶囊即可获赠一套大杯品饮杯购买任意的咖啡胶囊即可获赠一套大杯品饮杯</p>
            <div class="customerService-img">
              <img src="./img/gzt-nav-1.png" alt="">
            </div>
          </li>
          <li class="customerService-list">
            <div class="customerService-img">
              <img class="customerService-img-4" src="./img/gzt-nav-4.jpg" alt="">
            </div>
          </li>
        </div>
      </li>
      <!-- 联系我们 -->
      <li class="nps-navbar-list nps-navbar-contactUs">
        <div class="nps-navbar-img nps-navbar-img-contactUs">
          <!-- 导航上边，少了白边，使用定位弥补 -->
          <div class="nps-navbar-filler"></div>
        </div>
        <h3>联系我们</h3>
        <div class="nps-navbar-secondaryMenu nps-navbar-secondaryMenu-contactUs">
          <li class="contactUs-list">
            <p>购买任意的咖啡胶囊即可获赠一套大杯品饮杯购买任意的咖啡胶囊即可获赠一套大杯品饮杯</p>
            <div class="contactUs-img">
              <img src="./img/gzt-nav-1.png" alt="">
            </div>
          </li>
          <li class="contactUs-list">
            <div class="contactUs-list-box">
              <img src="./img/gzt-nav-22.png" alt="">
              <span class="contactUs-list-box-text">探索优选咖啡胶囊</span>
            </div>
            <div class="contactUs-list-box">
              <img src="./img/gzt-nav-22.png" alt="">
              <span class="contactUs-list-box-text">探索优选咖啡胶囊</span>
            </div>
          </li>
          <li class="contactUs-list">
            <div class="contactUs-list-box">
              <img src="./img/gzt-nav-22.png" alt="">
              <span class="contactUs-list-box-text">探索优选咖啡胶囊</span>
            </div>
            <div class="contactUs-list-box">
              <img src="./img/gzt-nav-22.png" alt="">
              <span class="contactUs-list-box-text">探索优选咖啡胶囊</span>
            </div>
          </li>
          <li class="contactUs-list">
            <div class="contactUs-img">
              <img class="contactUs-img-4" src="./img/gzt-nav-4.jpg" alt="">
            </div>
          </li>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
@import './less/navbar.less';
</style>
