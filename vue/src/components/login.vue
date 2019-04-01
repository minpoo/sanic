<template>
  <div style="width:50%;margin:auto;margin-top:5%;">
    <div
      style="background:#32bbac;height:80px;border-top-left-radius:20px;border-top-right-radius:20px;"
    >
      <div class="row" style="color:#fff;font-size:20px;padding-top:25px;line-height:30px;">
        <div class="col" style="font-family:幼圆;font-size:27px;">{{page[0]}}</div>
        <div class="col">{{usually[0]}}</div>
      </div>
    </div>
    <div style="height:300px;background:#eff1f2;">
      <div class="row" style="font-size:20px;padding-top:15px;line-height:30px;">
        <div class="col">{{usually[0]}}</div>
        <div class="col" style="font-size:15px;color:#666;">还没有账号？立即
          <router-link to="/register" style="color:#ee780d;">注册</router-link>
        </div>
      </div>
      <div style="width:70%;margin:auto;margin-top:20px;">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="账号">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="密码">
        </div>
        <button type="submit" class="btn btn-primary">{{a.button}}</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      page: ["欢迎登录"],
      usually: ["", "会员注册"],
      a: { button: "确定提交" }
    };
  },
  mounted: function() {},
  methods: {},
  components: {}
};
</script>

<style scoped>
</style>


