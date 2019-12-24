<template>
  <div class="content clearfix font-12 padding-b-20">
    <!-- 左边部分 -->
    <div class="nps-orderstep-left fl margin-t-20 nps-stepfour-left">
      <div class="nps-orderstep-cont clearfix">
        <p class="nps-steptwo-title font-20 padding-lr-20">配送信息</p>
        <div class="nps-steptwo-address-box padding-20">
          <p class="nps-step-address-info">~~~ 先生</p>
          <p class="nps-step-address-info">55555 重庆</p>
          <p class="nps-step-address-info">重庆德克特</p>
          <p class="nps-step-address-info">中国/China</p>
          <div class="nps-orderstep-cont clearfix nps-stepfour-cont padding-tb-20 margin-t-20">
            <div class="nps-steptwo-distribute clearfix">
              <div class="nps-orderstep-distribute-img">
                <img src="./img/nps-orderstep.svg">
              </div>
              <div class="nps-steptwo-distribute-info nps-stepfour-dist">
                <span>配送方式</span>
                <span class="nps-distribute-title">标准配送</span>
              </div>
            </div>
          </div>
          <div class="nps-step-next">
            <a @click="Returnsteptwo" class="nps-step-next">编辑</a>
            <span><i class="el-icon-arrow-right"></i></span>
          </div>
        </div>
      </div>
      <div class="nps-orderstep-cont clearfix">
        <p class="nps-steptwo-title font-20 padding-lr-20">账单信息</p>
        <div class="nps-steptwo-address-box padding-20">
          <p class="nps-step-address-info">~~~ 先生</p>
          <p class="nps-step-address-info">55555 重庆</p>
          <p class="nps-step-address-info">重庆德克特</p>
          <p class="nps-step-address-info">中国/China</p>
        </div>
        <div class="nps-stepfour-pay-box clearfix padding-20">
          <div class="nps-stepfour-pay-cont padding-tb-10">
            <div class="nps-stepfour-logo">
              <img src="./img/AliPay-logo.svg">
            </div>
            <div class="nps-stepfour-pay-method padding-l-40">
              <span class="padding-l-10">在线借记卡/信用卡支付 - 支付宝</span>
            </div>
            <div class="nps-step-next margin-t-20">
              <a @click="Returnstepthree" class="nps-step-next">编辑</a>
              <span><i class="el-icon-arrow-right"></i></span>
            </div>
          </div>
        </div>
      </div>
      <div class="nps-step-four-promotion">
        <p class="nps-steptwo-title font-20 padding-lr-20">账单信息</p>
        <div class="padding-20">
          <span>如果您有优惠码，请在输入 <a @click="Returncart" class="nps-step-next">购物车</a> 页面</span>
        </div>
      </div>
    </div>
    <!-- 右边部分 -->
    <div class="nps-orderstep-left fr padding-20 nps-stepfour-bag-box">
      <div class="nps-orderstep-four-bag">
        <div class="nps-orderstep-cont">
          <ul class="nps-orderstep-lists clearfix">
            <li class="padding-lr-20">
              <span>Original咖啡胶囊</span>
              <span>(100)</span>
            </li>
            <li class="text-center">单价</li>
            <li class="text-center">数量</li>
            <li class="text-center">总额</li>
          </ul>
          <ul :key="item.index" v-for="item of orderInfo" class="nps-orderstep-lists nps-orderstep-lists-descript clearfix font-14">
            <li class="nps-stepone-list clearfix">
              <div class="nps-order-lists-img fl">
                <img :src="api+item.img">
              </div>
              <div class="nps-orderstep-lists-kind font-14">
                <span>{{item.name}}</span>
              </div>
            </li>
            <li class="text-center nps-stepone-list nps-stepfour-pop">
              <span class="nps-stepfour-pop">
                <span>RMB {{item.price}}</span>
                <span class="font-20 padding-l-20"><i class="el-icon-close"></i></span>
              </span>
            </li>
            <li class="text-center nps-stepone-list">{{item.quantity}}</li>
            <li class="text-center nps-stepone-list nps-stepfour-pop">
              <span class="nps-stepfour-pop">RMB {{item.totalPrice}}</span>
            </li>
          </ul>
          <div class="nps-orderstep-return-box nps-step-next">
            <a @click="Returnstepone" class="nps-step-next">编辑</a>
            <span><i class="el-icon-arrow-right"></i></span>
          </div>
          <ul class="nps-stepone-detail-lists">
            <li class="padding-20 nps-stepone-num">
              <p class="nps-stepone-mon"><span>总额：</span><span> Original咖啡胶囊(100)</span></p>
            </li>
            <li class="padding-20 clearfix nps-stepone-num">
              <div class="nps-stepone-detail-left fl">
                <span>小结</span>
              </div>
              <div class="nps-stepone-detail-right text-r fr">
                <span>RMB {{allTotalPrice}}</span>
              </div>
            </li>
            <li class="padding-20 clearfix nps-stepone-num">
              <div class="nps-stepone-detail-left fl">
                <span>配送费用</span>
              </div>
              <div class="nps-stepone-detail-right text-r fr">
                <span>免费</span>
              </div>
            </li>
            <li class="padding-20 clearfix nps-stepone-num">
              <div class="nps-stepone-detail-left fl">
                <span>增值税（包含）</span>
              </div>
              <div class="nps-stepone-detail-right text-r fr">
                <span>RMB 00.00</span>
              </div>
            </li>
            <li class="padding-20 clearfix nps-stepone-num last">
              <div class="nps-stepone-detail-left fl">
                <span class="nps-orderstep-total font-16">总计</span>
              </div>
              <div class="nps-stepone-detail-right text-r fr">
                <span class="font-16">RMB {{allTotalPrice}}</span>
              </div>
            </li>
            <li class="padding-20 nps-stepone-num last nps-stepfour-clause-box">
              <div class="nps-stepone-detail-left">
                <span class="nps-orderstep-total font-16">条款确认</span>
              </div>
              <div class="padding-tb-20">
                <input class="nps-stepfour-clause" @click="isContinue" type="checkbox">
                <span>
                  我确认已阅读并接受Nespresso
                  <span>
                    <a @click="dialogVisible = true" class="nps-step-next">销售条款</a>
                    <el-dialog
                      :visible="dialogVisible"
                      :show-close="true"
                      width="70%">
                      <div class="text-left">
                        <div class="nps-dialog-title font-20 padding-b-20 text-center">销售条款与条件</div>
                        <div class="padding-tb-40 font-12">
                          <p class="nps-dialog-method">1. 使用条款的接受与更改</p>
                          <p class="nps-dialog-method">1.1 您访问并使用Nestlé Nespresso S.A. (以下称“Nespresso”) 的网页时，包括Nespresso’的附属公司，受到现行使用条款的约束。(the “Terms of Use”)访问、浏览并使用我们的网页意味着您确认已经阅读、理解并全部接受该使用条款；当然，我们会不时对该条款进行修改。</p>
                          <p class="nps-dialog-method">1.2 如果我们决定修改使用条款，会在网页上公布最新版本。然后，我们要求您不时对使用条款进行咨询，以便您对每一个更改了如指掌。</p>
                          <p class="nps-dialog-method">2. 版权和知识产权</p>
                          <p class="nps-dialog-method">2.1 我们网站的内容，包括但不仅限于文字、品牌、标语、图表、照片、视频、音频、音乐、布局、设计、诀窍、技术、产品以及各种流程是Nespresso公司或其子公司的资产或经所有者授权使用；因此相应地受到适用法律中版权、商标、专利及其他知识或工业所有权相关法律的保护 。</p>
                          <p class="nps-dialog-method">2.2 除了在下文中第三部分中提及的，网站所含任何内容都不能被视作授权给您使用我们网站上的相关内容。 </p>
                          <p class="nps-dialog-method">3. 网站的使用</p>
                          <p class="nps-dialog-method">3.1 您可以下载、播放或打印我们网站的内容并仅限于个人、非商业用途；保留并再现下载材料中包含的每一份著作权通知或其他所有权通知，禁止用于任何其他用途，包括复制、修改、分布、传递或广播，除非获得Nespresso的书面允许。Nespresso.</p>
                          <p class="nps-dialog-method">3.2 Nespresso从不授权或认为对于网站内容的任何使用会侵害第三方的权益。</p>
                          <p class="nps-dialog-method">4. 被认为不是机密的信息</p>
                          <p class="nps-dialog-method">4.2 其他通过互联网以电子邮件或其他方式传给Nespresso的信息，包括数据、问题、评论、建议、创意、图标等信息将被认为是非机密和非私人所有。您传送或公布的任何信息变成Nespresso的资产，将被免费用于各种用途，包括但不限于复制、披露、传播、出版、广播或公布。特别是Nespresso将免费使用您在交流中发送的任何创意、概念、诀窍或技术于任意用途，包括但不限于开发、制造、广告和销售使用该信息的产品。任何此类使用将不会对信息提供者或其他人进行补偿。(链接). Nespresso希望您在提供个人身份数据与信息之前仔细阅读该隐私条款。</p>
                          <p class="nps-dialog-method">4.3 提交信息意味着您确实拥有相关材料或内容，而不是谣传； Nespresso的使用不会损害任何第三方的权益。Nespresso没有任何义务使用这些信息。(链接). Nespresso希望您在提供个人身份数据与信息之前仔细阅读该隐私条款。</p>
                          <p class="nps-dialog-method">5. 免责声明(链接). </p>
                          <p class="nps-dialog-method">5.1 在不损害下文第六条规定的前提下，您可以使用任何材料、信息以及其他您在网站上发现的内容。关于其可用性，没有任何形式的明示或默示，包括潜在的对适销性、或某种特定用途的适合性的担保。(链接). Nespresso希望您在提供个人身份数据与信息之前仔细阅读该隐私条款。</p>
                          <p class="nps-dialog-method">5.2 Nespresso并不保证其网站或内容能达到您的期待、或者不被中断、或者及时、准确、没有错误。</p>
                          <p class="nps-dialog-method">5.4 5.3 某些司法管辖区不认可担保的局限性，所以上述排除法可能不适用于您。</p>
                          <p class="nps-dialog-method">5.4 从Nespresso获得的、或者使用网站提供的服务时获得的任何建议或信息，无论是口头的还是书面的，都不能构成对于现行使用条款的任何担保或承诺。</p>
                          <p class="nps-dialog-method">6. 责任范围</p>
                          <p class="nps-dialog-method">6.1 您访问、使用、浏览以及导航我们的网站时责任自负。</p>
                          <p class="nps-dialog-method">6.2 您承认并接受：在适用法规允许的最大范围内，不论Nespresso及其附属公司，还是任何参与创建、生产、或运营本网站的其他第三方对于因为您访问、使用本网站，或与之相反，因为网站或网站内容的不可用而导致的任何直接的、间接的、或相应的损失, 以及名誉的损害、费用、损耗、营业额或利润的下降或其他自然后果不承担任何责任(即使Nespresso已经知晓或可能知晓相关损失)。</p>
                          <p class="nps-dialog-method">6.3 您使用我们的网站期间通过其他方式下载或获得的材料，由您自己负责。因为您访问、使用本网站或下载任何材料，或者非法入侵其信息系统从而导致的损失或者病毒影响您的电脑或其他设备正常运行等后果，Nespresso不承担任何责任。</p>
                          <p class="nps-dialog-method">6.4 Nespresso有权中断或暂停其网站的所有或部分功能。对于因为Nespresso或任何第三方的操作或疏漏导致其网站全部或部分功能中断或暂停，Nespresso不负任何责任。</p>
                          <p class="nps-dialog-method">7. 信息的变更</p>
                          <p class="nps-dialog-method">我们的网站内容可能有误差或错误。Nespresso 有权在不事先通知的情况下随时对相关内容进行修改、更正或改进并且不对此类操作承担任何责任。</p>
                          <p class="nps-dialog-method">8. 产品或服务的可用性</p>
                          <p class="nps-dialog-method">我们的网站可能有关于Nespresso全球产品和服务的信息，但并不是说在任何地方都可以获得所有产品或服务。在网站上提及某种Nespresso产品或服务并不意味着您可以获得该产品或服务。</p>
                          <p class="nps-dialog-method">9. 链接</p>
                          <p class="nps-dialog-method">9.1 作为给网站访问者提供的一项服务，我们网站上的超文本链接可能链接至其他网站，这些网站并不是由Nespresso运营和掌控的。 Nespresso不对这些网站负责，也不会对这些网站的内容、正当性、准确性或功能承担任何责任。</p>
                          <p class="nps-dialog-method">9.2 未经Nespresso的事先书面许可，不得创建通向我们网站的超文本链接。</p>
                          <p class="nps-dialog-method">10. 其他方面</p>
                          <p class="nps-dialog-method">10.1 现行的使用条款体现的是您与Nespresso之间就其网站的访问和使用所达成的全部共识。Nespresso颁布的其他条款或规定，尤其是规范Nespresso和您因为服务的提供和产品的购买而建立的双方关系的条款，是对使用条款的补充；如果两者之间有不一致之处，则该条款的效力高于使用条款的效力。</p>
                          <p class="nps-dialog-method">10.2 事实上Nespresso有时会容忍您违反使用条款规定的某项义务，并放弃法律赋予的某项权利，并不能视为其放弃使用所有权利。</p>
                          <p class="nps-dialog-method">10.3 如果使用条款的某项条文现在或是将来被法律法规或者法院裁决认定为非法，则该款条文失去效力，使用条款的其他条文继续保持效力并规范Nespresso与您之间的关系。</p>
                          <p class="nps-dialog-method">10.4 为方便起见，使用条款的所有条文的标题单独占一行；不得以任何方式进行更改。</p>
                          <p class="nps-dialog-method text-center">Nestlé Nespresso S.A.</p>
                          <p class="nps-dialog-method text-center">11/2005</p>
                          <p class="nps-dialog-method text-center">@2003 Nestlé Nespresso S.A. 保留所有权利。</p>
                        </div>
                      </div>
                      <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">退出</el-button>
                      </span>
                    </el-dialog>
                  </span>
                  以及Nespresso
                  <a class="nps-step-next">隐私条款</a>
                </span>
              </div>
            </li>
          </ul>
          <div class="nps-step-btn-box clearfix">
            <div class="nps-step-next fl nps-stepfour-modify">
              <span><i class="el-icon-arrow-left"></i></span>
              <a @click="Modify">修改订单</a>
            </div>
            <el-button @click="changeS" :disabled="disabled" class="nps-step-btn fr clearfix nps-stepfour-payment nps-remove-button">继续支付
              <span class="fr font-16"><i class="el-icon-arrow-right"></i></span>
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {apiUrl} from 'commonjs/api.js'
import Steponeadd from '../Order/shopping-add'
import {order} from 'commonjs/Requestaxios'
import {createNamespacedHelpers} from 'vuex'
const {mapState: orderState} = createNamespacedHelpers('Order')
export default {
  data () {
    return {
      api: apiUrl,
      dialogVisible: false,
      disabled: true
    }
  },
  components: {
    Steponeadd
  },
  props: {
    changeStep: Function
  },
  computed: {
    ...orderState(['order', 'orderInfo', 'userId', 'allTotalPrice'])
  },
  methods: {
    Modify () {
      this.changeStep(3)
    },
    changeS () {
      // 将订单转换成json字符串
      console.log(this.order)
      let goods = JSON.stringify(this.order)
      console.log(goods)
      order({
        data: {
          userId: 1,
          status: 1,
          goods: goods
        },
        success: (res) => {
          console.log(res)
          if (res.status === 200) {
            window.location.href = res.result
          } else {
            this.$message({
              type: 'warning',
              message: '订单生成失败',
              showClose: 'true',
              offset: 100
            })
          }
        },
        error: (err) => {
          console.log(err)
        }
      })
      // this.changeStep(5)
    },
    Returncart () {
      this.changeStep(2)
    },
    Returnstepone () {
      this.changeStep(1)
    },
    Returnsteptwo () {
      this.changeStep(2)
    },
    Returnstepthree () {
      this.changeStep(3)
    },
    isContinue () {
      this.disabled = false
    }
  }
}
</script>

<style lang="less" scoped>
@import './css/orderstep.less';
</style>
