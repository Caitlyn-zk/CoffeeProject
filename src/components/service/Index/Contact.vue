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
                      <li :key="item.index" v-for="item in infolist" >
                          <div class="padding-lr-10">
                              <div class="nps-infp-content">
                                  <p v-html="item.icon"></p>
                                  <p class="font-16 info-news">{{item.title}}</p>
                                  <div @click="details = true"><a>{{item.list}}</a></div>
                                  <div @click="details = true"><a>{{item.content}}</a></div>
                                  <div @click="details = true"><a>{{item.mess}}</a></div>
                                  <a class="nps-info-link"><span class="iconfont icon-weibiaoti40"></span>了解更多</a>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
              <div>
                  <el-dialog :visible.sync="details" :key="item.index" v-for="item in infolist">
                    <p class="el-icon-close" @click="details = false"></p>
                    <div class="nps-details-title">
                        <!-- 如果我饮用了超过12个月最佳饮用日期的咖啡会怎么样？ -->
                        {{item.list}}
                    </div>
                    <p class="nps-details-list">{{item.list}}</p>
                    <div class="nps-details-translate">
                        <p class="nps-details-list">Did this answer your question? If not, <a>ask us your question</a>, we will be pleased to help you.</p>
                    </div>
                </el-dialog>
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
export default {
    data () {
        return {
            details: false,
            infolist: [{
                id: 1,
                icon: '<span class="iconfont icon-xinxi"></span>',
                title: '产品信息',
                list: '如果我饮用了超过12个月最佳饮用日期的咖啡会怎么样？',
                content: '每粒咖啡胶囊的咖啡因含量是多少？',
                mess: 'Nespresso咖啡胶囊是否有保质期？'
                }, {
                id: 2,
                icon: '<span class="iconfont icon-shoutibao"></span>',
                title: '订单信息与查询',
                list: '如何要求开具发票？',
                content: '我的订单如何开具收据或发票？',
                mess: '是否可以在超市买到咖啡粉囊？ 为什么不在百货商店出售？'
            }, {
                id: 3,
                icon: '<span class="iconfont icon-wifi"></span>',
                title: '线上支持',
                list: '如何注册成为俱乐部会员？',
                content: '我移居至/自其他国家。我该如何变更我的帐号？',
                mess: '我已经有俱乐部会员编号。我应该如何注册？'
            }, {
                id: 4,
                icon: '<span class="iconfont icon-icon-test"></span>',
                title: '产品问题',
                list: '我的咖啡粉囊变味了。',
                content: '我收到了损坏/残次商品。我应该如何做？'
            }, {
                id: 5,
                icon: '<span class="iconfont icon-weixiu"></span>',
                title: '机器维护',
                list: '我的咖啡机坏了。Nespresso会为我提供什么帮助？',
                lists: 'Nespresso的保修期有多长?',
                content: '咖啡机每次制作的咖啡量太少。我应该如何更改杯型容量？'
            }, {
                id: 6,
                icon: '<span class="iconfont icon-ai-r"></span>',
                title: '品牌与促销',
                list: 'Nespresso的咖啡是否符合公平贸易原则？',
                content: '如何提交赞助要求？'
            }, {
                id: 7,
                icon: '<span class="iconfont icon-huishou"></span>',
                title: '资源回收',
                list: '怎样回收用过的咖啡粉囊？',
                content: 'Nespresso如何回收使用过的咖啡粉囊？'
            }, {
                id: 7,
                icon: '<span class="iconfont icon-wenhaofill"></span>',
                title: '其他',
                list: '我可以把Nespresso咖啡机带到国外使用吗？'
            }],
            input: '',
            radio: '1',
            textarea: '',
            select: [{
                value: '1',
                label: '先生'
            }, {
                value: '2',
                label: '女士'
            }, {
                value: '3',
                label: '小姐'
            }, {
                value: '4',
                label: '太太'
            }, {
                value: '5',
                label: '博士'
            }],
            info: [{
                value: '1',
                label: '产品信息'
            }, {
                value: '2',
                label: '订单信息与查询'
            }],
            language: [{
                values: 1,
                label: '中文'
            }, {
                values: 2,
                label: '英文'
            }],
            value: '',
            values: ''
        }
    },
    components: {
        Tips,
        Support,
        Footer
    }
}
</script>

<style lang='less'>
@import '../css/contact.less';
@import '../font/iconfont.less';
</style>
