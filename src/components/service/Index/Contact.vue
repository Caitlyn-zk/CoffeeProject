<template>
  <div>
      <Nav></Nav>
      <Navbar></Navbar>
      <Tips></Tips>
      <div class="info-data-list">
          <div class="content ">
              <div class="info-list-cont text-center">
                  <p class="font-32 ">顾客服务</p>
                  <p class="font-12 margin-t-20">我们的Nespresso咖啡专家每周7天/每天24小时帮助您解答所有关于我们优选咖啡的疑问，为您提供咖啡机问题的建议，同时接收您的订单。</p>
                  <div class="info-list-call">
                      <p>拨打我们的热线电话： 4001 200600</p>
                      <p>通过填写表格给我们发送邮件 <router-link class="text-white" to="/info">点击这里</router-link></p>
                  </div>
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
import Navbar from '../../Nav/navbar'
import Nav from '../../Nav/nav'
export default {
    data () {
        return {
            input: '',
            radio: '1',
            textarea: '',
            select: [{
                value: '1',
                label: '先生'
            }, {
                value: '2',
                label: '女士'
            }, {
                value: '3',
                label: '小姐'
            }, {
                value: '4',
                label: '太太'
            }, {
                value: '5',
                label: '博士'
            }],
            info: [{
                value: '1',
                label: '产品信息'
            }, {
                value: '2',
                label: '订单信息与查询'
            }],
            language: [{
                values: 1,
                label: '中文'
            }, {
                values: 2,
                label: '英文'
            }],
            value: '',
            values: ''
        }
    },
    components: {
        Tips,
        Support,
        Footer,
        Navbar,
        Nav
    }
}
</script>

<style lang='less'>
@import '../css/contact.less';
@import '../font/iconfont.less';
</style>
