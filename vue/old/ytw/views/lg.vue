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

     <hr style="color:#ececec;">
     <div style="color:#a8a8a8;text-align:left;padding-left:67px;">共有30,522个结果</div>
     <div class="row" style="width:80%;margin:auto;margin-top:20px;">
       <div  class="col-3 all2">
         <div>
           <router-link to="a5"><img width="100%" src="../assets/img/lg1.png"></router-link>
         </div>
         <div>
           <router-link to="a7"><img width="100%" src="../assets/img/lg2.png"></router-link>
         </div>
       </div>
       <div class="col-3">
         <div>
           <router-link to="a6"><img width="100%" src="../assets/img/lg3.png"></router-link>
         </div>
         <div>
           <router-link to="a8"><img width="100%" src="../assets/img/lg4.png"></router-link>
         </div>
       </div>
       <div class="col-3">
         <div>
           <router-link to="a9"><img width="100%" src="../assets/img/lg5.png"></router-link>
         </div>
         <div>
           <router-link to="a10"><img width="100%" src="../assets/img/lg6.png"></router-link>
         </div>
       </div>
       <div class="col-3">
         <div>
           <router-link to="a9"><img width="100%" src="../assets/img/lg7.png"></router-link>
         </div>
         <div>
           <router-link to="a10"><img width="100%" src="../assets/img/lg8.png"></router-link>
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
       ti:["类型：","全部","手机界面","网页界面","H5","图标设计","动效设计","手机主题","平面设计"],
       ti2:["筛选：", "综合排序","灵感集","下载排序","浏览排序","近期上传"]
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


