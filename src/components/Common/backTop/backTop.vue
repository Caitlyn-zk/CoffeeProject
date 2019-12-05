<template>
  <a class="back-box" @click="backTop">
      回到顶部<i class="icon-back">^</i>
  </a>
</template>

<script>
export default {
  methods: {
    backTop () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
        const timeTop = setInterval(() => {
        document.body.scrollTop -= 50
        document.documentElement.scrollTop -= 50
        top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    }
  }

}
</script>

<style lang="less">
@import './backTopStyle/back.less';
</style>
