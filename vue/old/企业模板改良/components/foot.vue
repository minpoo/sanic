<template>
  <div class="foot">2019年版权所有© 备案中© </div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";
export default Vue.extend({
  data() {
    return {};
  },
  mounted: function() {
    //this.initWebpack();
  },
  destroyed: function() {
    //destroyed page  websocketclose
    // this.websocketclose();
  },
  created() {},
  methods: {},
  beforeDestroy() {}
});
</script>

<style scoped>
.foot{
  background: #4b5163;color: aliceblue;padding: 40px 0;margin-top:100px; 
}
</style>

