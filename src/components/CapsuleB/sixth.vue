<template>
    <div class="nps-third">
        <transition name="bb-tit">
            <div v-if="show" class="nps-second-title">5. 您如何品尝您的咖啡？</div>
        </transition>
        <transition name="cc">
            <div v-if="shows">
                <transition name="bb">
                    <div v-if="show" class="nps-second-middle clearfix">
                        <div @click="changeSb" class="nps-middle-lista fl">
                            <span class="nps-lista-sp">黑咖啡</span>
                            <div class="nps-lista-box">
                                <div class="nps-lista-img" :style="imagea"></div>
                            </div>
                            <div class="nps-lista-lists">
                                <span>高品质的咖啡有诱人的风味，值得品尝其纯粹的味道。</span>
                            </div>
                        </div>
                        <div @click="changeSb" class="nps-middle-lista fl">
                            <span class="nps-lista-sp">您奶咖啡</span>
                            <div class="nps-lista-box">
                                <div class="nps-lista-img" :style="imageb"></div>
                            </div>
                            <div class="nps-lista-lists">
                                <span>相比黑咖啡，在咖啡中加入牛奶可以创造焦糖，甜味和全新的维度。</span>
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
            aa: '',
            imagea: {
                /* eslint-disable */
                backgroundImage: "url(" + require('./img/step08.png') + ")"
            },
            imageb: {
                /* eslint-disable */
                backgroundImage: "url(" + require('./img/step09.png') + ")"
            }
        }
    },
    methods: {
        changess () {
            this.shows = !this.shows
            this.aa = setInterval(() => {
                this.changeStep(5)
            }, 800);
        },
        changeSb () {
            this.show = !this.show
            this.aa = setInterval(() => {
                this.changeStep(7)
            }, 800);
        }
    },
    beforeDestroy () {
        clearInterval(this.aa)
    }
}
</script>

<style>

</style>