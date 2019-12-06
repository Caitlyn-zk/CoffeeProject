<template>
    <div class="nps-mycarousel">
        <div class="nps-block">
        <el-carousel trigger="click">
            <el-button class="nps-stop" icon="el-icon-video-play">
        </el-button>
        <el-carousel-item v-for="item in dataimg" :key="item.value">
            <div class="nps-carousel">
                <img :src="item.src" alt="轮播">
                <div class="nps-carouseltxt">
                    <p class="margin-b-20">购买任意200颗咖啡胶囊</p>
                    <p class="margin-b-25">赠价值高达298元咖啡品饮杯一套。</p>
                    <p>限量300个，送完为止</p>
                    <el-button>立即购买</el-button>
                </div>
            </div>
        </el-carousel-item>
        </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            dataimg: [
                {src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3662471510,2129668071&fm=26&gp=0.jpg'},
                {src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575631848286&di=1a7a1e6784677c83ce6311e8a7016c94&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201510%2F03%2F20151003202207_QzwRC.thumb.700_0.jpeg'},
                {src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575631848279&di=f3ec542f15451e2dc03cde62bc6848a8&imgtype=0&src=http%3A%2F%2Fpic.qbaobei.com%2FUploads%2FPicture%2F2017-07-03%2F595a08e8884d1.jpg'},
                {src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575631881047&di=d29314c11390505fec4a13a8a82299b3&imgtype=0&src=http%3A%2F%2Fimg.xshuma.com%2F201301%2F162812130128558630.jpg'}
            ]
        }
    },
    //  methods: {
    //     stop() {
            
    //     }
    // }
}
</script>

<style lang="less">
@import './less/topcarousel.less';
@import '../../public.less';
</style>
