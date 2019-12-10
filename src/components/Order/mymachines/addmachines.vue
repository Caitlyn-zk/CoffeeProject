<template>
  <div class="nps-order-cont nps-edit-main font-12">
    <h2 class="nps-order-cont-title font-16 padding-20">编辑地址</h2>
    <div class="nps-addmachines-box">
      <div class="nps-addmachines-step font-16 padding-l-20">
        <span>步骤1/3 输入你的类别</span>
      </div>
      <ul class="nps-addmachines-lists clearfix">
        <li class="nps-addmacines-list">
          <img src="../img/nps-order-machines1.jpg" />
          <div class="padding-tb-10">Inissia 咖啡机奶沫机套装</div>
          <div class="nps-addmachines-visited"></div>
        </li>
        <li class="nps-addmacines-list">
          <img src="../img/nps-order-machines2.jpg" />
          <div class="padding-tb-10">Pixie 咖啡机奶沫机套装</div>
          <div class="nps-addmachines-visited"></div>
        </li>
        <li class="nps-addmacines-list">
          <img src="../img/nps-order-machines3.jpg" />
          <div class="padding-tb-10">Lattissima One</div>
          <div class="nps-addmachines-visited"></div>
        </li>
        <li class="nps-addmacines-list">
          <img src="../img/nps-order-machines4.jpg" />
          <div class="padding-tb-10">Essenza Mini</div>
          <div class="nps-addmachines-visited"></div>
        </li>
        <li class="nps-addmacines-list">
          <img src="../img/nps-order-machines5.jpg" />
          <div class="padding-tb-10">Essenza Mini 咖啡机奶沫机套装</div>
          <div class="nps-addmachines-visited"></div>
        </li>
        <li class="nps-addmacines-list">
          <img src="../img/nps-order-machines6.jpg" />
          <div class="padding-tb-10">Creatista Plus</div>
          <div class="nps-addmachines-visited"></div>
        </li>
        <li class="nps-addmacines-list">
          <img src="../img/nps-order-machines7.jpg" />
          <div class="padding-tb-10">Expert&milk</div>
          <div class="nps-addmachines-visited"></div>
        </li>
        <li class="nps-addmacines-list">
          <img src="../img/nps-order-machines8.jpg" />
          <div class="padding-tb-10">Expert</div>
          <div class="nps-addmachines-visited"></div>
        </li>
      </ul>
    </div>
    <div class="nps-addmachines-box">
      <div class="nps-addmachines-step font-16 padding-l-20">
        <span>步骤2/3 输入你的机器颜色</span>
      </div>
      <ul class="nps-addmachines-lists clearfix">
        <li class="nps-addmacines-list">
          <img src="../img/nps-order-machines1.jpg" />
          <div class="nps-addmachines-list-cont">
            <div class="nps-addmachines-type padding-tb-10 padding-lr-20">
              <span>Inissia 咖啡机奶沫机套装</span>
              <span>'A3NKD40-CN-BK-N'</span>
            </div>
            <p class="nps-addmachines-color padding-lr-10">Inissia C40 红色套装(黑色奶沫机)</p>
          </div>
          <div class="nps-addmachines-visited"></div>
        </li>
        <li class="nps-addmacines-list">
          <img src="../img/nps-order-machines2.jpg" />
          <div class="nps-addmachines-list-cont">
            <div class="padding-tb-10 padding-lr-20">
              <span>Inissia 咖啡机奶沫机套装</span>
              <span>Inissia C40 红色套装(黑色奶沫机)</span>
            </div>
            <p class="nps-addmachines-color padding-lr-10">Inissia C40 红色套装(黑色奶沫机)</p>
          </div>
          <div class="nps-addmachines-visited"></div>
        </li>
        <li class="nps-addmacines-list">
          <img src="../img/nps-order-machines3.jpg" />
          <div class="nps-addmachines-list-cont">
            <div class="padding-tb-10 padding-lr-20">
              <span>Inissia 咖啡机奶沫机套装</span>
              <span>'A3NKD40-CN-CW-N'</span>
            </div>
            <p class="nps-addmachines-color padding-lr-10">Inissia D40 香草奶油白套装(黑色奶沫机)-确认订单后立减200</p>
          </div>
          <div class="nps-addmachines-visited"></div>
        </li>
        <li class="nps-addmacines-list">
          <img src="../img/nps-order-machines4.jpg" />
          <div class="nps-addmachines-list-cont">
            <div class="padding-tb-10 padding-lr-20">
              <span>Inissia 咖啡机奶沫机套装</span>
              <span>'A3NKD40-CN-OR-N'</span>
            </div>
            <p class="nps-addmachines-color padding-lr-10">Inissia D40 橙色套装(黑色奶沫机)-确认订单后立减200</p>
          </div>
          <div class="nps-addmachines-visited"></div>
        </li>
      </ul>
    </div>
    <div class="nps-addmachines-box">
      <div class="nps-addmachines-step font-16 padding-l-20">
        <span>步骤3/3 输入你的机器信息</span>
      </div>
      <div class="nps-order-info nps-order-address-main padding-20 clearfix">
        <p class="nps-editmachines-title nps-addmachines-stepthree font-18">
          您的咖啡机 Inissia 咖啡机奶沫机套装 Inissia D40 黑色套装(黑色奶沫机)
        </p>
        <el-form class="nps-editmachines-form" label-width="80px">
          <div class="nps-order-edit-item">
            <label class="nps-edit-form-label nps-editmachines-label">咖啡机序列号:</label>
            <input class="nps-edit-input nps-editmachines-input" type="text"/>
            <div class="nps-editmachines-inspect">
              <a @click="dialogVisible = true" class="nps-editmachines-inspect-btn">帮我查找我的序列号</a>
              <el-dialog
                :visible="dialogVisible"
                :show-close="true"
                width="60%">
                <div class="text-center">
                  <div class="nps-dialog-title font-20">查询机器序列号</div>
                  <div>
                    <p>您的咖啡机序列号由19位字符组成，包含数字和字母，起始字符为1。可在以下三处查询：</p>
                    <p>1. 咖啡机包装盒</p>
                    <p>2. 滴水盘标签处，条形码下方</p>
                    <p>3. 咖啡机底部，条形码下方</p>
                  </div>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                </span>
              </el-dialog>
            </div>
          </div>
        </el-form>
        <el-form class="margin-tb-40" label-width="80px">
          <div class="nps-order-edit-item">
            <label class="nps-edit-form-label nps-editmachines-label">购买日期*</label>
            <el-date-picker
              type="dates"
              v-model="value1"
              placeholder="选择一个或多个日期">
            </el-date-picker>
          </div>
        </el-form>
        <el-form class="nps-editmachines-form" label-width="80px">
          <div class="nps-order-edit-item">
            <label class="nps-edit-form-label nps-editmachines-label">您是如何获得您的咖啡机的？*</label>
            <el-select class="nps-editmachines-select" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-form>
      </div>
      <div class="nps-order-address-add clearfix">
        <router-link to="/order/mymachines" class="nps-editmachines-return font-12">
          <span><i class="el-icon-arrow-left"></i></span>返回我的咖啡机
        </router-link>
        <router-link to='/order/mymachines' class="nps-myorder-btn fr">保存更改</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import Machinesinfo from './editmachines'
export default {
  data () {
    return {
      dialogVisible: false,
      value: '',
      value1: '',
      options: [{
          value: '选项1',
          label: '在线购买'
        }, {
          value: '选项2',
          label: '他人赠送'
        }, {
          value: '选项3',
          label: '其他'
        }]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../css/order.less';
</style>
