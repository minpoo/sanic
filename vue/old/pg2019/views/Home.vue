<template>
  <div style="text-align:left;">
    <top/>

    <div  style="margin-top:10px;position: relative;width:1291px;">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <!-- 指示符 -->
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <!-- <li data-target="#demo" data-slide-to="2"></li> -->
          </ul>

          <!-- 轮播图片 -->
          <div class="carousel-inner">
            <div class="carousel-item active">
                 <router-link to="/about"><img :src="img[0]" style="width:100%;height:435px"></router-link>
            </div>
            <div class="carousel-item" style="width:100%;height:435px">
               <router-link to="/news"><img :src="img[1]"></router-link>
            </div>
            <!-- <div class="carousel-item easy" style="width:100%;height:435px">
              <img :src="img[2]">
            </div>-->
          </div>

          <!-- 左右切换按钮 -->
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
    </div>
    <div class="row"  style="margin:auto;text-align:center;margin-top:30px;">
      <div class="col-4">
        <router-link to="/add"><img width="90%" src="../assets/img/home1.gif"></router-link>
      </div>
      <div class="col-4">
        <router-link to="/serve"><img width="90%" src="../assets/img/home2.gif"></router-link>
      </div>
      <div class="col-4">
        <router-link to="/contact"><img width="90%" src="../assets/img/home3.png"></router-link>
      </div>
    </div>

    <foot/>
  </div>
</template>




<script>
// import $ from 'jquery'

// @ is an alias to /src
// alert($)
import top from "@/components/top";
import foot from "@/components/foot";
// import carrousel from '@/components/loop'

export default {
  name: "home",
  components: {
    top,
    foot
  },
  data() {
    return {
      img: [
        "https://mycdn.imdo.co/cloud/pg/index/top1.jpg",
        "https://mycdn.imdo.co/cloud/pg/index/top2.jpg",
        "https://mycdn.imdo.co/cloud/pg/index/top3.jpg"
      ],
      news: {
        num1: { title: "222", content: "内容", url: "" },
        num2: { title: "333", content: "", url: "" },
        num3: { title: "", content: "", url: "" }
      },
      bannerShow: {},
      news5: [
        {
          article: {
            title: "美国EKS＆H会计师事务所主席一行访问天健",
            date: "2018-04-14",
            content: "",
            type: "天健资讯"
          }
        }
      ]
    };
  },
  mounted() {
    // let self = this;
    // createcode(); //需要触发的函数
    // let $ = this.$;
    // function loop() {
    //   let arr = [];
    //   for (let i in self.news) {
    //     arr.push(self.news[i]); //属性
    //   }
    //   setInterval(function() {
    //     let val = $(".active").attr("data-slide-to");
    //     self.news.num1 = arr[val];
    //   }, 500);
    // }
    // function createcode() {
    //   //-----------------------------------分割线--------------------------------------------
    //   //去后台获取5条新闻
    //   self.axios
    //     .post(self.$url + "companypg/getHomeNews", {
    //       headers: {}
    //     })
    //     .then(function(res) {
    //       console.log(res.data);
    //       self.news5 = res.data;
    //     })
    //     .catch(function(err) {
    //       if (err.response) {
    //         console.log(err.response);
    //       }
    //     });
    //   //------------------------------------分割线---------------------------------------------
    //   //去获取banner ，和轮播图片
    //   self.axios
    //     .post(self.$url + "companypg/getbannner_clien", {
    //       headers: {}
    //     })
    //     .then(function(res) {
    //       self.news = res.data.banner;
    //       loop();
    //     })
    //     .catch(function(err) {
    //       if (err.response) {
    //         console.log(err.response);
    //         //console.log err message
    //       }
    //     });
    // } //createcode  end
    //------------------------------------结束线---------------------------------------------
  },
  methods: {}
};
</script>
<style scoped>
.newcenter > div {
  padding: 4px;
  font-size: 17px;
  color: #fff;
}
.watch {
  display: none;
}
</style>