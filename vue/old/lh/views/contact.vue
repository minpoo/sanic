<template>
  <div>
    <top/>
    <div>
      <img width="100%" height="180px" src="http://www.liyisy.com/images/inban-hy.jpg" alt srcset>
    </div>
    <!-------------------------------------- 分割线 ---------------------------------->
    <!-- 有偿资讯-head -->
    <div class="row" style="margin-top:50px;margin-bottom:10px;">
      <div class="col-md-2 offset-md-2" style="text-align:left;padding:0;">
        <img src="../assets/img/目录.png" width="30px" srcset>
        <span>{{any.a1}}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-1 offset-md-2" style="border-bottom:5px solid #32bbac;"></div>
      <div class="col-md-7" style="border-bottom:5px solid #ececec;"></div>
    </div>
    <!-- 内容实体 -->
    <div
      style="position:relative;font-size:14px;width:67%;margin:auto;text-align:left;text-indent:25px;color:#666;padding-top:20px;"
    >
     
    </div>

    <div style="margin-top:230px;">
      马上成为会员吧！
      <a
        href="#/register"
        style="color:#fff;"
        class="btn btn-info"
        role="button"
      >注册会员</a>
    </div>
    <foot/>
  </div>
</template>


<script>
import top from "@/components/top.vue";
import foot from "@/components/foot";

export default {
  data: function() {
    return {
      any: { a1: "联系我们" }
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


