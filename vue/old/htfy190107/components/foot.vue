<template>
  <div id="footer" style="margin-top:70px;">
    <div style="color:#8f8f8f;font-size: 17px;padding:0 100px;">
      <div class="row">
        <div class="col-2" v-for="i in any.nav" :key="i.id">
          <router-link :to="i.src">{{i.title}}</router-link>
        </div>
      </div>
      <div style="margin-top:30px;">© 2018-2019 有限公司版权所有 备案：备案中</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {
      any: {
        headName: "中国",
        nav: [
          { title: "LOGO设计案例", src: "/" },
          { title: "LOGO升级案例", src: "page.1.vue" },
          { title: "定制套餐", src: "page.2.vue" },
          { title: "设计流程", src: "page.3.vue" },
          { title: "服务优势", src: "page.4.vue" },
          { title: "更多服务", src: "page.5.vue" }
        ]
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  text-align: center;
  height: 180px;
  color: #fff;
  padding: 50px 0 30px;
  background-color: #4b5163;
  font-size: 12px;
}
a {
  color: #8f8f8f;
  font-size: 13px;
  margin-right: 30px;
  margin-left: 30px;
}
</style>
