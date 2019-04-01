<template>
  <div>
    <top/>
    <div style="margin-bottom:70px;">
      <div>
        <img width="100%" src="../assets/img/5.jpg">
      </div>
      <div class="row" style="margin-top:30px;">
        <div class="col-2">
          <div
            style="font-weight:bold;color:#fff;font-size:30px;background:#3a8bc8;border-top:5px solid #4ca7d3;padding:10px;"
          >{{val.menu2}}</div>
          <ul class="nav flex-column">
            <li class="nav-item">
              <a
                id="one"
                @mouseenter="changeColor($event)"
                @mouseleave="changeColorOut"
                style="background:#7ebeef;color:#fff;"
                class="nav-link disabled"
                href="#/serve"
              >{{val.menu}}</a>
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
                class="nav-link disabled"
                @mouseenter="changeColor"
                @mouseleave="changeColorOut"
                to="/list/n3b"
              >执业优势</router-link>
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
          <div
            class="page-detail" style="text-align:left;border-top:1.5px solid #666;clear:both;margin-right:2%;text-indent: 30px;padding-top:40px;"
          >
            <div style="font-weight:bold;font-size:18px;">（一）证券期货相关资产评估业务</div>
            <div  style="text-indent: 30px;margin-left:45px;font-size:14px;">
              <div>1、企事业单位在发生组建或改制为上市公司、发行或增发股票境外上市（包括间接上市）以非现金资产配股以及涉及上市公司的兼并收购、股权转让、对外投资等经济行为时的整体或单项资产评估业务。</div>
              <div>2、银行、证券、期货等金融企业的资产评估业务</div>
            </div>
            <div
              style="font-weight:bold;font-size:18px;margin-top:20px;"
            >（二）国有和非国有企业在发生下列经济行为时的整体或单项资产评估业务.</div>
            <div style="text-indent: 30px;margin-left:45px;font-size:14px;">
              <div>1、股份拍卖或转让；</div>
              <div>2、企业兼并出售、联营、股份；</div>
              <div>3、设立中外合资、合作经营企业；</div>
              <div>4、资产抵押、担保、租赁；</div>
              <div>5、企业清算。</div>
            </div>
            <div style="font-weight:bold;font-size:18px;margin-top:20px;">（三）军工涉密相关资产评估业务</div>
            <div style="text-indent: 30px;margin-left:45px;font-size:14px;">
              <div>为军工单位涉密业务提供评估服务。</div>
            </div>
            <div style="font-weight:bold;font-size:18px;margin-top:20px;">（四）单项土地和房产估价业务</div>
            <div style="text-indent: 30px;margin-left:45px;font-size:14px;">
              <div>1、集体土地房屋拆迁评估；</div>
              <div>2、城市土地房屋拆迁评估；</div>
              <div>3、房产和土地的抵押、担保、拍卖、投资评估；</div>
              <div>4、房地产课税评估；</div>
              <div>5、房地产价值和项目咨询；</div>
              <div>6、其他房地产、土地评估业务。</div>
            </div>
            <div style="font-weight:bold;font-size:17px;margin-top:20px;">（五）保险公估业务</div>
            <div style="text-indent: 30px;margin-left:45px;font-size:14px;">
              <div>1、保险标的投保前的检验、估价及风险评估；</div>
              <div>2、保险标的出险后的查勘、检验、估损及理算。</div>
            </div>
            <div style="font-weight:bold;font-size:17px;margin-top:20px;">（六）资产评估司法鉴定业务</div>
            <div style="text-indent: 30px;margin-left:45px;font-size:14px;">受法院和当事人委托涉及资产评估的司法鉴定业务。</div>
            <!-- <div id="fl">
                      <router-link to="/list/area-detail-1"><img src="../assets/img/pic-service-area-1.jpg"></router-link>
                      <router-link to="/list/area-detail-2"><img src="../assets/img/pic-service-area-2.jpg"></router-link>
                      <router-link to="/list/area-detail-3"><img src="../assets/img/pic-service-area-3.jpg"></router-link>
                      <router-link to="/list/area-detail-4"><img src="../assets/img/pic-service-area-4.jpg"></router-link>
                      <router-link to="/list/area-detail-5"><img src="../assets/img/pic-service-area-5.jpg"></router-link>
                      <router-link to="/list/area-detail-6"><img src="../assets/img/pic-service-area-6.jpg"></router-link>
                      <router-link to="/list/area-detail-7"><img src="../assets/img/pic-service-area-7.jpg"></router-link>
                      <router-link to="/list/area-detail-8"><img src="../assets/img/pic-service-area-8.jpg"></router-link>
                      <router-link to="/list/area-detail-9"><img src="../assets/img/pic-service-area-9.jpg"></router-link>
                      <router-link to="/list/area-detail-10"><img src="../assets/img/pic-service-area-10.jpg"></router-link>
            </div>-->
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
      val: { menu: "业务范围", menu2: "专业服务" },
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
.page-detail {
  position: relative;
  color: #555;
  font-size: 16px;
  line-height: 2;
  text-align: justify;
  text-justify: inter-ideograph;
}
</style>


