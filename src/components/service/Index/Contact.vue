<template>
  <div>
      <Tips></Tips>
      <div class="info-data-list">
          <div class="content ">
              <div class="info-list-cont text-center">
                  <p class="font-32 ">顾客服务</p>
                  <p class="font-12 margin-t-20">我们的Nespresso咖啡专家每周7天/每天24小时帮助您解答所有关于我们优选咖啡的疑问，为您提供咖啡机问题的建议，同时接收您的订单。</p>
                  <div class="info-list-call">
                      <p>拨打我们的热线电话： 4001 200600</p>
                      <p>通过填写表格给我们发送邮件 <router-link class="text-white" to="/info">点击这里</router-link></p>
                  </div>
              </div>
              <div class="nps-info-lists">
                  <p class="font-14 padding-tb-20 margin-l-10 ">请参考以下奈斯派索常见问题。为了能直接解答您的疑问。</p>
                  <ul class="nps-info-list clearfix">
                      <li :key="item.index" v-for="(item, itemIndex) in InfoList" >
                          <div class="padding-lr-10">
                              <div class="nps-infp-content">
                                  <p v-html="item.icon"></p>
                                  <p class="font-16 info-news">{{item.title}}</p>
                                  <div @click="details({item:itemIndex,list:listIndex})"  :key="list.index" v-for="(list, listIndex) in item.List"><a>{{list.list}}</a></div>
                                  <!-- -->
                                  <a class="nps-info-link"><span class="iconfont icon-weibiaoti40"></span>了解更多</a>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="nps-listbox-content" v-show="show" :key="item.index" v-for="item in InfoList">
              <div class="nps-module"></div>
              <div class="lightbox-content" :key="list.index" v-for="list in item.List">
                  <p class="el-icon-close" @click="close"></p>
                  <div class="nps-details-title" >
                      {{list.list}}
                  </div>
                  <p class="nps-details-list">{{list.content}}</p>
                  <div class="nps-details-translate">
                      <p class="nps-details-list">Did this answer your question? If not, <a>ask us your question</a>, we will be pleased to help you.</p>
                  </div>
              </div>
          </div>
      </div>
      <Support></Support>
      <Footer></Footer>
  </div>
</template>

<script>
import Tips from '../Tips'
import Support from '../Support'
import Footer from '../Footer'
import {infolist} from '../js/contact'
export default {
    data () {
        return {
            InfoList: infolist,
            show: false,
            showIndex: 0
        }
    },
    components: {
        Tips,
        Support,
        Footer
    },
    methods: {
        details (param) {
            this.show = true
           console.log(param)
        },
        close () {
            this.show = false
        }
    }
}
</script>

<style lang='less'>
@import '../css/contact.less';
@import '../font/iconfont.less';
</style>
