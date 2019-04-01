<template>
  <div>
    <div
      style="background:#ececec;height:0px;line-height:70px;text-align:left;padding-left:200px;font-family:幼圆;color:#d80637;font-size:25px;"
    >
      <!-- <img src="../assets/img/logo.png" alt srcset> -->
    
    </div>
    <div
      class="row"
      style="font-size:17px;text-align:right;padding:5px;padding-left:300px;"
    >
      <div class="col-1.5" v-for="i in any.nav" :key="i.id">
        <router-link :to="i.src" style="color:#666;">{{i.title}}</router-link>
      </div>
      <div class="col-2" style="color:#666;">
        <router-link to="/login" style="color:#666;">登录</router-link>/
        <router-link to="/register" style="color:#666;">注册</router-link>
      </div>
      <!-- <div class="col-4">
        <form action="http://www.baidu.com/baidu" target="_blank" class="form-inline">
          <input class="form-control" name="word" type="text" placeholder="搜索新闻">
          <input class="btn btn-success" type="submit" value="搜索">
        </form>
      </div> -->
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
          { title: "素材", src: "paidNews" },
          { title: "背景", src: "vip" },
          { title: "样机", src: "about" },
          { title: "banner", src: "contact" },
          { title: "灵感", src: "lg" },
          { title: "加入VIP", src: "login" },
          { title: "更多", src: "contact" }
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
  color:#fff !important;
}
.row:nth-child(2) {
  background: #ececec;
}
</style>
