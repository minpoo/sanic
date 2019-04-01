<template>
  <div>
    <top/>
    <div style="margin-bottom:70px;">
      <div>
        <img width="100%" src="../assets/img/banner-contact.jpg">
      </div>
      <div class="row" style="margin-top:30px;">
        <div class="col-2">
          <div
            style="font-weight:bold;color:#fff;font-size:30px;background:#3a8bc8;border-top:5px solid #4ca7d3;padding:10px;"
          >{{val.menu2}}</div>
          <!-- <ul class="nav flex-column" id="te">
                  <li class="nav-item">
                    <a id="one" @mouseenter="changeColor($event)"  @mouseleave="changeColorOut"  style="background:#7ebeef;color:#fff;" class="nav-link disabled" href="#/contact">服务领域</a>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/contactC1">国际网络</router-link>
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
              <router-link to="/">{{val.menu2}}</router-link>-
              <router-link to="/news">{{val.menu}}</router-link>
            </div>
          </div>
          <div
            style="text-align:left;border-top:1.5px solid #666;clear:both;margin-right:2%;text-indent: 30px;padding-top:70px;"
          >
            <div class="page-detail">
              <div class="filiales-wrap">
                <!-- <p class="text-align-center "><img width="1024" height="533" src="../assets/img/pic-map.jpg"></p> -->
                <ul>
                  <li>
                    <h3>
                      <strong>董事长室</strong>
                    </h3>
                    <p>电话：0571-88216941</p>
                    <p>手机：13805730846</p>
                    <p>邮箱：yhk@canwincpv.com</p>
                  </li>

                  <li>
                    <h3>
                      <strong>总经理室</strong>
                    </h3>
                    <p>电话：0571-87178758</p>
                    <p>手机：13805736705 </p>
                    <p>邮箱：wch@canwincpv.com</p>
                  </li>

                   <li>
                    <h3>
                      <strong>资产评估一部</strong>
                    </h3>
                    <p>电话：0571-88216944</p>
                    <p>手机：13958100915 </p>
                    <p>邮箱：pwf@canwincpv.com</p>
                  </li>
                   <li>
                    <h3>
                      <strong>资产评估二部</strong>
                    </h3>
                    <p>电话：0571-88216962</p>
                    <p>手机：13357195252 </p>
                    <p>邮箱：wcj@canwincpv.com</p>
                  </li>
                   <li>
                    <h3>
                      <strong>资产评估三部</strong>
                    </h3>
                    <p>电话：0571-87855396</p>
                    <p>手机：13605708233 </p>
                    <p>邮箱：caimm@canwincpv.com</p>
                  </li>
                   <li>
                    <h3>
                      <strong>房地产估价部</strong>
                    </h3>
                    <p>电话：0571-88216964</p>
                    <p>手机：13003675451 </p>
                    <p>邮箱：pb@ canwincpv.com</p>
                  </li>
                   <li>
                    <h3>
                      <strong>公估业务部</strong>
                    </h3>
                    <p>电话：0571-88216944</p>
                    <p>手机：13958100915 </p>
                    <p>邮箱：pwf@canwincpv.com</p>
                  </li>
                </ul>
                <hr>
                 <ul>
                   <li>
                    <h3>
                      <strong>坤元资产评估有限公司 <span>总部</span></strong>
                    </h3>
                    <p>地址：杭州市西湖区西溪路128号901室</p>
                    <p>邮编：310007</p>
                    <p>电话：0571-88216941   87178758</p>
                    <p>传真：0571-87178826</p>
                    <p>网址：www.canwincpv.com</p>
                  </li>
                  <li>
                    <h3>
                      <strong>坤元资产评估有限公司 <span>上海分公司</span></strong>
                    </h3>
                    <p>地址：上海市长宁区天山路600弄思创大厦3号楼21楼 A座</p>
                    <p>邮编：200051</p>
                    <p>电话：021-62286898</p>
                    <p>传真：021-62286290</p>
                    <p> &nbsp</p>
                  </li>
                  <li>
                    <h3>
                      <strong>坤元资产评估有限公司 <span>安徽分公司</span></strong>
                    </h3>
                    <p>地址：合肥市濉溪路278号财富广场首座2303室</p>
                    <p>邮编：230041</p>
                    <p>电话：0551-65681558</p>
                    <p>传真：0551-65622519</p>
                  </li>
                 <li>
                    <h3>
                      <strong>坤元资产评估有限公司 <span>湖北分公司</span></strong>
                    </h3>
                    <p>地址：湖北省武汉市武昌区紫阳东路77号伟鹏大厦11层1104室</p>
                    <p>邮编：430070</p>
                    <p>电话：027-87719818</p>
                    <p>传真：027-87719616</p>
                  </li>
                  <li>
                    <h3>
                      <strong>浙江坤元房地产土地估价有限公司</strong>
                    </h3>
                    <p>地址：杭州市西湖区西溪路128号901室</p>
                    <p>邮编：310013</p>
                    <p>电话：0571-88216964</p>
                    <p>传真：0571-87178826</p>
                  </li>
                  <li>
                    <h3>
                      <strong>浙江天健保险公估有限公司</strong>
                    </h3>
                    <p>地址：杭州市西湖区西溪路128号901室</p>
                    <p>邮编：310013</p>
                    <p>电话：0571-88216944</p>
                    <p>传真：0571-87178826</p>
                  </li>
                 </ul>
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
      val: { menu: "境内机构", menu2: "境内机构" },
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
.filiales-wrap ul:after {
  content: "\20";
  display: block;
  clear: both;
  height: 0;
}
.page-detail {
  position: relative;
  color: #555;
  font-size: 16px;
  line-height: 2;
  text-align: justify;
  text-justify: inter-ideograph;
}
li {
  list-style: none;
  float: left;
  width: 40%;
  font-size: 12px;
}
strong,
b {
  font-weight: bold;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

/* ul, menu, dir {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
} */

.page-detail {
  position: relative;
  color: #555;
  font-size: 16px;
  line-height: 2;
  text-align: justify;
  text-justify: inter-ideograph;
}
</style>


