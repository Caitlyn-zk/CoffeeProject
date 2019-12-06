<template>
  <div class="nps-register-box content">
    <div class="nps-register-content">
      <el-form ref="form">
        <el-form-item class="nps-register-form-title">
          <div class="nps-register-form-item font-12">
            请填写下方表格。标记为*的为必填字段。
          </div>
        </el-form-item>
        <el-form-item class="nps-register-form-box">
          <div class="nps-register-form-item">
            <label class="nps-register-form-label">电子邮箱地址
              <span class="nps-register-asterisk">*</span>
            </label>
            <input class="nps-register-input" type="text"/>
          </div>
        </el-form-item>
        <el-form-item class="nps-register-form-box">
           <div class="nps-register-form-item">
             <label class="nps-register-form-label">密码
               <span class="nps-register-asterisk">*</span>
             </label>
            <input class="nps-register-input" type="password"/>
          </div>
        </el-form-item>
        <el-form-item class="nps-register-form-box">
          <div class="nps-register-form-item">
             <label class="nps-register-form-label">确认密码
               <span class="nps-register-asterisk">*</span>
             </label>
            <input class="nps-register-input" type="password"/>
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
          <a class="nps-register-bottom-btn">继续<span class="nps-bottom-crop fr"><i class="el-icon-arrow-right"></i></span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import './register.less';
</style>
