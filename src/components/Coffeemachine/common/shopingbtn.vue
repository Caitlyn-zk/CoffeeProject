<template>
  <div style="width:100%;margin: 0 auto;">
    <el-popover
      ref="popover4"
      placement="top"
      width="220"
      trigger="click">
      <div class="nps-add-box">
        <ul class="nps-add-box-lists clearfix">
          <li :key="index" v-for="(item, index) in gridData">
            <a  @click="getnumber(index)" class="nps-lists-num"><span>{{item}}</span></a>
          </li>
        </ul>
        <div style="margin-top: 15px;">
          <el-input class="nps-add-input" placeholder="选择一种数量" >
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
export default {
  data () {
    return {
      gridData: [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300]
    }
  },
  methods: {
    getnumber (index) {
      console.log(this.gridData[index])
    }
  }
}
</script>

<style lang="less" scoped>
@import '../css/shop-add.less';
</style>
