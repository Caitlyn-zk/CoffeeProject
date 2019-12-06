<template>
  <div class="nps-order-cont font-12">
    <h2 class="nps-order-cont-title font-16 padding-20">编辑地址</h2>
    <div class="nps-order-info  padding-20 clearfix">
      <p>您想更新下您的个人信息吗？在下方填写更新您的信息（标*的必填）</p>
      <div>
        <p>带 * 标记的为必填字段</p>
        <div>
          <el-form ref="form">
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">我的地址是</label>
                <el-radio v-model="radio" label="1">个人</el-radio>
                <el-radio v-model="radio" label="2">公司</el-radio>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                  <label class="nps-edit-form-label">密码
                    <span class="nps-edit-asterisk">*</span>
                  </label>
                <input class="nps-edit-input" type="password"/>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                  <label class="nps-edit-form-label">密码
                    <span class="nps-edit-asterisk">*</span>
                  </label>
                <input class="nps-edit-input" type="password"/>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                  <label class="nps-edit-form-label">密码
                    <span class="nps-edit-asterisk">*</span>
                  </label>
                <input class="nps-edit-input" type="password"/>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="nps-order-address-add clearfix">
      <a class="nps-address-edit-btn fr">添加地址</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1'
    }
  }
}
</script>

<style lang="less" scoped>
@import '../css/order.less';
</style>
