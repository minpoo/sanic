<template>
  <div>
    <top/>

    <!--------------------------------------------- 分割线 ---------------------------------->
    

    <!-- LOGO图 -->
    <div>
       <router-link to="/vip" style="color:#999;font-size:13px;">
         <img src="../assets/timg.jpg" alt="" srcset="">
       </router-link>
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
              <a :href="i.src" target="_blank" rel="noopener noreferrer">
               <span style="margin-right:30px;">{{i.a1}}</span>
              </a>
              <span style="margin-right:30px;">{{i.a2}}</span>
              <span style="margin-right:30px;">{{i.a3}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  
    <hr style="width:70%;margin:auto;margin-top:20px;">
    <div style="margin-top:30px;">
      马上成为会员吧！
      <a href="#/register" class="btn btn-info" role="button">注册会员</a>
    </div>

    <foot/>
  </div>
</template>




<script>
import top from "@/components/top";
import foot from "@/components/foot";
import img1 from "@/assets/y1.png";
import img2 from "@/assets/y2.png";

export default {
  name: "home",
  components: {
    top,
    foot
  },
  data() {
    return {
      any: { a1: "免费游戏", a2: "更多>>", a3: "有偿资讯" },
      img: { a1: "http://www.liyisy.com/images/arc6.png" },
      content: [
        {
          title: "坦克大决战",
          content:
            "《坦克大决战》是一款休闲射击类手机游戏。游戏中有呆萌帅气的战车，美轮美奂的战斗场景！让玩家充分享受百变造型让战车富有个性，战斗中玩家需要互相配合在不同环境下选择适当的技能来击败对手，整场战斗充满策略性和趣味性。",
          a1: "安卓下载",
          img:img1,
          src: "http://sj.img4399.com/game_list/416/com.newcoco.mlbt.m4399/game.v332398.apk"
        },
        {
          title: "王牌御史",
          content:"作为一名新入学的「夜部御史」，我深深地担忧，我们这届夜部，会不会就是，就是那个，老师和校长们常常挂在嘴边的那个，对就是那个——最差的一届”你问我夜部御史是什么？我怎么会告诉你是沟通两界、降妖除魔的特职人员呢？介绍一下我的同学。我的同桌，是一个暴力少女，手撕熊妖不眨眼的那种！",

          a1: "安卓下载",
          img: img2,
          src: "http://sj.img4399.com/game_list/437/com.taiyouxi.pk.m4399/game.v332295.apk"
        },
        
      ],
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