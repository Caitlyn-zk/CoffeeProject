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
                      <li>
                          <div class="padding-lr-10">
                              <div class="nps-infp-content">
                                  <p><span class="iconfont icon-xinxi"></span></p>
                                  <p class="font-16 info-news">产品信息</p>
                                  <div @click="details(0)"><a>如果我饮用了超过12个月最佳饮用日期的咖啡会怎么样？</a></div>
                                  <div @click="details(1)"><a>每粒咖啡胶囊的咖啡因含量是多少？</a></div>
                                  <div @click="details(2)"><a>Nespresso咖啡胶囊是否有保质期？</a></div>
                                  <!-- -->
                                  <a class="nps-info-link"><span class="iconfont icon-weibiaoti40"></span>了解更多</a>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="padding-lr-10">
                              <div class="nps-infp-content">
                                  <p><span class="iconfont icon-shoutibao"></span></p>
                                  <p class="font-16 info-news">订单信息与查询</p>
                                  <div @click="details(3)"><a>我的订单如何开具收据或发票？</a></div>
                                  <div @click="details(4)"><a>如何要求开具发票？</a></div>
                                  <div @click="details(5)"><a>是否可以在超市买到咖啡粉囊？ 为什么不在百货商店出售？</a></div>
                                  <!-- -->
                                  <a class="nps-info-link"><span class="iconfont icon-weibiaoti40"></span>了解更多</a>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="padding-lr-10">
                              <div class="nps-infp-content">
                                  <p><span class="iconfont icon-wifi"></span></p>
                                  <p class="font-16 info-news">线上支持</p>
                                  <div @click="details(6)"><a>如何注册成为俱乐部会员？</a></div>
                                  <div @click="details(7)"><a>我移居至/自其他国家。我该如何变更我的帐号？</a></div>
                                  <div @click="details(8)"><a>我已经有俱乐部会员编号。我应该如何注册？</a></div>
                                  <!-- -->
                                  <a class="nps-info-link"><span class="iconfont icon-weibiaoti40"></span>了解更多</a>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="padding-lr-10">
                              <div class="nps-infp-content">
                                  <p><span class="iconfont icon-icon-test"></span></p>
                                  <p class="font-16 info-news">产品问题</p>
                                  <div @click="details(9)"><a>我的咖啡粉囊变味了。</a></div>
                                  <div @click="details(10)"><a>我收到了损坏/残次商品。我应该如何做？</a></div>
                                  <div><a>  </a></div>
                                  <a class="nps-info-link"><span class="iconfont icon-weibiaoti40"></span>了解更多</a>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="padding-lr-10">
                              <div class="nps-infp-content">
                                  <p><span class="iconfont icon-weixiu"></span></p>
                                  <p class="font-16 info-news">机器维护</p>
                                  <div @click="details(11)"><a>我的咖啡机坏了。Nespresso会为我提供什么帮助？</a></div>
                                  <div @click="details(12)"><a>Nespresso的保修期有多长?</a></div>
                                  <div @click="details(13)"><a>咖啡机每次制作的咖啡量太少。我应该如何更改杯型容量？</a></div>
                                  <a class="nps-info-link"><span class="iconfont icon-weibiaoti40"></span>了解更多</a>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="padding-lr-10">
                              <div class="nps-infp-content">
                                  <p><span class="iconfont icon-ai-r"></span></p>
                                  <p class="font-16 info-news">品牌与促销</p>
                                  <div @click="details(14)"><a>Nespresso的咖啡是否符合公平贸易原则？</a></div>
                                  <div @click="details(15)"><a>如何提交赞助要求?</a></div>
                                  <div @click="details(20)"><a></a></div>
                                  <a class="nps-info-link"><span class="iconfont icon-weibiaoti40"></span>了解更多</a>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="padding-lr-10">
                              <div class="nps-infp-content">
                                  <p><span class="iconfont icon-huishou"></span></p>
                                  <p class="font-16 info-news">资源回收</p>
                                  <div @click="details(16)"><a>怎样回收用过的咖啡粉囊？</a></div>
                                  <div @click="details(17)"><a>Nespresso如何回收使用过的咖啡粉囊?</a></div>
                                  <div><a>  </a></div>
                                  <a class="nps-info-link"><span class="iconfont icon-weibiaoti40"></span>了解更多</a>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="padding-lr-10">
                              <div class="nps-infp-content">
                                  <p><span class="iconfont icon-wenhaofill"></span></p>
                                  <p class="font-16 info-news">其他</p>
                                  <div @click="details(18)"><a>我可以把Nespresso咖啡机带到国外使用吗？</a></div>
                                  <div><a>  </a></div>
                                  <div><a>  </a></div>
                                  <a  class="nps-info-link"><span class="iconfont icon-weibiaoti40"></span>了解更多</a>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="nps-listbox-content" :key="item.index" v-for="(item) in InfoList" :class="cls">
              <div class="nps-module"  @click="close" ></div>
              <div class="nps-content-list">
                  <div class="lightbox-content">
                    <p class="el-icon-close" @click="close"></p>
                    <div class="nps-details-title" >
                        {{item.list}}
                    </div>
                    <div class="nps-details-list" v-html="item.content"></div>
                    <div class="nps-details-translate">
                        <p class="nps-details-lists">Did this answer your question? If not, <a>ask us your question</a>, we will be pleased to help you.</p>
                    </div>
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
import {infoList} from '../js/contact'
export default {
    data () {
        return {
            InfoList: infoList,
            // show: false,
            current: 0,
            cls: 'bt'
        }
    },
    components: {
        Tips,
        Support,
        Footer
    },
    methods: {
        details (data) {
            var divset = document.getElementsByClassName('bt')
			// 使用 for in循环遍历所有的组
			for (var index = 0; index < divset.length; index++) {
				divset[data].style.display = 'block'
            }
        },
        close () {
            var divset = document.getElementsByClassName('bt')
			// 使用 for in循环遍历所有的组
			for (var i = 0; i < divset.length; i++) {
				divset[i].style.display = 'none'
			}
        }
    }
}
</script>

<style lang='less'>
@import '../css/contact.less';
@import '../font/iconfont.less';
</style>
