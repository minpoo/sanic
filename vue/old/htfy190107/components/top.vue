<template>
  <div id="top">
    <div class="row head">
      <div class="col-3">{{any.headName}}</div>
      <div class="col-8">
        <div class="row">
          <div class="col" v-for="i in any.nav" :key="i.id">
            <router-link :to="i.src">{{i.title}}</router-link>
          </div>
        </div>
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
  },
  methods: {}
};

// import $ from 'jquery'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top{position: fixed;width: 100%;}
.head {
  font-size: 17px;
  text-align: right;
  padding: 20px 0;
  background: #1b1b1b;
  font-size: 13px;
  color:#fff;
}
a{color: #fff}
</style>
