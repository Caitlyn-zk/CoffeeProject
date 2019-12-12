<template>
    <div class="content">
        <div class="nps-seek">
            <transition name="boom" mode="out-in">
                <component :changeStep="changeStep" :is="view"></component>
            </transition>
        </div>
    </div>
</template>

<script>
import First from './first'
import Second from './second'
import Third from './third'
import Fourth from './fourth'
import Fifth from './fifth'
import Sixth from './sixth'
export default {
    props: {
        changeSt: Function
    },
   data () {
       return {
           view: 'First'
       }
   },
   methods: {
       changeStep (step) {
           if (step === 1) {
               this.view = 'First'
           } else if (step === 2) {
               this.view = 'Second'
           } else if (step === 3) {
               this.view = 'Third'
           } else if (step === 4) {
               this.view = 'Fourth'
           } else if (step === 5) {
               this.view = 'Fifth'
           } else if (step === 6) {
               this.view = 'Sixth'
           }
       }
   },
    components: {
        First,
        Second,
        Third,
        Fourth,
        Fifth,
        Sixth
    }
}
</script>

<style lang="less">
@import './css/Yyb.less';
</style>
