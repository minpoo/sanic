<template>
  <div class="home">
    <top />
    <div style="position:relative;;">
      <router-link to=""> <img src="../assets/home1.jpg"></router-link>
      <input class="in" type="text">
    </div>
    <div style="margin-top:20px;"><img src="../assets/home2.jpg" ></div>
    <div style="margin-top:20px;"><img src="../assets/home3.jpg" ></div>
    <div style="margin-top:20px;"><img src="../assets/home4.jpg" ></div>
    <div style="margin-top:20px;"><img src="../assets/home5.jpg" ></div>
    <div style="margin-top:20px;"><img src="../assets/home6.jpg" ></div>
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

