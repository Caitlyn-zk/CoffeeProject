<template>
    <div class="content">
        <div class="nps-seek">
            <transition name="boom" mode="out-in">
                <component :changeStep="changeStep" :is="view"></component>
            </transition>
        </div>
        <bottom></bottom>
    </div>
</template>

<script>
import First from './first'
import Second from './second'
import Third from './third'
import Fourth from './fourth'
import Fifth from './fifth'
import Sixth from './sixth'
import Seventh from './seventh'
import Eighth from './eighth'
import bottom from '../service/Footer'
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
           } else if (step === 7) {
               this.view = 'Seventh'
           } else if (step === 8) {
               this.view = 'Eighth'
           }
       }
   },
    components: {
        First,
        Second,
        Third,
        Fourth,
        Fifth,
        Sixth,
        Seventh,
        Eighth,
        bottom
    }
}
</script>

<style lang="less">
@import './css/Yyb.less';
@import './css/eighth.less';
</style>
