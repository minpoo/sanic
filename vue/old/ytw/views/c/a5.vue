<template>
  <div>
    <top/>
    <div style="border:1px solid #ececec;width:70%;margin:auto;">
      <div class="row" style="padding:30px;">
        <div class="col-6" style="line-height:40px;text-align:left;">{{any.a1}}</div>
        <div class="col-2">
          <a href="#" style="padding:10px 48px;" class="btn btn-danger" role="button">找相似</a>
        </div>
        <div class="col-2">
          <a href="#" style="padding:10px 55px;" class="btn btn-success" role="button">收藏</a>
        </div>
        <div class="col-2">
          <a href="#" style="padding:10px 30px;" class="btn btn-success" role="button">下载源文件</a>
        </div>
      </div>
      <div style="background:#f6f6f6;">
        <img width="80%" :src="any.src1">
      </div>
      <div style="color:#666;font-size:13px;height:50px;line-height:50px;">
        <div style="float:left;padding-left:30px;">{{any.a1}}</div>
        <div style="float:right;padding-right:30px;">238,696</div>
      </div>

    </div>
    

    <foot/>
  </div>
</template>


<script>
import top from "@/components/top.vue";
import foot from "@/components/foot";
import img1 from "@/assets//img/b5.png";

export default {
  data: function() {
    return {
      any: {a1:"科技线条与蓝色背景高清图片..(4500×8000)",src1:img1},
    };
  },
  mounted: function() {},
  methods: {},
  components: {
    top,
    foot
  }
};
</script>

<style scoped>

</style>


