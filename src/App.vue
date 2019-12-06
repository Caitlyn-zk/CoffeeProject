<template>
  <div id="app">
<<<<<<< HEAD
      <merberHome></merberHome>
=======
	<router-view></router-view>
>>>>>>> b45521054d3a6617bdc0baa060b0b3fae865a721
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
  },
  data () {
		return {
		}
	}
=======
import Nav from 'components/Nav/nav'
import Navbar from 'components/Nav/navbar'
import backTop from './components/Common/backTop/backTop'
export default {
  name: 'App',
  data () {
	return {
		centerDialogVisible: true
		}
   },
  components: {
    backTop,
    Nav,
    Navbar
  }
>>>>>>> b45521054d3a6617bdc0baa060b0b3fae865a721
}
</script>

<style lang="less">
@import './css/public.less';
</style>
