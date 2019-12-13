<template>
  <el-carousel height="250px" :interval="5000" :autoplay="false">
      <el-carousel-item v-for="(item, index) in ListImg" :key="index">
        <div class="carousel-box">
          <img :src="item.srcRed" ref="img"/>
          <ul class="choose-type-box">
            <li class="first-choose chooseLi" @click="choose(1), changeListImg"  ref="chooseBtn">
            </li>
            <li class="seconed-choose chooseLi" @click="choose(2), changeListImg" ref="chooseBtn">
            </li>
            <li class="thired-choose chooseLi" @click="choose(3), changeListImg" ref="chooseBtn">
            </li>
            <li class="fove-choose chooseLi" @click="choose(4), changeListImg" ref="chooseBtn">
            </li>
             <component :is="comName"></component>
           </ul>
        </div>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
import one from './slideMathineSon/oneChoose'
import two from './slideMathineSon/twoChoose'
import three from './slideMathineSon/threeChoose'
import fove from './slideMathineSon/foveChoose'
export default {
  components: {
    one,
    two,
    three,
    fove
  },
  data () {
    return {
     comName: one,
     ListImg: [
       {
         srcRed: '../../../static/lyk-coffee-red-mathine1.png'
       },
       {
         srcRed: '../../../static/lyk-coffee-red-mathine3.png'
       },
       {
         srcRed: '../../../static/lyk-coffee-red-mathine5.png'
        }
     ],
     redImgList: [
       {
         srcRed: '../../../static/lyk-coffee-red-mathine1.png'
       },
       {
         srcRed: '../../../static/lyk-coffee-red-mathine3.png'
       },
       {
         srcRed: '../../../static/lyk-coffee-red-mathine5.png'
        }
     ],
     whiteImgList: [
       {
         srcRed: '../../../static/lyk-coffee-wihte-mathine2.png'
       },
       {
         srcRed: '../../../static/lyk-coffee-white-mathine6.png'
       },
       {
         srcRed: '../../../static/lyk-coffee-withe-mathine5.png'
        }
     ],
     blueImgList: [
        {
         srcRed: '../../../static/lyk-coffee-blue-mathine.png'
       },
       {
         srcRed: '../../../static/lyk-coffee-blue-mathine1.png'
       },
       {
         srcRed: '../../../static/lyk-coffee-blue-mathine3.png'
        }
     ],
     blackImgList: [
        {
         srcRed: '../../../static/lyk-coffee-black-mathine2.png'
       },
       {
         srcRed: '../../../static/lyk-coffee-black-mathine3.png'
       },
       {
         srcRed: '../../../static/lyk-coffee-black-mathine1.png'
        }
     ]
    }
  },
  methods: {
    choose (value) {
      if (value === 1) {
        this.comName = one
        this.ListImg = this.redImgList
      } else if (value === 2) {
        this.comName = two
        this.ListImg = this.blueImgList
      } else if (value === 3) {
        this.ListImg = this.blackImgList
        this.comName = three
      } else {
        this.ListImg = this.whiteImgList
        this.comName = fove
      }
    }
  },
  computed: {
    changeListImg () {
      console.log(this.ListImg)
      return this.ListImg
    }
  }
}
</script>

<style lang="less" scope>
@import './merberStyle/slideMathine.less';
</style>
