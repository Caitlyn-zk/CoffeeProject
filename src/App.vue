<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
		<!-- <el-button class="padding-10 font-36 line-36" type="">按钮</el-button>
		<el-button class="nsp-add-button" type="">
      <i class="el-icon-plus"></i>
    </el-button> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
@import './css/public.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
