<template>
  <div>
    <top/>
    <div style="margin-bottom:70px;">
      <div>
        <img width="100%" src="../assets/img/4.jpg" alt srcset>
      </div>
      <div class="row" style="margin-top:30px;">
        <div class="col-2">
          <div
            style="font-weight:bold;color:#fff;font-size:30px;background:#3a8bc8;border-top:5px solid #4ca7d3;padding:10px;"
          >执业资质</div>
          <!-- <ul class="nav flex-column">
                  <li class="nav-item">
                    <a id="one" @mouseenter="changeColor($event)"  @mouseleave="changeColorOut"  style="background:#7ebeef;color:#fff;" class="nav-link disabled" href="#/about">坤元简介</a>
                  </li>
                   <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/organization">组织架构</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/hrshow">人力资源</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/organization">组织架构</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/certification">执业资质</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/culture">天健文化</router-link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" href="#"></a>
                  </li>
          </ul>-->
        </div>
        <div class="col-10">
          <div>
            <div style="float:left;color:#2c81ba;font-size:28px;font-weight:bold;">{{val.menu}}</div>
            <div
              style="float:right;font-size:11px;padding-right:2%;line-height:41.25px;margin-bottom:10px;"
            >
              <router-link to="/">首页</router-link>-
              <router-link to="/">关于坤元</router-link>-
              <router-link to="/news">{{val.menu}}</router-link>
            </div>
          </div>
          <div style="border-top:1.5px solid #666;clear:both;margin-right:2%">
            <div
              class="row"
              style="color:#555;padding-top:80px;text-align:left;letter-spacing:2px;"
            >
              <div class="col-10" style="text-indent: 30px">
                <p>1、证券、期货相关资产评估业务资质（财政部、中国证监会批准）</p>
                <p>2、资产评估资质（浙江省财政厅授权杭州市财政局备案）</p>
                <p>3、军工涉密业务咨询服务安全保密条件备案资质（国家国防科技工业局）</p>
                <p>4、房地产估价资质（建设部核准）</p>
                <p>5、土地评估资质（国土资源部核准）</p>
                <p>6、司法鉴定资质（浙江省高级人民法院批准）</p>
                <p>7、集体土地、城市土地房屋拆迁价格评估资质（杭州市国土资源局、杭州市建设委员会批准）</p>
                <p>8、保险公估资质（保监会批准）</p>

                <!-- <p style="margin-top:50px;">
              
                </p>

                <p
                  style="margin-top:50px;"
                >员工中具有会计、经济、工程高级职称或硕士以上学位有50余人，具有中级职称或学士学位有90余人。针对资产评估业务专业技术要求高的特点，坤元注重专家网络的建设，常年外聘专家和联系专家60余名。</p>

                <p
                  style="margin-top:50px;"
                >坤元多年来注重人才培养和储备。曾有多人获得全国、浙江省的各种荣誉称号。现已形成一支整体素质好，专业人才齐全、知识层次高、职业道德优良、年轻化的评估队伍，为社会各界提供资产评估专门服务。</p>-->
                <!-- <p style="margin-top:50px;">2011年10月中评协同意坤元参加评估机构母子公司试点。坤元已在上海、安徽、湖北设立了相应的分公司。</p> -->
                <!-- <p style="margin-top:50px;">
                           <a style="color:#2c81ba;font-weight: bold;text-decoration: mediumspringgreen" href="http://www.pccpa.cn/uploadFiles/files/%E5%A4%A9%E5%81%A5%E7%AE%80%E4%BB%8B2018.pdf">
                             天健简介2018年版下载（22.3 MB)
                           </a>
                </p>-->
              </div>
              <!-- <div class="col-4">
                <img width="300px" src="../assets/img/banner-w345-h520-1.jpg" alt srcset>
              </div> -->
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
  name: "about",
  props: {
    sendval: Array,
    required: true
  },
  data: function() {
    return {
      isActive: true,
      hasError: false,
      val: { menu: "执业资质" },
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
</style>


