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
        <div class="nps-Controll margin-b-30">
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
        <div class="nps-Controll active" :key="item.index" v-for="item in searchData">
          <div>
            <p class="nps-Controll-title">
              <span v-html="item.inco"></span>
              {{item.title}}
            </p>
          </div>
          <div>
            <el-collapse accordion >
              <el-collapse-item >
                <template slot="title">
                  {{item.list}}
                </template>
                <div v-html="item.content"></div>
                <div class="nps-details-translate"><p class="nps-details-list">Did this answer your question? If not, <a>ask us your question</a>, we will be pleased to help you.</p></div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
        <div class="contact-us-link-block">
          <router-link to="info">如果您的问题是没有列出，请点击这里联系奈斯派索</router-link>
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
import {products} from '../js/problem'
export default {
  components: {
    Tips,
    Support,
    Footer
  },
  methods: {
    close () {
      if (this.search) {
        this.search = ''
      }
    }
  },
  data () {
    return {
      search: '',
      products: products,
      arr: []
    }
  },
  computed: {
      searchData: function () {
          var search = this.search
          if (search) {
              console.log(JSON.stringify(this.arr))
              return this.arr.filter(function (product) {
                  return Object.keys(product).some(function (key) {
                      return String(product[key]).toLowerCase().indexOf(search) > -1
                  })
              })
          }
          return this.arr
      }
  },
  created () {
      for (var i = 0; i < this.products.length; i++) {
        for (var j = 0; j < this.products[i].length; j++) {
              this.arr.push(this.products[i][j])
          }
      }
  }
}
</script>

<style lang='less'>
@import '../css/problem.less';
@import '../font/iconfont.less';
</style>
