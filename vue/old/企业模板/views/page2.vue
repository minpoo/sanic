<template>
  <div class="home">
    <top />
    <div style="margin-top:20px;"><img src="../assets/page2-1.jpg" ></div>
    <div style="margin-top:20px;"><img src="../assets/page2-2.jpg" ></div>
    <div style="margin-top:20px;"><img src="../assets/page2-3.jpg" ></div>
    <div style="margin-top:20px;"><img src="../assets/page2-4.jpg" ></div>
    <div style="margin-top:20px;"><img src="../assets/page2-5.jpg" ></div>
    <foot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import top from '@/components/top.vue'; 
import foot from '@/components/foot.vue'; 
export default Vue.extend({
  name: 'home',
    data() {
    return {};
  },
  components: {
    foot,
    top
  },
});
</script>
<style scoped>
.in{outline: none;width:600px;background:none;border: none;position: absolute;top:82px;left:-200px;right: 0;margin:auto;font-size: 17px;}
</style>

