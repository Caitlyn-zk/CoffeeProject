<template>
    <div class="nps-mycarousel">
        <div class="padding-15">
            <Tips></Tips>
        </div>
        <div class="nps-block content">
        <el-carousel trigger="click" :autoplay="autoname">
            <el-button class="nps-start" @click="start">
                <div v-show="!show" class="el-icon-video-play"></div>
                <div v-show="show" class="el-icon-video-pause"></div>
            </el-button>
            <el-carousel-item v-for="item in dataimg" :key="item.value">
                <div class="nps-carousel">
                    <img :src="item.src" alt="轮播" width="100%" height="100%">
                    <div class="nps-carouseltxt text-center">
                        <p class="margin-b-20 text-white">{{item.txt}}</p>
                        <p class="margin-b-20 text-topyellow">{{item.txt1}}</p>
                        <p class="margin-b-25 text-white" v-html="item.txt2"></p>
                        <router-link to="/caphome">
                            <el-button class="nps-btn text-white">立即购买</el-button>
                        </router-link>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
        </div>
        <div class="nps-banner content">
            <div class="nps-bannerimg clearfix">
                <a href="">
                    <img src="./img/banner_1.jpg" alt="" width="100%" height="100%">
                </a>
            </div>
            <div class="nps-bannerimg clearfix">
                <a href="">
                    <img src="./img/banner_2.jpg" alt="" width="100%" height="100%">
                </a>
            </div>
            <div class="nps-bannerMid">
                <div class="nps-bannerleft">
                    <div class="nps-bannerlefttop">
                        <img src="./img/qrcode.jpg" alt="" width="100%" height="100%">
                        <div class="nps-bannerleftcont padding-20">
                            <h2 class="text-white margin-b-20 font-16">
                                Nespresso浓遇咖啡 iOS APP <br/><br/>您口袋中的咖啡
                            </h2>
                            <p class="text-gray margin-b-20 font-12">无论何时何地，享受Nespresso的服务</p>
                            <a href=""><p class="text-topyellow margin-b-20 font-12">现在下载Nespresso ios APP ></p></a>
                        </div>
                    </div>
                    <div class="nps-bannerleftbottom padding-t-10 padding-l-20 padding-r-20 padding-b-10">
                        <p class="margin-b-10 text-white font-16"><span class="margin-r-5">NESPRESSO</span><span>线下活动&咖啡配方</span></p>
                        <router-link to="/offline">
                            <p class="font-12"><a class="text-topyellow" href="">查看您附近的线下活动 ></a></p>
                        </router-link>
                        <div class="nps-l fl">
                            <img src="./img/bannerbottom1.jpg" alt="" width="100%">
                            <p class="text-white margin-5px font-16 padding-t-20 padding-b-20">Nespresso @ 设计上海2019</p>
                            <span class="text-gray font-12 margin-b-10">这个3月，Nespresso咖啡体验馆亮相2019“设计上海”。带您邂逅伊斯坦布尔咖啡馆风情，开启一场穿梭古今的咖啡探索之旅。</span>
                            <p><a class="text-topyellow font-12" href="">立即探索</a></p>
                        </div>
                        <div class="nps-r fl">
                            <img src="./img/bannerbottom2.jpg" alt="" width="100%">
                            <p class="text-white margin-5px font-16 padding-t-20 padding-b-20">纵享曼妙的北欧滋味</p>
                            <span class="text-gray font-12 margin-b-10">我们全新限量版咖啡受到北欧传统的启发，带你重新感受与亲朋好友共度美好时光的温暖。</span>
                            <p><a class="text-topyellow font-12" href="">发现更多 ></a></p>
                        </div>
                    </div>
                </div>
                <div class="nps-bannerright">
                    <h2 class="text-white font-16 padding-15 margin-b-8">Nespresso 浓遇咖啡为您推荐</h2>
                    <el-row>
                        <el-col :span="8">
                            <a class="nps-track" href="">
                                <div class="padding-t-30">
                                    <img src="./img/smallbook.png" alt="" width="100px" height="100px">
                                </div>
                                <span class="nps-icon-new text-white">新上市</span>
                            </a>
                            <p class="nps-pcont margin-b-5 font-12">节日精选限量版风味咖啡5条装</p>
                            <p class="text-white font-12">RMB 229.00</p>
                            <div class="nps-addshop">
                                <Shoppingadd></Shoppingadd>
                            </div>
                        </el-col>
                        <el-col :span="8" class="nps-col-two">
                              <a class="nps-track" href="">
                                <div class="padding-t-30">
                                    <img src="./img/red.png" alt="" width="100px" height="100px">
                                </div>
                                <span class="nps-icon-new text-white">新上市</span>
                            </a>
                            <p class="nps-pcont margin-b-5 font-12">Nordic Cloudberry Flavoured</p>
                            <p class="text-white font-12">RMB 4.70</p>
                            <div class="nps-addshop">
                                <Shoppingadd></Shoppingadd>
                            </div>
                        </el-col>
                        <el-col :span="8" class="nps-col-three">
                              <a class="nps-track" href="">
                                <div class="padding-t-30">
                                    <img src="./img/whiteblack.png" alt="" width="100px" height="100px">
                                </div>
                                <span class="nps-icon-new text-white">新上市</span>
                            </a>
                            <p class="nps-pcont margin-b-5 font-12">Almond Cake Flavoured</p>
                            <p class="text-white font-12">RMB 4.70</p>
                            <div class="nps-addshop">
                                <Shoppingadd></Shoppingadd>
                            </div>
                        </el-col>
                         <el-col :span="16" class="nps-mid margin-t-15">
                              <a class="nps-track" href="">
                                <div class="padding-t-30">
                                    <img src="./img/use.jpg" alt="" width="280px" height="280px">
                                </div>
                                <span class="nps-icon-new text-white">立减400元</span>
                            </a>
                            <p class="nps-pcont margin-b-5 font-12">Creatista Plus</p>
                            <p class="text-white font-12">RMB 4166.00</p>
                            <div class="nps-addshop">
                                <Shoppingadd></Shoppingadd>
                            </div>
                        </el-col>
                        <el-col :span="8" class="nps-col-three">
                              <a class="nps-track" href="">
                                <div class="padding-t-30">
                                    <img src="./img/blueblack.png" alt="" width="100px" height="100px">
                                </div>
                                <span class="nps-icon-new text-white">新上市</span>
                            </a>
                            <p class="nps-pcont margin-b-5 font-12">Nordic Black</p>
                            <p class="text-white font-12">RMB 4.70 </p>
                            <div class="nps-addshop">
                                <Shoppingadd></Shoppingadd>
                            </div>
                        </el-col>
                        <el-col :span="8" class="nps-col-three">
                              <a class="nps-track" href="">
                                <div class="padding-t-30">
                                    <img src="./img/coffecup.png" alt="" width="100px" height="100px">
                                </div>
                                <span class="nps-icon-new text-white">新上市</span>
                            </a>
                            <p class="nps-pcont margin-b-5 font-12">Aeroccino 4 奶沫机</p>
                            <p class="text-white font-12">RMB 900.00</p>
                            <div class="nps-addshop">
                                <Shoppingadd></Shoppingadd>
                            </div>
                        </el-col>
                         <el-col :span="16" class="nps-mid margin-t-15 nps-bottom">
                              <a class="nps-track" href="">
                                <div class="padding-t-30">
                                    <img src="./img/coffemike.png" alt="" width="200px" height="100px">
                                </div>
                                <span class="nps-icon-new text-white">立减300元</span>
                            </a>
                            <p class="nps-pcont margin-b-5 font-12">Essenza Mini C30 白色 咖啡机奶沫机套装</p>
                            <p class="text-white font-12">RMB 1666.00</p>
                            <div class="nps-addshop">
                                <Shoppingadd></Shoppingadd>
                            </div>
                        </el-col>
                         <el-col :span="8" class="nps-col-three nps-lastbottom">
                              <a class="nps-track" href="">
                                <div class="padding-t-30">
                                    <img src="./img/black.png" alt="" width="100px" height="100px">
                                </div>
                            </a>
                            <p class="nps-pcont margin-b-5 font-12">黄砂糖</p>
                            <p class="text-white font-12">RMB 50.00</p>
                            <div class="nps-addshop">
                                <Shoppingadd></Shoppingadd>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <Support></Support>
        <Footer></Footer>
    </div>
