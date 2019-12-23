<template>
  <div class="nps-login">
    <p class="nps-logintxt">登陆</p>
    <p>登陆账户，订购产品</p>
    <el-form ref="loginform" :rules="loginRules" :model="loginform" class="margin-t-10 nps-login-form" >
      <el-form-item class="nps-logon-form-item" prop="email">
        <span class="nps-login-label">您的邮箱*</span>
        <el-input class="nps-login-input nps-login-email" @focus="changetxt" @blur="back"  v-model="loginform.email"></el-input>
      </el-form-item>
      <el-form-item class="nps-logon-form-item" prop="password">
        <span class="nps-login-label">密码*</span>
        <el-input type="password" class="nps-login-input nps-login-password" @focus="changetxt"  @blur="back" v-model="loginform.passward"></el-input>
      </el-form-item>
      <p class="nps-forget-txt"><a>忘记密码?</a></p>
      <p>
        <label for="">
          <el-checkbox>记住我</el-checkbox>
        </label>
      </p>
      <a class="margin-t-10 nps-login-btn nps-loging " @click="submitLogin('loginform')" type="primary">登陆 <span class="el-icon-arrow-right fr"></span></a>
    </el-form>
    <div class="margin-t-10 nps-to-register">
      <span>还没有账户？</span>
      <router-link to="/register" class="margin-t-10 nps-login-btn nps-registing" type="primary">立即注册 <span class="el-icon-arrow-right fr"></span></router-link>
    </div>
  </div>
</template>

<script>
import {login} from 'commonjs/Requestaxios'
import {createNamespacedHelpers} from 'vuex'
const {mapMutations: loginMutations} = createNamespacedHelpers('Login')
export default {
  data () {
    let emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    var validateEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      } else if (!emailReg.test(value)) {
        return callback(new Error('请输入正确的邮箱'))
      }
      callback()
    }
    return {
      loginform: {
        email: '',
        passward: ''
      },
      loginRules: {
        email: [
          {validator: validateEmail, trigger: 'blur'}
        ],
        passward: [
          {equired: true, message: '请输入活动名称', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    ...loginMutations(['addloginInfo']),
    changetxt (event) {
      let span = event.target.parentNode.parentNode.firstChild
      span.style.bottom = '20px'
      span.style.color = 'red'
      span.style.fontSize = '12px'
    },
    back (event) {
      let span = event.target.parentNode.parentNode.firstChild
      span.style.fontSize = '14px'
      span.style.color = '#CCC'
    },
    submitLogin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('closeLogin')
          login({
            data: {
              email: this.loginform.email,
              password: this.loginform.passward
            },
            success: (res) => {
              if (res.status === 200) {
                // 返回的用户信息
                let infor = res.data.infor
                this.addloginInfo(infor)
                infor = JSON.stringify(infor)
                window.localStorage.setItem('infor', infor)
                // 返回的token
                let token = res.data.token
                window.localStorage.setItem('token', token)
                this.$message({
                  type: 'success',
                  message: '登陆成功',
                  showClose: 'true',
                  offset: 100,
                  onClose: () => {
                    this.$router.push('/order')
                  }
                })
              } else {
                this.$message({
                  type: 'warning',
                  message: '您还没注册，请注册',
                  showClose: 'true',
                  offset: 100,
                  onClose: () => {
                    this.$router.push('/register')
                  }
                })
              }
            },
            error (err) {
              console.log(err)
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import './login.less';
</style>
