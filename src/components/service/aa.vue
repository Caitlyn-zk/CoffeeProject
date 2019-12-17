<template>
<div id="app">
        <button @click="btn()">全部</button>
        <button @click="btn1()">第一组</button>
        <button @click="btn2()">第二组</button>
        <button @click="btn3()">第三组</button>
        <div :key="item.index" v-for="item in Arrays" :id="item.type" :class="cls">
            <h1>{{item.title}}</h1>
            <img :src="item.srcs" alt="">
        </div>
</div>
</template>

<script>
export default {
  data () {
    return {
     cls: 'bt',
     Arrays: [
		{
			title: '第一组',
			type: '1',
			srcs: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534688762840&di=77808492e0f983d6a5fa15696b18c346&imgtype=0&src=http%3A%2F%2Fimg9.zol.com.cn%2Fdesk%2F800_440%2F439091.jpg'

		},
		{
			title: '第二组',
			type: '2',
			srcs: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534688762840&di=cdea47c1fc3dcbae33892dda1c46c5a2&imgtype=0&src=http%3A%2F%2Fk.zol-img.com.cn%2Fnbbbs%2F8360%2Fa8359626_s.jpg'
		},
		{
			title: '第三组',
			type: '3',
			srcs: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534688762840&di=9042c4ce944e2832db1b96e4df53be89&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F7676%2F7675079_0800.jpg'
		}
	]
    }
  },
	methods: {
		// 显示全部按钮点击调用该方法
		btn: function () {
			var ds = document.getElementsByClassName('bt')
			// 使用 for in循环遍历所有的组
			for (var i in ds) {
				ds[i].style.display = 'block'
			}
		},
		// 显示第一组按钮点击调用该方法
		btn1: function () {
			document.getElementById('1').style.display = 'none'
		},
		// 显示第二组按钮点击调用该方法
		btn2: function () {
			document.getElementById('2').style.display = 'none'
		},
		// 显示第三组按钮点击调用该方法
		btn3: function () {
			document.getElementById('3').style.display = 'none'
		}
	}
}
</script>

<style>
body{
  background: #fff;
}
* {
  list-style: none;
}
.border-style{
    border: 2px solid deeppink;
    height: 150px;
    width: 350px;
}
</style>