</template>

<script>
import Shoppingadd from '.././Order/shopping-add'
import Support from '.././service/Support'
import Footer from '.././service/Footer'
import Tips from '.././service/Tips'
export default {
    data () {
        return {
            show: true,
            autoname: true,
            dataimg: [
                {src: 'http://192.168.97.240:3000/img/jl-top-banner1.webp',
                txt: '购买任意200颗咖啡胶囊',
                txt1: '赠价值高达298元咖啡品饮杯一套.',
                txt2: '限量300个，送完即止'},
                {src: 'http://192.168.97.240:3000/img/jl-top-banner2.webp',
                txt: '全场咖啡机.',
                txt1: '最高立减400元',
                txt2: '活动时间：2019.11.1-2019.12.31'},
                {src: 'http://192.168.97.240:3000/img/jl-top-banner3.webp',
                txt: '购买CitiZ银色咖啡机.',
                txt1: '立减200元且赠一个价值800元的黑色奶沫机',
                txt2: '限量80台'},
                {src: 'http://192.168.97.240:3000/img/jl-top-banner4.webp',
                txt: '购物满2000元.',
                txt1: '赠一个价值280元胶囊展架',
                txt2: '限量1000个，送完即止'}
            ]
        }
    },
    components: {
        Shoppingadd,
        Footer,
        Support,
        Tips
    },
    methods: {
        start () {
            this.autoname = !this.autoname
            this.show = !this.show
        }
    }
}
</script>
<style lang="less" scoped>
@import './less/topcarousel.less';
</style>
