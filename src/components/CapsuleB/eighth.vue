<template>
    <div class="nps-eighth">
        <div class="nps-eighth-title">获得为您做的选择</div>
        <div class="nps-eighth-cont">
            <a @click="changeIn" class="nps-cont-posn-a">
                <span class="el-icon-arrow-down"></span>
            </a>
            <div class="nps-cont-lists clearfix">
                <div class="nps-lists-list fl">
                    <div class="nps-list-img">
                        <img class="nps-img" src="./img/hezi01.png" />
                    </div>
                    <div class="nps-list-title">Scuro 斯库诺咖啡</div>
                    <div class="nps-list-store">CNY 3.80</div>
                    <div class="nps-list-car">
                        <span class="nps-car-i">+</span>
                        <span class="nps-car-sp">添加到购物车</span>
                    </div>
                </div>
                <div class="nps-lists-list fl">
                    <div class="nps-list-img">
                        <img class="nps-img" src="./img/hezi01.png" />
                    </div>
                    <div class="nps-list-title">Scuro 斯库诺咖啡</div>
                    <div class="nps-list-store">CNY 3.80</div>
                    <div class="nps-list-car">
                        <span class="nps-car-i">+</span>
                        <span class="nps-car-sp">添加到购物车</span>
                    </div>
                </div>
                <div class="nps-lists-list fl">
                    <div class="nps-list-img">
                        <img class="nps-img" src="./img/hezi01.png" />
                    </div>
                    <div class="nps-list-title">Scuro 斯库诺咖啡</div>
                    <div class="nps-list-store">CNY 3.80</div>
                    <div class="nps-list-car">
                        <span class="nps-car-i">+</span>
                        <span class="nps-car-sp">添加到购物车</span>
                    </div>
                </div>
                <div class="nps-lists-list fl">
                    <div class="nps-list-img">
                        <img class="nps-img" src="./img/hezi01.png" />
                    </div>
                    <div class="nps-list-title">Scuro 斯库诺咖啡</div>
                    <div class="nps-list-store">CNY 3.80</div>
                    <div class="nps-list-car">
                        <span class="nps-car-i">+</span>
                        <span class="nps-car-sp">添加到购物车</span>
                    </div>
                </div>
                <div class="nps-lists-list fl">
                    <div class="nps-list-img">
                        <img class="nps-img" src="./img/hezi01.png" />
                    </div>
                    <div class="nps-list-title">Scuro 斯库诺咖啡</div>
                    <div class="nps-list-store">CNY 3.80</div>
                    <!-- <div class="nps-list-car">
                        <span class="nps-car-i">+</span>
                        <span class="nps-car-sp">添加到购物车</span>
                    </div> -->
                    <div style="width: 138px;height: 33px;margin: 0 auto;">
                        <el-popover
                        ref="popover4"
                        placement="top"
                        width="220"
                        trigger="click">
                        <div class="nps-add-box">
                            <ul class="nps-add-box-lists clearfix">
                            <li :key="index" v-for="(item, index) in gridData">
                                <a  @click="getnumber(index)" class="nps-lists-num"><span>{{item}}</span></a>
                            </li>
                            </ul>
                            <div style="margin-top: 15px;">
                            <el-input class="nps-add-input" placeholder="选择一种数量" >
                                <template class="nps-add-confirm" slot="append">好</template>
                            </el-input>
                            </div>
                        </div>
                        </el-popover>
                        <el-button v-popover:popover4 class="nps-add-buttons">
                            <div class="nps-spcar">+</div>
                            <div class="nps-sptocar">添加到购物车</div>
                        </el-button>
                    </div>
                </div>
            </div>
            <div class="nps-cont-middle clearfix">
                <div class="nps-middle-left fl">
                    <img class="nps-left-img" src="./img/beiju01.png" />
                    <div class="nps-left-cont">
                        <div class="nps-cont-tatle">想测试这一切？选择您个人选中的50克咖啡胶囊套装</div>
                        <div class="nps-cont-con">
                            <div class="nps-lists-li">
                                <img src="./img/hezi01.png" />
                                <span>10 x Scuro 斯库诺咖啡</span>
                            </div>
                            <div class="nps-lists-li">
                                <img src="./img/hezi01.png" />
                                <span>10 x Chiaro 绮亚罗咖啡</span>
                            </div>
                            <div class="nps-lists-li">
                                <img src="./img/hezi01.png" />
                                <span>10 x 大师匠心之作 拉瓜咖啡</span>
                            </div>
                            <div class="nps-lists-li">
                                <img src="./img/hezi01.png" />
                                <span>10 x Volluto Decaffeinato</span>
                            </div>
                            <div class="nps-lists-li">
                                <img src="./img/hezi01.png" />
                                <span>10 x King</span>
                            </div>
                        </div>
                        <div class="nps-content-stor">CNY 192.00</div>
                        <div class="nps-content-car">
                            <span class="nps-car-spa">+</span>
                            <span class="nps-car-spb">添加到购物车</span>
                        </div>
                        <div class="nps-contnet-sin">* 上图只是举例。具体包装请以实物为准</div>
                    </div>
                </div>
                <div class="nps-middle-right fl">
                    <div class="nps-right-title">为什么这是合适您的选择？</div>
                    <div class="nps-right-list">根据你的答案，我们已经确定了Nespresso优选咖啡中较为合适您的香气喜好和品尝习惯的咖啡</div>
                    <div class="nps-right-cont">
                        <a @click="changeSt" class="nps-right-cont-a"><span class="pobp el-icon-refresh"></span>重新开始选择我的咖啡</a>
                        <a>
                            <span class="el-icon-share pobp"></span>
                        </a>
                        <el-tooltip placement="top">
                            <div slot="content">
                                <span class="el-icon-s-promotion"><a>  飞信</a></span>
                            </div>
                            <el-button>分享到</el-button>
                        </el-tooltip>
                    </div>
                </div>
            </div>
        </div>
        <div class="nps-bottom">
            <div class="nps-bottom-cont">
                <router-link to="/caphome">继续购物</router-link>
                <span>或</span>
                <a class="nps-btm-b">结账</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        changeStep: Function
    },
    data () {
        return {
            gridData: [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300]
        }
    },
    methods: {
        changeSt () {
            this.changeStep(2)
        },
        changeIn () {
            document.documentElement.scrollTop = 330
        }
    }
}
</script>

<style lang="less">
@import "./css/eighth.less";
</style>
