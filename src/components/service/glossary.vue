<template>
  <div>
    <Tips></Tips>
    <div class="nps-Glossary">
        <div class="content">
          <div class="nps-glossary-list">
            <el-collapse accordion>
                <el-collapse-item>
                  <template slot="title">
                    酸度
                  </template>
                  <div>酸度是一种基本味道，通过舌头上的味蕾来检测。像柠檬汁一样，它在舌头两侧产生生动的感觉。酸度使咖啡具有“活泼”的口感</div>
                </el-collapse-item>
                <el-collapse-item title="个 )">
                  <div>淡淡的柑橘类水果，通常是柠檬或佛手柑橙。</div>
                </el-collapse-item>
                <el-collapse-item title="苦味">
                  <div>常在舌头后部感知。菊苣或黑巧克力和可可可带来颇具特色的苦味。苦味至关重要-它可以使咖啡的味道留在口中。</div>
                </el-collapse-item>
                <el-collapse-item title="混合">
                  <div>基于感官特征的几种优质咖啡的混合物，以获得精确而和谐的风味特征。</div>
                </el-collapse-item>
                <el-collapse-item title="Body">
                  <div>“身体”是指咖啡的饱满度，粘度和密度。浓郁的咖啡口感浓郁，非常明显。相反，缺少咖啡的身体是水样和液体。</div>
                </el-collapse-item>
                <el-collapse-item title="黄油笔记">
                  <div>此说明类似于乳制品或饼干，蛋糕或烘烤某些糕点时产生的香气中发现的香草和焦糖的甜香气。</div>
                </el-collapse-item>
                <el-collapse-item title="可可笔记">
                  <div>这笔记让人想起黑巧克力或可可。有时会伴随着微妙的甘草味。</div>
                </el-collapse-item>
                <el-collapse-item title="胶囊">
                  <div>磨碎后，特级Crus用铝胶囊包装。铝完全密封且无毒，可将咖啡900种香气和风味的新鲜度锁定12个月。</div>
                </el-collapse-item>
                <el-collapse-item title="杂粮记">
                  <div>该调料唤起谷物产品的气味：面包，吐司和早餐谷物。有时，它还会让人联想到核桃，榛子或杏仁等干果。</div>
                </el-collapse-item>
                <el-collapse-item title="樱桃">
                  <div>咖啡树果实的名称。颜色为绿色，成熟时为红色。樱桃可以在同一分支上以不同的成熟速率生长。</div>
                </el-collapse-item>
                <el-collapse-item title="咖啡树">
                  <div>咖啡是茜草科的一员。只有两种咖啡属可以商业种植。阿拉比卡咖啡（Coffea Arabica）和罗布斯塔咖啡（Coffea Canephora）。</div>
                </el-collapse-item>
                <el-collapse-item title="控制">
                  <div>在Nespresso，我们致力于生产最优质的咖啡。从生产国家/地区的生咖啡选择到从工厂/生产地点释放Nespresso胶囊的过程，我们在六个关键阶段进行了许多质量控制测试。在整个烘焙生产过程的每个阶段，研磨，然后密封成胶囊，咖啡要经过感官，物理和化学质量控制测试。一切都没有机会。</div>
                </el-collapse-item>
                <el-collapse-item title="米黄">
                  <div>该奈斯派索机器的高压提取系统结合咖啡的新鲜度和质量，自然产生浓稠，光滑的奶油。一旦准备好，意式浓缩咖啡就会继续发展。花香倾向于首先出现，而其他香气（包括较重，更烤的香气）则较慢出现。克丽玛对于释放和保护这些香气至关重要。提取后立即从液体咖啡和空气中自然形成的克丽玛刺激杯中香气的释放。一旦沉淀下来，克丽玛的作用就相反，因为它形成了咖啡的“外皮”，并防止了最易挥发的香气逸出。克丽玛的品质给您的特浓咖啡留下了重要的第一印象，并且自然地通过品尝前的食欲来影响您的感觉。</div>
                </el-collapse-item>
                <el-collapse-item title="脱咖啡因">
                  <div>天然或化学过程，涉及在烘焙之前从生咖啡中提取咖啡因。Nespresso使用100％自然的方法。</div>
                </el-collapse-item>
                <el-collapse-item title="干式法">
                  <div>该方法包括干燥樱桃的果肉和果皮，以获得易于脱皮或脱壳的干豆。产生的生咖啡称为“天然”或“未洗净”。</div>
                </el-collapse-item>
                <el-collapse-item title="咖啡">
                  <div>意式浓缩咖啡技术是1903年在意大利创立的，当时Luigi Bezzera希望更快地提取咖啡，发明了“高压渗滤”原理。因此，“ espresso”这个名称来自意大利语单词“ esprimere”，意为表达。准备真正的意式浓缩咖啡包括迫使高压水通过细磨的咖啡以非常快的速度提取其真正的香精，因此，意式浓缩咖啡不仅仅是咖啡的名字或杯子的大小。主要通过其身体的密度，其香气的丰富性，在口感上的挥之不去的存在以及高压提取产生的“火锅”的厚度来识别。</div>
                </el-collapse-item>
                <el-collapse-item title="香精">
                  <div>喝特定咖啡的口腔中的总体感觉。</div>
                </el-collapse-item>
                <el-collapse-item title="果味葡萄酒">
                  <div>这个音符呼应了红色水果（黑加仑，葡萄，草莓，覆盆子和蓝莓）的味道。有时，它会让人联想到其他水果味，例如杏，李子，苹果，梨或桃子。</div>
                </el-collapse-item>
                <el-collapse-item title="咖啡">
                  <div>该术语表示加工后和烘焙之前的咖啡豆。咖啡以这种形式被运送到像Nespresso这样的咖啡商人。</div>
                </el-collapse-item>
                <el-collapse-item title="磨削">
                  <div>操作包括将新鲜烘焙的咖啡豆还原为粉末。研磨是影响咖啡的流动时间及其芳香性的因素。</div>
                </el-collapse-item>
                <el-collapse-item title="强度">
                  <div>咖啡的浓烈度取决于烘烤的程度，咖啡的质感和苦味。它与咖啡因中的咖啡因含量无关。</div>
                </el-collapse-item>
                <el-collapse-item title="季风咖啡">
                  <div>在印度，当生咖啡暴露于季风天气时，咖啡豆膨胀并吸收水分，使咖啡散发出令人追捧的香气。</div>
                </el-collapse-item>
                <el-collapse-item title="采摘">
                  <div>完全手工完成咖啡樱桃的收获，以确保仅摘下成熟的樱桃。</div>
                </el-collapse-item>
                <el-collapse-item title="烤 笔记">
                  <div>此笔记随着烘烤而发展。它描述了您煮咖啡时释放的烤豆的味道。</div>
                </el-collapse-item>
                <el-collapse-item title="焙烤">
                  <div>该操作包括“烘烤”生咖啡豆，并使咖啡的风味和900种香气得以发展。焙烧在研磨之前进行。</div>
                </el-collapse-item>
                <el-collapse-item title="嗅觉">
                  <div>即使在为您的嘴唇带来浓咖啡之前，您也可以闻到从杯子中释放出来的香气。最轻，最细腻，最芳香的香气通常会首先释放，维瓦尔托（Vivalto）带有花香，科西（Cosi）带有柠檬味，Decaffeinato（达菲）则带有红色水果。用勺子和更浓的咖啡搅拌，会出现更多的烤味，Capriccio的谷物味，Roma的木质味和Arpeggio的可可味。</div>
                </el-collapse-item>
                <el-collapse-item title="单品咖啡">
                  <div>仅来自一个种植园且尚未混合的咖啡。Nespresso每年提供的限量版Grand Cru总是如此。</div>
                </el-collapse-item>
                <el-collapse-item title="剥离">
                  <div>通过从树枝上剥离所有东西（樱桃，茎和叶）来收集咖啡樱桃的方法，稍后将进行分类。 Cru总是如此。</div>
                </el-collapse-item>
                <el-collapse-item title="水洗咖啡">
                  <div>这是指通过湿法处理后的生咖啡。</div>
                </el-collapse-item>
                <el-collapse-item title="祛湿">
                  <div>使用湿法加工咖啡，首先将樱桃洗净并分离。然后，只有成熟的果实才能在清洗和干燥之前除去果肉和粘液。产生的生咖啡称为“洗净”。</div>
                </el-collapse-item>
                <el-collapse-item title="音符中的音符">
                  <div>本说明将使您想起干木或木制铅笔的气味，以及用橡木桶陈化的产品的气味。有时与针叶灌木或檀香等芳香木材的气味有关。</div>
                </el-collapse-item>
              </el-collapse>
          </div>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Tips from './Tips'
import Footer from './Footer'
export default {
  components: {
    Tips,
    Footer
  }
}
</script>

<style lang="less">
.nps-Glossary{
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}
.nps-glossary-list{
    background: #161616;
    width: 100%;
    .el-collapse{
      padding: 50px 59px;
      border: none;
      .el-collapse-item__header{
        background: #161616;
        color: #fff;
        border-bottom: 1px solid #6c6c6c;
        font-size: 16px;
        padding-left: 25px;
        &.is-active{
          color: #b07d3c;
          font-weight: 800;
        }
        .el-collapse-item__arrow{
          margin: 0;
          position: absolute;
          left: 92px;
        }
      }
      .el-collapse-item__wrap{
        background: #161616;
        border-bottom: 1px solid #6c6c6c;
      }
      .el-collapse-item__content{
        padding-left: 36px;
        padding-top: 20px;
        padding-bottom: 20;
        font-size: 14px;
        color: hsla(0,0%,100%,.8);
      }
    }
}
</style>
