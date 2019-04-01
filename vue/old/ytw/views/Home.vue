<template>
  <div>
    <top/>



   <!-- <div class="carousel-item active">
          <img src="http://pic.97uimg.com//indexbanner_pic/00/39/77/10/97ui818ps.png">
        <div class="carousel-item">
          <img src="http://pic.97uimg.com//indexbanner_pic/00/39/77/10/5f8bfd1053a0f07a592e76a00e60d2ec.jpg">
        </div>
        <div class="carousel-item">
           <img src="http://pic.97uimg.com/indexbanner_pic/00/39/77/10/zihun_youjie.jpg">
        </div> -->


    <!--------------------------------------------- 分割线 ---------------------------------->
    <!-- 图片轮播 -->
    <div id="demo" class="carousel slide" data-ride="carousel">
      <!-- 指示符 -->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <!-- 轮播图片 -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img width="100%" src="http://pic.97uimg.com/indexbanner_pic/00/39/77/10/zihun_youjie.jpg">
        </div>
        <div class="carousel-item">
          <img width="100%" src="http://pic.97uimg.com//indexbanner_pic/00/39/77/10/5f8bfd1053a0f07a592e76a00e60d2ec.jpg">
        </div>
        <div class="carousel-item">
          <img width="100%" src="http://pic.97uimg.com//indexbanner_pic/00/39/77/10/97ui818ps.png">
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

    <!--------------------------------------------- 分割线 ---------------------------------->
    <div class="row" style="text-align:center;margin-top:30px;">
      <div class="col-3" >
        <router-link to>
          <img width="150px" src="../assets/h1.png" alt="" srcset="">
        </router-link>
      </div>
      <div class="col-3">
        <router-link to>
         <img width="150px" src="../assets/h2.png" alt="" srcset="">
         </router-link>
      </div>
      <div class="col-3">
        <router-link to>
        <img width="150px" src="../assets/h3.png" alt="" srcset="">
        </router-link>
      </div>
      <div class="col-3">
        <router-link to>
        <img width="150px" src="../assets/h4.png" alt="" srcset="">
        </router-link>
      </div>
    </div>

    <!-- 大家都在看 -->
    <div>
      <img width="80%" src="../assets/s1.png" alt="" srcset="">
    </div>

    <!--------------------------------------------- 分割线-内容部分 ---------------------------------->
    <div  class="row cll" style="padding:0px 5%;">
      <div class="col-3">
        <div>
          <a href="https://huke88.com">
           <img src="../assets/cs1.png" width="230px" alt="" srcset="">
          </a>
        </div>
        <div style="margin-top:30px;">
          <router-link to="a2">
           <img src="../assets/cs2.png" width="230px" alt="" srcset="">
          </router-link>
        </div>
         <div style="margin-top:30px;">
          <router-link to="a2">
           <img src="../assets/cs3.png" width="230px" alt="" srcset="">
          </router-link>
        </div>
      </div>
      <div class="col-3">
        <div>
          <router-link to="a1">
           <img src="../assets/cs4.png" width="230px" alt="" srcset="">
          </router-link>
        </div>
        <div>
          <router-link to="a1">
           <img src="../assets/cs5.png" width="230px" alt="" srcset="">
          </router-link>
        </div>
        <div>
          <router-link to="a1">
           <img src="../assets/cs6.png" width="230px" alt="" srcset="">
          </router-link>
        </div>
      </div>
      <div class="col-3">
        <div>
          <router-link to="a3">
           <img src="../assets/cs7.png" width="230px" alt="" srcset="">
          </router-link>
        </div>
        <div>
          <router-link to="a1">
           <img src="../assets/cs8.png" width="230px" alt="" srcset="">
          </router-link>
        </div>
        <div>
          <router-link to="a1">
           <img src="../assets/cs9.png" width="230px" alt="" srcset="">
          </router-link>
        </div>
      </div>
      <div class="col-3">
        <div>
          <router-link to="a4">
           <img src="../assets/cs10.png" width="230px" alt="" srcset="">
          </router-link>
        </div>
        <div>
          <router-link to="a1">
           <img src="../assets/cs11.png" width="230px" alt="" srcset="">
          </router-link>
        </div>
        <div>
          <router-link to="a1">
           <img src="../assets/cs12.png" width="230px" alt="" srcset="">
          </router-link>
        </div>
      </div>
    </div>

    <foot/>
  </div>
</template>




<script>
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
      any: { a1: "免费资讯", a2: "更多>>", a3: "有偿资讯" },
    };
  },
  mounted() {
    createcode(); //需要触发的函数

    function createcode() {} //createcode  end
    //------------------------------------结束线---------------------------------------------
  },
  methods: {}
};
</script>
<style scoped>
#u {
  position: absolute;
}
.cll>div>div{margin-top:20px;}
</style>