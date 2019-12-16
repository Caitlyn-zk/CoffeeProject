<template>
  <div>
      <Tips></Tips>
      <div class="info-data-content">
          <div class="content">
              <div class="info-data-title">
                  <p class="margin-tb-10 font-14">为了确保最佳的服务品质，请完整填写以下问题，包括电话号码。这有助于我们尽快处理您的需求。</p>
                  <p class="info-personal font-16"><span class="margin-b-10">个人资料</span></p>
              </div>
              <div class="info-data-form">
                  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <div class="info-form clearfix">
                            <div class="col-xs-12 fl padding-lr-10 clearfix font-14 padding-b-30">
                                <ul>
                                    <li>
                                        <el-form-item label="称谓*" prop="value">
                                            <el-select v-model="ruleForm.value">
                                                <el-option
                                                v-for="item in selectList"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="姓名*" prop="name">
                                            <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item label="姓氏*" prop="surname">
                                            <el-input v-model="ruleForm.surname"></el-input>
                                        </el-form-item>
                                        <el-form-item label="会员编号*" prop="vip">
                                            <el-input v-model="ruleForm.vip"></el-input>
                                        </el-form-item>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-xs-12 fl padding-lr-10 clearfix font-14 padding-b-30">
                                <ul>
                                    <li>
                                        <el-form-item label="选着您的地点" prop="SelectValue">
                                            <el-select v-model="ruleForm.areaCode" placeholder=" ">
                                                <el-option
                                                v-for="item in PlaceList"
                                                :key="item.areaCode"
                                                :label="item.name"
                                                :value="item.areaCode">
                                                </el-option>
                                            </el-select>
                                          </el-form-item>
                                        <el-form-item label="电子邮件地址*" prop="email">
                                            <el-input v-model="ruleForm.email"></el-input>
                                        </el-form-item>
                                        <el-form-item label="电话号码*" prop="call">
                                            <el-input v-model.number="ruleForm.call"></el-input>
                                        </el-form-item>
                                        <el-form-item label="邮政编码*" prop="Office">
                                            <el-input v-model.number="ruleForm.Office"></el-input>
                                        </el-form-item>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="info-form active clearfix">
                            <div class="padding-lr-10 clearfix font-14 padding-b-30">
                                <ul>
                                    <li>
                                        <el-form-item label="消息类别*">
                                            <el-select v-model="ruleForm.infos" placeholder=" ">
                                                <el-option
                                                v-for="item in infoList"
                                                :key="item.infos"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="选择回复的语言*">
                                            <el-select v-model="ruleForm.values" placeholder=" ">
                                                <el-option
                                                v-for="item in languageList"
                                                :key="item.values"
                                                :label="item.label"
                                                :value="item.values">
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="您使用的是什么样的胶囊？*" prop="">
                                            <p class="margin-b-10">
                                                <el-radio v-model="ruleForm.radio" label="1">
                                                    <span class="margin-l-10 iconfont icon-shoutibao"></span>
                                                    <span>Nespresso经典</span>
                                                </el-radio>
                                            </p>
                                            <p  class="margin-b-10">
                                                <el-radio v-model="ruleForm.radio" label="2">
                                                    <span class="margin-l-10 iconfont icon-xizhuang"></span>
                                                    <span>Nespresso专业</span>
                                                </el-radio>
                                            </p>
                                            <p  class="margin-b-10">
                                                <el-radio v-model="ruleForm.radio" label="3">
                                                    <span class="margin-l-30">不知道</span>
                                                </el-radio>
                                            </p>
                                        </el-form-item>
                                        <el-form-item label="消息主题*" prop="InfoIndex" class="form-control IndexForm">
                                            <el-input v-model="ruleForm.InfoIndex"></el-input>
                                        </el-form-item>
                                        <el-form-item label="输入信息*" prop="desc" class="form-control IndexForm">
                                            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                                        </el-form-item>
                                        <div class="clearfix">
                                            <div class="info-list fl">
                                                <span>附件</span>
                                                <span class="text-brown">*</span>
                                            </div>
                                            <div class="fl info-list-input">
                                                <input class=""  type="file"/>
                                            </div>
                                        </div>
                                        <div class="nps-from-info font-12">
                                            <p class="margn-tb-5">文档上限：20 Mb</p>
                                            <p>格式: .jpeg, .jpg, .png, .gif, .pdf, .doc, .docx, .txt</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="info-form-Submission font-12 clearfix">
                            <input  type="checkbox"/>
                            <span>所有信息将被严格保密。欲知详情，请阅读浓遇咖啡<a class="text-brown">隐私保护政策</a>。</span>
                            <a class="info-form-btn" type="primary" @click="submitForm('ruleForm')">发送<span class="el-icon-arrow-right"></span></a>
                        </div>
                  </el-form>
              </div>
          </div>
      </div>
      <Support></Support>
      <Footer></Footer>
  </div>
