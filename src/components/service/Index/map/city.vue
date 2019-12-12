<template>
<div>
    <baidu-map class="bm-view" v-bind="mapOptions">
        <bm-control :offset="{width: '10px', height: '10px'}">
            <bm-auto-complete v-model="content" :sugStyle="{zIndex: 1}" />
        </bm-control>
        <bm-local-search :keyword="content" :auto-viewport="true" ></bm-local-search>
    </baidu-map>
</div>
</template>

<script>
import {BaiduMap, BmControl, BmView, BmAutoComplete, BmLocalSearch} from 'vue-baidu-map'
export default {
  components: {
    BaiduMap,
    BmView,
    BmControl,
    BmAutoComplete,
    BmLocalSearch
  },
  data () {
    return {
        mapOptions: {
            ak: 'ak',
            center: '成都',
            scrollWheelZoom: true
        },
        content: ''
        }
	}
}
</script>

<style>
.bm-view {
  width: 100%;
  height: 600px;
}
.BMap_noprint input{
    width: 500px;
    height: 32px;
    border-radius: 5px;
    border: 1px solid #000;
    margin-left: 10px;
    margin-top: 10px;
    padding-left: 20px;
}
</style>
