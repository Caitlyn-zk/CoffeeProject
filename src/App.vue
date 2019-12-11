<template>
  <div id="app">
    <Nav></Nav>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import Nav from 'components/Nav/nav'
import Navbar from 'components/Nav/navbar'
export default {
  name: 'App',
  data () {
		return {
		}
	},
  components: {
    Nav,
    Navbar
	}
}
</script>

<style lang="less">
@import './css/public.less';
</style>
