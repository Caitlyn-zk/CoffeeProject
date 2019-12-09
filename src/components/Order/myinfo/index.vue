<template>
  <div class="nps-order-cont nps-edit-main font-12">
    <h2 class="nps-order-cont-title font-16 padding-20">我的个人信息</h2>
    <div class="nps-order-info  padding-20 clearfix">
      <p>请填写下方表格（标*的必填）</p>
      <div class="nps-editaddress-form-box nps-myinfo-form-box padding-20">
        <div>
          <el-form ref="form">
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">姓氏
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <el-tooltip class="item" effect="dark" content="姓氏" placement="right-start">
                  <input class="nps-edit-input" type="text"/>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form nps-edit-name padding-b-15">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">名字
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <el-tooltip class="item" effect="dark" content="名字" placement="right-start">
                  <input class="nps-edit-input" type="text"/>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form nps-edit-name padding-b-15">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">电子邮件地址
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <input class="nps-edit-input" type="text"/>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form nps-edit-name padding-b-15">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">确认电子邮件地址
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <input class="nps-edit-input" type="text"/>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item nps-editaddress-select-box padding-b-15">
                <label class="nps-edit-form-label">语言
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-form>
        </div>
        <div class="nps-editaddress-bottom clearfix">
          <div class="fr">
            <router-link to='/order/myinfo' class="nps-address-edit-btn btn">保存我的信息</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="nps-order-info nps-change-box  padding-20 clearfix">
      <p class="nps-change-password font-16">更改密码</p>
      <div class="nps-editaddress-form-box nps-myinfo-form-box padding-20">
        <div>
          <el-form ref="form">
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">当前密码
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <input class="nps-edit-input" type="password"/>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">新密码
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <input class="nps-edit-input" type="password"/>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">确认密码
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <input class="nps-edit-input" type="password"/>
              </div>
            </el-form-item>
          </el-form>
        </div>
        <div class="nps-editaddress-bottom clearfix">
          <div class="fr">
            <router-link to='/order/myinfo' class="nps-address-edit-btn btn">保存我的密码</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1',
      options: [{
          value: '选项1',
          label: '中文'
        }, {
          value: '选项2',
          label: 'English'
        }],
        value: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import '../css/order.less';
</style>
