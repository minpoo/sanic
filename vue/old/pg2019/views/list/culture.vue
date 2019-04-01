<template>
    <div>
       <top/>
         <div style="margin-bottom:70px;">
            <div><img :src="this.$url+'images/companypg/banner-about.jpg'" alt="" srcset=""></div>
            <div class="row" style="margin-top:30px;">
              <div class="col-2">
                <div style="font-weight:bold;color:#fff;font-size:30px;background:#3a8bc8;border-top:5px solid #4ca7d3;padding:10px;">关于天健</div>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/about">天健简介</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/hrshow">人力资源</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/organization">组织架构</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/certification">执业资质</router-link>
                  </li>
                  <li class="nav-item">
                   
                   <a id="one" @mouseenter="changeColor($event)"  @mouseleave="changeColorOut"  style="background:#7ebeef;color:#fff;" class="nav-link disabled" href="#/list/culture">天健文化</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" href="#"></a>
                  </li>
                </ul>
              </div>
              <div class="col-10">
                <div>
                    <div style="float:left;color:#2c81ba;font-size:28px;font-weight:bold;">{{val.menu}}</div>
                    <div style="float:right;font-size:11px;padding-right:2%;line-height:41.25px;margin-bottom:10px;">
                      <router-link to="/">首页</router-link>-<router-link to="/">关于天健</router-link>-<router-link to="/news">{{val.menu}}</router-link>
                    </div>
                </div>
                <div style="border-top:1.5px solid #666;clear:both;margin-right:2%">
                 <p style="text-align:left;margin-top:70px;">
                       天健在长期的执业过程中，积累深厚的文化底蕴：
                 </p>
                   <div style="color:#2c81ba;font-weight:bold;font-size:18px;">天健文化建设纲要</div>
                 <p>
                      中华一流 世界著名的愿景
                      <br>
                      专业报国 服务社会的宗旨
                      <br>
                      立足本土 面向国际的视野
                      <br>
                      规范执业 稳健经营的理念
                      <br>
                      一业为主 多元发展的战略
                      <br>
                      质量导向 信誉至上的方针
                      <br>
                      诚信客观 公正独立的原则
                      <br>
                      以人为本 和谐团结的风尚
                      <br>
                      专注专业 崇尚学习的氛围
                      <br>
                      自强不息 厚德载物的精神
                 </p>

                  <div style="color:#2c81ba;font-weight:bold;font-size:18px;">文化精髓</div>
                  <p>
                      天行健 君子以自强不息
                      <br>
                      地势坤 君子以厚德载物
                  </p>


                  <div style="color:#2c81ba;font-weight:bold;font-size:18px;">核心价值观</div>
                  <p>
                      诚信 公正 务实 专业
                  </p>


                </div>
              </div>
            </div>  
       </div>


















       <foot/>
    </div>
</template>


<script>
import top from '@/components/top.vue'
import foot from '@/components/foot'
import $ from 'jquery'
let notClick=true;
export default {
  name: 'leftm',
   props: {
    sendval: Array,
    required: true,
  },
    data: function () {
    return {
      isActive: true,
      hasError: false,
      val:{menu:"天健文化"},
      content:"",
      test:""
    }
  },
  computed: {
  classObject: function () {
    return {
     
    }
  }
  },
  mounted:function(){
       let self=this

       createcode();//需要触发的函数
      function createcode() {

//-------------------------------去后台获取新闻列表-----------------------------------------------------
        let menu=self.val.menu
         self.axios.post(self.$url+'companypg/getNewsList',{menu})
                    .then(function(res){
                      console.log(res.data)
                      self.content=res.data
 
                    })
                    .catch(function(err){
                        if(err.response) {
                        console.log(err.response)
                            //console.log err message
                        }
                    })

      }

  },
  methods: {
    changeColor: function (event) {
        $('.flex-column a').css({'color':'#666',"background":"#fff"})
        $(event.target).css({'color':'#fff',"background":"rgb(62, 189, 147)"}) 
    },
    changeColorOut: function () {
        if(notClick){
        $('.flex-column a').css({'color':'#666',"background":"#fff"})
        $('#one').css({'color':'#fff',"background":"#7ebeef"})
        }
    },
  },
  components: {
    top,
    foot,
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flex-column a:hover{color: #fff;background: rgb(62, 189, 147)}
  a{color:#555}
  a:hover{color:goldenrod;}
</style>


