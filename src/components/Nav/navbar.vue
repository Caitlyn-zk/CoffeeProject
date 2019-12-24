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
            <p class="font-14">购买任意的200颗咖啡胶囊（不含迎新礼盒）即可获赠一套大杯品饮杯</p>
            <div class="specialOffers-img">
              <router-link to="/caphome">
                <img src="./img/gzt-nav-1.png" alt="" width="80%" height="80%">
              </router-link>
            </div>
          </li>
          <li class="specialOffers-list">
            <p class="font-14">购买CltiZ银色咖啡机立减200元，且送一个价值800元的黑色奶沫机</p>
            <div class="specialOffers-img">
              <router-link to="/Best">
              <img src="./img/gzt111.jpg" alt="" width="80%" height="80%">
              </router-link>
            </div>
          </li>
          <li class="specialOffers-list">
            <p class="font-14">购买任意Aeroccino 4奶泡机立减200元。</p>
            <div class="specialOffers-img">
              <router-link to="/Best">
              <img src="./img/gzt222.jpg" alt="" width="80%" height="80%">
              </router-link>
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
          <router-link to="/caphome">
          <li class="coffeeCapsule-list">
            <p class="padding-t-60 text-black">咖啡胶囊</p>
            <div class="coffeeCapsule-img padding-20">
              <img src="./img/gzt333.jpg" alt="">
            </div>
          </li></router-link>
          <li class="coffeeCapsule-list">
            <div class="coffeeCapsule-list-box">
              <img src="./img/gzt555.jpg" alt="" width="80%" height="80%">
              <span class="coffeeCapsule-list-box-text font-12">探索Nespresso优选咖啡胶囊</span>
            </div>
            <router-link to="/seekfit">
            <div class="coffeeCapsule-list-box">
              <img src="./img/gzt666.jpg" alt="" width="80%" height="80%">
              <span class="coffeeCapsule-list-box-text font-12 text-black">测一测您喜欢的咖啡口味</span>
            </div>
            </router-link>
          </li>
          <li class="coffeeCapsule-list">
            <router-link to="/formula">
            <div class="coffeeCapsule-list-box">
              <img src="./img/gzt777.jpg" alt="" width="80%" height="80%">
              <span class="coffeeCapsule-list-box-text font-12 text-black">Nespresso咖啡配方</span>
            </div>
            </router-link>
            <div class="coffeeCapsule-list-box" style="border-top: 1px solid #e2e2e2;">
              <img src="./img/gzt-nav-22.png" alt="" width="80%" height="80%">
              <span class="coffeeCapsule-list-box-text font-12">Nespresso迎新会员好礼</span>
            </div>
          </li>
          <li class="coffeeCapsule-list">
            <div class="coffeeCapsule-img">
              <img class="coffeeCapsule-img-4" src="./img/gzt888.jpg" alt="" width="80%" height="80%">
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
          <router-link to="/Machine">
            <li class="coffeeMachine-list">
              <p class="padding-b-60 padding-t-60 text-black font-20">订购咖啡机</p>
              <div class="coffeeMachine-img">
                <img src="./img/gzt999.jpg" alt="">
              </div>
             </li>
          </router-link>
          <li class="coffeeMachine-list">
            <div class="coffeeMachine-list-box">
              <img src="./img/gzt1000.jpg" alt="">
              <span class="coffeeMachine-list-box-text font-14">Nespresso探索优选咖啡胶囊</span>
            </div>
           <router-link to="/Hellp">
            <div class="coffeeMachine-list-box">
              <img src="./img/gzt1100.jpg" alt="">
              <span class="coffeeMachine-list-box-text  font-14 text-black">咖啡机使用帮助</span>
            </div>
           </router-link>
          </li>
          <li class="coffeeMachine-list">
            <router-link to="Repair">
              <div class="coffeeMachine-list-box">
              <img src="./img/gzt1200.jpg" alt="">
              <span class="coffeeMachine-list-box-text  font-14 text-black">咖啡机维修及保养</span>
            </div>
            </router-link>
           <router-link to="/Best">
            <div class="coffeeMachine-list-box" style="border-top: 1px solid #e2e2e2;">
              <img src="./img/gzt1000.jpg" alt="">
              <span class="coffeeMachine-list-box-text  font-14 text-black">热卖咖啡机</span>
            </div>
           </router-link>
          </li>
          <li class="coffeeMachine-list">
            <div class="coffeeMachine-img44">
              <img class="coffeeMachine-img-4" src="./img/gzt-nav-4.jpg" alt="" style="width:100%">
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
              <p class="padding-t-40 font-14">为什么选择Nespresso</p>
              <div class="vipMember-img padding-t-50">
                <img src="./img/vip1.jpg" alt="">
              </div>
            </li>
            <li class="vipMember-list">
              <router-link to="/polite">
                <p class="vipMember-list-title padding-t-40 font-14">新会员专属礼遇</p>
                <div class="vipMember-img padding-t-50">
                  <img src="./img/vip2.jpg" alt="">
                </div>
              </router-link>
            </li>
            <li class="vipMember-list">
              <router-link to="/favorite">
                <p class="vipMember-list-title padding-t-40 font-14">为不同场合选择礼物</p>
                <div class="vipMember-img padding-t-50">
                  <img src="./img/vip3.jpg" alt="">
                </div>
              </router-link>
            </li>
            <li class="vipMember-list">
              <div class="vipMember-img">
                <img class="vipMember-img-4" src="./img/vip4.jpg" alt="">
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
              <img src="./img/serverbuy.jpg" alt="">
              <span class="customerService-list-box-text">在线订购</span>
            </div>
            <router-link to="/reparation">
              <div class="customerService-list-box">
              <img src="./img/servercup.jpg" alt="">
              <span class="customerService-list-box-text">咖啡机保养</span>
              </div>
            </router-link>
          </li>
          <li class="customerService-list">
            <router-link to="/delivery">
              <div class="customerService-list-box">
              <img src="./img/servering.jpg" alt="">
              <span class="customerService-list-box-text">运输服务</span>
              </div>
            </router-link>
            <router-link to="/delivery">
              <div class="customerService-list-box" style="border-top:1px solid #e2e2e2">
              <img src="./img/serverlook.jpg" alt="">
              <span class="customerService-list-box-text">客户关怀</span>
              </div>
            </router-link>
          </li>
          <li class="customerService-list">
            <router-link to="/recovery">
              <p class="padding-t-70">咖啡胶囊回收</p>
              <div class="customerService-img">
                <img src="./img/serverback.jpg" alt="">
              </div>
            </router-link>
          </li>
          <li class="customerService-list">
            <div class="customerService-img">
              <img class="customerService-img-4" src="./img/server.jpg" alt="">
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
            <p class="padding-t-20 padding-b-20 text-black">Nespresso门店</p>
            <div class="contactUs-img">
              <img src="./img/connection.jpg" alt="" width="120px" height="120px">
            </div>
          </li>
          <li class="contactUs-list">
           <router-link to="/info">
              <div class="contactUs-list-box" style="border-bottom: 1px solid #e2e2e2;">
              <img src="./img/email.jpg" alt="" width="80px" height="80px">
              <span class="contactUs-list-box-text text-black" >邮件联系我们</span>
              </div>
           </router-link>
           <router-link to="/contact">
               <div class="contactUs-list-box">
              <img src="./img/phone.jpg" alt="" width="80px" height="80px">
              <span class="contactUs-list-box-text text-black">拨打热线联系我们</span>
              </div>
           </router-link>
          </li>
          <li class="contactUs-list">
            <router-link to="/problem">
              <div class="contactUs-list-box" style="border-bottom: 1px solid #e2e2e2;">
              <img src="./img/question.jpg" alt="" width="80px" height="80px">
              <span class="contactUs-list-box-text text-black">顾客常见问题</span>
              </div>
            </router-link>
            <div class="contactUs-list-box">
              <img src="./img/mobilephone.jpg" alt="" width="80px" height="80px">
              <span class="contactUs-list-box-text">下载Nepresso</span>
            </div>
          </li>
          <li class="contactUs-list">
            <div class="contactUs-img">
              <img class="contactUs-img-4" src="./img/last.jpg" alt="">
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

<style lang='less' scoped>
@import './less/navbar.less';
</style>
