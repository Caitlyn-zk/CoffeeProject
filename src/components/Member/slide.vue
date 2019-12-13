<template>
  <el-carousel :interval="4000" type="card" height="250px" :autoplay="false">
    <el-carousel-item v-for="(item,index) in listImg" :key="index">
      <span class="slide-tip">{{item.tip}}</span>
      <div class="slide-banner">
          <img :src="item.src"/>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

export default {
  data () {
    return {
      listImg: [
      {
      src: '../../../static/lyk-coffee-color1.png',
      tip: 'Vivalto'
      },
      {
      src: '../../../static/lyk-coffee-color2.png',
      tip: 'Linizio Lungo'
      },
      {
      src: '../../../static/lyk-coffee-color3.png',
      tip: 'Volluto Decaffeinato'
      },
      {
      src: '../../../static/lyk-coffee-color4.png',
      tip: 'Vivalto Lungo'
      },
      {
      src: '../../../static/lyk-coffee-color5.png',
      tip: 'Roma'
      },
      {
      src: '../../../static/lyk-coffee-color6.png',
      tip: 'Capriccio'
      },
      {
      src: '../../../static/lyk-coffee-color7.png',
      tip: 'Volluto Roma'
      }
    ]
    }
  }

}
</script>

<style lang="less" scope>
@import './merberStyle/slide';
</style>
