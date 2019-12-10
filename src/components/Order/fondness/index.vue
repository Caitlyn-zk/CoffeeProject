<template>
  <div class="nps-order-cont">
    <h2 class="nps-order-cont-title font-16 padding-20">我更喜欢的联系方式</h2>
    <p class="nps-fondness-notice padding-lr-20 font-16">请随时通知我</p>
    <div class="nps-order-info padding-20 clearfix font-12">
      <p class="padding-t-10">在此处，您可以选择您偏好的联系方式，来接收我们的讯息</p>
      <p class="nps-fondness-myconnect">我的联系方式</p>
      <div class="margin-tb-5">
        <input type="checkbox">
        <span>电子邮件</span>
        <div>您同意我们通过电子邮件向您传递最新的信息和优惠</div>
      </div>
      <div class="nps-fond-checkbox">
        <input type="checkbox">
        <span>通过电话</span>
      </div>
      <div class="nps-fond-checkbox">
        <input type="checkbox">
        <span>通过邮件</span>
      </div>
      <div class="nps-fond-checkbox">
        <input type="checkbox">
        <span>通过短信</span>
      </div>
    </div>
    <div class="padding-20 nps-alerts-bottom clearfix">
      <router-link to='/order/fondness' class="nps-address-edit-btn nps-alerts-save fr">保存</router-link>
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
