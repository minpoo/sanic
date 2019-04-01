<template>
  <div class="home" >
    <top/>
		<div><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=494588788"><img src="../assets/page4/1.jpg" alt=""></a></div>
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

</style>

