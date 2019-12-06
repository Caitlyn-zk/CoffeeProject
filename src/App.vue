<template>
  <div id="app">
      <merberHome></merberHome>
  </div>
</template>
<script>
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
}
</script>

<style lang="less">
@import './css/public.less';
</style>
