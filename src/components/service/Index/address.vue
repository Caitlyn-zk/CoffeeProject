<template>
  <div>
      <Tips></Tips>
      <div class="content">
          <div class="margin-t-20 nps-address">
                <el-tabs type="border-card" >
                    <el-tab-pane>
                        <span slot="label"><span class="iconfont icon-8"></span> Nespresso精品店</span>
                        <div>
                            <div class="nps-address-title">
                                <p class="font-12 font-weight margin-b-5">门市地址</p>
                                <span class="font-12"><span class="iconfont icon-huishou margin-r-10"></span>胶囊回收点</span>
                            </div>
                            <div class="nps-address-content">
                                <AddIndex></AddIndex>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><span class="iconfont icon-icon-test margin-left-10"></span> 零售商</span>
                         <div>
                            <div class="nps-address-title">
                                <p class="font-12 font-weight margin-b-5">门市地址</p>
                                <span class="font-12"><span class="iconfont icon-huishou margin-r-10"></span>胶囊回收点</span>
                            </div>
                            <div class="nps-address-content">
                                <Province></Province>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><span class="iconfont icon-huishou"></span>胶囊回收点</span>
                         <div>
                            <div class="nps-address-title">
                                <p class="font-12 font-weight margin-b-5">门市地址</p>
                                <span class="font-12"><span class="iconfont icon-huishou margin-r-10"></span>胶囊回收点</span>
                            </div>
                            <div class="nps-address-content">
                                <City></City>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
          </div>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Tips from '../Tips'
import AddIndex from '../Index/map/addressIndex'
import Province from '../Index/map/province'
import City from '../Index/map/city'
import Footer from '../Footer'
export default {
    components: {
        Tips,
        AddIndex,
        Province,
        City,
        Footer
    }
}
</script>

<style lang="less">
@import '../css/address.less';
@import '../font/iconfont.less';
</style>
