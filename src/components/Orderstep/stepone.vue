<template>
  <div class="content clearfix font-12">
    <!-- 左边部分 -->
    <div class="nps-orderstep-left fl margin-t-20">
      <div class="nps-orderstep-cont">
        <ul class="nps-orderstep-lists clearfix">
          <li class="padding-lr-20 nps-stepont-list-top">
            <span>商品</span>
            <span>(100)</span>
          </li>
          <li class="text-center nps-stepont-list-top">单价</li>
          <li class="text-center nps-stepont-list-top">数量</li>
          <li class="text-center nps-stepont-list-top">总额</li>
        </ul>
        <ul  :key="item.index" v-for="item of shoppingCart"  class="nps-orderstep-lists nps-orderstep-lists-descript clearfix font-14">
          <li class="nps-stepone-list clearfix">
            <div class="nps-order-lists-img fl">
              <img :src="api+item.img">
            </div>
            <div class="nps-orderstep-lists-kind font-14">
              <span>{{item.name}}</span>
            </div>
          </li>
          <li class="text-center nps-stepone-list">
            <span class="nps-stepfour-pop">
              <span>RMB {{item.price}}</span>
              <span class="font-20 padding-l-20"><i class="el-icon-close"></i></span>
            </span>
          </li>
          <li class="text-center nps-stepone-list">{{item.quantity}}</li>
          <li class="text-center nps-stepone-list">
            <span class="nps-stepfour-pop font-16">
              <span>RMB {{item.totalPrice}}</span>
              <span class="font-20 padding-l-20"><i class="el-icon-close"></i></span>
            </span>
          </li>
        </ul>
        <div class="nps-orderstep-return-box">
          <span class="nps-step-next">
            <span><i class="el-icon-arrow-left"></i></span>
            <a>返回在线商店</a>
          </span>
        </div>
        <ul class="nps-stepone-detail-lists">
          <li class="padding-20 nps-stepone-num">
            <p class="nps-stepone-mon"><span>总额：</span><span>咖啡胶囊(100)</span></p>
          </li>
          <li class="padding-20 clearfix nps-stepone-num">
            <div class="nps-stepone-detail-left fl">
              <span>小结</span>
            </div>
            <div class="nps-stepone-detail-right text-r fr">
              <span>RMB {{allTotal}}</span>
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
              <span class="font-16">RMB {{allTotal}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="nps-step-btn-box clearfix">
        <a @click="changeS" class="nps-step-btn fr clearfix nps-stepfour-payment nps-remove-button">继续支付
          <span class="fr font-16"><i class="el-icon-arrow-right"></i></span>
        </a>
      </div>
    </div>
    <!-- 右边部分 -->
    <div class="nps-orderstep-right fr">
      <div class="nps-orderstep-right-cont">
        <p class="nps-stepone-right-title font-16 padding-tb-20">Nespresso推荐</p>
        <ul class="nps-stepone-right-lists">
          <li class="padding-tb-20">
            <div class="nps-stepone-right-img">
              <img src="./img/nps-orderstep2.jpg">
            </div>
            <div class="nps-stepone-cup margin-tb-10">VIEW 卡布奇诺咖啡杯</div>
            <div class="nps-stepone-present">
              <p class="nps-stepone-present-main font-14">消费满350元即可尊享免运费</p>
              <p> 一组2个钢化玻璃材质的Cappuccino咖啡杯（约180ml）和2个18/10不锈钢材质的杯碟，带有明亮的刷面处理。</p>
              <div class="nps-stepone-addpresent margin-tb-10">
                <a class="nps-stepone-add font-14">添加礼品</a>
              </div>
            </div>
          </li>
          <li class="padding-tb-20">
            <div class="nps-stepone-right-img">
              <img src="./img/nps-orderstep3.jpg">
            </div>
            <div class="nps-stepone-cup margin-tb-10">节日精选限量版风味咖啡5条装</div>
            <div class="nps-stepone-present">
              <div class="nps-stepone-present-main font-14 clearfix">
                <div class="fl nps-stepone-right-num font-12">RMB 229.00</div>
                <div class="fr">
                  <Steponeadd></Steponeadd>
                </div>
              </div>
            </div>
          </li>
          <li class="padding-tb-20">
            <div class="nps-stepone-right-img">
              <img src="./img/nps-orderstep4.jpg">
            </div>
            <div class="nps-stepone-cup margin-tb-10">大师匠心之作系列 五条装</div>
            <div class="nps-stepone-present">
              <div class="nps-stepone-present-main font-14 clearfix">
                <div class="fl nps-stepone-right-num font-12">RMB 225.00</div>
                <div class="fr">
                  <Steponeadd></Steponeadd>
                </div>
              </div>
            </div>
          </li>
          <li class="padding-tb-20">
            <div class="nps-stepone-right-img">
              <img src="./img/nps-orderstep5.jpg">
            </div>
            <div class="nps-stepone-cup margin-tb-10">TOUCH随行杯</div>
            <div class="nps-stepone-present">
              <div class="nps-stepone-present-main font-14 clearfix">
                <div class="fl nps-stepone-right-num font-12">RMB 239.00</div>
                <div class="fr">
                  <Steponeadd></Steponeadd>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {apiUrl} from 'commonjs/api.js'
import Steponeadd from '../Order/shopping-add'
import { getCart } from 'commonjs/Requestaxios.js'
import {createNamespacedHelpers} from 'vuex'
const {mapState: orderState, mapMutations: orderMutations} = createNamespacedHelpers('Order')
export default {
  data () {
    return {
      api: apiUrl,
      shoppingCart: '',
      allTotal: ''
    }
  },
  components: {
    Steponeadd
  },
  computed: {
    ...orderState(['orderInfo'])
  },
  props: {
    changeStep: Function
  },
  methods: {
    ...orderMutations(['addOrderInfo', 'addOrder', 'addUserId', 'addAlltotal']),
    changeS () {
      this.changeStep(2)
    }
  },
  mounted () {
    let infor = JSON.parse(window.localStorage.getItem('infor'))
    let userId = infor.id
    if (infor) {
      getCart({
        data: {
          userId: userId
        },
        success: (res) => {
          // 定义变量计算总价
          let allTotalPrice = 0
          let cartInfo = res.data
          // 创建数组存订单信息
          let orderArr = []
          // 循环数组更改其中的对象键值对
          for (let item of cartInfo) {
            if (item.cMachineImg) {
              item.img = item.cMachineImg
              delete item.cMachineImg
            }
            if (item.title) {
              item.name = item.title
              delete item.title
            }
            if (item.machinePrice) {
              console.log('1111')
              console.log(item.machinePrice)
              item.price = item.machinePrice
              delete item.machinePrice
            }
            if (item.capsulePrice) {
              console.log(item.capsulePrice)
              item.price = item.capsulePrice
              delete item.capsulePrice
            }
            // 将订单需要的信息存入数组
            orderArr.push({npscommodity: item.commodity, commodity: item.npscommodity, quantity: item.quantity})
            // 更改对象的图片格式
            item.img = JSON.parse(item.img)[0]
            allTotalPrice += item.totalPrice
          }
          console.log(cartInfo)
          console.log(orderArr)
          this.shoppingCart = cartInfo
          this.allTotal = allTotalPrice
          this.addOrderInfo(cartInfo)
          this.addOrder(orderArr)
          this.addUserId(userId)
          this.addAlltotal(allTotalPrice)
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import './css/orderstep.less';
</style>
