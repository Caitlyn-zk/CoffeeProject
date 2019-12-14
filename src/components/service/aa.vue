<template>
  <div id="app">
      <input v-model='search' />
      <ul v-if="searchData.length > 0">
          <li :key="item.index" v-for="item in searchData">
              <p>{{item.title}}</p>
              <p>{{item.list}}</p>
          </li>
      </ul>
      <div v-else>暂无数据</div>
      <div class="nps-Controll active margin-t-10" :key="item.index" v-for="item in searchData">
          <div>
            <p class="nps-Controll-title">
              <span v-html="item.inco"></span>
              {{item.title}}
            </p>
          </div>
          <div>
            <el-collapse accordion >
              <el-collapse-item >
                <template slot="title">
                  {{item.list}}
                </template>
                <p></p>
                <p></p>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      products: [
              [{
                inco: '<span class="iconfont icon-xinxi"></span>',
                title: '产品信息',
                list: '怎样购买Nespresso优选咖啡？'
              }, {
                list: '怎样购买Nespresso优选咖啡？'
              }],
              [{
                inco: '<span class="iconfont icon-xinxi"></span>',
                title: '产品信息sss',
                list: '怎样购买Nespresso优选咖啡？111'
              }, {
                list: '怎样购买Nespresso优选咖啡？222'
              }]
          ],
          arr: []
    }
  },
  computed: {
      searchData: function () {
          var search = this.search
          if (search) {
              console.log(JSON.stringify(this.arr))
              return this.arr.filter(function (product) {
                  return Object.keys(product).some(function (key) {
                      return String(product[key]).toLowerCase().indexOf(search) > -1
                  })
              })
          }
          return this.arr
      }
  },
  created () {
      for (var i = 0; i < this.products.length; i++) {
        for (var j = 0; j < this.products[i].length; j++) {
              this.arr.push(this.products[i][j])
          }
      }
  }
}
</script>

<style>
body{
  background: #ffffff;
}
</style>
