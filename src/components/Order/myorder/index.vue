<template>
  <div class="nps-order-cont">
    <h2 class="nps-order-cont-title font-16 padding-20">我的订单</h2>
    <div class="text-center">
      <div class="nps-order-info padding-20">
      <p class="font-12 margin-b-20">你尚未订购任何商品</p>
      <p class="font-12 margin-b-20">你可以通过下方链接首次下单</p>
      <div class="nps-myorder-btn-box clearfix">
          <router-link to="/Machine" class="nps-myorder-btn">前往在线商店<span class="nps-myorder-crop fr"><i class="el-icon-arrow-right"></i></span></router-link>
          <p class="margin-t-20"><router-link to="/orderstep" class="nps-myorder-btn">前往订单<span class="nps-myorder-crop fr"><i class="el-icon-arrow-right"></i></span></router-link></p>
      </div>
      </div>
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
