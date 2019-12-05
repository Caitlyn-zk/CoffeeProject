<template>
  <div id="app">
<<<<<<< HEAD
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
		<!-- <el-button class="padding-10 font-36 line-36" type="">按钮</el-button>
		<el-button class="nsp-add-button" type="">
      <i class="el-icon-plus"></i>
    </el-button> -->
=======
<<<<<<< HEAD
      <merberHome></merberHome>
=======
		<Cart></Cart>
>>>>>>> 496c9f7cfdcb7be73a3e86f87b8a556e652037bb
>>>>>>> a4273fdba3c3955a3bc502bc4ec0bfbb5645d400
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
