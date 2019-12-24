<template>
    <div class="nps-formulelist">
        <div class="nps-cont-lists fl" v-for="(item, index) in dataList" :key="index">
            <div class="nps-list-img">
                <img :src="item.img" />
            </div>
            <div class="nps-list-title">{{item.name}}</div>
            <div class="nps-list-listsm">{{item.list}}</div>
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
import capimg6 from '../img/capList05.jpg'
import capimg7 from '../img/capList06.jpg'
import capimg8 from '../img/capList07.jpg'
import capimg9 from '../img/capList08.jpg'
export default {
    data () {
        return {
            dataList: [{
                id: 6,
                name: '冰澳式黑咖啡',
                list: '垃圾，不好喝',
                time: '3 分钟',
                difficulty: '简单',
                img: capimg6
            }, {
                id: 7,
                name: '强劲卡布奇诺',
                list: '...',
                time: '3 分钟',
                difficulty: '中等',
                img: capimg7
            }, {
                id: 8,
                name: '富桂桔祥咖啡',
                list: '花开富贵，情满人间。桂花及桂圆在过年期间象徽吉祥、美好、贵人、相助，是过年赠花的花款及招待宾客常见的食品',
                time: '5 分钟',
                difficulty: '简单',
                img: capimg8
            }, {
                id: 9,
                name: '秘境东方卡布奇诺',
                list: '受到过去和当代香料咖啡文化的启发，这款配方为经典的卡布奇诺咖啡带来了独特的东方风味，增加了伊斯坦布尔咖啡馆咖啡的异域风情',
                time: '3 分钟',
                difficulty: '简单',
                img: capimg9
            }]
        }
    }
}
</script>

<style>

</style>
