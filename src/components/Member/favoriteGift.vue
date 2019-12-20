<template>
  <div class="favoriteGift">
    <div class="content favorite-gift-box">
        <!-- 第一部分 -->
        <div class="favorite-step first" :class="{active:isActive == 1}">
            <div class="favorite-title-introduce-box">
                <div class="favorite-title-top">为不同场合选择理想的Nespresso礼品</div>
                <div class="favorite-title-top-bottom first">希望通过这份心意，祝福</div>
            </div>
            <ul class="favorite-gift-box-ul">
                <li class="favorite-gift" @click="changeTab(2),changeMessage(1)">
                    <img src="./meberImg/lyk-favorite-icon1.png"/>
                    <div>圣诞快乐</div>
                </li>
                <li class="favorite-gift"  @click="changeTab(2),changeMessage(2)">
                    <img src="./meberImg/lyk-favorite-icon2.png"/>
                    <div>生日快乐</div>
                </li>
                <li class="favorite-gift"  @click="changeTab(2),changeMessage(3)">
                    <img src="./meberImg/lyk-favorite-icon3.png"/>
                    <div>情人节快乐</div>
                </li>
                <li class="favorite-gift"  @click="changeTab(2),changeMessage(4)">
                    <img src="./meberImg/lyk-favorite-icon4.png"/>
                    <div>恭喜</div>
                </li>
                <li class="favorite-gift"  @click="changeTab(2),changeMessage(5)">
                    <img src="./meberImg/lyk-favorite-icon5.png"/>
                    <div>恭喜乔迁之喜</div>
                </li>
                <li class="favorite-gift"  @click="changeTab(2),changeMessage(6)">
                    <img src="./meberImg/lyk-favorite-icon6.png"/>
                    <div>感谢</div>
                </li>
            </ul>
        </div>
         <!-- 第二部分 -->
        <div class="favorite-step seconed"  :class="{active:isActive == 2}">
            <!-- 进度条 -->
            <div class="progress-bar-box">
                <span class="el-icon-arrow-left progress-bar-title">一份礼物祝福：{{message}}</span>
                <div class="progress-bar">
                    <span class="progress-bar-son"></span>
                </div>
            </div>
            <div class="favorite-title-top-bottom">
                我认为对方愿意收到
            </div>
            <ul class="favorite-gift-list">
                <li class="favorite-gift seconed"  @click="changeTab(3),changeMessage(7)">
                <img src="./meberImg/lyk-favorite-icon1.png"/>
                <div>样样齐全</div>
                </li>
                <li class="favorite-gift seconed"  @click="changeTab(3),changeMessage(8)">
                    <img src="./meberImg/lyk-Coffee-cut.png"/>
                    <div>咖啡机和咖啡</div>
                </li>
                <li class="favorite-gift seconed"  @click="changeTab(3),changeMessage(9)">
                    <img src="./meberImg/lyk-Coffee-cut.png"/>
                    <div>咖啡</div>
                </li>
                <li class="favorite-gift seconed"  @click="changeTab(3),changeMessage(10)">
                    <img src="./meberImg/lyk-coffee-gift-icon.png"/>
                    <div>咖啡和咖啡配件</div>
                </li>
            </ul>
        </div>
        <!-- 第三部分 -->
        <div class="favorite-step thired"  :class="{active:isActive == 3}">
            <!-- 进度条 -->
            <div class="progress-bar-box">
                <span class="el-icon-arrow-left progress-bar-title">更喜欢收到：{{message}}</span>
                <div class="progress-bar">
                    <span class="progress-bar-son three"></span>
                </div>
            </div>
            <div class="favorite-title-top-bottom">
                就咖啡而言，TA她愿意收到
            </div>
            <ul class="favorite-gift-list">
                <li class="favorite-gift three"  @click="changeTab(4),changeMonney(1)">
                <img src="./meberImg/lyk-favorite-icon1.png"/>
                <div>我不知道</div>
                </li>
                <li class="favorite-gift three"  @click="changeTab(4),changeMonney(2)">
                    <img src="./meberImg/lyk-favorite-milk.png"/>
                    <div>加奶咖啡</div>
                </li>
                <li class="favorite-gift three"  @click="changeTab(4),changeMonney(3)">
                    <img src="./meberImg/lyk-serverce.png"/>
                    <div>始终是浓缩咖啡</div>
                </li>
                <li class="favorite-gift three"  @click="changeTab(4),changeMonney(4)">
                    <img src="./meberImg/lyk-Coffee-cut.png"/>
                    <div>美味的大杯咖啡</div>
                </li>
            </ul>
        </div>
        <!-- 第四部分 -->
        <div class="favorite-step fove" :class="{active:isActive == 4}">
            <!-- 进度条 -->
            <div class="progress-bar-box">
                <span class="el-icon-arrow-left progress-bar-title">Ta喜欢：{{message}}</span>
                <div class="progress-bar">
                    <span class="progress-bar-son fove"></span>
                </div>
            </div>
            <div class="favorite-title-top-bottom">
                就预算方面，我倾向于价位在
            </div>
            <ul class="favorite-gift-list">
                <li class="favorite-gift fove">
                <img src="./meberImg/lyk-favorite-money3.png"/>
                <div>高于{{money}}元</div>
                </li>
                <li class="favorite-gift fove">
                    <img src="./meberImg/lyk-favorite-money4.png"/>
                    <div>{{moneyTow}}元</div>
                </li>
            </ul>
        </div>
    </div>
    <!-- 下部的图片 -->
    <div class="content mathine-detail">
        <div class="mathine-detail-box">
            <div class="mathine-detail-one">
                <div class="favorite-img-box">
                    <img src="./meberImg/lyk-favorite-mathine1.png"/>
                </div>
                <div class="favorite-one-introduce">
                    <div class="favorite-one-introduce-title">致爱人</div>
                    <div class="favorite-one-introduce-bottom">愿礼品中的纯臻美味伴随他们每一次的旅途。</div>
                    <div class="order-btn-box">
                        <span>cny2,366.00</span>
                        <a class="el-icon-goods order-btn" :class="{show:showBtn==1}" @click="changeBuyCart(0)">添加至购物车<i class="el-icon-plus"></i></a>
                        <a class="el-icon-goods order-btn" :class="{show:showBtn==0}" @click="changeBuyCart(1)">更新好购物车<i class="el-icon-plus"></i> </a>
                    </div>
                </div>
            </div>
            <!-- 第二个 -->
            <div class="mathine-detail-one">
                <div class="favorite-one-introduce">
                    <div class="favorite-one-introduce-title">至经典</div>
                    <div class="favorite-one-introduce-bottom">愿礼品中的纯臻美味伴随他们每一次的旅途</div>
                    <div class="order-btn-box">
                        <span>cny886.00</span>
                        <a class="el-icon-goods order-btn" :class="{show:showBtnTwo==1}" @click="changeBuyCartTwo(0)">添加至购物车<i class="el-icon-plus"></i></a>
                        <a class="el-icon-goods order-btn" :class="{show:showBtnTwo==0}" @click="changeBuyCartTwo(1)">更新好购物车<i class="el-icon-plus"></i> </a>
                    </div>
                </div>
                 <div class="favorite-img-box">
                    <img src="./meberImg/lyk-favorite-mathine2.png"/>
                </div>
            </div>
            <!-- 第三个 -->
            <div class="mathine-detail-one">
                <div class="favorite-img-box">
                    <img src="./meberImg/lyk-favorite-mathine3.png"/>
                </div>
                <div class="favorite-one-introduce">
                    <div class="favorite-one-introduce-title">致爱人</div>
                    <div class="favorite-one-introduce-bottom">愿礼品中的纯臻美味伴随他们每一次的旅途。</div>
                    <div class="order-btn-box">
                        <span>cny2,366.00</span>
                        <a class="el-icon-goods order-btn" :class="{show:showBtnThree==1}" @click="changeBuyCartThree(0)">添加至购物车<i class="el-icon-plus"></i></a>
                        <a class="el-icon-goods order-btn" :class="{show:showBtnThree==0}" @click="changeBuyCartThree(1)">更新好购物车<i class="el-icon-plus"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 背景区 -->
    <div class="favorite-people-box content">
        <div class="favorite-people-content">
            <div class="">我们非常乐意为您推荐</div>
            <a>联系我们</a>
        </div>
    </div>
    <!-- 帮助中心 -->
    <div class="favorite-hlep-center content">
        <div class="favorite-hlep-center-content">
            <ul class="help-lists">
                <li class="help-list">
                    <img src="./meberImg/lyk-favorite-icon3.png"/>
                    <p class="help-tip">消费满340元即可免费配送</p>
                    <p>北京/上海/广州/深圳2个工作日内急速送达。</p>
                </li>
                <li class="help-list">
                    <img src="./meberImg/lyk-coffee-help-icon.png"/>
                    <p class="help-tip">7天24小时咖啡机支持</p>
                    <p>需要关于咖啡机的帮助？我们的咖啡专员全天候期待为您服务。</p>
                </li>
            </ul>
        </div>
    </div>
    <!-- 底部 -->
    <div class="content">
      <lastFooter></lastFooter>
    </div>
  </div>
