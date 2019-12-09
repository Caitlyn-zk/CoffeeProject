<template>
  <div class="nps-order-cont nps-edit-main font-12">
    <h2 class="nps-order-cont-title font-16 padding-20">编辑地址</h2>
    <div class="nps-order-info  padding-20 clearfix">
      <div class="nps-editaddress-form-box padding-20">
        <div class="nps-machines-info-box clearfix padding-b-20">
          <div class="nps-order-machines-info fl clearfix">
            <img src="https://www.nespresso.com/ecom/medias/sys_master/public/10229447491614/M-0263-machineRegisterSelection-243x307.png?impolicy=product&imwidth=240">
            <div class=" nps-machines-detail">
              <span class="line-30">经典</span>
              <div class="nps-machines-detail-name font-14">Inissia D40 黑色套装(黑色奶沫机)</div>
              <div class="margin-t-20">
                <div>序列号</div>
                <span>111</span>
              </div>
              <div class="margin-t-20">
                <div>购买日期</div>
                <span>2019年12月7日 星期六</span>
              </div>
            </div>
          </div>
          <div class="fr padding-t-30">
            <div><router-link to='/order/myaddress' class="nps-address-edit-btn btn">编辑咖啡机</router-link></div>
            <div class="padding-t-20"><router-link to='/order/myaddress' class="nps-address-edit-btn btn">移除咖啡机</router-link></div>
          </div>
        </div>
        <div class="nps-editaddress-bottom clearfix padding-t-20">
          <div class="fr">
            <router-link to='/order/myaddress' class="nps-address-edit-btn btn">添加咖啡机</router-link>
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
</style>
