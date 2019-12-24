<template>
<!-- 购物车组件 -->
	<div class="nps-shoppingCart-mainbar">
		<el-button class="el-icon-shopping-bag-1" @click="drawer = true, cartShow(2)" >
			您的购物车(0)
		</el-button>
    <div class="buyCart" :class="{isShow:on == 1}" ref="cart">
      <el-drawer
        title="购物袋"
        :visible.sync="drawer"
        :direction="direction"
        :modal-append-to-body= false
        >
        <div class="nps-Catr-tips">
          <div class="nps-Catr-tips-bar">
            购物
            <a class="nps-Cart-monys">满340元</a>
            可享受
            <strong>包邮。</strong>
          </div>
        </div>
        <div class="nps-Cart-shopping-main" v-if="goodslist.length > 0">
          <ul class="nps-Cart-goods-main padding-b-20">
            <div :key="item.idext" v-for="item in goodslist">
              <div class="nps-Cart-goods-title">{{item.title}}</div>
              <li class="nps-goods-lists clearfix">
                <div class="nps-goods-imgs fl margin-r-20">
                  <img src="item.images">
                </div>
                <div class="padding-tb-20 fl">
                  <p class="font-12 line-28">{{item.textcontent}}</p>
                  <p class="font-12 line-28 nps-text-color">{{item.money}}</p>
                </div>
                <div class="fr nps-cart-delete" >
                  <span @click="Delete()" class="el-icon-close"></span>
                </div>
              </li>
            </div>
          </ul>
          <div class="nps-Cart-Total">
            <div class="clearfix">
              <span class="fl nps-Cart-Total-text">总计</span>
              <span class="fr nps-Cart-Total-mony">CNY 123486</span>
            </div>
            <div class="nps-tart-total-tips">不含配送费用和活动促销折扣</div>
          </div>
          <div class="demo-drawer__footer">
            <router-link to = "/orderstep" class="nps-Cart-btun" type="" @click.native="goBuyCart(1)">前往购物车</router-link>
          </div>
        </div>
        <!-- 没有商品 -->
        <div class="nps-Cart-shopping-main" v-else>
          <span class="font-16">您的购物车是空的</span>
          <div class="demo-drawer__footer">
            <el-button class="nps-Cart-btun" type="" @click="centerDialogVisible = false">开始购物</el-button>
          </div>
        </div>
      </el-drawer>
    </div>
	</div>
</template>
<script>
// 图片
import shopgoods from './img/kk-Cartgoods01.jpg'
export default {
	components: {
		shopgoods
	},
	data () {
		return {
			drawer: false,
			direction: 'rtl',
      Listgoods: true,
      on: 0,
			goodslist: [{
					id: 1,
					title: '咖啡胶囊(数量)',
					images: shopgoods,
					textcontent: 'Nordic Cloudberry Flavoured',
					money: 'CNY 47.00(10 × CNY 4.70)'
				}, {
					id: 2,
					title: '咖啡胶囊(数量)',
					images: shopgoods,
					textcontent: 'Nordic Cloudberry Flavoured',
					money: 'CNY 47.00(10 × CNY 4.70)'
				}
			]
		}
	},
	mounted () {
		// console.log()
	},
	methods: {
		Delete: function () {
			console.log('哈哈哈')
			this.goodslist.splice(this.id, 1)
    },
    goBuyCart (value) {
      console.log(this.$refs.cart)
      console.log(value)
      console.log(document.body.style)
      if (value === 1) {
        this.on = value
      }
    },
    cartShow (value) {
      if (value === 2) {
        this.on = value
      }
    }
	}
}
</script>

<style lang="less">
@import './css/index.less';
</style>
