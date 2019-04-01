<template>
  <div>
    <top/>
    <div>
      <img width="100%" :src="this.$url+'images/companypg/banner-about.jpg'" alt srcset>
    </div>

    <div
      id="uu"
      style="width:80%;text-align:left;margin-top:30px;"
      class="box"
      v-html="content.article.content"
    ></div>

    <foot/>
  </div>
</template>


<script>
import top from "@/components/top.vue";
import foot from "@/components/foot";
import $ from "jquery";
let notClick = true;
export default {
  name: "leftm",
  props: {
    sendval: Array,
    required: true
  },
  data: function() {
    return {
      isActive: true,
      hasError: false,
      val: { menu: "天健资讯" },
      content: "",
      test: ""
    };
  },
  computed: {
    classObject: function() {
      return {};
    }
  },
  mounted: function() {
    let self = this;

    createcode(); //需要触发的函数
    function createcode() {
      //-------------------------------去后台获取新闻内容页面-----------------------------------------------------
      //alert(self.$route.query.title) ==获取到了关键字标题
      let title = self.$route.query.title;
      self.axios
        .post(self.$url + "companypg/getNewsContent", { title })
        .then(function(res) {
          console.log(res.data);
          self.content = res.data;
        })
        .catch(function(err) {
          if (err.response) {
            console.log(err.response);
            //console.log err message
          }
        });
    }
  },
  methods: {
    changeColor: function(event) {
      $(".flex-column a").css({ color: "#666", background: "#fff" });
      $(event.target).css({ color: "#fff", background: "rgb(62, 189, 147)" });
    },
    changeColorOut: function() {
      if (notClick) {
        $(".flex-column a").css({ color: "#666", background: "#fff" });
        $("#one").css({ color: "#fff", background: "#7ebeef" });
      }
    }
  },
  components: {
    top,
    foot
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-column a:hover {
  color: #fff;
  background: rgb(62, 189, 147);
}
a {
  color: #666;
}
a:hover {
  text-decoration: none;
  color: goldenrod;
}
.box {
  width: 90%;
  margin: auto;
  text-align: left;
  text-indent: 30px;
}
</style>
<style>
.ql-align-justify {
 
}
.ql-align-center {
  text-align: center;
}
#uu img {
  width: 90%;
}
</style>


