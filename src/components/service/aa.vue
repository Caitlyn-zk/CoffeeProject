<template>
    <div>
        <!-- @open="handleOpen"
  @close="handleClose" -->
       <el-menu
  default-active="2"
  class="el-menu-vertical-demo"
  background-color="#fff"
  text-color="#000"
  active-text-color="#ffd04b"
  v-for="(menu, index) in navData"
  :key="menu.value">
    <el-submenu v-bind:index="index.toString()">
      <template slot="title">
        <span slot="title">{{menu.title}}</span>
      </template>
      <el-menu-item-group
        v-bind:index="index + '-' + subIndex"
        v-for="(threeMenu, subIndex) in menu.children"
        :key="threeMenu.value"
      >
        <el-menu-item @click='menuClick(threeMenu)' >
          <i v-bind:class="threeMenu.icon"></i>
          <span slot="title">{{threeMenu.title}}2</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
</el-menu>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // nav添加
navData: [
  {
    title: '页签操作',
    children: [
      {
        title: '刷新当前'
      },
      {
        title: '关闭当前'
      },
      {
        title: '全部关闭'
      },
      {
        title: '除此之外全部关闭'
      }
    ]
  }
]
        }
    },
    methods: {
        menuClick (menu) {
            switch (menu.title) {
            case '刷新当前':
                console.log('刷新当前')
                break
            case '关闭当前':
                console.log('关闭当前')
                break
            case '全部关闭':
                console.log('全部关闭')
                break
            case '除此之外全部关闭':
                console.log('除此之外全部关闭')
                break
            default:
                break
            }
        }
    }
}
</script>

<style>
body{
    background: #fff;
}
</style>
