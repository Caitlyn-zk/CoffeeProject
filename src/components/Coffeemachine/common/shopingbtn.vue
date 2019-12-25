<template>
  <div style="width:100%;margin: 0 auto;">
    <el-popover
      ref="popover4"
      placement="top"
      width="220"
      v-model="visible"
      trigger="click">
      <div class="nps-add-box">
        <ul class="nps-add-box-lists  clearfix">
          <li :key="index" v-for="(item, index) in gridData">
            <a  @click="getnumber($event,index)" class="nps-lists-num"><span>{{item}}</span></a>
          </li>
        </ul>
        <div style="margin-top: 15px;">
          <el-input class="nps-add-input" type="number" min="0" v-model="input" placeholder="选择一种数量" >
            <template class="nps-add-confirm" slot="append">好</template>
          </el-input>
        </div>
      </div>
    </el-popover>
    <el-button v-popover:popover4 class="nps-add-button">
			<div class="clearfix">
				<div class="fl">
					<i class="el-icon-goods"></i>
				</div>
				<span class="text-center font-18">添加到购物车</span>
				<div class="fr">
					<i class="el-icon-plus"></i>
				</div>
			</div>
    </el-button>
  </div>
</template>

<script>
import { addCart } from 'commonjs/Requestaxios.js'
import {createNamespacedHelpers} from 'vuex'
const {mapState: addCartListState} = createNamespacedHelpers('addCartList')
export default {
  props: ['capListIndex'],
  data () {
    return {
      // 咖啡胶囊的下标
      // caplistIndex: 0,
      visible: false,
      Caplists: '',
      Cartgoodslists: [],
			input: '',
      gridData: [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300]
    }
  },
  watch: {
    '$store.state.addCartList.changeCartlist' () {
      this.Cartgoodslists = this.$store.state.addCartList.changeCartlist
    }
  },
  computed: {
    ...addCartListState(['CapList'])
  },
  mounted () {
    this.Caplists = JSON.parse(window.localStorage.getItem('capList'))
  },
  methods: {
    getnumber (e, index) {
      this.Cartgoodslists.userMun = this.gridData[index]
    // 从详情添加购物车
      if (JSON.stringify(this.$router.history.current.query) !== '{}') {
        this.Cartgoodslists = this.$router.history.current.query
        console.log(this.Cartgoodslists)
      } else {
        let lists = this.Caplists
        let index = this.capListIndex
        this.Cartgoodslists = lists[index]
      }
    //  从商品列表页添加购物车
      // 从vuex取出咖啡胶囊列表
      console.log(this.Cartgoodslists)
      if (this.Cartgoodslists.manual === 'undefined') {
        // 判断是否含有说明书字段 有则表示 商品为咖啡机
        this.Cartgoodslists.shoppingClassify = '咖啡机'
      } else {
        // 否则表示 咖啡胶囊
        this.Cartgoodslists.shoppingClassify = '咖啡胶囊'
      }
      this.Cartgoodslists.userMun = this.gridData[index]
      // 将数量 加入vuex
      this.$store.commit('munlists', this.gridData[index])
      // 商品存入vuex
      this.$store.commit('changeCartlists', this.Cartgoodslists)
      let infor = JSON.parse(window.localStorage.getItem('infor'))
      if (infor) {
        // 定义一个空数组
        let arr = []
        // 定义一个对象放商品
        let obj = {npscommodity: this.Cartgoodslists.id, commodity: this.Cartgoodslists.classification, quantity: this.Cartgoodslists.userMun}
        arr.push(obj)
        arr = JSON.stringify(arr)
        addCart({
          data: {
            userId: infor.id,
            status: 0,
            goods: arr
          },
          success: (res) => {
            if (res.status === 200) {
              this.visible = false
              this.$message({
                type: 'success',
                message: '添加购物车成功',
                showClose: 'true',
                offset: 100
              })
            }
          },
          error: (res) => {
            console.log(res)
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../css/shop-add.less';
</style>
