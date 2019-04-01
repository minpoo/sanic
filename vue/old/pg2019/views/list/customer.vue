<template>
  <div>
    <top/>
    <div style="margin-bottom:70px;">
      <div>
        <img width="100%" src="../../assets/img/banner-services.jpg">
      </div>
      <div class="row" style="margin-top:30px;">
        <div class="col-2">
          <div
            style="font-weight:bold;color:#fff;font-size:30px;background:#3a8bc8;border-top:5px solid #4ca7d3;padding:10px;"
          >{{val.menu2}}</div>
          <ul class="nav flex-column">
            <li class="nav-item">
              <a
                class="nav-link disabled"
                @mouseenter="changeColor"
                @mouseleave="changeColorOut"
                href="#/serve"
              >业务范围</a>
            </li>
            <li class="nav-item">
              <router-link
                id="one"
                @mouseenter="changeColor($event)"
                @mouseleave="changeColorOut"
                style="background:#7ebeef;color:#fff;"
                class="nav-link disabled"
                to="/list/customer"
              >{{val.menu}}</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link disabled"
                @mouseenter="changeColor"
                @mouseleave="changeColorOut"
                to="/list/n3b"
              >执业优势</router-link>
            </li>
          </ul>
        </div>
        <div class="col-10 page-detail">
          <div>
            <div style="float:left;color:#2c81ba;font-size:28px;font-weight:bold;">{{val.menu}}</div>
            <div
              style="float:right;font-size:11px;padding-right:2%;line-height:41.25px;margin-bottom:10px;"
            >
              <router-link to="/">首页</router-link>-
              <router-link to="/">{{val.menu2}}</router-link>-
              <router-link to="/news">{{val.menu}}</router-link>
            </div>
          </div>
          <div
            style="text-align:left;border-top:1.5px solid #666;clear:both;margin-right:2%;text-indent: 30px;padding-top:70px;"
          >
            <div class="detail-text">
             <div>
               坤元成立以来，业务项目涉及工业、农业、能源、交通、商业、服务业等各行业，已完成评估项目10000余项，其中承办了水利、公路、能源、电力、钢铁、化工、金融、证券、房地产等大型企业集团改制项目150多个，评估价值达10,000多亿元。近几年来坤元承担了省内外250余家上市公司、100余家国有企业的资产评估工作，2017年完成评估项目1500余项，业务收入超1.2亿元。以上评估结果均能顺利通过确认或核准，为企业相关经济行为及时提供了重要的价值参考依据。同时我们在评估中积极向客户介绍当前企业改制的相关政策，从评估师的角度为企业运营、资产重组提出十分有益的建议。
             </div>
              <!-- <p>
                <img src="../../assets/img/pic-service-companies.jpg">
              </p> -->
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
      val: { menu: "主要业绩", menu2: "专业服务" },
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
  color: #555;
}
a:hover {
  color: goldenrod;
}
#fl > a {
  float: left;
  margin-bottom: 20px;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.page-detail {
  position: relative;
  color: #555;
  font-size: 16px;
  line-height: 2;
  text-align: justify;
  text-justify: inter-ideograph;
}
strong {
  color: #3a8bc8;
}
</style>


