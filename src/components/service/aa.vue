<template>
  <div id="demo">
        <button @mouseenter="show = true" @mouseleave="show = false">
        Toggle
        </button>
        <transition name="fade">
        <p v-if="show">hello</p>
        </transition>
        </div>
</template>

<script>
export default {
        data () {
            return {
                    show: false
            }
        }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
  margin-top: 20px;
}
body{
        background: #fff;
}
</style>