</template>

<script>
import Tips from '../Tips'
import Support from '../Support'
import Footer from '../Footer'
import {place, select, info, language} from '../js/info'
export default {
    data () {
        // 三个参数
        var testCall = (rule, value, callback) => {
            let reg = /^1[345789][0-9]{9}$/
            if (!value) {
                callback(new Error('请输入手机号'))
            } else if (!reg.test(value)) {
                callback(new Error('请输入正确的手机号'))
            } else {
                callback()
            }
        }
        var testName = (rule, value, callback) => {
            let reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
            if (!value) {
                callback(new Error('请输入姓名'))
            } else if (!reg.test(value)) {
                callback(new Error('请输入正确的姓名'))
            } else {
                callback()
            }
        }
        var surName = (rule, value, callback) => {
            let reg = /^[\u4E00-\u9FA5A-Za-z]+$/
            if (!value) {
                callback(new Error('请输入姓氏'))
            } else if (!reg.test(value)) {
                callback(new Error('请输入正确的姓氏'))
            } else {
                callback()
            }
        }
        var testEmail = (rule, value, callback) => {
            let reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
            if (!value) {
                callback(new Error('请输入邮箱'))
            } else if (!reg.test(value)) {
                callback(new Error('请输入正确的邮箱'))
            } else {
                callback()
            }
        }
        var testOffice = (rule, value, callback) => {
            let reg = /^[0-9]\d{5}(?!\d)$/
            if (!value) {
                callback(new Error('请输入邮政编码'))
            } else if (!reg.test(value)) {
                callback(new Error('请输入正确的邮政编码'))
            } else {
                callback()
            }
        }
        return {
            PlaceList: place,
            selectList: select,
            infoList: info,
            languageList: language,
            ruleForm: {
                InfoIndex: '',
                radio: '1',
                name: '',
                surname: '',
                vip: '',
                email: '',
                call: '',
                Office: '',
                desc: '',
                value: '先生',
                values: '中文',
                areaCode: '中国',
                infos: '产品信息'
            },
            rules: {
                name: [
                    {validator: testName, trigger: 'blur'}
                ],
                surname: [
                    {validator: surName, trigger: 'blur'}
                ],
                call: [
                    {validator: testCall, trigger: 'blur'}
                ],
                email: [
                    {validator: testEmail, trigger: 'blur'}
                ],
                Office: [
                    {validator: testOffice, trigger: 'blur'}
                ],
                desc: [
                    { required: true, message: '请输入内容', trigger: 'blur' }
                ],
                vip: [
                    { required: true, message: '请输入会员编号', trigger: 'blur' },
                    { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
                ],
                InfoIndex: [
                    { required: true, message: '请输入主题', trigger: 'blur' }
                ]
            }
        }
    },
    components: {
        Tips,
        Support,
        Footer
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
                showClose: true,
                message: '提交成功',
                type: 'success'
            })
          } else {
            this.$message.error('您还没有填完哦！')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
}
</script>

<style lang='less'>
@import url('../css/info.less');
@import '../font/iconfont.less';
</style>
