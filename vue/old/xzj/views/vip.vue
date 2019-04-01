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
      >东方生活馆将秉承优质科技内容分享者的态度，致力于为广大科技爱好者提供最前沿的科技资讯。我们会定期搜寻相关科技行业领域文章，为会员们打通进入新兴科技领域的大门</p>
      <p>内容收费随着互联网的深化而没落，但内容这个需求没有没落。天奇阿米巴创投基金投资合伙人魏武挥也这么认为，“内容生产者们，需要一个契机”。而冯大刚口中所谓的大的契机，你可以归因于三个方面：</p>
      <p>一个是知识产权大环境的改善。尽管用户已经习惯了免费阅读，值得欣喜的是，粉丝已经开始逐步对优秀内容自发进行付费。目前中国的版权环境正在改善，比如音乐网站推出付费音乐，视频网站通过会员制对视频内容进行收费等。</p>
      <p>一个是外部技术的推动。包括智能手机、4G、WIFI的普及，移动支付的极度便捷，语音技术的进步等等。</p>
      <p>还有一个，也是最重要的——现在用户真正稀缺的，是时间。中国互联网发展到现在，愿意为内容付费的消费群体已经在扩张，企鹅智酷去年8月的调查中，有55.3%的网民有过为知识付费的行为。</p>
      <p>因此我们也会不遗余力为付费用户提供高质知识，加大互联网知识分享的大军，更多精彩内容，请加入东方生活馆会员。</p>
    </div>

    <div style="margin-top:30px;">
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
      any: { a1: "会员专区" }
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


