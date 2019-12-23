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
          <button @click="loginShowF" class="nps-user-btn nps-login-account">
						<!-- <i class="nps-login-account-icon"></i> -->
						<span class="el-icon-s-custom margin-r-10 font-18"></span>
						请登陆你的账户
					</button>
          <!-- 登陆弹窗 -->
          <transition name = "fade" >
            <Login :loginComp="loginComp" v-on:closeLogin="closeLogin()" v-show="loginShow"></Login>
          </transition>
        </div>
      </div>
			<!-- 侧边购物车 -->
  </div>
</template>

<script>
import Cart from '../ShoppingCart/index'
import Login from 'components/Login/login.vue'
export default {
	data () {
		return {
      loginShow: false,
      loginComp: '登录组件'
		}
	},
	components: {
    Cart,
    Login
  },
  methods: {
    closeLogin (data) {
      this.loginShow = false
      let navbtn = document.querySelector('.nps-login-account')
      navbtn.style.background = '#000'
      navbtn.style.color = '#fff'
      navbtn.firstChild.style.backgroundPositionX = '0px'
      navbtn.firstChild.style.backgroundPositionY = '-40px'
    },
    loginShowF (event) {
      this.loginShow = !this.loginShow
      if (this.loginShow) {
        event.target.style.background = '#fff'
        event.target.style.color = '#000'
        event.target.firstChild.style.backgroundPositionX = '33px'
        event.target.firstChild.style.backgroundPositionY = '0px'
      } else {
        this.$nextTick(() => {
          event.target.style.background = '#000'
          event.target.style.color = '#fff'
          event.target.firstChild.style.backgroundPositionX = '0px'
          event.target.firstChild.style.backgroundPositionY = '-40px'
        })
      }
    }
  },
	computed: {
    count () {
      return this.$store.state.total
    }
	}
}
</script>

<style lang='less' scoped>
@import './less/nav.less';
.fade-enter-active, .fade-leave-active {
    transition: opacity 2s
}
.fade-enter, .fade-leave-to  {
    opacity: 0
}
</style>
