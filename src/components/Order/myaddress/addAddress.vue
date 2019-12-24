<template>
  <div class="nps-order-cont nps-edit-main font-12">
    <h2 class="nps-order-cont-title font-16 padding-20">添加地址</h2>
    <div class="nps-order-info  padding-20 clearfix">
      <p>您想更新下您的个人信息吗？在下方填写更新您的信息（标*的必填）</p>
      <div class="nps-editaddress-form-box padding-20">
        <p class="nps-order-editaddress-explain padding-tb-10">带 * 标记的为必填字段</p>
        <div>
          <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">我的地址是</label>
                <el-radio v-model="radio" label="1">个人</el-radio>
                <el-radio v-model="radio" label="2">公司</el-radio>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form" prop="called">
              <div class="nps-order-edit-item nps-editaddress-select-box">
                <label class="nps-edit-form-label">称谓
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <el-tooltip class="item" effect="dark" content="称谓" placement="right-start">
                  <el-select v-model="ruleForm.called" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      :show-close="true">
                    </el-option>
                  </el-select>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form nps-edit-marks">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label nps-edit-areatext margin-t-10">备注</label>
                <textarea class="nps-edit-remarks" type="textarea"></textarea>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form nps-edit-name" prop="name">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">姓名
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <el-tooltip class="item" effect="dark" content="姓名" placement="right-start">
                  <input v-model="ruleForm.name" class="nps-edit-input" type="text"/>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form" prop="tell">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">电话号码1
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <el-tooltip class="item" effect="dark" content="电话号码" placement="right-start">
                  <input v-model="ruleForm.tell" class="nps-edit-input" type="text"/>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item nps-editaddress-select-box padding-b-40">
                <label class="nps-edit-form-label">输入国家</label>
                <el-select class="nps-editaddress-select" v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-select class="nps-editaddress-select" v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options3"
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
          <div class="fl">
            <router-link to='/order/myaddress' class="nps-address-edit-btn btn clearfix">
              <span class="fl"><i class="el-icon-arrow-left cancel font-16"></i></span>
            取消</router-link>
          </div>
          <div class="fr">
            <a @click="submitForm('ruleForm')" class="nps-address-edit-btn btn">保存我的信息</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var testTell = (rule, value, callback) => {
      let reg = /^1[345789][0-9]{9}$/
      if (!value) {
        callback(new Error('请输入手机号'))
      } else if (!reg.test(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    return {
      radio: '1',
      options: [{
          value: '选项1',
          label: '先生'
        }, {
          value: '选项2',
          label: '太太'
        }, {
          value: '选项3',
          label: '小姐'
        }, {
          value: '选项4',
          label: '女士'
        }, {
          value: '选项5',
          label: '博士'
        }, {
          value: '选项6',
          label: '夫妇'
        }],
      options2: [{
        value: '选项1',
        label: '个人'
      }, {
        value: '选项2',
        label: '公司'
      }, {
        value: '选项4',
        label: '手机'
      }, {
        value: '选项5',
        label: '传真'
      }, {
        value: '选项6',
        label: 'SECRET'
      }],
      options3: [{
        value: '选项1',
        label: '中国/China'
      }],
      value: '',
      textarea2: '',
        ruleForm: {
        called: '',
        name: '',
        tell: ''
      },
      rules: {
        called: [
          {
            required: true, message: '请选择称谓', trigger: 'blur'
          }
        ],
        name: [
          {
            required: true, message: '请输入名字', trigger: 'blur'
          }
        ],
        tell: [
          {validator: testTell, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid)
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
