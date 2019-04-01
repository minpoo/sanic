<template>
  <div style="text-align:left;">
    <top/>

    <div class="row" style="margin-top:10px;position: relative;">
      <div class="col-8">
        <div id="demo" style="width:870px;" class="carousel slide" data-ride="carousel">
          <!-- 指示符 -->
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <!-- 轮播图片 -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="img[0]" style="width:100%;height:435px">
            </div>
            <div class="carousel-item" style="width:100%;height:435px">
              <img :src="img[1]">
            </div>
            <div class="carousel-item easy" style="width:100%;height:435px">
              <img :src="img[2]">
            </div>
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
      <div class="col-4" style="background:#1977be;color:#fff;width:455px;">
        <div style="height:170px;margin-top:10%;font-size:30px;">{{news.num1.title}}</div>
        <div style="border:1px solid #fff;"></div>
        <div style="font-size:12px;">{{news.num1.content}}</div>
        <div>
          <!-- <router-link style="margin-top:20px;color:#fff;border:1px solid #fff;" :to="news.num1.url" class="btn btn-outline-dark" role="button">了解更多>></router-link> -->
          <a
            style="margin-top:20px;color:#fff;border:1px solid #fff;"
            :href="news.num1.url"
            class="btn btn-outline-dark"
            role="button"
          >了解更多>></a>
        </div>
      </div>
    </div>

    <div class="row" style="margin-top:25px;padding-left:15px;margin-bottom:40px;">
      <div class="col-5">
        <div class="row newcenter">
          <div class="col-3" style="background:#0f4a82;font-weight:500;">新闻中心</div>
          <div class="col-1" style="background:#007fc2;"></div>
          <div class="col-0.5" style="background:#379289;color:#379289;">&nbsp;</div>
          <div class="col-7" style="background:#e4e4e4;text-align:right;">
            <router-link style="color:black;font-size:12px;" to="news">更多>></router-link>
          </div>
        </div>
        <div style="padding-top:10px;">
          <router-link
            :to="{path:'/blank',query: {title:news5[0].article.title}}"
            style="font-weight:bold;"
          >{{news5[0].article.title}}</router-link>
        </div>
        <div
          style="font-size:12px;color:#379289;margin-top:5px;margin-bottom:10px;"
        >{{news5[0].article.date}}</div>

        <div class="row">
          <div class="col-4" style="height:100px;">
            <img
              width="100%"
              src="http://www.pccpa.cn/uploadFiles/images/201801/1_%E5%89%AF%E6%9C%AC.jpg"
              alt
              srcset
            >
          </div>
          <div class="col-8" style="overflow: hidden;font-size:12px;text-indent:2em">
            <div style="height:110px;" v-html="news5[0].article.content.split('</p>')[2]"></div>
          </div>
        </div>

        <div v-for="i in news5.slice(1)" :key="i.id">
          <div class="row" style="font-size:10px;padding-top:20px;color:#999;">
            <div class="col-9" style="border-bottom:1px solid #999;padding:10px 0;">
              <router-link
                :to="{path:'/blank',query: {title:i.article.title}}"
                style="font-weight:bold;color:#555;"
              >{{i.article.title}}</router-link>
            </div>
            <div
              class="col-3"
              style="border-bottom:1px solid #999;text-align:right;padding:5px 0;"
            >{{i.article.date}}</div>
          </div>
        </div>
      </div>
      <div class="col-4" style="height:300px;">
        <div
          style="height:225px;margin-bottom:9px;width:412px;position: relative;margin-left:10px;"
        >
          <a href="http://media.pccpa.cn:8000/150416L.mp4">
            <img
              id="player_jwplayer_display_image"
              src="http://www.pccpa.cn/img/mediaCover.jpg"
              style="width:93%;display: block; position: absolute; cursor: pointer; left: 0px; top: 0px; z-index: 1;  opacity: 1; transform: scale(1.02837, 0.938462) translate(6px, -9px);"
            >
          </a>
        </div>
        <div
          style="background:#4f8bbf;height:200px;text-align:center;width:395px;margin-left:10px;padding-top:20px;"
        >
          <div
            style="font-weight:bold;padding-top:15px;padding-bottom:10px;font-size:24px;color:#fff;"
          >我们的视频</div>
          <div style="border-top:1.5px solid #fff;width:70%;margin:auto"></div>
          <div>
            <a
              style="margin-top:12px;color:#fff;border:1px solid #fff;"
              href="http://media.pccpa.cn:8000/150416L.mp4"
              class="btn btn-outline-dark"
              role="button"
            >天健形象宣传片《天行健》</a>
          </div>
        </div>
      </div>
      <div class="col-3" style="padding:0;text-align:right;height:390px;">
        <div style="height:86px;margin-bottom:29px;">
          <a
            :href="this.$url+'cloud/pg/%E7%B4%A0%E6%9D%90/%E7%AE%80%E4%BB%8Bpdf/%E5%A4%A9%E5%81%A5%E7%AE%80%E4%BB%8B2018.pdf'"
          >
            <img width="300px" height="90px" src="../assets/img/home-c1.jpg">
          </a>
        </div>
        <div style="height:86px;margin-bottom:29px;">
          <router-link to="contact">
            <img width="300px" height="90px" src="../assets/img/home-c2.jpg" alt srcset>
          </router-link>
        </div>
        <div style="height:86px;margin-bottom:29px;">
          <router-link to="add">
            <img width="300px" height="90px" src="../assets/img/home-c3.jpg" alt srcset>
          </router-link>
        </div>
        <div style="height:86px;">
          <a :href="this.$url+'#/blank?title=%E8%90%A5%E4%B8%9A%E6%89%A7%E7%85%A7'">
            <img width="300px" height="90px" src="../assets/img/home-c4.jpg" alt srcset>
          </a>
        </div>
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
    let self = this;
    createcode(); //需要触发的函数
    let $ = this.$;
    function loop() {
      let arr = [];
      for (let i in self.news) {
        arr.push(self.news[i]); //属性
      }
      setInterval(function() {
        let val = $(".active").attr("data-slide-to");
        self.news.num1 = arr[val];
      }, 500);
    }

    function createcode() {
      //-----------------------------------分割线--------------------------------------------
      //去后台获取5条新闻
      self.axios
        .post(self.$url + "companypg/getHomeNews", {
          headers: {}
        })
        .then(function(res) {
          console.log(res.data);
          self.news5 = res.data;
        })
        .catch(function(err) {
          if (err.response) {
            console.log(err.response);
          }
        });

      //------------------------------------分割线---------------------------------------------
      //去获取banner ，和轮播图片
      self.axios
        .post(self.$url + "companypg/getbannner_clien", {
          headers: {}
        })
        .then(function(res) {
          self.news = res.data.banner;
          loop();
        })
        .catch(function(err) {
          if (err.response) {
            console.log(err.response);
            //console.log err message
          }
        });
    } //createcode  end
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