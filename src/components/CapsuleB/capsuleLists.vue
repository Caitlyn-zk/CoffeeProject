<template>
    <div class="content">
        <div class="nps-cpslts">
            <div class="nps-cpslts-table">
                <div class="nps-table-left">
                    <router-link to="/caphome">＜ 返回至所有咖啡</router-link>
                    <img :src="img" />
                </div>
                <div class="nps-table-right">
                    <p class="nps-tab-spa">新上市</p>
                    <p class="nps-tab-spb">热卖胶囊咖啡</p>
                    <p class="nps-tab-spc">{{name}}</p>
                    <p class="nps-tab-spd">CNY {{price}}</p>
                    <cartList></cartList>
                </div>
            </div>
            <div class="nps-middle">
                <div class="nps-middle-title clearfix">
                    <div class="nps-title-cont fl">
                        <span class="nps-middle-icon el-icon-burger"></span>
                        <p>OriginaLine</p>
                    </div>
                    <div class="nps-title-cont fl">
                        <span class="nps-middle-icon el-icon-burger"></span>
                        <p>强度</p>
                    </div>
                    <div class="nps-title-cont fl">
                        <span class="nps-middle-icon el-icon-burger"></span>
                        <p>Lungo 110 ML</p>
                    </div>
                </div>
                <div class="nps-middle-list">
                    <div class="nps-list-cont">{{name}}</div>
                    <div class="nps-list-contb">{{title}}</div>
                    <div>&nbsp;</div>
                    <div class="nps-list-contb">{{desc}}</div>
                    <div class="nps-list-contc">(含税价格)</div>
                </div>
            </div>
            <div class="nps-reomd">
                <div class="nps-reomd-title">Nespresso为您推荐</div>
                <div class="nps-reomd-list clearfix">
                    <div class="nps-reomd-lists fl">
                        <img src="./img/chanping01.png" />
                        <span>了不起的咖啡系列5条装咖啡胶囊套装</span>
                    </div>
                    <div class="nps-reomd-lists fl">
                        <img src="./img/chanping01.png" />
                        <span>Barista Creations咖啡大师之作系列3条装胶囊咖啡</span>
                    </div>
                    <div class="nps-reomd-lists fl">
                        <img src="./img/chanping01.png" />
                        <span>Barista Creations咖啡大师之作系列5条胶囊咖啡浓烈套装</span>
                    </div>
                </div>
            </div>
        </div>
        <bottom></bottom>
    </div>
</template>

<script>
import cartList from './Common/cartList'
import bottom from '../service/Footer'
export default {
    data () {
        return {
            name: '',
            price: '',
            title: '',
            desc: '',
            baking: '',
            img: {}
        }
    },
    methods: {
        getChange () {
            var stage = this.$router.history.current.query.stage
            this.name = stage.name
            this.price = stage.price
            this.desc = stage.description
            this.baking = stage.bakingDescription
            let str = stage.img
            var sub
            if (str.search(',') !== -1) {
                sub = str.substr(0, str.indexOf(',')) + ']'
            } else {
                sub = str
            }
            this.img = 'http://192.168.97.240:3000/' + JSON.parse(sub)
        }
    },
    created () {
        var seif = this
        seif.getChange()
    },
    mounted () {
    },
    components: {
        cartList,
        bottom
    }
}
</script>

<style lang="less">
@import './css/Yyb.less';
</style>
