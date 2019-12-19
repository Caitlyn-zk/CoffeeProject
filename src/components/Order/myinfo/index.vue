<template>
  <div class="nps-order-cont nps-edit-main font-12">
    <h2 class="nps-order-cont-title font-16 padding-20">我的个人信息</h2>
    <div class="nps-order-info  padding-20 clearfix">
      <p>请填写下方表格（标*的必填）</p>
      <div class="nps-editaddress-form-box nps-myinfo-form-box padding-20">
        <div>
          <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
            <el-form-item class="nps-order-edit-form" prop="name">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">姓名
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <el-tooltip class="item" effect="dark" content="姓名" placement="right-start">
                  <input v-model="ruleForm.name" class="nps-edit-input" type="text"/>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form nps-edit-name padding-b-15" prop="email">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">电子邮件地址
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <el-tooltip class="item" effect="dark" content="电子邮件" placement="right-start">
                  <input v-model="ruleForm.email" class="nps-edit-input" type="text"/>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form nps-edit-name padding-b-15" prop="remail">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">确认电子邮件地址
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <el-tooltip class="item" effect="dark" content="确认电子邮件" placement="right-start">
                  <input v-model="ruleForm.remail" class="nps-edit-input" type="text"/>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form" prop="language">
              <div class="nps-order-edit-item nps-editaddress-select-box">
                <label class="nps-edit-form-label">语言
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <el-tooltip class="item" effect="dark" content="请选择语言" placement="right-start">
                  <el-select v-model="ruleForm.language" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-tooltip>
              </div>
            </el-form-item>
          </el-form>
        </div>
        <div class="nps-editaddress-bottom clearfix">
          <div class="fr">
            <a @click="submitForm ('ruleForm')" class="nps-address-edit-btn btn">保存我的信息</a>
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
                <el-tooltip class="item" effect="dark" content="当前密码" placement="right-start">
                  <input class="nps-edit-input" type="password"/>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">新密码
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <el-tooltip class="item" effect="dark" content="新密码" placement="right-start">
                  <input class="nps-edit-input" type="password"/>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">确认密码
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <el-tooltip class="item" effect="dark" content="确认密码" placement="right-start">
                  <input class="nps-edit-input" type="password"/>
                </el-tooltip>
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
    var testEmail = (rule, value, callback) => {
      let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      if (!value) {
        callback(new Error('请输入邮箱地址'))
      } else if (!reg.test(value)) {
        callback(new Error('请输入正确的邮箱地址'))
      } else {
        return callback()
      }
    }
    var validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入邮箱'))
      } else if (value !== this.ruleForm.email) {
        callback(new Error('两次邮箱输入不一致'))
      } else {
        return callback()
      }
    }
    return {
      radio: '1',
      options: [{
        value: '选项1',
        label: '中文'
      }, {
        value: '选项2',
        label: 'English'
      }],
      value: '',
      ruleForm: {
        name: '',
        email: '',
        remail: '',
        language: ''
      },
      rules: {
        name: [
          {
            required: true, message: '请输入姓名', trigger: 'blur'
          }
        ],
        language: [
          {
            required: true, message: '请选择语言', trigger: 'blur'
          }
        ],
        email: [
          {
            validator: testEmail, trigger: 'blur'
          }
        ],
        remail: [
          {
            required: true, validator: validateEmail, trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      // 验证表单
      this.$refs[formName].validate((valid) => {
        // 表单验证成功
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../css/order.less';
</style>
