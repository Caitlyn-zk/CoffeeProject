<template>
	<div>
		<div class="filter-more">
			<transition name="selectbox">
				<div class="box" v-show="boxshow">
					<div v-for="(item,index) in filterBox" :key="index">
						<i-col span="2">{{item.name}}</i-col>
						<i-col span="22">
							<a href="#"
								v-for="(v,i) in item.items"
								:key="i"
								@click="clickrange(index,v,i)"
								class="text-filter"  >
								<span :class="{ isActive:v.active}">{{v.text}}</span>
							</a>
						</i-col>
					</div>
				</div>
			</transition>
			<div>
				<a href="#" v-for="(item,index) in selectBox" class="text-select" :key="index">
					{{item.text}}
					<i @click="removeCurrentSelect(index)">&times;</i>
				</a>
			</div>
			<p class="text-toggle" @click="togglebox">{{btnTxt ?'收起选项':'更多选项'}}</p>
		</div>
		<div style="color: #fff; text-align: center;">
			<div class="nps-content">
				<span>姚元炳</span>
				<span>年龄：</span>
				<span>21岁</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			boxshow: false,
			btnTxt: false,
			selectBox: [],
			filterBox: [
				{
					name: '搜索范围:',
					items: [
						{ value: '1', text: '全部', active: false },
						{ value: '2', text: '诊断信息', active: false },
						{ value: '3', text: '手术信息', active: false },
						{ value: '4', text: '医嘱处方', active: false },
						{ value: '5', text: '检验报告', active: false },
						{ value: '6', text: '检查报告', active: false },
						{ value: '7', text: '病历文书', active: false }
					]
				},
				{
					name: '患者年龄:',
					items: [
						{ value: 'allAge', text: '全部', active: false },
						{ value: 'treeY', text: '0~3岁', active: false },
						{ value: 'fourteenY', text: '4~14岁', active: false },
						{ value: 'fortyY', text: '15~40岁', active: false },
						{ value: 'sixtyY', text: '41~65岁', active: false },
						{ value: 'enghtyY', text: '65~85岁', active: false },
						{ value: 'ninetyY', text: '85岁以上', active: false }
					]
				},
				{
					name: '患者性别:',
					items: [
						{ value: 'allSex', text: '全部', active: false },
						{ value: 'man', text: '男', active: false },
						{ value: 'women', text: '女', active: false },
						{ value: 'unknow', text: '未知', active: false }
					]
				},
				{
					name: '就诊类别:',
					items: [
						{ value: '1', text: '全部', active: false },
						{ value: '2', text: '门诊', active: false },
						{ value: '3', text: '急诊', active: false },
						{ value: '4', text: '住院', active: false }
					]
				},
				{
					name: '就诊时间:',
					items: [
						{ value: '1', text: '全部', active: false },
						{ value: '2', text: '2009年', active: false },
						{ value: '3', text: '2018年', active: false },
						{ value: '4', text: '2017年', active: false },
						{ value: '5', text: '2016年', active: false },
						{ value: '6', text: '2015年', active: false },
						{ value: '7', text: '2014年', active: false },
						{ value: '8', text: '更多', active: false }
					]
				},
				{
					name: '手术病人:',
					items: [
						{ value: '1', text: '全部', active: false },
						{ value: '2', text: '手术病人', active: false },
						{ value: '3', text: '非手术病人', active: false }
					]
				}
			]
		}
	},
	methods: {
		togglebox: function () {
			this.boxshow = !this.boxshow
			this.btnTxt = !this.btnTxt
		},
		clickrange (parentIndex, el, childIndex) {
			var item = this.filterBox[parentIndex].items
			item.filter((v, i) => {
				if (i === childIndex) {
					v.active = !v.active // 选中和反选
					this.selectBox.unshift(v) // 选中的数组
				} else {
					v.active = false // 取消选中
					this.selectBox.filter((childEl, childI) => {
						if (childEl.active === false) {
							this.selectBox.splice(childI, 1) // 反选删除数组中的当前个
						}
					})
				}
			})
		},
		removeCurrentSelect (index) {
			this.filterBox.filter((el, i) => {
				el.items.filter((data, childIndex) => {
					if (data.text === this.selectBox[index].text) {
						data.active = false
					}
				})
			})
			this.selectBox.splice(index, 1)
		}
	}
}
</script>

<style>
.nps-content{
	width: 90%;
	margin: 0 auto;
	height: 50px;
	background: #fff;
	line-height: 50px;
	font-size: 18px;
	color: #000;
}
.filter-more {
  width: 90%;
  margin: 0 auto;
  border: 1px solid #e8f4fd;
  padding: 25px 15px;
	color: #fff;
}
.box {
  height: 150px;
  overflow: hidden;
}
.text-toggle {
  text-align: center;
  cursor: pointer;
}
.selectbox-leave-active,
.selectbox-enter-active {
  transition: all 0.5s ease;
}
.selectbox-leave-active,
.selectbox-enter {
  height: 0px !important;
}
.selectbox-leave,
.selectbox-enter-active {
  height: 150px;
}
.text-filter {
  display: inline-block;
  color: #404040;
  width: 80px;
  span {
    display: inline-block;
    text-align: center;
    width: 60px;
    &:hover {
      border-radius: 40px;
      color: #ffffff;
      animation: myfirst 1s;
      -moz-animation: myfirst 1s; /* Firefox */
      -webkit-animation: myfirst 1s; /* Safari and Chrome */
      -o-animation: myfirst 1s; /* Opera */
      animation-fill-mode: forwards;
    }
  }
}
.text-select {
  display: inline-block;
  padding: 0px 5px;
  border: 1px solid #268edb;
  border-radius: 40px;
  color: #268edb;
  font-size: 14px;
  margin-right: 20px;
  i {
    display: inline-block;
    height: 100%;
    font-size: 15px;
    padding: 0px 5px;
  }
}
.isActive {
  background-color: #2989dd;
  border-radius: 40px;
  color: #ffffff;
}
@keyframes myfirst {
  from {
    background: #ffffff;
  }
  to {
    background: #2989dd;
  }
}
</style>
