<template>
    <div class="nps-detai content">
        <div class="nps-detai-top clearfix">
            <div class="nps-top-icon el-icon-search"></div>
            <el-input class="nps-top-inpt" placeholder="输入原材料，心情，配方....."></el-input>
            <div class="nps-top-iconb el-icon-place"></div>
            <a class="nps-top-a font-18">搜索</a>
        </div>
        <div class="nps-cont">
            <img class="nps-img" src="./img/bg01.jpg" />
            <div class="nps-cont-lists">
                <img :key="index" v-for="(star,index) in stars" v-bind:src="star.src" v-on:click="rating(index)" alt="星星图片" />
                <span class="nps-lists-sp">{{starNum}}</span>
            </div>
            <div class="nps-cont-text clearfix">
                <div class="nps-text-list fl">
                    <div class="nps-list-tatle font-28">草莓大杯咖啡</div>
                    <div class="nps-list-lists">
                        <span class="nps-el-icon el-icon-time"></span>
                        <span class="nps-el-icon el-icon-document-remove"></span>
                        <span>简单</span>
                    </div>
                </div>
                <div class="nps-text-right fl">
                    <div class="nps-tight-title">
                        <img src="./img/tx01.jpg" />
                    </div>
                    <p class="nps-right-p">主厨配方</p>
                    <p>Sacha Wittorski</p>
                    <p class="nps-right-p-c">探索</p>
                </div>
            </div>
        </div>
        <div class="nps-needed">
            <div class="nps-needed-title">这是你所需要的</div>
            <div class="nps-needed-list clearfix">
                <div class="nps-list-left fl clearfix">
                    <div class="nps-left-table clearfix">
                        <div class="nps-table-a fl">配料</div>
                        <div class="nps-table-b fl">
                            <a @click="into">-</a>
                            <span class="el-icon-user">{{king/stor}}</span>
                            <a @click="inmm">+</a>
                        </div>
                    </div>
                    <div class="nps-left-list fl">
                        <div class="nps-list">
                            <img src="./img/kafei01.jpg"/>
                        </div>
                        <p class="font-14">蓝莓果酱</p>
                        <span class="font-16">{{king}}克</span>
                    </div>
                </div>
                <div class="nps-list-right fl">
                    <div class="nps-list-right-a margin-t-20">工具</div>
                </div>
            </div>
        </div>
        <div class="nps-step">
            <div class="nps-step-title">如何完成这个食谱？</div>
            <div class="nps-step-list">
                <div class="nps-one clearfix">
                    <div class="fl nps-list-table">
                        <span>步骤</span>
                        <p>01</p>
                    </div>
                    <div class="toop fl"></div>
                    <div class="nps-list-cont fl">在浓缩咖啡里加入1小勺蓝莓果酱</div>
                    <div class="toop-in"></div>
                </div>
                <div class="clearfix">
                    <div class="fl nps-list-table">
                        <span>步骤</span>
                        <p>02</p>
                    </div>
                    <div class="toop fl"></div>
                    <div class="nps-list-cont fl">萃取110毫升北欧黑咖啡并混合蓝莓果酱</div>
                </div>
            </div>
        </div>
        <div class="nps-recmd">
            <div class="nps-recmd-title">推荐使用的NESPRESSO咖啡</div>
            <div class="nps-recmd-type">
                <i class="nps-recmd-icon el-icon-hot-water"></i>
                <span>经典奶茶</span>
            </div>
            <div class="nps-recmd-list">
                <div class="nps-list-cont">
                    <img src="./img/heikf01.png" />
                    <span class="nps-cont-sp">北欧黑咖啡</span>
                    <div class="nps-cont-list">
                        <span>5</span>
                        <span class="nps-list-on sp-on"></span>
                        <span class="nps-list-on sp-on"></span>
                        <span class="nps-list-on sp-on"></span>
                        <span class="nps-list-on sp-on"></span>
                        <span class="nps-list-on sp-on"></span>
                        <span class="nps-list-on"></span>
                        <span class="nps-list-on"></span>
                        <span class="nps-list-on"></span>
                        <span class="nps-list-on"></span>
                        <span class="nps-list-on"></span>
                        <span class="nps-list-on"></span>
                        <span class="nps-list-on"></span>
                    </div>
                </div>
            </div>
            <a class="nps-recmd-a">
                <span class="nps-a-sp">+</span>
                <span class="nps-a-spt">加入购物车</span>
            </a>
            <a class="nps-cecmd-ab">发现更多优选咖啡</a>
        </div>
    </div>
</template>

<script>
import starOffImg from './img/xx01.png'
import starOnImg from './img/xx02.png'
export default {
    data () {
        return {
            starOffImg,
            starOnImg,
            king: 30,
            stor: 30,
            yy: 1,
            stars: [{
                    src: starOffImg,
                    active: false
                }, {
                    src: starOffImg,
                    active: false
                }, {
                    src: starOffImg,
                    active: false
                },
                {
                    src: starOffImg,
                    active: false
                }, {
                    src: starOffImg,
                    active: false
                }
            ],
            starNum: 0
        }
    },
    methods: {
        inmm () {
            this.king += 30
        },
        into () {
            if (this.king > 30) {
                this.king -= 30
            } else {
                this.king = 30
            }
        },
        rating: function (index) {
            var total = this.stars.length
            var idx = index + 1
            if (this.starNum === 0) {
                this.starNum = idx
                for (var i = 0; i < idx; i++) {
                    this.stars[i].src = this.starOnImg
                    this.stars[i].active = true
                }
            } else {
                if (idx === this.starNum) {
                    for (var a = index; a < total; a++) {
                        this.stars[a].src = this.starOffImg
                        this.stars[a].active = false
                    }
                }
                if (idx < this.starNum) {
                    for (var b = idx; b < this.starNum; b++) {
                        this.stars[b].src = this.starOffImg
                        this.stars[b].active = false
                    }
                }
                if (idx > this.starNum) {
                    for (var c = 0; c < idx; c++) {
                        this.stars[c].src = this.starOnImg
                        this.stars[c].active = true
                    }
                }
                var count = 0
                for (var d = 0; d < total; d++) {
                    if (this.stars[d].active) {
                        count++
                    }
                }
                this.starNum = count
            }
        }
    }
}
</script>

<style lang="less">
@import './css/Yyb.less';
</style>
