<template>
    <div class="nps-first">
        <div class="nps-title clearfix">
            <transition name="span">
                <span v-if="show" class="fl">发现优选咖啡</span>
            </transition>
            <transition name="aa">
                <div v-if="show" class="nps-title-right fr">
                    <a class="nps-title-lists">选择我的优选咖啡</a>
                    <a>优选咖啡系列</a>
                    <a>原产地咖啡</a>
                    <a>咖啡知识</a>
                </div>
            </transition>
        </div>
        <transition name="slide">
            <div v-if="show" class="nps-middle">
                <div class="nps-middle-title">寻找适合您口味的咖啡</div>
                <div class="nps-middle-list">通过简单的测验，开始寻找适合您口味的咖啡</div>
                <a @click="changeSt" class="nps-middle-btn" >开始测验</a>
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
            aa: ''
        }
    },
    methods: {
        changeSt () {
            this.show = !this.show
            this.aa = setInterval(() => {
                this.changeStep(2)
            }, 800)
        }
    },
    beforeDestroy () {
        clearInterval(this.aa)
    }
}
</script>

<style>

</style>
