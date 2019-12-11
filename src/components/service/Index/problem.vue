<template>
  <div>
    <Tips></Tips>
    <div class="nps-problem">
      <div class="content">
        <div class="padding-tb-20 nps-problem-search">
          <el-input
            placeholder="搜索"
            v-model="search"
            >
          </el-input>
          <span class="el-icon-close" @click="close();return false;"></span>
          <span class="el-icon-search"></span>
        </div>
        <div class="nps-Controll">
          <p class="nps-Controll-title"><span class="iconfont icon-star_full"></span> 前5常见问题</p>
          <el-collapse accordion  >
            <el-collapse-item>
              <template slot="title">
                我的咖啡机坏了。Nespresso会为我提供什么帮助？
              </template>
              <p>若您的Nespresso咖啡机损坏，请拨24小时免费热线电话 4001 200600，或通过电子邮件联系我们，我们会为您提供维修服务或技术支持。</p>
              <p>通过电话，我们专业的咖啡机专员能够为您的机器进行全面维修诊断。在适当情况下，他们会建议您选择Nespresso援助服务，支持以下城市：</p>
              <p>北京、上海、广州、深圳、东莞、成都、海口和三亚，提供的支持服务如下：</p>
              <p>-从您的家中或您提供的其他地址处回收Nespresso咖啡机</p>
              <p>-在机器维修期间您可租借另一台Nespresso咖啡机（视供给情况决定）</p>
              <p>-Nespresso咖啡机修理和附件全面检查</p>
              <p>-将机器按照回收地址送回</p>
              <p>-经修部分将在剩余保修期或六个月内保修，取二者之间的较长时间段。</p>
              <p>我们为其他城市或地区的会员提供以下支持服务：</p>
              <p></p>
              <p>-咖啡机送至后，我们将对其进行修理，并对全面检查所有附件</p>
              <p>-修理完毕后我们会将咖啡机送往您提供的地址</p>
              <p>-经修部分将在剩余保修期或六个月内保修，取二者之间的较长时间段。</p>
              <p>*请注意：</p>
              <p></p>
              <p>Nespresso自行决定对质保期内的任何缺陷产品提供免费维修或更换服务。已更换的产品或维修的部件的质保期为原期限的剩余时间或6个月；取二者之间的较长时间段。此有限质保服务并不适用于因疏忽、意外、使用不当或其他超出Nespresso合理控制范围的情况，其中包括但不限于：正常磨损；疏忽或未能按产品使用说明操作；维修不当或不足；钙沉淀或除锈；使用错误电源；非授权的产品调整或维修；商业用途；近火或闪电、水淹和其他外因。此质保服务仅在购买地国家或Nespresso销售或服务相同技术规格的同种型号产品的其他国家有效。购买地国家以外地区的质保服务将受限于该服务地区所在国家的相应质保条款和条件。对超出质保期限的Nespresso咖啡机将收取固定费用。</p>
              <div class="nps-details-translate"><p class="nps-details-list">Did this answer your question? If not, <a>ask us your question</a>, we will be pleased to help you.</p></div>
            </el-collapse-item>
             <el-collapse-item title="Nespresso的保修期有多长?">
              <p>所有中国地区官方渠道售出的机器，保留购买凭证均可享受两年保修。</p>
              <div class="nps-details-translate"><p class="nps-details-list">Did this answer your question? If not, <a>ask us your question</a>, we will be pleased to help you.</p></div>
            </el-collapse-item>
            <el-collapse-item title="咖啡机每次制作的咖啡量太少。我应该如何更改杯型容量？">
              <p>如果您对咖啡机制作出的咖啡量不满意，您可以重设制作容量。</p>
              <p>Essenza/Cube/Citiz/Pixie/Inissia/Lattissima系列咖啡机的重设方法如下：放入一颗咖啡粉囊，将咖啡杯置于出水口下。按下咖啡制作按钮，并长按直至得到您满意的咖啡量。</p>
              <p>U系列咖啡机的重设方法如下：打开滑块，放入一颗咖啡粉囊，将咖啡杯置于出水口下。按住您希望重设的咖啡按钮，并关闭滑块。当得到您满意的咖啡量时松开按钮。另两个咖啡按钮将会闪烁，表明设置已确认。</p>
              <p>您的咖啡机将保存咖啡量设置。之后的咖啡都将按此标准制作。所有咖啡按钮都可按此方法设置。</p>
              <div class="nps-details-translate"><p class="nps-details-list">Did this answer your question? If not, <a>ask us your question</a>, we will be pleased to help you.</p></div>
            </el-collapse-item>
            <el-collapse-item title="怎样回收用过的咖啡粉囊？">
              <p>您可通过回收使用过的Nespresso咖啡粉囊为实现可持续作出贡献。您可将用过的粉囊送至Nespresso店铺进行回收。</p>
              <p>欲了解中国地区的可持续和回收详情，请点击这里。</p>
              <div class="nps-details-translate"><p class="nps-details-list">Did this answer your question? If not, <a>ask us your question</a>, we will be pleased to help you.</p></div>
            </el-collapse-item>
            <el-collapse-item title="如果我饮用了超过12个月最佳饮用日期的咖啡会怎么样？">
              <p>超出最佳饮用日期的优选咖啡不会给您的健康或生命带来风险。铝质咖啡粉囊能有效抵挡光线、氧气和水分对咖啡的影响，完美保证咖啡的新鲜。</p>
              <div class="nps-details-translate"><p class="nps-details-list">Did this answer your question? If not, <a>ask us your question</a>, we will be pleased to help you.</p></div>
            </el-collapse-item>
          </el-collapse>
        </div>

        <div class="nps-Controll active margin-t-10" :key="item.index" v-for="item in searchData">
          <div :key="item.index" v-for="item in item.info">
            <p class="nps-Controll-title">
              <span v-html="item.inco"></span>
              {{item.title}}
            </p>
          </div>
          <div :key="list.index" v-for="list in item.list">
            <el-collapse accordion >
              <el-collapse-item >
                <template slot="title">
                  {{list.title}}
                </template>
                <p>123</p>
                <p></p>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tips from '../Tips'
