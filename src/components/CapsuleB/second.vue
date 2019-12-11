<template>
    <div class="nps-second">
        <div class="nps-second-title">1. 您更喜欢哪一款蛋糕？</div>
        <div class="nps-second-middle clearfix">
            <div class="nps-middle-lista fl">
                <span class="nps-lista-sp">巧克力蛋糕</span>
                <div class="nps-lista-box">
                    <div class="nps-lista-img" :style="imagea"></div>
                </div>
                <div class="nps-lista-lists">
                    <span>巧克力蛋糕拥有微苦且浓郁的风味，尤其是黑巧克力口味。</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            imagea: {
                backgroundImage: "url(' + require('./img/qiaokeli01.png') + ')"
            }
        }
    }
}
</script>

<style>

</style>
