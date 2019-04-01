<template>
  <div style="width:50%;margin:auto;margin-top:5%;">
    <div
      style="background:#32bbac;height:80px;border-top-left-radius:20px;border-top-right-radius:20px;"
    >
      <div class="row" style="color:#fff;font-size:20px;padding-top:25px;line-height:30px;">
        <div class="col" style="font-family:幼圆;font-size:27px;">上海凌惠科技</div>
        <div class="col">充值优惠60元</div>
      </div>
    </div>
    <div style="height:300px;background:#eff1f2;">
      <div class="row" style="font-size:20px;padding-top:15px;line-height:30px;">
        <div class="col">会员注册</div>
        <div class="col" style="font-size:15px;color:#666;">已有账号？立即
          <router-link to="/login" style="color:#ee780d;">登录</router-link>
        </div>
      </div>
      <div style="width:70%;margin:auto;margin-top:20px;">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="账号">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="密码">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="确定密码">
        </div>
        <button type="submit" class="btn btn-primary">确定注册</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {};
  },
  mounted: function() {},
  methods: {},
  components: {}
};
</script>

<style scoped>
</style>


