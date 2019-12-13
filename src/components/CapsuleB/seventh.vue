<template>
    <div class="nps-second">
        <transition name="bb-tit">
            <div v-if="shows" class="nps-second-title">6. 在早上您更喜欢哪种类型的咖啡，主要是？</div>
        </transition>
        <transition name="bb">
            <div v-if="shows">
                <transition name="cc">
                    <div v-if="show" class="nps-second-middle clearfix">
                        <div @click="changeSt" class="nps-middle-lista fl">
                            <span class="nps-lista-sp">小杯</span>
                            <div class="nps-lista-box">
                                <div class="nps-lista-img" :style="imagea"></div>
                            </div>
                            <div class="nps-lista-lists">
                                <span>意式浓咖啡</span>
                            </div>
                        </div>
                        <div @click="changeSt" class="nps-middle-lista fl">
                            <span class="nps-lista-sp">中杯</span>
                            <div class="nps-lista-box">
                                <div class="nps-lista-img" :style="imageb"></div>
                            </div>
                            <div class="nps-lista-lists">
                                <span>大杯咖啡</span>
                            </div>
                        </div>
                        <div @click="changeSt" class="nps-middle-lista fl">
                            <span class="nps-lista-sp">大杯</span>
                            <div class="nps-lista-box">
                                <div class="nps-lista-img" :style="imagec"></div>
                            </div>
                            <div class="nps-lista-lists">
                                <span>美式咖啡</span>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
        <a class="nps-backsp" @click="changess">上一个问题</a>
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
            shows: true,
            bb: '',
            imagea: {
                /* eslint-disable */
                backgroundImage: "url(" + require('./img/step10.png') + ")"
            },
            imageb: {
                /* eslint-disable */
                backgroundImage: "url(" + require('./img/step11.png') + ")"
            },
            imagec: {
                /* eslint-disable */
                backgroundImage: "url(" + require('./img/step12.png') + ")"
            }
        }
    },
    methods: {
        changeSt () {
            this.shows = !this.shows
            this.bb = setInterval(() => {
                this.changeStep(8)
            }, 800)
        },
        changess () {
            this.show = !this.show
            this.bb = setInterval(() => {
                this.changeStep(6)
            }, 800);
        }
    },
    beforeDestroy () {
        clearInterval(this.bb)
    }
}
</script>

<style>

</style>
