<template>
  <div class="nps-step-box content">
    <div class="step-box">
			<el-steps :active="stepActive">
				<el-step class="first-step" title="购物车汇总" icon="el-icon-success"></el-step>
				<el-step class="second-step" title="配送设置" icon="el-icon-success"></el-step>
				<el-step class="third-step" title="支付" icon="el-icon-success"></el-step>
				<el-step class="four-step" title="订单汇总" icon="el-icon-success"></el-step>
				<el-step class="five-step" title="订单确认" icon="el-icon-success"></el-step>
			</el-steps>
		</div>
		<component :changeStep="changeStep" :is="view"></component>
  </div>
</template>

<script>
import Stepone from 'components/Orderstep/stepone'
import Steptwo from 'components/Orderstep/steptwo'
import Stepthree from 'components/Orderstep/stepthree'
import Stepfour from 'components/Orderstep/stepfour'
import Stepfive from 'components/Orderstep/stepfive'
export default {
  data () {
    return {
      stepActive: 1,
      view: 'Stepone'
    }
  },
  components: {
    Stepone,
    Steptwo,
    Stepthree,
    Stepfour,
    Stepfive
  },
  methods: {
    changeStep (step) {
      this.stepActive = step
      if (step === 1) {
        this.view = 'Stepone'
      } else if (step === 2) {
        this.view = 'Steptwo'
      } else if (step === 3) {
        this.view = 'Stepthree'
      } else if (step === 4) {
        this.view = 'Stepfour'
      } else {
        this.view = 'Stepfive'
      }
    }
  }
}
</script>

<style>
