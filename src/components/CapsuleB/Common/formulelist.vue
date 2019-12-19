<template>
    <div class="nps-formulelist">
        <div class="nps-cont-lists fl" v-for="(item, index) in dataList" :key="index">
            <div class="nps-list-img">
                <img :src="item.img" />
            </div>
            <div class="nps-list-title">{{item.name}}</div>
            <div class="nps-list-lists">{{item.list}}</div>
            <div class="nps-list-cont">
                <span class="el-icon-time"></span>
                <a>{{item.time}}</a>
                <span class="el-icon-s-shop"></span>
                <a>{{item.difficulty}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            dataList: [{
                id: 1,
                name: '蓝莓大咖啡',
                list: '兄得，很好喝的',
                time: '3 分钟',
                difficulty: '简单'
            }, {
                id: 2,
                name: '云莓芙佳朵',
                list: '这个就不清楚了',
                time: '5 分钟',
                difficulty: '中等'
            }, {
                id: 3,
                name: '日出的水面',
                list: '这个应该不怎么好喝',
                time: '1 分钟',
                difficulty: '简单'
            }, {
                id: 4,
                name: '金色海岸',
                list: 'emmmmmm，不错',
                time: '5 分钟',
                difficulty: '中等'
            }, {
                id: 5,
                name: '冰奥白咖啡',
                list: '用一杯来自澳大利亚的冰奥白给自己降降温，他是夏天的好伙伴。',
                time: '5 分钟',
                difficulty: '中等'
            }, {
                id: 6,
                name: '冰澳式黑咖啡',
                list: '垃圾，不好喝',
                time: '3 分钟',
                difficulty: '简单'
            }, {
                id: 7,
                name: '强劲卡布奇诺',
                list: '...',
                time: '3 分钟',
                difficulty: '中等'
            }, {
                id: 8,
                name: '富桂桔祥咖啡',
                list: '花开富贵，情满人间。桂花及桂圆在过年期间象徽吉祥、美好、贵人、相助，是过年赠花的花款及招待宾客常见的食品',
                time: '5 分钟',
                difficulty: '简单'
            }, {
                id: 9,
                name: '秘境东方卡布奇诺',
                list: '受到过去和当代香料咖啡文化的启发，这款配方为经典的卡布奇诺咖啡带来了独特的东方风味，增加了伊斯坦布尔咖啡馆咖啡的异域风情',
                time: '3 分钟',
                difficulty: '简单'
            }]
        }
    },
    methods: {

    },
    mounted () {
    }
}
</script>

<style>

</style>