</template>

<script>
import lastFooter from '../service/Footer'
export default {
    components: {
      lastFooter
    },
    data () {
        return {
            isActive: 1,
            message: '',
            money: '',
            moneyTow: '',
            showBtn: 1,
            showBtnTwo: 1,
            showBtnThree: 1,
            total: 0
        }
    },
    methods: {
        changeTab (value) {
            if (value === 2) {
                this.isActive = value
            } else if (value === 3) {
                this.isActive = value
            } else {
                this.isActive = value
            }
        },
        changeMessage (index) {
            if (index === 1) {
                this.message = '圣诞快乐'
            } else if (index === 2) {
                this.message = '生日快乐'
            } else if (index === 3) {
                this.message = '情人节快乐'
            } else if (index === 4) {
                this.message = '恭喜'
            } else if (index === 5) {
                this.message = '恭喜乔迁之喜'
            } else if (index === 6) {
                this.message = '感谢'
            } else if (index === 7) {
                this.message = '样样齐全'
            } else if (index === 8) {
                this.message = '咖啡机和咖啡'
            } else if (index === 9) {
                this.message = '咖啡'
            } else {
                this.message = '咖啡和咖啡配件'
            }
        },
        changeMonney (value) {
            if (value === 1) {
                this.message = '我不知道'
                this.money = '100'
                this.moneyTow = '300至1000'
            }
            if (value === 2) {
                this.message = '加奶咖啡'
                this.money = '100'
                this.moneyTow = '3000至6000'
            }
            if (value === 3) {
                this.message = '始终是浓咖啡'
                this.money = '100'
                this.moneyTow = '2000至5000'
            } else {
                this.message = '美味的大杯咖啡'
                this.money = '3000'
                this.moneyTow = '2000~5000'
            }
        },
        changeBuyCart (btnNum) {
            console.log(this.$store)
            this.$store.commit('changeBuyCartIndex', btnNum)
            this.showBtn = btnNum
        },
        changeBuyCartTwo (btnNum) {
            this.showBtnTwo = btnNum
            this.$store.commit('changeBuyCartTwoIndex', btnNum)
        },
         changeBuyCartThree (btnNum) {
            this.showBtnThree = btnNum
            this.$store.commit('changeBuyCartTwoIndex', btnNum)
        }
    }

}
</script>
<style lang="less" scoped>
@import './merberStyle/favorite.less';
</style>
