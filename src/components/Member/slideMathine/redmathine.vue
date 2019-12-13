<template>
  <ul class="choose-type-box" @click="changeImgList">
            <li class="first-choose chooseLi" @click="choose(1)" ref="chooseBtn">
            </li>
            <li class="seconed-choose chooseLi" @click="choose(2)" ref="chooseBtn">
            </li>
            <li class="thired-choose chooseLi" @click="choose(3)" ref="chooseBtn">
            </li>
            <li class="fove-choose chooseLi" @click="choose(4)" ref="chooseBtn">
            </li>
            <!-- <component :is="comName"></component> -->
   </ul>
</template>

<script>
export default {

}
</script>

<style lang="less">
@import '../merberStyle/slideMathine.less';
</style>