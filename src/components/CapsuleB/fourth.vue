<template>
    <div class="nps-third">
        <transition name="bb-tit">
            <div v-if="show" class="nps-second-title">3. 您喜欢的咖啡味道是什么？</div>
        </transition>
        <transition name="cc">
            <div v-if="shows">
                <transition name="bb">
                    <div v-if="show" class="nps-second-middle clearfix">
                        <div @click="changeSb" class="nps-middle-lista fl">
                            <span class="nps-lista-sp">强烈</span>
                            <div class="nps-lista-box">
                                <div class="nps-lista-img" :style="imagea"></div>
                            </div>
                            <div class="nps-lista-lists">
                                <span>浓烈的咖啡是饱满且持久的。</span>
                            </div>
                        </div>
                        <div @click="changeSb" class="nps-middle-lista fl">
                            <span class="nps-lista-sp">温和</span>
                            <div class="nps-lista-box">
                                <div class="nps-lista-img" :style="imageb"></div>
                            </div>
                            <div class="nps-lista-lists">
                                <span>轻度咖啡口感温和。</span>
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
                backgroundImage: "url(" + require('./img/step03.png') + ")"
            },
            imageb: {
                /* eslint-disable */
                backgroundImage: "url(" + require('./img/step04.png') + ")"
            }
        }
    },
    methods: {
        changess () {
            this.shows = !this.shows
            this.aa = setInterval(() => {
                this.changeStep(3)
            }, 800);
        },
        changeSb () {
            this.show = !this.show
            this.aa = setInterval(() => {
                this.changeStep(5)
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