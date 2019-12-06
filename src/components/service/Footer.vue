<template>
    <div class="nps-footer clearfix">
        <div class="nps-footer-left fl">
            <span><img src="./img/xc-cn.png" alt=""></span>
            <div class="nps-footer-select">
                <template>
                    <el-select v-model="value" placeholder="中文">
                        <el-option
                        v-for="item in select"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </template>
            </div>
        </div>
        <div class="nps-footer-right fr">
            <ul class="footer-list">
                <li><a href="https://www.nespresso.com/careers/?m=CN&l=ZH#/">工作机会</a></li>
                <li><a>法律条款</a></li>
                <li><a>联系我们</a></li>
                <li><a>专业商用咖啡</a></li>
            </ul>
            <ul class="footer-list gary">
                <li><a>咖啡词汇</a></li>
                <li><a>关于我们的企业</a></li>
                <li><a>网站地图</a></li>
                <li><a>京ICP备11046978号-1</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            select: [{
                value: '1',
                label: '中文'
            }, {
                value: '2',
                label: 'English'
            }],
            value: ''
        }
    }
}
</script>

<style lang='less' scoped>
@import url('./css/footer.less');
</style>
