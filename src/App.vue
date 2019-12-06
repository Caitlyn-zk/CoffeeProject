<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>

<script>
import backTop from './components/Common/backTop/backTop'
export default {
  name: 'App',
  components: {
    backTop
  }
}
</script>

<style lang="less">
@import './css/public.less';
</style>
