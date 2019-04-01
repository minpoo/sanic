<template>
  <div class="home" >
    <top/>
		<div style="width:70%;text-align: left;margin: auto;">
			<div style="font-size: 30px;padding-top: 20px;">联系我们</div>
			<div style="margin-top: 40px;">
				<div>北京皓彩科技有限公司</div>
				<div>邮政编码：100088</div>
				<div>总部地址:北京市海淀区冠城园8号楼B8-839</div>
			</div>
			<div><img src="../assets/page5/1.png" alt=""></div>
		</div>
   
    <foot/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import top from "@/components/top.vue";
import foot from "@/components/foot.vue";
export default Vue.extend({
  name: "home",
  data() {
    return {};
  },
  components: {
    foot,
    top
  }
});
</script>
<style scoped>
.in {
  outline: none;
  width: 600px;
  background: none;
  border: none;
  position: absolute;
  top: 82px;
  left: -200px;
  right: 0;
  margin: auto;
  font-size: 17px;
}
</style>

