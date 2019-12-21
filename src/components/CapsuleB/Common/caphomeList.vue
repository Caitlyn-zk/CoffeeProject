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
                            <span class="into-a" v-for="(syl, index) in (item.strength)" :key="index"></span>
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
                <cartList></cartList>
            </div>
        </div>
    </div>
</template>

<script>
import cartList from './cartList'
import {capsuleHome} from 'commonjs/Requestaxios'
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
                success: (res) => {
                    if (res.status === 200) {
                        console.log(res.data)
                        this.dataList = res.data
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
        cartList
    }
}
</script>
<style>

</style>
