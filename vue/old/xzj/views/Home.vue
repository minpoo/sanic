<template>
  <div>
    <top/>

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
          <img width="100%" src="https://static.runoob.com/images/mix/img_fjords_wide.jpg">
        </div>
        <div class="carousel-item">
          <img width="100%" src="https://static.runoob.com/images/mix/img_nature_wide.jpg">
        </div>
        <div class="carousel-item">
          <img width="100%" src="https://static.runoob.com/images/mix/img_mountains_wide.jpg">
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

    <!-------------------------------------- 分割线 ---------------------------------->
    <!-- 免费资讯-head -->
    <div class="row" style="margin-top:50px;margin-bottom:10px;">
      <div class="col-md-2 offset-md-2" style="text-align:left;padding:0;">
        <img src="../assets/img/目录.png" width="30px" srcset>
        <span>{{any.a1}}</span>
      </div>
      <div class="col-md-3 offset-md-4">
        <router-link to style="color:#999;font-size:13px;">{{any.a2}}</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-1 offset-md-2" style="border-bottom:5px solid #32bbac;"></div>
      <div class="col-md-7" style="border-bottom:5px solid #ececec;"></div>
    </div>
    <!-- 免费资讯-内容部分 -->
    <div v-for="i in content" :key="i.id">
      <div style="margin-top:20px;text-align:left;">
        <div class="row" style="height:130px;overflow: hidden;">
          <div class="col-md-2 offset-md-2">
            <img :src="i.img" width="100%">
          </div>
          <div class="col-6">
            <div>
              <router-link :to="i.src">{{i.title}}</router-link>
            </div>
            <div style="font-size:13px;color:#666;margin-top:10px;">{{i.content}}</div>
            <div style="color:#666; margin-top:10px;font-size:14px;">
              <span style="margin-right:30px;">{{i.a1}}</span>
              <span style="margin-right:30px;">{{i.a2}}</span>
              <span style="margin-right:30px;">{{i.a3}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-------------------------------------- 分割线 ---------------------------------->
    <!-- 有偿资讯-head -->
    <div class="row" style="margin-top:50px;margin-bottom:10px;">
      <div class="col-md-2 offset-md-2" style="text-align:left;padding:0;">
        <img src="../assets/img/目录.png" width="30px" srcset>
        <span>{{any.a3}}</span>
      </div>
      <div class="col-md-3 offset-md-4">
        <router-link to style="color:#999;font-size:13px;">{{any.a2}}</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-1 offset-md-2" style="border-bottom:5px solid #32bbac;"></div>
      <div class="col-md-7" style="border-bottom:5px solid #ececec;"></div>
    </div>
    <!-- 有偿资讯-内容部分 -->
    <div v-for="i in content2" :key="i.id">
      <div style="margin-top:20px;text-align:left;">
        <div class="row" style="height:130px;overflow: hidden;">
          <div class="col-md-2 offset-md-2" style="position:relative;">
            <img :src="i.img" width="100%">
            <div
              style="padding-left:10px;line-height:30px;width:50px;height:30px;color:#fff;font-size:13px;position:absolute;top:0px;left:15px;background:#45bcb2;"
            >会员</div>
          </div>
          <div class="col-6">
            <div>
              <router-link to>{{i.title}}</router-link>
            </div>
            <div style="font-size:13px;color:#666;margin-top:10px;">{{i.content}}</div>
            <div style="color:#666; margin-top:10px;font-size:14px;">
              <span style="margin-right:30px;">{{i.a1}}</span>
              <span style="margin-right:30px;">{{i.a2}}</span>
              <span style="margin-right:30px;">{{i.a3}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr style="width:70%;margin:auto;margin-top:20px;">
    <div style="margin-top:30px;">
      想要阅读海量会员优质文章吗？马上成为东方生活馆会员吧！
      <a href="#/register" class="btn btn-info" role="button">注册会员</a>
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
      img: { a1: "http://www.liyisy.com/images/arc6.png" },
      content: [
        {
          title: "清单来了！中国对这些原产于美国的进口商品加征关税",
          content:
            "为维护我国利益，平衡因美国对进口钢铁和铝产品加征关税（即232措施）给我国利益造成的损失，国务院关税税则委员会决定对原产于美国的部分进口商品中止关税减让义务。",
          a1: "作者：Amanda Onion",
          a2: "时间：2018-04-1",
          a3: "阅读：3279",
          img: "http://www.liyisy.com/images/arc6.png",
          src: "a6"
        },
        {
          title: "自动驾驶再致命 特斯拉又出车祸",
          content:
            "美国电动汽车制造商特斯拉公司3月30日说，数天前一起特斯拉汽车致命车祸中，事发时汽车的自动辅助驾驶功能处于使用状态，驾车人双手没有放在方向盘上。这是特斯拉汽车在自动辅助驾驶状态下在美国第二起致命车祸。",
          a1: "作者：Haifeng Xu等",
          a2: "时间：2018-04-1",
          a3: "阅读：3279",
          img: "http://www.liyisy.com/images/arc7.png",
          src: "a7"
        },
        {
          title: "高铁设座卖高价茶 热评：哥卖的不是茶，是座位",
          content:
            "在中国，铁路部门向来有“铁老大”之称，自然是舆论场上的常客，是人们议论的对象，是非争议不断，说是争议，其实主要是批评和指责，尤其是在人满为患的春运时节。现在不是春运的“尖峰时刻”，原本少人关注，但因为在高铁的餐车内卖茶而被消费者投诉，遂引发了舆论的围观和吐槽。",
          a1: "作者：张利",
          a2: "时间：2018-04-1",
          a3: "阅读：3279",
          img: "http://www.liyisy.com/images/arc8.png",
          src: "a8"
        },
        {
          title: "人工智能在医疗中的应用丨“AI+传统行业”全盘点",
          content:
            "此次“AI+传统行业”专题，通过盘点人工智能在医疗、金融、零售、安防、教育、广告等多个传统行业的应用，见证AI的商业化与落地。未来我们将针对各个垂直行业，进行更加纵深的采访和解读，为大家提供最新、最典型的AI商业化案例。",
          a1: "作者：张利",
          a2: "时间：2018-04-1",
          a3: "阅读：3279",
          img: "http://www.liyisy.com/images/arc9.png",
          src: "a9"
        },
        {
          title: "亚马逊数据专家十年经验总结：成为数据科学家的关键四步",
          content:
            "对于数据科学家这一职业，你了解多少？——这是个被大公司追捧的职位，供不应求，待遇特别高。职场里“数据科学家”的招聘相当火爆，各种线上线下的培训课程野蛮生长。理解动物早期演化机制提供关键线索。",
          a1: "作者：程三川",
          a2: "时间：2018-04-1",
          a3: "阅读：3279",
          img: "http://www.liyisy.com/images/arc10.png",
          src: "a10"
        }
      ],
      content2: [
        {
          img: "http://www.liyisy.com/images/arc1.png",
          title: "周岁雄安：新时代奋斗交响曲的精彩篇章",
          content:
            "文不过夜，事不隔日。自从去年4月1日连夜入驻容城县奥威大厦，这座雄安新区党工委、管委会的办公楼就常常彻夜长明。走路带风，熬夜奋斗，是雄安这一年的常态。",
          a1: "作者：arXiv志愿者小组",
          a2: "时间：2018-04-1",
          a3: "阅读：3279",
          src: "a1"
        },
        {
          img: "http://www.liyisy.com/images/arc2.png",
          title: "看新一轮国家机构改革做好利国利民大文章",
          content:
            "“深化党和国家机构改革全面启动，标志着全面深化改革进入了一个新阶段。”3月28日，2018两会之后的中央全面深化改革委员会第一次会议上，习近平强调。",
          a1: "作者：石戈",
          a2: "时间：2018-04-1",
          a3: "阅读：3279",
          src: "a2"
        },
        {
          img: "http://www.liyisy.com/images/arc3.png",
          title: "贸易战无法解决中美贸易失衡问题",
          content:
            "　　近期美国以中美贸易不平衡为由，对中国先采取滥用贸易救济措施的做法，接着挥舞美国国内生锈的301调查大棒，威胁要对中国600亿美元的商品征收高额关税",
          a1: "作者：漆桂林等",
          a2: "时间：2018-04-1",
          a3: "阅读：3279",
          src: "a3"
        },
        {
          img: "http://www.liyisy.com/images/arc4.png",
          title:
            "激发亿万人民创造力 再创伟大奇迹——落实两会精神迈向科技强国新征程",
          content:
            "“发展是第一要务，人才是第一资源，创新是第一动力”“中国人民的创造精神正在前所未有地迸发出来”“只要13亿多中国人民始终发扬这种伟大创造精神，我们就一定能够创造出一个又一个人间奇迹”……今年全国两会期间，习近平总书记多次强调创新之重要。",
          a1: "作者：曾定方",
          a2: "时间：2018-04-1",
          a3: "阅读：3279",
          src: "a4"
        },
        {
          img: "http://www.liyisy.com/images/arc5.png",
          title:
            "【中国梦·大国工匠篇】“门外汉”变“首席技师”：新时代“王进喜”的进化论",
          content:
            "1989年，21岁的邓远平还是一名普通的钻井工。那是一个冬天，在钻探新场气田第一口井的时候，发生了严重的井喷事故，喷射高度超过了42米的钻塔，在井口失控的情况下，钻探队组织了8个人的“敢死队”进入井口，抢换控制阀门组，邓远平就是其中之一。",
          a1: "作者：暂无",
          a2: "时间：2018-04-1",
          a3: "阅读：3279",
          src: "a5"
        }
      ]
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
</style>