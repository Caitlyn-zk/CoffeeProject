<template>
    <div>
        <div class="nps-list-lists" v-for="(item, index) in dataList" :key="index">
            <!-- <router-link to="/Caplists"> -->
                <div @click="changeGet(item)">
                    <div class="nps-lits-conta fl">
                        <span class="nps-icon-t">新品上市</span>
                        <div class="nps-cont-a">
                            <img :src="url + JSON.parse(item.img)[0]"/>
                        </div>
                    </div>
                    <div class="nps-list-contb fl">
                        <p class="nps-contb-p">{{item.name}}</p>
                        <p>{{item.title}}</p>
                        <div class="nps-contb-list">
                            <span class="into-a" v-for="(syl, ind) in (item.strength)" :key="ind"></span>
                            <span class="into-c">{{item.strength}}</span>
                            <!-- <span class="into-b"></span> -->
                        </div>
                    </div>
                    <div class="nps-list-contc fl">
                        <img src="../img/beizi01.png" />
                        <img src="../img/beizi01.png" />
                    </div>
                </div>
            <!-- </router-link> -->
            <div class="nps-list-contd fl">
                <span class="nps-contd-sp">CNY {{item.price}}</span>
                <!-- <cartList :capListIndex="index"></cartList> -->
                <a class="nps-contd-a">
                    <!-- <span class="nps-a-sp el-icon-shopping-bag-2"></span>
                    <a>添加至购物车</a>
                    <span class="nps-contd-spb el-icon-plus"></span> -->
                    <addIn :capListIndex="index"></addIn>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import cartList from './cartList'
import {capsuleHome} from 'commonjs/Requestaxios'
import addIn from '../../Coffeemachine/common/shopingbtn'
export default {
    data () {
        return {
            dataList: {},
            url: 'http://192.168.97.240:3000/'
        }
    },
    methods: {
        getLists () {
            capsuleHome({
                data: {
					id: this.dataList.id
				},
				error: () => {
					this.$message({
						message: '错了错了'
					})
				},
				success: (res) => {
					if (res.status === 200) {
						// 存入vuex中
						this.$store.commit('addCapList', res.data)
                        console.log(res.data)
                        window.localStorage.setItem('capList', JSON.stringify(res.data))
                        this.dataList = res.data
					} else {
						this.$message({
							message: res.message,
							type: 'error',
							showClose: true,
							duration: 3000
						})
					}
				}
            })
        },
        changeGet (i) {
            this.$router.push({
                path: '/caplists',
                query: {
                    name: i.name,
                    img: i.img,
                    price: i.price,
                    title: i.title
                }
            })
        }
    },
    mounted () {
        this.getLists()
    },
    components: {
        cartList,
        addIn
    }
}
</script>
<style>

</style>
