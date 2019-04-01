<template>
  <div>
    <top/>
    <div>
      <div>
        <img width="100%" src="../assets/img/banner-news.jpg">
      </div>
      <div class="row" style="margin-top:30px;">
        <div class="col-2">
          <div
            style="font-weight:bold;color:#fff;font-size:30px;background:#3a8bc8;border-top:5px solid #4ca7d3;padding:10px;"
          >公司动态</div>
          <ul class="nav flex-column">
            <li class="nav-item">
              <a
                id="one"
                @mouseenter="changeColor($event)"
                @mouseleave="changeColorOut"
                style="background:#7ebeef;color:#fff;"
                class="nav-link disabled"
                href="#/news"
              >{{val.menu}}</a>
            </li>
            <!-- <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/hydt">行业动态</router-link>
            </li>-->
            <li class="nav-item">
              <a
                class="nav-link disabled"
                @mouseenter="changeColor"
                @mouseleave="changeColorOut"
                href="#"
              ></a>
            </li>
          </ul>
        </div>
        <div class="col-10">
          <div>
            <div style="float:left;color:#2c81ba;font-size:28px;font-weight:bold;">{{val.menu2}}</div>
            <div
              style="float:right;font-size:11px;padding-right:2%;line-height:41.25px;margin-bottom:10px;"
            >
              <router-link to="/">首页</router-link>-
              <router-link to="/news">公司动态</router-link>-
              <router-link to="/news">{{val.menu2}}</router-link>
            </div>
          </div>
          <div style="border-top:1.5px solid #666;clear:both;margin-right:2%">
            <div style="padding:20px;">
              <img src="../assets/img/pic-news-slide.jpg" alt srcset>
            </div>

            <div v-for="i in content" :key="i.id" style="margin-bottom:10px;">
              <div
                class="row"
                style="padding:20px;text-align:left;border-bottom:1px dashed #707070"
              >
                <div class="col-2">{{i.article.date}}</div>
                <div class="col-10 page-detail">
                  <div style="font-size:20px;font-weight:bold;color:#707070;">
                    <router-link
                      :to="{path:'/blank',query: {title:i.article.title}}"
                    >{{i.article.title}}</router-link>
                  </div>
                  <div
                    style="width:100%;overflow:hidden;text-overflow:ellipsis;text-indent:30px;font-size:16px;"
                    v-html="i.article.content.split('</p>')[2]"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
      val: { menu: "天健资讯",menu2:"公司动态" },
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
      //-------------------------------去后台获取新闻列表-----------------------------------------------------
      let menu = self.val.menu;
      self.axios
        .post(self.$url + "companypg/getNewsList", { menu })
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
.page-detail {
  position: relative;
  color: #555;
  font-size: 16px;
  line-height: 2;
  text-align: justify;
  text-justify: inter-ideograph;
}
</style>


