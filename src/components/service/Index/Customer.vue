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
                <li class="content-lists-Order"  >
                    <div class="lists-Order-mongolia" @click="isShow=!isShow">
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
                            <ul class="clearfix">
                                <li>123</li>
                                <li>123</li>
                                <li>123</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="lists-Order-pushed text-white">
                    2222
                </li>
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
            isShow: true
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
</style>
