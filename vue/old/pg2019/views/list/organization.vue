<template>
    <div>
       <top/>
         <div style="margin-bottom:70px;">
            <div><img width="100%" src="../../assets/img/banner-services.jpg"></div>
            <div class="row" style="margin-top:30px;">
              <div class="col-2">
                <div style="font-weight:bold;color:#fff;font-size:30px;background:#3a8bc8;border-top:5px solid #4ca7d3;padding:10px;">关于坤元</div>
                <ul class="nav flex-column">
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/about">坤元简介</router-link>
                  </li>
                  <li class="nav-item">
                   <a id="one" @mouseenter="changeColor($event)"  @mouseleave="changeColorOut"  style="background:#7ebeef;color:#fff;" class="nav-link disabled" href="#/list/organization">组织架构</a>
                  </li>
                  <!-- <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/hrshow">人力资源</router-link>
                  </li>
                  
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/certification">执业资质</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/culture">天健文化</router-link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" href="#"></a>
                  </li> -->
                </ul>
              </div>
              <div class="col-10">
                <div>
                    <div style="float:left;color:#2c81ba;font-size:28px;font-weight:bold;">{{val.menu}}</div>
                    <div style="float:right;font-size:11px;padding-right:2%;line-height:41.25px;margin-bottom:10px;">
                      <router-link to="/">首页</router-link>-<router-link to="/">关于坤元</router-link>-<router-link to="/news">{{val.menu}}</router-link>
                    </div>
                </div>
                <div style="border-top:1.5px solid #666;clear:both;margin-right:2%">
                  <div class="row" style="text-indent: 30px;color:#555;padding-top:80px;text-align:left;letter-spacing:2px;">
                       <p>
                         坤元目前下设资产评估一部、资产评估二部、资产评估三部，房地产评估部、保险公估部等业务部门和办公室、专业标准部、财务部及其他后勤保障部门。拥有三家分公司：坤元资产有限公司上海分公司、坤元资产有限公司安徽分公司、坤元资产评估有限公司湖北公公司。
                       </p>
                       <div style="text-align:center;">
                         <img src="../../assets/img/pic-w940-h780-1.jpg" alt="" srcset="">
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
      val:{menu:"组织架构"},
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


