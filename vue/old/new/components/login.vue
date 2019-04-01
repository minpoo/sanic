<template>
  <div>
    <div id="login" class="login">
      <div class="form-group">
        <input type="text" class="form-control" id="user" placeholder="用户名">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="pwd" placeholder="密码">
      </div>
      <div>
        <button type="button" class="btn btn-primary">注册</button>
        &nbsp &nbsp &nbsp
        <button type="button" class="btn btn-primary">登录</button>
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
.login {
  width: 40%;
  margin: auto;
  padding: 30px;
  border: 1px solid #ececec;
  margin-top: 50px;
}
</style>

