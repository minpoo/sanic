<template>
  <div>
    <top/>
    <div>
      <div class="logo">
        <img :src="img.img1" width="100%">
      </div>
      <div class="logo">
        <img :src="img.img2" width="100%">
      </div>
      <div class="logo">
        <img :src="img.img3" width="100%">
      </div>
      <div class="logo">
        <img :src="img.img4" width="100%">
      </div>
      <div class="logo">
        <img :src="img.img5" width="100%">
      </div>
      <div>
        <button
          type="button"
          data-toggle="modal"
          data-target="#myModal"
          class="btn btn-primary sub_need"
        >提交需求>></button>
      </div>
      <div class="logo">
        <img :src="img.img7" width="100%">
      </div>
      <div class="logo">
        <img :src="img.img8" width="100%">
      </div>
      <div>
        <button
          type="button"
          data-toggle="modal"
          data-target="#myModal"
          class="btn btn-primary sub_need"
        >立即拥有独一无二的定制LOGO>></button>
      </div>
      <div class="price">
        <div style="color:#fff;font-family:华文琥珀;font-size:30px;padding-top:40px;">LOGO定制服务</div>
        <div style="color:#fff;">总有一款套餐适合你</div>
        <div class="row re">
          <div class="col-3">
            <img :src="img.img9">
            <button
              type="button"
              data-toggle="modal"
              data-target="#myModal"
              class="btn btn-primary sub_need ab"
            >免费获取方案报价</button>
          </div>
          <div class="col-3">
            <img :src="img.img10">
            <button
              type="button"
              data-toggle="modal"
              data-target="#myModal"
              class="btn btn-primary sub_need ab"
            >免费获取方案报价</button>
          </div>
          <div class="col-3">
            <img :src="img.img11">
            <button
              type="button"
              data-toggle="modal"
              data-target="#myModal"
              class="btn btn-primary sub_need ab"
            >免费获取方案报价</button>
          </div>
          <div class="col-3">
            <img :src="img.img12">
            <button
              type="button"
              data-toggle="modal"
              data-target="#myModal"
              class="btn btn-primary sub_need ab"
            >免费获取方案报价</button>
          </div>
        </div>
        <div>
          <img :src="img.img13">
        </div>
      </div>
      <div class="logo" style="margin-top:50px;">
        <img :src="img.img14" width="100%">
      </div>
      <div style="margin-top:20px;">
        <button
          type="button"
          data-toggle="modal"
          data-target="#myModal"
          class="btn btn-primary sub_need"
        >马上告诉我们您的需求>></button>
      </div>
       <div class="logo">
        <img :src="img.img15" width="100%">
      </div>
      <div class="logo">
        <img :src="img.img16" width="90%">
      </div>
      <div class="logo">
        <img :src="img.img17" width="100%">
      </div>

      <div class="modal fade" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content mymo">
            <div class="row">
              <div class="col-7 mycol7">
                <div>免费发布需求</div>
                <div>
                  <button type="button" class="btn" style="width:100%;">我要设计LOGO</button>
                </div>
                <div>
                  <input type="text" class="form-control" placeholder="请输入姓名">
                </div>
                <div>
                  <input type="text" class="form-control" placeholder="请输入电话">
                </div>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-success">提交</button>
              </div>
              <div class="col-5">
                <img :src="img.img6">
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
import top from "@/components/top";
import foot from "@/components/foot";
import img1 from "@/assets/img/home1.png";
import img2 from "@/assets/img/home2.png";
import img3 from "@/assets/img/home3.png";
import img4 from "@/assets/img/home4.png";
import img5 from "@/assets/img/home5.png";
import img6 from "@/assets/img/home6.png";
import img7 from "@/assets/img/home7.png";
import img8 from "@/assets/img/home8.png";
import img9 from "@/assets/img/home9.png";
import img10 from "@/assets/img/home10.png";
import img11 from "@/assets/img/home11.png";
import img12 from "@/assets/img/home12.png";
import img13 from "@/assets/img/home13.png";
import img14 from "@/assets/img/home14.png";
import img15 from "@/assets/img/home15.png";
import img16 from "@/assets/img/home16.png";
import img17 from "@/assets/img/home17.png";
import $ from 'jquery'
export default {
  name: "home",
  components: {
    top,
    foot
  },
  data() {
    return {
      any: { a1: "免费资讯", a2: "更多>>", a3: "有偿资讯" },
      img: {
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
        img5: img5,
        img6: img6,
        img7: img7,
        img8: img8,
        img12: img12,
        img9: img9,
        img10: img10,
        img11: img11,
        img13: img13,
        img14: img14,
        img15: img15,
        img16: img16,
        img17: img17
      }
    };
  },
  mounted() {
    createcode(); //需要触发的函数

    function createcode() {} //createcode  end
    $('html, body').animate({scrollTop:5000},0)
    //------------------------------------结束线---------------------------------------------
  },
  methods: {}
};
</script>
<style scoped>
.logo {
  width: 100%;
}
.sub_need {
  padding: 10px 70px;
}
.mymo {
  padding: 50px;
  width: 700px;
  text-align: left;
}
.mycol7 {
  width: 200px;
}
.mycol7 > div {
  margin-bottom: 20px;
}
.price {
  background: #2b528c;
  padding-bottom: 70px;
}
.ab {
  position: absolute;
  bottom: 20px;
  z-index: 3;
  left: 32px;
}
.re {
  padding: 0 20px;
  margin-top: 40px;
}
.re > div {
  position: relative;
}
</style>