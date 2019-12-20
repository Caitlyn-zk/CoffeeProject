<template>
  <div class="nps-nav">
      <div class="nps-nav-top content clearfix">
        <div class="fl nps-logo-img">
          <img src="./img/xc-logo.png" alt="">
        </div>
         <div class="fr margin-18">
          <Cart></Cart>
        </div>
        <div class="nps-user-btn-group fr">
          <button class="nps-user-btn nps-login-account"><i class="nps-login-account-icon"></i>请登陆你的账户 </button>
        </div>
      </div>
			<!-- 侧边购物车 -->
  </div>
</template>

<script>
import Cart from '../ShoppingCart/index'
export default {
	data () {
		return {
		}
	},
	components: {
		Cart
	},
	computed: {
	}
}
</script>

<style lang='less' scoped>
@import './less/nav.less';
</style>
