<template>
  <div class="nps-nav">
      <div class="nps-nav-top content clearfix">
        <div class="fl nps-logo-img">
          <img src="./img/xc-logo.png" alt="">
        </div>
        <div class="nps-user-btn-group fr">
          <button class="nps-user-btn nps-login-account"><i class="nps-login-account-icon"></i>请登陆你的账户 </button>
          <button @click="goodsTable()" class="nps-user-btn nps-shopping-cart"><i class="nps-shopping-cart-icon"></i>您的购物车(0) </button>
          <!-- 登陆弹窗 -->
          <Login></Login>
        </div>
      </div>
			<!-- 侧边购物车 -->
			<Cart></Cart>
  </div>
</template>

<script>
import Cart from '../ShoppingCart/index'
import Login from 'components/Login/login.vue'
export default {
	data () {
		return {
		}
	},
	components: {
    Cart,
    Login
	},
	computed: {
	}
}
</script>

<style lang='less' scoped>
@import './less/nav.less';
</style>
