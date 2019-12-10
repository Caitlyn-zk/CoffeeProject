<template>
  <div class="nps-order-cont">
    <h2 class="nps-order-cont-title font-16 padding-20">我的咖啡机</h2>
    <div class="nps-order-info nps-order-address-main padding-20 clearfix">
      <p class="nps-editmachines-title font-16">
        编辑 Inissia bundles Inissia D40 黑色套装(黑色奶沫机)
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
</template>

<script>
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
