<template>
    <div  class="nps-customer">
        <Tips></Tips>
        <div class="nps-customer-img">
            <div class="nps-customer-transform">
                <img src="../img/xc-bg.png">
            </div>
        </div>
        <div class="nps-customer-title text-white content">
            <h2 class="margin-b-15">Nespresso 服务</h2>
            <p class="font-24">下午好，有什么可以帮助你的吗?</p>
        </div>
        <div class="nps-customer-content content">
            <ul class="customer-content-lists clearfix">
                <li class="content-lists-Order"  @mouseenter="isShow=!isShow">
                    <div class="lists-Order-mongolia ">
                        <transition name="show">
                            <div class="Order-mongolia-list text-white" v-if="isShow">
                                <img  src="../img/xc-suo.png"/>
                                <h2 class=" font-36 margin-tb-20">订购</h2>
                                <p class="font-16 padding-lr-35 margin-t-25">您可以通过在线、移动端或者电话全天候24小时订购最适合您需求的咖啡解决方案...</p>
                            </div>
                        </transition>
                        <transition name="out">
                            <div class="mongolia-list-btn" v-if="isShow">
                                <span class="mongolia-list-button">+</span>
                            </div>
                        </transition>
                    </div>
                    <div  class="text-white mongolia-content-show" v-if="!isShow">
                        <h2 class="mongolia-list-show  font-36 padding-tb-20">订购</h2>
                        <div class="list-show-content">
                            <ul class="clearfix show-content-lists">
                                <li @click="Promptshow = true">
                                    <span class="iconfont icon-suo"></span>
                                    <p>线上</p>
                                </li>
                                <li>
                                    <span class="iconfont icon-shouji"></span>
                                    <p>手机订购</p>
                                </li>
                                <li>
                                    <span class="iconfont icon-8"></span>
                                    <p>精品店订购</p>
                                </li>
                                <li>
                                    <span class="iconfont icon-002dianhua"></span>
                                    <p>电话订购</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class=" text-white lists-oreder-list ">
                    <div class="lists-Order-module"></div>
                    <div class="nps-list-highest">
                        <div class="Order-pushed Order-pushed-top">
                            <img  src="../img/xc-suo.png"/>
                            <p class="font-16 margin-tb-10">在线订购</p>
                            <a>现在订购咖啡 <span class="el-icon-arrow-right"></span></a>
                        </div>
                        <div class="Order-pushed Order-pushed-bottom">
                            <p class="iconfont icon-002dianhua"></p>
                            <p class="font-16 margin-tb-10">手机订购</p>
                            <p class="font-14 margin-tb-10">我们的咖啡专员全天候24小时为您的咖啡选购提供建议</p>
                            <a>400 1200 600</a>
                        </div>
                    </div>
                </li>
                <li class="content-lists-Order nps-list-cont">
                    <div class="lists-Order-mongolia">
                        <transition name="show">
                            <div class="Order-mongolia-list text-white">
                                <span class="iconfont icon-yunshupeisong font-84"></span>
                                <h2 class=" font-36 margin-tb-20">配送</h2>
                                <p class="font-16 padding-lr-35 margin-t-25">配送也变得前所未有的简单。我们根据您的时间，按照最适合您的方式送达至您指定的地点。</p>
                            </div>
                        </transition>
                        <transition name="out">
                            <div class="mongolia-list-btn">
                                <span class="mongolia-list-button">+</span>
                            </div>
                        </transition>
                    </div>
                    <!-- <div  class="text-white mongolia-content-show">
                        <h2 class="mongolia-list-show  font-36 padding-tb-20">订购</h2>
                        <div class="list-show-content">
                            <ul class="clearfix show-content-lists">
                                <li @click="Promptshow = true">
                                    <span class="iconfont icon-suo"></span>
                                    <p>线上</p>
                                </li>
                                <li>
                                    <span class="iconfont icon-shouji"></span>
                                    <p>手机订购</p>
                                </li>
                                <li>
                                    <span class="iconfont icon-8"></span>
                                    <p>精品店订购</p>
                                </li>
                                <li>
                                    <span class="iconfont icon-002dianhua"></span>
                                    <p>电话订购</p>
                                </li>
                            </ul>
                        </div>
                    </div> -->
                </li>
                <li class="content-lists-Order nps-list-service">
                    <div class="lists-Order-mongolia">
                        <transition name="show">
                            <div class="Order-mongolia-list text-white">
                                <span class="iconfont icon-fuwu font-84"></span>
                                <h2 class=" font-36 margin-tb-20">客户服务</h2>
                                <p class="font-16 padding-lr-35 margin-t-25">您可以通过在线、移动端或者电话全天候24小时订购最适合您需求的咖啡解决方案……</p>
                            </div>
                        </transition>
                        <transition name="out">
                            <div class="mongolia-list-btn">
                                <span class="mongolia-list-button">+</span>
                            </div>
                        </transition>
                    </div>
                    <!-- <div  class="text-white mongolia-content-show">
                        <h2 class="mongolia-list-show  font-36 padding-tb-20">订购</h2>
                        <div class="list-show-content">
                            <ul class="clearfix show-content-lists">
                                <li @click="Promptshow = true">
                                    <span class="iconfont icon-suo"></span>
                                    <p>线上</p>
                                </li>
                                <li>
                                    <span class="iconfont icon-shouji"></span>
                                    <p>手机订购</p>
                                </li>
                                <li>
                                    <span class="iconfont icon-8"></span>
                                    <p>精品店订购</p>
                                </li>
                                <li>
                                    <span class="iconfont icon-002dianhua"></span>
                                    <p>电话订购</p>
                                </li>
                            </ul>
                        </div>
                    </div> -->
                </li>
                <li class="content-lists-Order nps-list-recovery">
                    <div class="lists-Order-mongolia">
                        <transition name="show">
                            <div class="Order-mongolia-list text-white">
                                <span class="iconfont icon-huishou font-84"></span>
                                <h2 class=" font-36 margin-tb-20">回收</h2>
                                <p class="font-16 padding-lr-35 margin-t-25">您可以通过在线、移动端或者电话全天候24小时订购最适合您需求的咖啡解决方案……</p>
                            </div>
                        </transition>
                        <transition name="out">
                            <div class="mongolia-list-btn">
                                <span class="mongolia-list-button">+</span>
                            </div>
                        </transition>
                    </div>
                    <!-- <div  class="text-white mongolia-content-show">
                        <h2 class="mongolia-list-show  font-36 padding-tb-20">订购</h2>
                        <div class="list-show-content">
                            <ul class="clearfix show-content-lists">
                                <li @click="Promptshow = true">
                                    <span class="iconfont icon-suo"></span>
                                    <p>线上</p>
                                </li>
                                <li>
                                    <span class="iconfont icon-shouji"></span>
                                    <p>手机订购</p>
                                </li>
                                <li>
                                    <span class="iconfont icon-8"></span>
                                    <p>精品店订购</p>
                                </li>
                                <li>
                                    <span class="iconfont icon-002dianhua"></span>
                                    <p>电话订购</p>
                                </li>
                            </ul>
                        </div>
                    </div> -->
                </li>
                <li class="content-lists-Order nps-list-Taste">
                    <div class="lists-Order-mongolia">
                        <transition name="show">
                            <div class="Order-mongolia-list text-white">
                                <span class="iconfont icon-boshimao1 font-84"></span>
                                <h2 class=" font-36 margin-tb-20">咖啡品鉴课</h2>
                                <p class="font-16 padding-lr-35 margin-t-25">我们与您一样，对咖啡充满热情，并且我们愿意与您一起分享我们的专业知识。</p>
                            </div>
                        </transition>
                        <transition name="out">
                            <div class="mongolia-list-btn">
                                <span class="mongolia-list-button">+</span>
                            </div>
                        </transition>
                    </div>
                    <!-- <div  class="text-white mongolia-content-show">
                        <h2 class="mongolia-list-show  font-36 padding-tb-20">订购</h2>
                        <div class="list-show-content">
                            <ul class="clearfix show-content-lists">
                                <li @click="Promptshow = true">
                                    <span class="iconfont icon-suo"></span>
                                    <p>线上</p>
                                </li>
                                <li>
                                    <span class="iconfont icon-shouji"></span>
                                    <p>手机订购</p>
                                </li>
                                <li>
                                    <span class="iconfont icon-8"></span>
                                    <p>精品店订购</p>
                                </li>
                                <li>
                                    <span class="iconfont icon-002dianhua"></span>
                                    <p>电话订购</p>
                                </li>
                            </ul>
                        </div>
                    </div> -->
                </li>
                <transition name="show">
                    <div class="Promptshow" v-if="Promptshow">
                        <div class="show-module"></div>
                        <div class="nps-Prompt-lists">
                            <div class="Prompt-lists-Close" @click="Promptshow = false">
                                <span class="el-icon-close"></span>
                            </div>
                            <ul class="nps-Prompt-content clearfix">
                                <li class="Small-navigation">
                                    <div class="mode-content"></div>
                                    <div class="Small-list">
                                        <img  src="../img/xc-suo.png" style="width: 109px; height: 109px;"/>
                                        <h2 class=" font-24 margin-tb-10 text-white">订购</h2>
                                        <ul class="clearfix show-content-list">
                                            <li class="active">
                                                <span class="iconfont icon-suo"></span>
                                                <p>线上</p>
                                            </li>
                                            <li>
                                                <span class="iconfont icon-shouji"></span>
                                                <p>手机订购</p>
                                            </li>
                                            <li>
                                                <span class="iconfont icon-8"></span>
                                                <p>精品店订购</p>
                                            </li>
                                            <li>
                                                <span class="iconfont icon-002dianhua"></span>
                                                <p>电话订购</p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="Small-navigation-rigth" >
                                    <p class="navigation-rigth-title">在线订购</p>
                                    <a class="navigation-rigth-buttom">订购胶囊</a>
                                    <div class="adiv"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </transition>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Tips from '../Tips'
import Footer from '../Footer'
export default {
    data () {
        return {
            isShow: true,
            Promptshow: false
        }
    },
    components: {
        Tips,
        Footer
    }
}
</script>

<style lang="less">
@import '../css/Customer.less';
@import '../font/iconfont.less';
</style>