export default {
  data () {
    return {
      search: '',
      problem: [{
          info: [{
            inco: '<span class="iconfont icon-xinxi"></span>',
            title: '产品信息'
          }],
          list: [{
            title: '怎样购买Nespresso优选咖啡？'
          }, {
            title: '什么是Nespresso限量版咖啡？'
          }, {
            title: 'Nespresso有没有茶或热巧克力粉囊？'
          }, {
            title: '低咖啡因咖啡中含咖啡因吗？'
          }, {
            title: '每粒Nespresso咖啡胶囊含多少卡路里？'
          }, {
            title: 'Nespresso咖啡胶囊是否会致敏？'
          }]
        }, {
          info: [{
            inco: '<span class="iconfont icon-shoutibao"></span>',
            title: '订单信息与查询'
          }],
          list: [{
            title: '免费配送的最低订购要求是多少？'
          }, {
            title: '如何订购Nespresso咖啡胶囊？'
          }, {
            title: '是否可以在超市买到咖啡粉囊？ 为什么不在百货商店出售？'
          }, {
            title: '你们的配送时间？'
          }, {
            title: '你们提供何种付款方式？'
          }, {
            title: '如何修改或取消订单？'
          }]
        }, {
          info: [{
            inco: '<span class="iconfont icon-wifi"></span>',
            title: '线上支持'
          }],
          list: [{
            title: '如何注册成为俱乐部会员？'
          }, {
            title: '如何找回俱乐部会员编号？'
          }, {
            title: '我忘记了密码。我应该如何找回？'
          }, {
            title: '我没有收到重置密码邮件。我应该如何找回？'
          }, {
            title: '我忘记了注册电子邮箱。我应该如何找回？'
          }, {
            title: '如何更改电子邮箱地址？'
          }]
        }, {
          info: [{
            inco: '<span class="iconfont icon-icon-test"></span>',
            title: '产品问题'
          }],
          list: [{
            title: '我收到了损坏/残次商品。我应该如何做？'
          }, {
            title: '我的咖啡粉囊变味了。'
          }]
        }, {
          info: [{
            inco: '<span class="iconfont icon-weixiu"></span>',
            title: '机器维护'
          }],
          list: [{
            title: 'Nespresso的保修期有多长?'
          }, {
            title: '咖啡机的序列号在哪里？'
          }, {
            title: '我的咖啡机存在技术问题。我应该向谁咨询？'
          }, {
            title: '我的咖啡机坏了。Nespresso会为我提供什么帮助？'
          }, {
            title: '如何收取维修费用？'
          }, {
            title: '我是否可以对咖啡机以旧换新？'
          }, {
            title: '咖啡出口无液体流出。我该怎么做？'
          }]
        }, {
          info: [{
            inco: '<span class="iconfont icon-ai-r"></span>',
            title: '品牌与促销'
          }],
          list: [{
            title: 'Nespresso的咖啡是否符合公平贸易原则？'
          }, {
            title: '如何提交赞助要求？'
          }]
        }, {
          info: [{
            inco: '<span class="iconfont icon-huishou"></span>',
            title: '资源回收'
          }],
          list: [{
            title: 'Nespresso如何回收使用过的咖啡粉囊？'
          }, {
            title: '怎样回收用过的咖啡粉囊？'
          }]
        }, {
          info: [{
            inco: '<span class="iconfont icon-wenhaofill"></span>',
            title: '资源回收'
          }],
          list: [{
            title: '我可以把Nespresso咖啡机带到国外使用吗？'
          }]
        }]
    }
  },
  components: {
    Tips
  },
  methods: {
    close () {
      if (this.search) {
        this.search = ''
      }
    }
  },
    computed: {
        searchData: function () {
            var search = this.search
            if (search) {
                return this.problem.filter(function (problems) {
                    return Object.keys(problems).some(function (key) {
                        return String(problems[key]).toLowerCase().indexOf(search) > -1
                    })
                })
            }
            console.log(this.problem)
            return this.problem
        }
    }
}
</script>

<style lang='less'>
@import '../css/problem.less';
@import '../font/iconfont.less';
</style>
