<template>
  <div class="content padding-t-10">
    <!-- <div class="nps-order-top">顶部</div> -->
    <div class="nps-order-content clearfix">
      <div class="nps-order-left fl">
        <OrderLeft></OrderLeft>
      </div>
      <div class="nps-order-right fr">
        <!-- <OrderRight></OrderRight> -->
        <router-view></router-view>
      </div>
    </div>
    <div class="nps-order-bottom">底部</div>
  </div>
</template>
<script>
import OrderLeft from './order-left.vue'
import OrderRight from './order-right.vue'
export default {
  components: {
    OrderLeft,
    OrderRight
  }
}
</script>

<style lang="less" scoped>
@import './css/order.less';
</style>
