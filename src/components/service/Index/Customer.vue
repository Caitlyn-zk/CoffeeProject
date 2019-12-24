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
                <!-- 订购模块 -->
                <li class="content-lists-Order" @mouseleave="isShow = true" @mouseenter="isShow = false">
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
                                <li @click="Promptshow = true">
                                    <span class="iconfont icon-shouji"></span>
                                    <p>手机订购</p>
                                </li>
                                <li @click="Promptshow = true">
                                    <span class="iconfont icon-8"></span>
                                    <p>精品店订购</p>
                                </li>
                                <li class="nps-call-content" @click="Promptshow = true">
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
                            <router-link to="/">现在订购咖啡 <span class="el-icon-arrow-right"></span></router-link>
                        </div>
                        <div class="Order-pushed Order-pushed-bottom">
                            <p class="iconfont icon-002dianhua"></p>
                            <p class="font-16 margin-tb-10">手机订购</p>
                            <p class="font-14 margin-tb-10">我们的咖啡专员全天候24小时为您的咖啡选购提供建议</p>
                            <a>400 1200 600</a>
                        </div>
                    </div>
                </li>
                <!-- 配送模块 -->
                <li class="content-lists-Order nps-list-cont" @mouseleave="Deliverys = true" @mouseenter="Deliverys = false">
                    <div class="lists-Order-mongolia">
                        <transition name="show">
                            <div class="Order-mongolia-list text-white" v-if="Deliverys">
                                <span class="iconfont icon-yunshupeisong font-84"></span>
                                <h2 class=" font-36 margin-tb-20">配送</h2>
                                <p class="font-16 padding-lr-35 margin-t-25">配送也变得前所未有的简单。我们根据您的时间，按照最适合您的方式送达至您指定的地点。</p>
                            </div>
                        </transition>
                        <transition name="out">
                            <div class="mongolia-list-btn" v-if="Deliverys">
                                <span class="mongolia-list-button">+</span>
                            </div>
                        </transition>
                    </div>
                    <div  class="text-white mongolia-content-show nps-Deliverys" v-if="!Deliverys">
                        <h2 class="mongolia-list-show  font-36 padding-tb-20">配送</h2>
                        <div class="list-show-content">
                            <ul class="clearfix show-content-lists">
                                <li @click="Delivery = true">
                                    <span class="iconfont icon-yunshupeisong"></span>
                                    <p>标准配送</p>
                                </li>
                                <li @click="Delivery = true">
                                    <span class="iconfont icon-wuliupeisong-"></span>
                                    <p>两个工作日快速到货</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <!-- 顾客服务 -->
                <li class="content-lists-Order nps-list-service" @mouseleave="Services = true" @mouseenter="Services = false">
                    <div class="lists-Order-mongolia">
                        <transition name="show">
                            <div class="Order-mongolia-list text-white" v-if="Services">
                                <span class="iconfont icon-fuwu font-84"></span>
                                <h2 class=" font-36 margin-tb-20">客户服务</h2>
                                <p class="font-16 padding-lr-35 margin-t-25">您可以通过在线、移动端或者电话全天候24小时订购最适合您需求的咖啡解决方案……</p>
                            </div>
                        </transition>
                        <transition name="out">
                            <div class="mongolia-list-btn" v-if="Services">
                                <span class="mongolia-list-button">+</span>
                            </div>
                        </transition>
                    </div>
                    <div  class="text-white mongolia-content-show nps-service" v-if="!Services">
                        <h2 class="mongolia-list-show  font-36 padding-tb-20">客户服务</h2>
                        <div class="list-show-content">
                            <ul class="clearfix show-content-lists">
                                <li @click="service = true">
                                    <span class="iconfont icon-weibiaoti-"></span>
                                    <p>咖啡机技术支持</p>
                                </li>
                                <li @click="service = true">
                                    <span class="iconfont icon-fuwu"></span>
                                    <p>24/7客户服务</p>
                                </li>
                                <li @click="service = true">
                                    <span class="iconfont icon-weixiu"></span>
                                    <p>维修服务/租赁</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <!-- 回收 -->
                <li class="content-lists-Order nps-list-recovery" @mouseleave="recoverys = true" @mouseenter="recoverys = false">
                    <div class="lists-Order-mongolia">
                        <transition name="show">
                            <div class="Order-mongolia-list text-white" v-if="recoverys">
                                <span class="iconfont icon-huishou font-84"></span>
                                <h2 class=" font-36 margin-tb-20">回收</h2>
                                <p class="font-16 padding-lr-35 margin-t-25">您可以通过在线、移动端或者电话全天候24小时订购最适合您需求的咖啡解决方案……</p>
                            </div>
                        </transition>
                        <transition name="out">
                            <div class="mongolia-list-btn" v-if="recoverys">
                                <span class="mongolia-list-button">+</span>
                            </div>
                        </transition>
                    </div>
                    <div  class="text-white mongolia-content-show nps-recovery" v-if="!recoverys">
                        <h2 class="mongolia-list-show  font-36 padding-tb-20">回收</h2>
                        <div class="list-show-content">
                            <ul class="clearfix show-content-lists">
                                <li @click="recovery = true">
                                    <span class="iconfont icon-huishou"></span>
                                    <p>回收点</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <!-- 品尝 -->
                <li class="content-lists-Order nps-list-Taste" @mouseleave="Tastes = true" @mouseenter="Tastes = false">
                    <div class="lists-Order-mongolia">
                        <transition name="show">
                            <div class="Order-mongolia-list text-white" v-if="Tastes">
                                <span class="iconfont icon-boshimao1 font-84"></span>
                                <h2 class=" font-36 margin-tb-20">咖啡品鉴课</h2>
                                <p class="font-16 padding-lr-35 margin-t-25">我们与您一样，对咖啡充满热情，并且我们愿意与您一起分享我们的专业知识。</p>
                            </div>
                        </transition>
                        <transition name="out">
                            <div class="mongolia-list-btn" v-if="Tastes">
                                <span class="mongolia-list-button">+</span>
                            </div>
                        </transition>
                    </div>
                    <div  class="text-white mongolia-content-show nps-Deliverys" v-if="!Tastes">
                        <h2 class="mongolia-list-show  font-36 padding-tb-20">咖啡品鉴课</h2>
                        <div class="list-show-content">
                            <ul class="clearfix show-content-lists">
                                <li @click="Taste = true">
                                    <span class="iconfont icon-boshimao1"></span>
                                    <p>咖啡品鉴课</p>
                                </li>
                                <li @click="Taste = true">
                                    <span class="iconfont icon-icon-test"></span>
                                    <p>咖啡品鉴</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <div>
                    <!-- 订购 -->
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
                                                <li @click="cur=0" :class="{active:cur==0}">
                                                    <span class="iconfont icon-suo"></span>
                                                    <p>线上</p>
                                                </li>
                                                <li @click="cur=1" :class="{active:cur==1}">
                                                    <span class="iconfont icon-shouji"></span>
                                                    <p>手机订购</p>
                                                </li>
                                                <li @click="cur=2" :class="{active:cur==2}">
                                                    <span class="iconfont icon-8"></span>
                                                    <p>精品店订购</p>
                                                </li>
                                                <li  class="nps-list-content" @click="cur=3" :class="{active:cur==3}">
                                                    <span class="iconfont icon-002dianhua"></span>
                                                    <p>电话订购</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="Small-navigation-rigth" >
                                        <p class="navigation-rigth-title">在线订购</p>
                                        <router-link to="/caphome" class="navigation-rigth-buttom">订购胶囊</router-link>
                                        <div class="Mobile-phone-order">
                                            <p class="font-18 text-weight margin-b-15">手机订购</p>
                                            <p class="font-16 text-weight margin-b-15">口袋里的NESPRESSO精品店</p>
                                            <p class="font-16 margin-b-15">通过我们的移动应用联系我们，享受我们的客户服务，包括随时随地订购您最爱的咖啡胶囊。</p>
                                            <p class="font-16 margin-b-15">我们提供免费配送（购物满350元或任意一台咖啡机或任意100粒胶囊），还有其它灵活的配送选项，满足您的需求。</p>
                                            <p class="font-16 text-weight margin-b-15">移动应用方便吗？我们认为是方便的。</p>
                                            <p class="font-16 margin-b-15">通过Nespresso移动应用，您可以：</p>
                                            <p class="font-16 margin-b-15"></p>
                                            <div class="nps-lookup">
                                                <ul>
                                                    <li>轻松订购您的咖啡</li>
                                                    <li>查找附近的精品店</li>
                                                    <li>了解最新的Nespresso资讯</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="nps-telephone">
                                            <p class="font-18 text-weight margin-b-15">电话订购</p>
                                            <p class="font-16 text-weight margin-b-15">指尖的NESPRESSO</p>
                                            <p class="font-16 margin-b-15">我们的咖啡专员全天候24小时在线，为您在咖啡选择时提供建议，以及确保您的订单完全按照您的需求送达。</p>
                                            <p class="font-16 margin-b-15">欢迎拨打我们的免费电话 4001200600。我们将尽快为您配送（购买100颗及以上的咖啡胶囊，任意咖啡机或者购物满350元即可享受免费配送）</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </transition>
                    <!-- 配送模块 -->
                    <div class="Promptshow Delivery" v-if="Delivery">
                        <div class="show-module"></div>
                        <div class="nps-Prompt-lists">
                            <div class="Prompt-lists-Close" @click="Delivery = false">
                                <span class="el-icon-close"></span>
                            </div>
                            <ul class="nps-Prompt-content clearfix">
                                <li class="Small-navigation">
                                    <div class="mode-content"></div>
                                    <div class="Small-list">
                                        <p class="iconfont icon-yunshupeisong text-white font-84"></p>
                                        <h2 class=" font-24 margin-tb-10 text-white">配送</h2>
                                        <ul class="clearfix show-content-list">
                                            <li @click="cur=4" :class="{active:cur==4}">
                                                <span class="iconfont icon-yunshupeisong"></span>
                                                <p>标准配送</p>
                                            </li>
                                            <li @click="cur=5" :class="{active:cur==5}">
                                                <span class="iconfont icon-wuliupeisong-"></span>
                                                <p>两个工作日快速到货</p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="Small-navigation-rigth" >
                                    <p class="navigation-rigth-title">标准配送</p>
                                    <p class="font-16 text-weight margin-b-15">享用一杯NESPRESSO</p>
                                    <p class="font-16 margin-b-15">您是否希望在最方便您的时间接收咖啡胶囊或者其他的Nespresso产品呢？当然没问题。您可以全天候24小时下订单。我们将尽快安排配送（购买100颗及以上的咖啡胶囊，任意咖啡机或者购物满340元即可享受免费配送），确保您可以尽快享用。</p>
                                    <div class="nps-telephone margin-t-30">
                                        <p class="font-18 text-weight margin-b-15">两个工作日快速到货</p>
                                        <p class="font-16 text-weight margin-b-15">全天候享用您的NESPRESSO</p>
                                        <p class="font-16 margin-b-15">北京/上海地区订单， 您可在两个工作日内收到所购买产品。</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 顾客服务 -->
                    <div class="Promptshow service" v-if="service">
                        <div class="show-module"></div>
                        <div class="nps-Prompt-lists">
                            <div class="Prompt-lists-Close" @click="service = false">
                                <span class="el-icon-close"></span>
                            </div>
                            <ul class="nps-Prompt-content clearfix">
                                <li class="Small-navigation">
                                    <div class="mode-content"></div>
                                    <div class="Small-list">
                                        <p class="iconfont icon-yunshupeisong text-white font-84"></p>
                                        <h2 class=" font-24 margin-tb-10 text-white">配送</h2>
                                        <ul class="clearfix show-content-list">
                                            <li @click="cur=6" :class="{active:cur==6}">
                                                <span class="iconfont icon-weibiaoti-"></span>
                                                <p>咖啡机技术支持</p>
                                            </li>
                                            <li @click="cur=7" :class="{active:cur==7}">
                                                <span class="iconfont icon-fuwu"></span>
                                                <p>24/7客户服务</p>
                                            </li>
                                            <li @click="cur=8" :class="{active:cur==8}">
                                                <span class="iconfont icon-weixiu"></span>
                                                <p>维修服务/租赁</p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="Small-navigation-rigth" >
                                    <p class="navigation-rigth-title">咖啡机技术支持</p>
                                    <p class="font-16 text-weight margin-b-15">实现咖啡机的最大化利用</p>
                                    <p class="font-16 margin-b-15">您是否想要一些建议，让您的咖啡机始终流畅运转呢？我们乐意帮助。我们为您提供咖啡机清洁、除垢和预设，甚至解决潜在问题的建议。</p>
                                    <div class="nps-telephone margin-t-30">
                                        <p class="font-18 text-weight margin-b-15">24/7 客户服务</p>
                                        <p class="font-16 text-weight margin-b-15">您对咖啡机的使用有所疑问？我们乐意帮助</p>
                                        <p class="font-16 margin-b-15">您当然希望您的Nespresso咖啡机从未出现任何问题，我们十分理解。但是，如果确实出现意外情况，我们将会为您排忧解难。</p>
                                        <p class="font-16">技术诊断</p>
                                        <p class="font-16 margin-b-15">我们将通过直接的电话协助帮助您立即进行咖啡机诊断，然后为您提供最佳的解决方案。您可以通过拨打我们的客服电话4001200600，联系我们的咖啡专员，或者要求回电。我们每周七天，全天为您提供服务。</p>
                                    </div>
                                    <div class="nps-telephone margin-t-30">
                                        <p class="font-18 text-weight margin-b-15">24/7 维修服务/租赁</p>
                                        <p class="font-16 text-weight margin-b-15">您的咖啡机出现故障？我们为您解决</p>
                                        <p class="font-16 margin-b-15">我们的支持服务包括在您家中提走咖啡机，然后在您的咖啡机维修期间，为您提供备用咖啡机。如果您的咖啡机在保修期内，将免除一切费用。</p>
                                        <p class="font-16 margin-b-15">* 如果依然处于制造商保修期内且在维修国内购买，则提供维护服务。如果不在保修期内，则会提供优惠。具体条款可致电4001200600详询。</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 回收 -->
                    <div class="Promptshow recovery" v-if="recovery">
                        <div class="show-module"></div>
                        <div class="nps-Prompt-lists">
                            <div class="Prompt-lists-Close" @click="recovery = false">
                                <span class="el-icon-close"></span>
                            </div>
                            <ul class="nps-Prompt-content clearfix">
                                <li class="Small-navigation">
                                    <div class="mode-content"></div>
                                    <div class="Small-list">
                                        <p class="iconfont icon-huishou text-white font-84"></p>
                                        <h2 class=" font-24 margin-tb-10 text-white">回收</h2>
                                        <ul class="clearfix show-content-list">
                                            <li @click="cur=9" :class="{active:cur==9}">
                                                <span class="iconfont icon-huishou"></span>
                                                <p>回收点</p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="Small-navigation-rigth" >
                                    <p class="navigation-rigth-title">回收点</p>
                                    <p class="font-16 text-weight margin-b-15">回收点</p>
                                    <p class="font-16 margin-b-15">我们承诺向您提供优质咖啡，并承担责任共同致力于将我们对环境的影响降至最低，正因如此，我们竭力将循环利用变得简单。</p>
                                    <div class="nps-telephone margin-t-30">
                                        <p class="font-18 text-weight margin-b-15">我们如何实现咖啡胶囊的循环利用</p>
                                        <p class="font-16 margin-b-15">如果您在日常享用咖啡的过程中，关注咖啡胶囊的循环利用，那么您的<span class="text-weight">Nespresso</span>咖啡胶囊将不只是美味，因为您还减少了对环境的影响。</p>
                                        <p class="font-16 margin-b-15">将您的咖啡胶囊放在我们的<span class="text-weight">Nespresso</span>精品店。点击 <router-link to="/address" class="text-weight">此处</router-link>，查找离您最近的精品店。</p>
                                        <p class="font-16 margin-b-15">点击 <router-link to="/" class="text-weight">此处</router-link>，了解更多我们的胶囊回收项目</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 品尝 -->
                    <div class="Promptshow Taste" v-if="Taste">
                        <div class="show-module"></div>
                        <div class="nps-Prompt-lists">
                            <div class="Prompt-lists-Close" @click="Taste = false">
                                <span class="el-icon-close"></span>
                            </div>
                            <ul class="nps-Prompt-content clearfix">
                                <li class="Small-navigation">
                                    <div class="mode-content"></div>
                                    <div class="Small-list">
                                        <p class="iconfont icon-boshimao1 text-white font-84"></p>
                                        <h2 class=" font-24 margin-tb-10 text-white">咖啡品鉴课</h2>
                                        <ul class="clearfix show-content-list">
                                            <li  @click="cur=10" :class="{active:cur==10}">
                                                <span class="iconfont icon-boshimao1"></span>
                                                <p>咖啡品鉴课</p>
                                            </li>
                                            <li @click="cur=11" :class="{active:cur==11}">
                                                <span class="iconfont icon-icon-test"></span>
                                                <p>咖啡品鉴</p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="Small-navigation-rigth" >
                                    <div class="nps-Taste-content">
                                        <p class="navigation-rigth-title">咖啡品鉴课</p>
                                        <p class="font-16 text-weight margin-b-15">发现品鉴咖啡的艺术</p>
                                        <p class="font-16 margin-b-15">我们与您一样，对咖啡充满热情，并且我们愿意与您一起分享我们的专业知识。</p>
                                        <p class="font-16 margin-b-15">目前上海和北京共三家精品店可预约参加咖啡品鉴课，您可提前致电店铺进行课程预约。具体时间、地点及联系方式如下：</p>
                                        <div class="nps-lookup">
                                            <ul class="clearfix">
                                                <li>上海iapm精品店 (周日 11:00-12:15)；地址：上海市徐汇区淮海中路999号上海环贸广场3层；电话：021-33566061</li>
                                                <li>北京三里屯精品店 (周日15:00-16:15)；地址：北京市朝阳区三里屯Village南区S2号楼一层；电话：010-65331040</li>
                                                <li>北京apm精品店 (周五 16:00-17:15)；地址：北京市东城区王府井大街138号L2-205；电话：010-65276520</li>
                                            </ul>
                                        </div>
                                        <div class="nps-telephone margin-t-20">
                                            <p class="font-16 margin-b-15 line-24">我们的宾客将能够学习咖啡品鉴的艺术，改善他们对口味的感知，拓展他们对咖啡的基本知识，同时升华咖啡体验，进入香味、口感、芳香和色彩的世界，而不只是咖啡。</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="navigation-rigth-title">咖啡品鉴课</p>
                                        <p class="font-16 text-weight margin-b-15">发现品鉴咖啡的艺术</p>
                                        <p class="font-16 margin-b-15">品尝您下一款最爱的咖啡</p>
                                        <p class="font-16 margin-b-15 line-24">发现在精品店内品尝咖啡的秘诀：观察顺滑的奶沫，细闻咖啡的芳香，品尝咖啡的口感，让您自己融入到咖啡专员所讲述的故事中。</p>
                                        <p class="font-16 margin-b-15 line-24">只需点击<router-link to="/address" class="text-weight">此处</router-link>查找您附近的精品店，了解更多的咖啡知识</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
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
            // 显示
            isShow: true,
            Deliverys: true,
            Services: true,
            recoverys: true,
            Tastes: true,
            // 弹框
            Promptshow: false,
            service: false,
            Delivery: false,
            recovery: false,
            Taste: false,
            cur: 0
        }
    },
    components: {
        Tips,
        Footer
    },
    methods: {
        remover () {
            this.isShow = false
        }
    }
}
</script>

<style lang="less">
@import '../css/Customer.less';
@import '../font/iconfont.less';
</style>
