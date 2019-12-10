<template>
    <router-link to="/caplists">
        <div class="nps-list-lists">
            <div class="nps-lits-conta fl">
                <span class="nps-icon-t">新品上市</span>
                <div class="nps-cont-a">
                    <img src="../img/home06.jpg" />
                </div>
            </div>
            <div class="nps-list-contb fl">
                <p class="nps-contb-p">Nordic Black</p>
                <p>北欧大杯黑咖啡</p>
                <div class="nps-contb-list">
                    <span class="into-a"></span>
                    <span class="into-a"></span>
                    <span class="into-a"></span>
                    <span class="into-a"></span>
                    <span class="into-a"></span>
                    <span class="into-c">5</span>
                    <span class="into-b"></span>
                    <span class="into-b"></span>
                    <span class="into-b"></span>
                    <span class="into-b"></span>
                    <span class="into-b"></span>
                </div>
            </div>
            <div class="nps-list-contc fl">
                <img src="../img/beizi01.png" />
                <img src="../img/beizi01.png" />
            </div>
            <div class="nps-list-contd fl">
                <span class="nps-contd-sp">CNY 4.70</span>
                <cartList></cartList>
            </div>
        </div>
    </router-link>
</template>

<script>
import cartList from './cartList'
export default {
    components: {
        cartList
    }
}
</script>

<style>

</style>
