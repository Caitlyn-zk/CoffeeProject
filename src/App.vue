<template>
  <div id="app">
<<<<<<< HEAD
      <merberHome></merberHome>
=======
		<Cart></Cart>
>>>>>>> 496c9f7cfdcb7be73a3e86f87b8a556e652037bb
  </div>
</template>

<script>
<<<<<<< HEAD
import backTop from './components/Common/backTop/backTop'
import merberHome from './components/Member/merberHome'
export default {
  components: {
    backTop,
    merberHome
=======
import Nav from 'components/Nav/nav'
import Navbar from 'components/Nav/navbar'
import Cart from './components/ShoppingCart'
export default {
  name: 'App',
  data () {
		return {
			centerDialogVisible: true
		}
	},
  components: {
    Nav,
    Navbar,
	Cart
>>>>>>> 496c9f7cfdcb7be73a3e86f87b8a556e652037bb
  }
}
</script>

<style lang="less">
@import './css/public.less';
</style>
