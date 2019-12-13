<template>
<div>
    <baidu-map class="bm-view" v-bind="mapOptions">
        <bm-control :offset="{width: '10px', height: '10px'}">
            <bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 1}" />
        </bm-control>
        <bm-local-search :keyword="keyword" :auto-viewport="true" ></bm-local-search>
        <bm-city-list anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{width:780,height:10}"></bm-city-list>
    </baidu-map>
</div>
</template>

<script>
import BmCityList from 'vue-baidu-map/components/controls/CityList.vue'
import {BaiduMap, BmControl, BmView, BmAutoComplete, BmLocalSearch} from 'vue-baidu-map'
export default {
  components: {
    BaiduMap,
    BmView,
    BmControl,
    BmAutoComplete,
    BmLocalSearch,
    BmCityList
  },
  data () {
    return {
        mapOptions: {
            ak: 'ak',
            center: '中国',
            scrollWheelZoom: true
        },
        keyword: ''
        }
	}
}
</script>

<style>
.bm-view {
  width: 1200px;
  height: 600px;
}
.BMap_noprint input{
    width: 188px;
    height: 23px;
    border-radius: 5px;
    border: 1px solid #000;
    margin-left: 10px;
    margin-top: 10px;
    padding-left: 20px;
}
.ui_city_change_top .ui_city_change_inner, .ui_city_change_bottom .ui_city_change_inner{
    display: inline-block;
    height: 32px;
    line-height: 30px;
    border: 1px solid #c4c7cc;
    background-color: #fff;
    padding: 0 10px 0 10px;
    color: #000;
    border-radius: 5px;
}
.bm-view .BMap_CityListCtrl{
  right: 628px;
}
.ui_city_change .ui_city_change_top{
  height: 32px;
}
</style>
