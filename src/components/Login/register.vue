<template>
  <div>
			<Tips></Tips>
			<div class="nps-register-back">
				<div class="nps-register-box content">
					<div class="nps-register-content">
						<el-form ref="ruleForm" :model="ruleForm" :rules="rules">
							<el-form-item class="nps-register-form-title">
								<div class="nps-register-form-item font-12">
									请填写下方表格。标记为*的为必填字段。
								</div>
							</el-form-item>
							<el-form-item class="nps-register-form-box" prop="surname">
								<div class="nps-register-form-item">
									<label class="nps-register-form-label">姓氏
										<span class="nps-register-asterisk">*</span>
									</label>
									<el-tooltip class="item" effect="dark" content="姓氏" placement="right-start">
										<input v-model="ruleForm.surname" class="nps-register-input" type="text"/>
									</el-tooltip>
								</div>
							</el-form-item>
							<el-form-item class="nps-register-form-box" prop="name">
								<div class="nps-register-form-item">
									<label class="nps-register-form-label">名字
										<span class="nps-register-asterisk">*</span>
									</label>
									<el-tooltip class="item" effect="dark" content="名字" placement="right-start">
										<input v-model="ruleForm.name" class="nps-register-input" type="text"/>
									</el-tooltip>
								</div>
							</el-form-item>
							<el-form-item class="nps-register-form-box" prop="email">
								<div class="nps-register-form-item">
									<label class="nps-register-form-label">电子邮箱地址
										<span class="nps-register-asterisk">*</span>
									</label>
									<el-tooltip class="item" effect="dark" content="邮箱" placement="right-start">
										<input v-model="ruleForm.email" class="nps-register-input" type="text"/>
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
			</div>
			<Footer></Footer>
	</div>
</template>

<script>
import {register} from 'commonjs/Requestaxios'
import {createNamespacedHelpers} from 'vuex'
import Tips from '../service/Tips'
import Footer from '../service/Footer'
const {mapState: registerState, mapMutations: registerMutations} = createNamespacedHelpers('Register')
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
    return {
      ruleForm: {
        surname: '郭',
        name: '治涛',
        email: '2943439858@qq.com',
        password: '000000'
      },
      rules: {
        surname: [
          {
            required: true, message: '请输入姓氏', trigger: 'blur'
          }
        ],
        name: [
          {
            required: true, message: '请输入名字', trigger: 'blur'
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
        email: [
          {
            validator: testEmail, trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    ...registerMutations(['addRegisterinfo']),
    submitForm (formName) {
      // 验证表单
      this.$refs[formName].validate((valid) => {
        // 表单验证成功
        if (valid) {
          this.addRegisterinfo(this.ruleForm)
          register({
            data: this.registerInfo,
            success: (res) => {
              if (res.status === 200) {
                 this.$message({
                  type: 'success',
                  message: '注册成功',
                  showClose: 'true',
                  duration: 1000,
                  offset: 100,
                  onClose: () => {
                    this.$router.push('/')
                  }
                })
              } else {
                this.$message({
                  type: 'warning',
                  message: res.message,
                  showClose: 'true',
                  duration: 1000,
                  offset: 100
                })
              }
            },
            error: (err) => {
              console.log(err)
            }
          })
          console.log(this.registerInfo)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  computed: {
		...registerState(['registerInfo'])
	},
	components: {
		Tips,
		Footer
	}
}
</script>

<style lang="less" scoped>
@import './register.less';
</style>
