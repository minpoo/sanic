<template>
  <div>
    <top/>
    <serch/>
     <div class="all" style="font-size:14px;text-align:left;width:90%;margin:auto;margin-top:30px;" >
        <span v-for="i in ti" :key="i.id">{{i}}</span>
     </div>
     <div class="all" style="font-size:14px;text-align:left;width:90%;margin:auto;margin-top:10px;" >
        <span v-for="i in ti2" :key="i.id">{{i}}</span>
     </div>
     <div style="text-align:left;width:80%;padding-left:67px;margin-top:5px;">
       <img width="400px" src="../assets/s4.png" >
     </div>

     <hr style="color:#ececec;">
     <div style="color:#a8a8a8;text-align:left;padding-left:67px;">共有30,522个结果</div>
     <div class="row" style="width:80%;margin:auto;margin-top:20px;">
       <div  class="col-4 all2">
         <div>
           <router-link to="a5"><img width="100%" src="../assets/img/bg7.png"></router-link>
         </div>
         <div>
           <router-link to="a7"><img width="100%" src="../assets/img/bg8.png"></router-link>
         </div>
       </div>
       <div class="col-4">
         <div>
           <router-link to="a6"><img width="100%" src="../assets/img/bg9.png"></router-link>
         </div>
         <div>
           <router-link to="a8"><img width="100%" src="../assets/img/bg10.png"></router-link>
         </div>
       </div>
       <div class="col-4">
         <div>
           <router-link to="a9"><img width="100%" src="../assets/img/bg11.png"></router-link>
         </div>
         <div>
           <router-link to="a10"><img width="100%" src="../assets/img/bg12.png"></router-link>
         </div>
       </div>
     </div>

    <foot/>
  </div>
</template>


<script>
import top from "@/components/top.vue";
import foot from "@/components/foot";
import serch from "@/components/serch";

export default {
  data: function() {
    return {
      any: { a1: "免费资讯", a2: "更多>>", a3: "有偿资讯", a4: "推荐阅读" },
       ti:["类型：","全部","手机ui样机","网页ui样机","iPad 样机","Apple Watch样机","logo样机","VI样机","包装样机","名片样机","海报/广告牌样机","画册样机","其他样机"],
       ti2:["排序：","默认","周下载排行","热门下载","热门收藏","新上传"]
    };
  },
  mounted: function() {},
  methods: {},
  components: {
    top,
    foot,
    serch
  }
};
</script>

<style scoped>
a {
  color: #666;
}
.all>span{margin-right:20px; }
.all>span:hover{cursor: pointer;color: deepskyblue}
.all2 img{width: 100%}
</style>


