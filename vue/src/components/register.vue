<template>
  <div class="box">
    <div class="form-group">
      <input type="text" class="form-control" id="user" placeholder="请输入用户名">
    </div>
    <div class="form-group">
      <input type="password" class="form-control pwd" placeholder="输入密码">
    </div>
    <div class="form-group">
      <input type="password" class="form-control pwd" placeholder="再次输入密码">
    </div>
    <div class="form-group">
      <input type="email" class="form-control pwd" placeholder="请输入邮箱">
    </div>
    <button type="button" class="btn btn-primary" >注册</button>
  </div>
</template>


<script>
export default {
  data: function() {
    return { page: [""] };
  },
  mounted: function() {},
  methods: {},
  components: {}
};
</script>

<style scoped>
.box {
  width: 30%;
  margin: auto;
  margin-top: 100px;
  border: 1px solid #ececec;
  padding: 50px;
  box-shadow:10px 10px  10px skyblue;
}
</style>


