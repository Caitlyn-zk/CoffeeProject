<template>
  <div>
    <input v-model='search' />
    <ul v-if="searchData.length > 0">
        <li :key="item.index" v-for="item in searchData">
            <p>{{item.name}}</p>
            <p>{{item.price}}</p>
        </li>
    </ul>
    <div v-else>暂无数据</div>
  </div>
</template>

<script>
export default {
    data () {
        return {
          search: '',
          products: [{
            name: '雪梨',
            price: 65,
            category: '水果'
            }, {
            name: '宝马',
            price: 2500,
            category: '汽车'
            }]
        }
    },
    computed: {
        searchData: function () {
            var search = this.search
            if (search) {
                return this.products.filter(function (product) {
                    return Object.keys(product).some(function (key) {
                        return String(product[key]).toLowerCase().indexOf(search) > -1
                    })
                })
            }
            return this.products
        }
    }
}
</script>

<style>
body {
    background: #fff;
}
</style>
