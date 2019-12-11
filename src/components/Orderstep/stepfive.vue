<template>
  <div class="content">
    <p class="nps-stepfive-title font-22 padding-20">订单支付信息</p>
    <div class="nps-stepfive-cont">
      <span class="font-40 font-40">你好，你已支付成功!</span>
    </div>
    <div class="nps-stepfive-return padding-20">
      <span class="fl nps-step-next clearfix">
        <span class="fl font-14"><i class="el-icon-arrow-left"></i></span>
        <a @click="Returncart">返回购物车</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    changeStep: Function
  },
  methods: {
    Returncart () {
      this.changeStep(1)
    }
  }
}
</script>

<style lang="less" scoped>
@import './css/orderstep.less';
</style>
