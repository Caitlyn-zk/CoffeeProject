<template>
  <div id="app">
		<Cart></Cart>
  </div>
</template>

<script>
import Nav from 'components/Nav/nav'
import Navbar from 'components/Nav/navbar'
import Cart from './components/ShoppingCart'
export default {
  name: 'App',
  data () {
		return {
		}
	},
  components: {
    Nav,
    Navbar,
    Cart
	}
}
</script>

<style lang="less">
@import './css/public.less';
</style>
