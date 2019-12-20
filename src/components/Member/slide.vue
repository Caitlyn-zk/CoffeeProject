<template>
  <div class="container content">
    <ul class="container-lists" @mouseover="addOn" @mouseleave="remove" :class="{on:isOn == 10}">
      <li class="item" v-for="(item, index) in listImg" :key="index" :class="{active:index==isShow}">
        <img :src="item.src" class="slide-img"/>
          <div class="slide-tip">
            {{item.tip}}
            {{index}}
          </div>
      </li>
      <a class="btn pre el-icon-arrow-left" @click="goPre"></a>
      <a class="btn next el-icon-arrow-right" @click="goNext"></a>
    </ul>
    <ul class="dots-lists" @mouseleave="addMouse" @mouseover="clear">
      <li class="dot" @click="changeDots(0)" :class="{active:isActive == 0}">1</li>
      <li class="dot" @click="changeDots(1)" :class="{active:isActive == 1}">2</li>
      <li class="dot" @click="changeDots(2)" :class="{active:isActive == 2}">3</li>
      <li class="dot" @click="changeDots(3)" :class="{active:isActive == 3}">4</li>
      <li class="dot" @click="changeDots(4)" :class="{active:isActive == 4}">5</li>
      <li class="dot" @click="changeDots(5)" :class="{active:isActive == 5}">6</li>
      <li class="dot" @click="changeDots(6)" :class="{active:isActive == 6}">7</li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isShow: 0,
      isOn: null,
      time: null,
      isActive: 0,
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
  },
  methods: {
    goPre () {
      if (this.isShow === 0) {
        this.isShow = 6
        this.isActive = 6
      } else {
        this.isShow--
        this.isActive--
      }
    },
    goNext () {
      if (this.isShow === 6) {
        this.isShow = 0
        this.isActive = 0
      } else {
        this.isShow++
        this.isActive++
      }
    },
    addOn () {
      this.isOn = 10
      clearInterval(this.time)
    },
    remove () {
      this.isOn = 2
      this.time = setInterval(() => {
      if (this.isShow < 6) {
        this.isShow++
        this.isActive++
      } else {
        this.isShow = 0
        this.isActive = 0
      }
    }, 4000)
    },
    clear () {
      clearInterval(this.time)
    },
    addMouse () {
      this.time = setInterval(() => {
        if (this.isShow < 6) {
          this.isShow++
          this.isActive++
        } else {
          this.isShow = 0
          this.isActive = 0
        }
    }, 4000)
    },
    changeDots (value) {
      this.isActive = value
      this.isShow = value
    }
  },
  mounted () {
    this.time = setInterval(() => {
      if (this.isShow < 6) {
        this.isShow++
        this.isActive++
      } else {
        this.isShow = 0
        this.isActive = 0
      }
    }, 4000)
  }
}
</script>

<style lang="less" scoped>
@import './merberStyle/slide';
</style>
