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
                  <el-form>
                      <div class="info-form clearfix">
                          <div class="col-xs-12 fl padding-lr-10 clearfix font-14">
                              <ul>
                                  <li>
                                      <div class="info-list fl">
                                          <span>称谓</span>
                                          <span class="text-brown">*</span>
                                       </div>
                                       <div class="fl">
                                          <template>
                                            <el-select v-model="value" placeholder=" ">
                                                <el-option
                                                v-for="item in selectList"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                          </template>
                                       </div>
                                  </li>
                                  <li>
                                      <div class="info-list fl">
                                          <span>姓名</span>
                                          <span class="text-brown">*</span>
                                       </div>
                                       <div class="fl">
                                          <!-- <template >
                                            <el-input v-model="name" prop="name"></el-input>
                                          </template> -->
                                          <el-form-item>
                                            <el-input v-model="name"></el-input>
                                          </el-form-item>
                                       </div>
                                  </li>
                                  <li>
                                      <div class="info-list fl">
                                          <span>姓氏</span>
                                          <span class="text-brown">*</span>
                                       </div>
                                       <div class="fl">
                                          <template>
                                            <el-input v-model="surname" ></el-input>
                                          </template>
                                       </div>
                                  </li>
                                  <li>
                                      <div class="info-list fl">
                                          <span>会员编号</span>
                                          <span class="text-brown">*</span>
                                       </div>
                                       <div class="fl">
                                          <template>
                                            <el-input v-model="vip"></el-input>
                                          </template>
                                       </div>
                                  </li>
                              </ul>
                          </div>
                          <div class="col-xs-12 fl padding-lr-10 clearfix font-14">
                              <ul>
                                  <li>
                                      <div class="info-list fl">
                                          <span>选择您的地点</span>
                                          <span class="text-brown">*</span>
                                       </div>
                                       <div class="fl">
                                          <template>
                                            <el-select v-model="areaCode" placeholder=" ">
                                                <el-option
                                                v-for="item in PlaceList"
                                                :key="item.areaCode"
                                                :label="item.name"
                                                :value="item.areaCode">
                                                </el-option>
                                            </el-select>
                                          </template>
                                       </div>
                                  </li>
                                  <li>
                                      <div class="info-list fl">
                                          <span>电子邮件地址</span>
                                          <span class="text-brown">*</span>
                                       </div>
                                       <div class="fl">
                                          <template>
                                            <el-input v-model="email" ></el-input>
                                          </template>
                                       </div>
                                  </li>
                                  <li>
                                      <div class="info-list fl">
                                          <span>电话号码</span>
                                          <span class="text-brown">*</span>
                                       </div>
                                       <div class="fl">
                                          <template>
                                            <el-input v-model="call" ></el-input>
                                          </template>
                                       </div>
                                  </li>
                                  <li>
                                      <div class="info-list fl">
                                          <span>邮政编码</span>
                                          <span class="text-brown">*</span>
                                       </div>
                                       <div class="fl">
                                          <template>
                                            <el-input v-model="Code" ></el-input>
                                          </template>
                                       </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div class="info-form info-form-bottom clearfix">
                          <div class="fl padding-lr-10 clearfix font-14">
                              <ul>
                                  <li>
                                      <div class="info-list fl">
                                          <span>消息类别</span>
                                          <span class="text-brown">*</span>
                                       </div>
                                       <div class="fl">
                                          <template>
                                            <el-select v-model="infos" placeholder=" ">
                                                <el-option
                                                v-for="item in infoList"
                                                :key="item.infos"
                                                :label="item.label"
                                                :value="item.infos">
                                                </el-option>
                                            </el-select>
                                          </template>
                                       </div>
                                  </li>
                                  <li>
                                      <div class="info-list fl">
                                          <span>选择回复的语言</span>
                                          <span class="text-brown">*</span>
                                       </div>
                                       <div class="fl">
                                          <template>
                                            <el-select v-model="values" placeholder=" ">
                                                <el-option
                                                v-for="item in languageList"
                                                :key="item.values"
                                                :label="item.label"
                                                :value="item.values">
                                                </el-option>
                                            </el-select>
                                          </template>
                                       </div>
                                  </li>
                                  <li class="capsule-list">
                                      <div class="info-list fl">
                                          <span>您使用的是什么样的胶囊？</span>
                                          <span class="text-brown">*</span>
                                       </div>
                                       <div class="fl capsule-list-content font-12">
                                          <template>
                                            <p class="margin-b-10">
                                                <el-radio v-model="radio" label="1">
                                                    <span class="margin-l-10 iconfont icon-shoutibao"></span>
                                                    <span>Nespresso经典</span>
                                                </el-radio>
                                            </p>
                                            <p  class="margin-b-10">
                                                <el-radio v-model="radio" label="2">
                                                    <span class="margin-l-10 iconfont icon-xizhuang"></span>
                                                    <span>Nespresso专业</span>
                                                </el-radio>
                                            </p>
                                            <p  class="margin-b-10">
                                                <el-radio v-model="radio" label="3">
                                                    <span class="margin-l-30">不知道</span>
                                                </el-radio>
                                            </p>
                                          </template>
                                       </div>
                                  </li>
                                  <li class="info-main">
                                      <div class="info-list fl">
                                          <span>消息主题</span>
                                          <span class="text-brown">*</span>
                                       </div>
                                       <div class="fl">
                                          <template>
                                            <el-input v-model="input" ></el-input>
                                          </template>
                                       </div>
                                  </li>
                                  <li class="info-main" style="height: 220px;">
                                      <div class="info-list fl">
                                          <span>输入消息</span>
                                          <span class="text-brown">*</span>
                                       </div>
                                       <div class="fl">
                                          <el-input
                                            type="textarea"
                                            :rows="2"
                                            placeholder="请输入内容"
                                            v-model="textarea">
                                           </el-input>
                                       </div>
                                  </li>
                                  <li class="info-main-inp">
                                      <div class="info-list fl">
                                          <span>附件</span>
                                          <span class="text-brown">*</span>
                                       </div>
                                       <div class="fl">
                                          <input class=""  type="file"/>
                                       </div>
                                  </li>
                                  <li class="info-main-inp">
                                      <div class="info-list fl"></div>
                                       <div class="fl font-12">
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
                          <a class="info-form-btn">发送<span class="el-icon-arrow-right"></span></a>
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
        return {
            PlaceList: place,
            selectList: select,
            infoList: info,
            languageList: language,
            input: '',
            radio: '1',
            name: '',
            surname: '',
            vip: '',
            email: '',
            call: '',
            Office: '',
            textarea: '',
            value: '',
            values: '',
            areaCode: '',
            infos: '',
            Code: ''
        }
    },
    components: {
        Tips,
        Support,
        Footer
    }
}
</script>

<style lang='less'>
@import url('../css/info.less');
@import '../font/iconfont.less';
</style>
