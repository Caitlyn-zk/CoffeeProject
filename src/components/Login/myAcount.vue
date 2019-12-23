// 我的账户弹窗
<template>
  <div class="nps-myAcount-box">
    <ul @click="close" class="nps-myAcount-lists font-12">
      <li class="nps-myAcount-header text-center font-14">我的账户</li>
      <li class="nps-myAcount-router"><router-link to="/order" class="nps-myacount-btn">我的订单</router-link></li>
      <li class="nps-myAcount-router"><router-link to="/order/myaddress" class="nps-myacount-btn">我的地址</router-link></li>
      <li class="nps-myAcount-router"><router-link to="/order/myinfo" class="nps-myacount-btn">我的个人信息</router-link></li>
      <li class="nps-myAcount-router"><router-link to="/order/mymachines" class="nps-myacount-btn">我的咖啡机</router-link></li>
      <li class="nps-myAcount-router"><router-link to="/order/alerts" class="nps-myacount-btn">提醒和订阅</router-link></li>
      <li class="nps-myAcount-router"><router-link to="/order/fondness" class="nps-myacount-btn">联系偏好设置</router-link></li>
      <li @click="loginOut()" class="nps-myAcount-router"><router-link to="" class="nps-myacount-nologin">登出</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
methods: {
  loginOut () {
    this.$emit('closeMycount1')
  },
  close () {
    console.log(111)
    this.$emit('closeMyacount')
  }
}
}
</script>

<style lang="less" scoped>
@import 'myAcount.less';
</style>
