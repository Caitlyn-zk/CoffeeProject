<template>
    <div class="nps-second">
        <transition name="bb-tit">
            <div v-if="show" class="nps-second-title">1. 您更喜欢哪一款蛋糕？</div>
        </transition>
        <transition name="bb">
            <div v-if="show" class="nps-second-middle clearfix">
                <div @click="changeSt" class="nps-middle-lista fl">
                    <span class="nps-lista-sp">巧克力蛋糕</span>
                    <div class="nps-lista-box">
                        <div class="nps-lista-img" :style="imagea"></div>
                    </div>
                    <div class="nps-lista-lists">
                        <span>巧克力蛋糕拥有微苦且浓郁的风味，尤其是黑巧克力口味。</span>
                    </div>
                </div>
                <div @click="changeSt" class="nps-middle-lista fl">
                    <span class="nps-lista-sp">饼干</span>
                    <div class="nps-lista-box">
                        <div class="nps-lista-img" :style="imageb"></div>
                    </div>
                    <div class="nps-lista-lists">
                        <span>饼干香甜充满烤面包香气，通常混有坚果。</span>
                    </div>
                </div>
                <div @click="changeSt" class="nps-middle-lista fl">
                    <span class="nps-lista-sp">柠檬味蛋糕</span>
                    <div class="nps-lista-box">
                        <div class="nps-lista-img" :style="imagec"></div>
                    </div>
                    <div class="nps-lista-lists">
                        <span>柠檬蛋糕有轻微的酸味，有助于发挥其丰富的香果。</span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        changeStep: Function
    },
    data () {
        return {
            show: true,
            bb: '',
            imagea: {
                /* eslint-disable */
                backgroundImage: "url(" + require('./img/qiaokeli01.png') + ")"
            },
            imageb: {
                /* eslint-disable */
                backgroundImage: "url(" + require('./img/qiaokeli02.png') + ")"
            },
            imagec: {
                /* eslint-disable */
                backgroundImage: "url(" + require('./img/qiaokeli03.png') + ")"
            }
        }
    },
    methods: {
        changeSt () {
            this.show = !this.show
            this.bb = setInterval(() => {
                this.changeStep(3)
            }, 800)
        }
    },
    beforeDestroy () {
        clearInterval(this.bb)
    }
}
</script>

<style>

</style>
