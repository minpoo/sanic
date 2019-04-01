<template>
  <div class="foot">沪ICP备19002374号© 上海文益网络科技有限公司© 版权所有©</div>
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

