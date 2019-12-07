<template>
    <div class="nps-mycarousel">
        <div class="nps-block">
        <el-carousel trigger="click">
            <el-button class="nps-stop" icon="el-icon-video-play">
            </el-button>
            <el-carousel-item v-for="item in dataimg" :key="item.value">
                <div class="nps-carousel">
                    <img :src="item.src" alt="轮播" width="100%">
                    <div class="nps-carouseltxt text-center">
                        <p class="margin-b-20 text-white">{{item.txt}}</p>
                        <p class="margin-b-20 text-topyellow">{{item.txt1}}</p>
                        <p class="margin-b-25 text-white" v-html="item.txt2"></p>
                        <el-button class="btn text-white">立即购买</el-button>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
        </div>
        <div class="nps-banner content">
            <div class="nps-bannerimg clearfix">
                <a href="">
                    <img src="./img/banner_1.jpg" alt="" width="100%">
                </a>
            </div>
            <div class="nps-bannerimg clearfix">
                <a href="">
                    <img src="./img/banner_2.jpg" alt="" width="100%">
                </a>
            </div>
            <div class="nps-bannerMid">
                <div class="nps-bannerleft">
                    <div class="nps-bannerlefttop">
                        <img src="./img/qrcode.jpg" alt="" width="100%">
                        <div class="nps-bannerleftcont padding-20 font-16">
                            <h2 class="text-white margin-b-20">
                                Nespresso浓遇咖啡 iOS APP <br/><br/>您口袋中的咖啡
                            </h2>
                            <p class="text-gray margin-b-20 font-size-12">无论何时何地，享受Nespresso的服务</p>
                            <a href=""><p class="text-topyellow margin-b-20 font-size-12">现在下载Nespresso ios APP ></p></a>
                        </div>
                    </div>
                    <div class="nps-bannerleftbottom"></div>
                </div>
                <div class="nps-bannerright"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            dataimg: [
                {src: 'http://192.168.97.212:3000/img/jl-top-banner1.webp',
                txt: '购买任意200颗咖啡胶囊',
                txt1: '赠价值高达298元咖啡品饮杯一套.',
                txt2: '限量300个，送完即止'},
                {src: 'http://192.168.97.212:3000/img/jl-top-banner2.webp',
                txt: '全场咖啡机.',
                txt1: '最高立减400元',
                txt2: '活动时间：2019.11.1-2019.12.31'},
                {src: 'http://192.168.97.212:3000/img/jl-top-banner3.webp',
                txt: '购买CitiZ银色咖啡机.',
                txt1: '立减200元且赠一个价值800元的黑色奶沫机',
                txt2: '限量80台'},
                {src: 'http://192.168.97.212:3000/img/jl-top-banner4.webp',
                txt: '购物满2000元.',
                txt1: '赠一个价值280元胶囊展架',
                txt2: '限量1000个，送完即止'}
            ]
        }
    }
}
</script>
<style lang="less">
@import './less/topcarousel.less';
</style>
