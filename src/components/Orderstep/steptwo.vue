<template>
  <div class="content clearfix font-12 margin-b-60">
    <!-- 左边部分 -->
    <div class="nps-orderstep-left fl margin-t-20">
      <div class="nps-orderstep-cont clearfix">
        <p class="nps-steptwo-title font-20 padding-lr-20">配送地址</p>
        <div class="nps-steptwo-address-box padding-20">
          <p>地址</p>
          <p class="nps-step-address-info">~~~ 先生</p>
          <p class="nps-step-address-info">55555 重庆</p>
          <p class="nps-step-address-info">重庆德克特</p>
          <p class="nps-step-address-info">中国/China</p>
          <p class="nps-step-address-info margin-tb-10">当前设置为你的默认地址</p>
          <div class="nps-step-next">
            <span class="fl nps-step-next clearfix">
              <a @click="dialogVisible1 = true">编辑地址</a>
              <i class="el-icon-arrow-right"></i>
            </span>
            <div class="buyCart" :class="{isShow:this.showNumIndex == 1}">
              <el-dialog
                :visible="dialogVisible1"
                :show-close="true"
                :close-on-click-modal="true"
                :modal-append-to-body="false"
                width="60%">
                <div class="">
                  <Editaddress></Editaddress>
                </div>
              </el-dialog>
            </div>
          </div>
        </div>
        <div class="fr padding-r-40 padding-b-20">
          <a @click="dialogVisible2 = true" class="nps-address-edit-btn">添加其他配送地址</a>
          <el-dialog
            :visible="dialogVisible2"
            :show-close="true"
            :closeOnClickModal="true"
            width="60%">
            <div class="">
              <Addaddress></Addaddress>
            </div>
          </el-dialog>
        </div>
      </div>
      <div class="nps-orderstep-cont clearfix">
        <p class="nps-steptwo-title font-20 padding-lr-20">配送方式</p>
        <p class="nps-step-two padding-lr-20">送至办公室或者家里</p>
        <div class="nps-steptwo-distribute clearfix padding-20">
          <div class="nps-orderstep-distribute-img">
            <img src="./img/nps-orderstep.svg">
          </div>
          <div class="nps-steptwo-distribute-info padding-r-20">
            <span class="nps-distribute-title">标准配送</span>
            <p class="margin-tb-10">享受免运费服务：购满100颗咖啡胶囊，或1台胶囊咖啡机，或消费满340元。配送时间：
              发往北京/上海/广州/深圳地区的订单，可在两个工作日内送达。</p>
            <div>
              <div class="nps-step-next">
                <a @click="dialogVisible = true">了解更多</a>
                <span><i class="el-icon-arrow-right"></i></span>
              </div>
              <el-dialog
                :visible="dialogVisible"
                :before-close="handleDialogClose"
                :show-close="true"
                width="60%">
                <div class="text-center">
                  <div class="nps-dialog-title font-20 padding-b-20">标准配送</div>
                  <div class="padding-tb-40">
                    <p class="nps-dialog-method">标准配送费用：北京/天津/河北/上海/安徽/江苏/广东地区 人民币15元；其他地区人民币30元。</p>
                    <p class="nps-dialog-method">享受免运费服务：购满100颗咖啡胶囊，或1台胶囊咖啡机，或消费满340元。</p>
                    <p class="nps-dialog-method">配送时间：发往北京/上海/广州/深圳地区的订单，可在两个工作日内送达。</p>
                  </div>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                </span>
              </el-dialog>
            </div>
          </div>
        </div>
      </div>
      <div class="nps-step-btn-box clearfix">
        <span class="fl nps-step-next clearfix">
          <span class="fl font-14"><i class="el-icon-arrow-left"></i></span>
          <a @click="Returncart">返回购物车</a>
        </span>
        <a @click="changeS" class="nps-step-btn fr clearfix nps-stepfour-payment nps-remove-button">继续支付
          <span class="fr font-16"><i class="el-icon-arrow-right"></i></span>
        </a>
      </div>
    </div>
    <!-- 右边部分 -->
    <div class="nps-orderstep-right fr">
      <div class="nps-steptwo-right-img">
        <img src="./img/nps-orderstep7.jpg">
      </div>
      <div class="nps-steptwo-right-cont padding-20 margin-t-10">
        <p class="nps-steptwo-right-title font-20 margin-b-20">订单详情</p>
        <div class="nps-steptwo-right-main font-16 padding-tb-10">
          <span>Original咖啡胶囊</span>
          <span>(100)</span>
        </div>
        <ul class="nps-steptwo-lists">
          <li class="nps-steptwo-list clearfix">
            <div class="fl">
              <span>环球臻享迎新礼盒</span>
              <span class="padding-l-20"><i class="el-icon-close"></i>1</span>
            </div>
            <div class="nps-steptwo-list-right fr">
              <span>RMB 401.00</span>
            </div>
          </li>
          <li class="clearfix padding-tb-20">
            <div class="fl">
              <span class="nps-steptwo-list-num">小计</span>
            </div>
            <div class="nps-steptwo-list-right fr">
              <span>RMB 401.00</span>
            </div>
          </li>
          <li class="nps-steptwo-duty-box nps-steptwo-list clearfix">
            <div class="fl">
              <span>增值税（包含）</span>
            </div>
            <div class="nps-steptwo-list-right fr">
              <span>RMB 46.13</span>
            </div>
          </li>
          <li class="clearfix padding-tb-20">
            <div class="fl">
              <span class="nps-steptwo-list-total font-24">总计</span>
            </div>
            <div class="nps-steptwo-list-right fr">
              <span>RMB 401.00</span>
            </div>
          </li>
        </ul>
        <div class="nps-stepone-addpresent">
          <a @click="Revise" class="nps-stepone-add font-14">修改</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Steponeadd from '../Order/shopping-add'
import Editaddress from 'components/Order/myaddress/comeditAddress'
import Addaddress from 'components/Order/myaddress/comaddAddress'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      dialogVisible: false,
      // dialogVisible1: false,
      dialogVisible2: false,
      on: 1
    }
  },
  components: {
    Steponeadd,
    Editaddress,
    Addaddress
  },
  props: {
    changeStep: Function
  },
  methods: {
    handleDialogClose (done) {
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done()
      //   })
      //   .catch(_ => {})
    },
    Returncart () {
      this.changeStep(1)
    },
    changeS () {
      this.changeStep(3)
    },
    Revise () {
      this.changeStep(1)
    }
  },
  computed: {
    ...mapState(
      ['showNumIndex']
    )
  }
}
</script>

<style lang="less" scoped>
@import './css/orderstep.less';
</style>
