<template>
    <div>
        <div class="content">
            <div class="nps-cpl-home clearfix">
                <!-- 主内容左边部分 -->
                <div class="nps-home-left fl">
                    <div class="nps-left-a">
                        <img src="./img/home01.jpg" />
                    </div>
                    <div class="nps-left-a">
                        <a><img src="./img/home02.jpg" /></a>
                    </div>
                    <div class="nps-left-a">
                        <a><img src="./img/home03.jpg" /></a>
                    </div>
                    <div class="nps-left-b">
                        <a><img src="./img/home04.jpg" /></a>
                        <div class="nps-b-title">黄砂糖</div>
                        <div class="nps-b-lists">
                            <span>CNY 50.00</span>
                            <a class="el-icon-plus"></a>
                        </div>
                    </div>
                    <div class="nps-left-b">
                        <a><img src="./img/home05.jpg" /></a>
                        <div class="nps-b-title">CAILLER巧克力粉</div>
                        <div class="nps-b-lists">
                            <span>CNY 50.00</span>
                            <a class="el-icon-plus"></a>
                        </div>
                    </div>
                </div>
                <!-- 主内容右边部分 -->
                <div class="nps-home-right fl">
                    <div class="nps-right-title clearfix">
                        <a>39 咖啡</a>
                        <div class="nps-title-x">重置筛选</div>
                        <!-- element组件popover弹出框 -->
                        <el-popover
                            class="nps-el-pop"
                            placement="bottom"
                            width="950"
                            trigger="click">
                            <div class="nps-el-pop-cont">
                                <span>强度</span>
                                <ul class="clearfix">
                                    <li>
                                        <a class="nps-pop-a">1</a>
                                    </li>
                                    <li>
                                        <a class="nps-pop-b">2</a>
                                    </li>
                                </ul>
                                <span>咖啡香调</span>
                                <a class="nps-cont-a">平衡</a>
                                <a class="nps-cont-a">果香</a>
                                <a class="nps-cont-a">强劲</a>
                                <a class="nps-cont-a">辛辣</a>
                                <a class="nps-cont-a">Flowery</a>
                            </div>
                            <el-button slot="reference">筛选</el-button>
                        </el-popover>
                    </div>
                    <!-- 胶囊咖啡总列表 -->
                    <div class="nps-right-list">
                        <!-- 列表头部 -->
                        <div class="nps-list-title">热卖胶囊咖啡</div>
                        <!-- 列表单个 -->
                        <caphomeList></caphomeList>
                        <caphomeList></caphomeList>
                        <caphomeList></caphomeList>
                        <div class="nps-list-title">咖啡套装</div>
                        <caphomeList></caphomeList>
                        <caphomeList></caphomeList>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import caphomeList from './Common/caphomeList'
export default {
    data () {
        return {
            visible: false
        }
    },
    components: {
        caphomeList
    }
}
</script>

<style lang="less">
@import './css/Yyb.less';
</style>
