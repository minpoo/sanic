<template>
  <div>
    <div
      style="background:#ececec;height:70px;line-height:70px;text-align:left;padding-left:200px;font-family:幼圆;color:#d80637;font-size:25px;"
    >
      <!-- <img src="../assets/img/logo.png" alt srcset> -->
      {{any.headName}}
    </div>
    <div
      class="row"
      style="background:#454545;font-size:17px;text-align:right;padding:5px;padding-left:200px;"
    >
      <div class="col-1.5" v-for="i in any.nav" :key="i.id">
        <router-link :to="i.src" style="color:#fff;">{{i.title}}</router-link>
      </div>
      <div class="col-1.5" style="color:#fff;">
        <router-link to="/login" style="color:#fff;">登录</router-link>/
        <router-link to="/register" style="color:#fff;">注册</router-link>
      </div>
      <div class="col-4">
        <form action="http://www.baidu.com/baidu" target="_blank" class="form-inline">
          <input class="form-control" name="word" type="text" placeholder="搜索新闻">
          <input class="btn btn-success" type="submit" value="搜索">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  props: {
    msg: String
  },
  data: function() {
    return {
      any: {
        headName: "昕之璟科技",
        nav: [
          { title: "首页", src: "/" },
          { title: "有偿资讯", src: "paidNews" },
          { title: "会员专区", src: "vip" },
          { title: "关于我们", src: "about" },
          { title: "联系我们", src: "contact" }
        ]
      }
    };
  },
  methods: {}
};

// import $ from 'jquery'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row:nth-child(2) > div {
  margin-right: 20px;
}
.row:nth-child(2) a {
  color: black;
  padding: 10px;
  line-height: 41px;
}
.row:nth-child(2) a:hover {
  background: #1977be;
  text-decoration: none;
  color: white;
}
.row:nth-child(2) {
  background: #ececec;
}
</style>
