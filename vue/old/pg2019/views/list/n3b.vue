<template>
  <div>
    <top/>
    <div style="margin-bottom:70px;">
      <div>
        <img width="100%" :src="this.$url+'images/companypg/banner-about.jpg'" alt srcset>
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
                class="nav-link disabled"
                @mouseenter="changeColor"
                @mouseleave="changeColorOut"
                to="/list/customer"
              >主要业绩</router-link>
            </li>
            <li class="nav-item">
              <router-link
                id="one"
                @mouseenter="changeColor($event)"
                @mouseleave="changeColorOut"
                style="background:#7ebeef;color:#fff;"
                class="nav-link disabled"
                to="/list/n3b"
              >{{val.menu}}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-10">
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
          <div class="page-detail"
            style="text-align:left;border-top:1.5px solid #666;clear:both;margin-right:2%;text-indent: 30px;padding-top:70px;"
          >
            <p>本公司在承办资产评估业务时具有以下几个方面的优势：</p>
            <p>人才资源优势：全公司现有的100名从业人员中，有会计、经济、工程技术等高级专业职称和硕士以上学位的有68名，曾经赴美国、英国、香港访问和接受专业培训的有16人。在从业队伍中，85人拥有注册资产评估师资格，21人拥有注册会计师资格，21人拥有房地产估价师资格，11人拥有土地估价师资格，18人拥保险公估从业人员资格。针对资产评估业务专业技术要求高的特点，公司领导注重专家网络的建设，常年外聘专家公司20人，目前已拥有一个门类齐全的专家网络。通过实际操作、探索、培养、选拔，现已基本形成一支整体素质好、专业人才齐全、知识层次高、职业道德优良、年轻化的评估队伍，致力于为社会各界提供资产评估专门服务。</p>
            <p>经营范围优势：坤元资产评估有限公司和浙江勤信房地产土地估价有限公司、浙江天健保险公估有限公司拥有资产评估资质、证券期货业务资产评估资质、房地产评估资质、集体土地房屋价格评估资质和城市土地房屋拆迁保险公估资质，能为客户提供多方面的评估咨询服务。</p>
            <p>客户资源优势：坤元资产评估有限公司成立以来，客户涉及能源、交通运输、通讯、机械、金融、建筑、房地产、电子、生物工程、医药、化工、家电、商业、纺织、旅游、食品、农业、林业等各行业。已拥有包括杭州钢铁股份有限公司、浙江东南发电股份有限公司、浙江巨化股份有限公司和特大型上市企业浙江沪杭甬高速公路股份有限公司等70多家上市公司在内的400余家客户。</p>
            <p>工作业绩优势：截至2009年，坤元评估已完成资产评估项目5000余项，资产评估价值达6000多亿元。特别是承担了省内外80家己上市公司的资产评估工作，评估结果均能顺利地通过确认核准，未出现被要求修改评估值的现象，为企业申报材料及时上报赢得了宝贵的时间，为企业健康发展作出了很大贡献，收到了企业、政府部门、行业协会及其他中介机构和同行的好评。</p>
            <p>执业质量优势：在执业过程中，坤元评估严守职业道德淮则、严守操作规范、严把评估报告质量；公司拥有健全的质量控制制度和后续教育制度，并在执业中得到很好地执行。坤元评估出具的价值评估报告在全国有较高的声誉。</p>
            <p>对外合作优势：坤元评估与天健会计师事务所互为战略合作伙伴，一直以来密切合作，共同发展。通过有关项目的合作，我们同海裕、百富勤、巴克莱、申银万国、国泰君安、中信、广发、东北、海通、金通、方正等国内外券商，德勤、毕马威、安永、普华永道等国内外会计公司，美国评值公司、威格斯国际物业顾问、刘绍钧测量师行等境外评估机构都建立了良好的合作和信赖关系。</p>
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
      val: { menu: "执业优势", menu2: "专业服务" },
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
.area-text-title {
  display: inline-block;
  color: #fff;
  line-height: 45px;
  padding: 0 20px;
  text-align: center;
  margin-bottom: 20px;
}
</style>


