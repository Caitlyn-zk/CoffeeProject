<template>
<<<<<<< HEAD
  <router-view></router-view>
=======
  <div id="app">
<<<<<<< HEAD
    <Nav></Nav>
    <Navbar></Navbar>
	<router-view />
=======
    <merberHome></merberHome>
	<router-view />
	<Cart></Cart>
>>>>>>> 12063630ece08340d76da5c6eaccef9ce7a83e95
  </div>
>>>>>>> 12f185e6cdf83b8e5e01fb286a682ccfd7d25eff
</template>

<script>
import Nav from 'components/Nav/nav'
import Navbar from 'components/Nav/navbar'
<<<<<<< HEAD
export default {
  name: 'App',
  components: {
    Nav,
    Navbar
  }
=======
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
>>>>>>> 12063630ece08340d76da5c6eaccef9ce7a83e95
}
</script>

<style lang="less">
<<<<<<< HEAD
@import './public.less';
=======
@import './css/public.less';
>>>>>>> 12063630ece08340d76da5c6eaccef9ce7a83e95
</style>
