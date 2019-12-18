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
            <span @click="dialogVisible1 = true">
              <a>编辑地址</a>
              <span><i class="el-icon-arrow-right"></i></span>
            </span>
            <el-dialog
              :visible="dialogVisible1"
              :show-close="true"
              :closeOnClickModal="true"
              width="60%">
              <div class="">
                <Editaddress></Editaddress>
              </div>
            </el-dialog>
          </div>
        </div>
        <div class="fr padding-r-40 padding-b-20">
          <a @click="dialogVisible2 = true" class="nps-address-edit-btn">添加账单地址</a>
          <el-dialog
            :visible="dialogVisible2"
            :show-close="true"
            width="60%">
            <div class="">
              <Addaddress></Addaddress>
            </div>
          </el-dialog>
        </div>
      </div>
      <div class="nps-orderstep-cont clearfix">
        <p class="nps-steptwo-title font-20 padding-lr-20">支付方式</p>
        <p class="nps-step-two padding-lr-20">送至办公室或者家里</p>
        <div class="nps-steptwo-distribute clearfix padding-20">
          <div class="nps-orderstep-distribute-box">
            <div class="nps-stepthree-checkbox fl margin-t-15">
              <input type="radio">
            </div>
            <div class="nps-orderstep-distribute-img margin-t-20">
              <img src="./img/AliPay-logo.svg">
            </div>
          </div>
          <div class="nps-steptwo-distribute-info nps-stepthree-dist-info padding-r-20">
            <span class="nps-distribute-title">在线借记卡/信用卡支付 - 支付宝</span>
            <p class="margin-tb-10">将转至支付宝付款页面。在付款流程全部结束前请不要离开或关闭该网页。</p>
            <div>
              <div class="nps-step-next">
                <a @click="dialogVisible = true">了解更多</a>
                <span><i class="el-icon-arrow-right"></i></span>
              </div>
              <el-dialog
                :visible="dialogVisible"
                :show-close="true"
                width="60%">
                <div class="text-center">
                  <div class="nps-dialog-title font-20 padding-b-20">在线借记卡/信用卡支付 - 支付宝</div>
                  <div class="padding-tb-40">
                    <p class="nps-dialog-method">请注意支付宝网站仅支持中文，请在付款之后等待付款页面重新将您定向至Nespresso网上店铺。请勿关闭付款页面，否则将导则付款失败。</p>
                    <p class="nps-dialog-method">如果您希望了解更多支付宝信息，请拨打电话95188，联系支付宝客服，或者联系Nespresso中国会员俱乐部。</p>
                    <p class="nps-dialog-method">*客户关系中心（CRC）24/7服务热线：</p>
                    <p class="nps-dialog-method">4001 200600 – B2C</p>
                    <p class="nps-dialog-method">4001 200800 – B2B</p>
                    <p class="nps-dialog-method">4001 200800 – B2B</p>
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
          <el-button @click="Delivery" disabled>返回配送</el-button>
        </span>
        <el-button @click="changeS" class="nps-step-btn fr clearfix nps-stepfour-payment nps-remove-button" disabled>下订单
          <span class="fr font-16"><i class="el-icon-arrow-right"></i></span>
        </el-button>
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
          <a class="nps-stepone-add font-14">修改</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Steponeadd from '../Order/shopping-add'
import Editaddress from 'components/Order/myaddress/comeditAddress'
import Addaddress from 'components/Order/myaddress/comaddAddress'
export default {
  data () {
    return {
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false
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
    Delivery () {
      this.changeStep(2)
    },
    changeS () {
      this.changeStep(4)
    }
  }
}
</script>

<style lang="less" scoped>
@import './css/orderstep.less';
</style>
