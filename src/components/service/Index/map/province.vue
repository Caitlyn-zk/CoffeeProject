<template>
  <div>
    <!-- 组件 -->
        <baidu-map
          class="baidu-view"
          ak='TG5moDeE12H5vZQeeXEemRB5gUaSyldG'
          :center="center"
          :zoom="zoom"
          @ready="handler"
          :scroll-wheel-zoom="true"
        >
          <!-- 地图;类型 -->
          <bm-map-type
            :map-types="['BMAP_HYBRID_MAP','BMAP_NORMAL_MAP']"
            anchor="BMAP_ANCHOR_TOP_RIGHT"
          ></bm-map-type>
          <!-- 城市 搜索 列表 -->
          <bm-city-list anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{width:100,height:10}"></bm-city-list>
         <!-- 定位-->
          <bm-geolocation
            anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
            :showAddressBar="true"
            :autoLocation="true"
          ></bm-geolocation>
        </baidu-map>
  </div>
</template>

<script>
import {BaiduMap, BmGeolocation, BmMapType, BmCityList, BmMarker, BmOverlay} from 'vue-baidu-map'
export default {
  name: 'mapNum',
  components: {
    BaiduMap,
    BmGeolocation,
    BmMapType,
    BmCityList,
    BmMarker,
    BmOverlay
  },
 data () {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3
      }
   },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center = '成都'
      this.zoom = 15
    }
  }
}
</script>

<style>
.baidu-view{
  width: 100%;
  height: 600px;
}
</style>
