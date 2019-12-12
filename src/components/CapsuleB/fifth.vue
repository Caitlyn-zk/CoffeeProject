<template>
    <div class="nps-second">
        <transition name="bb-tit">
            <div v-if="show" class="nps-second-title">4. 对于您，咖啡是：</div>
        </transition>
        <transition name="bb">
            <div v-if="shows">
                <transition name="cc">
                    <div v-if="show" class="nps-second-middle clearfix">
                        <div @click="changeSt" class="nps-middle-lista fl">
                            <span class="nps-lista-sp">一天美好的开始</span>
                            <div class="nps-lista-box">
                                <div class="nps-lista-img" :style="imagea"></div>
                            </div>
                            <div class="nps-lista-lists">
                                <span>没有什么比用一杯大杯咖啡开启一天更美好</span>
                            </div>
                        </div>
                        <div @click="changeSt" class="nps-middle-lista fl">
                            <span class="nps-lista-sp">愉悦的片刻</span>
                            <div class="nps-lista-box">
                                <div class="nps-lista-img" :style="imageb"></div>
                            </div>
                            <div class="nps-lista-lists">
                                <span>下午喝一杯咖啡享受纯粹的快乐</span>
                            </div>
                        </div>
                        <div @click="changeSt" class="nps-middle-lista fl">
                            <span class="nps-lista-sp">两者都有</span>
                            <div class="nps-lista-box">
                                <div class="nps-lista-img" :style="imagec"></div>
                            </div>
                            <div class="nps-lista-lists">
                                <span>一杯美味的咖啡时刻享受</span>
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
                backgroundImage: "url(" + require('./img/step05.png') + ")"
            },
            imageb: {
                /* eslint-disable */
                backgroundImage: "url(" + require('./img/step06.png') + ")"
            },
            imagec: {
                /* eslint-disable */
                backgroundImage: "url(" + require('./img/step07.png') + ")"
            }
        }
    },
    methods: {
        changeSt () {
            this.shows = !this.shows
            this.bb = setInterval(() => {
                this.changeStep(6)
            }, 800)
        },
        changess () {
            this.show = !this.show
            this.bb = setInterval(() => {
                this.changeStep(4)
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
