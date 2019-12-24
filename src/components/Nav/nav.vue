<template>
  <div class="nps-nav">
      <div class="nps-nav-top content clearfix">
        <router-link to="/">
			<div class="fl nps-logo-img">
				<img src="./img/xc-logo.png" alt="">
			</div>
			</router-link>
         <div class="fr margin-18">
          <Cart></Cart>
        </div>
        <div class="nps-user-btn-group fr">
          <button v-if="!loginInfo" @click="loginShowF" class="nps-user-btn nps-login-account">
            <span class="el-icon-s-custom margin-r-10 font-18"></span>
            请登陆你的账户
          </button>
          <!-- 登陆之后按钮 -->
          <button v-if="loginInfo" @click="loginShowF2" class="nps-user-btn nps-login-account">
            <span class="el-icon-s-custom margin-r-10 font-18"></span>
            欢迎
            <span>{{loginInfo.name}}</span>
            <span>{{loginInfo.surname}}</span>
          </button>
          <!-- 登陆弹窗 -->
          <transition name = "fade" >
            <Login :loginComp="loginComp" v-on:closeLogin="closeLogin()" v-show="loginShow"></Login>
          </transition>
          <transition name = "fade" >
              <Myacount @closeMyacount="closeAcount()" @closeMycount1="closeMycount()" v-show="myacountShow"></Myacount>
          </transition>
        </div>
      </div>
	<!-- 侧边购物车 -->
  </div>
</template>

<script>
import Cart from '../ShoppingCart/index'
import Login from 'components/Login/login.vue'
import Myacount from 'components/Login/myacount.vue'
import {createNamespacedHelpers} from 'vuex'
const { mapState: loginState, mapMutations: loginMutations } = createNamespacedHelpers('Login')
export default {
	data () {
		return {
      loginShow: false,
      myacountShow: false,
      loginComp: '登录组件'
		}
	},
	components: {
    Cart,
    Login,
    Myacount
  },
  methods: {
    ...loginMutations(['addloginInfo']),
    closeAcount () {
      this.myacountShow = false
      let navbtn = document.querySelector('.nps-login-account')
      navbtn.style.background = '#000'
      navbtn.style.color = '#fff'
    },
    closeLogin (data) {
      this.loginShow = false
      let navbtn = document.querySelector('.nps-login-account')
      navbtn.style.background = '#000'
      navbtn.style.color = '#fff'
      navbtn.firstChild.style.backgroundPositionX = '0px'
      navbtn.firstChild.style.backgroundPositionY = '-40px'
    },
    closeMycount () {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('infor')
      location.reload()
    },
    loginShowF2 (event) {
      this.myacountShow = !this.myacountShow
      if (this.myacountShow) {
        event.target.style.background = '#fff'
        event.target.style.color = '#000'
      } else {
        event.target.style.background = '#000'
        event.target.style.color = '#fff'
      }
    },
    loginShowF (event) {
      this.loginShow = !this.loginShow
      if (this.loginShow || this.myacountShow) {
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
    ...loginState(['loginInfo']),
    count () {
      return this.$store.state.total
    }
  },
  mounted () {
    let infor = JSON.parse(window.localStorage.getItem('infor'))
    if (infor) {
      this.addloginInfo(infor)
      this.isLogin = true
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
