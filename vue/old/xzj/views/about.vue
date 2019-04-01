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
    <div style="font-size:14px;width:67%;margin:auto;text-align:left;text-indent:25px;color:#666;">
      <p
        style="margin-top:20px;"
      >东方生活馆以国内外高科技行业的业内信息获取分享为依托，努力打造一个互联网科技内容分享平台，我们与各大科技公司、院校合作和研究机构合作，获取第一手科技资讯</p>
      <p>现阶段我们覆盖的科技行业包括IT，人工智能，医疗与生物科技，未来我们将拓展到工程建筑，航空航天等更加高端的科技领域中</p>
      <p>对科技资讯的追求是我们的初衷，我们期待为中国互联网科技资讯行业注入一股新的力量，满足越来越多的互联网科技爱好者们对前沿资讯的需求。</p>
    </div>

    <div style="margin-top:230px;">
      想要阅读海量会员优质文章吗？马上成为东方生活馆会员吧！
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
      any: { a1: "关于生活馆" }
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


