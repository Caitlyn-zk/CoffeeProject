<template>
<<<<<<< HEAD
  <router-view></router-view>
=======
  <div id="app">
    <merberHome></merberHome>
	<router-view />
	<Cart></Cart>
  </div>
>>>>>>> 12f185e6cdf83b8e5e01fb286a682ccfd7d25eff
</template>

<script>
import Nav from 'components/Nav/nav'
import Navbar from 'components/Nav/navbar'
import Cart from './components/ShoppingCart'
import backTop from './components/Common/backTop/backTop'
import merberHome from './components/Member/merberHome'
export default {
<<<<<<< HEAD

=======
  name: 'App',
  data () {
	return {
		centerDialogVisible: true
		}
	},
  components: {
    backTop,
    merberHome,
	Nav,
    Navbar,
	Cart
  }
>>>>>>> 12f185e6cdf83b8e5e01fb286a682ccfd7d25eff
}
</script>

<style lang="less">
@import './css/public.less';
</style>
