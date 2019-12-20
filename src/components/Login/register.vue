<template>
  <div class="nps-register-box content">
    <div class="nps-register-content">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
        <el-form-item class="nps-register-form-title">
          <div class="nps-register-form-item font-12">
            请填写下方表格。标记为*的为必填字段。
          </div>
        </el-form-item>
        <el-form-item class="nps-register-form-box" prop="name">
          <div class="nps-register-form-item">
            <label class="nps-register-form-label">姓名
              <span class="nps-register-asterisk">*</span>
            </label>
            <el-tooltip class="item" effect="dark" content="姓名" placement="right-start">
              <input v-model="ruleForm.name" class="nps-register-input" type="text"/>
            </el-tooltip>
          </div>
        </el-form-item>
        <el-form-item class="nps-register-form-box" prop="username">
          <div class="nps-register-form-item">
            <label class="nps-register-form-label">电子邮箱地址
              <span class="nps-register-asterisk">*</span>
            </label>
            <el-tooltip class="item" effect="dark" content="邮箱" placement="right-start">
              <input v-model="ruleForm.username" class="nps-register-input" type="text"/>
            </el-tooltip>
          </div>
        </el-form-item>
        <el-form-item class="nps-register-form-box" prop="password">
           <div class="nps-register-form-item">
             <label class="nps-register-form-label">密码
               <span class="nps-register-asterisk">*</span>
             </label>
             <el-tooltip class="item" effect="dark" content="密码" placement="right-start">
              <input v-model="ruleForm.password" class="nps-register-input" type="password"/>
            </el-tooltip>
          </div>
        </el-form-item>
        <el-form-item class="nps-register-form-box" prop="repassword">
           <div class="nps-register-form-item">
             <label class="nps-register-form-label">确认密码
               <span class="nps-register-asterisk">*</span>
             </label>
             <el-tooltip class="item" effect="dark" content="确认密码" placement="right-start">
              <input v-model="ruleForm.repassword" class="nps-register-input" type="password"/>
            </el-tooltip>
          </div>
        </el-form-item>
        <el-form-item class="nps-register-form-remember">
           <div class="nps-register-form-item">
             <label class="nps-register-form-label">
             </label>
             <input class="nps-register-checkbox" type="checkbox" />
             <label>记住我</label>
          </div>
        </el-form-item>
      </el-form>
      <div class="nps-register-bottom">
        <div class="nps-register-bottom-cont">
          <span>通过点击 继续”，我同意对我的数据进行处理并同意Nespresso
            <a class="nps-bottom-cont-declare" href="#">隐私声明</a>
          </span>
        </div>
        <div class="nps-register-bottom-right clearfix">
          <a class="nps-register-bottom-btn" @click="submitForm('ruleForm')">继续<span class="nps-bottom-crop fr"><i class="el-icon-arrow-right"></i></span></a>
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
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        username: '',
        password: '',
        repassword: ''
      },
      rules: {
        name: [
          {
            required: true, message: '请输入姓名', trigger: 'blur'
          }
        ],
        password: [
          {
            required: true, message: '请输入密码', trigger: 'blur'
          },
          {
            min: 6, max: 18, message: '密码长度为6~18个字符', trigger: 'blur'
          }
        ],
        repassword: [
          {
            required: true, validator: validatePass, trigger: 'blur'
          }
        ],
        username: [
          {
            validator: testEmail, trigger: 'blur'
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
@import './register.less';
</style>
