<template>
  <div class="box">
    <div class="form-group">
      <input type="text" v-model="user" class="form-control user" placeholder="请输入用户名">
    </div>
    <div class="form-group">
      <input type="password" v-model="pwd" class="form-control pwd" placeholder="输入密码">
    </div>
    <button type="button" @click="login" class="btn btn-primary">登录</button>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data: function() {
    return { page: [""], user: "", pwd: "" };
  },
  mounted: function() {},
  methods: {
    login: function(event) {
      let self = this;
      axios
        .get("http://127.0.0.1:8000/cloud/login", {
          params: {
            user: self.user,
            pwd:self.pwd
          }
        })
        .then(function(res) {
          if (res.status == 200) {
            console.log(res);
          } else {
            alert(res);
          }
        })
        .catch(() => {
          alert("eror");
          console.log("捕获了一个err，但没有说明原因", "");
        });
    }
  },
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
  box-shadow: 10px 10px 10px skyblue;
}
</style>


