<template>
  <div id="app">
    <merberHome></merberHome>
	<router-view />
	<Cart></Cart>
  </div>
</template>

<script>
import Nav from 'components/Nav/nav'
import Navbar from 'components/Nav/navbar'
import Cart from './components/ShoppingCart'
import backTop from './components/Common/backTop/backTop'
import merberHome from './components/Member/merberHome'
export default {
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
}
</script>

<style lang="less">
@import './css/public.less';
</style>
