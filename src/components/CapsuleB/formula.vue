<template>
    <div class="nps-formlua content">
        <div class="nps-detai-top clearfix">
            <div class="nps-top-icon el-icon-search"></div>
            <el-input class="nps-top-inpt" placeholder="输入原材料，心情，配方....."></el-input>
            <div class="nps-top-iconb el-icon-place"></div>
            <a class="nps-top-a font-18">搜索</a>
        </div>
        <div class="nps-img-box">
            <div class="nps-img-list">
                <span>寻找</span>
                <a>灵感?</a>
            </div>
        </div>
        <div class="nps-middle">
            <div class="nps-middle-title">
                <span>探索</span>
                <a>NESPRESSO配方</a>
            </div>
            <div class="nps-middle-cont clearfix">
                <router-link v-for="(item,index) in count" :key="index" to="/datai">
                    <List></List>
                    <List></List>
                </router-link>
            </div>
            <div class="nps-middle-more">
                <a @click="showDD">
                    <span v-if="show">加载更多内容</span>
                    <i v-if="pick" class="el-icon-loading"></i>
                </a>
            </div>
        </div>
        <Bottom></Bottom>
    </div>
</template>

<script>
import List from './formulelist'
import Bottom from './bottom'
export default {
    data () {
        return {
            show: true,
            pick: false,
            count: [List]
        }
    },
    methods: {
        showDD () {
            this.show = !this.show
            this.pick = !this.pick
            this.pick = setInterval(() => {
                this.pick = false
                this.show = true
            }, 1000)
            this.count.push({})
        }
    },
    beforeDestrioy () {
        clearInterval(this.pick)
    },
    components: {
        Bottom,
        List
    }
}
</script>

<style lang="less">
@import './css/Yyb.less';
</style>
