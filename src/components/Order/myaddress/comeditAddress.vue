<template>
  <div class="nps-order-cont nps-edit-main font-12 nps-new-editaddress">
    <h2 class="nps-order-cont-title font-16 padding-20 text-center nps-new-address">编辑我的地址</h2>
    <div class="nps-order-info  padding-20 clearfix">
      <div class="nps-editaddress-form-box padding-20">
        <p class="nps-order-editaddress-explain padding-tb-10">带 * 标记的为必填字段</p>
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
              <div class="nps-order-edit-item nps-editaddress-select-box padding-b-15">
                <label class="nps-edit-form-label">称谓
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
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label nps-edit-areatext margin-t-10">备注</label>
                <textarea class="nps-edit-remarks" type="textarea"></textarea>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">姓氏
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <input class="nps-edit-input" type="text"/>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form nps-edit-name padding-b-15">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">名字
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <input class="nps-edit-input" type="text"/>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">地址1
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <input class="nps-edit-input" type="text"/>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">城市
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <input class="nps-edit-input" type="text"/>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">邮政编码
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <input class="nps-edit-input" type="text"/>
              </div>
            </el-form-item>
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item nps-editaddress-select-box padding-b-40">
                <label class="nps-edit-form-label">输入国家</label>
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
            <el-form-item class="nps-order-edit-form">
              <div class="nps-order-edit-item">
                <label class="nps-edit-form-label">邮箱1
                  <span class="nps-edit-asterisk">*</span>
                </label>
                <input class="nps-edit-input" type="text"/>
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
            <router-link to='' class="nps-address-edit-btn btn">取消</router-link>
          </div>
          <div class="fr">
            <router-link to="" class="nps-address-edit-btn btn">保存我的信息</router-link>
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
        textarea2: ''
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
