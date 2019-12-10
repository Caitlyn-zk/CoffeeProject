<template>
  <div class="nps-order-cont">
    <h2 class="nps-order-cont-title font-16 padding-20">我的地址</h2>
    <div class="nps-order-info nps-order-address-main padding-20 clearfix">
      <ul class="nps-alerts-lists clearfix">
        <li class="padding-lr-20">
          <div class="nps-order-alerts-img"><img src=".././img/nps-order-alerts1.jpg" /></div>
          <div class="nps-alerts-cont">
            <div class="margin-tb-10">
              <input type="checkbox">
              <span class="nps-alerts-label">接收关于胶囊订单的提醒</span>
            </div>
            <p class="nps-alerts-info">根据您常规的订单频率，Nespresso 会在您的咖啡胶囊数量不足的时候向您发送提醒。</p>
          </div>
        </li>
        <li class="padding-lr-20">
          <div class="nps-order-alerts-img"><img src=".././img/nps-order-alerts2.jpg" /></div>
          <div class="nps-alerts-cont">
            <div class="margin-tb-10">
              <input type="checkbox">
              <span class="nps-alerts-label">接收关于除垢套件的提醒</span>
            </div>
            <p class="nps-alerts-info">我们建议您在每使用600粒咖啡胶囊后定期对您的咖啡机进行清洁
              为了帮助您定期维护，Nespresso 将会在您订购胶囊数量临近600粒的时候向您发送提醒。</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="padding-20 nps-alerts-bottom clearfix">
      <router-link to='/order/alerts' class="nps-address-edit-btn nps-alerts-save fr">保存</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import '../css/order.less';
</style>
