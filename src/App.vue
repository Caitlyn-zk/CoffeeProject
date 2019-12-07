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
import backTop from './components/Common/backTop/backTop'
export default {
  name: 'App',
  components: {
    backTop,
    Nav,
    Navbar
  }
}
</script>

<style lang="less">
@import './css/public.less';
</style>
