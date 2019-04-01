<template>
  <div style="padding-top:20px;">
    <div class="row" style="border-bottom:1px solid #ececec;padding-bottom:20px;">
      <div class="offset-3 col-4">
        <div class="row" style="padding-top:7px;">
          <div class="col-3">
            <router-link to="/">首页</router-link>
          </div>
          <div class="col-3">
            <router-link to="page1">设计分类</router-link>
          </div>
          <div class="col-3">
            <router-link to="page2">个人VIP</router-link>
          </div>
          <div class="col-3">
            <router-link to="page3">企业VIP</router-link>
          </div>
        </div>
      </div>
      <div class="col-5">
        <router-link to="login">
          <button type="button" class="btn btn-danger">请登录</button>
        </router-link>
      </div>
    </div>
  </div>
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
a {
  text-decoration: none;
  color: #666;
}
a:hover {
  text-decoration: none;
}
</style>

