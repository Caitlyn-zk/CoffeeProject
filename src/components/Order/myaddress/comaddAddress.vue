<template>
  <div class="nps-order-cont nps-edit-main font-12 nps-new-editaddress">
    <h2 class="nps-order-cont-title font-16 padding-20 text-center nps-new-address">新地址</h2>
    <div class="nps-order-info  padding-20 clearfix">
      <div class="nps-editaddress-form-box padding-20">
        <p class="nps-order-editaddress-explain padding-tb-10">带 * 标记的为必填字段</p>
        <div>
          <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">我的配送地址是</label>
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
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label nps-edit-areatext margin-t-10">备注</label>
                <textarea class="nps-edit-remarks" type="textarea"></textarea>
              </div>
            </el-form-item>
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
            <el-form-item class="nps-order-edit-form" prop="address">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">地址1
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <el-tooltip class="item" effect="dark" content="地址1" placement="right-start">
                  <input v-model="ruleForm.address" class="nps-edit-input" type="text"/>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form" prop="city">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">城市
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <el-tooltip class="item" effect="dark" content="城市" placement="right-start">
                  <input v-model="ruleForm.city" class="nps-edit-input" type="text"/>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form" prop="postcode">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">邮政编码
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <el-tooltip class="item" effect="dark" content="邮编" placement="right-start">
                  <input v-model="ruleForm.postcode" class="nps-edit-input" type="Number"/>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item nps-editaddress-select-box padding-b-40">
                <label class="nps-edit-form-label">国家</label>
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
            <el-form-item class="nps-order-edit-form" prop="email">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">邮箱1
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <el-tooltip class="item" effect="dark" content="邮箱1" placement="right-start">
                  <input v-model="ruleForm.email" class="nps-edit-input" type="text"/>
                </el-tooltip>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item padding-b-40">
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
            <el-form-item class="nps-order-edit-form nps-new-default">
              <div class="nps-order-edit-item">
                <span class="nps-new-checkbox"><input type="checkbox"/></span>
                <span>设为默认配送地址</span>
              </div>
            </el-form-item>
          </el-form>
        </div>
        <div class="nps-editaddress-bottom clearfix">
          <div class="fl">
            <router-link to='' class="nps-address-edit-btn btn" v-show="barShow">取消</router-link>
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
      barShow: true,
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
        name: '',
        email: '',
        postcode: '',
        address: '',
        called: '',
        city: ''
      },
      rules: {
        name: [
          {
            required: true, message: '姓名不能为空', trigger: 'blur'
          }
        ],
        postcode: [
          {
            required: true, message: '邮编不能为空', trigger: 'blur'
          }
        ],
        address: [
          {
            required: true, message: '地址不能为空', trigger: 'blur'
          }
        ],
        called: [
          {
            required: true, message: '称谓不能为空', trigger: 'blur'
          }
        ],
        city: [
          {
            required: true, message: '城市不能为空', trigger: 'blur'
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
// 添加地址
.nps-order-cont {
  background: #fff;
  margin: 0 auto;
}
.nps-order-info {
  padding-top: 0;
}
/deep/ .nps-new-address {
  background: #fff;
}
.nps-new-default {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.nps-new-checkbox {
  vertical-align: middle;
}
.nps-new-editaddress {
  border: none;
}
</style>
