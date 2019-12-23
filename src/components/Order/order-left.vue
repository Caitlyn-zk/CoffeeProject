<template>
  <div class="nps-order-left-cont">
    <div class="nps-order-left-top padding-l-20">
      <h2 class="nps-order-left-title font-18">我的订单</h2>
      <p class="font-12 padding-b-10">欢迎回来 ~~~</p>
      <p class="font-12 padding-b-20">你的会员号：...</p>
    </div>
    <ul class="nps-order-left-lists padding-l-10">
      <li class="clearfix">
        <img src="./img/nps-order.svg">
        <div class="nps-order-left-myorder font-12">
          <router-link class="nps-order-left-router" to='/order'>我的订单</router-link>
        </div>
      </li>
      <li class="clearfix">
        <img src="./img/nps-adress.svg">
        <div class="nps-order-left-myorder font-12">
          <router-link class="nps-order-left-router" to='/order/myaddress'>我的地址</router-link>
        </div>
      </li>
      <li class="clearfix">
        <img src="./img/nps-personnal.svg">
        <div class="nps-order-left-myorder font-12">
          <router-link class="nps-order-left-router" to="/order/myinfo">我的个人信息</router-link>
        </div>
      </li>
      <li class="clearfix">
        <img src="./img/nps-machines-ol.svg">
        <div class="nps-order-left-myorder font-12">
          <router-link class="nps-order-left-router" to="/order/mymachines">我的咖啡机</router-link>
        </div>
      </li>
      <li class="clearfix">
        <img src="./img/nps-alerts.svg">
        <div class="nps-order-left-myorder font-12">
          <router-link class="nps-order-left-router" to="/order/alerts">提醒&订阅</router-link>
        </div>
      </li>
      <li class="clearfix">
        <img src="./img/nps-contact-pref.svg">
        <div class="nps-order-left-myorder font-12">
          <router-link class="nps-order-left-router" to="/order/fondness">联系偏好设定</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import './css/order.less';
</style>
