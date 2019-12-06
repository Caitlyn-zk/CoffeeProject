<template>
  <div class="nps-order-cont">
    <h2 class="nps-order-cont-title font-16 padding-20">我的地址</h2>
    <div class="nps-order-info nps-order-address-main padding-20 clearfix">
      <div class="nps-order-address-info clearfix">
        <div class="nps-order-address fl">
          <p>地址</p>
          <p>~~~先生</p>
          <p>555555重庆</p>
          <p>重庆德克特</p>
          <p>中国/China</p>
        </div>
        <div class="nps-order-tel fr">
          <span>电话号码：（隐私）00000000</span>
        </div>
      </div>
      <div class="nps-order-address-edit padding-t-20">
        <router-link to='/order/editaddress' class="nps-address-edit-btn">编辑地址</router-link>
      </div>
      <div class="nps-order-address-default padding-t-20">
        <div class="nps-order-default-harvest">
          <i class="el-icon-check nps-order-icon"></i>
          <span>我的默认收货地址</span>
        </div>
        <div class="nps-order-default-send">
          <i class="el-icon-check nps-order-icon"></i>
          <span>我的默认送单地址</span>
        </div>
      </div>
    </div>
    <div class="nps-order-address-add clearfix">
      <a class="nps-address-edit-btn fr">添加地址</a>
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
