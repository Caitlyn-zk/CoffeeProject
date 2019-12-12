<template>
    <div class="nps-third">
        <transition name="bb-tit">
            <div v-if="show" class="nps-second-title">2. 您更喜欢哪一种苹果？</div>
        </transition>
        <transition name="cc">
            <div v-if="shows">
                <transition name="bb">
                    <div v-if="show" class="nps-second-middle clearfix">
                        <div @click="changeSb" class="nps-middle-lista fl">
                            <span class="nps-lista-sp">红苹果</span>
                            <div class="nps-lista-box">
                                <div class="nps-lista-img" :style="imagea"></div>
                            </div>
                            <div class="nps-lista-lists">
                                <span>红苹果含糖量高且香甜，质地柔软。</span>
                            </div>
                        </div>
                        <div @click="changeSb" class="nps-middle-lista fl">
                            <span class="nps-lista-sp">青苹果</span>
                            <div class="nps-lista-box">
                                <div class="nps-lista-img" :style="imageb"></div>
                            </div>
                            <div class="nps-lista-lists">
                                <span>青苹果口感偏涩，质地松脆。</span>
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
                backgroundImage: "url(" + require('./img/step01.png') + ")"
            },
            imageb: {
                /* eslint-disable */
                backgroundImage: "url(" + require('./img/step02.png') + ")"
            }
        }
    },
    methods: {
        changess () {
            this.shows = !this.shows
            this.aa = setInterval(() => {
                this.changeStep(2)
            }, 800);
        },
        changeSb () {
            this.show = !this.show
            this.aa = setInterval(() => {
                this.changeStep(4)
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