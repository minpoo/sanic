<template>
    <div>
       <top/>
         <div style="margin-bottom:70px;">
            <div><img src="../../assets/img/banner-services.jpg"></div>
            <div class="row" style="margin-top:30px;">
              <div class="col-2">
                <div style="font-weight:bold;color:#fff;font-size:30px;background:#3a8bc8;border-top:5px solid #4ca7d3;padding:10px;">关于天健</div>
                <ul class="nav flex-column">
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/about">天健简介</router-link>
                  </li>
                  <li class="nav-item">
                    <a id="one" @mouseenter="changeColor($event)"  @mouseleave="changeColorOut"  style="background:#7ebeef;color:#fff;" class="nav-link disabled" href="#/list/hrshow">人力资源</a>
                  </li>
                  
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/organization">组织架构</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/certification">执业资质</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link class="nav-link disabled" @mouseenter="changeColor" @mouseleave="changeColorOut" to="/list/culture">天健文化</router-link>
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
                  <div class="row" style="color:#555;padding-top:80px;text-align:left;letter-spacing:2px;">
                    <div class="col-8" style="text-indent: 30px">
                      <div style="text-indent:0px;color:#2c81ba;font-size:18px;font-weight:bold;">
                        合伙人团队
                      </div>
                      <p style="margin-top:10px;">
                        天健拥有一支专业、敬业、团结、活力的合伙人团队。目前共有合伙人170余名，涵盖审计、审阅、税务和咨询等各个领域。其中有17名教授级高级会计师；先后有10名合伙人担任中国证监会主板发行审核委员会、创业板发行审核委员会和中国注册会计师协会专职访问研究员；现有一名合伙人担任中共中国注册会计师行业委员会委员、中国会计准则委员会委员；一名合伙人担任中国审计准则委员会委员；一名合伙人曾任全国政协委员，三名合伙人担任省政协委员。
                      </p>

                      <p style="margin-top:50px;">
                        他们具有丰富的专业经验、深厚的专业知识、精湛的职业素养、出色的管理能力、敏锐的洞察力。他们重视客户需求，坚守质量导向，注重以人为本和团结协作，全面高效地为客户提供各种优质专业的服务。
                      </p>

                      <div style="margin-top:30px;text-indent:0px;color:#2c81ba;font-size:18px;font-weight:bold;">
                        天健的员工
                      </div>
                      

                      <p style="margin-top:10px;">
                        拥有优秀的员工和成熟的团队是天健能够为企业提供专业服务的坚实基础。天健拥有从业人员近5200名，其中拥有博士、硕士学位和会计、审计、经济、工程技术等高级专业职称的人员500余名，注册会计师1600余名，注册会计师行业领军人才33名，有60余位从业人员拥有境外执业会计师资格。员工平均年龄27岁。
                      </p>
                      
                      <p style="margin-top:50px;">
                        良好教育背景和较深专业造诣的后起之秀与经验丰富的资深专家共同组成了一支整体业务素质较高、职业道德优良、年龄结构合理的执业队伍。自强不息、厚德载物是天健的精神追求；勤勉敬业、勇于开拓、吃苦耐劳、团结奋进，始终是天健的精神风尚。
                      </p>


                       <div>
                         <img src="../../assets/img/pic-w530-h310-1.jpg" alt="" srcset="">
                       </div>



                   

                    </div>
                    <div class="col-4">
                      <img src="../../assets/img/banner-w450-h300-1.jpg" alt="" srcset="">
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
      val:{menu:"人力资源"},
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


